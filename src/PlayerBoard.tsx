import React, { Fragment } from 'react';

interface AppProps {
  props?: any;
  num?: number;
  isSelectable?: boolean;
  updatePawn: Function;
  updateSteps: number;
  executeMoves: boolean;
  setLocalGameMessage: Function;
  setLocalInitiation: Function;
  setLocalHasMoved: Function;
}

interface AppState {
  fetching: boolean;
  borderProp: string;
  pawn_1: number;
  pawn_1_position: number[];
  pawn_2: number;
  pawn_2_position: number[];
  pawn_3: number;
  pawn_3_position: number[];
  pawn_4: number;
  pawn_4_position: number[];
  pawn_5: number;
  pawn_5_position: number[];
  pawn_6: number;
  pawn_6_position: number[];
  pawn_7: number;
  pawn_7_position: number[];
  pawn_8: number;
  pawn_8_position: number[];
  pawn_9: number;
  pawn_9_position: number[];
  pawn_10: number;
  pawn_10_position: number[];
  pawn_11: number;
  pawn_11_position: number[];
  pawn_12: number;
  pawn_12_position: number[];
  pawn_13: number;
  pawn_13_position: number[];
  pawn_14: number;
  pawn_14_position: number[];
  pawn_15: number;
  pawn_15_position: number[];
  pawn_16: number;
  pawn_16_position: number[];
  execute: boolean;
  currentPawnIndex: number;
  stepsToTake: number;
  runOnlyOnce: boolean;
}

