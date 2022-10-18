export function doSomething() {
 
  // When the user scrolls the page, execute myFunction 
  window.onscroll = function() {myFunction()};
  
  // Get the header
  var header = document.getElementById("main-menu-container");
  
  // Get the offset position of the navbar
  var sticky = header.offsetTop;
  
  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
}

var topBannerDown = document.getElementById("mturk-top-banner-drop-down-button")

topBannerDown.addEventListener("click", function(){
  console.log("down")
  document.getElementById("wustl-branding").classList.remove("up")
  document.getElementById("wustl-branding").classList.add("down")
})

  var topBannerUp = document.getElementById("mturk-top-banner-collapse-button")

  topBannerUp.addEventListener("click", function(){
    console.log("up")
    document.getElementById("wustl-branding").classList.remove("down")
    document.getElementById("wustl-branding").classList.add("up")})

  