import React from 'react';

const DogMaintenance = (props) => (
  <div>
    <h4>Create/amend a dog here...</h4>
    { props.params.id ? `Editing dog ${props.params.id}` : 'Adding a new dog' }
  </div>
);

export default DogMaintenance;
