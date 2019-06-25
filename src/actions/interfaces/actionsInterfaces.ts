import { ActionTypes } from '../types';

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
