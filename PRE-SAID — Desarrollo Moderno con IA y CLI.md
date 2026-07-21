

| PRE-SAID — Desarrollo Moderno con IA y CLI Sprint 1 Día 1 · Dos Capas: CLI \+ IDE — Setup \+ Primer Módulo |
| :---: |

| PRE-SAID — Desarrollo Moderno con IA y CLI Día 1 · Dos Capas: CLI \+ IDE — Setup \+ Primer Módulo |
| :---: |

| ¿Por qué PRE-SAID? SAID (Sistema de Agentes Inteligentes de Desarrollo) enseña a dirigir agentes con especificaciones escritas (SDD). Pero si nunca construiste con IA, no entiendes por qué la spec importa — se siente como burocracia. Este curso te da 10 días de construcción real con IA para que experimentes el poder y los límites. Cuando llegues a actividad del día 6 y 7 \- SAID, vas a querer la spec porque ya viviste lo que pasa sin ella. |
| :---- |

| ¿Por qué CLI? Las herramientas modernas de IA nacen en CLI primero: Claude Code, Gemini CLI, Codex CLI, OpenCode. No es coincidencia. El CLI es más flexible que un IDE para automatizar, encadenar herramientas, coordinar agentes y operar sobre el filesystem real. El IDE te hace más rápido; el CLI te hace más capaz. Un operador técnico moderno domina ambos. |
| :---- |

| Servidor Discord: RPSoft → Pre proyectos → Tu sala asignada (Sala 1 a 15\) Repositorio: ya creado por los admins y asignado a tu sala — trabajas dentro de él Herramientas del día: Gemini CLI (gratis) \+ Cursor (free trial 2 semanas) Proyecto: Sistema de restaurante — NestJS \+ Next.js \+ TypeORM \+ SQLite (desarrollo) Modalidad: Pair programming — Driver / Navigator — rotación cada 20 min Si tu compañero no está: trabajas solo haciendo ambos roles. Los STOPs los grabas en audio de 30 seg. Material de referencia en Madrigal:   • Vibe Coding para no programadores v1 (10 videos de 2hrs)   • Vibe coding para Programadores (5 capítulos, videos cortos) |
| :---- |

| 📋 Crear: checklists/presaid-d1.md \--- sala: I-SALAX curso: PRE-SAID — Desarrollo Moderno con IA y CLI dia: 1 estado: en\_progreso loom: (agregar link al terminar) \--- \#\# Bloques \- \[ \] A — Setup Gemini CLI \+ primera construcción desde terminal \- \[ \] B — Setup Cursor \+ módulo Platos CRUD completo \- \[ \] C — Comparación CLI vs IDE \+ Loom \+ PR \#\# Verificación final \- \[ \] Gemini CLI funciona y crea archivos \- \[ \] Módulo Platos levanta sin errores \- \[ \] GET /platos responde en Postman o navegador \- \[ \] CHANGES.md generado \- \[ \] feedback\_dia1\_\[tunombre\].md completado y commiteado \- \[ \] PR creado y enviado a sala par |
| :---- |

| COMMIT DE APERTURA — Daily Scrum git add checklists/presaid-d1.md git commit \-m "PRESAID-D1-START: \[ayer: primer día\] \[hoy: Setup CLI+Cursor, módulo Platos\] \[bloqueo: ninguno\]" git push origin main |
| :---- |

| OBJETIVO DEL DÍA 1\. Gemini CLI instalado y funcionando desde terminal. 2\. Cursor instalado y configurado. 3\. Módulo Platos (CRUD) construido con Cursor — visible en Postman o navegador. 4\. Comparación escrita: CLI vs IDE. |
| :---- |

| REGLA FUNDAMENTAL La IA es tu copiloto, no tu piloto. Todo código que la IA genere debe ser revisado por el Navigator ANTES de aceptarlo. Si el Navigator no entiende lo que la IA hizo → no se acepta. Aceptar código sin revisar es la forma más rápida de crear deuda técnica invisible. |
| :---- |

| BLOQUE A — CLI: Gemini CLI como Centro Operativo |
| :---: |

**Paso 0 — Configurar .gitignore ANTES de cualquier código**

| HACER ESTO PRIMERO. Si hacen git add . sin .gitignore, node\_modules entra al repo y causa problemas. |
| :---- |

Crear archivo .gitignore en la raíz del repo:

| node\_modules/ dist/ .env db.sqlite \*.sqlite .DS\_Store |
| :---- |

| COMMIT — GITIGNORE git add .gitignore git commit \-m "PRESAID-D1-GITIGNORE: configuración inicial" git push origin main *Esto previene que archivos pesados o secretos entren al repo.* |
| :---- |

**Paso 1 — Instalación de Gemini CLI**

| Requisito: Node.js 18+. Verificar: node \--version Si es menor a 18, actualizar antes de continuar. |
| :---- |

| npm install \-g @google/gemini-cli gemini \--version |
| :---- |

| SOS — gemini no se encuentra: export PATH="$(npm config get prefix)/bin:$PATH" Agregar esa línea a \~/.bashrc o \~/.zshrc para que sea permanente. |
| :---- |

**Paso 2 — Autenticación**

Navegar al directorio de tu repo y ejecutar:

| cd \~/ruta-a-tu-repo-de-sala gemini |
| :---- |

| USAR CUENTA PERSONAL (@gmail.com). Las cuentas corporativas fallan. Gemini CLI es GRATUITO — 60 requests/min con Flash. NO necesitan API key ni tarjeta. |
| :---- |

| SOS — Tokens agotados: Gemini CLI tiene un límite de tokens por sesión. Si ves 'quota exceeded': 1\. Esperar 1-2 minutos y reintentar. 2\. Si persiste: continuar con Cursor (Bloque B) y volver a CLI después. 3\. NO es un error de instalación — es un límite temporal del tier gratuito. |
| :---- |

**Paso 3 — Verificación**

| \> Crea un archivo prueba.txt con el texto 'Gemini CLI funciona' y muéstrame el contenido. |
| :---- |

| Si funciona: el agente crea el archivo y muestra su contenido. Borrar después: rm prueba.txt |
| :---- |

| SOS — Sandbox / permisos: Gemini CLI corre en modo sandbox por defecto — restringe qué puede modificar. Si no crea archivos o da error de permisos: gemini \--sandbox=false Para salir de Gemini CLI: escribir /quit o presionar Ctrl+C. |
| :---- |

| 📺 VIDEO — Vibe Coding para no programadores v1 — Día 1 (Instalaciones básicas) Efecto Einstellung \+ Por qué usar múltiples IAs ⏱️ Ver desde 01:59:45 hasta 02:05:00 (≈5 min) Qué observar: La IA entra en 'efecto túnel'. Solución: abrir 2-3 IAs simultáneas. Una crea, otra diagnostica lo que la primera no ve. |
| :---- |

| STOP 1 Responder ORALMENTE al compañero antes de continuar: ¿Qué es el efecto Einstellung aplicado a una IA? ¿Por qué no conviene depender de una sola IA? Da un ejemplo concreto. |
| :---- |

| 📺 VIDEO — Vibe Coding para no programadores v1 — Día 1 (Instalaciones básicas) Comandos esenciales: doble Escape, /rewind, /resume, /memory ⏱️ Ver desde 02:07:48 hasta 02:19:00 (≈11 min) Qué observar: Doble Escape \= borrar prompt. /rewind \= deshacer cambios. /resume \= retomar conversación anterior. /memory \= reglas persistentes. |
| :---- |

**Paso 4 — Primera construcción con CLI**

| \> Inicializa un proyecto NestJS en esta carpeta. Usa npm. El proyecto se llama restaurante-backend. |
| :---- |

| PREDICCIÓN 1 Escribir ANTES de ver el resultado: ¿Qué comandos ejecutará Gemini CLI para crear el proyecto NestJS? ¿Instalará el CLI de NestJS primero? ¿Cuántos archivos creará? Tu predicción: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ |
| :---- |

Configurar memoria del agente:

| /memory Siempre responde en español. Este proyecto usa NestJS con TypeORM y SQLite para desarrollo. |
| :---- |

| STOP 2 Responder ORALMENTE al compañero antes de continuar: Cierren CLI (Ctrl+C), reabran (gemini), pregunten: '¿Qué stack usa este proyecto?' ¿Se mantuvo la memoria? ¿Qué implicación tiene para proyectos largos? |
| :---- |

| COMMIT — BLOQUE A git add . git commit \-m "PRESAID-D1-A: setup CLI \+ proyecto NestJS" git push origin main *Marcar \[ \] A como \[x\] A* |
| :---- |

| BLOQUE B — IDE: Cursor \+ Módulo Platos |
| :---: |

| 📺 VIDEO — Vibe coding para Programadores — Cap 1, Lección 1 ¿Qué es Vibe Coding? ⏱️ Ver completo (≈10 min) Qué observar: Qué es y qué NO es vibe coding. El instructor prueba Lovable y falla. Vibe coding \= dirigir a la IA paso a paso. |
| :---- |

**Fase 1 — Instalar Cursor**

| 1\. cursor.com → descargar → instalar. 2\. Si vienes de VS Code, importar configuraciones. 3\. Crear cuenta. Free trial \= 2 semanas Pro. 4\. Abrir tu repo de sala en Cursor. |
| :---- |

| SOS — Interfaz de Cursor (actualizado): Cursor ha cambiado su interfaz. Puede que NO veas el botón 'Agent' clásico. Versión actual: usa 'Background Agent' o el chat integrado (Ctrl+L). Si ves opciones como 'Ask' / 'Agent' / 'Background Agent': seleccionar Agent o Background Agent. Si solo ves un chat simple: funciona igual, escribe tu prompt ahí. Lo importante es que Cursor EJECUTE acciones (crear archivos, instalar), no solo responda texto. |
| :---- |

| SOS — npm no reconocido en terminal de Cursor: Si la terminal integrada de Cursor no reconoce npm o node: 1\. Cerrar Cursor completamente. 2\. Abrir terminal del sistema (fuera de Cursor): which node && which npm 3\. Copiar las rutas. Agregarlas al PATH del sistema si no están. 4\. Reabrir Cursor. Ahora la terminal interna debería reconocerlos. |
| :---- |

| 📺 VIDEO — Vibe coding para Programadores — Cap 2, Lección 1 API en NestJS — estructura de prompt ⏱️ Ver desde 00:00 hasta 05:00 (≈5 min) Qué observar: Cómo armar un prompt: QUÉ HACER \+ LINEAMIENTOS \+ QUÉ NO HACER. Observen la estructura. |
| :---- |

**Fase 2 — Construir módulo Platos**

| Estructura esperada después de que la IA genere: src/   platos/     plato.entity.ts       ← entidad con TypeORM decorators     create-plato.dto.ts   ← validaciones con class-validator     update-plato.dto.ts   ← PartialType del create     platos.service.ts     ← lógica CRUD     platos.controller.ts  ← endpoints REST     platos.module.ts      ← registra todo Comparen esta estructura con lo que la IA realmente cree. |
| :---- |

| PROMPT PARA CURSOR: Dentro de este proyecto NestJS, crea el módulo Platos completo. El módulo debe tener: \- Entidad Plato: id, nombre, precio, disponible, createdAt, updatedAt \- DTOs de creación y actualización con validaciones \- Servicio con CRUD completo \- Controlador con endpoints REST \- Módulo registrado en AppModule Lineamientos: \- TypeORM como ORM con SQLite para desarrollo \- Instalar better-sqlite3 (NO sqlite3) como driver de SQLite \- class-validator para DTOs, class-transformer para serialización \- Estructura estándar NestJS: module, controller, service, entity, dto \- Configurar TypeORM con synchronize: true y database: 'db.sqlite' \- Nombres en español NO hagas: \- No uses PostgreSQL — usamos SQLite para desarrollo local \- No crees tests \- No instales dependencias sin decirme primero cuáles necesitas |
| :---- |

| SOS — Cuando la IA te diga qué dependencias instalar: La IA te dirá algo como: 'necesitas instalar @nestjs/typeorm, typeorm, better-sqlite3...' Ejecuta el comando que te dé en la terminal: npm install \[paquetes\] Si hay errores de versión: agregar \--legacy-peer-deps al final del comando. Ejemplo: npm install @nestjs/typeorm typeorm better-sqlite3 \--legacy-peer-deps |
| :---- |

| PREDICCIÓN 2 Escribir ANTES de ver el resultado: ¿Qué archivos creará Cursor? Comparen con la estructura de referencia de arriba. ¿Creará algo extra que no pedimos? Tu predicción: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ |
| :---- |

**NO acepten todo automáticamente. Esperen a que termine.**

**Fase 3 — Code review (Navigator lidera)**

| 📺 VIDEO — Vibe coding para Programadores — Cap 1, Lección 7 Revisando el código — errores de seguridad ⏱️ Ver desde 00:00 hasta 06:00 (≈6 min) Qué observar: El instructor revisa archivo por archivo. Atrapa llaves secretas expuestas. Borra código inventado. Esto es lo que hace el Navigator. |
| :---- |

| \# | Criterio | ✓ |
| :---- | :---- | :---- |
| V1 | Entidad: exactamente id, nombre, precio, disponible, createdAt, updatedAt |  |
| V2 | No hay campos inventados por la IA |  |
| V3 | DTOs con validaciones reales (@IsString, @IsNumber, etc.) |  |
| V4 | 5 endpoints: POST, GET all, GET :id, PATCH :id, DELETE :id |  |
| V5 | Módulo registrado en AppModule |  |
| V6 | TypeORM configurado con SQLite y better-sqlite3 (no postgres) |  |
| V7 | No hay llaves secretas, URLs hardcodeadas, ni archivos .env con datos reales |  |

| STOP 3 Responder ORALMENTE al compañero antes de continuar: Miren sus predicciones. ¿Cuántos archivos acertaron? ¿La IA creó la estructura esperada o inventó algo diferente? ¿Cómo distinguen entre 'tiene sentido' y 'yo lo pedí'? |
| :---- |

**Fase 4 — Verificar que funciona**

| npm run start:dev |
| :---- |

**Probar: curl http://localhost:3000/platos o abrir en navegador.**

| STOP 4 Responder ORALMENTE al compañero antes de continuar: El Navigator elige una línea al azar del servicio. El Driver explica qué hace. Si no puede → deuda de entendimiento. |
| :---- |

**Fase 5 — CHANGES.md**

| Pedir a Cursor: "Crea un archivo CHANGES.md en la raíz del proyecto. Resume qué archivos acabas de crear, qué estructura usaste, qué dependencias instalaste y qué decisiones tomaste para el módulo Platos." |
| :---- |

| COMMIT — BLOQUE B git add . git commit \-m "PRESAID-D1-B: módulo Platos CRUD \+ CHANGES.md" git push origin main *Marcar \[ \] B como \[x\] B* |
| :---- |

| BLOQUE C — Comparación CLI vs IDE \+ Cierre |
| :---: |

| STOP 5 Responder ORALMENTE al compañero antes de continuar: 1\. ¿En cuál sentiste más control: CLI o IDE?2. ¿En cuál fuiste más rápido?3. ¿En cuál entendiste mejor lo que la IA hacía?4. Para automatizar tareas repetitivas, ¿CLI o IDE?Escribir respuestas en el entregable. |
| :---- |

