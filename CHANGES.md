# Historial de Cambios - PRE-SAID

## Día 1: Módulo Platos y Setup Base
- Repositorio base inicializado y `.gitignore` configurado.
- Creado proyecto de NestJS `restaurante-backend` usando TypeORM y SQLite.
- Configurada validación global con `class-validator` y `class-transformer`.
- Módulo `Platos` implementado (Entity, Service, Controller, DTOs).
- Setup de `AppModule` con conexión a `better-sqlite3`.

## Días 2 al 7: Implementación Integral (Backend + Frontend)
- **Módulo Mesas**: CRUD completo y lógica de estados (Disponible, Ocupada, Reservada).
- **Módulo Pedidos**: 
  - Gestión avanzada de `Pedido` y `PedidoItem` (relación OneToMany y ManyToOne).
  - Lógica de negocio cruzada: Crear un pedido cambia el estado de la mesa a 'Ocupada'.
- **Módulo Comandas**: Generación de comandas vinculadas a Pedidos.
- **Módulo Tickets**: Cálculo del subtotal y cierre de cuenta. Al pagar un ticket, la mesa pasa a estado 'Disponible'.
- **Entorno de Producción**: 
  - Modificación de `AppModule` para usar PostgreSQL vía `DATABASE_URL` (o SQLite como fallback).
  - CORS habilitado globalmente.
  - Documentación Swagger implementada en `/api`.
- **Frontend Next.js**:
  - Inicialización en la carpeta `restaurante-frontend` con TailwindCSS.
  - Vistas interactivas implementadas: Inicio, Platos, Mesas y Toma de Pedidos.
  - Comunicación mediante variables de entorno (`NEXT_PUBLIC_API_URL`).
