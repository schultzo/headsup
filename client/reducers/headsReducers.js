
function headsReducers (state = [], action) {
  console.log(action.heads)
  switch (action.type) {
    case "SAVE_ALL_HEADS":
      return action.heads
      

    default:
      return state
  }
}

export default headsReducers
