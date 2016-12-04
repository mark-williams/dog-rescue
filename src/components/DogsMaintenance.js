import React from 'react';
import { connect } from 'react-redux';
import Dog from './Dog';

const DogsMaintenance = props => 
  (
    <div>
      <h4>Dog Maintenance</h4>
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
