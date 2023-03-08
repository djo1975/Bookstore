const STATUS = 'STATUS';

const initialState = {
  status: [],
};

export const checkStatus = () => ({
  type: STATUS,
});

const categoriesReducer = (state = initialState, action) => {
  if (action.type === STATUS) {
    return {
      ...state,
      status: 'Under construction',
    };
  }
  return state;
};

export default categoriesReducer;
