function getEachStory(id){
	let url = 'https://hacker-news.firebaseio.com/v0/item/'+id+'.json?print=pretty';
  	var xhttp = new XMLHttpRequest();
  	xhttp.onreadystatechange = function() {
    		if (this.readyState == 4 && this.status == 200) {
      	console.log(this.responseText);
			//this data is to be displayed on html page. so call your renderHTML function here
      var ourData = JSON.parse(this.responseText);
       renderHTML(ourData);
     
    		}
  	};
  	xhttp.open("GET", url, true);
  	xhttp.send();
}
function getAllStories(all, totalLeft){
	let i;
	for(i = 0; i<all.length; i++){
        //   ourRequest.open('GET','https://hacker-news.firebaseio.com/v0/item/'+i+'.json?print=pretty');
		getEachStory(all[i]);		
		console.log(all[i]);
		if(i == 5)
			break; //just limiting the records;
	}

}
function getList(type){
	var all = [];
	var totalLeft = 0;
	//document.getElementById("allNews").innerHTML = "Loading...";
        var url = "https://hacker-news.firebaseio.com/v0/"+type+".json?print=pretty";
        var xhttp = new XMLHttpRequest();
  	xhttp.onreadystatechange = function() {
    		if (this.readyState == 4 && this.status == 200) {
      			all =  JSON.parse(this.responseText);
			console.log(all);
			totalLeft = all.length;
			getAllStories(all, totalLeft);
    		}
  	};
  	xhttp.open("GET", url, true);
  	xhttp.send();
}
getList("newstories");


function renderHTML(arr) {
    var out = "";
    var i;
    for(i=0;i<10;i++){
        out += '<h4><a href="' + arr.url + '">' + 
        arr.title + '</a></h4><p> <i class="fa fa-user" aria-hidden="true"></i> &nbsp; ' + arr.by+ '</p>';
   }
    document.getElementById("articles").innerHTML = out;
}
