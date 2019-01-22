var _timer;
var _rest=0;
$(function(){
	$(".shuzi p a").each(function(index) {
		
        $(this)[0].addEventListener('touchstart', function(event){
		if(_rest==1) return;
		var _str=$("input[name=xzname]").val();
		var _zt=$("input[name=zt]").val();
		var _value="";
		if(_zt==1) _value=$("input[name="+_str+"]").val();
		else $("input[name=zt]").val(1);
		$("input[name="+_str+"]").val(_value+$(this).attr("rel"));
		event.preventDefault();
		})
		
		$(this)[0].addEventListener('mousedown', function(event){
		if(_rest==1) return;
		var _str=$("input[name=xzname]").val();
		var _zt=$("input[name=zt]").val();
		var _value="";
		if(_zt==1) _value=$("input[name="+_str+"]").val();
		else $("input[name=zt]").val(1);
		$("input[name="+_str+"]").val(_value+$(this).attr("rel"));
		event.preventDefault();
		})
		
		
		
    });
	
	$(".shuzi p span").each(function(index) {
        $(this).attr("rel",index);
		var _this=$(this);
		_this[0].addEventListener('touchstart', function(event){
			_rest=0;
			$("input[name=zt]").val(0);
			var _index=_this.attr("rel");
			if(_index==0){
			if($("input[name=lkf]").val()!=""&&$("input[name=whf]").val()!=""){
				$("input[name=lkf]").val("");
				$("input[name=whf]").val("");
				}
			$("input[name=xzname]").val("zhf");
			$("img.mpic").attr("src","sq/img/x-1.jpg");
			}
		else if(_index==1){
			if($("input[name=zhf]").val()!=""&&$("input[name=whf]").val()!=""){
				$("input[name=zhf]").val("");
				$("input[name=whf]").val("");
				}
			$("input[name=xzname]").val("lkf");
			$("img.mpic").attr("src","sq/img/x-2.jpg");
			}
		else if(_index==2){
			if($("input[name=zhf]").val()!=""&&$("input[name=lkf]").val()!=""){
				$("input[name=zhf]").val("");
				$("input[name=lkf]").val("");
				}
			$("input[name=xzname]").val("whf");
			$("img.mpic").attr("src","sq/img/x-3.jpg");
			}
			event.preventDefault();			
			})
			
			
		_this[0].addEventListener('mousedown', function(event){
			_rest=0;
			$("input[name=zt]").val(0);
			var _index=_this.attr("rel");
			if(_index==0){
			if($("input[name=lkf]").val()!=""&&$("input[name=whf]").val()!=""){
				$("input[name=lkf]").val("");
				$("input[name=whf]").val("");
				}
			$("input[name=xzname]").val("zhf");
			$("img.mpic").attr("src","sq/img/x-1.jpg");
			}
		else if(_index==1){
			if($("input[name=zhf]").val()!=""&&$("input[name=whf]").val()!=""){
				$("input[name=zhf]").val("");
				$("input[name=whf]").val("");
				}
			$("input[name=xzname]").val("lkf");
			$("img.mpic").attr("src","sq/img/x-2.jpg");
			}
		else if(_index==2){
			if($("input[name=zhf]").val()!=""&&$("input[name=lkf]").val()!=""){
				$("input[name=zhf]").val("");
				$("input[name=lkf]").val("");
				}
			$("input[name=xzname]").val("whf");
			$("img.mpic").attr("src","sq/img/x-3.jpg");
			}
			event.preventDefault();
			})
    });
	

	$("button.shanchu")[0].addEventListener('touchstart', function(event){
			var _wz=$("input[name=xzname]").val();
		    var _v=$("input[name="+_wz+"]").val();
			if(_v.length>0){
				var _nv=_v.substring(0,_v.length-1);
				$("input[name="+_wz+"]").val(_nv);
				}
			event.preventDefault();
	         });
			 
	$("button.shanchu")[0].addEventListener('mousedown', function(event){
			var _wz=$("input[name=xzname]").val();
		    var _v=$("input[name="+_wz+"]").val();
			if(_v.length>0){
				var _nv=_v.substring(0,_v.length-1);
				$("input[name="+_wz+"]").val(_nv);
				}
			event.preventDefault();
	         });

	$("button.jgbutton")[0].addEventListener('touchstart', function(event){
		var _zhf=$("input[name=zhf]").val();
		var _lkf=$("input[name=lkf]").val();
		var _whf=$("input[name=whf]").val();
		if((_zhf==""&&_lkf=="")||(_zhf==""&&_whf=="")||(_lkf==""&&_whf=="")){
			alert("请输入任意两个分数！");
			return;
			}
		_rest=1;
		$.post("sjl.html",{"num":1},function(){});
		if(_zhf==""){
			_zhf=(_lkf*2.5)*0.6+_whf*0.4;
			$("input[name=zhf]").val(_zhf.toFixed(2));
			$("img.mpic").attr("src","sq/img/x-11.jpg");
			}
		else if(_lkf==""){
			_lkf=(_zhf-_whf*0.4)/1.5;
			$("input[name=lkf]").val(_lkf.toFixed(2));
			$("img.mpic").attr("src","sq/img/x-22.jpg");
			}
		else if(_whf==""){
			_whf=(_zhf-_lkf*1.5)*2.5;
			$("input[name=whf]").val(_whf.toFixed(2));
			$("img.mpic").attr("src","sq/img/x-33.jpg");
			}
		event.preventDefault();
		})	
	
	$("button.jgbutton")[0].addEventListener('mousedown', function(event){
		var _zhf=$("input[name=zhf]").val();
		var _lkf=$("input[name=lkf]").val();
		var _whf=$("input[name=whf]").val();
		if((_zhf==""&&_lkf=="")||(_zhf==""&&_whf=="")||(_lkf==""&&_whf=="")){
			alert("请输入任意两个分数！");
			return;
			}
		_rest=1;
		$.post("sjl.html",{"num":1},function(){});
		if(_zhf==""){
			_zhf=(_lkf*2.5)*0.6+_whf*0.4;
			$("input[name=zhf]").val(_zhf.toFixed(2));
			$("img.mpic").attr("src","sq/img/x-11.jpg");
			}
		else if(_lkf==""){
			_lkf=(_zhf-_whf*0.4)/1.5;
			$("input[name=lkf]").val(_lkf.toFixed(2));
			$("img.mpic").attr("src","sq/img/x-22.jpg");
			}
		else if(_whf==""){
			_whf=(_zhf-_lkf*1.5)*2.5;
			$("input[name=whf]").val(_whf.toFixed(2));
			$("img.mpic").attr("src","sq/img/x-33.jpg");
			}
		event.preventDefault();
		})	
	
//	$("td.wkzhf")[0].addEventListener('touchstart', function(){
//		$(window).scrollTop(0);
//		$("input[name=zhf]").val($(this).html());
//		$("img.mpic").attr("src","/sq/img/x-1.jpg");
//		});
//	$("td.lkzhf")[0].addEventListener('touchstart', function(){
//		$(window).scrollTop(0);
//		$("input[name=zhf]").val($(this).html());
//		$("img.mpic").attr("src","/sq/img/x-1.jpg");
//		});
	
	});
