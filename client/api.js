//In here there will be a post to a route. Superagent is used here. It passes the data over the internet and when it hits server.js it will figure 
//out what to do with this
import request from 'superagent'


export function fetchAllHeads () {
    const headsUpData = {
        key: "value"
    }
  return headsUpData
    // .catch()
}

export function postHead (headData) {
    console.log('api request', headData)
    return request.post('/api/v1/heads')
    .send(headData)
    .then(res => { console.log('api response', res.body)
        res.body.newId})
}