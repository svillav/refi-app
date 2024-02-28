$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#back-to-top").removeClass("d-none");
    } else {
      $("#back-to-top").addClass("d-none");
    }
  });

  $("#back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });
});
