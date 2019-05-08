import React from 'react';
import {Layout,Icon} from 'antd';
import '../../style/layout/header.less';
const {Header} = Layout;


class header extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return (
            <Layout>
                <Header className = "header" style={{"backgroundColor":"#27408B"}}>
                    <div className="logo">Caristop3博客后台管理系统</div>
                    <div className="headerHandle">
                        <div className="userInfo"></div>
                        <div className="index"><Icon type="home" /></div>
                        <div className="logout"><Icon type="export" /></div>
                    </div>
                </Header>
            </Layout>
        )
    }
}
export default header
