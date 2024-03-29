/////////// On-Load Stuff //////////////

/* Hide page content on load */
//$(".intro-slider").hide();
$(".video-page-content").hide();
$(".contact-page-content").hide();
$(".experiments-page-content").hide();
$(".resume-page-content").hide();
$(".social-media-box").hide();

/* Slide in/out intro  */
setTimeout(function(){
  $("#intro-slider-name").css("margin-left", "0px");
}, 1000);
setTimeout(function(){
  $("#intro-slider-name").css("margin-left", "-500px");
}, 3000);
setTimeout(function(){
  $("#intro-slider-info").css("margin-left", "0px");
}, 3000);
setTimeout(function(){
  $("#intro-slider-info").css("margin-left", "-500px");
}, 6000);



/////////// Global Parameters //////////////
var active = false;
var activePage = "";

/////////// Button Objects //////////////
var orangeButton = {
  color: "orange",
  translateNavBlock: function() {
    $(".nav-block").removeClass("exact-center");
    $(".nav-block").addClass("bottom-right");
    $(".nav-block").addClass("minimize-nav-block");
    $(".social-media-box").addClass("sm-box-br");
  },
  openPage: function(){
    $("body").css("background-color","orange"); /* This should be fixed so that I'm calling a class, and styling a container not the whole body */
    $(".video-page-content").show();
    $(".social-media-box").show();
  }
};

var redButton = {
  color: "red",
  translateNavBlock: function() {
    $(".nav-block").removeClass("exact-center");
    $(".nav-block").addClass("bottom-left");
    $(".nav-block").addClass("minimize-nav-block");
    $(".social-media-box").addClass("sm-box-bl");
  },
  openPage: function(){
    $("body").css("background-color","red"); /* This should be fixed so that I'm calling a class, and styling a container not the whole body */
    $(".experiments-page-content").show();
    $(".social-media-box").show();
  }
};

var greenButton = {
  color: "green",
  translateNavBlock: function() {
    $(".nav-block").removeClass("exact-center");
    $(".nav-block").addClass("top-right");
    $(".nav-block").addClass("minimize-nav-block");
    $(".social-media-box").addClass("sm-box-tr");
  },
  openPage: function(){
    $("body").css("background-color","green"); /* This should be fixed so that I'm calling a class, and styling a container not the whole body */
    $(".resume-page-content").show();
    $(".social-media-box").show();
  }
};

var blueButton = {
  color: "blue",
  translateNavBlock: function() {
    $(".nav-block").removeClass("exact-center");
    $(".nav-block").addClass("top-left");
    $(".nav-block").addClass("minimize-nav-block");
    $(".social-media-box").addClass("sm-box-tl");
  },
  openPage: function(){
    $("body").css("background-color","blue"); /* This should be fixed so that I'm calling a class, and styling a container not the whole body */
    $(".contact-page-content").show();
    $(".social-media-box").show();
  }
};


/////////// Helper Functions //////////////

/* Clear Active Page Content */
var clearPageContent = function(activePage) {

    /* Hide Page Content */
    $(".video-page-content").hide();
    $(".contact-page-content").hide();
    $(".experiments-page-content").hide();
    $(".resume-page-content").hide();
    $(".social-media-box").hide();

    /* Remove Page Styling */
    $("body").css("background-color","");

    /* Send Nav Block Back Home */
    $(".nav-block").removeClass("top-left");
    $(".nav-block").removeClass("top-right");
    $(".nav-block").removeClass("bottom-left");
    $(".nav-block").removeClass("bottom-right");
    $(".nav-block").removeClass(activePage);
    $(".nav-block").removeClass("minimize-nav-block");
    $(".nav-block").addClass("exact-center");

    /* Remove Social Media Styling */
    /* TO DO: This is extraneous */
    $(".social-media-box").removeClass("sm-box-tl");
    $(".social-media-box").removeClass("sm-box-tr");
    $(".social-media-box").removeClass("sm-box-bl");
    $(".social-media-box").removeClass("sm-box-br");

};



/////////// Main Function //////////////

var main = function(clickedButton) {

  if (active && clickedButton.color === activePage) {

    clearPageContent(activePage);
    active = false;
    activePage = "";

  } else if (active) {

    clearPageContent(activePage);

    switch(clickedButton.color) {
      case "orange":
        orangeButton.translateNavBlock();
        setTimeout(function() {orangeButton.openPage();}, 600);
        break;
      case "red":
        redButton.translateNavBlock();
        setTimeout(function() {redButton.openPage();}, 600);
        break;
      case "green":
        greenButton.translateNavBlock();
        setTimeout(function() {greenButton.openPage();}, 600);
        break;
      case "blue":
        blueButton.translateNavBlock();
        setTimeout(function() {blueButton.openPage();}, 600);
        break;
      default:
        break;
    }

    active = true;
    activePage = clickedButton.color;

  } else {

    switch(clickedButton.color) {
      case "orange":
        orangeButton.translateNavBlock();
        setTimeout(function() {orangeButton.openPage();}, 600);
        break;
      case "red":
        redButton.translateNavBlock();
        setTimeout(function() {redButton.openPage();}, 600);
        break;
      case "green":
        greenButton.translateNavBlock();
        setTimeout(function() {greenButton.openPage();}, 600);
        break;
      case "blue":
        blueButton.translateNavBlock();
        setTimeout(function() {blueButton.openPage();}, 600);
        break;
      default:
        break;
    }

    active = true;
    activePage = clickedButton.color;

  }

};


/////////// Events //////////////

$(".nav-button-1").on('click', function() {
  var clickedButton = orangeButton;
  main(clickedButton);
});
$(".nav-button-2").on('click', function() {
  var clickedButton = redButton;
  main(clickedButton);
});
$(".nav-button-3").on('click', function() {
  var clickedButton = greenButton;
  main(clickedButton);
});
$(".nav-button-4").on('click', function() {
  var clickedButton = blueButton;
  main(clickedButton);
});
