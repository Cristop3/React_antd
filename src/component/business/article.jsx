import React from 'react';
import {Tabs, Icon, Select, Input,Button,Pagination} from 'antd';
import '../../style/business/article.less';
import ArticleList from '../comps/article_list.jsx';

const TabPane = Tabs.TabPane;
const Option = Select.Option;

class Article extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }

    render(){
        return (
            <div className='articleContent'>
                <div className='articleSearch'>
                    <label>筛选：</label>
                    <Select style={{width:120,marginRight:'20px'}} placeholder="年">
                        <Option value='0'>不限</Option>
                        <Option value='2019'>2019</Option>
                        <Option value='2018'>2018</Option>
                        <Option value='2017'>2017</Option>
                        <Option value='2016'>2016</Option>
                    </Select>
                    <Select style={{width:120,marginRight:'20px'}} placeholder="月">
                        <Option value='0'>不限</Option>
                        <Option value='2019'>2019</Option>
                        <Option value='2019'>2018</Option>
                        <Option value='2019'>2017</Option>
                        <Option value='2019'>2016</Option>
                    </Select>
                    <Select style={{width:220,marginRight:'20px'}} placeholder="文章类型">
                        <Option value='0'>不限</Option>
                        <Option value='2019'>2019</Option>
                        <Option value='2019'>2018</Option>
                        <Option value='2019'>2017</Option>
                        <Option value='2019'>2016</Option>
                    </Select>
                    <Select style={{width:220,marginRight:'20px'}} placeholder="个人分类">
                        <Option value='0'>不限</Option>
                        <Option value='2019'>2019</Option>
                        <Option value='2019'>2018</Option>
                        <Option value='2019'>2017</Option>
                        <Option value='2019'>2016</Option>
                    </Select>
                    <Input placeholder='请输入标题关键字' style={{width:300,marginRight:'20px'}} />
                    <Button type='primary' icon="search">搜索</Button>
                </div>
                <Tabs size='large'>
                    <TabPane tab={<span><Icon type='apple' />全部</span>} key="1">
                        <ArticleList type="all"></ArticleList>
                    </TabPane>
                    <TabPane tab={<span><Icon type='android' />公开</span>} key='2'>
                        <ArticleList type="apublic"></ArticleList>
                    </TabPane>   
                    <TabPane tab={<span><Icon type='apple' />私密</span>} key="3">
                         <ArticleList type="aprivate"></ArticleList>
                    </TabPane>
                    <TabPane tab={<span><Icon type='android' />草稿</span>} key='4'>
                        <ArticleList type="adraft"></ArticleList>
                    </TabPane> 
                    <TabPane tab={<span><Icon type='android' />删除</span>} key='5'>
                        <ArticleList type="adelete"></ArticleList>
                    </TabPane> 
                </Tabs>

                {/* 分页 */}
                <div className='listContent-page'>
                    <Pagination defaultCurrent={1} total={50} /> 
                </div>
            </div>
        )
    }
}

export default Article