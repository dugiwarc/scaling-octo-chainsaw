import React from 'react';
import { dashboard } from '../styles/';
import InfoComp from './InfoComp';

interface AppProps {
  gameMessage: string;
  currentDiceRoll: number;
  currentPlayer: number;
  roundsPlayed: number;
}

class GameStats extends React.Component<AppProps> {
  render() {
    const {
      gameMessage,
      currentDiceRoll,
      currentPlayer,
      roundsPlayed
    } = this.props;
    return (
      <div style={dashboard}>
        <InfoComp title={`Game message: `} output={gameMessage} />
        <InfoComp
          title={`Current roll: `}
          output={currentDiceRoll && currentDiceRoll}
        />
        <InfoComp title={`Current player: `} output={currentPlayer} />
        <InfoComp title={`Rounds: `} output={roundsPlayed} />
      </div>
    );
  }
}

export default GameStats;
