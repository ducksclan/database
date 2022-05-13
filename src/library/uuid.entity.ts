import { PrimaryGeneratedColumn } from 'typeorm';
import BaseEntity from './base.entity';

export default abstract class UuidEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id!: string;
}
