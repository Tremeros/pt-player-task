import {
  PLAY_SONG,
  TOGGLE_MENU,
  TOGGLE_PLAYLIST,
  UPDATE_PROGRES,
  SHUFFLE,
  LOOP,
  START_INTERVAL,
  STOP_INTERVAL,
  STOP_SONG,
  PAUSE,
  TOGGLE_PREVSONG,
  TOGGLE_NEXTSONG,
  CHOOSE_SONG,
} from "../actions";

const initialState = {
  currentAlbum: {},
  currentSong: {},
  play: false,
  progres: 0,
  author: "KANYE WEST",
  album: "Unreleased",
  songs: [
    { id: 0, title: "Livin in a movie", time: 3.27 },
    { id: 1, title: "Dark fantasy", time: 5.12 },
    { id: 2, title: "All of the lights", time: 2.54 },
    { id: 3, title: "So appaled", time: 3.51 },
    { id: 4, title: "Devil In A New Dress", time: 4.51 },
    { id: 5, title: "Runnaway", time: 3.46 },
    { id: 6, title: "Hell Of A Live", time: 3.09 },
    { id: 7, title: "Blame Game", time: 7.02 },
    { id: 8, title: "Lost In The World", time: 3.37 },
  ],
  shuffle: false,
  loop: false,
  sideMenu: false,
  playlist: false,
  clear: false,
  pause: false,
  nextSong: false,
  prevSong: false,
  chooseSong: false,
};

export const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAY_SONG:
      return {
        ...state,
        currentSong: state.songs[action.payload],
        playlist: false,
        play: true,
        progres: 0,
      };
    case STOP_SONG:
      return { ...state, currentSong: {} };

    case UPDATE_PROGRES:
      return { ...state, progres: state.progres + action.payload };

    case TOGGLE_MENU:
      return { ...state, sideMenu: !state.sideMenu };

    case TOGGLE_PLAYLIST:
      return { ...state, playlist: !state.playlist };

    case SHUFFLE:
      return { ...state, shuffle: !state.shuffle, loop: false };

    case LOOP:
      return { ...state, loop: !state.loop, shuffle: false };
    case START_INTERVAL:
      return { ...state, clear: false };
    case STOP_INTERVAL:
      return { ...state, clear: true, progres: 0 };
    case PAUSE:
      return { ...state, pause: !state.pause };
    case TOGGLE_PREVSONG:
      return { ...state, prevSong: action.payload };
    case TOGGLE_NEXTSONG:
      return { ...state, nextSong: action.payload };
    case CHOOSE_SONG:
      return { ...state, chooseSong: action.payload };

    default:
      return state;
  }
};
