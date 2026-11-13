import { Reveal, Scene, useScene } from 'beatdeck';
import enriquePhoto from '../assets/enrique.jpg';
import isabelPhoto from '../assets/isabel.jpg';

const PERSON: React.CSSProperties = { width: 760, display: 'flex', flexDirection: 'column', alignItems: 'center' };
const PHOTO: React.CSSProperties = { width: 300, height: 300, objectFit: 'cover', borderRadius: '50%', display: 'block' };

function Quienes_() {
  const { here } = useScene();
  return (
    <>
      <Reveal on={here} x={140} y={190}>
        <div style={PERSON}>
          <img src={enriquePhoto} alt="Enrique Rodríguez" style={PHOTO} />
          <div className="t-statement" style={{ fontSize: 80, marginTop: 36 }}>Enrique Rodríguez</div>
        </div>
      </Reveal>
      <Reveal on={here} x={1020} y={190} delay={160}>
        <div style={PERSON}>
          <img src={isabelPhoto} alt="Isabel Gutiérrez" style={PHOTO} />
          <div className="t-statement" style={{ fontSize: 80, marginTop: 36 }}>Isabel Gutiérrez</div>
        </div>
      </Reveal>
      <Reveal on={here} x={140} y={800} delay={360}>
        <div style={{ width: 1640, textAlign: 'center' }} className="t-eyebrow">Creadores de Biavent</div>
      </Reveal>
    </>
  );
}

/** 03 QUIÉNES SOMOS — the two creators, same size, names under their photos. */
export const Quienes = () => <Scene index={2}><Quienes_ /></Scene>;
