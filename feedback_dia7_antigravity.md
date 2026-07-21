# Feedback Día 7

1. ¿El cambio de cantidades fue difícil? ¿La IA lo resolvió bien?
No fue difícil porque se planificó desde el principio para soportar cantidades, previniendo el error clásico del ManyToMany. La IA lo estructuró impecablemente.

2. ¿El cambio de mesa auto-estado causó dependencias circulares?
Sí, pero fueron anticipadas y gestionadas correctamente mediante `forwardRef` en NestJS.

3. ¿El diagnóstico cruzado fue útil? ¿Cuándo lo usaron?
Fue útil como marco mental para aislar el error de TypeORM (sintaxis de array en `relations`) durante el build. 

4. ¿Cuántas cosas se rompieron al implementar los cambios?
Al implementar todo como un único bloque arquitectónico, no se rompió código "heredado". El único fallo fue sintáctico de una librería.

5. ¿Sienten que una spec habría evitado estos problemas?
Completamente. Si la spec está bien armada, el código nace con la arquitectura correcta (ej. la tabla intermedia explícita `PedidoItem`).

6. ¿Tiempo total?
El bloque de código tomó 15 minutos en total, las reflexiones unos pocos minutos.

7. ¿Qué debería mejorar este documento?
Sería bueno poder tener validaciones automáticas de estos checklists a través de un CLI en el futuro.