| 📚 APRENDIZAJES DEL DÍA 1 • Operar una IA desde terminal (CLI) — el agente actúa sobre tu filesystem real • Usar Cursor como IDE con IA — Background Agent ejecuta, no solo responde • Estructura de prompt: QUÉ HACER \+ LINEAMIENTOS \+ QUÉ NO HACER • Efecto Einstellung: por qué usar múltiples IAs • Comandos CLI: /rewind, /resume, /memory • Code review de código generado por IA — Navigator como auditor • .gitignore ANTES del primer commit — hábito crítico • CHANGES.md como registro de lo que hizo la IA • CLI \= control y transparencia. IDE \= velocidad. Ambos se complementan. |
| :---- |

| ENTREGABLE DEL DÍA 1 MVP mostrable: GET /platos responde en Postman o navegador. Archivo: entregables/d1-entregable.md 1\. Screenshot: Gemini CLI funcionando 2\. Predicciones 1 y 2 con resultado real 3\. Checklist V1-V7 completada 4\. Comparación CLI vs IDE (respuestas STOP 5\) 5\. Screenshot: GET /platos respondiendo |
| :---- |

| LOOM — Máximo 5 minutos 0:00-0:30 — "Soy \[nombre\], Sala \[X\], PRE-SAID Día 1." 0:30-2:00 — Terminal: Gemini CLI funcionando. OBLIGATORIO. 2:00-3:30 — Cursor: módulo Platos. Un acierto y un error de la IA. 3:30-4:30 — CLI vs IDE: ¿para qué usarían cada uno? 4:30-5:00 — Predicciones: ¿en qué acertaron? Sin escena de terminal en vivo → Loom no válido. |
| :---- |

| FEEDBACK — feedback\_dia1\_\[tunombre\].md 1\. ¿Gemini CLI fue fácil de instalar? ¿Problemas? ¿Se agotaron los tokens? 2\. ¿Cursor fue fácil de configurar? ¿Encontraste el modo Agent/Background Agent? 3\. ¿El prompt para Platos fue claro? ¿better-sqlite3 funcionó sin problemas? 4\. ¿Las predicciones ayudaron a evaluar el output? 5\. ¿El .gitignore previno problemas? ¿Tuvieron issues con Git? 6\. ¿Tiempo total? ¿Qué debería mejorar este documento? |
| :---- |

| COMMIT — FINAL \+ PR git add . git commit \-m "PRESAID-D1-FINAL: Platos CRUD \+ CLI setup \+ comparación" git push origin main \# Crear Pull Request → asignar reviewer a sala par \# ⚠️ PR NO es válido sin feedback\_dia1\_\[tunombre\].md  |
| :---- |

| STOP 6 Responder ORALMENTE al compañero antes de continuar: Hoy construyeron un módulo en minutos con IA. Mañana auditarán TODO como revisores. ¿Por qué no basta con que funcione? Ejemplo concreto de hoy. |
| :---- |

| RUTA — PRE-SAID: Desarrollo Moderno con IA y CLI |
| :---: |

| ▶ DÍA 1 — Dos Capas: CLI \+ IDE — Setup \+ Platos ← HOY |
| :---- |
| Día 2 — Code Review a fondo \+ Mesas |
| Día 3 — Relaciones \+ Manejo de errores (Pedidos) |
| Día 4 — Backend completo \+ Frontend con IA |
| Día 5 — Deploy: restaurante en producción |
| Día 6 — Swap de repos |
| Día 7 — Cambio de requisitos \+ diagnóstico cruzado |
| Día 8 — Proyecto personal libre |
| Día 9 — Retrospectiva \+ ¿por qué se rompió? |
| Día 10 — Loom final \+ Gate para SAID |

*PRE-SAID — Desarrollo Moderno con IA y CLI*

*RPSoft Bootcamp — Director: Wilber Peralta*

| PRE-SAID — Desarrollo Moderno con IA y CLI Día 2 · Code Review a Fondo \+ Módulo Mesas |
| :---: |

| PRE-SAID — Desarrollo Moderno con IA y CLI Día 2 · Code Review a Fondo \+ Módulo Mesas |
| :---: |

| Servidor Discord: RPSoft → Pre proyectos → Tu sala asignada Repositorio: tu repo de sala con el proyecto restaurante-backend Herramientas: Cursor (principal) \+ Gemini CLI (disponible) Modalidad: Pair programming — Driver / Navigator — rotación 20 min Si tu compañero no está: trabajas solo. STOPs los grabas en audio de 30 seg. |
| :---- |

| ESTADO ACTUAL — ¿Qué tienen del Día 1? ✓ Gemini CLI \+ Cursor funcionando ✓ Proyecto NestJS con módulo Platos (CRUD) ✓ GET /platos respondiendo en localhost ✓ .gitignore configurado, CHANGES.md generado Si algo NO funciona → resolver antes de empezar el Día 2\. |
| :---- |

| 📋 Crear: checklists/presaid-d2.md \--- sala: I-SALAX curso: PRE-SAID — Desarrollo Moderno con IA y CLI dia: 2 estado: en\_progreso loom: (agregar link al terminar) \--- \#\# Bloques \- \[ \] A — Videos: code review y correcciones con IA \- \[ \] B — Módulo Mesas con Git branch \+ code review exhaustivo \- \[ \] C — Documentación de hallazgos \+ Loom \+ PR \#\# Verificación final \- \[ \] Módulo Mesas funcionando en localhost \- \[ \] GET /mesas responde \- \[ \] Rama feature/mesas mergeada a main \- \[ \] Hallazgos de code review documentados \- \[ \] CHANGES.md actualizado \- \[ \] feedback\_dia2\_\[tunombre\].md completado y commiteado \- \[ \] PR creado y enviado a sala par |
| :---- |

| COMMIT DE APERTURA — Daily Scrum git add checklists/presaid-d2.md git commit \-m "PRESAID-D2-START: \[ayer: Setup CLI+Cursor, Platos CRUD\] \[hoy: Code review \+ Mesas\] \[bloqueo: Z\]" git push origin main |
| :---- |

| OBJETIVO DEL DÍA 1\. Aprender a hacer code review de código generado por IA — con criterio. 2\. Usar Git branches por feature: una rama por módulo, merge al terminar. 3\. Módulo Mesas (CRUD \+ cambiarEstado) construido, revisado y funcionando. 4\. Documento de hallazgos: qué hizo bien la IA, qué hizo mal, qué inventó. |
| :---- |

| REGLA DEL DÍA 2 El Navigator NO acepta NINGÚN archivo sin haberlo leído completo. Tu trabajo ya no es escribir código — es REVISAR lo que la IA escribe. |
| :---- |

| BLOQUE A — Aprender Code Review con IA |
| :---: |

| 📺 VIDEO — Vibe coding para Programadores — Cap 1, Lección 7 Revisando el código — errores de seguridad ⏱️ Ver completo (≈10 min) Qué observar: El instructor atrapa: (1) llaves secretas expuestas, (2) archivos inventados, (3) lógica en el lugar incorrecto. Observen cómo RECHAZA y corrige. |
| :---- |

| STOP 1 Responder ORALMENTE al compañero antes de continuar: La IA puso llaves secretas como valores por defecto. ¿Por qué es grave? ¿Qué pasa si hacen push a GitHub? ¿Cómo lo detectarían sin code review? |
| :---- |

| 📺 VIDEO — Vibe coding para Programadores — Cap 2, Lección 5 Correcciones con Cursor — endpoints faltantes \+ Git branches ⏱️ Ver desde 00:00 hasta 05:00 (endpoints) y desde 08:00 hasta 10:40 (git branches) Qué observar: La IA creó el service pero NO el controller endpoint. Usó POST donde debía ser GET. Git: una rama por feature → commit → merge → nueva rama. |
| :---- |

| STOP 2 Responder ORALMENTE al compañero antes de continuar: ¿Por qué una rama por feature? ¿Qué ventaja tiene cuando la IA puede 'meter la pata'? |
| :---- |

| COMMIT — BLOQUE A git add checklists/presaid-d2.md git commit \-m "PRESAID-D2-A: videos completados" git push origin main *Marcar \[ \] A como \[x\] A* |
| :---- |

| BLOQUE B — Módulo Mesas: Construir \+ Revisar |
| :---: |

**Fase 1 — Crear rama**

| git checkout \-b feature/mesas |
| :---- |

**Fase 2 — Estructura esperada**

| Estructura esperada: src/mesas/   mesa.entity.ts         ← enum de estados, campo unique 'numero'   create-mesa.dto.ts     ← validación de numero y capacidad   update-mesa.dto.ts     ← PartialType   mesas.service.ts       ← CRUD \+ cambiarEstado   mesas.controller.ts    ← endpoints \+ PATCH /mesas/:id/estado   mesas.module.ts |
| :---- |

**Fase 3 — Prompt para Mesas**

| PROMPT PARA CURSOR: Crea el módulo Mesas completo en este proyecto NestJS. El módulo debe tener: \- Entidad Mesa: id, numero (único), capacidad, estado (disponible/ocupada/reservada), createdAt, updatedAt \- DTOs de creación y actualización con validaciones \- Servicio con CRUD completo \+ método cambiarEstado(id, nuevoEstado) \- Controlador con endpoints REST \+ endpoint PATCH /mesas/:id/estado \- Módulo registrado en AppModule Lineamientos: \- TypeORM, class-validator, estructura estándar NestJS \- El campo 'estado' debe ser un enum con valores: disponible, ocupada, reservada \- El número de mesa debe ser único — validar en el servicio NO hagas: \- No modifiques el módulo Platos ni la configuración de base de datos \- No crees tests ni instales dependencias sin decirme |
| :---- |

| PREDICCIÓN 3 Escribir ANTES de ver el resultado: Mesas tiene un enum y un campo unique. ¿La IA creará un archivo separado para el enum? ¿Agregará @IsEnum() al DTO? ¿Usará @Column({ unique: true }) en la entidad? Tu predicción: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ |
| :---- |

| PREDICCIÓN 4 Escribir ANTES de ver el resultado: ¿La IA modificará algún archivo del módulo Platos? ¿Modificará AppModule? ¿Creará algo que no pedimos? Tu predicción: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ |
| :---- |

**NO acepten nada hasta que termine.**

**Fase 4 — Code review exhaustivo**

| HOY EL CODE REVIEW ES EL CENTRO DEL DÍA No es mirar por encima. Es leer cada archivo, cada línea. |
| :---- |

| \# | Qué revisar | Hallazgo | ✓ |
| :---- | :---- | :---- | :---- |
| R1 | ¿Entidad tiene exactamente los campos pedidos? |  |  |
| R2 | ¿Enum de estados existe con 3 valores? |  |  |
| R3 | ¿Campo 'numero' tiene @Column({ unique: true })? |  |  |
| R4 | ¿Servicio tiene cambiarEstado además del CRUD? |  |  |
| R5 | ¿Controller expone PATCH /mesas/:id/estado? |  |  |
| R6 | ¿DTOs validan que estado sea del enum (@IsEnum)? |  |  |
| R7 | ¿Modificó archivos que NO pedimos? ¿Cuáles? |  |  |
| R8 | ¿Hay algo que ninguno entiende? |  |  |

| STOP 3 Responder ORALMENTE al compañero antes de continuar: R7 y R8: si la IA modificó archivos no pedidos, ¿era necesario (ej: AppModule) o inventó algo? Si no entienden algo: ¿lo aceptarían en producción? |
| :---- |

**Fase 5 — Corregir lo encontrado**

| NO corrijan manualmente. Pidan a Cursor que corrija con un prompt específico. Ejemplo: "El DTO de creación no valida que estado sea del enum. Agrega @IsEnum() con los valores correctos." |
| :---- |

| STOP 4 Responder ORALMENTE al compañero antes de continuar: ¿La IA corrigió sin romper otra cosa? Verificar que Platos sigue intacto. |
| :---- |

**Fase 6 — Verificar con peticiones reales**

| npm run start:dev |
| :---- |

| \# Probar endpoints de Mesas: curl http://localhost:3000/mesas curl \-X POST http://localhost:3000/mesas \\   \-H "Content-Type: application/json" \\   \-d '{"numero": 1, "capacidad": 4, "estado": "disponible"}' curl \-X PATCH http://localhost:3000/mesas/1/estado \\   \-H "Content-Type: application/json" \\   \-d '{"estado": "ocupada"}' \# VERIFICAR que Platos sigue funcionando: curl http://localhost:3000/platos |
| :---- |

| STOP 5 Responder ORALMENTE al compañero antes de continuar: GET /platos: ¿sigue funcionando? Si la IA rompió Platos al crear Mesas, eso es exactamente el problema de no tener spec. |
| :---- |

**Fase 7 — CHANGES.md \+ Merge**

| Pedir a Cursor: "Actualiza CHANGES.md agregando lo que creaste para el módulo Mesas." |
| :---- |

| git add . git commit \-m "PRESAID-D2-B: módulo Mesas CRUD \+ cambiarEstado" git checkout main git merge feature/mesas |
| :---- |

| SOS — Si hay conflictos de merge: 1\. Git te dirá qué archivos tienen conflicto. 2\. Abrir esos archivos — buscar \<\<\<\<\<\<\< \======= \>\>\>\>\>\>\> 3\. Decidir qué código mantener. Borrar las marcas de conflicto. 4\. git add . && git commit (sin mensaje, Git genera uno de merge) 5\. Si no sabes resolverlo: git merge \--abort vuelve al estado anterior. El conflicto más común: AppModule importando módulos. Mantener AMBOS imports. |
| :---- |

| git push origin main git branch \-d feature/mesas |
| :---- |

| COMMIT — BLOQUE B \# Merge hecho arriba *Marcar \[ \] B como \[x\] B* |
| :---- |

| BLOQUE C — Documentación \+ Cierre |
| :---: |

**Crear: entregables/d2-hallazgos-code-review.md**

| \# Code Review — Día 2: Módulo Mesas \#\# Lo que la IA hizo BIEN (listar) \#\# Lo que la IA hizo MAL (qué, por qué, cómo corrigieron) \#\# Lo que la IA INVENTÓ (¿era necesario?) \#\# Predicciones vs Realidad \#\# Comparación: Platos (D1 sin review) vs Mesas (D2 con review) |
| :---- |

| STOP 6 Responder ORALMENTE al compañero antes de continuar: En el Día 1 aceptaron Platos sin review exhaustivo. Ahora que saben revisar: ¿sospechan que Platos tiene errores ocultos? Mañana Pedidos DEPENDE de Platos y Mesas — errores ocultos se van a manifestar. |
| :---- |

| 📚 APRENDIZAJES DEL DÍA 2 • Code review de código IA: leer cada archivo, cuestionar cada decisión • La IA inventa cosas que no pides — detectarlo es tu trabajo • La IA puede romper módulos existentes al crear nuevos • Git branch por feature: aislar cambios, poder revertir • Pedir correcciones a la IA con prompts específicos, no corregir manual • Resolver conflictos de merge: \<\<\<\< \==== \>\>\>\> • Navigator \= control de calidad. Sin él, deuda técnica invisible. |
| :---- |

| ENTREGABLE DEL DÍA 2 MVP mostrable: GET /mesas y GET /platos ambos respondiendo. 1\. entregables/d2-hallazgos-code-review.md 2\. Checklist R1-R8 completada 3\. Screenshot: GET /mesas \+ PATCH estado \+ GET /platos |
| :---- |

| LOOM — Máximo 5 minutos 0:00-0:30 — "Soy \[nombre\], Sala \[X\], PRE-SAID Día 2." 0:30-2:00 — Terminal: git log mostrando rama mergeada. OBLIGATORIO. 2:00-3:00 — Postman/curl: GET /mesas \+ PATCH estado. 3:00-4:30 — Code review: un hallazgo real. Algo que la IA hizo mal. 4:30-5:00 — ¿Platos tiene errores ocultos? Sin terminal con git log → Loom no válido. |
| :---- |

