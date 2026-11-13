import { Reveal, Scene, useScene } from 'beatdeck';

const STEPS = ['Descubrir', 'Participar', 'Conectar', 'Continuar'];

function Asistente_() {
  const { here, b } = useScene();
  return (
    <>
      {STEPS.map((word, k) => (
        <Reveal key={word} on={here && b >= k} x={150} y={130 + k * 215}>
          <div className="t-eyebrow" style={{ color: here && b === k ? 'var(--accent)' : 'var(--ink-3)', transition: 'color 400ms' }}>0{k + 1}</div>
          <div className="t-statement" style={{ fontSize: 150, marginTop: 12, color: here && b === k ? 'var(--ink)' : 'var(--ink-3)', transition: 'color 400ms' }}>{word}</div>
        </Reveal>
      ))}
    </>
  );
}

/** 04 EL ASISTENTE — four verbs, one per beat; the current one in ink, the rest dimmed. */
export const Asistente = () => <Scene index={3}><Asistente_ /></Scene>;
