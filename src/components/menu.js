import React from "react";
import { connect } from "react-redux";

const Menu = (props) => {
  return (
    <div>
      <div className={props.menu ? "menu open" : "menu"}>
        <div className='album-cover'></div>
        <div className='menu-song-title'>{props.current.title}</div>
        <div className='menu-author'>KANYE WEST</div>
        <div className='menu-dots'>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className='add-to-playlist'>
          <a href='/*'>Add to playlist</a>
        </div>
        <div className='show-album'>
          <a href='/*'>Show album</a>
        </div>
        <div className='share'>
          <a href='/*'>Share with friends</a>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  menu: state.songs.sideMenu,
  current: state.songs.currentSong,
});

export default connect(mapStateToProps)(Menu);
