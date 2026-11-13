import { Reveal, Scene, useScene } from 'beatdeck';
import { config } from '../deck.config';
import { Logo } from '../Logo';
import networking from '../assets/networking.jpg';

function Reto_() {
  const { here, b } = useScene();
  return (
    <>
      {/* 01.1 standby: a quiet mark */}
      <div style={{ position: 'absolute', left: 952, top: 532, width: 16, height: 16, background: 'var(--accent)', opacity: here && b === 0 ? 1 : 0, transition: 'opacity 400ms' }} />

      {/* 01.2 title */}
      <Reveal on={here && b === 1} out={here && b > 1} x={150} y={400} delay={120} ms={1100}>
        <div className="t-statement" style={{ fontSize: 150 }}>Biavent<span style={{ color: 'var(--accent)' }}>:</span></div>
        <div className="t-statement" style={{ fontSize: 150, marginTop: 24 }}>eventos que conectan</div>
      </Reveal>
      <Reveal on={here && b === 1} out={here && b > 1} x={168} y={880} delay={400}>
        <div className="t-meta" style={{ fontSize: 22 }}>{config.author}</div>
      </Reveal>
      <Reveal on={here && b === 1} out={here && b > 1} x={150} y={130}>
        <Logo height={200} />
      </Reveal>

      {/* 01.3 the question over a quiet networking image */}
      <img src={networking} alt="" style={{ position: 'absolute', left: 0, top: 0, width: 1920, height: 1080, objectFit: 'cover', opacity: here && b === 2 ? 0.28 : 0, transition: 'opacity 900ms' }} />
      <Reveal on={here && b === 2} x={150} y={300}>
        <div className="t-statement" style={{ fontSize: 132, lineHeight: 1 }}>
          ¿Cuántas conversaciones<br />interesantes se quedan<br />sin empezar<span style={{ color: 'var(--accent)' }}>?</span>
        </div>
      </Reveal>
      <Reveal on={here && b === 2} x={1690} y={90} delay={300}>
        <Logo height={110} />
      </Reveal>
    </>
  );
}

/** 01 EL RETO — standby, title, the opening question. */
export const Reto = () => <Scene index={0}><Reto_ /></Scene>;
