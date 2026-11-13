import { Reveal, Scene, useScene } from 'beatdeck';

const STAGES = [
  { label: 'Antes', text: 'Descubrir y prepararse' },
  { label: 'Durante', text: 'Participar y conectar' },
  { label: 'Después', text: 'Mantener el contacto y aprender' },
];
const X = (k: number) => 150 + k * 600;

function Valor_() {
  const { here, b } = useScene();
  return (
    <>
      {/* horizontal timeline */}
      <Reveal on={here} x={150} y={250}>
        <div style={{ width: 1560, height: 1, background: 'var(--hair-strong)' }} />
      </Reveal>
      {STAGES.map((s, k) => {
        const on = here && b >= k;
        const active = here && b === k;
        return (
          <div key={s.label}>
            <Reveal on={on} x={X(k)} y={235}>
              <div style={{ width: 30, height: 30, borderRadius: '50%', background: active ? 'var(--accent)' : 'var(--ink-3)', transition: 'background 400ms' }} />
            </Reveal>
            <Reveal on={on} x={X(k)} y={320}>
              <div className="t-statement" style={{ fontSize: 120, color: active ? 'var(--ink)' : 'var(--ink-2)', transition: 'color 400ms' }}>{s.label}</div>
            </Reveal>
            <Reveal on={on} x={X(k)} y={480} delay={150}>
              <div className="t-editorial" style={{ fontSize: 46, width: 520, color: active ? 'var(--accent)' : 'var(--ink-3)', transition: 'color 400ms' }}>{s.text}</div>
            </Reveal>
          </div>
        );
      })}
      <Reveal on={here && b >= 3} x={150} y={800}>
        <div className="t-statement" style={{ fontSize: 76, color: 'var(--accent)' }}>El evento continúa en<br />las relaciones que empiezan allí.</div>
      </Reveal>
    </>
  );
}

/** 06 EL VALOR — Antes / Durante / Después on a timeline, then the closing line. No screenshots: page 4 already shows them. */
export const Valor = () => <Scene index={5}><Valor_ /></Scene>;
