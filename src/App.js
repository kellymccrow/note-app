import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { nodeInternals } from 'stack-utils';

class App extends Component{

  constructor(props){
    super(props);
    this.notes = [
      {
        id: 1,
        text: 'watch youtube',
      },
      {
        id: 2,
        text: 'cook dinner',
      },
      {
        id: 3,
        text: 'react',
      },
      {
        id: 4,
        text: 'more react',
      }
    ];
  }

  render(){
    return (
      <div className="wrap">
        <div className="container">
          <div className="notes">

            {
              this.notes.map(function(note){

                return (
                  <div className="note" key={note.id}>
                    <div className="note-body">
                      <i className="far fa-times-circle note-remove"></i>
                      <div className="note-text">
                        {note.text}
                      </div>
                    </div>
                  </div>
                );

              })
            }
       
            <div className="note new-note">

              <form className="note-body">
        
                  <div className="form-group">
                    <label for="note-input">New note</label>
                    <input type="text" className="form-control" id="note-input"/>
                  </div>
            
                  <button type="submit" className="btn btn-primary">Add</button>
              </form>
              
            </div>
          </div>
        </div>
	    </div>
    );
  }
}

export default App;
