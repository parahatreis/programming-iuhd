

export default (state,action) => {
   switch(action.type) {
      case 'GET_LECTURE':
      console.log(action.payload)
         return {
            ...state,
            lecture : state.lectures.find(lecture => Number(lecture.id) === Number(action.payload)),
            loading: false
         }
      case 'SET_LOADING':
         return {
            ...state,
            loading: true
         }
      default:
         return state
   }
}