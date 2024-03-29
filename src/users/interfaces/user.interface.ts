import { Document } from 'mongoose';
export interface User extends Document {
  email: string;
  readonly password: string;
  isAdmin: boolean;
  firstname: string;
  lastname: string;
  phone: string;
  avatar: string;
  registeredAt: Date;
}
