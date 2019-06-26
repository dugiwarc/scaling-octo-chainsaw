import React from 'react';

import { boxShadow, dummy } from '../styles/';

interface AppProps {
  startGame: Function;
  isDisabledStart: boolean;
  isDisabledRoll: boolean;
  rollDiceForMove: Function;
  rollTheDice: Function;
  isDisabledRollForMoves: boolean;
  setGameMessage: Function;
}

class Buttons extends React.Component<AppProps> {
  render() {
    const {
      startGame,
      isDisabledStart,
      rollTheDice,
      isDisabledRoll,
      rollDiceForMove,
      isDisabledRollForMoves,
      setGameMessage
    } = this.props;

    const rollForMoves = (): void => {
      console.log('Rolling a number of moves');
      setTimeout(() => {
        const roll = Math.floor(Math.random() * 6 + 1);
        console.log(`Player has rolled a ${roll}`);
        const textOutput: string = roll === 1 ? 'move' : 'moves';
        setGameMessage(`You have won ${roll} ${textOutput}`);
        rollDiceForMove(roll);
      }, 1500);
    };
    return (
      <div>
        <button
          onClick={() => startGame()}
          style={!isDisabledStart ? boxShadow : dummy}
          disabled={isDisabledStart}
        >
          Start Game
        </button>
        <button
          onClick={() => rollTheDice()}
          disabled={isDisabledRoll}
          style={!isDisabledRoll ? boxShadow : dummy}
        >
          Roll
        </button>
        <button
          onClick={rollForMoves}
          disabled={isDisabledRollForMoves}
          style={!isDisabledRollForMoves ? boxShadow : dummy}
        >
          Roll for moves
        </button>
      </div>
    );
  }
}

export default Buttons;
