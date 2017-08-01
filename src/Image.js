import React, { Component } from 'react';
import './Image.css';
import image from './sample.png';
import { Button } from 'react-bootstrap';

class Image extends Component{
	constructor(props){
		super(props)
		this.state = {
			chapter: 0
		}
	}
	render(){
		return(
			<div className='image'>
				<img src={image} className='thumbnail' alt='thumbnail'></img>
				<br/>
				<Button>{this.props.title}</Button>
			</div>
		)
	}
}

export default Image;