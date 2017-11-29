import React, {Component} from 'react';
import Select from 'material-ui/Select'

class CustomSelectField extends Component {

  render() {
    let {
      value,
      input,
      meta: { touched, error },
      children,
      ...custom
    } = this.props
    // onChange={input.onChange} onChange={(event, index, value) => input.onChange(value)}
    return (
      <Select
        fullWidth={true}
        error={touched && error != null}
        {...input}

        onChange={(event, index, value) => input.onChange()}
        value={value}
        children={children}

        {...custom}

      />
    );
  }
}

export default CustomSelectField;
