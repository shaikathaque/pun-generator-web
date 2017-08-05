import React, { Component } from 'react';
import './App.css';

import Question from './Question';
import Answer from './Answer';
import NextPun from './NextPun';

import $ from 'jquery';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      question: 'Question',
      answer: 'Answer',
      showAnswer: false
    }
  }

  componentDidMount() {
    this.getNextPun();
  }

  handleNextPunClick() {
    this.getNextPun();
  }

  handleShowAnswerClick() {
    console.log('handleShowAnswerClick called')
    this.setState({
      showAnswer: true,
      answer: this.state.answer
    });
  }

  getNextPun() {
    getPun.call(this, (data) => {
      this.setState({
        question: data.question,
        answer: data.answer,
        showAnswer: false
      });
    });
  }

  render() {
    return (
      <div className="app">
        <Question question={this.state.question}/>
        <Answer answer={this.state.showAnswer === true ? this.state.answer : 'Click here to Reveal Answer'}
          handleShowAnswerClick={this.handleShowAnswerClick.bind(this)}
        />
        <NextPun handleNextPunClick={this.handleNextPunClick.bind(this)}/>
      </div>
    );
  }
}

export default App;

//helper function

var getPun = (cb) => {
  $.get('https://pun-generator.herokuapp.com/', function(data) {
  })
  .done( (data) => {
    cb.call(this, data);
  })
  .fail( (response) => {
    console.log(response);
  });

};