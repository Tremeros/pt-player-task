import {
  PLAY_SONG,
  UPDATE_PROGRES,
  SHUFFLE,
  LOOP,
  START_INTERVAL,
  STOP_INTERVAL,
  PAUSE,
  TOGGLE_PREVSONG,
  TOGGLE_NEXTSONG,
  CHOOSE_SONG,
  SLIDER_PREV,
} from "./types";

export const playSong = (payload) => ({ type: PLAY_SONG, payload });

export const updateProgres = (payload) => ({ type: UPDATE_PROGRES, payload });
export const startInterval = () => ({ type: START_INTERVAL });
export const stopInterval = () => ({ type: STOP_INTERVAL });

export const toggleShuffle = () => ({ type: SHUFFLE });
export const toggleLoop = () => ({ type: LOOP });

export const pause = () => ({ type: PAUSE });

export const togglePrevSong = (payload) => ({ type: TOGGLE_PREVSONG, payload });
export const toggleNextSong = (payload) => ({ type: TOGGLE_NEXTSONG, payload });
export const chooseSong = (payload) => ({ type: CHOOSE_SONG, payload });

export const sliderPrev = () => ({ type: SLIDER_PREV });
