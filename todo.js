$("ul").on("click", "li", function () {
    $(this).toggleClass("completed"); // Make the line passthrough the text
  });
  
  // Remove the task from the list
  $("ul").on("click", "span", function (event) {
    $(this)
      .parent()
      .fadeOut(500, function () {
        $(this).remove();
      });
    event.stopPropagation();
  });
  
  // Add a new task to the list
  $("input[type= 'text'").keypress(function (event) {
    if (event.which === 13) {
      //   grabbing text from the input
      var todoText = $(this).val();
      $(this).val("");
      //creating element to add
      $("ul").append(
        "<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>"
      );
    }
  });
  
  
  $(".fa-plus").click(function () {
    $("input[type= 'text'").fadeToggle();
  });