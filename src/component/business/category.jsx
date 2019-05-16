import React from 'react';
import '../../style/business/category.less'
import {
  Input,
  Button,
  Table,
  InputNumber,
  Popconfirm,
  Form,
  Switch,
  Icon
} from 'antd'

import axios from '../../axios/axios';

class Category extends React.Component {
  constructor(props) {
    super(props)
    this.state = {dataCategory:[]}
  }

  componentDidMount = () => {
    
  }

  render() {
    return (
      <div className='categoryContent'>
        <div>
          <Input
            placeholder='请输入分类名字'
            style={{
            width: 300,
            marginRight: '20px'
          }}/>
          <Button type='primary'>添加分类</Button>
        </div>
        <div className='categoryList'>
            <EditableFormTable />
        </div>
      </div>
    )
  }
}

const EditableContext = React.createContext();

class EditableCell extends React.Component {
  getInput = () => {
    if (this.props.inputType === 'number') {
      return <InputNumber />;
    }
    return <Input />;
  };

  renderCell = ({ getFieldDecorator }) => {
    const {
      editing,
      dataIndex,
      title,
      inputType,
      record,
      index,
      children,
      ...restProps
    } = this.props;
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item style={{ margin: 0 }}>
            {getFieldDecorator(dataIndex, {
              rules: [
                {
                  required: true,
                  message: `Please Input ${title}!`,
                },
              ],
              initialValue: record[dataIndex],
            })(this.getInput())}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };

  render() {
    return <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>;
  }
}

class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data:[], editingKey: '' };
    this.columns = [
      {
        title: '类别',
        dataIndex: 'categoryName',
        width: '50%',
        editable: true,
      },
      {
        title: '文章数',
        dataIndex: 'articleNum',
        align:'center',
        width: '5%',
        editable: false,
      },
      {
        title: '前台是否显示',
        dataIndex: 'isShow',
        align:'center',
        width: '10%',
        editable: false,
        render:(text,record) => {
            return (
                <Switch
                    checkedChildren={<Icon type="check" />}
                    unCheckedChildren={<Icon type="close" />}
                    defaultChecked={text}
                />
            )
        }
      },
      {
        title: '操作',
        align:'center',
        dataIndex: 'operation',
        render: (text, record) => {
          const { editingKey } = this.state;
          const editable = this.isEditing(record);
          return editable ? (
            <span>
              <EditableContext.Consumer>
                {form => (
                  <a
                    href="javascript:;"
                    onClick={() => this.save(form, record.key)}
                    style={{ marginRight: 8 }}
                  >
                    Save
                  </a>
                )}
              </EditableContext.Consumer>
              <Popconfirm title="Sure to cancel?" onConfirm={() => this.cancel(record.key)}>
                <a>Cancel</a>
              </Popconfirm>
            </span>
          ) : (
            <span>
                <Button type='link' disabled={editingKey !== ''} onClick={() => this.edit(record.key)}>置顶</Button>
                <Button type='link' disabled={editingKey !== ''} onClick={() => this.edit(record.key)}>编辑</Button>
                <Button type='link' disabled={editingKey !== ''} onClick={() => this.edit(record.key)}>上移</Button>
                <Button type='link' disabled={editingKey !== ''} onClick={() => this.edit(record.key)}>下移</Button>
                <Button type='link' disabled={editingKey !== ''} onClick={() => this.edit(record.key)} style={{color:'red'}}>删除</Button>
            </span>
          );
        },
      },
    ];
  }

  componentDidMount  = () => {
    let _this = this
    axios.getMockData('/rest/category').then(function(res){
        _this.setState({data:res.data})
    }).catch(function(err){
        console.log(err)
    })
  }

  isEditing = record => record.key === this.state.editingKey;

  cancel = () => {
    this.setState({ editingKey: '' });
  };

  save(form, key) {
    form.validateFields((error, row) => {
      if (error) {
        return;
      }
      const newData = [...this.state.data];
      const index = newData.findIndex(item => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        this.setState({ data: newData, editingKey: '' });
      } else {
        newData.push(row);
        this.setState({ data: newData, editingKey: '' });
      }
    });
  }

  edit(key) {
    this.setState({ editingKey: key });
  }

  render() {
    const components = {
      body: {
        cell: EditableCell,
      },
    };

    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          inputType: col.dataIndex === 'age' ? 'number' : 'text',
          dataIndex: col.dataIndex,
          title: col.title,
          editing: this.isEditing(record),
        }),
      };
    });

    return (
      <EditableContext.Provider value={this.props.form}>
        <Table
          components={components}
          bordered
          dataSource={this.state.data}
          columns={columns}
          rowClassName="editable-row"
          pagination={false}
        />
      </EditableContext.Provider>
    );
  }
}

const EditableFormTable = Form.create()(EditableTable);

export default Category