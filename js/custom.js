
$(document).ready(function() {

/* jQuery Pre loader */
  setTimeout(function(){
    $('.preloader').fadeToggle();
  },1000);

   
  // -----------------------------------------------*/

  $(function() {
    $('body').vegas({
        slides: [
            { src: 'images/allpark.png' },
            { src: 'images/parking.jpg' }
        ],
        timer: false,
        transition: [ 'zoomOut', ]
    });
  });

  // Smooth Scrolling

  $(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });
  
  // -----------------------------------------------------------------------------------------------------*/

   /* Back top
  -----------------------------------------------*/
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
        $('.go-top').fadeIn(200);
        } else {
          $('.go-top').fadeOut(200);
        }
        });   
        // Animate the scroll to top
      $('.go-top').click(function(event) {
        event.preventDefault();
      $('html, body').animate({scrollTop: 0}, 300);
      })
      

  /* wow
  -------------------------------*/
  new WOW({ mobile: false }).init();

  });


  // Submit form

 function SendMail() {
  var params = {
    register_id : document.getElementById("register_id").value,
    kontroll_id : document.getElementById("kontroll_id").value,
    message : document.getElementById("message").value 

  }
  emailjs.send("service_mphtnop", "template_ryxwxmm", params).then(function (res) {
    alert("Success! " + res.status); 
  })
 }

  
