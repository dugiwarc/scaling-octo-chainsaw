import React, { Fragment } from 'react';

interface AppProps {
  text: string;
}

interface AppState {
  isActive: boolean;
}

class HorizontalTile extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { isActive: false };
  }
  render() {
    const { text } = this.props;

    return (
      <Fragment>
        <div>{text}</div>
      </Fragment>
    );
  }
}

export default HorizontalTile;
