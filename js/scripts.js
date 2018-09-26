//Business Logic

function mark(){
  var ans1 = $("input:radio[name=ques1]:checked").val();
  var ans2 = $("input:radio[name=ques2]:checked").val();
  var ans3 = $("input:radio[name=ques3]:checked").val();
  var ans4 = $("input:radio[name=ques4]:checked").val();
  var ans5 = $("input:radio[name=ques5]:checked").val();
  var answerSum = 0;
  if (ans1 == "correct"){
    answerSum += 1;
  };
  if (ans2 == "correct"){
    answerSum += 3;
  };
  if (ans3 == "correct"){
    answerSum += 2;
  };
  if (ans4 == "correct"){
    answerSum += 2.5;
  };
  if (ans5 == "correct"){
    answerSum += 2;
  };
  alert(answerSum)
  $("p#result").append(answerSum);

};



//fetch values
/* paste form "<form name="questions">  </form>" in HTML as this enables the below filepath using names to work
function check(){
  var ans1 = document.questions.ques1.value;
  var ans2 = document.questions.ques2.value;
  var ans3 = document.questions.ques3.value;
  var ans4 = document.questions.ques4.value;
  var ans5 = document.questions.ques5.value;
  var answersum = 0
}
if (ans1 == "correct"){
  answersum += 2;
};
if (ans2 == "correct"){
  answersum += 2;
};
if (ans3 == "correct"){
  answersum += 2;
};
if (ans4 == "correct"){
  answersum += 2;
};
if (ans5 == "correct"){
  answersum += 2;
};
*/
//integer values

//add values and push sum to html

//User Interface
$(document).ready(function(){
    $(".start").click(function(){
    $("div#ques1").show();
    });
    $(".proceed1").click(function(){
    $("div#ques1").hide()
    $("div#ques2").show()
    });
    $(".proceed2").click(function(){
    $("div#ques2").hide()
    $("div#ques3").show()
    });
    $(".proceed3").click(function(){
    $("div#ques3").hide()
    $("div#ques4").show()
    });
    $(".proceed4").click(function(){
    $("div#ques4").hide()
    $("div#ques5").show()
    });
    $(".proceed5").click(function(){
    $("div#ques5").hide()
    $("div#scoresheet").show()
    });
    $(".proceedsheet").click(function(){
    $("div#scoresheet").hide()
    $("div#score").show()
    });

})
/*<div id="ques">
  <center><p>" + keys[i] + "</p>
    <label><input type="radio":checked>" + values[i] + </label> <br>
    <label><input type="radio":checked> opt2</label><br>
    <label><input type="radio":checked> opt3</label><br>
    <label><input type="radio":checked> opt4<label><br>

    <button type="radio" class="button">Proceed</button><centre>


    $(".start").click(function(){
       var ques1 = document.getElementById(ques1);
        $("div#ques1").style.display =block
</div>
*/
