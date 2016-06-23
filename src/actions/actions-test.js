import { expect } from 'chai';
import * as actions from './index';
import * as types from './types';

describe('Action: updateVideoList', () => {
  let videoList;
  beforeEach(() => {
    videoList = [{
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
  });

  it('should return type UPDATE_VIDEOS_LIST', () => {
    const response = actions.updateVideoList(videoList);
    expect(response.type).equal(types.UPDATE_VIDEOS_LIST);
  });

  it('should return the argument in payload as videoList', () => {
    const response = actions.updateVideoList(videoList);
    expect(response.payload.videoList).equal(videoList);
  });
});

describe('Action: updateCurrentVideo', () => {
  let currentVideo;
  beforeEach(() => {
    currentVideo = {
      etag: '5g01s4-wS2b4VpScndqCYc5Y-8k/DX6sdrLi3hKmfZuMtGjBDr0GXvo',
      snippet: {
        title: 'test',
      },
    };
  });

  it('should return type UPDATE_VIDEOS_CURRENT', () => {
    const response = actions.updateCurrentVideo(currentVideo);
    expect(response.type).equal(types.UPDATE_VIDEOS_CURRENT);
  });

  it('should return the argument in payload as currentVideo', () => {
    const response = actions.updateCurrentVideo(currentVideo);
    expect(response.payload.currentVideo).equal(currentVideo);
  });
});

describe('Action: updateVideosFail', () => {
  it('should return type UPDATE_VIDEOS_FAIL', () => {
    expect(actions.updateVideosFail().type).equal(types.UPDATE_VIDEOS_FAIL);
  });
});

describe('Action: updateVideosLoading', () => {
  it('should return type UPDATE_VIDEOS_LOADING', () => {
    expect(actions.updateVideosLoading().type).equal(types.UPDATE_VIDEOS_LOADING);
  });
});
