import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import './detail.scss';

const renderPlayer = (video) => {
  const videoId = video.getIn(['id', 'videoId']);
  const title = video.getIn(['snippet', 'title']);
  const description = video.getIn(['snippet', 'title']);

  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} ></iframe>
      </div>
      <div className="info">
        <h4>{title}</h4>
        <div>{description}</div>
      </div>
    </div>
  );
};

const renderLoading = () =>
  <div>Loading...</div>;

const Detail = (props) => {
  const video = props.videos.get('currentVideo');
  return (
    <detail>
      <div className="col-md-8">
        {video.getIn(['id', 'videoId']) ? renderPlayer(video) : renderLoading()}
      </div>
    </detail>
  );
};

function mapStateToProps(state) {
  return {
    videos: state.videos,
  };
}

Detail.propTypes = {
  videos: PropTypes.object,
};

export default connect(mapStateToProps)(Detail);
