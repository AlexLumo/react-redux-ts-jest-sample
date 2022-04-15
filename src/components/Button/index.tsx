import React from 'react';

interface Props {
  cta: string;
  action: string;
}

export default class Button extends React.Component<Props> {
  render() {
    if (!this.props.cta || !this.props.action) {
      return null;
    }
    return <a href={this.props.action}>{this.props.cta}</a>;
  }
}
