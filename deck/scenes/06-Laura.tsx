import { Reveal, Scene, useScene } from 'beatdeck';

const LAURA_Y = 400;
const MARCOS_Y = 600;
const EVENT = { x0: 620, x1: 1250 };
const MEET = { x: 900, laura: 492, marcos: 508 };
const BRIDGE_X = 330;

/** A stroke that draws itself from start to end (pathLength = 1). */
function Line({ d, on, color, width = 8, ms = 1300, delay = 0 }: { d: string; on: boolean; color: string; width?: number; ms?: number; delay?: number }) {
  return (
    <path
      d={d} pathLength={1} fill="none" strokeLinecap="round"
      style={{
        stroke: color, strokeWidth: width, strokeDasharray: 1,
        strokeDashoffset: on ? 0 : 1, opacity: on ? 1 : 0,
        transition: `stroke-dashoffset ${ms}ms var(--ease) ${delay}ms, opacity 200ms ${delay}ms`,
      }}
    />
  );
}

function Dot({ x, y, on, hot, r = 15, delay = 0 }: { x: number; y: number; on: boolean; hot: boolean; r?: number; delay?: number }) {
  return (
    <circle cx={x} cy={y} r={r} style={{ fill: 'var(--bg)', strokeWidth: 6, stroke: hot ? 'var(--accent)' : 'var(--ink-3)', opacity: on ? 1 : 0, transition: `opacity 400ms ${delay}ms, stroke 400ms` }} />
  );
}

/** What the beat says, two lines at most: the current one leaves as the next arrives. */
function Say({ on, out, a, b2, tone = 'ink' }: { on: boolean; out: boolean; a: string; b2?: string; tone?: 'ink' | 'accent' | 'dim' }) {
  const color = { ink: 'var(--ink)', accent: 'var(--accent)', dim: 'var(--ink-2)' };
  return (
    <Reveal on={on} out={out} x={150} y={770}>
      <div className="t-statement" style={{ fontSize: 62, lineHeight: 1.08, whiteSpace: 'normal', width: 1620 }}>
        <div style={{ color: tone === 'accent' ? color.accent : color.ink }}>{a}</div>
        {b2 && <div style={{ color: tone === 'dim' ? color.dim : color.accent }}>{b2}</div>}
      </div>
    </Reveal>
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

      {/* 06.2 → 06.7: Biavent makes them find each other, connect and agree to meet; they meet at the event */}
      <Reveal on={here && b >= 4} x={EVENT.x0} y={320} delay={300}>
        <div style={{ width: EVENT.x1 - EVENT.x0, height: 360, border: '2px dashed var(--hair-strong)', borderRadius: 24, boxSizing: 'border-box' }} />
      </Reveal>
      <Reveal on={here && b >= 4} x={EVENT.x0 + 28} y={338} delay={500}>
        <div className="t-eyebrow" style={{ color: 'var(--ink-2)' }}>El evento</div>
      </Reveal>

      <svg width={1920} height={1080} style={{ position: 'absolute', left: 0, top: 0, pointerEvents: 'none' }}>
        {/* Laura, on her own */}
        <Line d={`M 150 ${LAURA_Y} L ${EVENT.x0} ${LAURA_Y}`} on={here && b >= 1} color="var(--accent)" ms={1100} />
        {/* Marcos, somewhere else */}
        <Line d={`M 150 ${MARCOS_Y} L ${EVENT.x0} ${MARCOS_Y}`} on={here && b >= 2} color="var(--ink)" ms={1100} delay={500} />
        {/* Biavent is the bridge: it shows her Marcos, they connect */}
        <Line d={`M ${BRIDGE_X} ${LAURA_Y} L ${BRIDGE_X} ${MARCOS_Y}`} on={here && b >= 2} color="var(--accent)" width={6} ms={900} delay={1100} />
        {/* at the event the two lines come together */}
        <Line d={`M ${EVENT.x0} ${LAURA_Y} C 760 ${LAURA_Y}, 780 ${MEET.laura}, ${MEET.x} ${MEET.laura}`} on={here && b >= 4} color="var(--accent)" ms={1000} />
        <Line d={`M ${EVENT.x0} ${MARCOS_Y} C 760 ${MARCOS_Y}, 780 ${MEET.marcos}, ${MEET.x} ${MEET.marcos}`} on={here && b >= 4} color="var(--ink)" ms={1000} />
        {/* and carry on together after it */}
        <Line d={`M ${MEET.x} ${MEET.laura} L 1790 ${MEET.laura}`} on={here && b >= 5} color="var(--accent)" />
        <Line d={`M ${MEET.x} ${MEET.marcos} L 1790 ${MEET.marcos}`} on={here && b >= 5} color="var(--ink)" />

        <Dot x={170} y={LAURA_Y} on={here && b >= 1} hot={b === 1} />
        <Dot x={170} y={MARCOS_Y} on={here && b >= 2} hot={b === 2} />
        <Dot x={BRIDGE_X} y={(LAURA_Y + MARCOS_Y) / 2} on={here && b >= 2} hot={b >= 2 && b <= 3} r={26} delay={1300} />
        <Dot x={MEET.x} y={500} on={here && b >= 4} hot={b === 4} r={20} delay={900} />
      </svg>

      <Reveal on={here && b >= 1} x={150} y={340}>
        <div className="t-eyebrow">Laura</div>
      </Reveal>
      <Reveal on={here && b >= 2} x={150} y={628} delay={500}>
        <div className="t-eyebrow" style={{ color: 'var(--ink)' }}>Marcos · otro sector</div>
      </Reveal>
      <Reveal on={here && b >= 2} x={BRIDGE_X + 50} y={477} delay={1300}>
        <div className="t-eyebrow" style={{ fontSize: 34 }}>Biavent</div>
      </Reveal>
      <Reveal on={here && b >= 3} x={BRIDGE_X + 50} y={532}>
        <div className="t-eyebrow" style={{ color: 'var(--ink-2)' }}>Chat</div>
      </Reveal>
      <Reveal on={here && b >= 5} x={1400} y={425} delay={500}>
        <div className="t-eyebrow" style={{ color: 'var(--ink-2)' }}>Chat · llamada</div>
      </Reveal>

      <Say on={here && b === 1} out={here && b > 1} a="Llega sola a un evento" b2="y le cuesta entrar en conversaciones." tone="dim" />
      <Say on={here && b === 2} out={here && b > 2} a="Biavent le muestra a Marcos:" b2="un reto parecido, desde otro sector." />
      <Say on={here && b === 3} out={here && b > 3} a="Se conectan en Biavent" b2="y quedan para verse en el evento." />
      <Say on={here && b === 4} out={here && b > 4} a="Se conocen en persona en el evento." b2="Ya no depende de cruzarse por casualidad." tone="dim" />
      <Say on={here && b === 5} out={here && b > 5} a="Siguen hablando por chat y organizan una llamada." b2="El evento termina; la conexión continúa." />
      <Say on={here && b >= 6} out={false} a="Compartir sala no basta." b2="Biavent hizo más fácil pasar de asistir a conectar." />
    </>
  );
}

/** 06 LAURA — Biavent is why Laura and Marcos find each other, connect and meet. Text and lines only. */
export const Laura = () => <Scene index={5}><Laura_ /></Scene>;
