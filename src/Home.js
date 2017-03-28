import React from 'react';
import ContactList from './ContactList';
import SingleView from './SingleView'
import { BrowserRouter , Route } from 'react-router-dom'

export default React.createClass({
  getInitialState: function() {
    return{
      data: require('./data.json')
    }
  },
  render: function(){
    return (
      <BrowserRouter>
        <div>

          <Route exact={true} path="/" component={ContactList} />
          <Route path="/user/:userId" component={SingleView} />
          
        </div>
      </BrowserRouter>
    )
  }
})