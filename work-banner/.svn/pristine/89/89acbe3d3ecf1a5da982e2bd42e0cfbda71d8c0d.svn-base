<%@ page contentType="text/html; charset=utf-8" pageEncoding="GBK"%>
<html>
	<head>
	<title>ajax的练习</title>
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery-1.8.3.js"></script>
	<script type="text/javascript">
		//定义此变量为false,以便form表单提交时验证
		var brand = false;
	
		$(function(){//此方法代表文档加在完毕执行
			
			//因为是文件先加载,所在在此先获取输入框ID值,使它执行
			$('#cbrand').blur(function(){
			 
			//获取ID的值,它的值就是从页面输入的值,赋给了一个变量
			//var cbrand2	= $('#cbrand').val();
			//console.log('得到的值=   '+cbrand2);
			
			//异步ajax开始
			$.post('${pageContext.request.contextPath}/p1/a_testAjax','cbrand=cbrand2',function(data){
			},'json');
			
			//获取被隐藏的输入框ID,方便和输入邮箱的默认Value的值进行比较
			//var cbrand2 = $('#cbrand2').val();
			
			//添加了img标签后,把它的src属性设置为空,再在此给它赋值,以便先执行
			$('#imgloading').attr('src','${pageContext.request.contextPath}/images/window_loading.gif');
			
			//验证邮箱格式 {}逗号左边代表[]内最少输入的字数,右边代表最多输入的字数
			var val = /^[0-9a-zA-Z]{5,20}@qq.com/;
			console.log('val=  '+val);
			if(cbrand.value.length<10||cbrand.value==''||val.test($(this).val())==false){
			//使用window.setTimeout标签可以延迟执行
			window.setTimeout(function(){
			
			//再次给该标签赋值图片,在设置的1500毫秒后执行以下项
			$('#imgloading').attr('src','${pageContext.request.contextPath}/images/wrong.gif');
			$('#usernamediv').html('邮箱格式出错或账号已被注册！！').css('color','red');
			},1500);
			return false;
			}
			else{
			window.setTimeout(function(){
			$('#imgloading').attr('src','${pageContext.request.contextPath}/images/right.gif');
			$('#usernamediv').html('邮箱可用').css('color','green');
			},1500);
			brand = true;
			return brand;
			}
			});
		});
		
		//form表单提交验证
		function sub(){
			if(brand){
			alert('返回true');
			return true;
			}else{
			alert('返回false');
			return false;}
		}
	</script>
	
	<!-- 内嵌样式 -->
	<style type="text/css">
		h2{
			position:absolute
			font-size:30px;
			color:brown;
			background-color:cornsilk;
			width:50px;
			cursor:wait;
		}
		
		.class1{
			color:mediumaquamarine;
			background-color:darkgray;
			font-size:30px;
			left:200px;
			top:35px;
			position:relative;
		}
		
		#id2{
			color:cornflowerblue;
			background-color:gold;
			font-size:30px;
			border:dashed 8px orange;
		}
		
		div{
			border:solid 5px lightsteelblue;
			position:relative;
			margin:10px;
			float:left;
		}
		
		#div1{
			background-color:#999999;
			color:midnightblue;
			font-size:50px;
			width:100px;
			height:70px;
		}
		
		#div2{
			background-color:#ffffff;
			color:hotpink;
			font-size:40px;
			z-index:1;
			width:100px;
			height:70px;
		}
		
		span{
			color:lightcoral;
			font-size:20px;
			background-color:lightgrey;
			text-decoration:underline;
		}
		
		h3,h4{
			color:lightcyan;
			background-color:navajowhite;
			font-size:36px;
			border:dotted 4px black;
		}
		
		h2,p,h3,h4{
			font-family:楷体;
			text-align:center;
			cursor:pointer;
		}
		
	</style>
	</head>
	<body>
	<form onsubmit="return sub()">
	<input type="text" value="请输入正确的邮箱格式" id="cbrand"/>
	<!--  <input type="text" value="请输入正确的邮箱格式" style="display:none" id="cbrand2"/>-->
	<img id="imgloading"/><span id="usernamediv"></span>
	<input type="submit"/>
	<br/>
	
	<span>这里是标签选择器</span>
	<h2>这里也是h2标签选择器</h2>
	<div class="class1">这是类选择器</div>
	<p id="id2">这里是ID选择器</p>
	
	<h3>这里是组合选择器</h3>
	<h4>我也是组合选择器</h4>
	
	<div id="div1">div1</div>
	<div id="div2">div2</div>
	</form>
	</body>
</html>