function setVal(){
	$("input[name=zhf]").val("");
	$("input[name=lkf]").val("");
	$("input[name=whf]").val("");
	$("input[name=xzxx]").val("");
	$("select[name=yxname]").html("<option value=''>院校名称</option>");
	}

function tczhf(zhi){
	$("input[name=zhf]").val(zhi);
	$("input[name=xzxx]").val(zhi);	
	}

function xuanji(str){
	var _zhf=parseInt($("input[name=zhf]").val());
	var _lkf=parseInt($("input[name=lkf]").val());
	var _whf=parseInt($("input[name=whf]").val());
	$("input[name=zhuang]").val(str);
	if($("input[name=xzxx]").val()!=""){
		if(str=="lkf"&&_lkf!=""){
			var _whf=parseInt(2*(_zhf-_lkf*3.75));
			$("input[name=whf]").val(_whf);
			}
		if(str=="whf"&&_whf!=""){
			var _lkf=parseInt((_zhf-_whf/2)/3.75);
			$("input[name=lkf]").val(_lkf);
			}
		}
	else{
		if(_lkf!=""&&_whf!=""){
			var _zhf=parseInt(_lkf*3.75+_whf/2);
			$("input[name=zhf]").val(_zhf);
			}
		}
	}
	
function onchangp(){
	var _wlk=$("input[name=wlk]").val();
	var _diqu=$("select[name=diqu]").val();
	var _pici=$("select[name=pici]").val();
	getOptions(_wlk,_diqu,_pici);
	setVal();
	}
	
function getOptions(_wlk,_diqu,_pici){
	$.getJSON("main_do.html",{"action":"getdata","wlk":_wlk,"diqu":_diqu,"pici":_pici},function(data){
		if(data&&data.length>=1){
		$("select[name=yxname]").empty();
		$("select[name=yxname]").append("<option value=''>院校名称</option>");
		for(var _one in data){
			$("select[name=yxname]").append("<option value='"+data[_one][0]+"'>"+data[_one][1]+"</option>");
			}
		}
		else{
			$("select[name=yxname]").empty();
			$("select[name=yxname]").append("<option value=''>院校名称</option>");
			}
		});
	}

function showTips(){
	if($("input[name=xzxx]").val()!=""){
		var _str=$("input[name=zhuang]").val();
		if(_str=="lkf"){
			_onef=$("input[name=lkf]").val();
			_twof=$("input[name=whf]").val();
			}
		else{
			_onef=$("input[name=whf]").val();
			_twof=$("input[name=lkf]").val();
			}
		var _fen=$("input[name="+_str+"]").val();
		var _zhf=$("input[name=zhf]").val();
		var _school=$("select[name=yxname] option:selected").text();
		if(_str=="lkf")
		window.location.href="index0166.html?action=getsch&amp;zhf="+_zhf+"&onef="+_onef+"&twof="+_twof+"&type="+_str+"&sch="+_school;
		}
	else{
		var _lkf=$("input[name=lkf]").val();
		var _whf=$("input[name=whf]").val();
		if(_lkf=="" || _whf==""){
			alert("请先填写联考分和文化分！");
			$("input[name=lkf]").focus();
			return;
			}
		var _wlk=parseInt($("input[name=wlk]").val());
		window.location.href="index883d.html?action=school&amp;lkf="+_lkf+"&whf="+_whf+"&wlk="+_wlk;
		}
	}

function getschool(){
	var _wlk=$("input[name=wlk]").val();
	var _zhf=$("input[name=zhf]").val();
	var _diqu=$("select[name=diqu]").val();
	$.getJSON("main_do.html",{"action":"getdiqu","wlk":_wlk,"diqu":_diqu,"zhf":_zhf},function(data){
		$(".t-p-p p").remove();
		var _len=data.length>=4?4:data.length;
		for(var i=0;i<_len;i++){
		$("<p/>").html(data[i]['sname']+"  "+data[i]['xfx']).appendTo($(".t-p-p"));
		}
		});
	}