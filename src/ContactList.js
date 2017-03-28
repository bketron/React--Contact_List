import React from 'react'
import ListItem from './ListItem'
import contacts from './data.json'
import { Link } from 'react-router-dom'

var styles = {
	main: {
    	width: '400px',
    	display: 'block',
    	margin: 'auto'
  	},
	list: {
		listStyleType: 'none',
		margin: 0,
		padding: 0,
	},
	listItem: {
		display: 'block',
		borderWidth: '0 0 1px 0',
		borderColor: 'rgba(0,0,0,0.2)',
		borderStyle: 'solid',
		textDecoration: 'none'
	},
	heading: {
	    background: 'linear-gradient(#A7D076, #6e9e34)',
	    color: 'white',
	    height: '50px',
	    lineHeight: '50px',
	    margin: 0,
	    paddingLeft: '20px',
	    fontSize: '17px',
	    fontWeight: 'bold',
	    fontFamly: 'sans-serif',
	    textShadow: '1px 2px rgba(0,0,0,0.1)',
	    boxShadow: '0 2px 1px rgba(18,124,0,0.6)'
	},
	link: {
		textDecoration: 'none',
		color: 'black'
	}
}

export default React.createClass({
	getDefaultProps: function() {
		return {
			users: []
		}
	},
	render: function() {
		return (
				<div style={styles.main}>
					<p style={styles.heading}>My Peeps</p>

					<ul style={styles.list}>
					{contacts.map(user => (
						<Link key={'clist' + user.id} to={'/user/' + user.id} style={styles.link}>
							<li style={styles.listItem}>
								<ListItem {...user} />
							</li>
						</Link>
					))}
				</ul>

				</div>
		)
	}
})