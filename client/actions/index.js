//In here there will be a function (action) to add a headsup. It will call a function from the API file. 
import { postHead } from '../api'
import { fetchAllHeads } from '../api'


//actions
export function saveHeads (heads) {
   // console.log(heads.body)
    return {
      type: "SAVE_ALL_HEADS",
      heads: heads.body
    }
  }


//Thunks
 export function addHeads (headData) {
    return (dispatch) => {
        postHead(headData)
        .then((newId) => {
            console.log(newId)
        })
        .catch(error => console.log(error.message))
    }

}


export function viewHeads () {
    return (dispatch) => {
        fetchAllHeads()
        .then(heads => {
            const action = saveHeads(heads)
            dispatch(action)
          })

        .catch(error => console.log(error.message))
    }

}

