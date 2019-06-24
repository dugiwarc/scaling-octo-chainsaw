// import { Dispatch } from 'redux';
import { ActionTypes } from './types';

// State Interfaces
export interface Pawn {
  pawnID: number;
  isSafe: boolean;
  moves: number;
}

export interface Player {
  userID: number;
  pawns: Pawn[];
  isActive: boolean;
}

export interface GameState {
  currentActivePlayer: number;
  currentActivePawn: number;
  currentSelectedPlayer: number;
  currentDiceRoll: number;
  gameMessage: string;
  players: Player[];
}

/// Action Interfaces
export interface IncrementMoveAction {
  type: ActionTypes.incrementMove;
  payload: number[];
}

export interface SetGameMessageAction {
  type: ActionTypes.setGameMessage;
  payload: string;
}

export interface NextPlayerAction {
  type: ActionTypes.nextPlayer;
}

export interface RollTheDiceAction {
  type: ActionTypes.rollTheDice;
  payload: number;
}

export interface NewRoundAction {
  type: ActionTypes.newRound;
}

export interface GrantMoveAccessAction {
  type: ActionTypes.grantMoveAccess;
  payload: number;
}

/// Actions
export const incrementMove = (id: number[]): IncrementMoveAction => {
  console.log(id);
  id.map(item => typeof item === 'string' && parseInt(item));
  return {
    type: ActionTypes.incrementMove,
    payload: id
  };
};

export const nextPlayer = (): NextPlayerAction => {
  return {
    type: ActionTypes.nextPlayer
  };
};

export const setGameMessage = (message: string): SetGameMessageAction => {
  return {
    type: ActionTypes.setGameMessage,
    payload: message
  };
};

export const rollTheDice = (): RollTheDiceAction => {
  const roll = Math.floor(Math.random() * 6 + 1);
  return {
    type: ActionTypes.rollTheDice,
    payload: roll
  };
};

export const newRound = (): NewRoundAction => {
  return {
    type: ActionTypes.newRound
  };
};

export const grantMoveAccess = (id: number): GrantMoveAccessAction => {
  return {
    type: ActionTypes.grantMoveAccess,
    payload: id
  };
};
