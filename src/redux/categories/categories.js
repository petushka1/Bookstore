const CHECK = 'STATUS_CHECKED';

const checkStatusReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK:
      return 'Under construction';
    default:
      return state;
  }
};

export const checkStatus = () => ({
  type: CHECK,
});

export default checkStatusReducer;
