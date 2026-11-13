import { Reveal, Scene, useScene } from 'beatdeck';

const LAURA_Y = 552;
const MARCOS_Y = 568;
const MEET_X = 900;
const END_X = 1500;

const STEPS = [
  { x: 150, text: 'Encuentra un evento afín' },
  { x: 760, text: 'Conoce a Marcos' },
  { x: 1340, text: 'Continúan la conversación' },
];

/** A stroke that draws itself from start to end (pathLength = 1). */
function Line({ d, on, color, width = 8, ms = 1300, delay = 0, dashed = false }: { d: string; on: boolean; color: string; width?: number; ms?: number; delay?: number; dashed?: boolean }) {
  return (
    <path
      d={d} pathLength={1} fill="none" strokeLinecap="round"
      style={{
        stroke: color, strokeWidth: width,
        strokeDasharray: dashed ? '0.012 0.018' : 1,
        strokeDashoffset: on ? 0 : 1,
        opacity: on ? 1 : 0,
        transition: `stroke-dashoffset ${ms}ms var(--ease) ${delay}ms, opacity 200ms ${delay}ms`,
      }}
    />
  );
}

function Dot({ x, y, on, hot, r = 15, delay = 0 }: { x: number; y: number; on: boolean; hot: boolean; r?: number; delay?: number }) {
  return (
    <circle
      cx={x} cy={y} r={r}
      style={{
        fill: 'var(--bg)', strokeWidth: 6, stroke: hot ? 'var(--accent)' : 'var(--ink-3)',
        opacity: on ? 1 : 0, transition: `opacity 400ms ${delay}ms, stroke 400ms`,
      }}
    />
  );
}

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

      {/* 06.2 → 06.5: two paths that meet and carry on together */}
      <svg width={1920} height={1080} style={{ position: 'absolute', left: 0, top: 0, pointerEvents: 'none' }}>
        {/* Laura walks toward the event */}
        <Line d={`M 150 ${LAURA_Y} L ${MEET_X} ${LAURA_Y}`} on={here && b >= 1} color="var(--accent)" />
        {/* Marcos arrives from elsewhere */}
        <Line d={`M ${END_X} 250 C 1250 250, 1100 ${MARCOS_Y}, ${MEET_X} ${MARCOS_Y}`} on={here && b >= 2} color="var(--ink)" />
        {/* both continue side by side */}
        <Line d={`M ${MEET_X} ${LAURA_Y} L ${END_X} ${LAURA_Y}`} on={here && b >= 3} color="var(--accent)" />
        <Line d={`M ${MEET_X} ${MARCOS_Y} L ${END_X} ${MARCOS_Y}`} on={here && b >= 3} color="var(--ink)" />
        {/* and it does not end with the event */}
        <Line d={`M ${END_X + 40} 560 L 1800 560`} on={here && b >= 4} color="var(--ink-3)" dashed ms={1000} />

        <Dot x={170} y={LAURA_Y} on={here && b >= 1} hot={b === 1} />
        <Dot x={MEET_X} y={560} on={here && b >= 2} hot={b === 2} r={20} delay={500} />
        <Dot x={END_X} y={560} on={here && b >= 3} hot={b === 3} delay={900} />
      </svg>

      <Reveal on={here && b >= 1} x={150} y={470}>
        <div className="t-eyebrow">Laura</div>
      </Reveal>
      <Reveal on={here && b >= 2} x={END_X + 30} y={200} delay={300}>
        <div className="t-eyebrow" style={{ color: 'var(--ink)' }}>Marcos</div>
      </Reveal>

      {STEPS.map((s, k) => {
        const active = here && b === k + 1;
        return (
          <div key={s.text}>
            <Reveal on={here && b >= k + 1} x={s.x} y={635} delay={250}>
              <div className="t-eyebrow" style={{ color: active ? 'var(--accent)' : 'var(--ink-3)', transition: 'color 400ms' }}>0{k + 1}</div>
            </Reveal>
            <Reveal on={here && b >= k + 1} x={s.x} y={685} delay={350}>
              <div className="t-statement" style={{ fontSize: 68, lineHeight: 1.04, width: 540, whiteSpace: 'normal', color: active ? 'var(--ink)' : 'var(--ink-2)', transition: 'color 400ms' }}>{s.text}</div>
            </Reveal>
          </div>
        );
      })}

      {/* 06.5 */}
      <Reveal on={here && b === 4} out={here && b > 4} x={150} y={900}>
        <div className="t-statement" style={{ fontSize: 66, color: 'var(--accent)' }}>El evento termina; la conexión continúa.</div>
      </Reveal>

      {/* 06.6 the value of using Biavent */}
      <Reveal on={here && b >= 5} x={150} y={900}>
        <div className="t-statement" style={{ fontSize: 60, color: 'var(--accent)' }}>Biavent hizo más fácil pasar de asistir a conectar.</div>
      </Reveal>
    </>
  );
}

/** 06 LAURA — an illustrative example drawn as two paths that meet and carry on together. Text and lines only. */
export const Laura = () => <Scene index={5}><Laura_ /></Scene>;
