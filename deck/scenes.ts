import type { SceneDef } from 'beatdeck';

/**
 * The talk's beat map: scenes → beats. One click = one beat.
 * `ref` = where it comes from in the source, `source` = what the source says, `note` = speaker cue
 * (the presenter view shows all three; the audience never does).
 */
export const SCENES: SceneDef[] = [
  {
    id: '01', title: 'EL RETO',
    beats: [
      { name: 'standby', note: 'Pantalla en calma mientras la gente se sienta. El primer clic arranca la charla.' },
      { name: 'título', ref: 'presentacion.md · título', source: 'Biavent: eventos que conectan' },
      {
        name: 'pregunta', ref: 'presentacion.md · Página 1 — El reto de asistir a un evento (0:45)',
        source: 'Seguro que alguna vez has ido a un evento, has escuchado ideas interesantes y, al terminar, te has quedado con la sensación de que podrías haber conocido a personas afines. A veces no sabemos quién más está allí, cómo iniciar una conversación o cómo seguir en contacto después.',
        note: '0:45. Deja la pregunta en pantalla un momento antes de hablar.',
      },
    ],
  },
  {
    id: '02', title: 'QUÉ ES BIAVENT',
    beats: [
      {
        name: 'plataforma', ref: 'presentacion.md · Página 2 — Qué es Biavent (0:45)',
        source: 'Biavent es una plataforma que conecta eventos con personas y facilita que quienes asisten puedan conocerse, conversar y mantener el contacto.',
        note: '0:45.',
      },
      {
        name: 'pantalla de eventos', ref: 'presentacion.md · Página 2 — Qué es Biavent',
        source: 'Acompaña dos experiencias que se complementan: la de la persona que quiere encontrar eventos y conectar con otros asistentes, y la de quien organiza y quiere ofrecer una experiencia cuidada antes, durante y después del evento.',
      },
    ],
  },
  {
    id: '03', title: 'EL ASISTENTE',
    beats: [
      {
        name: 'descubrir', ref: 'presentacion.md · Página 4 — La experiencia del asistente (1:30)',
        source: 'La experiencia empieza al descubrir un evento que encaja con los intereses de la persona. Puede consultar la información, inscribirse y prepararse para asistir.',
        note: '1:30 en total. Captura: eventos.',
      },
      {
        name: 'participar', ref: 'presentacion.md · Página 4 — La experiencia del asistente',
        source: 'Una vez dentro, Biavent facilita que encuentre a otros asistentes y pueda iniciar una conexión. La conversación puede continuar por chat y ayudar a coordinar un encuentro durante el evento.',
        note: 'Captura: chats (recortada a las filas de Isabel y Quique).',
      },
      {
        name: 'conectar', ref: 'presentacion.md · Página 4 — La experiencia del asistente',
        source: 'Cuando las personas se conocen en persona, la plataforma también permite confirmar ese encuentro.',
        note: 'Captura: código QR de contacto.',
      },
      {
        name: 'continuar', ref: 'presentacion.md · Página 4 — La experiencia del asistente',
        source: 'Así, la experiencia puede convertirse en una conversación y, con el tiempo, en una relación profesional o personal.',
      },
    ],
  },
  {
    id: '04', title: 'EL ORGANIZADOR',
    beats: [
      {
        name: 'gestión', ref: 'presentacion.md · Página 5 — La experiencia del organizador (1:30)',
        source: 'Desde el panel pueden crear y publicar eventos, gestionar asistentes y comunicaciones, y facilitar el networking entre participantes.',
        note: '1:30 en total. TODO: falta la captura del panel del organizador (about-us.png no lo es). Añadirla a reference/assets/.',
      },
      {
        name: 'participación', ref: 'presentacion.md · Página 5 — La experiencia del organizador',
        source: 'Pueden consultar información sobre participación, asistencia e interacción. Esos datos ayudan a entender cómo se vivió el evento y qué aspectos pueden mejorarse en la siguiente edición.',
        note: 'TODO: falta captura de analíticas.',
      },
    ],
  },
  {
    id: '05', title: 'EL VALOR',
    beats: [
      {
        name: 'antes', ref: 'presentacion.md · Página 6 — El valor de Biavent (3:00)',
        source: 'Antes, ayuda a que las personas descubran el evento, entiendan qué van a encontrar y lleguen con más contexto. Para quien organiza, es un espacio para presentar el evento y gestionar la información y las inscripciones.',
        note: '3:00 en total.',
      },
      {
        name: 'durante', ref: 'presentacion.md · Página 6 — El valor de Biavent',
        source: 'Durante, facilita que los asistentes se encuentren y empiecen a hablar. Esto puede ser especialmente útil para quien llega solo, para quien participa por primera vez o para quien busca conocer a personas con intereses concretos.',
      },
      {
        name: 'después', ref: 'presentacion.md · Página 6 — El valor de Biavent',
        source: 'Después, las personas pueden continuar el contacto por chat. El organizador puede revisar datos de participación e interacción para entender qué funcionó y qué mejorar.',
      },
      {
        name: 'frase final', ref: 'presentacion.md · Página 6 — El valor de Biavent',
        source: 'Biavent conecta la experiencia de los asistentes con la gestión del evento y ayuda a darle continuidad más allá de una fecha concreta.',
      },
    ],
  },
  {
    id: '06', title: 'LAURA',
    beats: [
      {
        name: 'llega', ref: 'presentacion.md · Página 7 — La experiencia de Laura (1:30)',
        source: 'Imaginemos a Laura. Quiere ampliar su red profesional, pero le cuesta entrar en conversaciones cuando llega sola a un evento.',
        note: '1:30 en total. Laura y Marcos son personajes ilustrativos: no los presentes como usuarios reales.',
      },
      {
        name: 'encuentra', ref: 'presentacion.md · Página 7 — La experiencia de Laura',
        source: 'Encuentra en Biavent un encuentro sobre un tema que le interesa. Se inscribe y sabe que asistirán personas con objetivos parecidos.',
      },
      {
        name: 'Marcos', ref: 'presentacion.md · Página 7 — La experiencia de Laura',
        source: 'Durante la jornada conoce a Marcos, que está intentando resolver un reto similar desde otro sector. Comparten lo que han probado, descubren que pueden ayudarse y se conectan en Biavent.',
      },
      {
        name: 'continúan', ref: 'presentacion.md · Página 7 — La experiencia de Laura',
        source: 'Unos días después retoman la conversación por chat y organizan una llamada para compartir recursos.',
      },
      {
        name: 'cierre del relato', ref: 'presentacion.md · Página 7 — La experiencia de Laura',
        source: 'El evento ya terminó, pero la relación que empezó allí sigue creciendo.',
      },
      {
        name: 'valor', ref: 'presentacion.md · Página 7 — La experiencia de Laura',
        source: 'Para Laura, Biavent hizo más fácil pasar de asistir a conectar.',
        note: 'El valor de usar Biavent. No atribuyas resultados medidos: Laura es un ejemplo ilustrativo.',
      },
    ],
  },
  {
    id: '07', title: 'CIERRE',
    beats: [
      {
        name: 'pregunta', ref: 'presentacion.md · Página 8 — Cierre (0:30)',
        source: 'Volvamos a la pregunta del principio: ¿cuántas conversaciones interesantes se quedan sin empezar?',
        note: '0:30 en total.',
      },
      {
        name: 'idea central', ref: 'presentacion.md · Página 8 — Cierre',
        source: 'Biavent ayuda a descubrir eventos, participar y convertir una coincidencia en una conversación que continúa.',
      },
      {
        name: 'gracias', ref: 'presentacion.md · Página 8 — Cierre',
        source: 'Porque un buen evento puede dejar algo más que una agenda cumplida: puede dejar relaciones que continúan después. Gracias.',
      },
    ],
  },
];
