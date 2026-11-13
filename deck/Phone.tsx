/** App screenshot in a 4:5 frame (white ground, aligned top), so crops of different heights line up. */
export function Phone({ src, alt, w }: { src: string; alt: string; w: number }) {
  return (
    <div style={{ width: w, height: Math.round(w * 1.25), background: '#fff', overflow: 'hidden', borderRadius: 28, boxShadow: '0 0 0 1px var(--hair-strong)' }}>
      <img src={src} alt={alt} style={{ display: 'block', width: w }} />
    </div>
  );
}
