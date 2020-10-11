import React, { Component } from 'react';

export class Square extends React.Component {
constructor(props){
  super(props);
  this.toggleClass = this.toggleClass.bind(this);
  this.state = {
    animate : '',
  }
}
  toggleClass() {
    const animate = this.state.animate;
    this.setState({ animate: 'animated bounce' });
    console.log('ss')
};

    render() {
      return (
        <button
          className="square animated flipInX"
          onClick={() => this.props.onClick()}
        >
          <span className={this.state.animate} onClick={() => this.toggleClass()}> {this.props.value}</span>
        </button>
      );
    }
  }