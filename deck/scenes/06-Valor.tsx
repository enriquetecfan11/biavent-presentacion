import { Reveal, Scene, useScene } from 'beatdeck';

const ROWS = [
  { label: 'Para quien asiste', text: 'más fácil encontrar personas afines y continuar las conversaciones' },
  { label: 'Para quien organiza', text: 'herramientas para cuidar la experiencia y entender la participación' },
  { label: 'Para el evento', text: 'continuidad antes, durante y después' },
];

function Valor_() {
  const { here, b } = useScene();
  return (
    <>
      {ROWS.map((row, k) => (
        <Reveal key={row.label} on={here && b >= k} x={150} y={170 + k * 270}>
          <div className="t-eyebrow" style={{ color: here && b === k ? 'var(--accent)' : 'var(--ink-3)', transition: 'color 400ms' }}>{row.label}</div>
          <div className="t-editorial" style={{ fontSize: 72, width: 1500, marginTop: 20, color: here && b === k ? 'var(--ink)' : 'var(--ink-2)', transition: 'color 400ms' }}>{row.text}</div>
        </Reveal>
      ))}
    </>
  );
}

/** 06 EL VALOR — three rows, one per beat. */
export const Valor = () => <Scene index={5}><Valor_ /></Scene>;
