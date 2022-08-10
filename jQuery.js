$(document).ready(function () {
  $(".img").css("display", "none");
  let number = 500;
  $(".img").each(function (index, obj) {
    //animation to all images
    $(obj).fadeIn(number);
    number = number + 300;
  });
  //will change the class of menu bar to active when hamburger menu is clicked
  $(".toggle-menu").click(function () {
    $("nav").toggleClass("active");
  });

  $(".SearchText").keyup(function () {
    //search for image name in image galler when form is submitted
    let searchInput = $(".SearchText").val().toLowerCase();
    console.log(searchInput);
    $(".img .desc").each(function (index, element) {
      let caption = $(element).text().toLowerCase();

      if (caption.includes(searchInput)) {
        $(element.parentElement).show();
        $("section").css("height", "auto");
      } else {
        $(element.parentElement).hide(); //Hide elements that dont include the search word.
        // $("section").css("max-height", "826px");
      }
    });
  });
});
