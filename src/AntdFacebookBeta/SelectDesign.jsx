import React from 'react';
// import { Button, Form, Select } from 'antd';   <== Imported in main parent component page

const SelectDesign = ({
  Button,
  Form,
  Select,
  Option,
  onChange,
  onSelect,
  onFinish,
  onSearch,
  form,
  showEditModal
}) => {
  // Functions declared in parent component page

  // const { Option } = Select;
  // const [form] = Form.useForm();

  // const onChange = (value) => {
  //   console.log(`onChange ${value}`);
  // };
  // const onSearch = (val) => {
  //   console.log(' Search:>> ', val);
  // };
  // const onSelect = (value) => {
  //   console.log(`Select ${value}`);
  // };
  // const onFinish = (values) => {
  //   console.log(`Success`, values);
  // };
  return (
    <div className='flex justify-center'>
      <Form
        form={form}
        onFinish={onFinish}
        name='formItems'
        className=' w-1/4 '
      >
        <Form.Item
          name='DropDown-select'
          rules={[
            {
              required: true,
              message: 'Please select atleast one person!',
            },
          ]}
        >
          <Select
            showSearch
            placeholder='select a person'
            onChange={onChange}
            onSearch={onSearch}
            onSelect={onSelect}
            name='Select drop down'
          >
            <Option value='Sandeep'>Sandeep</Option>
            <Option value='Gurpreet'>Gurpreet</Option>
            <Option value='Prince'>Prince</Option>
            <Option value='Gurbir'>Gurbir</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <div className='flex justify-center'>
            <Button type='primary' onClick={() => form?.submit()}>
              Submit
            </Button>
          </div>
        </Form.Item>
        <Form.Item>
          <div className='flex justify-center'>
            <Button type='primary' onClick={() => showEditModal()}>
              Edit profile
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SelectDesign;
