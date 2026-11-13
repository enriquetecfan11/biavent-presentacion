/**
 * Everything that may need changing five minutes before going on stage lives here.
 * After editing, rebuild (`npm run build` / `npm run present`).
 */
export const config = {
  title: 'Biavent: eventos que conectan',
  /** One line under the title. Empty = none. */
  subtitle: '',
  author: 'Enrique Rodríguez · Isabel Gutiérrez',
  /** Destination of the QR on the closing screen. "TODO" = no QR (the presenter view warns). Never guess it. */
  qrUrl: 'https://biavent.com',
  /** Shown under the QR, e.g. "example.com/talk". */
  qrLabel: 'biavent.com',
} as const;
