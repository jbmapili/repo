import React, { Component } from 'react'
import './Image.css'
import image from './sample.png'

class Image extends Component{
	constructor(props){
		super(props)
		this.state = {
			chapter: 0
		}
	}
	componentDidMount(){
	}
	render(){
		return(
			<div className='image'>
				<img src={image} className='thumbnail'></img>
				<br/>
				{this.props.title}
			</div>
		)
	}
}

export default Image;