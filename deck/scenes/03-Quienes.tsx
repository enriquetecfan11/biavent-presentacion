import { Reveal, Scene, useScene } from 'beatdeck';

function Quienes_() {
  const { here } = useScene();
  return (
    <>
      <Reveal on={here} x={150} y={330}>
        <div className="t-statement" style={{ fontSize: 150 }}>Enrique Rodríguez</div>
      </Reveal>
      <Reveal on={here} x={150} y={520} delay={160}>
        <div className="t-statement" style={{ fontSize: 150 }}>Isabel Gutiérrez</div>
      </Reveal>
      <Reveal on={here} x={168} y={780} delay={360}>
        <div className="t-eyebrow">Creadores de Biavent</div>
      </Reveal>
    </>
  );
}

/** 03 QUIÉNES SOMOS — the two creators. */
export const Quienes = () => <Scene index={2}><Quienes_ /></Scene>;
