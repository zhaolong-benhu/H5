
    //渲染页面数据
    var type = "";
    function renderPage(data){
       if(type == "app"){
           $("#openApp").css({ display: 'none' });
       }
       var name = data.name;
       if(name.length>4){
           name = data.name.substr(0,4)+'...';
       }
       document.getElementById('name').innerHTML = name;
       document.getElementById('name2').innerHTML = name;
       document.getElementById('name3').innerHTML = name;
       document.getElementById('name4').innerHTML = name;
       document.getElementById('name5').innerHTML = name;
       document.getElementById('name6').innerHTML = name;
       document.getElementById('name7').innerHTML = name;
       document.getElementById('name8').innerHTML = name;


      document.getElementById('days').innerHTML = data.days+'天';

      document.getElementById('rank').innerHTML = data.rank;
      document.getElementById('percent').innerHTML = data.percent+'%';

      document.getElementById('num').innerHTML = data.test_count.num+'门';
      if(data.test_count.num == 0){
          $("#maxscore").css({ display: 'none' });
          $("#score").css({ display: 'none' });
      }else {
          document.getElementById('score').innerHTML = data.test_count.score+'分';
      }


      document.getElementById('doc_num').innerHTML = data.doc_num+'份';
      document.getElementById('plan_course_num').innerHTML = data.plan_course_num+'个';

      document.getElementById('paper_num').innerHTML = data.paper_num+'份';
      if(data.paper_num == 0){
          $("#answer").css({ display: 'none' });
          $("#paper_question_num").css({ display: 'none' });
          $("#paper_question_num").css({ display: 'none' });
          $("#question").css({ display: 'none' });
      }else {
          document.getElementById('paper_question_num').innerHTML = data.paper_question_num+'道';
      }

      document.getElementById('course_num').innerHTML = data.course_num+'门'
       if(data.hours == "0"){
           // document.getElementById('course_type').innerHTML = "?";
           document.getElementById('fangmian').innerHTML = "TA还没有学习过课程";

           $("#often").css({ display: 'none' });



           $("#nostudy").css({ display: 'block' });
           $("#study").css({ display: 'none' });
           $(".study").css({ display: 'none' });


           $("#noexamination").css({ display: 'block' });
           $("#examination").css({ display: 'none' });
           $("#first").css({ display: 'none' });
           $("#test_name").css({ display: 'none' });



       }else {
          if(data.course_type == "" && data.course_info.title != ""){
              document.getElementById('course_type').innerHTML = "自制课程";
          }else{
              document.getElementById('course_type').innerHTML = data.course_type;
          }

       document.getElementById('start_time1').innerHTML = data.course_info.start_time.substr(0,1);
       document.getElementById('start_time2').innerHTML = data.course_info.start_time.substr(1,1);
       document.getElementById('start_time3').innerHTML = data.course_info.start_time.substr(2,1);
       document.getElementById('start_time4').innerHTML = data.course_info.start_time.substr(3,1);
       document.getElementById('start_time5').innerHTML = data.course_info.start_time.substr(5,1);
       document.getElementById('start_time6').innerHTML = data.course_info.start_time.substr(6,1);
       document.getElementById('start_time7').innerHTML = data.course_info.start_time.substr(8,1);
       document.getElementById('start_time8').innerHTML = data.course_info.start_time.substr(9,1);
       document.getElementById('title').innerHTML = '《'+data.course_info.title+'》';

       if(data.exam_info.test_name == ""){
           $("#noexamination").css({ display: 'block' });
           $("#examination").css({ display: 'none' });
           $("#first").css({ display: 'none' });
           $("#test_name").css({ display: 'none' });
       }else{
           document.getElementById('add_time1').innerHTML = data.exam_info.add_time.substr(0,1);
           document.getElementById('add_time2').innerHTML = data.exam_info.add_time.substr(1,1);
           document.getElementById('add_time3').innerHTML = data.exam_info.add_time.substr(2,1);
           document.getElementById('add_time4').innerHTML = data.exam_info.add_time.substr(3,1);
           document.getElementById('add_time5').innerHTML = data.exam_info.add_time.substr(5,1);
           document.getElementById('add_time6').innerHTML = data.exam_info.add_time.substr(6,1);
           document.getElementById('add_time7').innerHTML = data.exam_info.add_time.substr(8,1);
           document.getElementById('add_time8').innerHTML = data.exam_info.add_time.substr(9,1);
           document.getElementById('test_name').innerHTML = '《'+data.exam_info.test_name+'》';
       }
    }
    var screenHeight = window.screen.height + "px";
    $("#canvas").css({ top: screenHeight });

    }
    //获取接口数据
    function getData(url){
       $.ajax({
           async: false,
           type: "GET",
           url: url,
           dataType: "jsonp",
           success: function(data){
               var status = data.status;
               if (status) {
                   renderPage(data.data);
               }else {
                   alert("抱歉,没有这个用户,请确认公司名称或用户名是否正确!");
                   setTimeout(function(){
                       window.location.href = "http://m.9first.com/404";
                   },3000);
               }
           },
           error: function () {
               console.log('error');
           }
       });
    }
    var companyName = "";
    var userName = "";
    //获取url中的参数
    function getUrlParam(){
       //首先获取到当前页面的地址栏信息
       var url = window.location.href;

       var obj = {};
       var reg = /\?/;
       if(url.match(reg)) {
           //判断传入参数，以问号截取，问号后是参数
           var chars = url.split('?')[1];

           //再截&号
           var arr = chars.split('&');

           //获得截取后的数组为键值对字符串
           for (var i = 0; i < arr.length; i++) {

               //保守一点确定看是否为 name=value形式
               var num = arr[i].indexOf("=");

               if (num > 0) {
                   //拼接字符串
                   var name = arr[i].substring(0, num);
                   var value = arr[i].substr(num + 1);

                   //拼接对象，并转码
                   obj[decodeURIComponent(name)] = decodeURIComponent(value);
               }
           }
       }
       // console.log(obj);
       companyName = obj.companyName;
       userName = obj.userName;
       if(obj.type){
           type = obj.type;
       }
       getData("http://lms_api_v2.9first.com/client3/normal/activityUser?companyName="+companyName+"&userName="+userName);
    }
    getUrlParam();


    var bjyy=document.getElementById("musicid");
    var flag = true;//背景音乐控制
    //背景音乐设置自动播放
    function autoPlayAudio(){
       wx.config({
           debug: false
       });
       wx.ready(function() {
           bjyy.play();
       });
    }

    function suspendPlayAudio(){
       if(flag){
           bjyy.pause();
           $('.music-icon').attr("src",'http://f3-xz.veimg.cn/special/2017/12/lms_years/images/music_stop.png');
           flag = false;
       }else {
           bjyy.play();
           $('.music-icon').attr("src",'http://f3-xz.veimg.cn/special/2017/12/lms_years/images/music.png');
           flag = true;
       }
    }
     // bjyy.play();
    // autoPlayAudio();