| FEEDBACK — feedback\_dia2\_\[tunombre\].md 1\. ¿Los videos de code review sirvieron para saber qué buscar? 2\. ¿El prompt para Mesas fue claro? ¿Qué cambiarían? 3\. ¿El flujo de Git branches fue fácil o confuso? ¿Hubo conflictos de merge? 4\. ¿Cuántos errores encontraron? ¿Los esperaban? 5\. ¿Los comandos curl para testing fueron útiles? 6\. ¿Tiempo total? ¿Qué debería mejorar este documento? |
| :---- |

| COMMIT — FINAL \+ PR git add . git commit \-m "PRESAID-D2-FINAL: Mesas \+ code review \+ hallazgos" git push origin main \# Crear Pull Request → reviewer sala par \# ⚠️ PR NO es válido sin feedback\_dia2\_\[tunombre\].md  |
| :---- |

| RUTA — PRE-SAID: Desarrollo Moderno con IA y CLI |
| :---: |

| Día 1 — Dos Capas: CLI \+ IDE — Setup \+ Platos ✓ |
| :---- |
| **▶ DÍA 2 — Code Review a fondo \+ Mesas ← HOY** |
| Día 3 — Relaciones \+ Manejo de errores (Pedidos) |
| Día 4 — Backend completo \+ Frontend con IA |
| Día 5 — Deploy: restaurante en producción |
| Día 6 — Swap de repos |
| Día 7 — Cambio de requisitos \+ diagnóstico cruzado |
| Día 8 — Proyecto personal libre |
| Día 9 — Retrospectiva \+ ¿por qué se rompió? |
| Día 10 — Loom final \+ Gate para SAID |

*PRE-SAID — Desarrollo Moderno con IA y CLI*

*RPSoft Bootcamp — Director: Wilber Peralta*

| PRE-SAID — Desarrollo Moderno con IA y CLI Día 3 · Relaciones entre Módulos \+ Manejo de Errores (Pedidos) |
| :---: |

| PRE-SAID — Desarrollo Moderno con IA y CLI Día 3 · Relaciones entre Módulos \+ Manejo de Errores (Pedidos) |
| :---: |

| Servidor Discord: RPSoft → Pre proyectos → Tu sala asignada Repositorio: tu repo de sala con Platos y Mesas funcionando Herramientas: Cursor (principal) \+ Gemini CLI (diagnóstico) Modalidad: Pair programming — Driver / Navigator — rotación 20 min |
| :---- |

| ESTADO ACTUAL — ¿Qué tienen del Día 2? ✓ Gemini CLI \+ Cursor funcionando ✓ Módulo Platos (CRUD) — GET /platos responde ✓ Módulo Mesas (CRUD \+ cambiarEstado) — GET /mesas responde ✓ Git con ramas por feature, .gitignore configurado VERIFICAR ANTES DE EMPEZAR: Ejecutar npm run start:dev y probar GET /platos y GET /mesas. Si alguno falla → resolver ANTES de empezar el Día 3\. Pedidos DEPENDE de Platos y Mesas. Si están rotos, Pedidos no funciona. |
| :---- |

| 📋 Crear: checklists/presaid-d3.md \--- sala: I-SALAX curso: PRE-SAID — Desarrollo Moderno con IA y CLI dia: 3 estado: en\_progreso loom: (agregar link al terminar) \--- \#\# Bloques \- \[ \] A — Videos: errores 500, validaciones, anti-patrón parche sobre parche \- \[ \] B — Módulo Pedidos con relaciones (Platos \+ Mesas) \- \[ \] C — Manejo de errores \+ Swagger \+ CHANGES.md \+ Loom \+ PR \#\# Verificación final \- \[ \] POST /pedidos crea un pedido vinculado a una mesa y platos existentes \- \[ \] GET /pedidos retorna pedidos con relaciones (mesa y platos incluidos) \- \[ \] Errores 400 en vez de 500 cuando faltan datos o IDs no existen \- \[ \] GET /platos y GET /mesas siguen funcionando \- \[ \] CHANGES.md actualizado \- \[ \] feedback\_dia3\_\[tunombre\].md completado y commiteado \- \[ \] PR creado y enviado a sala par |
| :---- |

| COMMIT DE APERTURA — Daily Scrum git add checklists/presaid-d3.md git commit \-m "PRESAID-D3-START: \[ayer: Mesas \+ code review\] \[hoy: Pedidos con relaciones \+ errores\] \[bloqueo: Z\]" git push origin main |
| :---- |

| OBJETIVO DEL DÍA 1\. Módulo Pedidos con relaciones reales a Platos y Mesas (foreign keys, no IDs sueltos). 2\. Manejo de errores: errores 400 (bad request) en vez de 500 (servidor muere). 3\. Aprender cuándo la IA está parcheando vs. cuándo hay que rehacer desde cero. 4\. Swagger como documentación viva de la API. |
| :---- |

| REGLA DEL DÍA 3: La regla de los 3 intentos Si le pides a la IA que corrija algo y falla 3 veces seguidas → PARA. No sigas parcheando. La IA entró en efecto túnel (Einstellung del Día 1). Opción A: Abre Gemini CLI y pide un diagnóstico sin tocar código. Opción B: Haz git stash, vuelve al último commit limpio, y rehaz el prompt desde cero. Parche sobre parche es la forma más común de crear código que 'funciona' pero nadie entiende. |
| :---- |

| BLOQUE A — Errores, Validaciones y Anti-patrones |
| :---: |

| 📺 VIDEO — Vibe coding para Programadores — Cap 2, Lección 6 Optimización y validaciones con Cursor ⏱️ Ver completo (≈8 min) Qué observar: El instructor descubre errores 500 en su API: si no llega un parámetro, el servidor MUERE. Solución: validation pipes en NestJS. Debate: ¿la validación va en el controller o en el service? La IA corrige y aplica pipes a múltiples controllers automáticamente. |
| :---- |

| STOP 1 Responder ORALMENTE al compañero antes de continuar: El instructor preguntó a la IA: '¿esta validación no debería estar en el service en vez del controller?' La IA le dio la razón y movió la lógica. ¿Eso significa que la IA siempre tiene razón cuando le cuestionas? ¿O simplemente te da la razón? ¿Cómo distingues? |
| :---- |

| 📺 VIDEO — Vibe Coding para no programadores v1 — Día 3 (Arquitectura MVC) Git como punto de restauración \+ Parche sobre parche ⏱️ Ver desde 01:05:14 hasta 01:12:00 (≈7 min) Qué observar: El instructor usa commits de Git como checkpoints: si la IA rompe algo, vuelve al commit anterior. Muestra el anti-patrón 'parche sobre parche' — la IA intenta arreglar un error creando otro. También pide a la IA una revisión de seguridad del código. |
| :---- |

| STOP 2 Responder ORALMENTE al compañero antes de continuar: ¿Han experimentado ya el 'parche sobre parche'? En los días 1 y 2, ¿hubo algún momento donde la IA intentó corregir algo y empeoró? ¿Qué hicieron? ¿Siguieron parcheando o volvieron atrás? |
| :---- |

| COMMIT — BLOQUE A git add checklists/presaid-d3.md git commit \-m "PRESAID-D3-A: videos completados" git push origin main *Marcar \[ \] A como \[x\] A* |
| :---- |

| BLOQUE B — Módulo Pedidos: Relaciones Reales |
| :---: |

| ⚠️ ESTE MÓDULO ES DIFERENTE A LOS ANTERIORES Platos y Mesas eran módulos independientes — no dependían de nadie. Pedidos DEPENDE de ambos: un pedido pertenece a una mesa y contiene platos. Esto significa: foreign keys, relaciones TypeORM, y la posibilidad real de que la IA rompa Platos o Mesas al crear Pedidos. Si algo se rompe: git stash y volver al commit limpio. No parchear. |
| :---- |

| DIAGRAMA DE RELACIONES — Visualizar ANTES de codear:   ┌──────────┐       ┌──────────────┐       ┌──────────┐   │  MESA    │       │   PEDIDO      │       │  PLATO   │   ├──────────┤       ├──────────────┤       ├──────────┤   │ id       │──1:N─→│ id           │←─N:M──│ id       │   │ numero   │       │ mesaId (FK)  │       │ nombre   │   │ capacidad│       │ estado       │       │ precio   │   │ estado   │       │ total        │       │ disponible│   └──────────┘       └──────────────┘       └──────────┘                             │                      ┌──────┴───────┐                      │ pedido\_platos │  ← tabla intermedia (ManyToMany)                      │ pedidoId (FK) │                      │ platoId  (FK) │                      └──────────────┘ Mesa → Pedido: Una mesa puede tener muchos pedidos (ManyToOne) Pedido ↔ Plato: Un pedido tiene muchos platos, un plato puede estar en muchos pedidos (ManyToMany) |
| :---- |

**Fase 1 — Crear rama y estructura esperada**

| git checkout \-b feature/pedidos |
| :---- |

| Estructura esperada después de que la IA genere: src/   pedidos/     pedido.entity.ts        ← relaciones ManyToOne a Mesa, ManyToMany a Plato     create-pedido.dto.ts    ← mesaId \+ array de platoIds     update-pedido.dto.ts     pedidos.service.ts      ← lógica con validación de IDs existentes     pedidos.controller.ts     pedidos.module.ts       ← imports de PlatosModule y MesasModule |
| :---- |

| PREDICCIÓN 3 Escribir ANTES de ver el resultado: Pedidos necesita relaciones con Platos y Mesas. ¿La IA usará @ManyToOne para Mesa y @ManyToMany para Platos? ¿O inventará otra estructura? ¿Modificará las entidades de Platos y Mesas para agregar el lado inverso de la relación? Tu predicción: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ |
| :---- |

**Fase 2 — Prompt para Pedidos**

| PROMPT PARA CURSOR: Crea el módulo Pedidos completo en este proyecto NestJS. Un Pedido: \- Pertenece a UNA Mesa (relación ManyToOne) \- Contiene VARIOS Platos (relación ManyToMany) \- Tiene campos: id, estado (pendiente/en\_preparacion/listo/entregado), total, createdAt, updatedAt \- El total se calcula sumando los precios de los platos del pedido Entidad Pedido: \- @ManyToOne con Mesa (columna mesaId) \- @ManyToMany con Plato (tabla intermedia pedido\_platos) \- estado como enum: pendiente, en\_preparacion, listo, entregado DTO de creación: \- mesaId: number (obligatorio, debe existir en la tabla mesas) \- platoIds: number\[\] (obligatorio, todos deben existir en la tabla platos) Servicio: \- Al crear un pedido: verificar que mesaId existe, que todos los platoIds existen \- Si un ID no existe → lanzar error 400 (BadRequestException), NO error 500 \- Calcular total sumando precios de los platos \- CRUD completo \+ método cambiarEstado(id, nuevoEstado) Lineamientos: \- TypeORM, class-validator \- Importar PlatosModule y MesasModule en PedidosModule \- Retornar pedidos con relaciones cargadas (mesa y platos incluidos en el GET) NO hagas: \- NO modifiques las entidades Plato ni Mesa (solo agrega el lado inverso si es necesario) \- NO crees tests \- NO instales dependencias sin decirme cuáles |
| :---- |

| SOS — Error: 'Repository not found' o 'No repository for Entity': Si da este error al levantar el proyecto, significa que PedidosModule intenta usar repositorios de Plato o Mesa pero no los encuentra. Causa: PlatosModule y MesasModule no exportan TypeOrmModule.forFeature(). Solución — abrir platos.module.ts y mesas.module.ts, agregar exports: // En platos.module.ts (y lo mismo en mesas.module.ts): @Module({   imports: \[TypeOrmModule.forFeature(\[Plato\])\],   exports: \[TypeOrmModule\],  // ← AGREGAR ESTA LÍNEA   controllers: \[PlatosController\],   providers: \[PlatosService\], }) Si la IA no lo hizo: pedir 'Exporta TypeOrmModule en PlatosModule y MesasModule para que PedidosModule acceda a sus repositorios.' |
| :---- |

| PREDICCIÓN 4 Escribir ANTES de ver el resultado: La IA necesita crear una tabla intermedia para ManyToMany (pedido\_platos). ¿La creará automáticamente con @JoinTable o creará una entidad separada? ¿Exportará TypeOrmModule en PlatosModule y MesasModule? Tu predicción: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ |
| :---- |

**Esperan a que Cursor termine. NO acepten nada todavía.**

**Fase 3 — Code review (Navigator lidera)**

| \# | Qué revisar | Hallazgo | ✓ |
| :---- | :---- | :---- | :---- |
| R1 | ¿Pedido tiene @ManyToOne a Mesa y @ManyToMany a Plato? |  |  |
| R2 | ¿Existe @JoinTable en la relación ManyToMany? |  |  |
| R3 | ¿El DTO pide mesaId (number) y platoIds (number\[\])? |  |  |
| R4 | ¿El servicio valida que mesaId y platoIds existen ANTES de crear? |  |  |
| R5 | ¿Errores de IDs inexistentes dan 400 (BadRequest) y NO 500? |  |  |
| R6 | ¿El total se calcula sumando precios de platos? |  |  |
| R7 | ¿GET /pedidos retorna pedidos CON mesa y platos cargados (relations)? |  |  |
| R8 | ¿La IA modificó plato.entity.ts o mesa.entity.ts? ¿Era necesario? |  |  |
| R9 | ¿PedidosModule importa PlatosModule y MesasModule? |  |  |
| R10 | ¿PlatosModule y MesasModule exportan TypeOrmModule? (exports: \[TypeOrmModule\]) |  |  |
| R11 | ¿GET /platos y GET /mesas SIGUEN funcionando? |  |  |

| STOP 3 Responder ORALMENTE al compañero antes de continuar: R11 es el más importante: ¿Platos y Mesas siguen funcionando después de crear Pedidos? Si la IA rompió algo: ¿aplican la regla de los 3 intentos o hacen git stash? Decidan ahora. |
| :---- |

**Fase 4 — Verificar con peticiones reales**

| npm run start:dev |
| :---- |

**Probar en Postman o con curl:**

| \# 1\. Verificar que Platos y Mesas siguen funcionando curl http://localhost:3000/platos curl http://localhost:3000/mesas \# 2\. Crear un pedido (ajustar IDs según sus datos) curl \-X POST http://localhost:3000/pedidos \\   \-H "Content-Type: application/json" \\   \-d '{"mesaId": 1, "platoIds": \[1, 2\]}' \# 3\. Verificar que retorna con relaciones curl http://localhost:3000/pedidos \# 4\. Probar error 400: mesa que no existe curl \-X POST http://localhost:3000/pedidos \\   \-H "Content-Type: application/json" \\   \-d '{"mesaId": 9999, "platoIds": \[1\]}' \# Debe dar 400, NO 500 |
| :---- |

| STOP 4 Responder ORALMENTE al compañero antes de continuar: Prueba \#4: ¿Dio error 400 o 500? Si dio 500, el servidor se cayó — exactamente lo que vimos en el video de EdTeam. ¿Cómo lo corrigen: le piden a la IA que agregue validación, o crean un validation pipe como en el video? |
| :---- |

**Fase 5 — CHANGES.md**

| Pedir a Cursor: "Actualiza CHANGES.md con un resumen de lo que acabas de crear para el módulo Pedidos: qué archivos creaste, qué relaciones configuraste, qué decisiones tomaste, qué dependencias necesita." |
| :---- |

**Fase 6 — Merge**

