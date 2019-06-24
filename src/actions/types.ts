import {
  IncrementMoveAction,
  NextPlayerAction,
  SetGameMessageAction,
  RollTheDiceAction,
  NewRoundAction,
  GrantMoveAccessAction
} from './actions';

export enum ActionTypes {
  incrementMove,
  nextPlayer,
  setGameMessage,
  rollTheDice,
  newRound,
  grantMoveAccess
}

export type Action =
  | IncrementMoveAction
  | NextPlayerAction
  | NewRoundAction
  | SetGameMessageAction
  | RollTheDiceAction
  | GrantMoveAccessAction;
