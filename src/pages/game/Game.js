import React, { useState, useEffect, useRef } from 'react';

import Player from '../../components/player/Player';
import Opponent from '../../components/opponent/Opponent';

import css from './Game.sass';

const Game = () => {
  // Just hardcode for now
  const players = [
    'player',
    'cpu1',
    'cpu2',
    'cpu3',
  ];

  // State
  const [ selected, setSelected] = useState([]);
  const [ handLabel, setHandLabel ] = useState('Pass');
  const [ wasm, setWasm ] = useState(null);
  const [ game, setGame ] = useState(null);

  // Load WASM library
  useEffect(() => {
    import('wasm-pusoy-dos').then(wasm => {
      setWasm(wasm);
    });
  }, []);

  // Get Move Label
  useEffect(() => {
    const move = wasm &&
      wasm.get_hand_type(selected) ||
      {type: 'Invalid Hand'};

    switch (move.type) {
      case 'single':
        setHandLabel(`${move.cards.card.rank} of ${move.cards.card.suit.name}`);
        break;
      case 'pair':
      case 'prial':
        setHandLabel(`${move.type} of ${move.cards[0].card.rank}`);
        break;
      case 'fivecardtrick':
        switch (move.cards.trick_type) {
          case 'Flush':
            setHandLabel(`${move.cards.cards[0].card.suit.name} flush`);
            break;
          case 'FullHouse':
            setHandLabel(`Full House`);
            break;
          default:
            setHandLabel(move.cards.trick_type);
            break;
        }
        break;
      default:
        setHandLabel(move.type);
    }
  }, [selected, wasm]);

  // Functions/Callbacks
  function onDeal() {
    setGame(wasm.create_game(players));
  }

  function getPlayerCards(player) {
    return wasm.get_player(game, player);
  }

  function getHiddenCards(player) {
    return getPlayerCards(player).map((_, index) => index);
  }

  // HTML
  const table = game ? (
    <div className={css.game}>
        <div className={css.opponents}>
          <div id={css.cpu1}>
            <Opponent cards={getHiddenCards(players[1])} vertical={true} />
          </div>
          <div id={css.cpu2}>
            <Opponent cards={getHiddenCards(players[2])} />
          </div>
          <div id={css.cpu3}>
            <Opponent cards={getHiddenCards(players[3])} vertical={true} />
          </div>
        </div>
        <div className={css.player}>
          <Player cards={getPlayerCards(players[0])} onSelect={setSelected} />
        </div>
        <div>{handLabel}</div>
    </div>
  ) : (
    <button onClick={onDeal}>Deal!</button>
  );

  return wasm ? (
    table
  ) : (
    <h1>Loading</h1>
  );
}

export default Game;

