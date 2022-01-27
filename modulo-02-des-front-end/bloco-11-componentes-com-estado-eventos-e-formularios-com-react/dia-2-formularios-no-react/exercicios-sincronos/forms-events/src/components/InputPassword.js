import React from 'react';

class InputPassword extends React.Component {
  render() {
    const { password, onInputChange } = this.props;
    return (
      <input
        type="password"
        name="password"
        value={ password }
        onChange={ onInputChange }
      />
    );
  }
}
export default InputPassword;
