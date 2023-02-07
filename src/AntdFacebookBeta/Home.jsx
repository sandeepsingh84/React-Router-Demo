import React from "react";
import { Form, Input, Button, Select, Divider, Row, Col } from "antd";
const Home = () => {
    return(<div className="bg-blue-900 h-90 py-60">
  <div className="container mx-auto text-center">
    <Row gutter={[24, 12]}>
      <Col className="border" span={12}>
        <div>col1</div>
      </Col>
      <Col className="border" span={12}> 
        <div>col2</div>
      </Col>
    </Row>
  </div>
  <div className="container mx-auto">
  <Row gutter={[24,12]}>      
            <Col  xl={12} lg={12} md={12} sm={24} xs={24}><div className="border"> Col 3</div></Col>
            <Col  xl={12} lg={12} md={12} sm={24} xs={24} ><div className="border"> Col 4</div></Col>
          </Row>
  </div>
  </div>
    );
};
export default Home;
