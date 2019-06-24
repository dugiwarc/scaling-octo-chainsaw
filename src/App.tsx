import React, { Fragment } from 'react';
import store from './store';
import HorizontalTile from './HorizontalTile';
import VerticalTile from './VerticalTile';
import PlayerBoard from './PlayerBoard';

import { connect } from 'react-redux';
import {
  GameState,
  incrementMove,
  nextPlayer,
  setGameMessage,
  rollTheDice,
  newRound,
  grantMoveAccess
} from './actions';
import { StoreState } from './reducers';

interface AppProps {
  props?: any;
  gamestate: GameState;
  incrementMove: typeof incrementMove;
  nextPlayer: typeof nextPlayer;
  setGameMessage: typeof setGameMessage;
  rollTheDice: typeof rollTheDice;
  newRound: typeof newRound;
  grantMoveAccess: typeof grantMoveAccess;
}

interface AppState {
  moves: number;
  fetching: boolean;
  roll: number;
  dummynumber: number;
  currentPlayer: number;
  isDisabled: boolean;
  playerID: number;
  gameMessage: string;
  cap: number;
  status_1: boolean;
  status_2: boolean;
  status_3: boolean;
  status_4: boolean;
  pawnToMove: number;
  isDisabledMove: boolean;
  pawnIndex: number;
  isDisabledRollSteps: boolean;
  executeMoves: boolean;
  isInitiated: boolean;
  hasMoved: boolean;
  numberofRolls: number;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      cap: 0,
      dummynumber: 3,
      gameMessage: '',
      fetching: false,
      roll: 0,
      currentPlayer: 1,
      isDisabled: false,
      moves: 0,
      playerID: 1,
      status_1: false,
      status_2: false,
      status_3: false,
      status_4: false,
      pawnToMove: 0,
      pawnIndex: 0,
      isDisabledMove: true,
      isDisabledRollSteps: true,
      executeMoves: false,
      isInitiated: false,
      hasMoved: false,
      numberofRolls: 0
    };
  }

  componentDidMount(): void {}

  componentDidUpdate(): void {
    if (this.state.currentPlayer === 2 && this.state.cap === 0) {
      this.setComputerPlayer();
    }
    if (this.state.currentPlayer === 3 && this.state.cap === 0) {
      this.setComputerPlayer();
    }
    if (this.state.currentPlayer >= 4 && this.state.cap === 0) {
      this.setComputerPlayer();
      this.setState({
        currentPlayer: 4,
        isDisabled: true
      });
    }
    if (this.state.isInitiated) {
      this.props.setGameMessage('Roll a number of steps to move');
      this.setState({
        gameMessage: store.getState().gamestate.gameMessage
      });
      this.setState({
        isInitiated: false
      });
    }

    if (this.state.hasMoved) {
      this.props.setGameMessage(
        'Roll the dice to try for another move if you get a 6'
      );
      this.setState({
        gameMessage: store.getState().gamestate.gameMessage,
        isDisabled: false,
        hasMoved: false
      });
    }
  }

  // renderList(): JSX.Element[] {
  // }

  handleClick = (): void => {
    this.props.rollTheDice();

    this.setState({
      roll: store.getState().gamestate.currentDiceRoll
    });
    // hardcode roll line
    if (this.state.roll !== 6) {
      this.setState({
        isDisabled: true
      });
      this.props.nextPlayer();
      this.setState({
        currentPlayer: store.getState().gamestate.currentActivePlayer
      });
    } else {
      this.props.setGameMessage('You rolled a 6! Select a pawn');
      this.props.grantMoveAccess(this.state.currentPlayer);
      this.setState({
        gameMessage: store.getState().gamestate.gameMessage,
        isDisabled: true,
        isDisabledRollSteps: false,
        numberofRolls: this.state.numberofRolls + 1
      });
      store.getState().gamestate.players[this.state.currentPlayer - 1]
        .isActive &&
        this.setState({
          status_1: !this.state.status_1
        });
    }
  };

  updatePawn = (id: number[]): number => {
    this.setState({ pawnToMove: id[0], pawnIndex: id[1] });
    return id[0];
  };

  rollSteps = (): void => {
    this.props.setGameMessage('Register steps and click on the pawn to move');

    this.setState({
      moves: Math.floor(Math.random() * 6 + 1),
      isDisabledRollSteps: true,
      gameMessage: store.getState().gamestate.gameMessage
    });
  };

  computerMoveAction = (): void => {
    console.log('Computer has moved');
    setTimeout(() => {
      this.props.setGameMessage('Computer has moved');
      this.setState({
        gameMessage: store.getState().gamestate.gameMessage
      });
    }, 2000);
    this.props.nextPlayer();
  };

  moveAction = (): void => {
    const cargo: number[] = [this.state.pawnToMove, this.state.moves];
    console.log(this.state.pawnIndex);
    if (!this.state.pawnToMove) {
      alert('You must select a pawn');
    } else {
      this.props.incrementMove(cargo);

      this.setState({ executeMoves: true });
      // const ob: {} = { [`pawn_${this.state.pawnIndex}`]: 19 };
      // this.state.pawnIndex && this.setState(ob);
    }
  };

  setLocalGameMessage = (item: string): void => {
    this.props.setGameMessage(item);
    this.setState({
      gameMessage: store.getState().gamestate.gameMessage
    });
  };

  setLocalInitiation = (item: boolean): void => {
    if (item) {
      this.setState({
        isInitiated: true
      });
    }
  };

  setLocalHasMoved = (item: boolean): void => {
    if (item) {
      this.setState({
        hasMoved: true
      });
    }
  };

  setComputerPlayer = (): void => {
    !store.getState().gamestate.players[this.state.currentPlayer - 1]
      .isActive &&
      this.setState({
        status_1: false
      });
    this.setState({ cap: 1 });
    this.props.setGameMessage(
      `Player ${this.state.currentPlayer} is rolling ...`
    );
    this.setState({
      gameMessage: store.getState().gamestate.gameMessage
    });
    this.props.rollTheDice();
    setTimeout(() => {
      this.setState({
        roll: store.getState().gamestate.currentDiceRoll
      });

      this.props.setGameMessage(
        `Player ${this.state.currentPlayer} has thrown a ${this.state.roll}`
      );

      this.setState({
        gameMessage: store.getState().gamestate.gameMessage
      });

      if (this.state.roll === 6) {
        this.props.setGameMessage(
          `Player ${this.state.currentPlayer} is making a move`
        );

        this.setState({
          gameMessage: store.getState().gamestate.gameMessage
        });
        this.computerMoveAction();
      }

      if (this.state.currentPlayer === 4 && this.state.roll !== 6) {
        console.log('new round');
        this.setState({ isDisabled: false });
        this.props.newRound();
      } else {
        this.props.nextPlayer();
      }

      this.setState({
        currentPlayer: store.getState().gamestate.currentActivePlayer
      });
    }, 2000);
    setTimeout(() => {
      this.setState({ cap: 0 });
      this.state.currentPlayer === 4 && this.setState({ isDisabled: true });
    }, 3000);
  };

  render() {
    const mainBoard: {} = {
      display: 'flex',
      height: '350px',
      width: '350px',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      boxSizing: 'border-box'
    };

    const top: {} = {
      width: '100%',
      height: '40%',
      display: 'flex'
    };
    const mid: {} = {
      width: '100%',
      height: '20%',
      display: 'flex'
    };
    const bottom: {} = {
      width: '100%',
      height: '40%',
      display: 'flex'
    };

    const square: {} = {
      height: '100%',
      width: '20%',
      backgroundColor: 'red'
    };

    return (
      <Fragment>
        {`Game Message: 
        ${this.state.gameMessage}
          `}
        <div style={mainBoard}>
          <div style={top}>
            <PlayerBoard
              isSelectable={this.state.status_2}
              num={5}
              updatePawn={this.updatePawn}
              updateSteps={this.state.moves}
              executeMoves={this.state.executeMoves}
              setLocalGameMessage={this.setLocalGameMessage}
              setLocalInitiation={this.setLocalInitiation}
              setLocalHasMoved={this.setLocalHasMoved}
            />
            <VerticalTile num={100} />
            <PlayerBoard
              isSelectable={this.state.status_3}
              num={9}
              updatePawn={this.updatePawn}
              updateSteps={this.state.moves}
              executeMoves={this.state.executeMoves}
              setLocalGameMessage={this.setLocalGameMessage}
              setLocalInitiation={this.setLocalInitiation}
              setLocalHasMoved={this.setLocalHasMoved}
            />
          </div>
          <div style={mid}>
            <HorizontalTile num={200} />
            <div style={square} />
            <HorizontalTile num={300} />
          </div>
          <div style={bottom}>
            <PlayerBoard
              isSelectable={this.state.status_1}
              num={1}
              updatePawn={this.updatePawn}
              updateSteps={this.state.moves}
              executeMoves={this.state.executeMoves}
              setLocalGameMessage={this.setLocalGameMessage}
              setLocalInitiation={this.setLocalInitiation}
              setLocalHasMoved={this.setLocalHasMoved}
            />
            <VerticalTile num={400} />
            <PlayerBoard
              isSelectable={this.state.status_4}
              num={13}
              updatePawn={this.updatePawn}
              updateSteps={this.state.moves}
              executeMoves={this.state.executeMoves}
              setLocalGameMessage={this.setLocalGameMessage}
              setLocalInitiation={this.setLocalInitiation}
              setLocalHasMoved={this.setLocalHasMoved}
            />
          </div>
        </div>
        <button onClick={this.handleClick} disabled={this.state.isDisabled}>
          Roll
        </button>
        <div>Dice roll: {this.state.roll}</div>
        <button
          onClick={this.moveAction}
          disabled={
            this.state.isDisabled && this.state.isDisabledRollSteps
              ? false
              : true
          }
        >
          Register Steps
        </button>
        <div>Number of steps: {this.state.moves}</div>
        <div>
          Current player:
          {this.state.currentPlayer}
        </div>
        <button
          onClick={this.rollSteps}
          disabled={this.state.isDisabledRollSteps}
        >
          Roll a number of steps
        </button>
        {this.state.moves}
      </Fragment>
    );
  }
}

const mapStateToProps = (state: StoreState): { gamestate: GameState } => {
  return { gamestate: state.gamestate };
};

export default connect(
  mapStateToProps,
  {
    incrementMove,
    nextPlayer,
    setGameMessage,
    rollTheDice,
    newRound,
    grantMoveAccess
  }
)(App);
