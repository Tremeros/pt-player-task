import React from "react";
import Playlist from "./playlist";
import { connect } from "react-redux";
import { togglePlaylist } from "../actions/menu";

class Footer extends React.Component {
  showPlaylist = () => {
    this.props.togglePlaylist();
  };

  render() {
    return (
      <div className='footer'>
        <Playlist />
        <div className='footer-menu' onClick={this.showPlaylist}>
          <svg
            version='1.1'
            id='Layer_1'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            x='0px'
            y='0px'
            viewBox='0 0 36 26'
            xmlSpace='preserve'
          >
            <style type='text/css'></style>
            <path
              id='playlist_ico'
              className='st0'
              style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                fill: "#6F729C",
              }}
              d='M11.1,26c-0.9,0-1.7-0.7-1.7-1.7c0-0.9,0.7-1.7,1.7-1.7c0,0,0,0,0,0h23.2
            c0.9,0,1.7,0.7,1.7,1.7c0,0.9-0.7,1.7-1.7,1.7c0,0,0,0,0,0H11.1z M11.1,14.7c-0.9,0-1.7-0.7-1.7-1.7c0-0.9,0.7-1.7,1.7-1.7
            c0,0,0,0,0,0h23.2c0.9,0,1.7,0.7,1.7,1.7c0,0.9-0.7,1.7-1.7,1.7c0,0,0,0,0,0H11.1z M11.1,3.4c-0.9,0-1.7-0.7-1.7-1.7
            c0-0.9,0.7-1.7,1.7-1.7c0,0,0,0,0,0h23.2C35.2,0,36,0.8,36,1.7c0,0.9-0.7,1.7-1.7,1.7c0,0,0,0,0,0H11.1z M1.7,3.4
            C0.8,3.4,0,2.6,0.1,1.7S0.9,0,1.8,0c0.9,0,1.7,0.8,1.7,1.7C3.5,2.7,2.7,3.4,1.7,3.4L1.7,3.4z M1.7,14.7c-0.9,0-1.7-0.8-1.7-1.7
            c0-0.9,0.8-1.7,1.7-1.7c0.9,0,1.7,0.8,1.7,1.7C3.5,13.9,2.7,14.7,1.7,14.7C1.7,14.7,1.7,14.7,1.7,14.7L1.7,14.7z M1.7,26
            c-0.9,0-1.7-0.8-1.7-1.7s0.8-1.7,1.7-1.7c0.9,0,1.7,0.8,1.7,1.7C3.5,25.2,2.7,26,1.7,26C1.7,26,1.7,26,1.7,26L1.7,26z'
            />
          </svg>
        </div>
        <div className='footer-text'>
          <span>NEXT</span>
          <span>
            {this.props.current.id &&
              this.props.current.id !== this.props.songsList.length - 1 &&
              this.props.songsList[this.props.current.id + 1].title}
          </span>
        </div>
        <div className='footer-time'>
          {this.props.current.id &&
            this.props.current.id !== this.props.songsList.length - 1 &&
            this.props.songsList[this.props.current.id + 1].time}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  playlist: state.songs.playlist,
  songsList: state.songs.songs,
  current: state.songs.currentSong,
});
export default connect(mapStateToProps, { togglePlaylist })(Footer);
