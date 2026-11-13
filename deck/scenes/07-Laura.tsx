import { Reveal, Scene, useScene } from 'beatdeck';
import { Phone } from '../Phone';
import home from '../assets/phone-home.png';
import chats from '../assets/phone-chats.png';
import qr from '../assets/phone-qr.png';

const W = 340;
const X = (k: number) => 160 + k * (W + 80);
const LABEL: React.CSSProperties = { fontSize: 40, textAlign: 'center' };

function Laura_() {
  const { here, b } = useScene();
  return (
    <>
      <Reveal on={here} x={168} y={100}>
        <div className="t-eyebrow">Laura · Ejemplo ilustrativo</div>
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

      {/* 07.2 → 07.4 a visual sequence with real screens */}
      <Reveal on={here && b >= 1} x={X(0)} y={250} axis="x"><Phone src={home} alt="Eventos" w={W} /></Reveal>
      <Reveal on={here && b >= 1} x={X(0)} y={700} delay={250}><div className="t-editorial" style={{ ...LABEL, width: W }}>Encuentra un evento afín</div></Reveal>

      <Reveal on={here && b >= 2} x={X(1)} y={250} axis="x"><Phone src={chats} alt="Chats" w={W} /></Reveal>
      <Reveal on={here && b >= 2} x={X(1)} y={700} delay={250}><div className="t-editorial" style={{ ...LABEL, width: W }}>Conoce a Marcos</div></Reveal>

      <Reveal on={here && b >= 3} x={X(2)} y={250} axis="x"><Phone src={qr} alt="Código QR de contacto" w={W} /></Reveal>
      <Reveal on={here && b >= 3} x={X(3)} y={250} axis="x" delay={150}><Phone src={chats} alt="Chats" w={W} /></Reveal>
      <Reveal on={here && b >= 3} x={X(2)} y={700} delay={250}><div className="t-editorial" style={{ ...LABEL, width: W * 2 + 80 }}>Continúan la conversación</div></Reveal>

      {/* 07.5 */}
      <Reveal on={here && b >= 4} x={150} y={860}>
        <div className="t-statement" style={{ fontSize: 64, color: 'var(--accent)' }}>El evento termina; la conexión continúa.</div>
      </Reveal>
    </>
  );
}

/** 07 LAURA — an illustrative example told with the app's own screens. */
export const Laura = () => <Scene index={6}><Laura_ /></Scene>;
