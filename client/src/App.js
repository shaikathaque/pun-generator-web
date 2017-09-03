import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Divider from 'material-ui/Divider';

import Question from './Question';
import Answer from './Answer';
import NextPun from './NextPun';
import TopBar from './TopBar';
import SubmitPun from './SubmitPun';

import './App.css';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      question: 'Question',
      answer: 'Answer',
      showAnswer: false,
      dialogOpen: false,
      userQuestion: '',
      userAnswer: ''
    }
  }

  componentDidMount() {
    this.getNextPun();
  }

  handleNextPunClick() {
    this.getNextPun();
  }

  handleShowAnswerClick() {
    this.setState({
      showAnswer: true,
      answer: this.state.answer,
      dialogOpen: true
    });
  }

  getNextPun() {
    getPun.call(this, (data) => {
      this.setState({
        question: data.question,
        answer: data.answer,
        showAnswer: false,
        dialogOpen: false
      });
    });
  }

  handleCloseDialog() {
    this.setState({
      dialogOpen: false
    });
  }

  handleUserQuestionChange(question) {
    this.setState({
      userQuestion: question
    });
  }

  handleUserAnswerChange(answer) {
    this.setState({
      userAnswer: answer
    });
  }

  handleSubmitPunClick() {
    submitPun.call(this, this.state.userQuestion, this.state.userAnswer, (data) => {
      this.setState({
        userQuestion: '',
        userAnswer: ''
      });
    });
  }

  render() {
    return (
      <div className="app">
        <MuiThemeProvider muiTheme={muiTheme}>
          <TopBar />
        </MuiThemeProvider>

        <Question question={this.state.question}/>

        <MuiThemeProvider muiTheme={muiTheme}>
          <Answer answer={this.state.showAnswer === true ? this.state.answer : 'Click here to Reveal Answer'}
            handleShowAnswerClick={this.handleShowAnswerClick.bind(this)}
            dialogOpenState={this.state.dialogOpen}
            handleCloseDialog={this.handleCloseDialog.bind(this)}
          />
        </MuiThemeProvider>

        <MuiThemeProvider muiTheme={muiTheme}>
          <NextPun handleNextPunClick={this.handleNextPunClick.bind(this)}/>
        </MuiThemeProvider>

        <MuiThemeProvider>
          <Divider />
        </MuiThemeProvider>

        <MuiThemeProvider muiTheme={muiTheme}>
          <SubmitPun
            userQuestionState={this.state.userQuestion}
            userAnswerState={this.state.userAnswer}
            handleUserQuestionChange={this.handleUserQuestionChange.bind(this)}
            handleUserAnswerChange={this.handleUserAnswerChange.bind(this)}
            handleSubmitPunClick={this.handleSubmitPunClick.bind(this)}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#673AB7',
  },
  appBar: {
    height: 50,
  },
  raisedButton: {
      primaryColor: '#9575CD',
    },
});

export default App;

var getPun = (cb) => {
  axios.get('https://pun-generator.herokuapp.com/pun')
    .then((response) => {
      cb.call(this, response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

var submitPun = (userQuestion, userAnswer, cb) => {

  var pun = {
    question: userQuestion,
    answer: userAnswer
  }

  axios.post('https://pun-generator.herokuapp.com/submitPun', pun)
    .then((response) => {
      cb(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}
