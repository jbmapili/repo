import React, { Component } from 'react';

class Details extends Component{
	constructor(props){
		super(props)
		this.state = {
			title: 'Your Lie in April',
			author: 'JB Mapili',
			genres: ['Romance','Music'],
			description: 'Sample description.'
		}
	}
	render(){
		return(
			<div>
				<div id='details'>{this.state.title}</div>
				<div id='author'>{this.state.author}</div>
				<div id='genres'>
					{this.state.genres.map((genre, i) =>
						<div key={i}>{genre}</div>				
					)}
				</div>
				<div id='description'>{this.state.description}</div>
			</div>
		)
	}
}

export default Details