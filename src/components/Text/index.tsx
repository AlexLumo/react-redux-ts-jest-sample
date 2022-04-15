import React from 'react';
import Button from '../Button';

interface Props {
  data: string;
  color: string;
}

export default class Text extends React.Component<Props> {
  render() {
    if (!this.props.data || !this.props.color) {
      return null;
    }
    return (
      <>
        <p style={{ color: this.props.color }}>{this.props.data}</p>
        <Button cta="Click me" action="google.com" />
      </>
    );
  }
}
