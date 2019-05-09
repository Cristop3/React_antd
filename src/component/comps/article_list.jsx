import React from 'react';
import '../../style/comps/article_list.less';
import { Icon,Button,Divider,Badge} from 'antd';

//构造数据
const json = [
    {
        title:'我是标题1',
        type:'原创',
        time:'2019-05-08 11:46:50',
        read:'11',
        comment:'0',
        articleType:'1',
        id:'1'
    },
    {
        title:'我是标题2',
        type:'原创',
        time:'2019-05-08 11:46:50',
        read:'11',
        comment:'0',
        articleType:'1',
        id:'2'
    },
    {
        title:'我是标题2',
        type:'原创',
        time:'2019-05-08 11:46:50',
        read:'11',
        comment:'0',
        articleType:'1',
        id:'3'
    },
    {
        title:'我是标题3',
        type:'原创',
        time:'2019-05-08 11:46:50',
        read:'11',
        articleType:'1',
        comment:'0',
        id:'4'
    },
    {
        title:'我是标题4',
        type:'原创',
        time:'2019-05-08 11:46:50',
        read:'11',
        comment:'0',
        articleType:'1',
        id:'5'
    },
    {
        title:'我是标题5',
        type:'原创',
        time:'2019-05-08 11:46:50',
        read:'11',
        comment:'0',
        articleType:'1',
        id:'6'
    },
    {
        title:'我是标题6',
        type:'原创',
        time:'2019-05-08 11:46:50',
        read:'11',
        comment:'0',
        articleType:'1',
        id:'7'
    }
]

