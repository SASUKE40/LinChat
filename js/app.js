(function($) {
	//全局配置(通常所有页面引用该配置，特殊页面使用mui.init({})来覆盖全局配置)
	$.initGlobal({
		swipeBack: true
	});
	var back = $.back;
	$.back = function() {
		var current = plus.webview.currentWebview();
		if (current.mType === 'main') { //模板主页面
			current.hide('auto');
			setTimeout(function() {
				document.getElementById("title").className = 'mui-title mui-fadeout';
				current.children()[0].hide("none");
			}, 200);
		} else if (current.mType === 'sub') {
			if ($.targets._popover) {
				$($.targets._popover).popover('hide');
			} else {
				current.parent().evalJS('mui&&mui.back();');
			}
		} else {
			back();
		}
	}
})(mui);

var dump_obj = function(myObject) {  
  var s = "";  
  for (var property in myObject) {  
  	s = s + "\n "+property +": " + myObject[property];  
  }  
  console.log(s);  
}

//var wsServer = 'ws://192.168.191.1:2015'; 
var wsServer = 'ws://10.0.2.2:2015'; 
//var wsServer = 'ws://192.168.191.6:2015'; 