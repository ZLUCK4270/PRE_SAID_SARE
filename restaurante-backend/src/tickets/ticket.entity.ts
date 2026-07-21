import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Mesa } from '../mesas/mesa.entity';

@Entity('tickets')
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Mesa)
  @JoinColumn({ name: 'mesaId' })
  mesa: Mesa;

  @Column()
  mesaId: number;

  @Column('decimal', { precision: 10, scale: 2 })
  montoTotal: number;

  @Column({ nullable: true })
  metodoPago: string;

  @Column({ default: false })
  pagado: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
