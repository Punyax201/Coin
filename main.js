
var count=0;
var hcount=0;
var tcount=0;
function heads() {
  document.getElementById('head').style="display:block;"
  document.getElementById('tail').style="display:none;"



}

function tails() {
  document.getElementById('tail').style="display:block;"
  document.getElementById('head').style="display:none;"

}



$(document).ready(function($){



  $('#click').on('click',function(){
    var val=Math.random();

    if(Math.ceil(val*100)<50){
    count++;
    hcount++;
    heads();
}
    else {
      count++;
      tcount++;
      tails();
    }

    document.getElementById("cnt").innerHTML="Test Count:"+count+" <br>Head count: "+hcount+"<br> Tail count: "+tcount;

  });
});
