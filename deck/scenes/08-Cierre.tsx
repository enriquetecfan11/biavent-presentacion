import { QR, Reveal, Scene, qrConfigured, useScene } from 'beatdeck';
import { config } from '../deck.config';
import { Logo } from '../Logo';

function Cierre_() {
  const { here, b } = useScene();
  const qr = qrConfigured(config.qrUrl);
  return (
    <>
      <Reveal on={here && b === 0} out={here && b > 0} x={150} y={300}>
        <div className="t-statement" style={{ fontSize: 132, lineHeight: 1 }}>
          ¿Cuántas conversaciones<br />interesantes se quedan<br />sin empezar?
        </div>
      </Reveal>

      <Reveal on={here && b === 1} out={here && b > 1} x={150} y={330}>
        <div className="t-statement" style={{ fontSize: 100, lineHeight: 1 }}>
          Biavent conecta<br />eventos con personas<br />y personas <span style={{ color: 'var(--accent)' }}>entre sí</span>.
        </div>
      </Reveal>
      <Reveal on={here && b === 1} out={here && b > 1} x={1380} y={300} delay={300}>
        <Logo height={420} />
      </Reveal>

      <Reveal on={here && b === 2} x={160} y={140}>
        <Logo height={200} />
      </Reveal>
      <Reveal on={here && b === 2} x={160} y={420}>
        <div className="t-statement" style={{ fontSize: 220 }}>Gracias.</div>
      </Reveal>
      <Reveal on={here && b === 2} x={170} y={720} delay={200}>
        <div className="t-meta" style={{ fontSize: 24 }}>{config.author}</div>
      </Reveal>
      {qr && (
        <Reveal on={here && b === 2} x={1440} y={330} delay={300}>
          <QR url={config.qrUrl} size={320} />
          {config.qrLabel && (
            <div className="t-meta" style={{ fontSize: 18, marginTop: 24, width: 320, textAlign: 'center', textTransform: 'none', letterSpacing: '0.02em' }}>{config.qrLabel}</div>
          )}
        </Reveal>
      )}
    </>
  );
}

/** 08 CIERRE — the opening question again, the central idea with the logo, thanks (+ QR). */
export const Cierre = () => <Scene index={7}><Cierre_ /></Scene>;
