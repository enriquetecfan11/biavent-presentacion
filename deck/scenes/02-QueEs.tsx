import { Arrow, NodeBox, Reveal, Scene, useScene } from 'beatdeck';

function QueEs_() {
  const { here, b } = useScene();
  return (
    <>
      <Reveal on={here && b === 0} out={here && b > 0} x={150} y={320}>
        <div className="t-statement" style={{ fontSize: 112, lineHeight: 1 }}>
          Una plataforma para<br />descubrir eventos<br />y conectar a quienes<br />participan<span style={{ color: 'var(--accent)' }}>.</span>
        </div>
      </Reveal>

      {/* 02.2 two experiences around Biavent */}
      <NodeBox rect={{ x: 150, y: 330, w: 520, h: 130 }} on={here && b === 1} kind="" value="Para quien asiste" />
      <NodeBox rect={{ x: 700, y: 330, w: 520, h: 130 }} on={here && b === 1} kind="" value="Biavent" tone="hot" delay={150} />
      <NodeBox rect={{ x: 1250, y: 330, w: 520, h: 130 }} on={here && b === 1} kind="" value="Para quien organiza" delay={300} />
      <Arrow from={{ x: 150, y: 330, w: 520, h: 130 }} to={{ x: 700, y: 330, w: 520, h: 130 }} on={here && b === 1} head flow delay={450} />
      <Arrow from={{ x: 1250, y: 330, w: 520, h: 130 }} to={{ x: 700, y: 330, w: 520, h: 130 }} on={here && b === 1} head flow delay={600} />
      <Reveal on={here && b === 1} x={150} y={560} delay={500}>
        <div className="t-editorial" style={{ fontSize: 52, width: 520 }}>Encontrar eventos y conectar con otros asistentes</div>
      </Reveal>
      <Reveal on={here && b === 1} x={1250} y={560} delay={700}>
        <div className="t-editorial" style={{ fontSize: 52, width: 520 }}>Ofrecer una experiencia cuidada</div>
      </Reveal>
    </>
  );
}

/** 02 QUÉ ES BIAVENT — the platform, then its two experiences. */
export const QueEs = () => <Scene index={1}><QueEs_ /></Scene>;
