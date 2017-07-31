import React, { Component } from 'react';

class Picture extends Component {
  	constructor(props) {
		super(props)
	  	this.state = {
	  		pictures: [],
	  		index: 0

	  	}
  }
  render() {
    return (
      <div className="Pictures">Pictures</div>
    );
  }
}

export default Picture;