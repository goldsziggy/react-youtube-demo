import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateCurrentVideo } from 'src/actions';

const ListItem = (props) => {
  const video = props.video;
  const imageUrl = video.getIn(['snippet', 'thumbnails', 'default', 'url']);
  const title = video.getIn(['snippet', 'title']);
  return (
    <li onClick={() => props.updateCurrentVideo(video)} className="list-group-item">
      <div className="media">
        <div className="media-left">
          <img className="media-object" role="presentation" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">
            {title}
          </div>
        </div>
      </div>
    </li>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateCurrentVideo,
  }, dispatch);
}

ListItem.propTypes = {
  updateCurrentVideo: PropTypes.func,
  video: PropTypes.object,
};

export default connect(null, mapDispatchToProps)(ListItem);
