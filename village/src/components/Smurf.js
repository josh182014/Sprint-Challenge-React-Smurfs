import React from 'react';

const Smurf = props => {

  const deleteSmurf = (event) => {
    event.preventDefault()
    props.deleteSmurf(props.id)
  }

  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={deleteSmurf}>Delete</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

