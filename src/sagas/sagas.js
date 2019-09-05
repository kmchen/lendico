import 'regenerator-runtime/runtime';
import { call, put, takeLatest } from 'redux-saga/effects';

import {
  MONTHLY_INSTALLMENT_REQUEST,
  MONTHLY_INSTALLMENT_SUCCESS,
  MONTHLY_INSTALLMENT_ERROR,
} from '../actions/actions';
import api from '../api/api';

export function* getMonthlyInstallment(action) {
  try {
    const response = yield call(api, action.payload);
    yield put({ type: MONTHLY_INSTALLMENT_SUCCESS, payload: response.data.monthlyInstallment });
  } catch (err) {
    yield put({ type: MONTHLY_INSTALLMENT_ERROR, message: err.message });
  }
}

export function* getMonthlyInstallmentSaga() {
  yield takeLatest(MONTHLY_INSTALLMENT_REQUEST, getMonthlyInstallment);
}
