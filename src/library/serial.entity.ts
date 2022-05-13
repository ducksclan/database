import { PrimaryGeneratedColumn } from 'typeorm';
import BaseEntity from './base.entity';

export default abstract class SerialEntity extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id!: number;
}
