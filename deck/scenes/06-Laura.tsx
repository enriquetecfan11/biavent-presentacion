import { Reveal, Scene, useScene } from 'beatdeck';

const STEPS = [
  'Encuentra un evento afín',
  'Conoce a Marcos',
  'Continúan la conversación',
];
const X = (k: number) => 150 + k * 600;

function Laura_() {
  const { here, b } = useScene();
  return (
    <>
      <Reveal on={here} x={168} y={100}>
        <div className="t-eyebrow">Laura · Ejemplo ilustrativo</div>
      </Reveal>

      {/* 06.1 */}
      <Reveal on={here && b === 0} out={here && b > 0} x={150} y={340}>
        <div className="t-statement" style={{ fontSize: 124, lineHeight: 1 }}>
          Laura llega por<br />el contenido.
        </div>
      </Reveal>
      <Reveal on={here && b === 0} out={here && b > 0} x={150} y={700} delay={300}>
        <div className="t-statement" style={{ fontSize: 124, color: 'var(--accent)' }}>Se lleva una conexión.</div>
      </Reveal>

      {/* 06.2 → 06.4 timeline, no images */}
      <Reveal on={here && b >= 1} x={150} y={300}>
        <div style={{ width: 1560, height: 1, background: 'var(--hair-strong)' }} />
      </Reveal>
      {STEPS.map((text, k) => {
        const on = here && b >= k + 1;
        const active = here && b === k + 1;
        return (
          <div key={text}>
            <Reveal on={on} x={X(k)} y={285}>
              <div style={{ width: 30, height: 30, borderRadius: '50%', background: active ? 'var(--accent)' : 'var(--ink-3)', transition: 'background 400ms' }} />
            </Reveal>
            <Reveal on={on} x={X(k)} y={370} delay={150}>
              <div className="t-eyebrow" style={{ color: active ? 'var(--accent)' : 'var(--ink-3)', transition: 'color 400ms' }}>0{k + 1}</div>
              <div className="t-statement" style={{ fontSize: 84, lineHeight: 1.02, marginTop: 20, width: 540, whiteSpace: 'normal', color: active ? 'var(--ink)' : 'var(--ink-2)', transition: 'color 400ms' }}>{text}</div>
            </Reveal>
          </div>
        );
      })}

      {/* 06.5 */}
      <Reveal on={here && b >= 4} x={150} y={800}>
        <div className="t-statement" style={{ fontSize: 76, color: 'var(--accent)' }}>El evento termina;<br />la conexión continúa.</div>
      </Reveal>
    </>
  );
}

/** 06 LAURA — an illustrative example as a timeline, text only (same language as the value page). */
export const Laura = () => <Scene index={5}><Laura_ /></Scene>;
