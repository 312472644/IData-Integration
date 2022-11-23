// 公用的业务代码
import { loginAPI } from '../api';
import store from '../store';

const userLogin = (params: { userName: string; password: string }) => {
  return new Promise(resolve => {
    loginAPI(params).then(res => {
      const { code, data } = res.data;
      if (code === 200) {
        store.commit('changeIsTokenTimeout', false);
        sessionStorage.setItem('token', JSON.stringify(data.token));
        sessionStorage.setItem('userName', JSON.stringify(params.userName));
        resolve(true);
      }
    });
  });
};

export { userLogin };