class HorizontalTile extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      fetching: false,
      execute: false,
      borderProp: '1px solid green',
      stepsToTake: 0,
      currentPawnIndex: 0,
      pawn_1: 3,
      pawn_1_position: [115, 100],
      pawn_2: 5,
      pawn_2_position: [115, 75],
      pawn_3: 0,
      pawn_3_position: [115, 50],
      pawn_4: 4,
      pawn_4_position: [115, 25],
      pawn_5: 0,
      pawn_5_position: [],
      pawn_6: 0,
      pawn_6_position: [],
      pawn_7: 0,
      pawn_7_position: [],
      pawn_8: 0,
      pawn_8_position: [],
      pawn_9: 0,
      pawn_9_position: [],
      pawn_10: 0,
      pawn_10_position: [],
      pawn_11: 0,
      pawn_11_position: [],
      pawn_12: 0,
      pawn_12_position: [],
      pawn_13: 0,
      pawn_13_position: [],
      pawn_14: 0,
      pawn_14_position: [],
      pawn_15: 0,
      pawn_15_position: [],
      pawn_16: 0,
      pawn_16_position: [],
      runOnlyOnce: true
    };
  }

  componentDidUpdate() {
    this.updatePosition();
  }
  updatePosition = (): void => {
    if (
      this.props.executeMoves &&
      this.state.currentPawnIndex &&
      this.state.runOnlyOnce
    ) {
      // let doc = document.querySelector("[data-index='1']");
      console.log(
        `Will make ${this.props.updateSteps}steps with pawnID ${
          this.state.currentPawnIndex
        }`
      );
      switch (this.state.currentPawnIndex) {
        case 3:
          this.setState({
            pawn_3_position: [140, 25 - (this.props.updateSteps - 1) * 25],
            runOnlyOnce: false
          });
        // console.log(doc);
      }
    }
  };
  render() {
    const { num, isSelectable, updatePawn } = this.props;
    const handlePawnClick: any = (evt: any): void => {
      if (isSelectable) {
        console.log('Curent Pawn Index', this.state.currentPawnIndex);
        for (let i = 0; i < 4; i++) {
          evt.target.parentNode.children[i].style.border = '1px solid black';
        }
        if (
          parseInt(evt.target.dataset.index) === this.state.currentPawnIndex
        ) {
          switch (parseInt(evt.target.dataset.index)) {
            case 1:
              evt.target.style.transform = `translate(${
                this.state.pawn_1_position[0]
              }px,${this.state.pawn_1_position[1]}px)`;
              break;
            case 2:
              evt.target.style.transform = `translate(${
                this.state.pawn_2_position[0]
              }px,${this.state.pawn_2_position[1]}px)`;
              break;
            case 3:
              evt.target.style.transform = `translate(${
                this.state.pawn_3_position[0]
              }px,${this.state.pawn_3_position[1]}px)`;
              this.props.setLocalInitiation(true);
              if (
                this.state.pawn_3_position[0] !== 115 &&
                this.state.pawn_3_position[1] !== 50
              ) {
                this.props.setLocalHasMoved(true);
              }
              break;
            case 4:
              evt.target.style.transform = `translate(${
                this.state.pawn_4_position[0]
              }px,${this.state.pawn_4_position[1]}px)`;
              break;
            case 5:
              evt.target.style.transform = `translate(${
                this.state.pawn_5_position[0]
              }px,${this.state.pawn_5_position[1]}px)`;
              break;
            case 6:
              evt.target.style.transform = `translate(${
                this.state.pawn_6_position[0]
              }px,${this.state.pawn_6_position[1]}px)`;
              break;
            case 7:
              evt.target.style.transform = `translate(${
                this.state.pawn_7_position[0]
              }px,${this.state.pawn_7_position[1]}px)`;
              break;
            case 8:
              evt.target.style.transform = `translate(${
                this.state.pawn_8_position[0]
              }px,${this.state.pawn_8_position[1]}px)`;
              break;

            case 9:
              evt.target.style.transform = `translate(${
                this.state.pawn_9_position[0]
              }px,${this.state.pawn_9_position[1]}px)`;
              break;
            case 10:
              evt.target.style.transform = `translate(${
                this.state.pawn_10_position[0]
              }px,${this.state.pawn_10_position[1]}px)`;
              break;
            case 11:
              evt.target.style.transform = `translate(${
                this.state.pawn_11_position[0]
              }px,${this.state.pawn_11_position[1]}px)`;
              break;
            case 12:
              evt.target.style.transform = `translate(${
                this.state.pawn_12_position[0]
              }px,${this.state.pawn_12_position[1]}px)`;
              break;
            case 13:
              evt.target.style.transform = `translate(${
                this.state.pawn_13_position[0]
              }px,${this.state.pawn_13_position[1]}px)`;
              break;
            case 14:
              evt.target.style.transform = `translate(${
                this.state.pawn_14_position[0]
              }px,${this.state.pawn_14_position[1]}px)`;
              break;
            case 15:
              evt.target.style.transform = `translate(${
                this.state.pawn_15_position[0]
              }px,${this.state.pawn_15_position[1]}px)`;
              break;
            case 16:
              evt.target.style.transform = `translate(${
                this.state.pawn_16_position[0]
              }px,${this.state.pawn_16_position[1]}px)`;
              break;
            default:
              break;
          }
        }
        console.log('Pawn action');
        this.props.setLocalGameMessage('Select again to confirm');
        if (evt.target.style.border === '1px solid green') {
          evt.target.style.border = '1px solid black';
        } else {
          evt.target.style.border = '1px solid green';
        }
        const output = [
          parseInt(evt.target.id),
          parseInt(evt.target.dataset.index)
        ];
        updatePawn(output);
        this.setState({
          currentPawnIndex: parseInt(evt.target.dataset.index)
        });
      }
    };
    const pawn: {} = {
      height: '20px',
      color: 'white',
      width: '20px',
      margin: '1px',
      borderRadius: '15px',
      border: '1px solid black',
      transition: '.3s ease-in-out',
      backgroundColor: isSelectable ? 'salmon' : 'black'
    };
    const player: {} = {
      width: '40%',
      height: '100%',
      backgroundColor: 'gray'
    };
    return (
      num && (
        <Fragment>
          <div style={player}>
            <div
              style={pawn}
              id='0'
              data-index={`${num + 0}`}
              onClick={evt => handlePawnClick(evt)}
            >{`${num + 0}`}</div>
            <div
              style={pawn}
              id='1'
              data-index={`${num + 1}`}
              onClick={evt => handlePawnClick(evt)}
            >{`${num + 1}`}</div>
            <div
              style={pawn}
              id='2'
              data-index={`${num + 2}`}
              onClick={evt => handlePawnClick(evt)}
            >{`${num + 2}`}</div>
            <div
              style={pawn}
              id='3'
              data-index={`${num + 3}`}
              onClick={evt => handlePawnClick(evt)}
            >{`${num + 3}`}</div>
          </div>
        </Fragment>
      )
    );
  }
}

export default HorizontalTile;
