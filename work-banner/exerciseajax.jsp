<%@ page contentType="text/html; charset=utf-8" pageEncoding="GBK"%>
<html>
	<head>
	<title>ajax����ϰ</title>
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery-1.8.3.js"></script>
	<script type="text/javascript">
		//����˱���Ϊfalse,�Ա�form���ύʱ��֤
		var brand = false;
	
		$(function(){//�˷��������ĵ��������ִ��
			
			//��Ϊ���ļ��ȼ���,�����ڴ��Ȼ�ȡ�����IDֵ,ʹ��ִ��
			$('#cbrand').blur(function(){
			 
			//��ȡID��ֵ,����ֵ���Ǵ�ҳ�������ֵ,������һ������
			//var cbrand2	= $('#cbrand').val();
			//console.log('�õ���ֵ=   '+cbrand2);
			
			//�첽ajax��ʼ
			$.post('${pageContext.request.contextPath}/p1/a_testAjax','cbrand=cbrand2',function(data){
			},'json');
			
			//��ȡ�����ص������ID,��������������Ĭ��Value��ֵ���бȽ�
			//var cbrand2 = $('#cbrand2').val();
			
			//�����img��ǩ��,������src��������Ϊ��,���ڴ˸�����ֵ,�Ա���ִ��
			$('#imgloading').attr('src','${pageContext.request.contextPath}/images/window_loading.gif');
			
			//��֤�����ʽ {}������ߴ���[]���������������,�ұߴ���������������
			var val = /^[0-9a-zA-Z]{5,20}@qq.com/;
			console.log('val=  '+val);
			if(cbrand.value.length<10||cbrand.value==''||val.test($(this).val())==false){
			//ʹ��window.setTimeout��ǩ�����ӳ�ִ��
			window.setTimeout(function(){
			
			//�ٴθ��ñ�ǩ��ֵͼƬ,�����õ�1500�����ִ��������
			$('#imgloading').attr('src','${pageContext.request.contextPath}/images/wrong.gif');
			$('#usernamediv').html('�����ʽ������˺��ѱ�ע�ᣡ��').css('color','red');
			},1500);
			return false;
			}
			else{
			window.setTimeout(function(){
			$('#imgloading').attr('src','${pageContext.request.contextPath}/images/right.gif');
			$('#usernamediv').html('�������').css('color','green');
			},1500);
			brand = true;
			return brand;
			}
			});
		});
		
		//form���ύ��֤
		function sub(){
			if(brand){
			alert('����true');
			return true;
			}else{
			alert('����false');
			return false;}
		}
	</script>
	
	<!-- ��Ƕ��ʽ -->
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
			font-family:����;
			text-align:center;
			cursor:pointer;
		}
		
	</style>
	</head>
	<body>
	<form onsubmit="return sub()">
	<input type="text" value="��������ȷ�������ʽ" id="cbrand"/>
	<!--  <input type="text" value="��������ȷ�������ʽ" style="display:none" id="cbrand2"/>-->
	<img id="imgloading"/><span id="usernamediv"></span>
	<input type="submit"/>
	<br/>
	
	<span>�����Ǳ�ǩѡ����</span>
	<h2>����Ҳ��h2��ǩѡ����</h2>
	<div class="class1">������ѡ����</div>
	<p id="id2">������IDѡ����</p>
	
	<h3>���������ѡ����</h3>
	<h4>��Ҳ�����ѡ����</h4>
	
	<div id="div1">div1</div>
	<div id="div2">div2</div>
	</form>
	</body>
</html>