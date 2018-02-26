function stripeTabls() {
	if(!document.getElementsByTagName) return false;
	if(!document.getElementsByTagName("table")) return false;
	var table=document.getElementsByTagName("table")[0];
	var odd=false;
	var rows=table.getElementsByTagName("tr");
	for (var i = 0; i < rows.length; i++) {
		if (odd==true) {
			//rows[i].style.background="#ffc";
			addClass(rows[i],"odd");
			odd=false;
		}
		else{
			odd=true;
		}
	}
}

function highlightRows() {
 if(!document.getElementsByTagName) return false;
 var rows=document.getElementsByTagName("tr");
 for (var i = 0; i < rows.length; i++) {
 	rows[i].onmouseover=function(){
      this.style.fontWeight="bold";
 	}
 	rows[i].onmouseout=function(){
 		this.style.fontWeight="normal";
 	}
 }
}

function displayAbbreviations() {
    if(!document.getElementsByTagName) return false;
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    //获取缩略词
	var abbr=document.getElementsByTagName('abbr');
	//为不支持abbr标签的浏览器预留退路
	if(abbr.length<1) return false;
	//定义数组储存缩略词的title和文本
    var defs=new Array();
    for (var i = 0; i < abbr.length; i++) {
    	var definition=abbr[i].getAttribute("title");
    	var key=abbr[i].lastChild.nodeValue;
    	defs[key]=definition;//js中数组的下标可以是字符串
    }
    //创建dl元素
    var dlist=document.createElement("dl");
    for(key in defs){
    	var define=defs[key];
    	var dtitle=document.createElement("dt");
    	var dtitle_text=document.createTextNode(key);
    	dtitle.appendChild(dtitle_text);
    	var ddesc=document.createElement("dd");
    	var ddesc_text=document.createTextNode(define);
        ddesc.appendChild(ddesc_text);
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    //创建h3元素
    var h3=document.createElement("h3");
    var h3_text=document.createTextNode("Abbreviations");
    h3.appendChild(h3_text);
    var content=document.getElementById('content');
    //把dl元素和h2元素加到body上
    content.appendChild(h3);
    content.appendChild(dlist);
}

addLoadEvent(stripeTabls);
addLoadEvent(highlightRows);
addLoadEvent(displayAbbreviations);