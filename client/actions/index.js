//In here there will be a function (action) to add a headsup. It will call a function from the API file. 
import postHead from '../api'


//Thunks
export default  addHeads = (headData) => {
    return (dispatch) => {
        postHead(headData)
        .then(newId => {
            console.log(newId)
        })
    }

}