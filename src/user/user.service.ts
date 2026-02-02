import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { BaseService } from 'src/common/BaseService';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Roles } from 'src/enum';
import { CryptoService } from 'src/utils/Crypto';

@Injectable()
export class UserService
  extends BaseService<CreateUserDto, UpdateUserDto, User>
  implements OnModuleInit
{
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
    private readonly crypto: CryptoService,
  ) {
    super(userRepo);
  }

  async onModuleInit() {
    const existsSuperAdmin = await this.getRepository.findOne({where: { role: Roles.SUPERADMIN }});
    if (!existsSuperAdmin) {
      const superAdmin = this.getRepository.create({
        username: 'superadmin',
        password: await this.crypto.decrypt('Superadmin1!'),
        phoneNumber: '+998881381434',
        role: Roles.SUPERADMIN,
      });
      await this.getRepository.save(superAdmin);
    }
  }
}
