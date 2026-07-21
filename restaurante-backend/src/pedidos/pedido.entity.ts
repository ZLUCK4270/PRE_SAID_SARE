import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Mesa } from '../mesas/mesa.entity';
import { PedidoItem } from './pedido-item.entity';

export enum EstadoPedido {
  PENDIENTE = 'pendiente',
  EN_PREPARACION = 'en_preparacion',
  LISTO = 'listo',
  ENTREGADO = 'entregado',
}

@Entity('pedidos')
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Mesa)
  @JoinColumn({ name: 'mesaId' })
  mesa: Mesa;

  @Column()
  mesaId: number;

  @OneToMany(() => PedidoItem, item => item.pedido, { cascade: true })
  items: PedidoItem[];

  @Column({ type: 'varchar', default: EstadoPedido.PENDIENTE })
  estado: EstadoPedido;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  total: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
