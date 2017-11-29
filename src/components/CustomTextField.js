import React, {Component} from 'react';
import TextField from 'material-ui/TextField';

class CustomTextField extends Component {

  render() {
    let {
      disabled,
      multiline,
      autoFocus,
      input,
      label,
      type,
      name,
      placeholder,
      meta: { touched, error },
      ...custom
    } = this.props
    return (
      <TextField
        onChange={input.onChange}
        disabled={disabled}
        multiline={multiline}
        autoFocus={autoFocus}
        fullWidth={true}
        type={type}
        placeholder={placeholder}
        label={label}
        helperText={touched && error}
        error={touched && error != null}
        {...input}
        {...custom}
      />
    );
  }
}

export default CustomTextField;
