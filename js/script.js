window.onload = function() {
  setTimeout(function() {
    $('.loader-wrap').addClass('loaded')
    setTimeout(function() {
      $('.loader-wrap').css('display', 'none')
    }, 1000)
  }, 1000)
}

$(document).ready(function() {
  initMobile()
  initMaterialize()
  initParticles()
  initTypeIt()
  initMasonry()
  initEventHandler()
  setScreenSize()
})

/* ============================== */
// Global
/* ============================== */

let globalScreenWidth = ''
let $body = $('body')

/* ============================== */
// Skills
/* ============================== */

const skillsImgRatio = 326 / 353
const mobileTabletNumColumns = 2
const mobileTabletPaddingValue = 10.5
const desktopNumColumns = 3
const desktopPaddingValue = 10.875
const largeDesktopNumColumns = 4
const largeDesktopPaddingValue = 11.25

let $skillsRow = $('#skills .row')
let $tileImages = $('.tile img.primary')
let $firstDouble = $('.tile.double:eq(0)').parent()
let $firstSingle = $('.tile.single:eq(0)').parent()
let $rightDouble = $('.tile.double:eq(2)').parent()
let $rightSingle = $('.tile.single:eq(5)').parent()
let $lastDouble = $('.tile.double:eq(3)').parent()
let $lastSingle = $('.tile.single:eq(7)').parent()

/* ============================== */
// Contact
/* ============================== */

const contactImgSrcBase = 'images/contact/profile-'
let $contactCard = $('#contact .card')
let $contactImg = $('#contact .card-image img')

function initMobile() {
  let ua = navigator.userAgent.toLowerCase();
  let isMacSafari =  /Safari/i.test(ua) && /Apple Computer/.test(navigator.vendor) && !/Mobi|Android/i.test(ua)
  let isMobile = /iphone|ipad|ipod|android|blackberry|windows phone|webos|IEMobile|Opera Mini/i.test(ua)
  let isIpad = ua.indexOf('ipad') != -1 || (ua.indexOf('macintosh') > -1 && 'ontouchend' in document)

  isMobile = isMobile || isIpad
  if (isMobile) {
    let height = $(window).height()
    $('section#intro').css('height', height)
    $body.addClass('mobile')    
  }
  
  if (isMacSafari) {
    $body.addClass('mac')
  }
}

function initMaterialize() {
  let elems = document.querySelectorAll('.scrollspy')
  
  let options = {
    getActiveElement: function(id) {
      return 'a[scroll-target="#' + id + '"]'
    }
  }
  
  M.ScrollSpy.init(elems, options)

  $('.tap-target').tapTarget()
}

function initParticles() {
  particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  })
}

function initTypeIt() {
  new TypeIt('#typeit-roles', {
    strings: [
      'Software Engineer',
      'Program Manager',
      'Keynote Speaker',
      'Hackathon Lover',
      'Aspiring Writer'
    ],
    speed: 100,
    startDelay: 2000,
    nextStringDelay: 4000,
    loop: true,
    breakLines: false,
    autoStart: false
  })
}

function initMasonry() {
  // init Masonry after all images have loaded
  let $grid = $('.grid').imagesLoaded(function() {
    $grid.masonry({
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      percentPosition: true
    })
  })
}

function initEventHandler() {
  $('a.scroll').on('click', function(e) {
    let $this = $(this)
    let target = $(this.getAttribute('scroll-target'))

    if (target.length) {
      e.preventDefault()

      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 750)

      $('a.scroll').removeClass('active')
      $this.addClass('active')
    }
  })

  $(window).resize(function() {
    let timeout = false // holder for timeout ID
    let delay = 500 // delay after event is "complete" to run callback

    clearTimeout(timeout)
    timeout = setTimeout(setScreenSize, delay)
  })
}

function setScreenSize() {
  let windowWidth = $(window).width()
  let windowHeight = $(window).height()
  let screenWidth = ''

  if (windowWidth <= 600) { // mobile
    screenWidth = 'mobile'
  } else if (windowWidth <= 992) { // tablet
    screenWidth = 'tablet'
  } else if (windowWidth <= 1200) { // desktop
    screenWidth = 'desktop'
  } else if (windowWidth > 1200) { // largeDesktop
    screenWidth = 'largeDesktop'
  }

  if (screenWidth != globalScreenWidth) {
    globalScreenWidth = screenWidth
    setSkillsLayout()
    setContactLayout()
  }

  if (windowHeight <= 600) { // short
    $body.addClass('short-height')
  } else { // not short
    $body.removeClass('short-height')
  }

  setSkillsStyles()
}

function setSkillsStyles() {
  let tileHeight = 0

  switch (globalScreenWidth) {
    case 'mobile':
    case 'tablet':
      tileHeight = ($skillsRow.width() / mobileTabletNumColumns - mobileTabletPaddingValue * 2) * skillsImgRatio
      break
    case 'desktop':
      tileHeight = ($skillsRow.width() / desktopNumColumns - desktopPaddingValue * 2) * skillsImgRatio
      break
    case 'largeDesktop':
      tileHeight = ($skillsRow.width() / largeDesktopNumColumns - largeDesktopPaddingValue * 2) * skillsImgRatio
      break
  }

  $tileImages.css('height', tileHeight)
}

function setSkillsLayout() {
  switch (globalScreenWidth) {
    case 'mobile':
    case 'tablet':
      $lastSingle.css('display', 'block')
      $firstDouble.insertBefore($firstSingle)
      $rightSingle.insertBefore($rightDouble)
      $lastDouble.insertAfter($lastSingle)
      break
    case 'desktop':
      $lastSingle.css('display', 'none')
      $firstDouble.insertBefore($firstSingle)
      $rightDouble.insertBefore($rightSingle)
      $lastSingle.insertAfter($lastDouble)
      break
    case 'largeDesktop':
      $lastSingle.css('display', 'block')
      $firstSingle.insertBefore($firstDouble)
      $rightSingle.insertBefore($rightDouble)
      $lastSingle.insertAfter($lastDouble)
      break
  }
}

function setContactLayout() {
  switch (globalScreenWidth) {
    case 'mobile':
      $contactCard.removeClass('horizontal')
      $contactImg.attr('src', contactImgSrcBase + 'landscape.jpg')
      break
    case 'tablet':
      $contactCard.addClass('horizontal')
      $contactImg.attr('src', contactImgSrcBase + 'portrait.jpg')
      break
    case 'desktop':
    case 'largeDesktop':
      $contactCard.addClass('horizontal')
      $contactImg.attr('src', contactImgSrcBase + 'square.jpg')
      break
  }
}