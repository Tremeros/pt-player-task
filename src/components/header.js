import React from "react";
import Menu from "./menu";
import { connect } from "react-redux";
import { toggleSideMenu } from "../actions/menu";

class Header extends React.Component {
  state = { toggler: "menu" };

  toggleMenu = () => {
    this.props.toggleSideMenu();
  };

  render() {
    return (
      <div className='header'>
        <Menu toggle={this.state.toggler} />

        <div className='back'>
          <svg
            version='1.1'
            id='Layer_1'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            x='0px'
            y='0px'
            viewBox='0 0 16.2 29.3'
            xmlSpace='preserve'
          >
            <style type='text/css'></style>
            <path
              className='st0'
              style={{ fill: "#6F729C" }}
              d='M15.7,26.6l-12-12l12-12c0.6-0.6,0.6-1.6,0-2.2s-1.6-0.6-2.2,0l-13,13.1c-0.6,0.6-0.6,1.6,0,2.2l13.1,13.1
                  c0.6,0.6,1.6,0.6,2.2,0C16.3,28.2,16.3,27.2,15.7,26.6z'
            />
          </svg>
        </div>
        <div className='album'>
          <span>ALBUM</span>
          <span>UNRELEASED</span>
        </div>
        <div className='header__menu' onClick={this.toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  menu: state.songs.sideMenu,
  album: state.songs.currentAlbum,
});

export default connect(mapStateToProps, { toggleSideMenu })(Header);
