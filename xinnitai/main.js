document.oncontextmenu=function(){return false;};
document.onselectstart=function(){return false;};

var follow_flag = getCookie("follow_flag");

console.log("follow_flag："+follow_flag);


if (follow_flag == null || follow_flag == "" || follow_flag == "false" || follow_flag == false){
    document.getElementById("follow_flag_html").innerHTML = "Follow";
    document.getElementById("follow_number_html").innerHTML = " 1";
} else if (follow_flag == true || follow_flag == "true") {
    document.getElementById("follow_flag_html").innerHTML = "Unfollow";
    document.getElementById("follow_number_html").innerHTML = " 2";
}

function follow() {
    var follow_flag = getCookie("follow_flag");
    if (follow_flag == null || follow_flag == "" || follow_flag == "false" || follow_flag == false){
        setCookie("follow_flag",true);
        document.getElementById("follow_flag_html").innerHTML = "Unfollow";
        var follow_flag = getCookie("follow_flag");
        document.getElementById("follow_number_html").innerHTML = " 2";
        console.log("follow_flag："+follow_flag);
    } else if (follow_flag == true || follow_flag == "true"){
        setCookie("follow_flag","false");
        document.getElementById("follow_flag_html").innerHTML = "Follow";
        var follow_flag = getCookie("follow_flag");
        document.getElementById("follow_number_html").innerHTML = " 1";
        console.log("follow_flag："+follow_flag);
    }
}


document.onkeydown = document.onkeyup = document.onkeypress = function(event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];

    if (e && e.keyCode == 123) {
            mAlert();
            //e.returnValue = false;
            //return (false);
    }
}

function mAlert() {
    if (confirm("操作控制台可能将造成不可挽回的后果。\n点击确定表示确认后果自负并打开控制台！")) {

    }else {
        
        var e = event || window.event || arguments.callee.caller.arguments[0];
    
        if (e && e.keyCode == 123) {
                e.returnValue = false;
                return (false);
        }
        
    }
    
}


function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

    if (arr = document.cookie.match(reg)) return unescape(arr[2]);
    else return null;
}

function setCookie(name, value) {
    document.cookie = name + "=" + escape(value);
}