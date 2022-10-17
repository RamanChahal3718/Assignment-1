"use strict";
//IIFE -- Immediately Invoked Function Expression
// AKA - Self Executing Function 
(function () {
  // declaring string variables
  let bio = "I'm Ramandeep Singh and I just graduated from Georgian College Interactive Media Design with a 2-year diploma. I just started a start-up with my college friends where we help clients create software and websites, as well as provide SEO services for free for the first year. ";

  let para1 = "This striking illustration of the airplane, as it slowly moves across the screen, is sure to grab website visitors’ attention.This page has everything you need in an effective homepage: An image that tells a story but isn’t too distracting, use of white space, easy nav bar, a tagline or slogan, and a clear CTA.It’s a clean design that’s free of any distractions and invites visitors to learn more about the brand.";


  let para2 = "The interactive homepage shows common work accessories, like headphones and keyboard with clear, to-the-point copy.Superlist effectively uses white space to keep the focus on its copy. However, to facilitate navigation, they include a small button with an arrow icon to indicate that there’s more to see on the page once you scroll.From there, the fun visuals continue – keeping you engaged as you learn more about the brand.";


  let para3 = "Parallax, bold colors, and negative space shape the design and experience of Swab the World’s website. The organization brings awareness to stem cell donations. Their mission is to “Make sure every single patient finds their match. Period.” Photos of couples exhibiting love and emotions bring a human element to a historically complex and scientific process.From a technical perspective, the design makes moving down the page feel natural, ensuring the readers reach each point of copy and every CTA on the homepage.";


  let service1 = "While logo design is one aspect of graphic design, there are plenty of other things we can design for our clients, like business cards, brochures and marketing materials, labels, and more.";

  let service2 = "Logo design can work hand-in-hand with web design, so we can package the two services together, or we can offer each service separately.";

  let service3 = "As a web designer, we always create the website to be search engine friendly,";

  // 
  function Start() {
    // calling text from the String Variable for about page
    $('#mybio').text(bio);

    projectPage();

    validateContactFormAndSubmit();

    servicePage();

  }

  function projectPage() {
    // calling text from the String Variable for project page
    $('#para-1').text(para1);
    $('#para-2').text(para2);
    $('#para-3').text(para3);
  }

  function servicePage() {
    // calling text from the string variable for the services page
    $('#service-1').text(service1);
    $('#service-2').text(service2);
    $('#service-3').text(service3);
  }

  // validating form and redirecting it to the about page
  function validateContactFormAndSubmit() {
    $('#contact-submit').on('click', function () {
      let fNameVal = $('#fName').val();
      let lNameVal = $('#lName').val();
      if (!allLetter(fNameVal)) {
        alert('Please input alphabet characters only for First Name');
        return;
      }
      if (!allLetter(lNameVal)) {
        alert('Please input alphabet characters only for Last Name');
        return;
      }
      window.location.href = '/about.html';

    });
  }

  function allLetter(inputtxt) {
    var letters = /^[A-Za-z]+$/;
    if (inputtxt.match(letters)) {
      return true;
    }
    else {
      return false;
    }
  }

  window.addEventListener("load", Start);

})();