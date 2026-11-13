import { Reveal, Scene, useScene } from 'beatdeck';
import { Phone } from '../Phone';
import home from '../assets/phone-home.png';
import chats from '../assets/phone-chats.png';
import qr from '../assets/phone-qr.png';

const STEPS = ['Descubrir', 'Participar', 'Conectar', 'Continuar'];
const SHOTS = [
  { src: home, alt: 'Eventos', label: 'Encuentra un evento' },
  { src: chats, alt: 'Chats', label: 'Habla con asistentes' },
  { src: qr, alt: 'Código QR de contacto', label: 'Confirma el encuentro' },
];
const W = 470;

function Asistente_() {
  const { here, b } = useScene();
  return (
    <>
      {/* the journey, always visible: current step in ink, the others dimmed */}
      <Reveal on={here} x={135} y={100}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 44 }}>
          {STEPS.map((word, k) => (
            <div key={word} style={{ display: 'flex', alignItems: 'baseline', gap: 44 }}>
              <span className="t-statement" style={{ fontSize: 60, color: b === k ? 'var(--ink)' : 'var(--ink-3)', transition: 'color 400ms' }}>{word}</span>
              {k < STEPS.length - 1 && <span style={{ fontSize: 48, color: 'var(--accent)' }}>→</span>}
            </div>
          ))}
        </div>
      </Reveal>

      {SHOTS.map((s, i) => (
        <div key={s.label}>
          <Reveal on={here && b >= i} x={135 + i * (W + 120)} y={250} axis="x">
            <Phone src={s.src} alt={s.alt} w={W} />
          </Reveal>
          <Reveal on={here && b >= i} x={135 + i * (W + 120)} y={870} delay={250}>
            <div className="t-editorial" style={{ fontSize: 38, width: W, textAlign: 'center' }}>{s.label}</div>
          </Reveal>
        </div>
      ))}
    </>
  );
}

/** 04 EL ASISTENTE — the journey as a guide, one real screen per step. */
export const Asistente = () => <Scene index={3}><Asistente_ /></Scene>;
