import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Dimensions from 'react-dimensions';
import ReactList from 'react-list';
import { ListItem, SearchBar } from 'components';
import './list.scss';

class List extends Component {
  constructor(props) {
    super(props);
    this.renderListItem = this.renderListItem.bind(this);
    this.renderVideoList = this.renderVideoList.bind(this);
  }
  renderListItem(index) {
    const item = this.props.videos.get('videoList').get(index);
    const key = item.getIn(['id', 'videoId']);
    return (<ListItem key={key} video={item} />);
  }
  renderVideoList(videoList) {
    if (!videoList.get(0)) {
      return (<li className="list-group-item">No Results... try again</li>);
    }
    return (
      <ReactList
        itemRenderer={this.renderListItem}
        length={videoList.size}
        type="uniform"
        pageSize={5}
        useStaticSize
      />
    );
  }
  renderLoading() {
    return (<li className="list-group-item">Loading</li>);
  }
  render() {
    const videos = this.props.videos;
    const videoList = videos.get('videoList');
    return (
      <list>
        <div className="col-md-4">
          <SearchBar />
          <ul style={{ height: this.props.containerHeight }}>
            {videos.get('loading') ? this.renderLoading() : this.renderVideoList(videoList)}
          </ul>
        </div>
      </list>
    );
  }
}
function mapStateToProps(state) {
  return {
    videos: state.videos,
  };
}

List.propTypes = {
  containerHeight: PropTypes.number,
  videos: PropTypes.object,
};

export default Dimensions()(connect(mapStateToProps)(List));
