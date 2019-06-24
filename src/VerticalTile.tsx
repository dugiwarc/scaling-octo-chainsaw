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

    const verticalTiles: {} = {
      width: '20%',
      height: '100%',
      backgroundColor: 'green',
      display: 'flex',
      flexDirection: 'column'
    };
    const cell: {} = {
      border: 'solid white 1px',
      height: '100%',
      width: '100%'
    };
    const column: {} = {
      display: 'flex',
      width: '100%',
      height: '17%'
    };
    return (
      num && (
        <Fragment>
          <div style={verticalTiles}>
            <div style={column}>
              <div key={num + 1} id={(num + 1).toString()} style={cell} />
              <div key={num + 2} id={(num + 2).toString()} style={cell} />
              <div key={num + 3} id={(num + 3).toString()} style={cell} />
            </div>
            <div style={column}>
              <div key={num + 4} id={(num + 4).toString()} style={cell} />
              <div key={num + 5} id={(num + 5).toString()} style={cell} />
              <div key={num + 6} id={(num + 6).toString()} style={cell} />
            </div>
            <div style={column}>
              <div key={num + 7} id={(num + 7).toString()} style={cell} />
              <div key={num + 8} id={(num + 8).toString()} style={cell} />
              <div key={num + 9} id={(num + 9).toString()} style={cell} />
            </div>
            <div style={column}>
              <div key={num + 10} id={(num + 10).toString()} style={cell} />
              <div key={num + 11} id={(num + 11).toString()} style={cell} />
              <div key={num + 12} id={(num + 12).toString()} style={cell} />
            </div>
            <div style={column}>
              <div key={num + 13} id={(num + 13).toString()} style={cell} />
              <div key={num + 14} id={(num + 14).toString()} style={cell} />
              <div key={num + 15} id={(num + 15).toString()} style={cell} />
            </div>
            <div style={column}>
              <div key={num + 16} id={(num + 16).toString()} style={cell} />
              <div key={num + 17} id={(num + 17).toString()} style={cell} />
              <div key={num + 18} id={(num + 18).toString()} style={cell} />
            </div>
          </div>
        </Fragment>
      )
    );
  }
}

export default HorizontalTile;
