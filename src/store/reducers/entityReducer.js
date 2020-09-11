const initState = {
  entities: [],
};

const entityReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_ENTITY':
      console.log('created entity', action.entity);
      return state;
    case 'CREATE_ENTITY_ERROR':
      console.log(action.err);
      return state;
    default:
      return state;
  }
};

export default entityReducer;
