import React from "react";
import { connect } from "react-redux";
import {
  playSong,
  toggleShuffle,
  toggleLoop,
  pause,
  togglePrevSong,
  toggleNextSong,
} from "../actions/songs";

class Buttons extends React.Component {
  playToggle = () => {
    this.props.play && this.props.pause();
  };

  nextSong = () => {
    this.props.toggleNextSong(true);
  };

  previousSong = () => {
    this.props.togglePrevSong(true);
  };

  shuffle = () => {
    this.props.toggleShuffle();
  };

  loop = () => {
    this.props.toggleLoop();
  };

  render() {
    return (
      <div className='buttons'>
        <div className='shuffle shuffle-active' onClick={this.shuffle}>
          <svg
            version='1.1'
            id='Layer_1'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            x='0px'
            y='0px'
            viewBox='0 0 26 26'
            xmlSpace='preserve'
          >
            <style type='text/css'></style>
            <path
              id='shuffle_ico'
              className='st0'
              style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                fill: this.props.shuffle ? "#9da3f2" : "#6F729C",
              }}
              d='M21.2,26c-0.2,0-0.3-0.1-0.3-0.3V23l-0.4,0c-4.1-0.2-7.7-2.9-9-6.9l-1.9-5.7
            C8.5,7.3,5.5,5.1,2.1,5.1h-1C0.5,5.1,0,4.7,0,4.1C-0.1,3.5,0.4,3,1,3c0,0,0,0,0.1,0h1c4.3,0,8.1,2.8,9.5,6.9l1.9,5.7
            c1,3,3.8,5.2,7,5.4l0.5,0v-2.7c0-0.2,0.1-0.3,0.3-0.3l0,0c0.1,0,0.2,0,0.2,0.1l4.2,3.5l0.2,0.2C26,21.8,26,21.9,26,22
            c0,0.1,0,0.2-0.1,0.2l-4.5,3.7C21.4,25.9,21.3,26,21.2,26z M21.2,8.1c-0.2,0-0.3-0.1-0.3-0.3V5.1l-0.5,0c-1.7,0.1-3.4,0.8-4.7,2
            c-0.2,0.2-0.4,0.3-0.7,0.3l0,0c-0.3,0-0.6-0.1-0.8-0.4c-0.4-0.4-0.3-1.1,0.1-1.5c0,0,0,0,0,0C16,4,18.2,3.1,20.5,3l0.4,0V0.3
            C20.9,0.2,21,0,21.2,0c0.1,0,0.2,0,0.3,0.1l4.5,3.8C26,4,26,4.2,25.9,4.3L21.4,8C21.4,8.1,21.3,8.1,21.2,8.1L21.2,8.1z M1.1,23
            C0.5,23,0,22.5,0,21.9c0-0.6,0.5-1.1,1.1-1.1c0,0,0,0,0,0h1c1.8,0,3.5-0.6,4.9-1.7l0.1,0c0.5-0.3,1.1-0.3,1.5,0.2
            c0.4,0.4,0.3,1.1-0.1,1.5c0,0,0,0,0,0c-1.8,1.4-4,2.2-6.3,2.2H1.1z'
            />
          </svg>
        </div>
        <div className='previous' onClick={this.previousSong}>
          <svg
            version='1.1'
            id='Layer_1'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            x='0px'
            y='0px'
            viewBox='0 0 30 26'
            xmlSpace='preserve'
          >
            <style type='text/css'></style>
            <path
              id='previous_ico'
              className='st0'
              style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                fill: "#6F729C",
              }}
              d='M25.1,0C27.8,0,30,2.2,30,4.9v16.2c0,2.7-2.1,4.9-4.8,4.9c-0.9,0-1.8-0.3-2.6-0.7L15,20.5
                c-0.5-0.3-0.7-1.1-0.4-1.6c0.2-0.3,0.6-0.5,1-0.5c0.2,0,0.4,0.1,0.6,0.2l7.5,4.7c1.2,0.7,2.8,0.4,3.5-0.8c0.3-0.4,0.4-0.9,0.4-1.4
                V4.9c0-1.4-1.1-2.5-2.5-2.6c-0.5,0-1,0.1-1.4,0.4l-12.9,8.1c-1.2,0.8-1.6,2.3-0.8,3.5c0.2,0.3,0.5,0.6,0.8,0.8
                c0.5,0.3,0.7,1.1,0.4,1.6c-0.3,0.5-1,0.7-1.6,0.4c0,0,0,0,0,0c-2.3-1.4-3-4.5-1.5-6.8C8.5,9.8,9,9.2,9.6,8.8l12.9-8.1
                C23.3,0.3,24.2,0,25.1,0z M1.3,0c0.7,0,1.3,0.6,1.3,1.3l0,0v23.3c0,0.7-0.6,1.3-1.3,1.3S0,25.4,0,24.7V1.3C0,0.6,0.6,0,1.3,0L1.3,0z
                '
            />
          </svg>
        </div>

        <div
          className={
            this.props.pauseToggle || !this.props.current.time
              ? "play"
              : "play-active"
          }
          onClick={this.playToggle}
        ></div>

        <div className='next' onClick={this.nextSong}>
          <svg
            version='1.1'
            id='Layer_1'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            x='0px'
            y='0px'
            viewBox='0 0 30 26'
            xmlSpace='preserve'
          >
            <style type='text/css'></style>
            <path
              id='next_ico'
              className='st0'
              style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                fill: "#6F729C",
              }}
              d='M4.9,0C2.2,0,0,2.2,0,4.9v16.2C0,23.8,2.1,26,4.8,26c0.9,0,1.8-0.3,2.6-0.7l7.5-4.7
              c0.5-0.3,0.7-1.1,0.4-1.6c-0.2-0.3-0.6-0.5-1-0.5c-0.2,0-0.4,0.1-0.6,0.2l-7.5,4.7C5,24,3.5,23.6,2.7,22.5c-0.3-0.4-0.4-0.9-0.4-1.4
              V4.9c0-1.4,1.1-2.5,2.5-2.6c0.5,0,1,0.1,1.4,0.4l12.9,8.1c1.2,0.8,1.6,2.3,0.8,3.5c-0.2,0.3-0.5,0.6-0.8,0.8
              c-0.5,0.3-0.7,1.1-0.4,1.6c0.3,0.5,1,0.7,1.6,0.4c0,0,0,0,0,0c2.3-1.4,3-4.5,1.5-6.8c-0.4-0.6-0.9-1.2-1.5-1.5L7.4,0.7
              C6.7,0.3,5.8,0,4.9,0z M28.7,0C29.4,0,30,0.6,30,1.3v23.3c0,0.7-0.6,1.3-1.3,1.3s-1.3-0.6-1.3-1.3V1.3C27.3,0.6,27.9,0,28.7,0
              L28.7,0L28.7,0z'
            />
          </svg>
        </div>
        <div className='loop' onClick={this.loop}>
          <svg
            version='1.1'
            id='Layer_1'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            x='0px'
            y='0px'
            viewBox='0 0 26 26'
            xmlSpace='preserve'
          >
            <style type='text/css'></style>
            <path
              id='repeat_ico'
              className='st0'
              style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                fill: this.props.loop ? "#9da3f2" : "#6F729C",
              }}
              d='M1.1,15.6c-0.6,0-1.1-0.5-1.1-1.1v-3C0,6.8,3.8,3,8.5,3h12.3V0.3C20.9,0.1,21,0,21.2,0
              c0.1,0,0.1,0,0.2,0.1l4.5,3.8C26,4,26,4.2,25.9,4.3L21.4,8c-0.1,0.1-0.1,0.1-0.2,0.1c-0.2,0-0.3-0.1-0.3-0.3V5.1H8.5
              C5,5.1,2.1,8,2.1,11.5v3C2.1,15.1,1.6,15.6,1.1,15.6z M4.8,26c-0.1,0-0.1,0-0.2-0.1l-4.5-3.8C0.1,22.1,0,22,0,21.9
              c0-0.1,0-0.2,0.1-0.2L4.6,18c0.1-0.1,0.3-0.1,0.4,0c0.1,0.1,0.1,0.1,0.1,0.2v2.7h12.4c3.5,0,6.4-2.9,6.4-6.4v-3
              c0-0.6,0.5-1.1,1.1-1.1c0.6,0,1.1,0.5,1.1,1.1l0,0v3c0,4.7-3.8,8.5-8.5,8.5H5.1v2.7C5.1,25.8,5,26,4.8,26z'
            />
          </svg>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  songsList: state.songs.songs,
  current: state.songs.currentSong,
  shuffle: state.songs.shuffle,
  loop: state.songs.loop,
  pauseState: state.songs.pause,
  play: state.songs.play,
  progres: state.songs.progres,
  playlist: state.songs.playlist,

  clear: state.songs.clear,
  pauseToggle: state.songs.pause,
});

export default connect(mapStateToProps, {
  playSong,
  toggleShuffle,
  toggleLoop,
  pause,
  togglePrevSong,
  toggleNextSong,
})(Buttons);
