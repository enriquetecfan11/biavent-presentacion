import { Reveal, Scene, useScene } from 'beatdeck';
import detailHome from '../assets/detail-home.png';
import detailChats from '../assets/detail-chats.png';
import detailChatsTabs from '../assets/detail-chats-tabs.png';
import detailQr from '../assets/detail-qr.png';

const SHOT: React.CSSProperties = { display: 'block', borderRadius: 28, boxShadow: '0 0 0 1px var(--hair-strong)' };
const CAPTION: React.CSSProperties = { fontSize: 56 };

/** One detail per beat, each leaving as the next one arrives. */
function Laura_() {
  const { here, b } = useScene();
  const at = (k: number) => ({ on: here && b === k, out: here && b > k });
  return (
    <>
      <Reveal on={here} x={168} y={100}>
        <div className="t-eyebrow">Laura · Ejemplo ilustrativo</div>
      </Reveal>

      {/* 07.1 */}
      <Reveal {...at(0)} x={150} y={340}>
        <div className="t-statement" style={{ fontSize: 124, lineHeight: 1 }}>
          Laura llega por<br />el contenido.
        </div>
      </Reveal>
      <Reveal {...at(0)} x={150} y={700} delay={300}>
        <div className="t-statement" style={{ fontSize: 124, color: 'var(--accent)' }}>Se lleva una conexión.</div>
      </Reveal>

      {/* 07.2 she finds an event */}
      <Reveal {...at(1)} x={310} y={300}>
        <img src={detailHome} alt="Próximos eventos en la app" style={{ ...SHOT, width: 1300 }} />
      </Reveal>
      <Reveal {...at(1)} x={310} y={720} delay={250}>
        <div className="t-editorial" style={CAPTION}>Encuentra un evento afín</div>
      </Reveal>

      {/* 07.3 she meets Marcos and chats */}
      <Reveal {...at(2)} x={360} y={290}>
        <img src={detailChats} alt="Lista de chats" style={{ ...SHOT, width: 1200 }} />
      </Reveal>
      <Reveal {...at(2)} x={360} y={720} delay={250}>
        <div className="t-editorial" style={CAPTION}>Conoce a Marcos</div>
      </Reveal>

      {/* 07.4 they stay in touch */}
      <Reveal {...at(3)} x={150} y={230} axis="x">
        <img src={detailQr} alt="Mi código QR en la app" style={{ ...SHOT, width: 520 }} />
      </Reveal>
      <Reveal {...at(3)} x={730} y={330} axis="x" delay={150}>
        <img src={detailChatsTabs} alt="Chats y conexiones" style={{ ...SHOT, width: 1040 }} />
      </Reveal>
      <Reveal {...at(3)} x={150} y={800} delay={300}>
        <div className="t-editorial" style={CAPTION}>Continúan la conversación</div>
      </Reveal>

      {/* 07.5 */}
      <Reveal on={here && b >= 4} x={150} y={340}>
        <div className="t-statement" style={{ fontSize: 124, lineHeight: 1, color: 'var(--accent)' }}>
          El evento termina;<br />la conexión continúa.
        </div>
      </Reveal>
    </>
  );
}

/** 07 LAURA — an illustrative example told with details of the app's own screens, one per beat. */
export const Laura = () => <Scene index={6}><Laura_ /></Scene>;
