import React from "react";
import { connect } from "react-redux";
import {
  playSong,
  updateProgres,
  togglePrevSong,
  toggleNextSong,
  chooseSong,
} from "../actions/songs";
import { togglePlaylist } from "../actions/menu";

class Playlist extends React.Component {
  state = { pagin: 0 };

  hide = () => {
    this.props.togglePlaylist();
  };

  play = async (e, id) => {
    for (let i = 0; i < 100; i++) {
      window.clearInterval(i);
    }
    this.props.chooseSong(false);
    this.props.toggleNextSong(false);
    this.props.togglePrevSong(false);

    await this.props.playSong(id);

    let interval = 60 / (this.props.current.time * 600);
    let intervalId = setInterval(() => {
      if (!this.props.pause) {
        this.props.updateProgres(interval);
        console.log(intervalId);

        if (this.props.nextSong) {
          if (this.props.current.id !== this.props.songsList.length - 1) {
            clearInterval(intervalId);
            this.play(e, this.props.current.id + 1);
          }
        }

        if (this.props.prevSong) {
          if (this.props.current.id !== 0) {
            clearInterval(intervalId);
            this.play(e, this.props.current.id - 1);
          }
        }

        if (this.props.progres >= 60) {
          clearInterval(intervalId);
          updateProgres(0);

          if (this.props.loop) {
            this.play(e, this.props.current.id);
          } else if (this.props.shuffle) {
            this.play(
              e,
              Math.floor(Math.random() * (this.props.songsList.length - 1))
            );
          } else {
            this.play(
              e,
              this.props.current.id === this.props.songsList.length - 1
                ? 0
                : this.props.current.id + 1
            );
          }
        }
      }
    }, 100);
  };

  paginUp = () => {
    this.state.pagin > 0 && this.setState({ pagin: this.state.pagin - 1 });
  };

  paginDown = () => {
    this.state.pagin < this.props.songsList.length - 7 &&
      this.setState({ pagin: this.state.pagin + 1 });
  };

  render() {
    let list = this.props.songsList.slice(
      this.state.pagin,
      this.state.pagin + 7
    );
    return (
      <div
        className={this.props.playlist ? "playlist  playlist-open" : "playlist"}
      >
        <ol>
          {list.map((song, index) => (
            <li
              key={index}
              id={song.id}
              onClick={(e) => this.play(e, e.target.id)}
            >
              <span id={song.id} onClick={(e) => this.play(e, e.target.id)}>
                {song.id + 1 + ". "}
                {song.title}
              </span>
              <span id={song.id} onClick={(e) => this.play(e, e.target.id)}>
                {song.time}
              </span>
            </li>
          ))}
        </ol>
        <button
          className='btn-shuffle'
          onClick={(e) =>
            this.play(
              e,
              Math.floor(Math.random() * (this.props.songsList.length - 1))
            )
          }
        >
          SHUFFLE PLAY
        </button>
        <div className='hide-menu' onClick={this.hide}>
          <svg
            version='1.1'
            id='Layer_1'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            x='0px'
            y='0px'
            viewBox='0 0 29.3 16.2'
            xmlSpace='preserve'
          >
            <style type='text/css'></style>
            <path
              class='st0'
              style={{ fill: "#755DD5" }}
              d='M26.6,0.5l-12,12l-12-12C2-0.1,1-0.1,0.4,0.5s-0.6,1.6,0,2.2l13.1,13.1c0.6,0.6,1.6,0.6,2.2,0L28.8,2.7
              c0.6-0.6,0.6-1.6,0-2.2C28.2-0.2,27.2-0.2,26.6,0.5z'
            />
          </svg>
        </div>
        <div className='pagin-buttons'>
          <div className='pagin-up' onClick={this.paginUp}>
            <svg
              version='1.1'
              id='Layer_1'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              x='0px'
              y='0px'
              viewBox='0 0 29.3 16.2'
              xmlSpace='preserve'
            >
              <style type='text/css'></style>
              <path
                class='st0'
                style={{ fill: "#755DD5" }}
                d='M26.6,0.5l-12,12l-12-12C2-0.1,1-0.1,0.4,0.5s-0.6,1.6,0,2.2l13.1,13.1c0.6,0.6,1.6,0.6,2.2,0L28.8,2.7
              c0.6-0.6,0.6-1.6,0-2.2C28.2-0.2,27.2-0.2,26.6,0.5z'
              />
            </svg>
          </div>
          <div className='pagin-down' onClick={this.paginDown}>
            <svg
              version='1.1'
              id='Layer_1'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              x='0px'
              y='0px'
              viewBox='0 0 29.3 16.2'
              xmlSpace='preserve'
            >
              <style type='text/css'></style>
              <path
                class='st0'
                style={{ fill: "#755DD5" }}
                d='M26.6,0.5l-12,12l-12-12C2-0.1,1-0.1,0.4,0.5s-0.6,1.6,0,2.2l13.1,13.1c0.6,0.6,1.6,0.6,2.2,0L28.8,2.7
              c0.6-0.6,0.6-1.6,0-2.2C28.2-0.2,27.2-0.2,26.6,0.5z'
              />
            </svg>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  songsList: state.songs.songs,
  current: state.songs.currentSong,
  progres: state.songs.progres,
  playlist: state.songs.playlist,
  shuffle: state.songs.shuffle,
  loop: state.songs.loop,

  pause: state.songs.pause,
  prevSong: state.songs.prevSong,
  nextSong: state.songs.nextSong,
});

export default connect(mapStateToProps, {
  playSong,
  updateProgres,
  togglePlaylist,
  togglePrevSong,
  toggleNextSong,
  chooseSong,
})(Playlist);