class ArticleList extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }

    render(){
        return (
            <div className='listContent'>
                <div className='singleArt-item'>
                    <div className='singleArt-item-title'>
                        <Badge count={1} style={{ backgroundColor: '#40a9ff' }} />
                        <p className='singleArt-item-title-txt'>我是标题</p>
                    </div>
                    <div className='singleArt-item-info'>
                        <div className='singleArt-item-info-left'>
                            <span>原创</span>
                            <span>2019-05-08 11:46:50</span>
                            <span><Icon type='mail' style={{width:17,height:17}} />11</span>
                            <span><Icon type='mail' style={{width:17,height:17}} />0</span>
                        </div>
                        <div className='singleArt-item-info-handle'>
                            <Button type="link">查看</Button>
                            <Divider type='vertical'  />
                            <Button type="link">禁止评论</Button>
                            <Divider type='vertical'  />
                            <Button type="link">置顶</Button>
                            <Divider type='vertical'  />
                            <Button type="link" style={{color:'red'}}>删除</Button>
                        </div>
                    </div>
                </div>
                <div className='singleArt-item'>
                    <div className='singleArt-item-title'>
                        <Badge count={1} style={{ backgroundColor: '#40a9ff' }} />
                        <p className='singleArt-item-title-txt'>我是标题</p>
                    </div>
                    <div className='singleArt-item-info'>
                        <div className='singleArt-item-info-left'>
                            <span>原创</span>
                            <span>2019-05-08 11:46:50</span>
                            <span><Icon type='mail' style={{width:17,height:17}} />11</span>
                            <span><Icon type='mail' style={{width:17,height:17}} />0</span>
                        </div>
                        <div className='singleArt-item-info-handle'>
                            <Button type="link">查看</Button>
                            <Divider type='vertical'  />
                            <Button type="link">禁止评论</Button>
                            <Divider type='vertical'  />
                            <Button type="link">置顶</Button>
                            <Divider type='vertical'  />
                            <Button type="link" style={{color:'red'}}>删除</Button>
                        </div>
                    </div>
                </div>
                <div className='singleArt-item'>
                    <div className='singleArt-item-title'>
                        <Badge count={1} style={{ backgroundColor: '#40a9ff' }} />
                        <p className='singleArt-item-title-txt'>我是标题</p>
                    </div>
                    <div className='singleArt-item-info'>
                        <div className='singleArt-item-info-left'>
                            <span>原创</span>
                            <span>2019-05-08 11:46:50</span>
                            <span><Icon type='mail' style={{width:17,height:17}} />11</span>
                            <span><Icon type='mail' style={{width:17,height:17}} />0</span>
                        </div>
                        <div className='singleArt-item-info-handle'>
                            <Button type="link">查看</Button>
                            <Divider type='vertical'  />
                            <Button type="link">禁止评论</Button>
                            <Divider type='vertical'  />
                            <Button type="link">置顶</Button>
                            <Divider type='vertical'  />
                            <Button type="link" style={{color:'red'}}>删除</Button>
                        </div>
                    </div>
                </div>
                <div className='singleArt-item'>
                    <div className='singleArt-item-title'>
                        <Badge count={1} style={{ backgroundColor: '#40a9ff' }} />
                        <p className='singleArt-item-title-txt'>我是标题</p>
                    </div>
                    <div className='singleArt-item-info'>
                        <div className='singleArt-item-info-left'>
                            <span>原创</span>
                            <span>2019-05-08 11:46:50</span>
                            <span><Icon type='mail' style={{width:17,height:17}} />11</span>
                            <span><Icon type='mail' style={{width:17,height:17}} />0</span>
                        </div>
                        <div className='singleArt-item-info-handle'>
                            <Button type="link">查看</Button>
                            <Divider type='vertical'  />
                            <Button type="link">禁止评论</Button>
                            <Divider type='vertical'  />
                            <Button type="link">置顶</Button>
                            <Divider type='vertical'  />
                            <Button type="link" style={{color:'red'}}>删除</Button>
                        </div>
                    </div>
                </div>
                <div className='singleArt-item'>
                    <div className='singleArt-item-title'>
                        <Badge count={1} style={{ backgroundColor: '#40a9ff' }} />
                        <p className='singleArt-item-title-txt'>我是标题</p>
                    </div>
                    <div className='singleArt-item-info'>
                        <div className='singleArt-item-info-left'>
                            <span>原创</span>
                            <span>2019-05-08 11:46:50</span>
                            <span><Icon type='mail' style={{width:17,height:17}} />11</span>
                            <span><Icon type='mail' style={{width:17,height:17}} />0</span>
                        </div>
                        <div className='singleArt-item-info-handle'>
                            <Button type="link">查看</Button>
                            <Divider type='vertical'  />
                            <Button type="link">禁止评论</Button>
                            <Divider type='vertical'  />
                            <Button type="link">置顶</Button>
                            <Divider type='vertical'  />
                            <Button type="link" style={{color:'red'}}>删除</Button>
                        </div>
                    </div>
                </div>
                <div className='singleArt-item'>
                    <div className='singleArt-item-title'>
                        <Badge count={1} style={{ backgroundColor: '#40a9ff' }} />
                        <p className='singleArt-item-title-txt'>我是标题</p>
                    </div>
                    <div className='singleArt-item-info'>
                        <div className='singleArt-item-info-left'>
                            <span>原创</span>
                            <span>2019-05-08 11:46:50</span>
                            <span><Icon type='mail' style={{width:17,height:17}} />11</span>
                            <span><Icon type='mail' style={{width:17,height:17}} />0</span>
                        </div>
                        <div className='singleArt-item-info-handle'>
                            <Button type="link">查看</Button>
                            <Divider type='vertical'  />
                            <Button type="link">禁止评论</Button>
                            <Divider type='vertical'  />
                            <Button type="link">置顶</Button>
                            <Divider type='vertical'  />
                            <Button type="link" style={{color:'red'}}>删除</Button>
                        </div>
                    </div>
                </div>
                <div className='singleArt-item'>
                    <div className='singleArt-item-title'>
                        <Badge count={1} style={{ backgroundColor: '#40a9ff' }} />
                        <p className='singleArt-item-title-txt'>我是标题</p>
                    </div>
                    <div className='singleArt-item-info'>
                        <div className='singleArt-item-info-left'>
                            <span>原创</span>
                            <span>2019-05-08 11:46:50</span>
                            <span><Icon type='mail' style={{width:17,height:17}} />11</span>
                            <span><Icon type='mail' style={{width:17,height:17}} />0</span>
                        </div>
                        <div className='singleArt-item-info-handle'>
                            <Button type="link">查看</Button>
                            <Divider type='vertical'  />
                            <Button type="link">禁止评论</Button>
                            <Divider type='vertical'  />
                            <Button type="link">置顶</Button>
                            <Divider type='vertical'  />
                            <Button type="link" style={{color:'red'}}>删除</Button>
                        </div>
                    </div>
                </div>
                <div className='singleArt-item'>
                    <div className='singleArt-item-title'>
                        <Badge count={1} style={{ backgroundColor: '#40a9ff' }} />
                        <p className='singleArt-item-title-txt'>我是标题</p>
                    </div>
                    <div className='singleArt-item-info'>
                        <div className='singleArt-item-info-left'>
                            <span>原创</span>
                            <span>2019-05-08 11:46:50</span>
                            <span><Icon type='mail' style={{width:17,height:17}} />11</span>
                            <span><Icon type='mail' style={{width:17,height:17}} />0</span>
                        </div>
                        <div className='singleArt-item-info-handle'>
                            <Button type="link">查看</Button>
                            <Divider type='vertical'  />
                            <Button type="link">禁止评论</Button>
                            <Divider type='vertical'  />
                            <Button type="link">置顶</Button>
                            <Divider type='vertical'  />
                            <Button type="link" style={{color:'red'}}>删除</Button>
                        </div>
                    </div>
                </div>
                <div className='singleArt-item'>
                    <div className='singleArt-item-title'>
                        <Badge count={1} style={{ backgroundColor: '#40a9ff' }} />
                        <p className='singleArt-item-title-txt'>我是标题</p>
                    </div>
                    <div className='singleArt-item-info'>
                        <div className='singleArt-item-info-left'>
                            <span>原创</span>
                            <span>2019-05-08 11:46:50</span>
                            <span><Icon type='mail' style={{width:17,height:17}} />11</span>
                            <span><Icon type='mail' style={{width:17,height:17}} />0</span>
                        </div>
                        <div className='singleArt-item-info-handle'>
                            <Button type="link">查看</Button>
                            <Divider type='vertical'  />
                            <Button type="link">禁止评论</Button>
                            <Divider type='vertical'  />
                            <Button type="link">置顶</Button>
                            <Divider type='vertical'  />
                            <Button type="link" style={{color:'red'}}>删除</Button>
                        </div>
                    </div>
                </div>
                <div className='singleArt-item'>
                    <div className='singleArt-item-title'>
                        <Badge count={1} style={{ backgroundColor: '#40a9ff' }} />
                        <p className='singleArt-item-title-txt'>我是标题</p>
                    </div>
                    <div className='singleArt-item-info'>
                        <div className='singleArt-item-info-left'>
                            <span>原创</span>
                            <span>2019-05-08 11:46:50</span>
                            <span><Icon type='mail' style={{width:17,height:17}} />11</span>
                            <span><Icon type='mail' style={{width:17,height:17}} />0</span>
                        </div>
                        <div className='singleArt-item-info-handle'>
                            <Button type="link">查看</Button>
                            <Divider type='vertical'  />
                            <Button type="link">禁止评论</Button>
                            <Divider type='vertical'  />
                            <Button type="link">置顶</Button>
                            <Divider type='vertical'  />
                            <Button type="link" style={{color:'red'}}>删除</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ArticleList