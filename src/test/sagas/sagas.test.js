import { call, put, takeLatest } from 'redux-saga/effects';

import {MONTHLY_INSTALLMENT_REQUEST, MONTHLY_INSTALLMENT_SUCCESS, MONTHLY_INSTALLMENT_ERROR} from '../../actions/actions';
import {getMonthlyInstallment, getMonthlyInstallmentSaga} from '../../sagas/sagas';
import api from '../../api/api';

describe('Sagas ', () => {
  describe('getMonthlyInstallmentSaga', () => {
    it('should take latest monthly installment', () => {
      const iterator = getMonthlyInstallmentSaga();
      const expected = takeLatest(MONTHLY_INSTALLMENT_REQUEST, getMonthlyInstallment)
      const actual = iterator.next().value
      expect(expected).toEqual(actual);
    })
  });
  describe('getMonthlyInstallmentSaga api', () => {
    const action = { payload: {amount: 1, duration: 1}};
    const iterator = getMonthlyInstallment(action);
    it('should call getMonthlyinstallment api', () => {
      const expected = call(api, action.payload);
      const actual = iterator.next().value
      expect(expected).toEqual(actual);
    })
    it('should handle getMonthlyinstallment api success', () => {
      const getMonthlyInstallmentApi = () => ({data: { amount: 0, duration:0, monthlyInstallment: 0 }});
      const actual = iterator.next(getMonthlyInstallmentApi()).value
      const expected = put({
        type: MONTHLY_INSTALLMENT_SUCCESS,
         payload: 0
      });
      expect(expected).toEqual(actual);
    })
    it('should handle getMonthlyinstallment api error', () => {
      const error = new Error('error');
      const actual = iterator.throw(error).value
      const expected = put({
        type: MONTHLY_INSTALLMENT_ERROR,
         message: 'error'
      });
      expect(expected).toEqual(actual);
    })
  })
})
