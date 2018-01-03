{/* <script src="./src/js/lms.js"></script> */}
//http://www.androidchina.net/2435.html
window.onload=function  () {
  var canvas=document.getElementById("canvas");
  //让画布的宽度为浏览器可视区域的宽度  注意不能使用canvas.style.width
  canvas.width=document.documentElement.clientWidth;
  canvas.height=document.documentElement.clientHeight;
  //设置画布背景颜色
  // canvas.style.background="#000";
  var cobj=canvas.getContext("2d");

  //星星的数组
  var startArr=[];
  //用随机数生成星星的颗数
  var starNums=6+Math.random()*20;
  for(var i=0;i<starNums;i++)
  {
    //x,y,radius1,radius2,num,drawType,color

     // var starObj={radius1:20+10*Math.random(),radius2:8+7*Math.random(),x:30+(canvas.width-60)*Math.random(),y:30+(canvas.height-60)*Math.random(),num:4+Math.ceil(4*Math.random()),
     //     color:"rgb("+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+")",angle:360*Math.random(),changeAgele:-5+10*Math.random()}

         var starObj={radius1:5+10*Math.random(),radius2:2+7*Math.random(),x:20+(canvas.width-60)*Math.random(),y:20+(canvas.height-60)*Math.random(),num:4+Math.ceil(4*Math.random()),
             color:"rgb("+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+")",angle:360*Math.random(),changeAgele:-5+5*Math.random()}

     startArr.push(starObj);
  }


  setInterval(function(){
     cobj.clearRect(0,0,canvas.width,canvas.height);
     for(var i=0;i<startArr.length;i++)
     {
        startArr[i].angle+=startArr[i].changeAgele;
        cobj.save();
        cobj.beginPath();

        cobj.translate(startArr[i].x,startArr[i].y);
        cobj.rotate(startArr[i].angle*Math.PI/180);
        cobj.scale(Math.sin(startArr

[i].angle*Math.PI/180),Math.sin(startArr[i].angle*Math.PI/180));
        cobj.globalAlpha=Math.abs(Math.sin(startArr

[i].angle*Math.PI/180));
        //绘制多边形
        drawStar(0,0,startArr[i].radius1,startArr

[i].radius2,startArr[i].num,"fill",'white')//startArr[i].color
        cobj.restore();
     }
  },60);



  //绘制多边形
    function drawStar(x,y,radius1,radius2,num,drawType,color)
    {
        var angle=360/(num*2);
        var arr=[];
        for(var i=0;i<num*2;i++)
        {
            var starObj={};
            if(i%2==0)
            {
                starObj.x=x+radius1*Math.cos

(i*angle*Math.PI/180);
                starObj.y=y+radius1*Math.sin

(i*angle*Math.PI/180);
            }
            else
            {
                starObj.x=x+radius2*Math.cos

(i*angle*Math.PI/180);
                starObj.y=y+radius2*Math.sin

(i*angle*Math.PI/180);
            }

            arr.push(starObj);
        }

        cobj.beginPath();
        cobj.fillStyle=color;
        cobj.fillStyle=color;
        cobj.moveTo(arr[0].x,arr[0].y);
        for(var i=1;i<arr.length;i++)
        {
            cobj.lineTo(arr[i].x,arr[i].y);
        }
        cobj.closePath();
        if(drawType=="fill")
        {
            cobj.fill();
        }
        else
        {
            cobj.stroke();
        }
    }

}

//判断是否在微信中打开
function isWeiXin(){
    const ua = window.navigator.userAgent.toLowerCase();
    var iswx=false;
    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
        iswx=true;
    }
    return iswx;
}
//唤起APP
function openApp(){
    //判断是在微信中打开
    if(isWeiXin()){
        alert("请在浏览器中打开链接");
    }else{
        // alert("是浏览器");
        window.location.href = "xianzhilms://special.9first.com/special/9first/lms_21017_year";
        ga('send','event','openApp','lms_years','openlmsactivity-btn');
    }
}
//弹出分享图层
function shareFriends(){
        $(".shareTip").css({ display: 'block' });
}
//关闭弹出分享图层
function closeShare(){
    $(".shareTip").css({ display: 'none' });
}
