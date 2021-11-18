//In here there will be a function (action) to add a headsup. It will call a function from the API file. 
import { postHead } from '../api'


//Thunks
export default function addHeads (headData) {
    return (dispatch) => {
        postHead(headData)
        .then((newId) => {
            console.log(newId)
        })
        .catch(error => console.log(error.message))
    }

}


export function viewHeads () {
    return null
    // return (dispatch) => {
    //     fetchAllHeads()
    //     .then((response) => {
    //         console.log(response)
    //     })
    //     .catch(error => console.log(error.message))
    // }

}