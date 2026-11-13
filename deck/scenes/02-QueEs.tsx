import { Reveal, Scene, useScene } from 'beatdeck';
import { Logo } from '../Logo';
import networking from '../assets/networking.jpg';

function QueEs_() {
  const { here, b } = useScene();
  return (
    <>
      <Reveal on={here} x={150} y={110}>
        <Logo height={120} />
      </Reveal>
      <Reveal on={here} x={150} y={290}>
        <div className="t-statement" style={{ fontSize: 100, lineHeight: 1 }}>
          Una plataforma para<br />descubrir eventos<br />y conectar a quienes<br />participan.
        </div>
      </Reveal>

      {/* 02.2 people at an event, framed (the page-1 backdrop, cropped differently) */}
      <Reveal on={here && b >= 1} x={1210} y={190} axis="x">
        <img src={networking} alt="Asistentes conversando en un evento" style={{ display: 'block', width: 560, height: 700, objectFit: 'cover', objectPosition: '58% 50%', borderRadius: 28, boxShadow: '0 0 0 1px var(--hair-strong)' }} />
      </Reveal>
      <Reveal on={here && b >= 1} x={168} y={760} delay={300}>
        <div className="t-eyebrow">Para asistentes y organizadores</div>
      </Reveal>
    </>
  );
}

/** 02 QUÉ ES BIAVENT — the platform; then people at an event. */
export const QueEs = () => <Scene index={1}><QueEs_ /></Scene>;
