
// uploadData.js is the main function js file for the question app

// notify user the data are start to uploaded
function startDataUpload() {
  alert ("Start upload");

// to loop through all the radio button value to get the correct answer from user's input
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

  // specify the value from the text user put in
  var question = document.getElementById("question").value;
  var answer1 = document.getElementById("answer1").value;
  var answer2 = document.getElementById("answer2").value;
  var answer3 = document.getElementById("answer3").value;
  var answer4 = document.getElementById("answer4").value;


 // specify post strings
  var postString = "question="+question + "&answer1="+answer1 + "&answer2="+answer2+ "&answer3="+answer3+ "&answer4="+answer4+ "&answer_true="+answer_true;
  

  // get the geometry values
  var latitude = document.getElementById("latitude").value;
  var longitude = document.getElementById("longitude").value;
  postString = postString + "&latitude=" + latitude + "&longitude=" + longitude;
  processData(postString);
  }

  // give a variable for processData function
  var client;
  // function for posting the data to server
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

