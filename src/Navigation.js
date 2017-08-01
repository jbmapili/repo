import React, { Component } from 'react';
import Picture from './Picture'
import Details from './Details'
import Image from './Image';


class Navigation extends Component {
	constructor(props) {
		super(props)
	  	this.state = {
	  		data: [],
	  		index: 0
	  	}
	}
	 componentDidMount() {
	    fetch('/api/get-manga-list')
	    .then(function(response) {
	        return response.json()
	    }).then(function(json){
	        this.setState({data: json})
	    }.bind(this))
	}
  	render() {
	    return (
	    	<div>
	      		<div className="Navigation">
	      			{this.state.data.map((manga, i) => 
	      				<div key={i}>
		      				<Image manga={manga.mangaId} title={manga.name}/>
		      			</div>
	      			)}
	      		</div>
	      		<Picture/>
	      		<Details/>
			</div>
	    );
  }
}

export default Navigation;