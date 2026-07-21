import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Pedido } from './pedido.entity';
import { Plato } from '../platos/plato.entity';

@Entity('pedido_items')
export class PedidoItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Pedido, pedido => pedido.items, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'pedidoId' })
  pedido: Pedido;

  @Column()
  pedidoId: number;

  @ManyToOne(() => Plato)
  @JoinColumn({ name: 'platoId' })
  plato: Plato;

  @Column()
  platoId: number;

  @Column()
  cantidad: number;

  @Column('decimal', { precision: 10, scale: 2 })
  subtotal: number;
}
