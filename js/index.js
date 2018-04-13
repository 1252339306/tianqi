  //吕梁市天气数据
 var weather;
 var city
$.ajax({
	url:"https://www.toutiao.com/stream/widget/local_weather/data/?city=吕梁",
	dataType:"jsonp",
	type:"get",
	success:function(obj){
	 	  weather=obj.data.weather;
	 	  // console.log(weather.city_name);
	 	 console.log(obj);
	 }
})

$.ajax({
  url:"https://www.toutiao.com/stream/widget/local_weather/city/",
  dataType:"jsonp",
  type:"get",
  success:function(obj){ 
  city=obj.data;  
      console.log(obj);
   }  
})




  


// 渲染数据函数
//      函数名
function updata(){
	// 渲染城市名称
var city_name=document.querySelector(".city");
city_name.innerHTML=weather.city_name;
   // console.log(city_name);
   // 当前温度
   var wendu=document.querySelector([".wendu"]);
   wendu.innerHTML=weather.current_temperature+"°";
   // 当前天气情况
   var tianqi=document.querySelector(".tianqi");
   tianqi.innerHTML=weather.current_condition;
   // 当前湿度
   var shiduoshao=document.querySelector(".shiduoshao");
   shiduoshao.innerHTML=weather.aqi+"%";
   // 今天最高气温
   var dat_high_temperature=document.querySelector("#dat_high_temperature");
   dat_high_temperature.innerHTML=weather.dat_high_temperature+"°";
   // 今天最低气温
   var dat_low_temperature=document.querySelector("#dat_low_temperature");
   dat_low_temperature.innerHTML=weather.dat_low_temperature+"°";
   // 今天天气状况
   var day_condition=document.querySelector("#day_condition");
   day_condition.innerHTML=weather.day_condition+"°";
    // 今天icon
    var dat_weather_icon_id=document.querySelector("#dat_weather_icon_id");
    dat_weather_icon_id.style=`background-image:url(img/${weather.dat_weather_icon_id}.png)`;
   // 明天最高气温
   var tomorrow_high_temperature=document.querySelector("#tomorrow_high_temperature");
   tomorrow_high_temperature.innerHTML=weather.tomorrow_high_temperature+"°";
   // 明天最低气温
   var tomorrow_low_temperature=document.querySelector("#tomorrow_low_temperature");
   tomorrow_low_temperature.innerHTML=weather.tomorrow_low_temperature+"°";
   
   // 明天天气状况
   var tomorrow_condition=document.querySelector("#tomorrow_condition");
   tomorrow_condition.innerHTML=weather.tomorrow_condition;
    // 明天icon
    var tomorrow_weather_icon_id=document.querySelector("#tomorrow_weather_icon_id");
    tomorrow_weather_icon_id.style=`background-image:url(img/${weather.tomorrow_weather_icon_id}.png)`;
    // 数组类型的对象
    // i代表数组下标
    // weather.hourly_forecast[i]代表数组中的每一个元素
    for(var i in weather.hourly_forecast){
    	// console.log( weather.hourly_forecast[i].hour)
       //创建now
       //1创建元素
        var now=document.createElement("div");
      //  // 2添加类名
        now.className="now";
      //  // 3插入到页面中
      //  // 获取父元素
        var wrap=document.querySelector(".wrap");
        wrap.appendChild(now);
      
      var h1=document.createElement("h1"); 
      h1.className="now_time";
     
      h1.innerHTML=weather.hourly_forecast[i].hour+":00";
      now.appendChild(h1);

      var div=document.createElement("div");
      div.className="now_icon";
      div.style=`background-image:url(img/${weather.hourly_forecast[i].weather_icon_id}.png)`;
      now.appendChild(div);

      var h2=document.createElement("h1"); 
      h2.className="now_temp";
      
      h2.innerHTML=weather.hourly_forecast[i].temperature+"°";
      now.appendChild(h2);
    }
    // 渲染近期的天气
    for(var a in weather.forecast_list) {
      // 创建con
      var con=document.createElement("div");
      // 添加类名
      con.className="con";
      // 插入到父元素
      var wrap1=document.querySelector(".wrap1");
      wrap1.appendChild(con);

      
      //创建日期
      // var h3=document.createElement("div");
      // h3.className="con-date";
      // h3.innerHTML=weather.forecast_list[a].date.slice(5,10);
      // con.appendChild(h3);

      var con_data=document.createElement("div");
      con_data.className="con-date";
      con_data.innerHTML=weather.forecast_list[a].date.slice(5,7)+"/"+weather.forecast_list[a].date.slice(8);
      con.appendChild(con_data); 
      // 创建天气情况
      var h4=document.createElement("div");
      h4.className="con-weaH";
      h4.innerHTML=weather.forecast_list[a].condition;
      con.appendChild(h4);
      // 创建图片
      var h5=document.createElement("div");
      h5.className="con-picH";
      h5.style=`background-image:url(img/${weather.forecast_list[a].weather_icon_id}.png)`;
      con.appendChild(h5);
      // 近期最高温度
      var h6=document.createElement("div");
      h6.className="con-high";
      h6.innerHTML=weather.forecast_list[a].high_temperature+"°";
      con.appendChild(h6);
     // 近期最低气温
      var h7=document.createElement("div");
      h7.className="con-low";
      h7.innerHTML=weather.forecast_list[a].low_temperature+"°";
      con.appendChild(h7);
      // 近期最低气温图片
      var h8=document.createElement("div");
      h8.className="con-picL";
      h8.style=`background-image:url(img/${weather.forecast_list[a].weather_icon_id}.png)`;
      con.appendChild(h8);
      // 近期最低气温天气状况
      var h9=document.createElement("div");
      h9.className="con-weaL";
      h9.innerHTML=weather.forecast_list[a].condition;
      con.appendChild(h9);
      // 近期风向
      var h10=document.createElement("div");
      h10.className="con-wind";
      h10.innerHTML=weather.forecast_list[a].wind_direction;
      con.appendChild(h10);
      // 风级
      var h11=document.createElement("div");
      h11.className="con-level";
      h11.innerHTML=weather.forecast_list[a].wind_level+"级";
      con.appendChild(h11);
    }

     /*
          方法一：
      */
      for(var provincialValue in city){
        // 获取re_city
        var cityList = document.querySelector('.re_city');
        // 创建省级城市
        var title = document.createElement('h1');
        title.className="title1";
        // 渲染省级城市内容
        title.innerText = provincialValue;
        // 追加省级城市到城市列表
        cityList.appendChild(title);
       var con1=document.createElement("div");
       con1.className="con1";
       cityList.appendChild(con1);
        // 渲染市级城市
        for(var cityValue in city[provincialValue]){
          // 创建市级div
          var son = document.createElement('div');
          // 添加类
          son.className = 'son';
          // 渲染市级内容
          son.innerText = cityValue;
          // 追加市级到城市列表中
         con1.appendChild(son);
        }
      }

      /*
          方法二：
       */
      // var str = '';      
      // for(var provincialValue in city){
        
      //   str+='<h1>'+provincialValue+'</h1>';
      //   for(var cityValue in city[provincialValue]){
      //     str+='<div class="son">'+cityValue+'</div>';
      //   }
      //   $('.re_city')[0].innerHTML = str;
      // }

}
function AJAX(str){
    var url1=`https://www.toutiao.com/stream/widget/local_weather/data/?city=${str}`
    $.ajax({
        url:url1,
        dataType:"jsonp",
        type:"get",
        success:function(obj){
            // 获取数据
            weather=obj.data.weather;
            // 渲染数据
            updata();
            $(".location").css({"display":"none"});
        }
    })
}



// 页面加载完成以后执行
window.onload=function(){
  updata();
    $(".son").on("click",function(){
        var cityh=this.innerHTML;
        AJAX(cityh);
    })

    $(".city").on("click",function(){
        $(".location").css({"display":"block"});
          })

      $("input").on("focus",function(){
        $(".search-box-right").html("搜索");
      })
       
       var button=document.querySelector(".search-box-right");
       button.onclick=function(){
        var text=button.innerText;
        console.log(text);
        if(text=="取消"){
          $(".location").css({"display":"none"})
        }
        else{
          // 获取input中输入的内容
          var str1=document.querySelector("input").value;
          for(var i in city){
             for(var j in city[i]){
              if(str1==j){
                AJAX(str1);
                return;
              }
             }
          }
          alert("没有该城市");
        }
       }
      }
