import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './create-user.event';

@Injectable()
export class AppService {
  handleGetUser(data: CreateUserEvent) {
    console.log('handleGetUser - COMMUNICATIONS', data)
  }

  handleUserCreated(data: CreateUserEvent) {
    console.log('handleUserCreated - COMMUNICATIONS', data)
  }
}
