$(document).ready(function() {
  var animals = ["puppies", "kittens", "pandas", "seals", "walruses"]
  animals.forEach(function(animal){
    $("button#" + animal).click(function() {
      $("." + animal + "showing").toggle();
    });
  });
});
