import React from 'react';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { green } from '@material-ui/core/colors';

class Campana extends React.Component {

  constructor(props) {
    super(props);
    //this.state = {date: new Date()};
  }

  componentDidMount() {
   /* this.timerID = setInterval(
      () => this.tick(),
      1000
    );*/
  }

  componentWillUnmount() {
    
  }

  hacerAlgo() {
     
  }

  render() {
    return (       
        <NotificationsIcon style={{ color: green[500] }} />    
    );
  }
}

export default Campana;
