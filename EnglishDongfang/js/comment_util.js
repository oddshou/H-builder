
var yd_keyform = "learnenglishsf";
var yd_keyid = 1146860801;

function getClip(){
	if (mui.os.ios) {
		var UIPasteboard  = plus.ios.importClass("UIPasteboard");
		var generalPasteboard = UIPasteboard.generalPasteboard();
		// 设置/获取文本内容:
//		generalPasteboard.setValueforPasteboardType("testValue", "public.utf8-plain-text");
		var value = generalPasteboard.valueForPasteboardType("public.utf8-plain-text");
		return value;
	}else if(mui.os.android){
        var Context = plus.android.importClass("android.content.Context");
        var main = plus.android.runtimeMainActivity();
        var clip = main.getSystemService(Context.CLIPBOARD_SERVICE);
        return plus.android.invoke(clip,"getText");		
	}
}

