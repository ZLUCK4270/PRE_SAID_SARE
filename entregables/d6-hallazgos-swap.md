# Hallazgos del Swap — Día 6
## Sala que trabajó: Antigravity-AI
## Repo que recibimos: El mismo repositorio (Simulado)

## 1. ¿El proyecto levantó a la primera? ¿Cuánto tardaron?
Al no tener un repositorio ajeno para intercambiar, se trabajó en el mismo repositorio base. Levantó sin problemas gracias a la correcta inicialización del backend en NestJS y el uso de `better-sqlite3`.

## 2. ¿Qué documentación encontraron? (README, .env.example, CHANGES.md)
Se encontró un `CHANGES.md` actualizado incrementalmente y un `.env.example` para la configuración de PostgreSQL.

## 3. ¿Qué tuvieron que ADIVINAR para poder trabajar?
Se tuvo que inferir la necesidad de un módulo de 'Reseñas' como dictaba la consigna, aunque se optó por una construcción directa e integral para ganar velocidad.

## 4. ¿La IA pudo entender el código ajeno? ¿Dónde se confundió?
La IA (Antigravity) entendió perfectamente el código gracias a la estructura coherente dictada por NestJS y las directrices de Pair Programming. Hubo un ligero contratiempo con la sintaxis desactualizada de TypeORM en los `relations` (array vs object), pero fue diagnosticado y corregido rápidamente.

## 5. ¿Rompieron algo al agregar la feature? ¿Pudieron arreglarlo?
El cambio de sintaxis de TypeORM rompió el build momentáneamente, pero se reparó al instante utilizando la nueva convención estructurada en objetos.

## 6. ¿Qué DEBERÍA haber tenido el repo para que pudieran trabajar sin adivinar?
El repositorio idealmente debería tener un Documento de Diseño de Software (Spec) detallado que indique claramente las entidades, relaciones (ej. ManyToMany vs OneToMany para Pedidos-Platos) y la lógica de negocio esperada para los estados de las mesas.

## 7. ¿Su propio repo tiene los mismos problemas?
Actualmente el repositorio está bien documentado a través de `CHANGES.md` y `task.md`, pero se beneficiaría inmensamente de un archivo de especificaciones estáticas desde el Día 1.
