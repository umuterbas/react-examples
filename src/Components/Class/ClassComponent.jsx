import React, { Component } from 'react';
import ChildClass from './ChildClass';
import { ProfileContext } from './ProfileContext';

export default class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      text2: '',
      anotherProp: 'prop',
    };
    this.updateText = this.updateText.bind(this);
  }
  updateText(newText) {
    // console.log('this', this);
    this.setState({ text: newText });
  }
  updateText2(newText) {
    // console.log('this', this);
    this.setState({ text2: newText });
  }
  // useEffect(() => {
  //   console.log('run once at first and never more');
  // }, []);
  componentDidMount() {
    console.log('class component once and never more');
  }
  // useEffect(() => {
  //   console.log('run first and only when text2 is updated');
  // }, [text2]);
  componentDidUpdate(prevProps, prevState) {
    console.log('prev', prevState);
    console.log('render class component every update');
    if (prevState.text !== this.state.text) {
      console.log('render when text changes');
    }
  }
  render() {
    return (
      <div className='component'>
        <h1>Class Component</h1>
        <h2>Hi, my name is {this.context.profile.name}</h2>
        {this.state.text}
        <input
          type='text'
          value={this.state.text2}
          onChange={(e) => this.updateText2(e.target.value)}
        />
        <ChildClass text={this.state.text} updateText={this.updateText} />
      </div>
    );
  }
}
ClassComponent.contextType = ProfileContext;
