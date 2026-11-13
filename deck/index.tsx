import { defineDeck } from 'beatdeck';
import '../themes/biavent.css';
import { config } from './deck.config';
import { SCENES } from './scenes';
import { Reto } from './scenes/01-Reto';
import { QueEs } from './scenes/02-QueEs';
import { Asistente } from './scenes/03-Asistente';
import { Organizador } from './scenes/04-Organizador';
import { Valor } from './scenes/05-Valor';
import { Laura } from './scenes/06-Laura';
import { Cierre } from './scenes/07-Cierre';

/** Every layer of the stage, back to front. All stay mounted; each shows itself for its own scene. */
function Stage() {
  return (
    <>
      <Reto />
      <QueEs />
      <Asistente />
      <Organizador />
      <Valor />
      <Laura />
      <Cierre />
    </>
  );
}

export default defineDeck({
  id: 'biavent-eventos-que-conectan',
  title: config.title,
  lang: 'es',
  scenes: SCENES,
  Stage,
  fonts: ['400 100px "Inter Variable"', '600 100px "Inter Variable"', '400 32px "JetBrains Mono Variable"'],
  qrUrl: config.qrUrl,
});
