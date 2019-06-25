import React from 'react';
import store from '../store';
import { connect } from 'react-redux';
import { StoreState } from '../reducers/index';

import {
  GameState,
  nextPlayer,
  setGameMessage,
  rollTheDice,
  newRound
} from '../actions';

import GameBoard from './BoardComponents/GameBoard';

export interface AppState {
  isDisabledStart: boolean;
  isDisabledRoll: boolean;
  gameMessage: string;
  gameStarted: boolean;
  currentDiceRoll: number;
  currentPlayer: number;
  roundsPlayed: number;
}

export interface AppProps {
  nextPlayer: typeof nextPlayer;
  setGameMessage: typeof setGameMessage;
  rollTheDice: typeof rollTheDice;
  newRound: typeof newRound;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      isDisabledStart: false,
      isDisabledRoll: false,
      gameMessage: '',
      gameStarted: true,
      currentDiceRoll: 0,
      currentPlayer: 1,
      roundsPlayed: 0
    };
  }

  componentDidUpdate(): void {
    if (this.state.gameStarted) {
      this.setState({
        gameStarted: false
      });
    }
  }

  render() {
    const { setGameMessage, rollTheDice, nextPlayer, newRound } = this.props;
    const {
      gameMessage,
      isDisabledStart,
      isDisabledRoll,
      currentDiceRoll,
      currentPlayer,
      roundsPlayed
    } = this.state;

    const startGame = (): void => {
      setGameMessage('Game started');
      this.setState({
        gameMessage: store.getState().gamestate.gameMessage,
        isDisabledStart: true
      });
    };

    const rollDice = (): void => {
      setGameMessage(
        `Player ${store.getState().gamestate.currentActivePlayer} is rolling...`
      );
      rollTheDice();
      this.setState({
        gameMessage: store.getState().gamestate.gameMessage,
        currentDiceRoll: store.getState().gamestate.currentDiceRoll,
        isDisabledRoll: true
      });
      setTimeout(() => {
        setGameMessage(
          `Player ${
            store.getState().gamestate.currentActivePlayer
          } has rolled ${store.getState().gamestate.currentDiceRoll}`
        );
        this.setState({
          gameMessage: store.getState().gamestate.gameMessage
        });
        setTimeout(() => {
          if (store.getState().gamestate.currentDiceRoll !== 6) {
            if (store.getState().gamestate.currentActivePlayer === 4) {
              newRound();
              this.setState({
                roundsPlayed: store.getState().gamestate.roundsPlayed
              });
            } else nextPlayer();
            setGameMessage(
              `Awaiting Player ${
                store.getState().gamestate.currentActivePlayer
              } to roll the dice...`
            );
          } else {
            setGameMessage('Bravo, now roll again to move');
            // Move pawn logic
          }
          this.setState({
            isDisabledRoll: false,
            gameMessage: store.getState().gamestate.gameMessage,
            currentPlayer: store.getState().gamestate.currentActivePlayer
          });
        }, 2000);
      }, 1500);
    };
    return (
      <GameBoard
        startGame={startGame}
        rollTheDice={rollDice}
        gameMessage={gameMessage}
        isDisabledStart={isDisabledStart}
        isDisabledRoll={isDisabledRoll}
        currentDiceRoll={currentDiceRoll}
        currentPlayer={currentPlayer}
        roundsPlayed={roundsPlayed}
      />
    );
  }
}

const mapStateToProps = (state: StoreState): { gamestate: GameState } => {
  return { gamestate: state.gamestate };
};

export default connect(
  mapStateToProps,
  {
    nextPlayer,
    setGameMessage,
    rollTheDice,
    newRound
  }
)(App);
