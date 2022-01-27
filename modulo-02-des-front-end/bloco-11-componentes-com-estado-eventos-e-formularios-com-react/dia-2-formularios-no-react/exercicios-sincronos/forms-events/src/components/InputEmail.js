import React from 'react';

class InputEmail extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { email, onInputChange } = this.props;
    return (
      <input
        type="email"
        name="email"
        value={ email }
        onChange={ onInputChange }
        placeholder="murillo.wolf@betrybe.com"
      />
    );
  }
}
export default InputEmail;
