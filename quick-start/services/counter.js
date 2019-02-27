export function addNumber() {
  return new Promise((resolve, reject) => {
    my.httpRequest({
      url: 'http://a.com/counterAdd', // 目标服务器url
      success: (res) => {
        console.log('rrr', res);
        if (res.data && res.data.success) {
          resolve(res.data.value);
        }
      },
      fail: err => console.log(err)
    });
  });
}