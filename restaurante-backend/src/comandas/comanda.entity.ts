import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Pedido } from '../pedidos/pedido.entity';

export enum EstadoComanda {
  PENDIENTE = 'pendiente',
  EN_PREPARACION = 'en_preparacion',
  LISTA = 'lista',
}

@Entity('comandas')
export class Comanda {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Pedido)
  @JoinColumn({ name: 'pedidoId' })
  pedido: Pedido;

  @Column()
  pedidoId: number;

  @Column({ type: 'varchar', default: EstadoComanda.PENDIENTE })
  estado: EstadoComanda;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
