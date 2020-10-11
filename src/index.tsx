import * as React from 'react';
import { PiletApi } from 'KitchenSink';
import {Game} from '../components/Game';
import './index.scss';
import { Link } from 'react-router-dom';
export function setup(app: PiletApi) {
 
  app.registerMenu(() =>
    <a href="https://docs.piral.io" target="_blank">Documentation</a>
  );
  app.registerTile(() => <div><Link to="/tac-react">Tic Tac</Link></div>, {
    initialColumns: 2,
    initialRows: 1,
  });
  app.registerPage("/tac-react", ()=>
  <Game />
  );
}
