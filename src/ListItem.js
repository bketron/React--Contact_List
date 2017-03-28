import React from 'react'

var styles = {
	name: {
		textTransform: 'capitalize',
		margin: 0,
		marginLeft: '7px',
		fontSize: '11px',
		fontWeight: 'bold',
		lineHeight: '50px',
		textDecoration: 'none'
	},
	item: {
		display: 'flex',
		alignItems: 'center',
		height: '50px',
		lineHeight: '50px',
	},
	thumbnail: {
		borderRadius: '50%',
		width: '30px',
		height: '30px',
		marginLeft: '10px'

	}
}
export default React.createClass({
	getDefaultProps: function() {
		return {
			user: {}
		}
	},
	render: function() {
		return (
				<div>
					<div style={styles.item}>
						<img style={styles.thumbnail} src={this.props.picture.thumbnail} alt={this.props.name.first + this.props.name.last + ' picture'}/>
						<p style={styles.name}>{this.props.name.first} {this.props.name.last}</p>
					</div>
				</div>
		)
	}
})