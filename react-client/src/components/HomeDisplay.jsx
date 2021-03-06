import React from 'react';
import { Button, FormControl, Row, Col, ButtonToolbar } from 'react-bootstrap';
import MapContainer from './Gmaps.jsx'
class HomeDisplay extends React.Component {
  constructor(props) {
  	console.log(props.item.to)
    super(props);
  }



render() {
	let phonNum=0;
	if(this.props.item.userInfo.length>0){
		 phonNum=this.props.item.userInfo[0].phoneNumber;
	}

  return (
  <div>
  	<div id='prof' className='card-columns row'>
      <div className = 'col-md-12'>
  	<div className="card text-white bg-dark mb-3" style={{width: '100%'}} ><br />
  		<div className="card-body">
			<div >
			<span><b>Name : </b></span>
			<span>{this.props.item.user}</span>
    </div>
    <div>
			<span><b>Job Title : </b></span>
			<span>{this.props.item.jobTitle}</span>
    </div>
    <div className='col-4'>
			<span><b>Job Category : </b></span>
			<span>{this.props.item.category}</span>
    </div>
		</div><br />

        <div>
          <div className='col-4'>
            <span><b>From : </b></span>
			<span>{this.props.item.from}</span>
    </div>
    <div className='col-4'>
			<span><b>To : </b></span>
			<span>{this.props.item.to}</span>
    </div>
    <div className='col-4'>
			<span><b>Phone Number : </b></span>
			<span>{phonNum}</span>
    </div>
		</div><br />

    <div className = 'row'>
      <div className='col-1'>
		</div>
    <div className='col-10'>
			<span><b>Description : </b></span>
			<span>{this.props.item.jobDescription}</span>
    </div>
    <div className='col-1'>
			</div>
		</div><br />

		 <div className = 'row'>
       <div className='col-8'>
     </div>
     <div>
 			<span><b>Salary : </b></span>
 			<span>{this.props.item.salary}</span>
     </div>
     <div className='col-4'>
			<span><b>Posted at : </b></span>
			<span>{this.props.item.created_at.slice(0, 10)}</span>

    </div>
  </div>
    </div><br />
  </div>
    </div>

  </div>
    )
  }
}
export default HomeDisplay;
