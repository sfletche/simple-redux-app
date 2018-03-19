import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  setTitle,
  clearTitle,
} from '../actions/actions';

function getClearButton(clearTitle) {
  return (
    <button onClick={clearTitle}>
      Clear Title
    </button>
  );
}

function getSetButton(setTitle, title) {
  return (
    <button onClick={() => setTitle(title)}>
      Set Title
    </button>
  );
}

function MainContainer({ title, setTitle, clearTitle }) {
  return (
    <div>
      <h1>{title || 'Default Title'}</h1>
      {title ? getClearButton(clearTitle) : getSetButton(setTitle, "New Title!")}
    </div>
  );
}

MainContainer.propTypes = {
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  clearTitle: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  title: state.title,
});

const mapDispatchToProps = {
  setTitle,
  clearTitle,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
