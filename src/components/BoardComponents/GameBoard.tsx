import React, { Fragment } from 'react';
import PlayerBoard from './PlayerBoard';
import GameStats from './GameStats';
import GameLog from './GameLog';
import VerticalTile from './VerticalTile';
import Buttons from './Buttons';
import HorizontalTile from './HorizontalTile';
import { mainBoard, mid, bottom, top, square } from '../styles/';

interface AppProps {
  startGame: Function;
  gameMessage: string;
  isDisabledStart: boolean;
  isDisabledRoll: boolean;
  rollTheDice: Function;
  currentDiceRoll: number;
  currentPlayer: number;
  roundsPlayed: number;
}

class GameBoard extends React.Component<AppProps> {
  render() {
    const {
      startGame,
      gameMessage,
      isDisabledStart,
      isDisabledRoll,
      rollTheDice,
      currentDiceRoll,
      currentPlayer,
      roundsPlayed
    } = this.props;
    return (
      <Fragment>
        <div style={mainBoard}>
          <div style={top}>
            <PlayerBoard />
            <VerticalTile />
            <PlayerBoard />
          </div>
          <div style={mid}>
            <HorizontalTile />
            <div style={square} />
            <HorizontalTile />
          </div>
          <div style={bottom}>
            <PlayerBoard />
            <VerticalTile />
            <PlayerBoard />
          </div>
        </div>
        <GameStats
          gameMessage={gameMessage}
          currentDiceRoll={currentDiceRoll}
          currentPlayer={currentPlayer}
          roundsPlayed={roundsPlayed}
        />
        <Buttons
          startGame={startGame}
          isDisabledStart={isDisabledStart}
          isDisabledRoll={isDisabledRoll}
          rollTheDice={rollTheDice}
        />
        <GameLog gameMessage={gameMessage} currentDiceRoll={currentDiceRoll} />
      </Fragment>
    );
  }
}

export default GameBoard;
