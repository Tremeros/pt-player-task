import React from "react";
import { connect } from "react-redux";

class Progress extends React.Component {
  render() {
    return (
      <div className='progres'>
        <div className='progres-time-left'>{this.props.current.time}</div>
        <div className='progres-lines'>
          <div className='line'></div>

          <div
            className='progres-line'
            style={{ width: `${this.props.progres}vw` }}
            // style={{ width: "30vw" }}
          ></div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  progres: state.songs.progres,
  current: state.songs.currentSong,
});

export default connect(mapStateToProps)(Progress);
