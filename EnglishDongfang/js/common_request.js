
//dopost()
//请求成功回调
var success = function(response){
//	mui('#pullrefresh').pullRefresh().endPullupToRefresh(false);
	console.log(JSON.stringify(response));
	if (response.data == undefined) {
		return
	}
	if (response.data.length >= 0) {
		createList(response.data);
	}

};

function dopost(){
	mui.ajax(URL,{
		data:getrequest_data(),
		dataType:'json',//服务器返回json格式数据
		type:'post',//HTTP请求类型
		timeout:10000,//超时时间设置为10秒；
		headers:{'Content-Type':'application/json'},	              
		success:success,
		error:function(xhr,type,errorThrown){
			//异常处理；
			console.log(type);
			mui('#pullrefresh').pullRefresh().endPullupToRefresh(false);
			mui.toast('当前网络不给力，请稍后再试');
		}
	});			
}

/**
 * 下拉刷新具体业务实现
 */
function pulldownRefresh() {
	setTimeout(function() {
		var table = document.body.querySelector('.mui-table-view');
		var cells = document.body.querySelectorAll('.mui-table-view-cell');
		for (var i = cells.length, len = i + 3; i < len; i++) {
			var li = document.createElement('li');
			li.className = 'mui-table-view-cell';
			li.innerHTML = '<a class="mui-navigate-right">Item ' + (i + 1) + '</a>';
			//下拉刷新，新纪录插到最前面；
			table.insertBefore(li, table.firstChild);
		}
		mui('#pullrefresh').pullRefresh().endPulldownToRefresh(); //refresh completed
	}, 1500);
}
/**
 * 上拉加载具体业务实现
 */
function pullupRefresh() {
	console.log('pullupRefresh')
	dopost();
}