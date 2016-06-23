import { checkHttpStatus } from '../utils';
import * as types from './types';
import * as config from './config';
import axios from 'axios';
import { sortBy } from 'lodash';

export function updateVideosLoading() {
  return {
    type: types.UPDATE_VIDEOS_LOADING,
  };
}

export function updateVideosFail() {
  return {
    type: types.UPDATE_VIDEOS_FAIL,
  };
}

export function updateVideoList(videoList) {
  return {
    type: types.UPDATE_VIDEOS_LIST,
    payload: {
      videoList,
    },
  };
}

export function updateCurrentVideo(currentVideo) {
  return {
    type: types.UPDATE_VIDEOS_CURRENT,
    payload: {
      currentVideo,
    },
  };
}

export function updateSearchQuery(searchQuery) {
  return function (dispatch) {
    dispatch(updateVideosLoading());
    axios.get(
      `${config.YOUTUBE_ROOT_URL}&maxResults=${config.MAX_RESULTS}&key=${config.YOUTUBE_API_KEY}&q=${searchQuery}`
    )
    .then(checkHttpStatus)
    .then(response => {
      if (response.data.items.length > 0) {
        const sortedList = sortBy(response.data.items, (item) =>
          item.snippet.title.toLowerCase()
        );
        dispatch(updateVideoList(sortedList));
        dispatch(updateCurrentVideo(sortedList[0]));
      } else {
        dispatch(updateVideosFail());
      }
    })
    .catch(error =>
      dispatch(updateVideosFail(error))
    );
  };
}
