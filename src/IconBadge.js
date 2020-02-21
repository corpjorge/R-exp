import React from 'react';
import Badge from '@material-ui/core/Badge';
import Bell from './Campana';

class IconBadge extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {
	    	notificationsFun: 0,
			invisible: false,
			items: [],
			val: ''
		};
	}

	componentDidMount() {
		this.timerID = setInterval(
		  () => this.tick(),
		  1000
		);
	}

	  componentWillUnmount() {
	    clearInterval(this.timerID);
	  }

	  tick() {
		  fetch("http://127.0.0.1:8000/salida/")
			  .then(res => res.json())
			  .then(
				  (result) => {
					  this.setState({
						  items: result[0].fields,
					  });
				  },
				  (error) => {
					  this.setState({
						  isLoaded: true,
						  error
					  });
				  }
			  );
	}



	render() {
		let { items, val } = this.state;
		if (!items.name){
			val = 0;
		}else{
			val = parseInt(items.name)
		}

		return (
			<div>
				<Badge color="secondary" badgeContent={parseInt(val)} >
					<Bell />
				</Badge>
			</div>
		);
	}
}

export default IconBadge;