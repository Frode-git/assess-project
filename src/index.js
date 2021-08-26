// 原生js部分
window.addEventListener('load', function () {
  // 动态修改title值
  var title = document.querySelector('title');
  var choice_register = document.querySelector('.choice-register').addEventListener('click', function () {
    title.innerHTML = '注册';
  });
  var choice_login = document.querySelector('.choice-login').addEventListener('click', function () {
    title.innerHTML = '登录';
  })
  var back = document.querySelectorAll('.back');
  for (var i = 0; i < back.length; i++) {
    back[i].addEventListener('click', function () {
      title.innerHTML = '欢迎访问';
    });
  };
  // 动态显示提示信息
  var ipt_name_error = document.querySelector('.ipt-name-error');
  var ipt_name_success = document.querySelector('.ipt-name-success');
  var ipt_email_error = document.querySelector('.ipt-email-error');
  var ipt_email_success = document.querySelector('.ipt-email-success');
  var ipt_pwd_error = document.querySelector('.ipt-pwd-error');
  var ipt_pwd_success = document.querySelector('.ipt-pwd-success');
  var ipt_confirmPwd_error = document.querySelector('.ipt-confirmPwd-error');
  var ipt_confirmPwd_success = document.querySelector('.ipt-confirmPwd-success');
  var ipt_name = document.querySelector('.register-ipt-name').addEventListener('blur', function () {
    if (this.value != '') {
      ipt_name_success.style.display = 'block';
      ipt_name_error.style.display = 'none';
    } else {
      ipt_name_error.style.display = 'block';
      ipt_name_success.style.display = 'none';
    }
  });
  var ipt_email = document.querySelector('.register-ipt-email').addEventListener('blur', function () {
    // 此处正则公式，借鉴网上的
    var myReg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    if (!myReg.test(this.value)) {
      ipt_email_error.style.display = 'block';
      ipt_email_success.style.display = 'none';
    } else {
      ipt_email_error.style.display = 'none';
      ipt_email_success.style.display = 'block';
    }
  });
  var ipt_pwd = document.querySelector('.register-ipt-pwd');
  ipt_pwd.addEventListener('blur', function () {
    if (this.value.length < 6 || this.value.length > 18) {
      ipt_pwd_error.style.display = 'block';
      ipt_pwd_success.style.display = 'none';
    } else {
      for (var i = 0; i < this.value.length; i++) {
        if (this.value[i] <= 9 && this.value[i] >= 0 || this.value[i] <= 'z' && this.value[i] >= 'a' || this.value[i] <= 'Z' && this.value[i] >= 'A') {
          ipt_pwd_success.style.display = 'block';
          ipt_pwd_error.style.display = 'none';
        } else {
          ipt_pwd_error.style.display = 'block';
          ipt_pwd_success.style.display = 'none';
        }
      }
    }
  });
  var ipt_confirmPwd = document.querySelector('.register-ipt-confirmPwd').addEventListener('blur', function () {
    if (this.value === ipt_pwd.value) {
      ipt_confirmPwd_success.style.display = 'block';
      ipt_confirmPwd_error.style.display = 'none';
    } else {
      ipt_confirmPwd_success.style.display = 'none';
      ipt_confirmPwd_error.style.display = 'block';
    }
  });

})

// vue部分
var app = new Vue({
  el: '#app',
  data: {
    ico: ['', '', '', ''],
    isShowChoice: true,
    isShowRegister: false,
    isShowLogin: false,
  },
  methods: {
    showRegister: function () {
      this.isShowChoice = false;
      this.isShowRegister = true;
      this.isShowLogin = false;
    },
    showLogin: function () {
      this.isShowChoice = false;
      this.isShowLogin = true;
      this.isShowRegister = false;
    },
    showChoice: function () {
      this.isShowChoice = true;
      this.isShowLogin = false;
      this.isShowRegister = false;
    },
  }
})
