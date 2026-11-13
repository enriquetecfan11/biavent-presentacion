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
        name: 'pregunta', ref: 'presentacion.md · 1. El reto de asistir a un evento (1 min)',
        source: 'Seguro que alguna vez has ido a un evento, has escuchado ideas interesantes y, al terminar, te has quedado con la sensación de que podrías haber conocido a personas afines. A veces no sabemos quién más está allí, cómo iniciar una conversación o cómo seguir en contacto después.',
        note: '1 min. Deja la pregunta en pantalla un momento antes de hablar.',
      },
    ],
  },
  {
    id: '02', title: 'QUÉ ES BIAVENT',
    beats: [
      {
        name: 'plataforma', ref: 'presentacion.md · 2. Qué es Biavent (1 min)',
        source: 'Biavent es una plataforma que conecta eventos con personas y facilita que quienes asisten puedan conocerse, conversar y mantener el contacto.',
        note: '1 min.',
      },
      {
        name: 'dos experiencias', ref: 'presentacion.md · 2. Qué es Biavent',
        source: 'Acompaña dos experiencias que se complementan: la de la persona que quiere encontrar eventos y conectar con otros asistentes, y la de quien organiza y quiere ofrecer una experiencia cuidada antes, durante y después del evento.',
      },
    ],
  },
  {
    id: '03', title: 'QUIÉNES SOMOS',
    beats: [
      {
        name: 'creadores', ref: 'presentacion.md · 3. Quiénes somos (30 s)',
        source: 'Somos Enrique Rodríguez e Isabel Gutiérrez, creadores de Biavent. Esta idea nace de querer que los eventos ayuden a las personas a encontrarse y que esas conexiones puedan continuar después.',
        note: '30 s.',
      },
    ],
  },
  {
    id: '04', title: 'EL ASISTENTE',
    beats: [
      {
        name: 'descubrir', ref: 'presentacion.md · 4. La experiencia del asistente (2 min)',
        source: 'La experiencia empieza al descubrir un evento que encaja con sus intereses. Puede consultar la información, inscribirse y prepararse para asistir.',
        note: '2 min en total. Un beat por verbo.',
      },
      {
        name: 'participar', ref: 'presentacion.md · 4. La experiencia del asistente',
        source: 'Una vez dentro, Biavent facilita que encuentre a otros asistentes y pueda iniciar una conexión.',
      },
      {
        name: 'conectar', ref: 'presentacion.md · 4. La experiencia del asistente',
        source: 'La conversación puede continuar por chat y ayudar a coordinar un encuentro durante el evento. Cuando las personas se conocen en persona, la plataforma también permite confirmar ese encuentro.',
      },
      {
        name: 'continuar', ref: 'presentacion.md · 4. La experiencia del asistente',
        source: 'La experiencia no se limita a estar en la misma sala: puede convertirse en una conversación y, con el tiempo, en una relación profesional o personal.',
      },
    ],
  },
  {
    id: '05', title: 'EL ORGANIZADOR',
    beats: [
      {
        name: 'organizar', ref: 'presentacion.md · 5. La experiencia del organizador (2 min)',
        source: 'Desde el panel pueden crear y publicar eventos, gestionar asistentes y comunicaciones, y facilitar el networking entre participantes.',
        note: '2 min en total.',
      },
      {
        name: 'entender', ref: 'presentacion.md · 5. La experiencia del organizador',
        source: 'Pueden consultar información sobre participación, asistencia e interacción. Esos datos ayudan a entender cómo se vivió el evento y qué aspectos pueden mejorarse en la siguiente edición.',
      },
    ],
  },
  {
    id: '06', title: 'EL VALOR',
    beats: [
      {
        name: 'asiste', ref: 'presentacion.md · 6. El valor de Biavent (3 min)',
        source: 'Durante el evento, la plataforma facilita que los asistentes se encuentren y empiecen a hablar. Útil para quien llega solo, para quien participa por primera vez o para quien busca conocer a personas con intereses concretos.',
        note: '3 min en total. Recorre antes, durante y después dentro de cada beat.',
      },
      {
        name: 'organiza', ref: 'presentacion.md · 6. El valor de Biavent',
        source: 'Para el organizador, es un espacio para presentar el evento y gestionar la información y las inscripciones. Después, puede revisar datos de participación e interacción para entender qué funcionó y qué mejorar.',
      },
      {
        name: 'evento', ref: 'presentacion.md · 6. El valor de Biavent',
        source: 'Biavent conecta la experiencia de los asistentes con la gestión del evento y ayuda a darle continuidad más allá de una fecha concreta.',
      },
    ],
  },
  {
    id: '07', title: 'LAURA',
    beats: [
      {
        name: 'llega', ref: 'presentacion.md · 7. Un ejemplo: la experiencia de Laura (2 min 30 s)',
        source: 'Laura trabaja en un equipo pequeño y quiere ampliar su red profesional, pero no siempre le resulta fácil entrar en conversaciones cuando llega a un evento donde no conoce a nadie. Encuentra en Biavent un encuentro sobre un tema que le interesa, se inscribe y descubre que asistirán personas con intereses parecidos.',
        note: '2 min 30 s en total.',
      },
      {
        name: 'Marcos', ref: 'presentacion.md · 7. Un ejemplo: la experiencia de Laura',
        source: 'Durante la jornada, Laura conoce a Marcos, que intenta resolver un problema similar al suyo desde otro sector. En vez de un intercambio rápido de tarjetas, conversan y se dan cuenta de que pueden ayudarse. Se conectan en Biavent y acuerdan seguir hablando.',
        note: 'Marcos es un personaje ilustrativo. Cámbialo por una historia real de Biavent si la tienes.',
      },
      {
        name: 'después', ref: 'presentacion.md · 7. Un ejemplo: la experiencia de Laura',
        source: 'Unos días después retoman la conversación por chat y organizan una llamada para compartir recursos. El evento ya terminó, pero la relación que empezó allí sigue creciendo.',
      },
    ],
  },
  {
    id: '08', title: 'CIERRE',
    beats: [
      {
        name: 'pregunta', ref: 'presentacion.md · 8. Cierre (1 min)',
        source: 'Volvamos a la pregunta del principio: ¿cuántas conversaciones interesantes se quedan sin empezar?',
        note: '1 min en total.',
      },
      {
        name: 'idea central', ref: 'presentacion.md · 8. Cierre',
        source: 'Biavent ayuda a que sea más fácil descubrir eventos, participar y convertir una coincidencia en una conversación que continúa. También da a quienes organizan herramientas para cuidar esa experiencia y aprender de ella.',
      },
      {
        name: 'gracias', ref: 'presentacion.md · 8. Cierre',
        source: 'Porque un buen evento puede dejar algo más que una agenda cumplida: puede dejar relaciones que continúan después. Gracias.',
      },
    ],
  },
];
