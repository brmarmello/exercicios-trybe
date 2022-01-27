import React from 'react';

class Input extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { value, onInputChange, name, type } = this.props;
    return (
      <input
        type={ type }
        name={ name }
        value={ value }
        onChange={ onInputChange }
      />
    );
  }
}
export default Input;
