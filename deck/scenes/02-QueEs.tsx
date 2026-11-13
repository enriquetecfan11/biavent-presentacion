import { Reveal, Scene, useScene } from 'beatdeck';
import { Logo } from '../Logo';
import { Phone } from '../Phone';
import home from '../assets/phone-home.png';

function QueEs_() {
  const { here, b } = useScene();
  return (
    <>
      <Reveal on={here} x={150} y={110}>
        <Logo height={120} />
      </Reveal>
      <Reveal on={here} x={150} y={290}>
        <div className="t-statement" style={{ fontSize: 100, lineHeight: 1 }}>
          Una plataforma para<br />descubrir eventos<br />y conectar a quienes<br />participan<span style={{ color: 'var(--accent)' }}>.</span>
        </div>
      </Reveal>

      {/* 02.2 the discovery screen, one phrase */}
      <Reveal on={here && b >= 1} x={1210} y={190} axis="x">
        <Phone src={home} alt="Pantalla de eventos de la app" w={560} />
      </Reveal>
      <Reveal on={here && b >= 1} x={168} y={760} delay={300}>
        <div className="t-eyebrow">Para asistentes y organizadores</div>
      </Reveal>
    </>
  );
}

/** 02 QUÉ ES BIAVENT — the platform; then the app's events screen. */
export const QueEs = () => <Scene index={1}><QueEs_ /></Scene>;
