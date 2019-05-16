import React from 'react';
import {Card } from 'antd';

class Article extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }

    render(){
        return (
            <div className='commentContent'>
                <Card title="我的评论">
                    <Card type="inner" title="匿名用户1评论" extra={<a href="#">删除</a>}>
                        javascript
                    </Card>
                    <Card style={{ marginTop: 16 }}
                    type="inner"
                    title="匿名用户2评论"
                    extra={<a href="#">删除</a>}
                    >
                        react
                    </Card>
                    <Card style={{ marginTop: 16 }}
                    type="inner"
                    title="匿名用户3评论"
                    extra={<a href="#">删除</a>}
                    >
                        react
                    </Card>
                    <Card style={{ marginTop: 16 }}
                    type="inner"
                    title="匿名用户4评论"
                    extra={<a href="#">删除</a>}
                    >
                        react
                    </Card>
                    <Card style={{ marginTop: 16 }}
                    type="inner"
                    title="匿名用户5评论"
                    extra={<a href="#">删除</a>}
                    >
                        react
                    </Card>
                    <Card style={{ marginTop: 16 }}
                    type="inner"
                    title="匿名用户6评论"
                    extra={<a href="#">删除</a>}
                    >
                        react
                    </Card>

                </Card>
            </div>
        )
    }
}

export default Article