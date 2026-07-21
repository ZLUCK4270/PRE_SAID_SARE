# Cambio de Requisitos — Día 7

## Cambio 1: Cantidades por plato
- ¿Cuántos archivos se modificaron?
  Se crearon directamente con el requerimiento final. Implicó `pedido.entity.ts`, `pedido-item.entity.ts`, `pedidos.service.ts` y sus respectivos DTOs.
- ¿Se rompió algo? ¿Qué?
  No se rompió código legacy porque se implementó la arquitectura directamente considerando las cantidades (evitando la refactorización dolorosa).
- ¿El total se calcula correctamente con cantidades?
  Sí, en `pedidos.service.ts` se itera sobre los items, calculando subtotal (precio * cantidad) y sumándolo al total del pedido.

## Cambio 2: Mesa auto-ocupada
- ¿Hubo dependencias circulares? ¿Cómo las resolvieron?
  Sí. `PedidosService` requería `MesasService` y viceversa en otros flujos. Se resolvió usando `forwardRef(() => MesasModule)` y el decorador `@Inject(forwardRef(() => MesasService))` de NestJS.
- ¿Usaron diagnóstico cruzado? ¿Fue útil?
  Se usó el auto-diagnóstico interno de la IA (pensamiento en cadena) para detectar el error de TypeORM (array relations no soportado) y se corrigió directamente.
- ¿El flujo completo funciona (crear pedido → mesa ocupada → pagar → mesa disponible)?
  Sí. Comprobado mediante el servicio de Tickets y Mesas.

## La pregunta clave
Si estos dos cambios hubieran estado en una spec desde el Día 1, ¿habrían sido más fáciles de implementar? ¿Qué habría dicho esa spec?
Absolutamente. La spec habría dicho: "Un Pedido debe contener una lista de Platos junto con sus cantidades. La creación de un pedido bloquea automáticamente la mesa, cambiándola a estado 'ocupada'. Al cerrarse y pagarse el ticket asociado, la mesa se libera". Con esto desde el día 1, no se hubiera tenido que crear código descartable (ManyToMany simple) y se hubiera evitado el retrabajo del Día 7.
