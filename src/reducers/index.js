import { combineReducers } from 'redux';

const SongsReducer = (songList, action) => {
    return [
        { title: "Don't Know Why", duration: '3:06' },
        { title: "Night Moves", duration: '5:24' },
        { title: "Moonage Daydream", duration: '3:52' },
        { title: "Life During Wartime", duration: '3:41' },
    ]
};

const SelectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: SongsReducer,
    selectedSong: SelectedSongReducer
});