| git add . git commit \-m "PRESAID-D3-B: módulo Pedidos con relaciones" git checkout main git merge feature/pedidos \# Si hay conflictos: \#   1\. Abrir los archivos con \<\<\<\< \====  \>\>\>\> \#   2\. Elegir qué código mantener \#   3\. git add . && git commit git push origin main git branch \-d feature/pedidos |
| :---- |

| COMMIT — BLOQUE B \# Merge ya hecho arriba *Marcar \[ \] B como \[x\] B* |
| :---- |

| BLOQUE C — Manejo de Errores \+ Swagger \+ Cierre |
| :---: |

Si los errores 400 ya funcionan correctamente, saltar al paso de Swagger. Si todavía dan 500:

| PROMPT DE CORRECCIÓN: En el módulo Pedidos, cuando se envía un mesaId o platoId que no existe en la base de datos, el servidor responde con error 500\. Corrige para que responda con error 400 (BadRequestException) con un mensaje claro indicando qué ID no existe. NO modifiques otros módulos. Solo corrige en pedidos.service.ts. |
| :---- |

| STOP 5 Responder ORALMENTE al compañero antes de continuar: ¿Cuántos intentos le tomó a la IA corregir los errores 400? Si fueron más de 3: ¿aplicaron la regla o siguieron parcheando? Si aplicaron la regla, ¿qué hicieron: diagnóstico con Gemini CLI o git stash? |
| :---- |

**Swagger — documentación viva de la API**

| Si Swagger no está configurado en el proyecto, pedir a Cursor: "Configura Swagger en este proyecto NestJS. Quiero ver la documentación en http://localhost:3000/api" Una vez configurado, abrir http://localhost:3000/api en el navegador. Swagger muestra TODOS los endpoints con sus DTOs, tipos y ejemplos. Verificar: ¿aparecen los 3 módulos (Platos, Mesas, Pedidos)? |
| :---- |

| STOP 6 Responder ORALMENTE al compañero antes de continuar: Miren Swagger. ¿Los endpoints de Pedidos muestran las relaciones (mesaId, platoIds)? ¿La documentación es suficiente para que OTRA persona use su API sin ver el código? Si no, ¿qué falta? |
| :---- |

| 📚 APRENDIZAJES DEL DÍA 3 • Módulos con relaciones (ManyToOne, ManyToMany) — complejidad real • La IA puede romper módulos existentes al crear relaciones — verificar SIEMPRE • Error 500 \= mal manejo. Error 400 \= validación correcta. La diferencia importa. • Regla de los 3 intentos: si la IA parchea 3 veces sin resolver → rehacer • Git stash \+ volver al commit limpio es más rápido que parchear infinitamente • Swagger como documentación viva — otros pueden usar tu API sin leer tu código • CHANGES.md como registro de lo que la IA hizo — proto-documentación para agentes |
| :---- |

| ENTREGABLE DEL DÍA 3 MVP mostrable: POST /pedidos crea un pedido real vinculado a mesa y platos. GET /pedidos retorna pedidos con relaciones cargadas. Archivo: entregables/d3-entregable.md 1\. Checklist R1-R11 completada 2\. Predicciones 3 y 4 con resultado real 3\. Screenshot: Swagger mostrando los 3 módulos 4\. Screenshot: POST /pedidos exitoso \+ GET /pedidos con relaciones 5\. ¿Aplicaron la regla de los 3 intentos? ¿Cuándo? |
| :---- |

| LOOM — Máximo 5 minutos 0:00-0:30 — "Soy \[nombre\], Sala \[X\], PRE-SAID Día 3." 0:30-2:30 — Terminal: POST /pedidos con curl \+ GET /pedidos mostrando relaciones. OBLIGATORIO. 2:30-3:30 — Swagger en navegador: mostrar los 3 módulos documentados. 3:30-4:30 — ¿La IA rompió algo al crear relaciones? ¿Cómo lo resolvieron? 4:30-5:00 — ¿Usaron la regla de los 3 intentos? ¿Funcionó? Sin escena de terminal con POST /pedidos → Loom no válido. |
| :---- |

| FEEDBACK — feedback\_dia3\_\[tunombre\].md 1\. ¿Las relaciones (ManyToOne, ManyToMany) fueron difíciles para la IA o las hizo bien? 2\. ¿La IA rompió Platos o Mesas al crear Pedidos? 3\. ¿Los comandos curl para testing fueron útiles? 4\. ¿La regla de los 3 intentos es clara? ¿La aplicaron? 5\. ¿Swagger fue fácil de configurar? 6\. ¿Tiempo total del día? 7\. ¿Qué debería mejorar este documento? |
| :---- |

| COMMIT — FINAL \+ PR git add . git commit \-m "PRESAID-D3-FINAL: Pedidos con relaciones \+ Swagger \+ errores 400" git push origin main \# Crear Pull Request → asignar como reviewer a la sala par \# ⚠️ PR NO es válido sin feedback\_dia3\_\[tunombre\].md  |
| :---- |

| STOP 7 Responder ORALMENTE al compañero antes de continuar: Mañana van a completar el backend (Comandas \+ Tickets) y empezar el frontend. Pedidos fue el módulo más complejo hasta ahora. Pregunta: ¿confían en que su código está limpio o sospechan que hay errores que no detectaron? ¿Qué harían para estar seguros? |
| :---- |

| RUTA — PRE-SAID: Desarrollo Moderno con IA y CLI |
| :---: |

| Día 1 — Dos Capas: CLI \+ IDE — Setup \+ Platos ✓ |
| :---- |
| Día 2 — Code Review a fondo \+ Mesas ✓ |
| **▶ DÍA 3 — Relaciones \+ Manejo de errores (Pedidos) ← HOY** |
| Día 4 — Backend completo \+ Frontend con IA |
| Día 5 — Deploy: restaurante en producción |
| Día 6 — Swap de repos |
| Día 7 — Cambio de requisitos \+ diagnóstico cruzado |
| Día 8 — Proyecto personal libre |
| Día 9 — Retrospectiva \+ ¿por qué se rompió? |
| Día 10 — Loom final \+ Gate para SAID |

*PRE-SAID — Desarrollo Moderno con IA y CLI*

*RPSoft Bootcamp — Director: Wilber Peralta*

| PRE-SAID — Desarrollo Moderno con IA y CLI Día 4 · Backend Completo \+ Frontend con IA  |
| :---: |

| PRE-SAID — Desarrollo Moderno con IA y CLI Día 4 · Backend Completo \+ Frontend con IA |
| :---: |

| Servidor Discord: RPSoft → Pre proyectos → Tu sala Repositorio: tu repo de sala con Platos, Mesas y Pedidos funcionando Herramientas: Cursor (principal) Modalidad: Pair programming — Driver / Navigator — rotación 20 min |
| :---- |

| ESTADO ACTUAL — ¿Qué tienen del Día 3? ✓ Módulo Platos (CRUD) funcionando ✓ Módulo Mesas (CRUD \+ cambiarEstado) funcionando ✓ Módulo Pedidos (relaciones ManyToOne Mesa, ManyToMany Platos) funcionando ✓ Swagger en http://localhost:3000/api mostrando 3 módulos ✓ Errores 400 en vez de 500 para datos inválidos VERIFICAR: npm run start:dev → GET /platos, /mesas, /pedidos responden. Si algo falla → resolver ANTES de empezar. |
| :---- |

| 📋 Crear: checklists/presaid-d4.md \--- sala: I-SALAX curso: PRE-SAID — Desarrollo Moderno con IA y CLI dia: 4 estado: en\_progreso loom: (agregar link al terminar) \--- \#\# Bloques \- \[ \] A — Comandas \+ Tickets (cerrar backend) \- \[ \] B — Frontend Next.js: páginas del restaurante visibles en navegador \- \[ \] C — Flujo completo end-to-end \+ Loom \+ PR \#\# Verificación final \- \[ \] 5 módulos backend funcionando (Platos, Mesas, Pedidos, Comandas, Tickets) \- \[ \] Frontend Next.js mostrando datos del backend en el navegador \- \[ \] Flujo completo: crear mesa → crear platos → crear pedido → ver en frontend \- \[ \] CHANGES.md actualizado \- \[ \] feedback\_dia4\_\[tunombre\].md completado y commiteado \- \[ \] PR creado y enviado a sala par |
| :---- |

| COMMIT DE APERTURA — Daily Scrum git add checklists/presaid-d4.md git commit \-m "PRESAID-D4-START: \[ayer: Pedidos con relaciones \+ Swagger\] \[hoy: Comandas+Tickets+Frontend\] \[bloqueo: Z\]" git push origin main |
| :---- |

| OBJETIVO DEL DÍA 1\. Backend completo: 5 módulos (Platos, Mesas, Pedidos, Comandas, Tickets). 2\. Frontend Next.js con páginas que muestran datos REALES del backend. 3\. Ver el sistema de restaurante funcionando en el navegador por primera vez. 4\. Flujo end-to-end: mesa → platos → pedido → comanda → ticket. |
| :---- |

| REGLA DEL DÍA 4: Velocidad CON revisión Hoy construyen 2 módulos backend \+ un frontend completo. Es el día más productivo. Ya conocen el patrón de 3 días de backend. Comandas y Tickets son repetitivos. Vayan rápido en el backend, pero NO salten el code review. El Navigator sigue revisando. El frontend es NUEVO — ahí vayan más despacio y observen lo que la IA genera. |
| :---- |

| BLOQUE A — Cerrar Backend: Comandas \+ Tickets |
| :---: |

| Ya construyeron 3 módulos. El patrón es el mismo: 1\. Crear rama feature/ → 2\. Prompt → 3\. Code review → 4\. Verificar → 5\. Merge Hoy no hay videos antes de construir. Ya saben cómo funciona. Objetivo: terminar los 2 módulos en la mañana para dedicar la tarde al frontend. |
| :---- |

**MÓDULO 4 — Comandas (vista de cocina)**

| ¿Qué es una Comanda? En un restaurante, la comanda es lo que la cocina recibe: qué platos preparar y para qué mesa. En nuestro sistema: una Comanda es la vista de cocina de un Pedido. Relación: Comanda → Pedido (ManyToOne). Un pedido genera una comanda. |
| :---- |

| git checkout \-b feature/comandas |
| :---- |

| PROMPT PARA CURSOR: Crea el módulo Comandas completo. Una Comanda: \- Se genera a partir de un Pedido (relación ManyToOne con Pedido) \- Campos: id, pedidoId (FK), estado (recibida/en\_preparacion/lista), observaciones, createdAt, updatedAt \- El endpoint POST /comandas recibe un pedidoId y crea la comanda \- GET /comandas lista comandas con el pedido y sus platos incluidos (relations) \- PATCH /comandas/:id/estado cambia el estado de la comanda Lineamientos: TypeORM, class-validator, estructura estándar, validar que pedidoId exista. NO modifiques otros módulos. Exporta TypeOrmModule si es necesario. |
| :---- |

| PREDICCIÓN 5 Escribir ANTES de ver el resultado: Comandas depende de Pedidos, que depende de Mesas y Platos. ¿La IA importará solo PedidosModule o necesitará también PlatosModule y MesasModule para cargar las relaciones anidadas? Tu predicción: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ |
| :---- |

**Code review rápido \+ verificar:**

| npm run start:dev \# Crear una comanda: curl \-X POST http://localhost:3000/comandas \\   \-H "Content-Type: application/json" \\   \-d '{"pedidoId": 1, "observaciones": "Sin cebolla"}' \# Listar comandas con relaciones: curl http://localhost:3000/comandas |
| :---- |

| git add . git commit \-m "PRESAID-D4-COMANDAS: módulo Comandas completo" git checkout main && git merge feature/comandas git push origin main && git branch \-d feature/comandas |
| :---- |

| STOP 1 Responder ORALMENTE al compañero antes de continuar: Comandas fue más rápido que Pedidos. ¿Por qué? ¿El patrón se vuelve repetitivo? ¿Eso es bueno o malo? ¿Qué pasa cuando todo es repetitivo y dejas de revisar? |
| :---- |

**MÓDULO 5 — Tickets (boleta/factura)**

| ¿Qué es un Ticket? El ticket es la boleta o factura: el resumen de lo consumido en una mesa. Relación: Ticket → Mesa (ManyToOne) \+ lista de Pedidos de esa mesa. El total se calcula sumando los totales de los pedidos de la mesa. |
| :---- |

| git checkout \-b feature/tickets |
| :---- |

| PROMPT PARA CURSOR: Crea el módulo Tickets completo. Un Ticket: \- Pertenece a una Mesa (ManyToOne) \- Campos: id, mesaId (FK), total, metodoPago (efectivo/tarjeta), estado (abierto/pagado), createdAt \- POST /tickets recibe mesaId. Busca todos los pedidos de esa mesa y suma sus totales. \- GET /tickets/:id retorna el ticket con la mesa y los pedidos incluidos \- PATCH /tickets/:id/pagar cambia estado a 'pagado' y recibe metodoPago Lineamientos: validar que la mesa exista y tenga pedidos. Si no tiene pedidos → error 400\. NO modifiques otros módulos. Exporta TypeOrmModule si es necesario. |
| :---- |

| PREDICCIÓN 6 Escribir ANTES de ver el resultado: Tickets necesita consultar los pedidos de una mesa para calcular el total. ¿La IA hará una query directa a la tabla pedidos o usará el servicio de PedidosModule? ¿Cuál es mejor práctica? Tu predicción: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ |
| :---- |

**Code review \+ verificar:**

| npm run start:dev \# Generar un ticket para la mesa 1: curl \-X POST http://localhost:3000/tickets \\   \-H "Content-Type: application/json" \\   \-d '{"mesaId": 1}' \# Ver el ticket con detalle: curl http://localhost:3000/tickets/1 \# Verificar TODOS los módulos siguen funcionando: curl http://localhost:3000/platos curl http://localhost:3000/mesas curl http://localhost:3000/pedidos curl http://localhost:3000/comandas |
| :---- |

| git add . git commit \-m "PRESAID-D4-TICKETS: módulo Tickets completo" git checkout main && git merge feature/tickets git push origin main && git branch \-d feature/tickets |
| :---- |

