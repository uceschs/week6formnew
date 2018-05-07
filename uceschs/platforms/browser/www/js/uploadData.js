
function startDataUpload() {
  alert ("start data upload");

  function getTrueAnswer(){
  if (document.getElementById("check1_true").checked){
      var answer_true = "answer1" ;
    }
    else if (document.getElementById("check2_true").checked) {
      var answer_true = "answer2";
    }
    else if (document.getElementById("check3_true").checked) {
      var answer_true = "answer3";
    }
    else if (document.getElementById("check4_true").checked) {
      var answer_true = "answer4";
    }
    return answer_true;
    }
  var answer_true = getTrueAnswer();


  var question = document.getElementById("question").value;
  var answer1 = document.getElementById("answer1").value;
  var answer2 = document.getElementById("answer2").value;
  var answer3 = document.getElementById("answer3").value;
  var answer4 = document.getElementById("answer4").value;


  alert(question);
  var postString = "question="+question + "&answer1="+answer1 + "&answer2="+answer2+ "&answer3="+answer3+ "&answer4="+answer4+ "&answer_true="+answer_true;
  

  // now get the geometry values
  var latitude = document.getElementById("latitude").value;
  var longitude = document.getElementById("longitude").value;
  postString = postString + "&latitude=" + latitude + "&longitude=" + longitude;
  alert("get txt correct");
  processData(postString);
}

var client;

function processData(postString) {
   client = new XMLHttpRequest();
   client.open('POST','http://developer.cege.ucl.ac.uk:30296/uploadData',true);
   client.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   client.onreadystatechange = dataUploaded;  
   client.send(postString);
}
// create the code to wait for the response from the data server, and process the response once it is received
function dataUploaded() {
  // this function listens out for the server to say that the data is ready - i.e. has state 4
  if (client.readyState == 4) {
    // change the DIV to show the response
    document.getElementById("dataUploadResult").innerHTML = client.responseText;
    }
}

