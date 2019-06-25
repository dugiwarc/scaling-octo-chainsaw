import React, { Fragment } from 'react';
import { pawn, player } from '../styles';

class PlayerBoard extends React.Component {
  render() {
    return (
      <Fragment>
        <div style={player}>
          <div style={pawn} />
          <div style={pawn} />
          <div style={pawn} />
          <div style={pawn} />
        </div>
      </Fragment>
    );
  }
}

export default PlayerBoard;
