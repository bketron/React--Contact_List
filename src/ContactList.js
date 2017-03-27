import React from 'react'
import ListItem from './ListItem'

var styles = {
	list: {
		listStyleType: 'none',
		margin: 0,
		padding: 0,
		paddingLeft: '20px'
	},
	listItem: {
		display: 'block',
		borderWidth: '0 0 1px 0',
		borderColor: 'rgba(0,0,0,0.2)',
		borderStyle: 'solid'
	}
}

export default React.createClass({
	getDefaultProps: function() {
		return {
			users: []
		}
	},
	render: function(){
		return (
			<div>
				<ul style={styles.list}>
				{this.props.users.map(user => (
					<li style={styles.listItem}>
						<ListItem {...user} />
					</li>
				))}
			</ul>
			</div>
		)
	}
})