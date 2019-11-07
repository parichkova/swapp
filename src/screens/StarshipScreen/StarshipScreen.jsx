import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { NavBar } from '../../components/NavBar/NavBar';
import { loadStarship as loadStarshipAction } from '../../store/actions';
import { getStarshipLoaded } from '../../store/reducers/starshipLoaded';
import './style.scss';

export const Starship = ({ id: { id }, starshipLoaded, loadStarship }) => {
  useEffect(() => {
    loadStarship(id);
  }, [id]);

  const starship = starshipLoaded && starshipLoaded.starshipLoaded;

  return (
    <div className="starship-page">
      <NavBar
        logoName="Swapp"
      />
      {starship && (
        <section>
          <div className="title">
            <h2>
              {starship.name}
            </h2>
            <p>
              {`( ${starship.model} )`}
            </p>
          </div>
          <hr></hr>
          <div className="starship-information-wrapper">
            <div className="starship-holder">
              <div className="starship-main">
                <p>
                  {starship.name}
                </p>
                <img
                  src={starship.image}
                  alt={starship.name}
                />
              </div>
              <div className="starship-more">
              <p>
                Class:
                <span className="property">
                  {starship.class}
                </span>
              </p>
              <p>
                Cost:
                <span className="property">
                  {starship.cost}
                </span>
              </p>
              <p>
                Crew:
                <span className="property">
                  {starship.crew}
                </span>
              </p>
              <p>
                Max Atmospheric Speed:
                <span className="property">
                  {starship.maxAtmosphericSpeed}
                </span>
              </p>
              <p>
                Hyperdrive Rating:
                <span className="property">
                  {starship.hyperdriveRating}
                </span>
              </p>
            </div>
            </div>
            <div className="starship-list">
              <h2>
                Compared to starship class {starship.class}
              </h2>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.match.params,
    starshipLoaded: getStarshipLoaded(state),
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  loadStarship: loadStarshipAction,
}, dispatch);

Starship.propTypes = {
  id: PropTypes.shape({
    id: PropTypes.string,
  }),
  starshipLoaded: PropTypes.object,
  loadStarship: PropTypes.func,
};

Starship.defaultProps = {
  id: {},
  starshipLoaded: {},
  loadStarship: () => { },
};

export const StarshipScreen = connect(mapStateToProps, mapDispatchToProps)(Starship);
