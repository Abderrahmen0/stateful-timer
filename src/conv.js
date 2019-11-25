import React from "react";

class Conv extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: false,
      sc: 0,
      mn: 0,
      h: 0,
      ms: 0
    };
    setInterval(() => {
      if (this.state.start) {
        this.setState({
          ms: this.state.ms + 1000,
          h: parseInt(this.state.ms / (1000 * 3600)),
          mn: parseInt(((this.state.ms / 1000) % 3600) / 60),
          sc: parseInt(((this.state.ms / 1000) % 3600) % 60)
        });

        // this.state.h=00
        // this.state.sc=00
        // this.state.mn=00
      }
    }, 1000);
  }
  start = () => this.setState({ start: !this.state.start });
  resetFunction = () => this.setState({ sc: 0, mn: 0, h: 0, ms: 0 ,start:false});
  render() {
    return (
      <div className=" timeapp ">
        <div className="number">
          <span className="hour">H:{this.state.h}</span>
          <span className="minutes"> mn:{this.state.mn}</span>
          <span className="seconds"> sc:{this.state.sc}</span>
        </div>

        <div>
          <button className="btn btn-success " onClick={this.start}>
            {" "}
            {this.state.start ? "Pause" : "Start"}
          </button>
          <button className="btn btn-danger" onClick={this.resetFunction}>
            Stop
          </button>
          {/* <button className="btn btn-warning" >
            Reset
          </button> */}
        </div>
      </div>
    );
  }
}
export default Conv;
