import { Arrow, NodeBox, Reveal, Scene, useScene } from 'beatdeck';

const LAURA = { x: 150, y: 790, w: 340, h: 120 };
const MARCOS = { x: 760, y: 790, w: 340, h: 120 };

function Laura_() {
  const { here, b } = useScene();
  return (
    <>
      <Reveal on={here} x={168} y={140}>
        <div className="t-eyebrow">Un ejemplo: la experiencia de Laura</div>
      </Reveal>

      {/* 07.1 */}
      <Reveal on={here && b === 0} out={here && b > 0} x={150} y={340}>
        <div className="t-statement" style={{ fontSize: 124, lineHeight: 1 }}>
          Laura llega por<br />el contenido<span style={{ color: 'var(--accent)' }}>.</span>
        </div>
      </Reveal>
      <Reveal on={here && b === 0} out={here && b > 0} x={150} y={700} delay={300}>
        <div className="t-statement" style={{ fontSize: 124, color: 'var(--accent)' }}>Se lleva una conexión.</div>
      </Reveal>

      {/* 07.2 */}
      <Reveal on={here && b === 1} out={here && b > 1} x={150} y={250}>
        <div className="t-statement" style={{ fontSize: 124, lineHeight: 1 }}>
          Conoce a Marcos<span style={{ color: 'var(--accent)' }}>.</span>
        </div>
      </Reveal>
      <Reveal on={here && b === 1} out={here && b > 1} x={150} y={440} delay={300}>
        <div className="t-editorial" style={{ fontSize: 72, width: 1500, color: 'var(--ink-2)' }}>
          Se conectan en Biavent y acuerdan seguir hablando.
        </div>
      </Reveal>

      {/* 07.3 */}
      <Reveal on={here && b === 2} x={150} y={250}>
        <div className="t-statement" style={{ fontSize: 124, lineHeight: 1 }}>
          Unos días después,<br />retoman la conversación<span style={{ color: 'var(--accent)' }}>.</span>
        </div>
      </Reveal>
      <Reveal on={here && b === 2} x={150} y={560} delay={300}>
        <div className="t-editorial" style={{ fontSize: 72, width: 1500, color: 'var(--ink-2)' }}>
          La relación sigue creciendo.
        </div>
      </Reveal>

      {/* Laura and Marcos: the connection, then the chat that keeps going */}
      <NodeBox rect={LAURA} on={here && b >= 1} kind="" value="Laura" tone="hot" />
      <NodeBox rect={MARCOS} on={here && b >= 1} kind="" value="Marcos" delay={200} />
      <Arrow from={LAURA} to={MARCOS} on={here && b >= 1} head label={b >= 2 ? 'chat · llamada' : 'conexión'} ly={-26} labelAnchor="middle" delay={400} />
      <Arrow from={MARCOS} to={LAURA} on={here && b >= 2} head flow tone="dim" delay={200} />
    </>
  );
}

/** 07 LAURA — one example, three beats: arrives, meets Marcos, keeps talking. */
export const Laura = () => <Scene index={6}><Laura_ /></Scene>;
