import chai, { expect } from 'chai';
import reducer from './videos';
import { Map, List, fromJS } from 'immutable';
import * as types from 'src/actions/types';

chai.use(require('chai-immutable'));

describe('Reducer: Videos', () => {
  describe('with action of undefined', () => {
    it('should return the initial state', () => {
      const INITIAL_STATE = Map({
        currentVideo: Map(),
        videoList: List(),
        loading: false,
      });
      const reducerState = reducer(undefined, {});
      expect(reducerState).to.equal(INITIAL_STATE);
    });
  });

  describe('with action of type UPDATE_VIDEOS_LIST', () => {
    it('should return the new state with the videoList', () => {
      const videoList = [{
        etag: '5g01s4-wS2b4VpScndqCYc5Y-8k/DX6sdrLi3hKmfZuMtGjBDr0GXvo',
        snippet: {
          title: 'test',
        },
      }, {
        etag: '5g01s4-wS2b4VpScndqCYc5Y-8k/DX6sdrLi3hKmfZuMtGjBDr0GXvo',
        snippet: {
          title: 'test',
        },
      }];
      const ACTION = {
        type: types.UPDATE_VIDEOS_LIST,
        payload: {
          videoList,
        },
      };
      const INITIAL_STATE = Map({
        currentVideo: Map(),
        videoList: List(),
        loading: false,
      });

      const NEW_STATE = INITIAL_STATE.set('videoList', fromJS(videoList));

      const reducerState = reducer(INITIAL_STATE, ACTION);
      expect(reducerState).to.equal(NEW_STATE);
    });

    it('should return the new list should have a length of 2', () => {
      const videoList = [{
        etag: '5g01s4-wS2b4VpScndqCYc5Y-8k/DX6sdrLi3hKmfZuMtGjBDr0GXvo',
        snippet: {
          title: 'test',
        },
      }, {
        etag: '5g01s4-wS2b4VpScndqCYc5Y-8k/DX6sdrLi3hKmfZuMtGjBDr0GXvo',
        snippet: {
          title: 'test',
        },
      }];
      const ACTION = {
        type: types.UPDATE_VIDEOS_LIST,
        payload: {
          videoList,
        },
      };
      const INITIAL_STATE = Map({
        currentVideo: Map(),
        videoList: List(),
        loading: false,
      });
      const reducerState = reducer(INITIAL_STATE, ACTION);
      expect(reducerState.get('videoList').size).to.equal(2);
    });
  });

  describe('with action of type UPDATE_VIDEOS_CURRENT', () => {
    it('should return the new state with the currentVideo', () => {
      const currentVideo = {
        etag: '5g01s4-wS2b4VpScndqCYc5Y-8k/DX6sdrLi3hKmfZuMtGjBDr0GXvo',
        snippet: {
          title: 'test',
        },
      };
      const ACTION = {
        type: types.UPDATE_VIDEOS_CURRENT,
        payload: {
          currentVideo,
        },
      };
      const INITIAL_STATE = Map({
        currentVideo: Map(),
        videoList: List(),
        loading: false,
      });

      const NEW_STATE = INITIAL_STATE.set('currentVideo', fromJS(currentVideo));

      const reducerState = reducer(INITIAL_STATE, ACTION);
      expect(reducerState).to.equal(NEW_STATE);
    });
  });

  describe('with action of type UPDATE_VIDEOS_FAIL', () => {
    it('should set videoList the in state to an empty list', () => {
      const videoList = [{
        etag: '5g01s4-wS2b4VpScndqCYc5Y-8k/DX6sdrLi3hKmfZuMtGjBDr0GXvo',
        snippet: {
          title: 'test',
        },
      }, {
        etag: '5g01s4-wS2b4VpScndqCYc5Y-8k/DX6sdrLi3hKmfZuMtGjBDr0GXvo',
        snippet: {
          title: 'test',
        },
      }];
      const ACTION = {
        type: types.UPDATE_VIDEOS_FAIL,
      };
      const INITIAL_STATE = Map({
        currentVideo: Map(videoList[0]),
        videoList: List(videoList),
        loading: true,
      });

      const NEW_STATE = INITIAL_STATE
      .set('videoList', List())
      .set('loading', false);

      const reducerState = reducer(INITIAL_STATE, ACTION);
      expect(reducerState).to.equal(NEW_STATE);
    });
  });

  describe('with action of type UPDATE_VIDEOS_LOADING', () => {
    it('should set loading in the state to true', () => {
      const ACTION = {
        type: types.UPDATE_VIDEOS_LOADING,
      };
      const INITIAL_STATE = Map({
        currentVideo: Map(),
        videoList: List(),
        loading: false,
      });

      const NEW_STATE = INITIAL_STATE.set('loading', true);

      const reducerState = reducer(INITIAL_STATE, ACTION);
      expect(reducerState).to.equal(NEW_STATE);
    });
  });
});