| STOP 2 Responder ORALMENTE al compañero antes de continuar: Ya tienen 5 módulos backend. Abran Swagger (http://localhost:3000/api). ¿Los 5 módulos aparecen documentados? ¿La documentación es suficiente para que alguien use su API sin hablar con ustedes? |
| :---- |

| COMMIT — BLOQUE A \# Merges ya hechos arriba *Marcar \[ \] A como \[x\] A* |
| :---- |

| BLOQUE B — Frontend: Ver el Restaurante en el Navegador |
| :---: |

| MOMENTO CLAVE DEL CURSO Hasta ahora todo ha sido terminal y Postman. Hoy ven su sistema en un navegador por primera vez. Este es el poder del vibe coding: construir algo visible en horas, no en semanas. Pero también es donde las decisiones sin spec empiezan a costar — la IA va a tomar decisiones de UI que nadie definió. |
| :---- |

| 📺 VIDEO — Vibe Coding para no programadores v1 — Día 8 (React, Supabase, MCPs) React \+ feedback visual inmediato ⏱️ Ver desde 00:00 hasta 00:05:00 (≈5 min) Qué observar: El instructor crea un proyecto React con IA y ve el resultado en el navegador inmediatamente. Observen: la velocidad de tener algo visible. Eso es lo que van a hacer ahora con Next.js. |
| :---- |

| 📺 VIDEO — Vibe coding para Programadores — Cap 1, Lección 4 Diseño UI con IA ⏱️ Ver completo (≈10 min) Qué observar: El instructor usa UX Pilot para generar wireframes y mockups de alta fidelidad. Muestra cómo describir una página en texto para que la IA genere el diseño. No necesitan usar UX Pilot — pero observen CÓMO describe las páginas. |
| :---- |

**Fase 1 — Crear proyecto Next.js**

| El frontend será un proyecto SEPARADO del backend, en la misma carpeta del repo. Estructura del repo después de hoy:   tu-repo/     restaurante-backend/    ← NestJS (ya existe)     restaurante-frontend/   ← Next.js (crear ahora)     checklists/     entregables/ |
| :---- |

| git checkout \-b feature/frontend |
| :---- |

| PROMPT PARA CURSOR (en la raíz del repo): Crea un proyecto Next.js 14 con App Router en la carpeta restaurante-frontend/. Usa TypeScript y Tailwind CSS. NO instales dependencias automáticamente — dame el comando para hacerlo yo. |
| :---- |

| SOS — Si Next.js pide muchas opciones al instalar: Ejecutar directamente: npx create-next-app@latest restaurante-frontend \--typescript \--tailwind \--app \--src-dir \--eslint Si hay errores de versión: agregar \--legacy-peer-deps después de npm install. |
| :---- |

**Fase 2 — Generar páginas del restaurante**

| Ahora van a pedirle a Cursor que genere las páginas del sistema. El backend corre en http://localhost:3000. El frontend correrá en http://localhost:3001. Las páginas harán fetch al backend para mostrar datos reales. |
| :---- |

| PROMPT PARA CURSOR (dentro de restaurante-frontend/): Crea las siguientes páginas para este proyecto Next.js 14 (App Router): 1\. Página principal (/) — Dashboard del restaurante:    \- Título: 'Sistema de Restaurante'    \- Tarjetas resumen: total platos, total mesas, pedidos del día    \- Navegación a las otras páginas 2\. Página /platos — Lista de platos:    \- Tabla con nombre, precio, disponible    \- Botón para crear nuevo plato (formulario simple)    \- Fetch a http://localhost:3000/platos 3\. Página /mesas — Estado de las mesas:    \- Cards con cada mesa: número, capacidad, estado (color según estado)    \- Botón para cambiar estado    \- Fetch a http://localhost:3000/mesas 4\. Página /pedidos — Pedidos activos:    \- Lista de pedidos con mesa, platos, estado, total    \- Formulario para crear pedido (seleccionar mesa y platos)    \- Fetch a http://localhost:3000/pedidos Lineamientos: \- Tailwind CSS para estilos. Diseño limpio y funcional. \- Componentes Client cuando necesiten interactividad (formularios, botones) \- Manejo de errores: si el backend no responde, mostrar mensaje claro \- Navegación con Link de Next.js NO hagas: \- No uses autenticación por ahora \- No crees API routes en Next.js — el backend ya existe en NestJS |
| :---- |

| PREDICCIÓN 7 Escribir ANTES de ver el resultado: La IA va a crear varias páginas y componentes. ¿Cuántos archivos creará? ¿Generará componentes reutilizables o repetirá código en cada página? ¿Manejará los errores de fetch o asumirá que el backend siempre responde? Tu predicción: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ |
| :---- |

| STOP 3 Responder ORALMENTE al compañero antes de continuar: ANTES de aceptar: la IA va a tomar decisiones de diseño (colores, layout, estructura). Nadie definió esas decisiones. ¿Quién decide cómo se ve la app: ustedes o la IA? ¿Está bien que la IA decida? ¿Qué pasa en un equipo de 10 personas donde cada uno le pide a la IA algo diferente? |
| :---- |

**Fase 3 — Levantar y ver**

| Asegurarse de que el backend esté corriendo: Terminal 1: cd restaurante-backend && npm run start:dev Terminal 2: cd restaurante-frontend && npm run dev \-- \-p 3001 Abrir http://localhost:3001 en el navegador. |
| :---- |

| SOS — CORS: si el frontend no puede conectar al backend: Error típico: 'CORS policy: No Access-Control-Allow-Origin' Solución: en restaurante-backend/src/main.ts, agregar antes de app.listen():   app.enableCors(); O pedir a Cursor: 'Habilita CORS en el main.ts del backend para permitir peticiones desde localhost:3001' |
| :---- |

| STOP 4 Responder ORALMENTE al compañero antes de continuar: Abran el navegador. ¿Ven datos reales del backend? ¿Los platos que crearon en días anteriores aparecen? Si sí: este es el momento 'wow' del vibe coding — sistema completo visible en 4 días. Si no: ¿qué falta? |
| :---- |

**Fase 4 — Code review del frontend**

| \# | Qué revisar | ✓ |
| :---- | :---- | :---- |
| F1 | ¿Las páginas hacen fetch a http://localhost:3000 (backend real)? |  |
| F2 | ¿Si el backend no responde, muestra mensaje de error (no pantalla blanca)? |  |
| F3 | ¿La navegación funciona entre todas las páginas? |  |
| F4 | ¿El formulario de crear plato realmente crea un plato en el backend? |  |
| F5 | ¿El cambio de estado de mesa se refleja sin refrescar la página? |  |
| F6 | ¿La IA creó componentes reutilizables o repitió código? |  |
| F7 | ¿Los estilos Tailwind se ven coherentes entre páginas? |  |

**Fase 5 — CHANGES.md \+ Merge**

| Pedir a Cursor: "Actualiza CHANGES.md: agrega los módulos Comandas y Tickets del backend, y todas las páginas del frontend con sus componentes." |
| :---- |

| git add . git commit \-m "PRESAID-D4-B: frontend Next.js con 4 páginas" git checkout main && git merge feature/frontend git push origin main && git branch \-d feature/frontend |
| :---- |

| COMMIT — BLOQUE B \# Merge hecho arriba *Marcar \[ \] B como \[x\] B* |
| :---- |

| BLOQUE C — Flujo Completo End-to-End \+ Cierre |
| :---: |

**Probar el flujo completo del restaurante:**

| Paso | Acción | Dónde verificar |
| :---- | :---- | :---- |
| 1 | Crear platos (Lomo, Ceviche, Ají de gallina) | Frontend: /platos o Postman POST |
| 2 | Crear mesas (Mesa 1 cap 4, Mesa 2 cap 2\) | Frontend: /mesas o Postman POST |
| 3 | Crear pedido: Mesa 1, platos \[Lomo, Ceviche\] | Frontend: /pedidos o Postman POST |
| 4 | Ver pedido con relaciones cargadas | Frontend: /pedidos → mesa y platos visibles |
| 5 | Crear comanda del pedido | Postman: POST /comandas |
| 6 | Generar ticket de Mesa 1 | Postman: POST /tickets |

| STOP 5 Responder ORALMENTE al compañero antes de continuar: ¿El flujo completo funciona de punta a punta? Si funciona: tienen un MVP de restaurante en 4 días. Mañana lo van a desplegar en una URL pública. Si no funciona: ¿qué falta? |
| :---- |

| STOP 6 Responder ORALMENTE al compañero antes de continuar: Pregunta más profunda: este sistema lo construyeron en 4 días con IA. ¿Podrían mantenerlo 6 meses? ¿Podrían agregar un módulo de 'Reservas' sin romper algo? ¿Podrían pasárselo a otro equipo y que lo entiendan? ¿CHANGES.md es suficiente documentación? |
| :---- |

| 📚 APRENDIZAJES DEL DÍA 4 • La velocidad del vibe coding: 5 módulos backend \+ frontend en 4 días • Frontend con IA: la IA toma decisiones de diseño que nadie definió • CORS: problema clásico de backend \+ frontend separados • Flujo end-to-end: la prueba real es que todo conecte, no que cada módulo funcione solo • El patrón se vuelve repetitivo — pero lo repetitivo es peligroso si dejas de revisar • La pregunta: ¿esto es mantenible? → esa duda es la semilla de SAID |
| :---- |

| ENTREGABLE DEL DÍA 4 MVP mostrable: restaurante funcionando en el navegador. 1\. Screenshot: frontend mostrando platos, mesas y pedidos con datos reales 2\. Screenshot: Swagger con 5 módulos documentados 3\. Checklist F1-F7 completada 4\. Flujo completo probado (tabla de 6 pasos) 5\. Predicciones 5, 6, 7 con resultado real |
| :---- |

| LOOM — Máximo 5 minutos 0:00-0:30 — "Soy \[nombre\], Sala \[X\], PRE-SAID Día 4." 0:30-2:30 — Navegador: mostrar el frontend funcionando con datos reales. OBLIGATORIO. 2:30-3:30 — Swagger: los 5 módulos. Flujo completo demostrado. 3:30-4:30 — ¿Qué decisiones tomó la IA que ustedes no definieron? (diseño, estructura, colores) 4:30-5:00 — ¿Este sistema es mantenible? ¿Podrían pasarlo a otro equipo? Sin navegador mostrando frontend → Loom no válido. |
| :---- |

| FEEDBACK — feedback\_dia4\_\[tunombre\].md 1\. ¿Comandas y Tickets fueron rápidos de construir? ¿El patrón ayudó o generó confianza excesiva? 2\. ¿El frontend se generó bien o requirió muchas correcciones? 3\. ¿Tuvieron problemas de CORS? ¿El SOS fue útil? 4\. ¿La IA tomó decisiones de diseño que no les gustaron? ¿Cuáles? 5\. ¿El flujo end-to-end funcionó de primera o requirió debugging? 6\. ¿Tiempo total? 7\. ¿Qué debería mejorar este documento? |
| :---- |

| COMMIT — FINAL \+ PR git add . git commit \-m "PRESAID-D4-FINAL: 5 módulos backend \+ frontend Next.js" git push origin main \# Crear Pull Request → reviewer sala par \# ⚠️ PR NO es válido sin feedback\_dia4\_\[tunombre\].md  |
| :---- |

| STOP 7 Responder ORALMENTE al compañero antes de continuar: Mañana despliegan este sistema en una URL pública — cualquier persona podrá acceder. ¿Está listo para eso? ¿Hay errores que solo aparecen en producción y no en localhost? ¿Variables de entorno? ¿Base de datos? |
| :---- |

| RUTA — PRE-SAID: Desarrollo Moderno con IA y CLI |
| :---: |

| Día 1 — Dos Capas: CLI \+ IDE — Setup \+ Platos ✓ |
| :---- |
| Día 2 — Code Review a fondo \+ Mesas ✓ |
| Día 3 — Relaciones \+ Manejo de errores (Pedidos) ✓ |
| **▶ DÍA 4 — Backend completo \+ Frontend con IA ← HOY** |
| Día 5 — Deploy: restaurante en producción |
| Día 6 — Swap de repos |
| Día 7 — Cambio de requisitos \+ diagnóstico cruzado |
| Día 8 — Proyecto personal libre |
| Día 9 — Retrospectiva \+ ¿por qué se rompió? |
| Día 10 — Loom final \+ Gate para SAID |

*PRE-SAID — Desarrollo Moderno con IA y CLI*

*RPSoft Bootcamp — Director: Wilber Peralta*

| PRE-SAID — Desarrollo Moderno con IA y CLI Día 5 · Deploy: El Restaurante en Producción |
| :---: |

| FIN DE LA SEMANA 1 Hoy terminan con una URL pública que pueden compartir. Cualquier persona con el link ve su restaurante. Esto es el pico de la euforia del vibe coding: un sistema completo en 5 días. La semana 2 empieza con el dolor. Pero hoy, celebren lo que construyeron. |
| :---- |

| Servidor Discord: RPSoft → Pre proyectos → Tu sala Repositorio: tu repo con 5 módulos backend \+ frontend Next.js Herramientas: Cursor \+ servicios de deploy (Render, Vercel) Modalidad: Pair programming — Driver / Navigator — rotación 20 min |
| :---- |

| ESTADO ACTUAL — ¿Qué tienen del Día 4? ✓ Backend: 5 módulos (Platos, Mesas, Pedidos, Comandas, Tickets) ✓ Frontend: Next.js con páginas de dashboard, platos, mesas, pedidos ✓ Flujo end-to-end funcionando en localhost ✓ Swagger en http://localhost:3000/api VERIFICAR: backend en :3000 \+ frontend en :3001, ambos funcionando. Si el flujo end-to-end no funciona → resolver ANTES de intentar deploy. |
| :---- |

| 📋 Crear: checklists/presaid-d5.md \--- sala: I-SALAX curso: PRE-SAID — Desarrollo Moderno con IA y CLI dia: 5 estado: en\_progreso loom: (agregar link al terminar) \--- \#\# Bloques \- \[ \] A — Preparar para producción (PostgreSQL \+ variables de entorno) \- \[ \] B — Deploy backend (Render/Railway) \+ frontend (Vercel) \- \[ \] C — Verificación en producción \+ Loom \+ PR \#\# Verificación final \- \[ \] Backend accesible por URL pública (https://...) \- \[ \] Frontend accesible por URL pública (https://...) \- \[ \] Frontend muestra datos reales del backend en producción \- \[ \] CHANGES.md actualizado con URLs de producción \- \[ \] feedback\_dia5\_\[tunombre\].md completado y commiteado \- \[ \] PR creado y enviado a sala par |
| :---- |

| COMMIT DE APERTURA — Daily Scrum git add checklists/presaid-d5.md git commit \-m "PRESAID-D5-START: \[ayer: 5 módulos \+ frontend\] \[hoy: Deploy a producción\] \[bloqueo: Z\]" git push origin main |
| :---- |

| OBJETIVO DEL DÍA 1\. Migrar de SQLite a PostgreSQL para producción. 2\. Desplegar backend en Render (o Railway) con URL pública. 3\. Desplegar frontend en Vercel con URL pública. 4\. Sistema completo funcionando en internet — compartible con cualquiera. |
| :---- |

| REGLA DEL DÍA 5: No deploy sin verificar Desplegar código que no funciona en localhost NO va a funcionar mágicamente en producción. Si algo falla en local → arreglar ANTES de desplegar. Variables de entorno NUNCA van en el código. Si la IA las pone en el código → rechazar. |
| :---- |

| BLOQUE A — Preparar para Producción |
| :---: |

| 📺 VIDEO — Vibe Coding para no programadores v1 — Día 8 (React, Supabase, MCPs) Deploy: build \+ variables de entorno \+ producción ⏱️ Ver desde 01:38:35 hasta 01:55:00 (≈16 min) Qué observar: El instructor hace npm run build, configura variables de entorno, y despliega a Netlify. Observen: qué cambia entre desarrollo y producción. Variables de entorno, URLs, build. |
| :---- |

| 📺 VIDEO — Vibe coding para Programadores — Cap 5, Lección 4 Deploy a producción con IA ⏱️ Ver completo (≈10 min) Qué observar: El instructor despliega su proyecto NestJS+Next.js a producción. Observen los pasos y los errores que aparecen solo en producción. |
| :---- |

**Fase 1 — Migrar de SQLite a PostgreSQL**

| ¿Por qué migrar? SQLite es un archivo local (db.sqlite). Funciona en tu máquina pero NO en servidores de producción como Render o Railway. PostgreSQL es una base de datos real que los servicios de deploy proveen. La migración es cambiar la configuración de TypeORM — el código de los módulos NO cambia. |
| :---- |

| PROMPT PARA CURSOR: Necesito preparar el backend para producción. 1\. Cambia la configuración de TypeORM de SQLite a PostgreSQL. 2\. Usa variables de entorno para la conexión:    DATABASE\_URL (una URL completa de PostgreSQL)    O variables separadas: DB\_HOST, DB\_PORT, DB\_USER, DB\_PASSWORD, DB\_NAME 3\. Si DATABASE\_URL no está definida, usa SQLite como fallback para desarrollo local. 4\. Crea un archivo .env.example con las variables necesarias (sin valores reales). 5\. Asegúrate de que .env está en .gitignore. Lineamientos: \- Instalar pg como driver de PostgreSQL \- synchronize: true para que TypeORM cree las tablas automáticamente \- NO hardcodear ninguna credencial en el código |
| :---- |

| SOS — ¿Por qué synchronize: true en producción? En un proyecto real, synchronize: true en producción es MALA PRÁCTICA — puede borrar datos. Para PRE-SAID está bien porque: (1) es un MVP de aprendizaje, (2) no tienen datos reales, (3) las migraciones formales son tema de SAID. Cuando lleguen a SAID, aprenderán a usar synchronize: false con migraciones controladas. |
| :---- |

| PREDICCIÓN 8 Escribir ANTES de ver el resultado: Al cambiar de SQLite a PostgreSQL, ¿qué archivos modificará la IA? ¿Solo la configuración o también las entidades? ¿Necesitará cambiar algo en los DTOs o servicios? Tu predicción: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ |
| :---- |

| STOP 1 Responder ORALMENTE al compañero antes de continuar: Revisen: ¿la IA puso credenciales reales en algún archivo que se va a commitear? Busquen en todo el proyecto: passwords, URLs de base de datos, tokens. Si encuentran algo → borrar INMEDIATAMENTE y pedirle a la IA que use variables de entorno. |
| :---- |

**Fase 2 — Preparar el frontend para producción**

| PROMPT PARA CURSOR (en restaurante-frontend/): Prepara el frontend para producción: 1\. Crea una variable de entorno NEXT\_PUBLIC\_API\_URL que apunte al backend. 2\. Reemplaza todos los 'http://localhost:3000' hardcodeados por process.env.NEXT\_PUBLIC\_API\_URL. 3\. En desarrollo: NEXT\_PUBLIC\_API\_URL=http://localhost:3000 4\. En producción: será la URL del backend desplegado. 5\. Agrega NEXT\_PUBLIC\_API\_URL al .env.example |
| :---- |

| STOP 2 Responder ORALMENTE al compañero antes de continuar: Busquen 'localhost:3000' en todo el frontend. ¿La IA reemplazó TODOS los hardcodes? Si queda uno solo, el frontend en producción no va a conectar al backend. |
| :---- |

| COMMIT — BLOQUE A git add . git commit \-m "PRESAID-D5-A: preparar producción PostgreSQL \+ env vars" git push origin main *Marcar \[ \] A como \[x\] A* |
| :---- |

| BLOQUE B — Deploy: Backend \+ Frontend |
| :---: |

| Opciones de deploy (gratuitas): Backend: Render (render.com) — incluye PostgreSQL gratuito. Frontend: Vercel (vercel.com) — optimizado para Next.js, deploy automático. Alternativas: Railway (railway.app), Fly.io, Supabase para la DB. |
| :---- |

**Fase 3 — Deploy del backend en Render**

| Pasos en render.com: 1\. Crear cuenta en render.com (gratis con GitHub). 2\. Crear un New PostgreSQL → copiar la Internal Database URL. 3\. Crear un New Web Service → conectar tu repo de GitHub. 4\. Configurar:    Root Directory: restaurante-backend    Build Command: npm install && npm run build    Start Command: npm run start:prod 5\. En Environment Variables agregar:    DATABASE\_URL \= (la URL de PostgreSQL que copiaste) 6\. Deploy. Esperar a que termine el build. 7\. Render te da una URL: https://tu-app.onrender.com |
| :---- |

| SOS — Errores comunes en deploy de backend: 'Cannot find module' → falta npm install en el build command. 'ECONNREFUSED database' → DATABASE\_URL mal configurada o PostgreSQL no creado. 'Port already in use' → asegurarse de que main.ts usa process.env.PORT || 3000\. El backend tarda \~2-3 min en arrancar en el tier gratuito de Render. |
| :---- |

**Verificar backend en producción:**

| curl https://tu-app.onrender.com/platos \# Debe responder con el array de platos (vacío si no hay datos) |
| :---- |

| STOP 3 Responder ORALMENTE al compañero antes de continuar: ¿El backend responde en la URL pública? Si responde vacío \[\] es correcto — la base de datos de producción es nueva, no tiene datos. Pueden crear platos con POST directamente a la URL de producción. |
| :---- |

**Fase 4 — Deploy del frontend en Vercel**

| Pasos en vercel.com: 1\. Crear cuenta en vercel.com (gratis con GitHub). 2\. Import Project → seleccionar tu repo de GitHub. 3\. Configurar:    Root Directory: restaurante-frontend    Framework Preset: Next.js (auto-detectado) 4\. En Environment Variables agregar:    NEXT\_PUBLIC\_API\_URL \= https://tu-app.onrender.com 5\. Deploy. Vercel build automáticamente. 6\. Vercel te da una URL: https://tu-app.vercel.app |
| :---- |

| SOS — Frontend no conecta al backend en producción: 1\. Verificar que NEXT\_PUBLIC\_API\_URL apunta a la URL correcta del backend. 2\. Verificar que el backend tiene CORS habilitado para la URL del frontend.    En main.ts: app.enableCors({ origin: 'https://tu-app.vercel.app' })    O más permisivo: app.enableCors() (acepta cualquier origen). 3\. Si cambiaste la URL de CORS, hacer push → Render redeploya automáticamente. |
| :---- |

| PREDICCIÓN 9 Escribir ANTES de ver el resultado: ¿El frontend en producción mostrará datos o estará vacío? ¿Qué necesitan hacer para que tenga datos? ¿Los datos de localhost se transfieren a producción? Tu predicción: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ |
| :---- |

| STOP 4 Responder ORALMENTE al compañero antes de continuar: Los datos de localhost NO se transfieren. La base de datos de producción es nueva y vacía. Necesitan crear platos, mesas, pedidos desde cero en producción. Esto es normal — en producción real se usan seeds o migraciones con datos iniciales. |
| :---- |

| COMMIT — BLOQUE B git add . git commit \-m "PRESAID-D5-B: deploy configurado" git push origin main *Marcar \[ \] B como \[x\] B* |
| :---- |

| BLOQUE C — Verificación en Producción \+ Cierre |
| :---: |

**Crear datos de prueba en producción:**

| \# Reemplazar URL por la de tu backend en Render: export API=https://tu-app.onrender.com \# Crear platos curl \-X POST $API/platos \-H 'Content-Type: application/json' \\   \-d '{"nombre":"Lomo Saltado","precio":35,"disponible":true}' curl \-X POST $API/platos \-H 'Content-Type: application/json' \\   \-d '{"nombre":"Ceviche","precio":42,"disponible":true}' \# Crear mesa curl \-X POST $API/mesas \-H 'Content-Type: application/json' \\   \-d '{"numero":1,"capacidad":4,"estado":"disponible"}' \# Crear pedido curl \-X POST $API/pedidos \-H 'Content-Type: application/json' \\   \-d '{"mesaId":1,"platoIds":\[1,2\]}' |
| :---- |

**Verificar flujo completo en producción:**

| \# | Verificación | URL | ✓ |
| :---- | :---- | :---- | :---- |
| D1 | Backend responde | https://tu-app.onrender.com/platos |  |
| D2 | Swagger funciona | https://tu-app.onrender.com/api |  |
| D3 | Frontend carga | https://tu-app.vercel.app |  |
| D4 | Frontend muestra platos del backend | Página /platos |  |
| D5 | Crear pedido desde frontend funciona | Página /pedidos |  |
| D6 | URL compartible — abrir desde otro dispositivo o incógnito | Teléfono o tablet |  |

| STOP 5 Responder ORALMENTE al compañero antes de continuar: Abran la URL del frontend en su teléfono o en una ventana de incógnito. ¿Funciona? ¿Se ve bien en móvil? ¿Otro equipo puede acceder a su sistema sin estar en su red? Esto es producción real. |
| :---- |

| STOP 6 Responder ORALMENTE al compañero antes de continuar: Reflexión de cierre de Semana 1: en 5 días construyeron un sistema de restaurante completo con 5 módulos backend, frontend, y deploy en producción. Todo con IA. La pregunta: ¿podrían cambiar el sistema de restaurante a un sistema de hotel sin romper todo? ¿Podrían agregar autenticación? ¿Podrían pasar este código a 3 personas nuevas? La semana que viene van a descubrir las respuestas. |
| :---- |

**Actualizar CHANGES.md con URLs de producción:**

| \# Agregar al final de CHANGES.md: \#\# Deploy — Día 5 \- Backend: https://tu-app.onrender.com \- Frontend: https://tu-app.vercel.app \- Base de datos: PostgreSQL en Render |
| :---- |

| 📚 APRENDIZAJES DEL DÍA 5 • Migrar de SQLite (desarrollo) a PostgreSQL (producción) — solo cambia configuración • Variables de entorno: NUNCA credenciales en el código • Deploy de NestJS en Render \+ Next.js en Vercel — servicios gratuitos • CORS: el problema \#1 de backend \+ frontend en dominios diferentes • Producción ≠ localhost: base de datos vacía, URLs diferentes, tiempos de carga • En 5 días: de cero a un sistema en producción. Ese es el poder del vibe coding. • La pregunta pendiente: ¿es mantenible, escalable, entendible por otros? |
| :---- |

| ENTREGABLE DEL DÍA 5 — FIN DE SEMANA 1 MVP mostrable: restaurante en URL pública. Archivo: entregables/d5-entregable.md 1\. URL del backend: https://... 2\. URL del frontend: https://... 3\. URL de Swagger: https://.../api 4\. Checklist D1-D6 completada 5\. Screenshot: frontend en producción mostrando datos reales 6\. Screenshot: app abierta desde teléfono o incógnito |
| :---- |

| LOOM — Máximo 5 minutos 0:00-0:30 — "Soy \[nombre\], Sala \[X\], PRE-SAID Día 5\. Fin de Semana 1." 0:30-2:30 — Navegador: frontend EN PRODUCCIÓN mostrando datos. OBLIGATORIO. 2:30-3:30 — Swagger en producción: los 5 módulos visibles. 3:30-4:30 — ¿Qué fue lo más difícil del deploy? ¿Variables de entorno? ¿CORS? ¿PostgreSQL? 4:30-5:00 — ¿Este sistema es mantenible? ¿Lo podrían pasar a otro equipo? Sin navegador mostrando URL de producción → Loom no válido. |
| :---- |

| FEEDBACK — feedback\_dia5\_\[tunombre\].md 1\. ¿La migración de SQLite a PostgreSQL fue fácil? ¿La IA la hizo bien? 2\. ¿Render fue fácil de configurar? ¿Errores? 3\. ¿Vercel fue fácil de configurar? ¿Errores? 4\. ¿CORS fue un problema? ¿Cómo lo resolvieron? 5\. ¿Variables de entorno: la IA las manejó bien o puso credenciales en el código? 6\. ¿Tiempo total? 7\. ¿Qué debería mejorar este documento? |
| :---- |

| COMMIT — FINAL \+ PR git add . git commit \-m "PRESAID-D5-FINAL: deploy producción — backend Render \+ frontend Vercel" git push origin main \# Crear Pull Request → reviewer sala par \# ⚠️ PR NO es válido sin feedback\_dia5\_\[tunombre\].md \# ⚠️ El entregable DEBE incluir las URLs de producción funcionando  |
| :---- |

| STOP 7 Responder ORALMENTE al compañero antes de continuar: Semana 1 completada. Lunes empiezan la Semana 2: van a recibir el código de OTRA sala y van a intentar modificarlo. Pregunta para el fin de semana: ¿su código está listo para que otra persona lo entienda SIN hablar con ustedes? |
| :---- |

| RUTA — PRE-SAID: Desarrollo Moderno con IA y CLI |
| :---: |

| Día 1 — Dos Capas: CLI \+ IDE — Setup \+ Platos ✓ |
| :---- |
| Día 2 — Code Review a fondo \+ Mesas ✓ |
| Día 3 — Relaciones \+ Manejo de errores (Pedidos) ✓ |
| Día 4 — Backend completo \+ Frontend con IA ✓ |
| **▶ DÍA 5 — Deploy: restaurante en producción ← HOY — FIN SEMANA 1** |
| Día 6 — Swap de repos |
| Día 7 — Cambio de requisitos \+ diagnóstico cruzado |
| Día 8 — Proyecto personal libre |
| Día 9 — Retrospectiva \+ ¿por qué se rompió? |
| Día 10 — Loom final \+ Gate para SAID |

*PRE-SAID — Desarrollo Moderno con IA y CLI*

*RPSoft Bootcamp — Director: Wilber Peralta*

# NUEVA ETAPA (continuamos)

| PRE-SAID — Desarrollo Moderno con IA y CLI Día 6 · Swap de Repos: Trabajar en Código Ajeno |
| :---: |

| INICIO DE LA SEMANA 2 — EL DOLOR La semana 1 fue la euforia: construyeron un sistema completo en 5 días. La semana 2 es la realidad: ¿ese sistema sobrevive al contacto con otras personas? Hoy van a trabajar en el código de OTRA sala. No pueden hablar con el equipo original. Todo lo que tienen es el código, la IA, y su criterio. Si el código ajeno es confuso, difícil de entender, o imposible de modificar sin romper algo — eso es exactamente el punto del ejercicio. |
| ----- |

| Servidor Discord: RPSoft → Pre proyectos → Tu sala Repositorio: HOY trabajan en el repo de OTRA sala (asignado por los admins) Herramientas: Cursor \+ Gemini CLI Modalidad: Pair programming — Driver / Navigator — rotación 20 min |
| :---- |

| ASIGNACIÓN DE REPOS — Los admins publican en Discord: Cada sala recibe el repo de otra sala para trabajar hoy. Ejemplo: Sala 7 trabaja en el repo de Sala 9\. Sala 9 trabaja en el de Sala 11\. Etc. NO pueden contactar a la sala original. No preguntar por Discord, no pedir explicaciones. Solo tienen: el código del repo \+ la IA \+ su criterio. |
| :---- |

| 📋 Crear en EL REPO AJENO: checklists/presaid-d6-swap.md \--- sala-original: I-SALAX (la sala dueña del repo) sala-trabajando: I-SALAY (tu sala, la que está haciendo el swap) curso: PRE-SAID — Desarrollo Moderno con IA y CLI dia: 6 estado: en\_progreso loom: (agregar link al terminar) \--- \#\# Bloques \- \[ \] A — Explorar código ajeno: entender sin preguntar \- \[ \] B — Agregar feature: Reseñas de Clientes al módulo Platos \- \[ \] C — Documentar: qué fue imposible y por qué \#\# Verificación final \- \[ \] Feature de reseñas funciona (o documentación de por qué no fue posible) \- \[ \] Documento de hallazgos: qué faltó en el repo para poder trabajar \- \[ \] feedback\_dia6\_\[tunombre\].md completado y commiteado \- \[ \] PR creado en el repo ajeno |
| :---- |

| COMMIT DE APERTURA — Daily Scrum (en el repo AJENO) git add checklists/presaid-d6-swap.md git commit \-m "PRESAID-D6-START: \[ayer: deploy producción\] \[hoy: swap \- feature reseñas en repo ajeno\] \[bloqueo: ninguno aún\]" git push origin main |
| :---- |

| OBJETIVO DEL DÍA 1\. Explorar y entender un proyecto que NO escribieron. 2\. Agregar una feature nueva (Reseñas) al código ajeno. 3\. Documentar TODO lo que faltó para poder trabajar. 4\. Descubrir por qué el vibe coding crea código que nadie más entiende. |
| :---- |

| REGLA DEL DÍA 6: Silencio total NO contactar a la sala original. No por Discord, no por WhatsApp, no en persona. El código debe hablar por sí mismo. Si no habla → ese es el problema. Pueden usar la IA para entender el código. La IA es su único asistente hoy. |
| :---- |

| BLOQUE A — Explorar Código Ajeno |
| :---: |

**Fase 1 — Clonar y levantar**

| \# Clonar el repo ajeno (URL proporcionada por admins) git clone \[URL\_REPO\_AJENO\] cd \[nombre-del-repo\] \# Intentar levantar el backend cd restaurante-backend npm install npm run start:dev |
| :---- |

| PREDICCIÓN 10 Escribir ANTES de ver el resultado: ¿El proyecto ajeno levantará a la primera? ¿Tendrá un README que explique cómo configurarlo? ¿Las variables de entorno estarán documentadas o tendrás que adivinar? Tu predicción: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ |
| :---- |

| SOS — Si el proyecto no levanta: 1\. ¿Hay .env.example? Copiar a .env y llenar valores. 2\. ¿Usa SQLite o PostgreSQL? Buscar en la configuración de TypeORM. 3\. ¿Faltan dependencias? npm install \--legacy-peer-deps 4\. ¿Errores de TypeORM? Verificar que la DB esté accesible. 5\. Si nada funciona después de 20 minutos → documentar qué falla y seguir al Bloque B con lo que puedan. |
| :---- |

| STOP 1 Responder ORALMENTE al compañero antes de continuar: ¿El proyecto levantó? ¿Cuánto tiempo tardaron? ¿Había README, .env.example, o CHANGES.md? ¿Qué tuvieron que adivinar? Anoten TODO — esto es el hallazgo más importante del día. |
| :---- |

**Fase 2 — Entender la estructura**

| PROMPT PARA CURSOR (abrir el repo ajeno en Cursor): Analiza este proyecto NestJS. Dime: 1\. ¿Cuántos módulos tiene y cuáles son? 2\. ¿Qué relaciones existen entre las entidades? 3\. ¿Hay algo inusual o diferente a la estructura estándar de NestJS? 4\. ¿Dónde está configurada la base de datos? 5\. ¿Hay validaciones en los DTOs? |
| :---- |

| STOP 2 Responder ORALMENTE al compañero antes de continuar: Comparen lo que la IA les dice con lo que ven ustedes en el código. ¿La IA entiende el proyecto correctamente? ¿Hay decisiones que ni la IA puede explicar? Si la IA no entiende el código ajeno — ¿cómo lo entendería un humano nuevo en el equipo? |
| :---- |

**Fase 3 — Evaluación rápida del código ajeno**

| \# | Pregunta | Respuesta |
| :---- | :---- | :---- |
| E1 | ¿Tiene README con instrucciones de setup? |  |
| E2 | ¿Tiene .env.example con las variables necesarias? |  |
| E3 | ¿Tiene CHANGES.md documentando qué hizo la IA? |  |
| E4 | ¿Los nombres de variables y funciones son entendibles? |  |
| E5 | ¿Entiendes la estructura de carpetas sin ayuda de la IA? |  |
| E6 | ¿Las relaciones entre entidades están claras? |  |
| E7 | ¿Swagger funciona y documenta los endpoints? |  |
| E8 | ¿Podrías explicar el flujo completo (mesa → pedido → ticket) leyendo solo el código? |  |

| STOP 3 Responder ORALMENTE al compañero antes de continuar: Miren sus respuestas E1-E8. ¿Cuántas son 'NO'? Cada 'NO' es algo que la sala original no documentó. Cada 'NO' es tiempo perdido adivinando. Esto pasa en TODA empresa con código sin documentación. ¿Su propio repo tiene los mismos problemas? |
| :---- |

| COMMIT — BLOQUE A git add . git commit \-m "PRESAID-D6-A: exploración código ajeno completada" git push origin main *Marcar \[ \] A como \[x\] A* |
| :---- |

| BLOQUE B — Agregar Feature: Reseñas de Clientes |
| :---: |

| LA TAREA: Agregar un módulo de Reseñas al sistema del restaurante ajeno. Una Reseña:   \- Pertenece a un Plato (ManyToOne)   \- Campos: id, platoId, calificacion (1-5), comentario, nombreCliente, createdAt   \- GET /resenas → todas las reseñas   \- GET /resenas/plato/:platoId → reseñas de un plato específico   \- POST /resenas → crear una reseña   \- GET /platos/:id → ahora debe incluir las reseñas del plato y su calificación promedio |
| :---- |

| ESTA FEATURE MODIFICA CÓDIGO QUE USTEDES NO ESCRIBIERON Necesitan modificar el módulo Platos de otra persona para agregar la relación inversa (OneToMany). Necesitan entender cómo la otra sala estructuró sus entidades, DTOs y servicios. Si rompen algo que ya funcionaba → es exactamente el punto del ejercicio. |
| :---- |

| git checkout \-b feature/resenas |
| :---- |

| PREDICCIÓN 11 Escribir ANTES de ver el resultado: ¿Podrán agregar la relación en plato.entity.ts sin romper los endpoints existentes de Platos? ¿La IA entenderá la estructura del código ajeno o se confundirá? Tu predicción: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ |
| :---- |

| PROMPT PARA CURSOR: En este proyecto NestJS ajeno, crea el módulo Reseñas (Reviews) completo. Una Reseña pertenece a un Plato (ManyToOne). Campos: id, platoId, calificacion (1-5), comentario, nombreCliente, createdAt. Endpoints: GET /resenas, GET /resenas/plato/:platoId, POST /resenas. Además: modificar la entidad Plato existente para agregar la relación inversa (OneToMany con Reseña). El GET /platos/:id debe incluir las reseñas. Lineamientos: seguir la misma estructura que los módulos existentes de este proyecto. Validar que platoId exista y que calificacion sea un número entre 1 y 5\. NO rompas los endpoints existentes. Si modificas plato.entity.ts, asegúrate de que GET /platos siga funcionando. |
| :---- |

| STOP 4 Responder ORALMENTE al compañero antes de continuar: Cursor va a trabajar sobre código que NO conoce. ¿Le dieron contexto suficiente? ¿Cursor entiende la estructura del proyecto ajeno o está adivinando? ¿Cómo saben si está adivinando? |
| :---- |

**Verificar que NO rompieron nada:**

| npm run start:dev \# Endpoints EXISTENTES — deben seguir funcionando: curl http://localhost:3000/platos curl http://localhost:3000/mesas curl http://localhost:3000/pedidos \# Endpoints NUEVOS — deben funcionar: curl \-X POST http://localhost:3000/resenas \\   \-H 'Content-Type: application/json' \\   \-d '{"platoId":1,"calificacion":5,"comentario":"Excelente","nombreCliente":"Juan"}' curl http://localhost:3000/resenas/plato/1 |
| :---- |

| STOP 5 Responder ORALMENTE al compañero antes de continuar: ¿Rompieron algo? Si sí: ¿pueden arreglarlo sin entender completamente el código original? Si la respuesta es 'no' → ese es el costo real de no documentar decisiones. |
| :---- |

| git add . git commit \-m "PRESAID-D6-B: módulo Reseñas en repo ajeno" git checkout main && git merge feature/resenas git push origin main && git branch \-d feature/resenas |
| :---- |

| COMMIT — BLOQUE B \# Merge hecho arriba *Marcar \[ \] B como \[x\] B* |
| :---- |

| BLOQUE C — Documentar: ¿Qué Faltó? |
| :---: |

| ESTE ES EL BLOQUE MÁS IMPORTANTE DEL DÍA No es la feature. No es el código. Es la REFLEXIÓN sobre qué faltó. Todo lo que escriban aquí es evidencia real de por qué el vibe coding sin documentación no escala. |
| :---- |

**Crear: entregables/d6-hallazgos-swap.md**

| \# Hallazgos del Swap — Día 6 \#\# Sala que trabajó: I-SALAY \#\# Repo que recibimos: I-SALAX \#\# 1\. ¿El proyecto levantó a la primera? ¿Cuánto tardaron? \#\# 2\. ¿Qué documentación encontraron? (README, .env.example, CHANGES.md) \#\# 3\. ¿Qué tuvieron que ADIVINAR para poder trabajar? \#\# 4\. ¿La IA pudo entender el código ajeno? ¿Dónde se confundió? \#\# 5\. ¿Rompieron algo al agregar la feature? ¿Pudieron arreglarlo? \#\# 6\. ¿Qué DEBERÍA haber tenido el repo para que pudieran trabajar sin adivinar? (Esta es la pregunta más importante. Sean específicos.) \#\# 7\. ¿Su propio repo tiene los mismos problemas? |
| :---- |

| STOP 6 Responder ORALMENTE al compañero antes de continuar: Lean su respuesta a la pregunta 6: '¿Qué debería haber tenido el repo?' Ahora piensen: lo que están describiendo tiene un nombre. Es un documento que le dice al agente y a cualquier persona nueva: qué hace el proyecto, cómo está estructurado, qué reglas seguir, qué decisiones se tomaron y por qué. Ese documento se llama spec. Y eso es lo que van a aprender a escribir en SAID. |
| :---- |

| 📚 APRENDIZAJES DEL DÍA 6 • Código sin documentación es código que nadie más puede tocar • La IA tampoco entiende código ajeno sin contexto — necesita lo mismo que un humano • CHANGES.md, README, .env.example no son burocracia — son supervivencia • Modificar código ajeno sin entender las decisiones originales rompe cosas • Lo que falta en el repo ajeno probablemente también falta en el tuyo • El 'documento que debería existir' tiene nombre: spec. Eso es SAID. |
| :---- |

| ENTREGABLE DEL DÍA 6 NO es solo el código. Es la documentación del dolor. 1\. entregables/d6-hallazgos-swap.md (preguntas 1-7 respondidas) 2\. Feature de Reseñas: funciona o documentación de por qué no fue posible 3\. Evaluación E1-E8 del repo ajeno completada |
| :---- |

| LOOM — Máximo 5 minutos 0:00-0:30 — "Soy \[nombre\], Sala \[X\], PRE-SAID Día 6\. Trabajé en el repo de Sala \[Z\]." 0:30-2:00 — Mostrar el repo ajeno: ¿qué encontraron? ¿Levantó? ¿Había documentación? OBLIGATORIO. 2:00-3:30 — La feature de Reseñas: ¿funciona? ¿Rompieron algo? ¿Cómo lo resolvieron? 3:30-4:30 — ¿Qué faltó en el repo? ¿Qué debería haber existido? 4:30-5:00 — ¿Su propio repo tiene los mismos problemas? Sin mostrar el repo ajeno abierto → Loom no válido. |
| :---- |

| FEEDBACK — feedback\_dia6\_\[tunombre\].md 1\. ¿El swap fue frustrante? ¿En qué parte exactamente? 2\. ¿La IA les ayudó a entender el código ajeno o los confundió más? 3\. ¿Pudieron completar la feature o se quedaron a medias? 4\. ¿El repo ajeno estaba mejor o peor documentado que el de ustedes? 5\. ¿Qué es lo primero que harían DIFERENTE en su propio repo después de hoy? 6\. ¿Tiempo total? 7\. ¿Qué debería mejorar este documento? |
| :---- |

| COMMIT — FINAL \+ PR git add . git commit \-m "PRESAID-D6-FINAL: feature Reseñas \+ hallazgos swap" git push origin main \# Crear Pull Request EN EL REPO AJENO → la sala original lo verá \# ⚠️ PR NO es válido sin feedback\_dia6\_\[tunombre\].md  |
| :---- |

| STOP 7 Responder ORALMENTE al compañero antes de continuar: Mañana vuelven a SU repo. Pero les llega un cambio de requisitos: 'el cliente quiere cantidades por plato en los pedidos y que la mesa cambie a ocupada automáticamente.' Con lo que vivieron hoy: ¿van a documentar los cambios que hagan mañana o van a improvisar como antes? |
| :---- |

| RUTA — PRE-SAID: Desarrollo Moderno con IA y CLI |
| :---: |

| Día 1 — Setup CLI \+ IDE \+ Platos ✓ |
| :---- |
| Día 2 — Code Review \+ Mesas ✓ |
| Día 3 — Relaciones \+ Errores (Pedidos) ✓ |
| Día 4 — Backend completo \+ Frontend ✓ |
| Día 5 — Deploy producción ✓ |
| **▶ DÍA 6 — Swap de repos ← HOY — INICIO SEMANA 2** |
| Día 7 — Cambio de requisitos \+ diagnóstico cruzado |
| Día 8 — Proyecto personal libre |
| Día 9 — Retrospectiva \+ ¿por qué se rompió? |
| Día 10 — Loom final \+ Gate para SAID |

*PRE-SAID — Desarrollo Moderno con IA y CLI*

*RPSoft Bootcamp — Director: Wilber Peralta*

# 

| PRE-SAID — Desarrollo Moderno con IA y CLI Día 7 · Cambio de Requisitos \+ Diagnóstico Cruzado |
| :---: |

| HOY LLEGA EL CAMBIO QUE ROMPE TODO El 'cliente' cambió los requisitos. Lo que construyeron en 5 días necesita modificarse. En vibe coding esto pasa siempre: construyes rápido, el cliente ve algo, y pide cambios. La pregunta: ¿su código soporta cambios o se rompe al tocarlo? |
| ----- |

| Servidor Discord: RPSoft → Pre proyectos → Tu sala Repositorio: vuelven a SU PROPIO repo (no el del swap) Herramientas: Cursor \+ Gemini CLI (diagnóstico cruzado) Modalidad: Pair programming — Driver / Navigator — rotación 20 min |
| :---- |

| 📋 Crear: checklists/presaid-d7.md \--- sala: I-SALAX curso: PRE-SAID — Desarrollo Moderno con IA y CLI dia: 7 estado: en\_progreso loom: (agregar link al terminar) \--- \#\# Bloques \- \[ \] A — Video: diagnóstico cruzado \+ cambio de requisitos \- \[ \] B — Implementar Cambio 1: cantidades por plato en pedidos \- \[ \] C — Implementar Cambio 2: mesa auto-ocupada \+ diagnóstico cruzado \- \[ \] D — Documentar: qué se rompió y por qué \+ Loom \+ PR \#\# Verificación final \- \[ \] Pedidos aceptan cantidades por plato \- \[ \] Mesa cambia a 'ocupada' automáticamente al crear pedido \- \[ \] Total del pedido se calcula con cantidades \- \[ \] Los 5 módulos siguen funcionando \- \[ \] feedback\_dia7\_\[tunombre\].md completado y commiteado \- \[ \] PR creado |
| :---- |

| COMMIT DE APERTURA — Daily Scrum git add checklists/presaid-d7.md git commit \-m "PRESAID-D7-START: \[ayer: swap repos\] \[hoy: cambio requisitos \+ diagnóstico cruzado\] \[bloqueo: Z\]" git push origin main |
| :---- |

| OBJETIVO DEL DÍA 1\. Implementar dos cambios de requisitos que afectan múltiples módulos. 2\. Practicar diagnóstico cruzado: Gemini CLI diagnostica, Cursor ejecuta. 3\. Documentar qué se rompió, por qué, y cómo lo resolvieron. 4\. Entender por qué cambiar código sin spec es costoso. |
| :---- |

| REGLA DEL DÍA 7: Diagnóstico cruzado Cuando algo se rompa hoy (y se va a romper): 1\. Abrir Gemini CLI en una terminal. Pedir SOLO diagnóstico, NO que modifique código. 2\. Llevar el diagnóstico a Cursor. Pedir a Cursor que ejecute la corrección. 3\. NUNCA dos IAs modificando el mismo código al mismo tiempo. Una diagnostica. Otra ejecuta. Como un doctor y un cirujano. |
| :---- |

| BLOQUE A — Diagnóstico Cruzado: Una IA Diagnostica, Otra Ejecuta |
| :---: |

| 📺 VIDEO — Vibe Coding para no programadores v1 — Día 6 (Laravel Empleos) Diagnóstico cruzado entre dos IAs ⏱️ Ver desde 00:06:25 hasta 00:15:00 (≈9 min) Qué observar: El instructor usa dos IAs al mismo tiempo: una para crear código y otra para diagnosticar errores que la primera no ve. REGLA CLAVE: NUNCA dos IAs modificando el mismo archivo. Una diagnostica, otra ejecuta. |
| :---- |

| 📺 VIDEO — Vibe Coding para no programadores v1 — Día 6 (Laravel Empleos) Pérdida de contexto en la IA ⏱️ Ver desde 01:56:28 hasta 02:04:00 (≈8 min) Qué observar: El instructor muestra cómo la IA pierde contexto entre sesiones. Lo que le dijiste ayer, hoy no lo recuerda. Observen: esto es exactamente lo que vivieron en el swap — la IA tampoco podía entender el código ajeno. |
| :---- |

| STOP 1 Responder ORALMENTE al compañero antes de continuar: Después de ver los videos: ayer en el swap, ¿usaron una sola IA para todo? Si la IA se confundía con el código ajeno, ¿habrían podido usar una segunda IA solo para diagnosticar? ¿Cuándo habría servido? |
| :---- |

| COMMIT — BLOQUE A git add checklists/presaid-d7.md git commit \-m "PRESAID-D7-A: videos diagnóstico cruzado" git push origin main *Marcar \[ \] A como \[x\] A* |
| :---- |

| BLOQUE B — Cambio 1: Cantidades por Plato en Pedidos |
| :---: |

| CAMBIO DE REQUISITOS DEL CLIENTE: *"Ya no basta con saber QUÉ platos tiene un pedido. Necesito saber CUÁNTOS de cada plato."* Antes: pedido tiene platoIds: \[1, 2\] → Lomo y Ceviche, uno de cada uno. Ahora: pedido tiene items: \[{platoId: 1, cantidad: 3}, {platoId: 2, cantidad: 1}\] → 3 Lomos y 1 Ceviche. El total debe recalcularse: (3 × 35\) \+ (1 × 42\) \= 147\. |
| :---- |

| ESTE CAMBIO TOCA MÚLTIPLES ARCHIVOS: • pedido.entity.ts → la relación ManyToMany cambia a una tabla intermedia con campo 'cantidad' • create-pedido.dto.ts → platoIds: number\[\] cambia a items: {platoId, cantidad}\[\] • pedidos.service.ts → el cálculo del total cambia • Posiblemente: la tabla intermedia pedido\_platos necesita recrearse • Posiblemente: el frontend que muestra pedidos se rompe |
| :---- |

| git checkout \-b feature/cantidades-pedido |
| :---- |

| PREDICCIÓN 12 Escribir ANTES de ver el resultado: ¿La IA podrá cambiar la relación ManyToMany a una tabla intermedia con campo 'cantidad' sin romper el resto del sistema? ¿Cuántos archivos necesitará modificar? ¿Romperá el frontend? Tu predicción: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ |
| :---- |

| PROMPT PARA CURSOR: El cliente cambió los requisitos del módulo Pedidos. ANTES: un pedido tenía platoIds: number\[\] (relación ManyToMany simple). AHORA: un pedido tiene items, donde cada item tiene platoId y cantidad. Lo que necesito: 1\. Crear entidad PedidoItem (tabla intermedia explícita): pedidoId, platoId, cantidad, subtotal 2\. Cambiar la relación Pedido ↔ Plato de ManyToMany a OneToMany con PedidoItem 3\. Actualizar create-pedido.dto: items: \[{platoId: number, cantidad: number}\] 4\. Recalcular total: SUM(plato.precio × item.cantidad) para cada item 5\. GET /pedidos debe retornar los items con plato y cantidad incluidos CUIDADO: \- Este cambio afecta la tabla intermedia existente (pedido\_platos) \- NO rompas Comandas ni Tickets que dependen de Pedidos \- Valida que platoId exista y que cantidad sea mayor a 0 |
| :---- |

| STOP 2 Responder ORALMENTE al compañero antes de continuar: Antes de aceptar: ¿la IA modificó solo Pedidos o tocó otros módulos? ¿Comandas y Tickets siguen funcionando? Verificar AHORA, no después del merge. |
| :---- |

**Verificar:**

| npm run start:dev \# Crear pedido CON CANTIDADES: curl \-X POST http://localhost:3000/pedidos \\   \-H 'Content-Type: application/json' \\   \-d '{"mesaId":1,"items":\[{"platoId":1,"cantidad":3},{"platoId":2,"cantidad":1}\]}' \# Verificar total calculado correctamente: curl http://localhost:3000/pedidos \# Verificar que NO se rompió nada: curl http://localhost:3000/platos curl http://localhost:3000/mesas curl http://localhost:3000/comandas curl http://localhost:3000/tickets |
| :---- |

| STOP 3 Responder ORALMENTE al compañero antes de continuar: Si algo se rompió: es el momento del diagnóstico cruzado. Abrir Gemini CLI en otra terminal. Copiar el error. Pedir: 'Diagnostica este error sin modificar código. Solo dime qué está mal y dónde.' Llevar el diagnóstico a Cursor para que ejecute la corrección. |
| :---- |

| git add . git commit \-m "PRESAID-D7-B: cantidades por plato en pedidos" git checkout main && git merge feature/cantidades-pedido git push origin main && git branch \-d feature/cantidades-pedido |
| :---- |

| COMMIT — BLOQUE B \# Merge hecho arriba *Marcar \[ \] B como \[x\] B* |
| :---- |

| BLOQUE C — Cambio 2: Mesa Auto-Ocupada \+ Diagnóstico Cruzado |
| :---: |

| SEGUNDO CAMBIO DE REQUISITOS: *"Cuando se crea un pedido para una mesa, la mesa debe cambiar automáticamente a estado ocupada."* *"Y cuando se paga el ticket de la mesa, la mesa debe volver a disponible."* Esto es lógica de negocio que cruza módulos: Pedidos modifica Mesas, Tickets modifica Mesas. Ningún prompt anterior dijo que esto debía pasar. La IA no lo implementó porque nadie lo especificó. |
| :---- |

| git checkout \-b feature/mesa-auto-estado |
| :---- |

| PREDICCIÓN 13 Escribir ANTES de ver el resultado: Este cambio cruza 3 módulos (Pedidos, Tickets, Mesas). ¿La IA podrá coordinar los 3 sin romper algo? ¿Importará MesasService en PedidosService? ¿Habrá dependencias circulares? Tu predicción: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ |
| :---- |

| PROMPT PARA CURSOR: Nuevo requisito de lógica de negocio: 1\. Cuando se crea un pedido (POST /pedidos), la mesa del pedido debe cambiar automáticamente a estado 'ocupada'. 2\. Cuando se paga un ticket (PATCH /tickets/:id/pagar), la mesa del ticket debe cambiar a estado 'disponible'. 3\. Si se intenta crear un pedido para una mesa que ya está 'ocupada', debe funcionar (puede tener múltiples pedidos). 4\. Si se intenta crear un pedido para una mesa 'reservada', debe dar error 400\. Usa el servicio de Mesas (cambiarEstado) desde los servicios de Pedidos y Tickets. Cuidado con dependencias circulares: usa forwardRef() si es necesario. |
| :---- |

| STOP 4 Responder ORALMENTE al compañero antes de continuar: Si la IA da error de dependencia circular (Pedidos importa Mesas, Mesas importa Pedidos): ese es un problema real de arquitectura. La solución de la IA (forwardRef) es un parche. La solución real es un servicio compartido o eventos. ¿La IA propone la solución correcta o la fácil? |
| :---- |

| DIAGNÓSTICO CRUZADO EN ACCIÓN: Si el Cambio 2 rompe algo: Terminal 1 — Gemini CLI (SOLO diagnóstico): gemini \> Analiza este error \[pegar error\]. NO modifiques ningún archivo. Solo dime: (1) qué causa el error, (2) en qué archivo está el problema, (3) qué debería cambiar. Terminal 2 — Cursor (ejecuta la corrección): Copiar el diagnóstico de Gemini CLI al chat de Cursor y pedir que lo implemente. ¿Por qué funciona? Gemini CLI no tiene el historial de errores de Cursor — llega fresco, sin efecto túnel. |
| :---- |

**Verificar TODO:**

| npm run start:dev \# 1\. Crear mesa disponible: curl \-X POST http://localhost:3000/mesas \-H 'Content-Type: application/json' \\   \-d '{"numero":99,"capacidad":4,"estado":"disponible"}' \# 2\. Crear pedido → mesa debe cambiar a 'ocupada': curl \-X POST http://localhost:3000/pedidos \-H 'Content-Type: application/json' \\   \-d '{"mesaId":\[ID\_MESA\],"items":\[{"platoId":1,"cantidad":1}\]}' \# 3\. Verificar que la mesa cambió: curl http://localhost:3000/mesas/\[ID\_MESA\] \# estado debe ser 'ocupada' \# 4\. Pagar ticket → mesa debe volver a 'disponible': curl \-X POST http://localhost:3000/tickets \-H 'Content-Type: application/json' \\   \-d '{"mesaId":\[ID\_MESA\]}' curl \-X PATCH http://localhost:3000/tickets/\[ID\_TICKET\]/pagar \-H 'Content-Type: application/json' \\   \-d '{"metodoPago":"efectivo"}' \# 5\. Verificar mesa disponible de nuevo: curl http://localhost:3000/mesas/\[ID\_MESA\] |
| :---- |

| STOP 5 Responder ORALMENTE al compañero antes de continuar: ¿Usaron el diagnóstico cruzado? Si sí: ¿Gemini CLI dio un diagnóstico diferente al que Cursor habría dado? ¿Fue más útil tener una IA fresca que no estaba en el túnel de los errores previos? |
| :---- |

| git add . git commit \-m "PRESAID-D7-C: mesa auto-estado pedido y ticket" git checkout main && git merge feature/mesa-auto-estado git push origin main && git branch \-d feature/mesa-auto-estado |
| :---- |

| COMMIT — BLOQUE C \# Merge hecho arriba *Marcar \[ \] C como \[x\] C* |
| :---- |

| BLOQUE D — ¿Qué se Rompió y Por Qué? |
| :---: |

**Crear: entregables/d7-cambio-requisitos.md**

| \# Cambio de Requisitos — Día 7 \#\# Cambio 1: Cantidades por plato \- ¿Cuántos archivos se modificaron? \- ¿Se rompió algo? ¿Qué? \- ¿El total se calcula correctamente con cantidades? \#\# Cambio 2: Mesa auto-ocupada \- ¿Hubo dependencias circulares? ¿Cómo las resolvieron? \- ¿Usaron diagnóstico cruzado? ¿Fue útil? \- ¿El flujo completo funciona (crear pedido → mesa ocupada → pagar → mesa disponible)? \#\# La pregunta clave Si estos dos cambios hubieran estado en una spec desde el Día 1, ¿habrían sido más fáciles de implementar? ¿Qué habría dicho esa spec? |
| :---- |

| STOP 6 Responder ORALMENTE al compañero antes de continuar: La pregunta clave del documento: si una spec hubiera dicho desde el Día 1 'los pedidos tienen cantidades por plato y la mesa cambia de estado automáticamente', ¿habrían construido el sistema diferente? ¿Qué habrían hecho distinto? Eso que habrían hecho distinto es SDD. |
| :---- |

| 📚 APRENDIZAJES DEL DÍA 7 • Cambiar requisitos en código sin spec rompe cosas — cada cambio tiene efectos secundarios • Diagnóstico cruzado: una IA diagnostica (fresca, sin túnel), otra ejecuta • Lógica cross-módulo (Pedidos cambia Mesas) es donde la complejidad real aparece • Dependencias circulares son un síntoma de arquitectura no planificada • Si los requisitos hubieran estado en una spec, el código habría sido diferente desde el Día 1 • La IA resuelve rápido pero no previene — la prevención es la spec |
| :---- |

| ENTREGABLE DEL DÍA 7 MVP actualizado: pedidos con cantidades \+ mesa auto-estado. 1\. entregables/d7-cambio-requisitos.md (documento completo) 2\. Predicciones 12 y 13 con resultado real 3\. Screenshot: pedido con cantidades \+ total calculado 4\. Screenshot: mesa cambia de estado automáticamente |
| :---- |

| LOOM — Máximo 5 minutos 0:00-0:30 — "Soy \[nombre\], Sala \[X\], PRE-SAID Día 7." 0:30-2:00 — Terminal: crear pedido con cantidades \+ verificar total. OBLIGATORIO. 2:00-3:00 — Flujo: pedido → mesa ocupada → pagar ticket → mesa disponible. 3:00-4:00 — ¿Usaron diagnóstico cruzado? ¿Qué rompieron y cómo lo resolvieron? 4:00-5:00 — Si hubieran tenido spec desde el Día 1, ¿qué habría sido diferente? Sin terminal mostrando pedido con cantidades → Loom no válido. |
| :---- |

| FEEDBACK — feedback\_dia7\_\[tunombre\].md 1\. ¿El cambio de cantidades fue difícil? ¿La IA lo resolvió bien? 2\. ¿El cambio de mesa auto-estado causó dependencias circulares? 3\. ¿El diagnóstico cruzado fue útil? ¿Cuándo lo usaron? 4\. ¿Cuántas cosas se rompieron al implementar los cambios? 5\. ¿Sienten que una spec habría evitado estos problemas? 6\. ¿Tiempo total? 7\. ¿Qué debería mejorar este documento? |
| :---- |

| COMMIT — FINAL \+ PR git add . git commit \-m "PRESAID-D7-FINAL: cambio requisitos \+ diagnóstico cruzado" git push origin main \# Crear Pull Request \# ⚠️ PR NO es válido sin feedback\_dia7\_\[tunombre\].md  |
| :---- |

| STOP 7 Responder ORALMENTE al compañero antes de continuar: Mañana es día libre: construyen lo que quieran. Pero después de hoy, la pregunta es: ¿van a construir su proyecto personal con spec o sin spec? ¿Van a documentar decisiones o van a improvisar? La respuesta que den mañana define si están listos para SAID. |
| :---- |

| RUTA — PRE-SAID: Desarrollo Moderno con IA y CLI |
| :---: |

| Día 1 — Setup CLI \+ IDE \+ Platos ✓ |
| :---- |
| Día 2 — Code Review \+ Mesas ✓ |
| Día 3 — Relaciones \+ Errores (Pedidos) ✓ |
| Día 4 — Backend completo \+ Frontend ✓ |
| Día 5 — Deploy producción ✓ |
| Día 6 — Swap de repos ✓ |
| **▶ DÍA 7 — Cambio de requisitos \+ diagnóstico cruzado ← HOY** |
| Día 8 — Proyecto personal libre |
| Día 9 — Retrospectiva \+ ¿por qué se rompió? |
| Día 10 — Loom final \+ Gate para SAID |

*PRE-SAID — Desarrollo Moderno con IA y CLI*

*RPSoft Bootcamp — Director: Wilber Peralta*

