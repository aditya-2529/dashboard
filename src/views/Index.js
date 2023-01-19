
import {Col, Row, Container,Nav, NavLink} from 'react-bootstrap'
import { LineChart, Line,CartesianGrid,XAxis,YAxis,Tooltip,BarChart,Legend,Bar} from 'recharts';
import { useState } from 'react';

import Header from "components/Headers/Header.js";
import { Card } from 'reactstrap';

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
const Index = () => {
  return (
    <>
      <Header />
      <Container>
      <Row>
        <Card style={{background:'#c5eddc',margin:'45px'}}>
          <Col>
            <LineChart width={400} height={400} data={data} margin={{top:50}}>
              <Line type="monotone" dataKey="pv" stroke="#9e24c6" />
              <CartesianGrid stroke='#c6245a'/>
              <YAxis stroke='#00000'/>
              <XAxis dataKey="name" stroke='#00000'/>
            </LineChart>
            <p style={{'marginLeft':'150px'}}>Yesterday Revenue</p>
          </Col>
        </Card>
        <Card style={{background:'#c5eddc',margin:'45px'}}>
        <Col>
          <LineChart width={400} height={400} data={data} margin={{top:50}}>
            <Line type="monotone" dataKey="pv" stroke="#9e24c6" />
            <CartesianGrid stroke='#c6245a'/>
            <YAxis stroke='#00000'/>
            <XAxis dataKey="name" stroke='#00000'/>
          </LineChart>
          <p style={{'marginLeft':'150px'}}>Yesterday Impression</p>
        </Col>
        </Card><Card style={{background:'#c5eddc',margin:'45px'}}>
        <Col>
          <LineChart width={400} height={400} data={data} margin={{top:50}}>
            <Line type="monotone" dataKey="pv" stroke="#9e24c6" />
            <CartesianGrid stroke='#c6245a'/>
            <YAxis stroke='#00000'/>
            <XAxis dataKey="name" stroke='#00000'/>
          </LineChart>
          <p style={{'marginLeft':'150px'}}>Yesterday ECPM</p>
        </Col>
        </Card>
        <Card style={{background:'#c5eddc',margin:'45px'}}>
          <Col>
            <BarChart width={400} height={400} data={data1} margin={{top:50}}>
              <Bar type="monotone" dataKey="pv" fill="#e0e0e0" />
              <CartesianGrid stroke='#c6245a'/>
              <YAxis stroke='#00000'/>
              <XAxis dataKey="name" stroke='#00000'/>
            </BarChart>
            <p style={{'marginLeft':'150px'}}>Monthly Revenue</p>
          </Col>
        </Card>
    </Row>
  </Container>
    </>
  );
};

export default Index;
