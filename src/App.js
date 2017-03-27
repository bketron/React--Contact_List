import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ContactList from './ContactList';

var styles = {
  main: {
    width: '400px',
    display: 'block'
  },
  heading: {
    backgroundColor: '#81BC39',
    color: 'white',
    height: '60px',
    lineHeight: '60px',
    margin: 0,
    paddingLeft: '20px',
    fontSize: '25px',
    boxShadow: '0 2px 0 rgba(18,124,0,0.6)'

  }
}

export default React.createClass({
  getInitialState: function() {
    return{
      data: require('./data.json')
    }
  },
  render: function(){
    return (
      <BrowserRouter>
        <div style={styles.main}>
          <p style={styles.heading}>My Peeps</p>

          <ContactList users={this.state.data}/>
        </div>
      </BrowserRouter>
    )
  }
})
