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
  let isMobile = false
  
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
      || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
      isMobile = true
  }

  let isIphone = navigator.userAgent.indexOf('iPhone') != -1
  let isIpod = navigator.userAgent.indexOf('iPod') != -1
  let isIpad = navigator.userAgent.indexOf('iPad') != -1
  let isIos = isIphone || isIpod || isIpad

  if (isMobile) {
    $body.addClass('mobile')
    
    if (isIos) {
      $body.addClass('ios')
      alert('ios')
      let height = $(window).height()
      $('section#intro').css('height', height)
    }
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
      'Software Developer',
      'Project Manager',
      'Public Speaker',
      'Hackathon Lover'
    ],
    speed: 100,
    startDelay: 1000,
    nextStringDelay: 2500,
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