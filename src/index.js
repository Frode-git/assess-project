var app = new Vue ({
  el: '#app',
  data: {
    ico: ['', '', '', ''],
    isShowChoice: true,
    isShowRegister: false,
    isShowLogin: false,
    isTrue: true,
    pwd: '',
    confirmPwd: '',
    imgSrc: ''
  },
  methods: {
    showRegister: function() {
      this.isShowChoice = false;
      this.isShowRegister = true;
      this.isShowLogin = false;
    },
    showLogin: function() {
      this.isShowChoice = false;
      this.isShowLogin = true;
      this.isShowRegister = false;
    },
    showChoice: function() {
      this.isShowChoice = true;
      this.isShowLogin = false;
      this.isShowRegister = false;
    },
    getImgSrc: function() {

    },
    judgePwd: function() {

    },
  }
})