import { GameState, Action, ActionTypes } from '../actions';

const initState = {
  currentActivePlayer: 1,
  currentActivePawn: 0,
  currentDiceRoll: 0,
  currentSelectedPlayer: 0,
  gameMessage: '',
  players: [
    {
      userID: 1,
      pawns: [
        {
          pawnID: 1,
          moves: 0,
          isSafe: false
        },
        {
          pawnID: 2,
          moves: 0,
          isSafe: false
        },
        {
          pawnID: 3,
          moves: 0,
          isSafe: false
        },
        {
          pawnID: 4,
          moves: 0,
          isSafe: false
        }
      ],
      isActive: false
    },
    {
      userID: 2,
      pawns: [
        {
          pawnID: 5,
          moves: 0,
          isSafe: false
        },
        {
          pawnID: 6,
          moves: 0,
          isSafe: false
        },
        {
          pawnID: 7,
          moves: 0,
          isSafe: false
        },
        {
          pawnID: 8,
          moves: 0,
          isSafe: false
        }
      ],
      isActive: false
    },
    {
      userID: 3,
      pawns: [
        {
          pawnID: 9,
          moves: 0,
          isSafe: false
        },
        {
          pawnID: 10,
          moves: 0,
          isSafe: false
        },
        {
          pawnID: 11,
          moves: 0,
          isSafe: false
        },
        {
          pawnID: 12,
          moves: 0,
          isSafe: false
        }
      ],
      isActive: false
    },
    {
      userID: 4,
      pawns: [
        {
          pawnID: 13,
          moves: 0,
          isSafe: false
        },
        {
          pawnID: 14,
          moves: 0,
          isSafe: false
        },
        {
          pawnID: 15,
          moves: 0,
          isSafe: false
        },
        {
          pawnID: 16,
          moves: 0,
          isSafe: false
        }
      ],
      isActive: false
    }
  ]
};

export const gamestateReducer = (
  state: GameState = initState,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.newRound:
      state.currentActivePlayer = 1;
      return state;
    case ActionTypes.incrementMove:
      state.players[state.currentActivePlayer - 1].pawns[
        action.payload[0]
      ].moves += action.payload[1];
      return state;
    case ActionTypes.nextPlayer:
      state.currentActivePlayer++;
      return state;
    case ActionTypes.setGameMessage:
      state.gameMessage = action.payload;
      return state;
    case ActionTypes.rollTheDice:
      state.currentDiceRoll = action.payload;
      return state;
    case ActionTypes.grantMoveAccess:
      state.players.map(item =>
        item.userID === action.payload ? (item.isActive = true) : null
      );
      return state;
    default:
      return state;
  }
};
