import { GameState, Action, ActionTypes } from '../actions';

const initState = {
  currentActivePlayer: 1,
  currentDiceRoll: 0,
  roundsPlayed: 0,
  gameMessage: ''
};

export const gamestateReducer = (
  state: GameState = initState,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.newRound:
      state.currentActivePlayer = 1;
      state.roundsPlayed++;
      return state;
    // case ActionTypes.incrementMove:
    //   state.players[state.currentActivePlayer - 1].pawns[
    //     action.payload[0]
    //   ].moves += action.payload[1];
    //   return state;
    case ActionTypes.nextPlayer:
      state.currentActivePlayer++;
      return state;
    case ActionTypes.setGameMessage:
      state.gameMessage = action.payload;
      return state;
    case ActionTypes.rollTheDice:
      state.currentDiceRoll = action.payload;
      return state;
    // case ActionTypes.grantMoveAccess:
    //   state.players.map(item =>
    //     item.userID === action.payload ? (item.isActive = true) : null
    //   );
    //   return state;
    default:
      return state;
  }
};
