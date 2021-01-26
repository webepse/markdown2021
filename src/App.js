import React, { Component } from 'react';
import './App.css'

import marked from 'marked'
import DOMPurify from 'dompurify'

import { sampleText } from './sampleText'

class App extends Component {
  state = {
    text : sampleText
  }

  handleChange = (event) => {
    const text = event.target.value 
    //this.setState({text:text})
    this.setState({text})
  }

  renderText = text => {
    let text2 = DOMPurify.sanitize(text,{ALLOWED_TAGS:['b']})
    return marked(text2)
  }

  render() { 
    return ( 
      <>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <textarea 
              rows="35"
              value={this.state.text}
              className="form-control"
              onChange={this.handleChange}
              ></textarea>
            </div>
            <div className="col-sm-6">
              <div dangerouslySetInnerHTML={{__html: this.renderText(this.state.text)}}></div>
            </div>
          </div>
        </div>
      </>
     );
  }
}
 
export default App;

