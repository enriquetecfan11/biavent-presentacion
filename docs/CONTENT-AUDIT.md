# Content audit — Biavent: eventos que conectan

Source: `reference/presentacion.md` (8 secciones, 10 min). Design reference: tema Biavent (navy `#0f1a2a` + dorado `#C9A84C`, de `src/constants/theme.ts` de la app).

## Facts

| Fact | Value | Source |
| --- | --- | --- |
| Title | Biavent: eventos que conectan | título del guion |
| Speakers | Enrique Rodríguez · Isabel Gutiérrez | sección 3 |
| Event · date | TODO | no está en el guion |
| QR target | https://biavent.com | indicado por el usuario |

## Section → beat mapping

| Sección | En pantalla | Beats | Status | Notes |
| --- | --- | --- | --- | --- |
| 1 El reto | ¿Cuántas conversaciones interesantes se quedan sin empezar? | 1.1–1.3 | kept | 1.1 standby y 1.2 título son nuevos (arranque de la charla) |
| 2 Qué es Biavent | Una plataforma para descubrir eventos y conectar a quienes participan. | 2.1–2.2 | kept | 2.2 condensa las dos experiencias del guion |
| 3 Quiénes somos | Enrique Rodríguez · Isabel Gutiérrez / Creadores de Biavent | 3.1 | kept | |
| 4 Asistente | Descubrir · Participar · Conectar · Continuar | 4.1–4.4 | kept | un verbo por beat |
| 5 Organizador | Organizar mejor y entender qué ocurre en el evento | 5.1–5.2 | kept | |
| 6 Valor | Las 3 viñetas | 6.1–6.3 | kept | una por beat |
| 7 Laura | Laura llega por el contenido. Se lleva una conexión. | 7.1–7.3 | merged | 7.2 y 7.3 son frases condensadas de la narración |
| 8 Cierre | Biavent conecta eventos con personas y personas entre sí. | 8.1–8.3 | kept | 8.1 repite la pregunta inicial, 8.3 "Gracias" |

## Real artefacts

| Artefacto | Archivo | Usado en |
| --- | --- | --- |
| Logo Biavent | `deck/assets/logo.png` (de `public/BiaventLogoTrans.png`) | 1.2, 8.3 |

No usados a propósito: `screenshots/chats.png` (nombres y fotos de terceros), `screenshots/qr-final.png` (el QR es una vCard con teléfono y email personales), `screenshots/home.png` (estado vacío).

## Open questions

- [ ] Capturas nuevas de la app con datos de prueba (sin personas reales) para las escenas 4 y 5.
- [ ] ¿Sustituimos a Marcos por una historia real?

## Decisions taken on the speaker's behalf

- Unificado "BiaVent" → "Biavent".
- Tema oscuro con colores de marca, tipografía Inter (la de la app).
- La narración va a la vista del presentador, no a pantalla. En pantalla solo las frases de "En pantalla" y condensaciones de la narración (2.2, 7.2, 7.3).
- Marcos se mantiene como personaje ilustrativo (nota en 7.2).
- Sin datos del evento (nombre, fecha, lugar), a petición del usuario.
- Diagramas con NodeBox/Arrow en 2.2 (asistente ↔ Biavent ↔ organizador) y 7.2–7.3 (Laura → Marcos); las etiquetas "conexión" y "chat · llamada" salen del guion.
