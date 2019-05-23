import React, {Component} from 'react';
import {
  Drawer,
  Button,
  Form,
  Input,
  Icon,
  Select,
  Row,
  Col,
  Table
} from 'antd';

const FormItem = Form.Item
const Option = Select.Option
const {TextArea} = Input
//需要为输入控件设置布局样式
const formItemLayout = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 14
  }
}

class StarsDrawer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: this.props.drawerVisible,
      childrenDrawer: false,
      defaultRowWidth: 24, //头层默认Row宽度
      defaultColWidth: 12,
      chooseData: {
        // name: '我是名字', zhNames: '我是中文名', originName: '123', aliasName: '123',
        // birthPlace: '123', country: '123', constellation: '123', gender: '123',
        // blood: '123', occupation:'', description:'',
      },
      dataSource: {
        // name: 'lijiaxin', zhNames: '123', originName: '123', aliasName: '123',
        // birthPlace: '123', country: '123', constellation: '123', gender: '1', blood:
        // '123', occupation:'123', description:'123',
      },
      oldDataSource: {
        name: 'lijiaxin',
        zhNames: '123',
        originName: '123',
        aliasName: '123',
        birthPlace: '123',
        country: '123',
        constellation: '123',
        gender: '123',
        blood: '123',
        occupation: '',
        description: ''
      },
      changeStatus: {
        name: false,
        zhNames: false,
        originName: false,
        aliasName: false,
        birthPlace: false,
        country: false,
        constellation: false,
        gender: false,
        blood: false,
        occupation: false,
        description: false
      }
    }
  }

  showDrawer = () => {
    this.setState({visible: true});
  };

  onClose = () => {
    this.setState({visible: false});
    this
      .props
      .onClose()
  };

  showChildrenDrawer = () => {
    this.setState({childrenDrawer: true});
  };

  onChildrenDrawerClose = () => {
    this.setState({childrenDrawer: false});
  };

  onChildrenClose = () => {
    this.setState({defaultRowWidth: 12, defaultColWidth: 24})
    this.setState({childrenDrawer: false});
  }

  move = (field, type) => {
    const obj = {}

    if (type === 'back') {
      obj[field] = this.state.oldDataSource[field]
      
    } else {
      obj[field] = this.state.chooseData[field]
    }
    debugger
    //TODO

    const obj2 = {}
    obj2[field] = !this.state.changeStatus[field]
    const dataSources = this.state.dataSource
    const changeStatues = this.state.changeStatus
    this.setState({
      dataSource: {
        ...dataSources,
        ...obj
      },
      changeStatus: {
        ...changeStatues,
        ...obj2
      }
    },()=>{
      debugger
    })
  }

  //选中爬虫数据
  chooseData = (record) => {
    this.setState({
      chooseData: {
        ...record
      }
    })
    this.setState({defaultRowWidth: 12, defaultColWidth: 24})
    this.setState({childrenDrawer: false});
  }

  //一键赋值
  oneKey = () => {
    //值
    const allChoose = this.state.chooseData
    this.setState({
      dataSource:{...allChoose}
    })

    //状态
    const allStatus = this.state.changeStatus
    for (let key in allStatus){
      allStatus[key] = true
    }
    this.setState({
      changeStatus:{...allStatus}
    })
  }

  render() {
    // const {curItem={}, modalType, visible} = this.props.modal
    const curItem = this.state.dataSource
    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        show: true,
        render: text => <div title={text}>{text}</div>
      }, {
        title: '操作',
        key: 'operation',
        show: true,
        except: true,
        render: (text, record) => (
          <Button
            type='link'
            onClick={this
            .chooseData
            .bind(this, record)}>确定</Button>
        )
      }
    ]

    const {chooseData} = this.state

    //home
    const dataxSource = [
      {
        key: '1',
        name: '华为',
        zhNames: '中文名',
        originName: '外文名',
        aliasName: '别名',
        birthPlace: '出生地',
        country: '国家',
        constellation: '实施',
        gender: '1',
        blood: 'A',
        occupation: '123',
        description: '213'
      }, {
        key: '2',
        name: '中兴',
        zhNames: '中文名',
        originName: '爽肤水',
        aliasName: '身份',
        birthPlace: '热污染无',
        country: '绕弯儿无',
        constellation: '绕弯儿无',
        gender: '2',
        blood: 'B',
        occupation: 'pkg',
        description: '对方'
      }
    ];

    const columnss = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name'
      }, {
        title: '年龄',
        dataIndex: 'zhNames',
        key: 'zhNames'
      }, {
        title: '操作',
        dataIndex: 'address',
        key: 'address',
        render: (text, record) => {
          return (
            <Button
              onClick={this
              .chooseData
              .bind(this, record)}>确认</Button>
          )
        }
      }
    ];


    let dsColumns = [
        {'field':'name','label':'名字'},
        {'field':'zhNames','label':'中文名'},
        {'field':'originName','label':'外文名'},
        {'field':'aliasName','label':'别名'},
        {'field':'birthPlace','label':'出生地'},
        {'field':'country','label':'国家'},
        {'field':'constellation','label':'星座'},
        {'field':'gender','label':'性别'},
        {'field':'blood','label':'血型'},
        {'field':'occupation','label':'职业'},
        {'field':'description','label':'简介'}
    ]
    //home

    return (
      <div>
        <Drawer
          title="添加明星"
          width={820}
          closable={false}
          onClose={this.onClose}
          maskClosable={false}
          visible={this.state.visible}>
          <Row gutter='24'>
            <Col lg={12} offset={20}>
              <Button type='link' onClick={this.oneKey.bind(this)}>一键赋值</Button>
            </Col>
          </Row>
          {/* 头层基础数据 */}
          <Row gutter='12'>
            {/* 表单数据 */}
            <Col lg={this.state.defaultRowWidth}>
              <Form>
                <Row gutter={24}>
                  <Col lg={24} md={24} sm={24}>
                    <Col lg={this.state.defaultColWidth} md={12} sm={24}>
                      <FormItem label='名字' hasFeedback {...formItemLayout}>
                        {this
                          .props
                          .form
                          .getFieldDecorator('name', {
                            initialValue: this.state.dataSource.name,
                            rules: [
                              {
                                required: true,
                                message: '名字不能为空'
                              }
                            ]
                          })(<Input placeholder='名字'/>)
}
                      </FormItem>
                    </Col>
                    <Col lg={this.state.defaultColWidth} md={12} sm={24}>
                      <FormItem label='中文名' hasFeedback {...formItemLayout}>
                        {this
                          .props
                          .form
                          .getFieldDecorator('zhNames', {initialValue: this.state.dataSource.zhNames})(<Input placeholder='中文名'/>)
}
                      </FormItem>
                    </Col>
                  </Col>
                  <Col lg={24} md={24} sm={24}>
                    <Col lg={this.state.defaultColWidth} md={12} sm={24}>
                      <FormItem label="外文名：" hasFeedback {...formItemLayout}>
                        {this
                          .props
                          .form
                          .getFieldDecorator('originName ', {initialValue: curItem.originName})(<Input placeholder='外文名'/>)}
                      </FormItem>
                    </Col>
                    <Col lg={this.state.defaultColWidth} md={12} sm={24}>
                      <FormItem label="别名：" hasFeedback {...formItemLayout}>
                        {this
                          .props
                          .form
                          .getFieldDecorator('aliasName ', {initialValue: curItem.aliasName})(<Input placeholder='别名'/>)}
                      </FormItem>
                    </Col>
                  </Col>
                  <Col lg={24} md={24} sm={24}>
                    <Col lg={this.state.defaultColWidth} md={12} sm={24}>
                      <FormItem label="出生地：" hasFeedback {...formItemLayout}>
                        {this
                          .props
                          .form
                          .getFieldDecorator('birthPlace ', {initialValue: curItem.birthPlace})(<Input placeholder='出生地'/>)}
                      </FormItem>
                    </Col>
                    <Col lg={this.state.defaultColWidth} md={12} sm={24}>
                      <FormItem label="国家：" hasFeedback {...formItemLayout}>
                        {this
                          .props
                          .form
                          .getFieldDecorator('country ', {initialValue: curItem.country})(<Input placeholder='国家'/>)}
                      </FormItem>
                    </Col>
                  </Col>
                  <Col lg={24} md={24} sm={24}>
                    <Col lg={this.state.defaultColWidth} md={12} sm={24}>
                      <FormItem label="星座：" hasFeedback {...formItemLayout}>
                        {this
                          .props
                          .form
                          .getFieldDecorator('constellation', {initialValue: curItem.constellation})(<Input placeholder='星座'/>)}
                      </FormItem>
                    </Col>
                    <Col lg={this.state.defaultColWidth} md={12} sm={24}>
                      <FormItem label="性别：" hasFeedback {...formItemLayout}>
                        {this
                          .props
                          .form
                          .getFieldDecorator('gender', {
                            initialValue: curItem.gender
                              ? String(curItem.gender)
                              : '3'
                          })(
                            <Select placeholder="性别：">
                              <Option key={1} value='1'>男</Option>
                              <Option key={2} value='2'>女</Option>
                              <Option key={3} value='3'>未知</Option>
                            </Select>
                          )}
                      </FormItem>
                    </Col>
                  </Col>
                  <Col lg={24} md={24} sm={24}>
                    <Col lg={this.state.defaultColWidth} md={12} sm={24}>
                      <FormItem label="血型：" hasFeedback {...formItemLayout}>
                        {this
                          .props
                          .form
                          .getFieldDecorator('blood', {initialValue: curItem.blood})(<Input placeholder='血型'/>)}
                      </FormItem>
                    </Col>
                    <Col lg={this.state.defaultColWidth} md={12} sm={24}>
                      <FormItem label="职业：" hasFeedback {...formItemLayout}>
                        {this
                          .props
                          .form
                          .getFieldDecorator('occupation', {initialValue: curItem.occupation})(<Input placeholder='职业'/>)}
                      </FormItem>
                    </Col>
                  </Col>
                  <Col lg={24} md={24} sm={24}>
                    <Col lg={this.state.defaultColWidth} md={12} sm={24}>
                      <FormItem label="头像：" {...formItemLayout}></FormItem>
                    </Col>
                    <Col lg={this.state.defaultColWidth} md={12} sm={24}>

                      <FormItem label="简介：" {...formItemLayout}>
                        {this
                          .props
                          .form
                          .getFieldDecorator('description', {initialValue: curItem.description})(<TextArea autosize placeholder='简介'/>)}
                      </FormItem>
                    </Col>
                  </Col>
                </Row>
              </Form>
            </Col>
            {/* 状态 */}
            <Col lg={this.state.defaultRowWidth == 24
              ? 0
              : 2}>
              <Row gutter={24}>
                {
                  dsColumns.map((item) => {
                    return (
                      <Col lg={24}>
                        <FormItem {...formItemLayout} name={item}>
                          {!this.state.changeStatus[item.field]
                            ? <Button
                                type="primary"
                                shape="circle"
                                icon="left"
                                onClick={this
                                .move
                                .bind(this, item.field)}/>
                            : <Button
                              shape="circle"
                              icon="reload"
                              onClick={this
                              .move
                              .bind(this, item.field, 'back')}/>}
                        </FormItem>
                      </Col>
                    )
                  })
                }
                
              </Row>
            </Col>
            {/* 爬虫值 */}
            <Col
              lg={this.state.defaultRowWidth == 24
              ? 0
              : (22 - this.state.defaultRowWidth)}>
              <Row gutter={24}>
                {
                  dsColumns.map((item)=>{
                    return (
                      <Col lg={24}>
                        <Col lg={24} md={12} sm={24}>
                          <FormItem label={item.label} hasFeedback {...formItemLayout}>
                            {chooseData[item.field]}
                          </FormItem>
                        </Col>
                      </Col>
                    )
                  })
                }
                
              </Row>
            </Col>
          </Row>
          {/* 二层接爬虫数据 */}
          <Drawer
            title="云端数据"
            width={620}
            closable={false}
            onClose={this.onChildrenDrawerClose}
            visible={this.state.childrenDrawer}>
            <Table dataSource={dataxSource} columns={columnss}/>
            <div
              style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              borderTop: '1px solid #e8e8e8',
              padding: '10px 16px',
              textAlign: 'right',
              left: 0,
              background: '#fff',
              borderRadius: '0 0 4px 4px'
            }}>
              <Button onClick={this.onChildrenClose} type="primary">
                确定
              </Button>
            </div>
          </Drawer>
          <div
            style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            borderTop: '1px solid #e8e8e8',
            padding: '10px 16px',
            textAlign: 'right',
            left: 0,
            background: '#fff',
            borderRadius: '0 0 4px 4px'
          }}>
            <Button
              style={{
              marginRight: 8
            }}
              onClick={this.showChildrenDrawer}
              type="primary">
              获取云端数据
            </Button>
            <Button
              style={{
              marginRight: 8
            }}
              onClick={this.onClose}>
              取消
            </Button>
            <Button onClick={this.onClose} type="primary">
              确定
            </Button>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default Form.create({
  onValuesChange(props, changedValues, allValues){
    

  }
})(StarsDrawer)