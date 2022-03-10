
$(document).ready(function() {

  // alert("Outside submit function is working");

  $("#blanks form").submit(function(d) {
    var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];
    
    // alert("submit start is working");
    
    blanks.forEach(function(blank){ 

      // debugger;
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput).val();
    });
    
    // alert("submit end is working");

    d.preventDefault();

    $("#story").show();
  });
});
