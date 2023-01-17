import React from "react";
import '../App.css';
import {Col, Row, Container,Nav, NavLink} from 'react-bootstrap'
import { LineChart, Line,CartesianGrid,XAxis,YAxis,Tooltip,BarChart,Legend,Bar} from 'recharts';
import { useState } from 'react';

const data = [
    {name: '12th Jan', pv: 2600, amt: 2400},
    {name: '13th Jan', pv: 2800, amt: 2400},
    {name: '14th Jan', pv: 2400, amt: 2400},
    {name: 'Today', pv: 2200, amt: 200}
  ];
  const data1 = [
    {name: 'Oct', pv: 2600, amt: 2400},
    {name: 'Nov', pv: 2800, amt: 2400},
    {name: 'Dec', pv: 2400, amt: 2400},
    {name: 'Jan', pv: 2200, amt: 200}
  ];
export const Dashboard = () => {
    const [clicked,setClicked] = useState(false);
    const [barHide,setbarHide] = useState(false);
    return(
        <>
        <div id="mySidenav" className="sidenav" style={{display:clicked ? 'block' : 'none'}}>
          <NavLink href="/">Dashboard</NavLink>
          <NavLink href="/report">Report</NavLink>
          <NavLink href="/sites">Sites</NavLink>
          <NavLink href="/billing">Billing</NavLink>
          <NavLink href="/password">Password</NavLink>
          <NavLink href="/payment">Payment</NavLink>
        </div>
    <i className="fa-solid fa-bars" style={{display:barHide ? 'none':'block',margin:'15px'}} onClick={() => {setClicked(true);setbarHide(true)}}></i>
    <i className="fa-solid fa-close" style={{display:barHide ? 'block':'none',margin:'15px'}} onClick={() => {setClicked(false);setbarHide(false)}}></i>  
        
    <Container onClick={() => {setClicked(false);setbarHide(false)}} style={{'marginLeft':clicked ? '150px':'0px'}}>
      <Row>
        <Col>
          <LineChart width={400} height={400} data={data} margin={{top:50}}>
            <Line type="monotone" dataKey="pv" stroke="#9e24c6" />
            <CartesianGrid stroke='#c6245a'/>
            <YAxis stroke='#00000'/>
            <XAxis dataKey="name" stroke='#00000'/>
          </LineChart>
          <p style={{'marginLeft':'150px'}}>Yesterday Revenue</p>
        </Col>
        <Col>
          <LineChart width={400} height={400} data={data} margin={{top:50}}>
            <Line type="monotone" dataKey="pv" stroke="#9e24c6" />
            <CartesianGrid stroke='#c6245a'/>
            <YAxis stroke='#00000'/>
            <XAxis dataKey="name" stroke='#00000'/>
            <Tooltip />
          </LineChart>
          <p style={{'marginLeft':'150px'}}>Yesterday Empression</p>
        </Col>
        <Col>
          <LineChart width={400} height={400} data={data} margin={{top:50}}>
            <Line type="monotone" dataKey="pv" stroke="#9e24c6" />
            <CartesianGrid stroke='#c6245a'/>
            <YAxis stroke='#00000'/>
            <XAxis dataKey="name" stroke='#00000'/>
            <Tooltip />
          </LineChart>
          <p style={{'marginLeft':'150px'}}>Yesterday ECPM</p>
        </Col>
    </Row>
    <Row>
        <Col>
          <LineChart width={400} height={400} data={data} margin={{top:50}}>
            <Line type="monotone" dataKey="pv" stroke="#9e24c6" />
            <CartesianGrid stroke='#c6245a'/>
            <YAxis stroke='#00000'/>
            <XAxis dataKey="name" stroke='#00000'/>
          </LineChart>
          <p style={{'marginLeft':'150px'}}>Monthly Revenue</p>
        </Col>
        <Col>
          <LineChart width={400} height={400} data={data} margin={{top:50}}>
            <Line type="monotone" dataKey="pv" stroke="#9e24c6" />
            <CartesianGrid stroke='#c6245a'/>
            <YAxis stroke='#00000'/>
            <XAxis dataKey="name" stroke='#00000'/>
            <Tooltip />
          </LineChart>
          <p style={{'marginLeft':'150px'}}>Monthly Empression</p>
        </Col>
        <Col>
          <LineChart width={400} height={400} data={data} margin={{top:50}}>
            <Line type="monotone" dataKey="pv" stroke="#9e24c6" />
            <CartesianGrid stroke='#c6245a'/>
            <YAxis stroke='#00000'/>
            <XAxis dataKey="name" stroke='#00000'/>
            <Tooltip />
          </LineChart>
          <p style={{'marginLeft':'150px'}}>Monthly ECPM</p>
        </Col>
    </Row>
    <BarChart width={730} height={250} data={data1}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" stroke='black' />
      <YAxis stroke='black'/>
      <Tooltip />
      <Bar dataKey="pv" fill="#9e24c6" />
    </BarChart>
    <p style={{'marginLeft':'150px'}}>Monthly Revenue</p>
  </Container>
    </>
    );
}