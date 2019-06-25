// export interface Pawn {
//   pawnID: number;
//   isSafe: boolean;
//   moves: number;
// }

// export interface Player {
//   userID: number;
//   pawns: Pawn[];
//   isActive: boolean;
// }

export interface GameState {
  currentActivePlayer: number;
  currentActivePawn?: number;
  currentDiceRoll: number;
  roundsPlayed: number;
  gameMessage: string;
}
