import React from 'react';
import Options from './Options';
import { sexOptions } from '../../data/dog-data';

class DogForm extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.state = { item: Object.assign({}, props.dog) };
  }

  onChange(event) {
    const amended = this.state.item;
    const field = event.target.name;
    amended[field] = event.target.value;
    this.setState({ item: amended });
  }

  renderOptions() {
    return (
      <Options
        options={sexOptions}
        selectedOption={this.state.item.sex}
        label="Sex"
        onChange={this.onChange}
      />
    );
  }

  render() {
    return (
      <div>
        <h4>Create/amend a dog here</h4>
        <div className="row">
          <div className="col s6 left-align">
            <label htmlFor="dogName" className="left-align">Name</label>
            <input type="text" id="dogName" name="name" value={this.state.item.name} onChange={this.onChange} />
          </div>
        </div>
        <div className="row">
          <div className="col s6 left-align">
            <label htmlFor="breed">Breed</label>
            <input type="text" id="breed" name="breed" value={this.state.item.breed} onChange={this.onChange} />
          </div>
        </div>
        { this.renderOptions() }
        <div className="row">
          <div className="col s6 left-align">
            <button className="waves-effect waves-light btn" onClick={() => this.props.onSave(this.state.item)}>Save</button>
          </div>
        </div>
      </div>
    );
  }
}

DogForm.propTypes = {
  dog: React.PropTypes.object,
  onSave: React.PropTypes.func,
};

export default DogForm;
