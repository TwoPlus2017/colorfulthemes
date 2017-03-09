
function goSearch() {
	
	var keyword = trim(replaceNon(document.getElementById('keyWord').value.toLowerCase()));
	var action = "";
	
	if (keyword != "") {
		action = "http://localhost:8100/search/" + keyword.replace(/\ /g,"-") + ".html";
		
		if (action != "") {
			document.indexForm.action = action;
			document.indexForm.submit();
		}
	} else {
		alert("Please enter the valid words.");
		return false;
	}
}

function trim(str){
	return str.replace(/(^\s*)|(\s*$)/g, "");
}

function replaceNon(str) {
	return str.replace(/[^a-z0-9A-Z ]/g, "");
}