//Business Logic
function Options(a,b,c,d) {
    this.opt= a,
    this.opt2 = b,
    this.opt3 = c,
    this.opt4 = d,
}

var ques1 = new Options("ECMAScript","Vue","Java","None of the above")

var ques2 = new Options("It is an element of JavaScript which allows prototypal inheritance", "A constructor is a method used to create objects", "A constructor is used to create objects", "A constructor creates and initializes an object within an id"

var ques3 = new Options("An array", "An object", "A multi-string", "None of the above")

var ques4  = new Options("Use console.log to check for breaks", "Confirming file paths for fetched documents i.e .js, .css", "Unminify your code", "All of the above")
Question.prototype.clicks = function(){
    var keys = Object.keys(this)
    var values = Object.values(this)
    for (var i = 0; i < keys.length; i++) {
        $(".answer").append("<li class='opt'>" + "keys[i]" + ". "+ values[i]+ "</li>")
    };
}

// User Interface Logic
$(document).ready(function(){

  $(".button").click(function(){
    //$("li.opt").remove();
    ques1.clicks();
  }) //end of ques1 button
/*
  $(".button").click(function(){
    $("li.opt").remove();
    ques2.clicks();
  }) //end of ques2 button
  $(".button").click(function(){
    $("li.opt").remove();
    ques3.clicks();
  }) //end of ques3 button
*/
})

/*
      <div class="questions">
          <label>
            <input type="" value="ECMAScript" checked>
            ECMAScript
          </label>
      </div>

      var flavor = $("input:q1[value=ECMAScript]:checked").val();
                Cookies & Cream

      */
