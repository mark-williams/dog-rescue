import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Dog from './Dog';

const DogsMaintenance = props => (
  <div className="container">
    <h4>Dog Maintenance</h4>
    <div className="row">
      <div className="col s8">
        <table className="highlight">
          <thead>
            <tr>
              <th className="maintenance-table__col--small">&nbsp;</th>
              <th>Name</th>
              <th>Sex</th>
              <th>Breed</th>
            </tr>
          </thead>
          <tbody>
            { props.dogs.map(dog => (<Dog key={dog.id} {...dog} />)) }
          </tbody>
        </table>
      </div>
      <div className="col s2">
        <Link to="/dog" className="btn-floating btn-large waves-effect waves-light red right-align">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  </div>
);

const mapStateToProps = state => (
  {
    dogs: state.dogs,
  }
);

const mapDispatchToProps = () => (
  {}
);

DogsMaintenance.propTypes = {
  dogs: React.PropTypes.arrayOf(React.PropTypes.object),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(DogsMaintenance);
