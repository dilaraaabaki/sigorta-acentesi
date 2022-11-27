// Carousel JS CODES
var multipleCardCarousel = document.querySelector(
    "#carouselExampleControls"
  );
  if (window.matchMedia("(min-width: 768px)").matches) {
    var carousel = new bootstrap.Carousel(multipleCardCarousel, {
      interval: false,
    });
    var carouselWidth = $(".carousel-inner")[0].scrollWidth;
    var cardWidth = $(".carousel-item").width();
    var scrollPosition = 0;
    $("#carouselExampleControls .carousel-control-next").on("click", function () {
      if (scrollPosition < carouselWidth - cardWidth * 4) {
        scrollPosition += cardWidth;
        $("#carouselExampleControls .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
    $("#carouselExampleControls .carousel-control-prev").on("click", function () {
      if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
        $("#carouselExampleControls .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
  } else {
    $(multipleCardCarousel).addClass("slide");
  }
  // FORM JS CODES böyle oluyor işte 
  const form = document.querySelector("contact-form");
  
  var button = document.getElementById("button");
  button.addEventListener("button", e => {
  e.preventDefault();
  let firstName = document.querySelector("firstname").value;
  let lastName = document.querySelector("lastname").value;
  let phone = document.querySelector("phone").value;
  let email = document.querySelector("email").value;
  let address= document.querySelector("address").value;
  let city = document.querySelector("city").value;
  let postcode = document.querySelector("postcode").value;
  document.querySelector("contact-form").reset();

  sendEmail(firstName,lastname,phone,email,address,city,postcode);
})