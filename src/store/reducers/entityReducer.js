const initState = {
  entities: [],
};

const entityReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_ENTITY':
      console.log('creeeeeate');
      return state;
    case 'CREATE_ENTITY_ERROR':
      return state;
    default:
      return state;
  }
};

export default entityReducer;
