/**
 * ☎️号码验证
 * @param rule
 * @param value
 * @param callback
 */
let tel = (rule, value, callback) => {
  const reg = /^1[3|4|5|6|7|8][0-9]\d{8}$/;
  if (value === '') {
    callback(new Error('请输入手机号'));
  } else if (!reg.test(value)) {
    callback(new Error('手机号码格式不正确'));
  } else {
    callback();
  }
};

export default {
  tel,
}
