import * as types from '../actions/types';
import { Map, List, fromJS } from 'immutable';

const INITIAL_STATE = Map({
  currentVideo: Map(),
  videoList: List(),
  loading: false,
});

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.UPDATE_VIDEOS_LIST:
      return state
        .set('videoList', fromJS(action.payload.videoList))
        .set('loading', false);
    case types.UPDATE_VIDEOS_CURRENT:
      return state
        .set('currentVideo', fromJS(action.payload.currentVideo))
        .set('loading', false);
    case types.UPDATE_VIDEOS_FAIL:
      return state
        .set('videoList', List())
        .set('loading', false);
    case types.UPDATE_VIDEOS_LOADING:
      return state
      .set('loading', true);
    default:
      return state;
  }
}
