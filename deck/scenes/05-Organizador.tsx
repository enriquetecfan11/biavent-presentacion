import { Reveal, Scene, useScene } from 'beatdeck';

/*
 * TODO (falta material): no hay captura del panel del organizador ni de analíticas en reference/assets/.
 * `about-us.png` es la pantalla de chats cargando, no el panel. Cuando exista, añadirla a deck/assets/
 * y mostrarla aquí junto a cada etiqueta (usar <Phone> o una captura de escritorio).
 */
function Organizador_() {
  const { here, b } = useScene();
  return (
    <>
      <Reveal on={here} x={150} y={200}>
        <div className="t-statement" style={{ fontSize: 100, lineHeight: 1.02 }}>
          Organizar mejor y entender<br />qué ocurre en el evento<span style={{ color: 'var(--accent)' }}>.</span>
        </div>
      </Reveal>
      <Reveal on={here && b >= 0} x={168} y={560} delay={300}>
        <div className="t-eyebrow">01</div>
        <div className="t-statement" style={{ fontSize: 84, marginTop: 14 }}>Gestión del evento</div>
      </Reveal>
      <Reveal on={here && b >= 1} x={168} y={760}>
        <div className="t-eyebrow" style={{ color: 'var(--accent)' }}>02</div>
        <div className="t-statement" style={{ fontSize: 84, marginTop: 14, color: 'var(--accent)' }}>Participación e interacción</div>
      </Reveal>
    </>
  );
}

/** 05 EL ORGANIZADOR — headline and its two labels (captures pending). */
export const Organizador = () => <Scene index={4}><Organizador_ /></Scene>;
