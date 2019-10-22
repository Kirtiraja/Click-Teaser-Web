$(document).ready(function() {
  $("button#puppies").click(function() {
    $("puppiesshowing").removeClass("hideAll");
    $("puppiesshowing").toggle();
    // $(".puppieshidden").toggle();
  });

  $("button#kittens").click(function() {
    $(".kittensshowing").toggle();
    // $(".kittenshidden").toggle();
  });

  $("button#pandas").click(function() {
      $(".pandasshowing").toggle();
  });

  $("button#seals").click(function() {
      $(".sealsshowing").toggle();
  });
  $("button#walruses").click(function() {
      $(".walruses").toggle();
  });

});
