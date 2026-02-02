import { Injectable } from '@nestjs/common';
import { hash, compare } from 'bcrypt';

@Injectable()
export class CryptoService {
  async decrypt(data: string) {
    return hash(data, 7);
  }

  async encrypt(data: string, hashedData: string) {
    return compare(data, hashedData);
  }
}
