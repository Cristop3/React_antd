import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios.interceptors.request.use(function(config){
    return config
},function(err){
    return Promise.reject(err)
})

axios.interceptors.response.use(function(config){
    return config
},function(err){
    return Promise.reject(err)
})

export function fetch(url,params){
    return new Promise(function(resovle,reject){
        axios.post(url,params).then(function(res){
            resovle(res)
        }).catch(function(err){
            reject(err)
        })
    })
}

export default {
    getMockData(url,params){
        return fetch(url,params)
    }
}

