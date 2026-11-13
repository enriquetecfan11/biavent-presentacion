import logo from './assets/logo.png';

/** Biavent mark on an off-white plate: the logo is navy, so it needs a light ground on the dark stage. */
export function Logo({ height }: { height: number }) {
  const pad = Math.round(height * 0.12);
  return (
    <div style={{ background: '#F8F9FC', padding: pad, display: 'inline-block' }}>
      <img src={logo} alt="Biavent" style={{ display: 'block', height: height - pad * 2 }} />
    </div>
  );
}
