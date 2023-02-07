import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import facebooklogin from '../images/facebooklogin.jpg'
import {
  DatePicker,
  Space,
  Form,
  InputNumber,
  Input,
  Button,
  Radio,
  Modal,
  Popconfirm,
  message,
} from 'antd';
import moment from 'moment';
const Editprofile = ({
  editProfileVisible,setEditProfileVisible,showEditModal,editHandleOk,editHandleCancel
}) => {
 
  const [momentDateEditProfile, setMomentDateEditProfile] = useState();
  console.log('momentDateEditProfile :>> ', momentDateEditProfile);
  const [form] = Form.useForm();
  const onFinish = (value) => {
    console.log('valueOnFinish :>> ', value);
  };
  const onChange = (value) => {
    console.log('onChange :>> ', value);
    setMomentDateEditProfile(value);
    // console.log('moment :>> ', moment);
  };
 
  //Model effects functions and states defined in parent index page


  // Popconfirm effects
  const { success } = message;
  const confirm = (e) => {
    console.log(`confirmValue==>`, e);
    success(<p className=''>Signed Up Successfully!!</p>);
    form.resetFields();
    setEditProfileVisible(false)
    setMomentDateEditProfile('');
  };

  const cancel = (e) => {
    console.log(`cancelValue==>`, e);
    message.error('Signed up Aborted!!');
  };
  useEffect(() => {
    form.setFieldsValue({
        AgeEditProfile:10,
        // datePickerItemEditProfile:"2021-04-10",
        IntroductionInputField: "i am a pseudo web developer"
    })
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Modal
      style={{ right: 100 }}
      // centered
      title={
        <span className=' font-bold text-blue-700 text-center'>Edit Profile</span>
      }
      visible={editProfileVisible}
      // onOk={handleOk}
      onCancel={editHandleCancel}
      // className=''
      footer={[
        <div>
          {/* <a href='/index.jsx'>Already have an account? Login here</a> */}
          <Button type='link' onClick={() => setEditProfileVisible(false)}>
            Already have an account? Login here
          </Button>
        </div>,
      ]}
    maskClosable={false}
      confirmLoading={true}
    >
      <div
        className='   py-10  '
      >
        <Form
          hideRequiredMark
          name='editparentForm'
          form={form}
          onFinish={onFinish}
          size='large'
        >
          {/* <Form.Item label='Form Size' name='size'>
            <Radio.Group>
              <Radio.Button value='small'>Small</Radio.Button>
              <Radio.Button value='default'>Default</Radio.Button>
              <Radio.Button value='large'>Large</Radio.Button>
            </Radio.Group>
          </Form.Item> */}
          <div className='font-semibold text-blue-700'>
            DOB
            <Form.Item
              // noStyle
              name='datePickerItemEditProfile'
              // label={<span className="mx-10">DOB</span>}

              // rules={[
              //   {
              //     required: true,
              //     message: 'Please select date of birth',
              //   },
              // ]}
            >
              <DatePicker onChange={onChange} style={{ width: '100%' }} />
            </Form.Item>
          </div>
          {momentDateEditProfile && (
            <Form.Item name='momentFormaterEditProfile' className=''>
              <div className='font-semibold text-gray-500'>
                {moment(momentDateEditProfile?._d).format('LLL')}
              </div>
            </Form.Item>
          )}
          <div className='font-semibold text-blue-700'>
            Age
            <Form.Item
              // hideRequiredMark
              name='AgeEditProfile'
              // label='Age'
              rules={[
                {
                  type: 'number',
                  min: 0,
                  max: 99,
                },
                // {
                //   required: true,
                //   message: 'Please Select Age!',
                // },
              ]}
            >
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
          </div>
          <div className='font-semibold text-blue-700'>
            Introduction
            <Form.Item
              name='IntroductionInputField'
              // label='Introduction'
              rules={[
                {
                  required: true,
                  message: 'Please give Intoduction!',
                },
              ]}
            >
              <Input.TextArea autoSize={{ maxRows: 12, minRows: 8 }} onResize />
            </Form.Item>
          </div>
          <div className='flex justify-center'>
            <Form.Item className=''>
              {/* popconfirm effects */}
              <Popconfirm
                title='Are you sure you want to Submit'
                onConfirm={confirm}
                onCancel={cancel}
                okText='yes'
                cancelText='cancel'
              >
                <Button type='primary' onClick={() => form?.submit()}>
                  Submit
                </Button>
              </Popconfirm>
            </Form.Item>
          </div>
        </Form>
      </div>
    </Modal>
  );
};

export default Editprofile;
