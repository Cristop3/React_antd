import React from 'react';
import {Layout,Menu, Icon} from 'antd';
import {Link} from 'react-router-dom'
const {SubMenu} = Menu;
const {Sider} = Layout;

class Slider extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            collapsed:false,
            selectKeys:[this.props.selectKeys==='/app'?'/app/dashboard':this.props.selectKeys]
        }
    }

    onCollapse = (collapsed) => {
        this.setState({
            collapsed
        })
    }

    componentDidMount(){
    }

    render(){
        return (
            <div className ="mySlider">
                <Sider style={{height:'100%'}}
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                >
                    <Menu
                        defaultOpenKeys={['sub1','sub2']}
                        defaultSelectedKeys={this.state.selectKeys}
                        mode = "inline"
                        theme = 'dark'
                        inlineCollapsed={this.state.collapsed}
                    >
                        <Menu.Item key="/app/dashboard">
                            <Link to='/app/dashboard'>
                                <Icon type='pie-chart' />
                                <span>首页</span>
                            </Link>
                        </Menu.Item>
                        <SubMenu 
                            key="sub1" 
                            title = {<span><Icon type='mail' /><span>我的博客</span></span>}
                        >
                            <Menu.Item key="/app/article"><Link to='/app/article'>文章管理</Link></Menu.Item>
                            <Menu.Item key="/app/category"><Link to='/app/category'>类别管理</Link></Menu.Item>
                            <Menu.Item key="/app/column"><Link to='/app/column'>专栏管理</Link></Menu.Item>
                            <Menu.Item key="/app/comment"><Link to='/app/comment'>评论管理</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu 
                            key="sub2" 
                            title = {<span><Icon type='appstore' /><span>博客管理</span></span>}
                        >
                            <Menu.Item key="/app/modules"><Link to='/app/modules'>博客模块管理</Link></Menu.Item>
                            <Menu.Item key="/app/setafter"><Link to='/app/setafter'>博客设置(后台)</Link></Menu.Item>
                            <Menu.Item key="/app/setbefore"><Link to='/app/setbefore'>博客设置(前台)</Link></Menu.Item>
                            <Menu.Item key="/app/userinfo"><Link to='/app/userinfo'>个人中心</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
            </div>
        )
    }
}

export default Slider