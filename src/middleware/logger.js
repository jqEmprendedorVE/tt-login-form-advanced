const logger = store => next => action => {
  if(action.type){
    console.group(action.type)
    console.info('dispatching', action)
  }
  let result = next(action)
  if(action.type){
    console.log('next state', store.getState())
    console.groupEnd()
  }
  return result
}

export default logger