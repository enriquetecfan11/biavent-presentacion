import { Reveal, Scene, useScene } from 'beatdeck';
import { Phone } from '../Phone';
import home from '../assets/phone-home.png';
import qr from '../assets/phone-qr.png';
import chats from '../assets/phone-chats.png';

const STAGES = [
  { label: 'Antes', text: 'Descubrir y prepararse', src: home, alt: 'Eventos' },
  { label: 'Durante', text: 'Participar y conectar', src: qr, alt: 'Código QR de contacto' },
  { label: 'Después', text: 'Mantener el contacto y aprender', src: chats, alt: 'Chats' },
];
const X = (k: number) => 150 + k * 590;

function Valor_() {
  const { here, b } = useScene();
  return (
    <>
      {/* horizontal timeline */}
      <Reveal on={here} x={150} y={110}>
        <div style={{ width: 1500, height: 1, background: 'var(--hair-strong)' }} />
      </Reveal>
      {STAGES.map((s, k) => {
        const on = here && b >= k;
        const active = here && b === k;
        return (
          <div key={s.label}>
            <Reveal on={on} x={X(k)} y={96}>
              <div style={{ width: 30, height: 30, borderRadius: '50%', background: active ? 'var(--accent)' : 'var(--ink-3)', transition: 'background 400ms' }} />
            </Reveal>
            <Reveal on={on} x={X(k)} y={150}>
              <div className="t-statement" style={{ fontSize: 72, color: active ? 'var(--ink)' : 'var(--ink-2)', transition: 'color 400ms' }}>{s.label}</div>
            </Reveal>
            <Reveal on={on} x={X(k)} y={250} delay={150}>
              <div className="t-editorial" style={{ fontSize: 32, width: 540, whiteSpace: 'nowrap', color: active ? 'var(--accent)' : 'var(--ink-3)', transition: 'color 400ms' }}>{s.text}</div>
            </Reveal>
            <Reveal on={on} x={X(k)} y={320} delay={300}>
              <Phone src={s.src} alt={s.alt} w={400} />
            </Reveal>
          </div>
        );
      })}
      <Reveal on={here && b >= 3} x={150} y={880}>
        <div className="t-statement" style={{ fontSize: 58, color: 'var(--accent)' }}>El evento continúa en las relaciones que empiezan allí.</div>
      </Reveal>
    </>
  );
}

/** 06 EL VALOR — Antes / Durante / Después on a timeline, one screen each, then the closing line. */
export const Valor = () => <Scene index={5}><Valor_ /></Scene>;
