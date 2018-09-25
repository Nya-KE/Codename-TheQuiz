//Business Logic
function Options(question,a,b,c,d) {
    this.question = question,
    this.opt1 = a,
    this.opt2 = b,
    this.opt3 = c,
    this.opt4 = d,
}

var ques1 = new Options("What is the other name for JavaScript?","ECMAScript","Vue","Java","None of the above")

var ques2 = new Options("What is most true about a constructor?","It is an element of JavaScript which allows prototypal inheritance", "A constructor is a method used to create objects", "A constructor is used to create objects", "A constructor creates and initializes an object within an id"

var ques3 = new Options("I have multiple elements which I would like to encapsulate. What do I use?","An array", "An object", "A multi-string", "None of the above")

var ques4  = new Options("What way can JS code be debugged?","Use console.log to check for breaks", "Confirming file paths for fetched documents i.e .js, .css", "Unminify your code", "All of the above")

Options.prototype.clicks = function(){
    var keys = Object.keys(this)
    var values = Object.values(this)
    for (var i = 0; i < keys.length; i++) {
        if (i = 0) { $("p.answer").append(values[0])
      } else {
        $("input::checked").val();
        $(".answer").append("<li>" + keys[i] + ". "+ "<label>
          <input type='radio  value="ECMAScript" checked>"
          values[i]
        "</label>" + "</li>")
      }
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
