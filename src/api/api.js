import axios from 'axios';

const backendUrl = 'http://localhost:9000/installment-monthly';

export default async function getMonthlyInstallment(payload) {
  let response;
  try {
    response = await axios.post(backendUrl, payload);
  } catch (error) {
    /* eslint no-console: ["error", { allow: ["warn", "error"] }] */
    console.error(error);
  }
  return response;
}
