// 原生js部分
// 控制侧边栏只展示一个栏目
let arrow = document.querySelectorAll('.arrow');
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener('click', function (e) {
    // 获取li
    let arrowParent = e.target.parentElement.parentElement;
    // 排他，只展开一个li
    for (var j = 0; j < arrowParent.parentElement.children.length; j++) {
      // 进行判断，先通过li获取父节点，然后拿到所有子节点，不是本身时，不显示
      if (arrowParent.parentElement.children[j].nodeType == 1 && arrowParent.parentElement.children[j] != arrowParent) {
        arrowParent.parentElement.children[j].classList = '';
      } else {
        arrowParent.classList.toggle('showMenu');
      }
    }
  });
};

// 动态创建便签
var li_note = document.querySelector('.li-note');

function addNote() {
  // 创建note并添加class属性
  var note = document.createElement('div');
  note.className = 'note';
  // 创建比便签两部分，头部和输入内容区
  var header = document.createElement('div');
  var content = document.createElement('div');
  content.placeholder = '请输入';
  // 允许用户在输入区进行输入
  content.contentEditable = true;
  // 创建便签头部里的两个按钮 "+" 和 "×"
  var add = document.createElement('span');
  add.innerHTML = '+';
  var remover = document.createElement('span');
  remover.innerHTML = '&times;';
  // 创建输入区域工具栏
  var tools = document.createElement('div');
  var weight = document.createElement('span');
  weight.innerHTML = '';
  var ita = document.createElement('span');
  ita.innerHTML = '';
  var bottom = document.createElement('span');
  bottom.innerHTML = '';
  tools.contentEditable = false;
  // 将创建的便签盒子拼到一起，再一起接到li_note下
  header.appendChild(add);
  header.appendChild(remover);
  note.appendChild(header);
  tools.appendChild(weight);
  tools.appendChild(ita);
  tools.appendChild(bottom);
  note.appendChild(content);
  note.appendChild(tools);
  li_note.appendChild(note);
  // 获取已创建的note数量
  var notes = document.querySelectorAll('.note');
  // add 点击触发添加便利贴事件
  add.onclick = function () {
    addNote();
    notes[notes.length - 1].style.left = notes[notes.length - 1].offsetLeft + 20 + 'px';
    notes[notes.length - 1].style.top = notes[notes.length - 1].offsetTop - 40 + 'px';
  };
  // remover点击触发删除便签事件，就是将父类的父类，即便签删除
  remover.addEventListener('click', removeNote);

  function removeNote() {
    // 始终保留一个note
    if (notes.length > 1) {
      this.parentElement.parentElement.remove();
    } else {
      notes[0].removeEventListener('click', removeNote);
    }
  };
  // 编辑工具背景
  for (var i = 0; i < tools.children.length; i++) {
    tools.children[i].addEventListener('click', function () {
      this.classList.toggle('showBg');
    });
  };
  var w = 0;
  weight.addEventListener('click', function () {
    var selection = window.getSelection();
    var text = selection.toString();
    var start = selection.anchorOffset;
    var end = selection.focusOffset;
    var text = content.innerText;
    console.log(content.innerText);
    console.log(text);
    console.log(start);
    console.log(end);
    content.innerHTML = text.substring(0, start) + '<b>' + text.substring(start, end) + '</b>' + text.substring(end);
  });
  ita.addEventListener('click', function () {
    var selection = window.getSelection();
    var text = selection.toString();
    var start = selection.anchorOffset;
    var end = selection.focusOffset;
    var text = content.innerText;
    console.log(content.innerText);
    console.log(text);
    console.log(start);
    console.log(end);
    content.innerHTML = text.substring(0, start) + '<i>' + text.substring(start, end) + '</i>' + text.substring(end);
  });
  bottom.addEventListener('click', function () {
    var selection = window.getSelection();
    var text = selection.toString();
    var start = selection.anchorOffset;
    var end = selection.focusOffset;
    var text = content.innerText;
    console.log(content.innerText);
    console.log(text);
    console.log(start);
    console.log(end);
    content.innerHTML = text.substring(0, start) + '<u>' + text.substring(start, end) + '</u>' + text.substring(end);
  });


  // // 点击此便签时，突出显示  有bug
  // note.addEventListener('click', function (e) {
  //   for (var i = 0; i < notes.length; i++) {
  //     if (i != notes.indexOf(e.target.parentElement)) {
  //       notes[i].style.zIndex = 9;
  //     } else {
  //       notes[i].style.zIndex = 99;
  //     }
  //   }
  // })
  // 鼠标拖动便签移动
  header.addEventListener('mousedown', function (e) {
    // 获取鼠标在头部区域的位置
    var x = e.pageX - note.offsetLeft;
    var y = e.pageY - note.offsetTop;
    // 鼠标拖动便签
    document.addEventListener('mousemove', move);

    function move(e) {
      // 注意note本身的top和left值
      note.style.left = e.pageX - x + 'px';
      note.style.top = e.pageY - y + 'px';
    };
    // 鼠标弹起时，将鼠标移动事件移除
    document.addEventListener('mouseup', function () {
      document.removeEventListener('mousemove', move);
    });
  });
};

// 点击li_note时，默认生成一个且只能生成一个便签，时间侦听器中的options对象，提供了once属性，指定事件绑定次数，true表示执行之后，会自动移除绑定
li_note.addEventListener('click', function () {
  addNote();
  this.children[0].style.display = 'block';
}, {
  once: true
});
