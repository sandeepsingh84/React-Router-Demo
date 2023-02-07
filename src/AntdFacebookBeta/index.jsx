/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect } from "react";
import SelectDesign from "./SelectDesign";
import { Form, Input, Button, Select, Divider, Row, Col } from "antd";
import { AliwangwangOutlined } from "@ant-design/icons";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import DatepickerAndInputNum from "./DatepickerAndInputNum";
import EditProfile from "./EditProfile";
import Home from "./Home"

const AntdDesign = () => {
  const [loginFinish, setLoginFinish] = useState();
  const [buttonOnOff, setButtonOnOff] = useState(true);
  const [editProfile, setEditProfile] = useState(false);
  console.log("editProfile :>> ", editProfile);
  const { Option } = Select;
  const [form] = Form.useForm();
  console.log(`form`, form);
  console.log(`loginFinish`, loginFinish);
  const onChange = (value) => {
    console.log(`onChange ${value}`);
  };
  const onSearch = (val) => {
    console.log(" Search:>> ", val);
  };
  const onSelect = (value) => {
    console.log(`Select ${value}`);
  };
  const onFinish = (values) => {
    console.log(`Success`, values);
    setLoginFinish(values);
    setButtonOnOff(false);
  };
  //Modal effects on DatepickerAndInputNum page
  const [isModelVisible, setIsModelVisible] = useState(false);
  console.log(`isModelVisible`, isModelVisible);
  const showModel = () => {
    setIsModelVisible(true);
  };
  const handleOk = () => {
    setIsModelVisible(false);
  };
  const handleCancle = () => {
    setIsModelVisible(false);
  };
  // useEffect(() => {
  //   form.setFieldsValue({
  //     Age: 10,
  //   });
  //   setIsModelVisible(true);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [editProfile]);

  // Modal effects on Edit profile page
  const [editProfileVisible, setEditProfileVisible] = useState(false);
  console.log(`editProfileVisible`, editProfileVisible);
  const showEditModal = () => {
    setEditProfileVisible(true);
  };

  const editHandleOk = () => {
    setEditProfileVisible(false);
  };

  const editHandleCancel = () => {
    setEditProfileVisible(false);
  };
  if (editProfile === true) {
    setIsModelVisible(true); //take another modal insted it will true the particular modal everywhere it is used
  }
  return (
    <Router>
      <div className="bg-blue-900 p-20 h-full py-60">
        <h1 className="bg-blue-900 flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            fill="currentColor"
            className="bi bi-facebook text-white  "
            viewBox="0 0 16 16"
          >
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
          </svg>
        </h1>
        {/* {signUpOnOff && ( */}
        <div className="flex justify-center mt-16">
          <Form
            hideRequiredMark
            autoComplete="off"
            name="basic"
            form={form}
            onFinish={onFinish}
            className=" w-1/4 "
          >
            <Form.Item
              className="font-bold"
              // label="Username"
              name="firstInput"
              rules={[
                {
                  required: true,
                  message: "Please enter username!",
                },
              ]}
            >
              <Input placeholder="Email or phone number" />
            </Form.Item>

            <Form.Item
              className="font-bold"
              // label="Password"
              name="secondInput"
              rules={[
                {
                  required: true,
                  message: "Please enter Password!",
                },
              ]}
            >
              <Input.Password placeholder="password" />
            </Form.Item>
            {buttonOnOff && (
              <Form.Item>
                <div className="flex justify-center">
                  {/* <Button type="primary" onClick={() => form?.submit()}>
                    Submit
                  </Button> */}
                  <Link to='./Home' className='text-black rounded-lg bg-gray-300 py-2 px-2' onClick={()=> form?.submit()}> Submit</Link>
                </div>
              </Form.Item>
            )}
            <Switch>
              <Route path='/Home'><Home/></Route>
            </Switch>
          </Form>
        </div>
        {/* )} */}

        {loginFinish && (
          <SelectDesign
            Button={Button}
            Form={Form}
            Select={Select}
            Option={Option}
            onChange={onChange}
            onSelect={onSelect}
            onFinish={onFinish}
            onSearch={onSearch}
            form={form}
            editProfile={editProfile}
            setEditProfile={setEditProfile}
            showEditModal={showEditModal}
          />
        )}

        <div className="flex justify-center text-center mt-40">
          <div className="">
            <Link
              // to={`/DatepickerAndInputNum/${isModelVisible}`}

              className="text-white"
              onClick={() => {
                showModel();
                // setSignUpOnOff(true);
              }}
            >
              <AliwangwangOutlined /> <Divider /> Sign Up for Facebook
            </Link>
            <p className="text-sm text-white">Forgot Password </p>
          </div>

          <DatepickerAndInputNum
            isModelVisible={isModelVisible}
            setIsModelVisible={setIsModelVisible}
            handleOk={handleOk}
            handleCancle={handleCancle}
            editProfile={editProfile}
            setEditProfile={setEditProfile}
          />

          <EditProfile
            editProfileVisible={editProfileVisible}
            setEditProfileVisible={setEditProfileVisible}
            showEditModal={showEditModal}
            editHandleOk={editHandleOk}
            editHandleCancel={editHandleCancel}
          />
        </div>
        {/* container mx-auto are tailwind classes
        <div className="container mx-auto">  
          <Row gutter={[24, 12]}>
            <Col className="border" span={12}>Col 1</Col>
            <Col className="border" span={12}>Col 2</Col>
          </Row>
        </div>
        <div className="container mx-auto">
        {/* 24 is full screen width (horizontal spacing)in a row and 12 (vertical spacing)is spacing between components whenever a page comes to smaller screens (responsive) */}
          {/* <Row gutter={[24,12]}>      
            <Col  xl={12} lg={12} md={12} sm={24} xs={24}><div className="border"> Col 1</div></Col>
            <Col  xl={12} lg={12} md={12} sm={24} xs={24} ><div className="border"> Col 2</div></Col>
          </Row>
        </div> */} 
      </div>
    </Router>
  );
};

export default AntdDesign;
