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
const DatepickerAndInputNum = ({
  isModelVisible,
  setIsModelVisible,
  handleOk,
  handleCancle,
  editProfile,
  setEditProfile,
}) => {
  const [componentSize, setComponentSize] = useState('default');
  console.log('componentSize :>> ', componentSize);
  const [momentDate, setMomentDate] = useState();
  console.log('momentDate :>> ', momentDate);
  const [form] = Form.useForm();
  const onFinish = (value) => {
    console.log('valueOnFinish :>> ', value);
  };
  const onChange = (value) => {
    console.log('onChange :>> ', value);
    setMomentDate(value);
    // console.log('moment :>> ', moment);
  };
  const onValuesChange = ({ size }) => {
    setComponentSize(size);
  };

  //Model effects functions and states defined in parent index page

  // const [isModelVisible, setIsModelVisible] = useState(false)

  // const showModel =()=>{
  //   setIsModelVisible(true)
  // }
  // const { condition } = useParams();
  // console.log(`condition`, condition)

  // Popconfirm effects
  const { success } = message;
  const confirm = (e) => {
    console.log(`confirmValue==>`, e);
    success(<p className=''>Signed Up Successfully!!</p>);
    form.resetFields();
    setIsModelVisible(false);
    setMomentDate('');
  };

  const cancel = (e) => {
    console.log(`cancelValue==>`, e);
    message.error('Signed up Aborted!!');
  };
  // useEffect(() => {
  //   form.setFieldsValue({
  //     Age: 10,
  //   });
  //   setIsModelVisible(true);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [editProfile]);

  return (
    <Modal
      style={{ right: 100 }}
      // centered
      title={
        <span className='mx-40 font-bold text-blue-700'>Create an Account</span>
      }
      visible={isModelVisible}
      // onOk={handleOk}
      onCancel={handleCancle}
      // className=''
      footer={[
        <div>
          {/* <a href='/index.jsx'>Already have an account? Login here</a> */}
          <Button type='link' onClick={() => setIsModelVisible(false)}>
            Already have an account? Login here
          </Button>
        </div>,
      ]}
      // footer={null}
      // backdrop={'static'}
      // forceRender={true}
      maskClosable={false}
      confirmLoading={true}
    >
      <div
        // style={{ backgroundImage: `url(${facebooklogin})` }}
        className='   py-10  '
      >
        <Form
          hideRequiredMark
          name='parentForm'
          form={form}
          onFinish={onFinish}
          // initialValues={{
          //   remember: false,
          // }}
          // labelCol={{
          //   span: 4,
          //   offset: 12,
          // }}

          // layout='horizontal'

          onValuesChange={onValuesChange}
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
              name='datePickerItem'
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
          {momentDate && (
            <Form.Item name='momentFormater' className=''>
              <div className='font-semibold text-gray-500'>
                {moment(momentDate?._d).format('MMMM Do YYYY, h:mm:ss a')}
              </div>
            </Form.Item>
          )}
          <div className='font-semibold text-blue-700'>
            Age
            <Form.Item
              // hideRequiredMark
              name='Age'
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
                  Sign Up
                </Button>
              </Popconfirm>
            </Form.Item>
          </div>
        </Form>
      </div>
    </Modal>
  );
};

export default DatepickerAndInputNum;
