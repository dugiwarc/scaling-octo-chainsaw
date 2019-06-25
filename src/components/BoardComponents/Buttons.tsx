import React from 'react';

interface AppProps {
  startGame: Function;
  isDisabledStart: boolean;
  isDisabledRoll: boolean;

  rollTheDice: Function;
}

class Buttons extends React.Component<AppProps> {
  render() {
    const {
      startGame,
      isDisabledStart,
      rollTheDice,
      isDisabledRoll
    } = this.props;
    return (
      <div>
        <button onClick={() => startGame()} disabled={isDisabledStart}>
          Start Game
        </button>
        <button onClick={() => rollTheDice()} disabled={isDisabledRoll}>
          Roll
        </button>
      </div>
    );
  }
}

export default Buttons;
