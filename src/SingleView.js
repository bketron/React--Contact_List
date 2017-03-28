import React from 'react'
import { BrowserRouter , Route , Link } from 'react-router-dom'
import ContactList from './ContactList'

const users = require('./data.json')


var styles = {
	main: {
		width: '450px',
		margin: 'auto'
	},
	button: {
		height: '25px',
		lineHeight: '25px',
		color: 'black',
		position: 'relative',
		top: '-395px',
		left: '15px',
		cursor: 'pointer'
	},
	imageBG: {
		display: 'flex',
		alignItems: 'center',
		width: '450px',
		height: '230px',
		margin: 'auto',
		background: 'linear-gradient(#A7D076, #6e9e34)',
		boxShadow: '0 2px 1px rgba(18,124,0,0.2)'
	},
	image: {
		margin: 'auto',
		borderRadius: '50%',
		border: '2px solid rgba(255,255,255,0.5)',
		boxShadow: '0px 0px 5px rgba(0,0,0,0.7)'
	},
	list: {
		listStyleType: 'none',
		padding: '0'
	},
	listItem: {
		borderWidth: '0 0 1px 0',
		borderStyle: 'solid',
		borderColor: 'rgba(0,0,0,0.2)',
		paddingLeft: '10px'
	},
	text: {
		textTransform: 'capitalize',
		fontSize: '12px',
		fontWeight: 'bold'
	},
	email: {
		fontSize: '12px',
		fontWeight: 'bold'
	},
	textIcons: {
		marginRight: '5px'
	}
}


export default React.createClass({
	getInitialState: function() {
		return {
			users: users.filter(user=>{
				return Number(user.id) === Number(this.props.match.params.userId)
			})[0]
		}
	},
	// getPhone: function(number) {
	// 	var number = number.replace("-" , ") ")


	// 	return "(" + number

	// },
	handleBack: function(e) {
		e.preventDefault()
		this.props.history.goBack()
	},
	render: function() {
		console.log(this.props)
		return (
			<div style={styles.main}>
				
				<div style={styles.imageBG}>
					<img style={styles.image} src={this.state.users.picture.large} alt={this.state.users.name.first + this.state.users.name.last + ' picture'}/>
				</div>

				<ul style={styles.list}>
					<li style={styles.listItem}>
						<p style={styles.text}><i style={styles.textIcons} className="fa fa-user" aria-hidden="true"></i>
{this.state.users.name.first} {this.state.users.name.last}</p>
					</li>
					<li style={styles.listItem}>
						<p style={styles.email}><i style={styles.textIcons} className="fa fa-envelope" aria-hidden="true"></i>
{this.state.users.email}</p>
					</li>
					<li style={styles.listItem}>
						<p style={styles.text}><i style={styles.textIcons} className="fa fa-mobile" aria-hidden="true"></i>
{this.state.users.cell}</p>
					</li>
					<li style={styles.listItem}>
						<p style={styles.text}><i style={styles.textIcons} className="fa fa-globe" aria-hidden="true"></i>
{this.state.users.location.city}, {this.state.users.location.state}</p>
					</li>
				</ul>

					<div className="button"  style={styles.button} >
						<i className="fa fa-chevron-left" aria-hidden="true" onClick={this.handleBack}></i>
					</div>

			</div>
		)
	}
})