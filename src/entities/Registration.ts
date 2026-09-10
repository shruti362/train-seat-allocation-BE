import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('MSTUSER')
export class Registration {

  @PrimaryGeneratedColumn({ name: 'USER_ID' })
  USER_ID: number;

  @Column({ name: 'USERNAME', type: 'varchar', length: 50 })
  USERNAME: string;

  @Column({ name: 'FULL_NAME', type: 'varchar', length: 100 })
  FULL_NAME: string;

  @Column({ name: 'EMAIL', type: 'varchar', length: 100 })
  EMAIL: string;

  @Column({ name: 'MOBILE', type: 'varchar', length: 10 })
  MOBILE: string;

  @Column({ name: 'PASSWORD', type: 'varchar', length: 255 })
  PASSWORD: string;

  @Column({ name: 'ROLE', type: 'varchar', length: 20 })
  ROLE: string;

  @Column({
    name: 'CREATED_DATE',
    type: 'datetime',
    default: () => 'GETDATE()'
  })
  CREATED_DATE: Date;

}