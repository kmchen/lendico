import { MONTHLY_INSTALLMENT_SUCCESS, SET_DURATION, SET_AMOUNT } from '../actions/actions';

const initialState = {
  amount: '1',
  duration: '1',
  monthlyInstallment: '',
};

export default function reducers(state, action) {
  if (typeof state === 'undefined') {
    return initialState;
  }
  switch (action.type) {
    case SET_DURATION:
      return { ...state, duration: action.payload.toString() };
    case SET_AMOUNT:
      return { ...state, amount: action.payload.toString() };
    case MONTHLY_INSTALLMENT_SUCCESS:
      return { ...state, monthlyInstallment: action.payload.toString() };
    default:
      return state;
  }
}
