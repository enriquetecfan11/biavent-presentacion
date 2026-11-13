# Content audit — Biavent: eventos que conectan

Source: `reference/presentacion.md` (8 páginas, 10 min; incluye dirección visual). Tema: Biavent (navy `#0f1a2a` + dorado `#C9A84C`, de `src/constants/theme.ts` de la app).

## Facts

| Fact | Value | Source |
| --- | --- | --- |
| Title | Biavent: eventos que conectan | guion |
| Speakers | Enrique Rodríguez · Isabel Gutiérrez | página 3 |
| QR target | https://biavent.com | indicado por el usuario |
| Event · date | no se muestra | decisión del usuario |

## Página → beat mapping

| Página | En pantalla | Beats | Status | Notes |
| --- | --- | --- | --- | --- |
| 1 El reto | ¿Cuántas conversaciones interesantes se quedan sin empezar? | 1.1–1.3 | kept | `image.png` como fondo tenue (28 %) en 1.3; logo pequeño en la esquina. 1.1 standby y 1.2 título son nuevos |
| 2 Qué es Biavent | Una plataforma para descubrir eventos y conectar a quienes participan. | 2.1–2.2 | kept | `home.png` recortada; «Para asistentes y organizadores» |
| 3 Creadores | Retratos + nombres + «Creadores de Biavent» | 3.1 | kept | `enrique.jpg`, `isabel.jpg` mismo tamaño |
| 4 Asistente | Descubrir → Participar → Conectar → Continuar | 4.1–4.4 | kept | `home` (Encuentra un evento), `chats` (Habla con asistentes), `qr-final` (Confirma el encuentro). Una captura por paso: home↔Descubrir, chats↔Participar, QR↔Conectar |
| 5 Organizador | Organizar mejor y entender qué ocurre en el evento | 5.1–5.2 | **incomplete** | Etiquetas «Gestión del evento» / «Participación e interacción». **Falta la captura del panel** |
| 6 Valor | Antes / Durante / Después + frase final | 6.1–6.4 | kept | línea temporal; `home`, `qr-final`, `chats`; 4.º beat = «El evento continúa en las relaciones que empiezan allí.» |
| 7 Laura | Laura llega por el contenido. Se lleva una conexión. | 7.1–7.5 | kept | secuencia de capturas; «Ejemplo ilustrativo» siempre visible; cierre «El evento termina; la conexión continúa.» |
| 8 Cierre | Biavent conecta eventos con personas y personas entre sí. | 8.1–8.3 | kept | logo grande en 8.2; QR a biavent.com en 8.3. Sin retratos (ya se usaron) |

## Real artefacts

| Artefacto | Archivo | Usado en |
| --- | --- | --- |
| Logo | `deck/assets/logo.png` | 1.2, 1.3, 2.x, 8.2, 8.3 |
| Retratos | `deck/assets/enrique.jpg`, `isabel.jpg` | 3.1 |
| Eventos | `deck/assets/phone-home.png` (de `home.png`) | 2.2, 4.x, 6.x, 7.x |
| Chats | `deck/assets/phone-chats.png` (de `chats.png`, **recortada a las filas de Isabel y Quique**) | 4.x, 6.x, 7.x |
| QR de contacto | `deck/assets/phone-qr.png` (de `qr-final.png`) | 4.x, 6.x, 7.x |
| Fondo | `deck/assets/networking.jpg` (de `image.png`) | 1.3 |

`about-us.png` no se usa: es la pantalla de chats cargando, no el panel.
`reference/assets/chats.png` completa está en `.gitignore` (nombres y fotos de terceros).

## Open questions

- [ ] **Captura del panel del organizador y de analíticas** para la página 5 (añadir a `reference/assets/`).
- [ ] `home.png` muestra «No hay eventos próximos»: ¿hacer una captura con eventos de prueba?
- [ ] El QR de `qr-final.png` es una vCard con teléfono y email personales; está en pantalla y en el sitio publicado.
- [ ] ¿Sustituir a Laura y Marcos por una historia real?

## Decisions taken on the speaker's behalf

- «BiaVent» → «Biavent».
- Chats recortada para no mostrar a terceros (el resto de contactos).
- Mapa de capturas en la página 4 (home/chats/QR → Descubrir/Participar/Conectar).
- La página 5 no tiene capturas; la ausencia se indica en las notas del presentador.
- Sin datos del evento (nombre, fecha, lugar).
