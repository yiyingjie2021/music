var musicdata = document.querySelector("#li");
var musiclist = document.querySelector(".musiclist");
var favorite = document.querySelector(".favorite");
var my = document.querySelector("#my");
//获取两个div盒子
musicdata.addEventListener("click", function () {
  musiclist.style.display = "block";
  favorite.style.display = "none";
  this.style.color = "#fff";
  this.style.backgroundColor = "blue";
  my.style.color = "#000";
  my.style.backgroundColor = "#2272fb";
});
//给第一个盒子添加点击事件（背景颜色，文字，绑定盒子）
my.addEventListener("click", function () {
  musiclist.style.display = "none";
  favorite.style.display = "block";
  my.style.color = "#fff";
  my.backgroundColor = "blue";
  musicdata.style.color = "#000";
  musicdata.style.backgroundColor = "#2272fb";
});
//给第二个盒子点击事件（背景颜色，文字，绑定盒子）
var musicdatas = [
  {
    music: "大海",
    author: "张雨生",
  },
  {
    music: "天路",
    author: "韩红",
  },
  {
    music: "再回首",
    author: "姜育恒",
  },
  {
    music: "突然的自我",
    author: "伍佰",
  },
  {
    music: "甘心情怒",
    author: "郭峰",
  },
  {
    music: "光辉岁月",
    author: "Beyond",
  },
  {
    music: "千千绝歌",
    author: "陈慧闵",
  },
  {
    music: "雨蝶",
    author: "李俊",
  },
  {
    music: "爱拼才会赢",
    author: "叶启田",
  },
  {
    music: "单身情歌",
    author: "林志炫",
  },
  //给定数组多个对象文本
];
var floag = 0;
var songlist = document.querySelector("#songlist");
var myfavorite = document.querySelector("#myfavorite");
//获取插入li的父级
for (var i = 0; i < musicdatas.length; i++) {
  var li = document.createElement("li");
  //创建li元素标签
  songlist.appendChild(li);
  //将li插入到给定的父级
  for (var k in musicdatas[i]) {
    var span = document.createElement("span");
    span.innerHTML = musicdatas[i][k];
    li.appendChild(span);
  }
  //通过for..in将数组内容插入到li盒子中的span标签
  var span = document.createElement("span");
  span.innerHTML = '<span class="span"></span>';
  //给定span标签一个class
  li.appendChild(span);
}
//通过遍历算法依次插入li
var spans1 = [];
var spans = document.querySelector("#songlist").querySelectorAll(".span");
for (var i = 0; i < spans.length; i++) {
  spans[i].addEventListener("click", function () {
    if (floag == 0) {
      //通过判断float的值来更改背景图片
      this.style.backgroundImage =
        'url("./image/Snipaste_2021-12-12_12-19-23.png")';
      this.style.width = "40px";
      this.style.backgroundPosition = "-8px 0px";
      lili = this.parentNode.parentNode.cloneNode(true);
      //将被点击过的span盒子通过clonenode复制一次
      lili.childNodes[2].innerHTML = '<span class="span1"></span>';
      myfavorite.appendChild(lili);
      floag = 1;
      spans1 = document.querySelectorAll(".span1");
      a();
    } else {
      this.style.backgroundImage =
        'url("./image/Snipaste_2021-12-12_12-11-58.png)';
      this.style.width = "40px";
      floag = 0;
      myfavorite.removeChild(lili);
    }
  });
  //给与songlist中的span盒子点击事件
}
function a() {
  for (var i = 0; i < spans1.length; i++) {
    spans1[i].style.width = "40px";
    spans1[i].style.backgroundPosition = "-8px 0px";
    spans1[i].onclick = function () {
      myfavorite.removeChild(this.parentNode.parentNode);
    };
  }
}
var music = [
  "./Music/1.mp3",
  "./Music/不在.mp3",
  "./Music/不才 - 岁月神偷.mp3",
  "./Music/周深 - 漂洋过海来看你.mp3",
  "./Music/小天叔叔 - 大约在冬季吉他版（翻自 小天叔叔）.mp3",
  "./Music/戴荃 - 悟空.mp3",
  "./Music/李热河 - 事关孤独.mp3",
  "./Music/杨宗纬 - 其实都没有.mp3",
  "./Music/戴荃 - 悟空.mp3",
  "./Music/李热河 - 事关孤独.mp3",
  "./Music/杨宗纬 - 其实都没有.mp3",
  "./Music/李热河 - 事关孤独.mp3",
  "./Music/杨宗纬 - 其实都没有.mp3",
];
var audio = document.querySelector("#bo");
var month = document.querySelector(".month");
var lis = document.querySelectorAll("li");
for (var i = 0; i < lis.length; i++) {
  var j = 0;
  lis[i].addEventListener("click", function () {
    h2.innerHTML=musicdatas[j].music
    if (j <= i) {
      audio.src = music[j];
      month.style.animation = " move 6s linear infinite";
      audio.style.display = "block";
      j++;
    }
  });
}
var h2=document.querySelector(".h");