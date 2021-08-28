var work = new Vue({
  el: '#work',
  data: {
    // 控制下拉按钮，false显示下拉，true显示上拉
    flag: false,
    content: '',
    // 不同变量控制不同元素的列单
    isShowTask: false,
    isShowToolbox: false,
    isShowPerson: false,
  },
  methods: {
    pullTask: function () {
      if (!this.flag) {
        this.flag = true;
        this.content = '';
        this.isShowTask = true;
        this.isShowToolbox = false;
        this.isShowPerson = false;
      } else {
        this.flag = false;
        this.content = '';
        this.isShowTask = false;
        this.isShowToolbox = false;
        this.isShowPerson = false;
      }
    },
    pullToolbox: function () {
      if (!this.flag) {
        this.flag = true;
        this.content = '';
        this.isShowTask = false;
        this.isShowToolbox = true;
        this.isShowPerson = false;
      } else {
        this.flag = false;
        this.content = '';
        this.isShowTask = false;
        this.isShowToolbox = false;
        this.isShowPerson = false;
      }
    }
  }
})
