var news_count = 30;
var timer = setInterval(function(){news_extract();},3000);


function news_extract(){
//get short news and links
var news = document.getElementsByClassName("news-card-content news-right-box");
var links = document.getElementsByClassName("source")

if (news.length == news_count){

clearInterval(timer);
//open new tab with details
var newwin = window.open();
for(var i=0; i<news.length; i++)
{
newwin.document.write('shorts:'+ news[i].innerText+ 'link:' + links[i].href + "<br>" + "<br>") ;
}
}


document.getElementById("load-more-btn").click();
}
