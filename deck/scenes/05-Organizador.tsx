import { Reveal, Scene, useScene } from 'beatdeck';

function Organizador_() {
  const { here, b } = useScene();
  return (
    <>
      <Reveal on={here} x={150} y={330}>
        <div className="t-statement" style={{ fontSize: 150 }}>Organizar mejor</div>
      </Reveal>
      <Reveal on={here && b >= 1} x={150} y={540}>
        <div className="t-statement" style={{ fontSize: 120, lineHeight: 1, color: 'var(--accent)' }}>
          y entender qué ocurre<br />en el evento
        </div>
      </Reveal>
    </>
  );
}

/** 05 EL ORGANIZADOR — organize better, then understand what happens. */
export const Organizador = () => <Scene index={4}><Organizador_ /></Scene>;
