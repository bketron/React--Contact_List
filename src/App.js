import React from 'react'
import { BrowserRouter , Route } from 'react-router-dom'
import ContactList from './ContactList'
import SingleView from './SingleView'

export default React.createClass({
  render() {
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