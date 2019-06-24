import React, { Fragment } from 'react';

interface AppProps {
  props?: any;
  num?: number;
}

interface AppState {
  fetching: boolean;
}

class HorizontalTile extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { fetching: false };
  }
  render() {
    const { num } = this.props;
    const cell: {} = {
      border: 'solid white 1px',
      height: '100%',
      width: '100%'
    };
    const row: {} = {
      border: 'solid black 1px',
      width: '100%',
      height: '33%',
      display: 'flex'
    };
    const horizontalTiles: {} = {
      width: '40%',
      height: '100%',
      backgroundColor: 'green'
    };
    return (
      num && (
        <Fragment>
          <div style={horizontalTiles}>
            <div style={row}>
              <div key={num + 1} id={`${num} + 1`} style={cell} />
              <div key={num + 2} id={`${num} + 2`} style={cell} />
              <div key={num + 3} id={`${num} + 3`} style={cell} />
              <div key={num + 4} id={`${num} + 4`} style={cell} />
              <div key={num + 5} id={`${num} + 5`} style={cell} />
              <div key={num + 6} id={`${num} + 6`} style={cell} />
            </div>
            <div style={row}>
              <div key={num + 7} id={`${num} + 7`} style={cell} />
              <div key={num + 8} id={`${num} + 8`} style={cell} />
              <div key={num + 9} id={`${num} + 9`} style={cell} />
              <div key={num + 10} id={`${num} + 10`} style={cell} />
              <div key={num + 11} id={`${num} + 11`} style={cell} />
              <div key={num + 12} id={`${num} + 12`} style={cell} />
            </div>
            <div style={row}>
              <div key={num + 13} id={`${num} + 13`} style={cell} />
              <div key={num + 14} id={`${num} + 14`} style={cell} />
              <div key={num + 15} id={`${num} + 15`} style={cell} />
              <div key={num + 16} id={`${num} + 16`} style={cell} />
              <div key={num + 17} id={`${num} + 17`} style={cell} />
              <div key={num + 18} id={`${num} + 18`} style={cell} />
            </div>
          </div>
        </Fragment>
      )
    );
  }
}

export default HorizontalTile;
