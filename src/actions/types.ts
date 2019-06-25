import {
  IncrementMoveAction,
  NextPlayerAction,
  SetGameMessageAction,
  RollTheDiceAction,
  NewRoundAction,
  GrantMoveAccessAction
} from './interfaces/actionsInterfaces';

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
