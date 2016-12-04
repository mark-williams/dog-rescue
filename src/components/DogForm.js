import React from 'react';

class DogForm extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.state = { item: { ...props } };
  }

  onChange(event) {
    const amended = this.state.item;
    amended.name = event.target.value;
    this.setState({ item: amended });
  }

  render() {
    return (
      <div>
        <h4>Create/amend a dog here</h4>
        <label htmlFor="dogName">Name</label>
        <input type="text" id="dogName" value={this.state.item.name} onChange={this.onChange} />
        <button onClick={() => this.props.onSave(this.state.item)}>Save</button>
      </div>
    );
  }
}

export default DogForm;
