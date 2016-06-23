import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateSearchQuery } from 'src/actions';
import * as config from 'src/actions/config';
import './search-bar.scss';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: config.INITAL_QUERY,
    };
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }
  handleSearchInput(event) {
    this.setState({
      searchQuery: event.target.value,
    });
  }
  handleEnter(event) {
    if (event.key === 'Enter') {
      this.props.updateSearchQuery(this.state.searchQuery);
    }
  }
  render() {
    return (
      <search>
        <div className="form-inline search">
          <input
            className="form-control"
            type="text" onChange={this.handleSearchInput}
            onKeyPress={this.handleEnter}
            value={this.state.searchQuery}
            placeholder="Search YouTube"
          />
          <button
            className="btn btn-success"
            onClick={() => this.props.updateSearchQuery(this.state.searchQuery)}
          >
            Search
          </button>
        </div>
      </search>
    );
  }
}
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    updateSearchQuery,
  }, dispatch);

SearchBar.propTypes = {
  updateSearchQuery: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(SearchBar);
