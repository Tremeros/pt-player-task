import React from "react";
import { connect } from "react-redux";

const Song = ({
  playedSong: { id, title, time },
  albumsList,
  album,
  sliderPrev,
}) => {
  return (
    <div className='song'>
      <div className='song__image'></div>
      <div className='song__title'>{title}</div>
      <div className='song__author'>KANYE WEST</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  playedSong: state.songs.currentSong,
});

export default connect(mapStateToProps)(Song);
