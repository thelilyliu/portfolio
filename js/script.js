$(document).ready(function() {
  initMaterialize()
  initParticles()
  initTypeIt()
  initWaypoints()
  initMasonry()
  initEventHandler()
})

function initMaterialize() {
  let elems = document.querySelectorAll('.scrollspy')
  
  let options = {
    getActiveElement: function(id) {
      return 'a[scroll-target="#' + id + '"]'
    }
  }
  
  M.ScrollSpy.init(elems, options)
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
      'Hackathon Lover',
      'Machine Learning Enthusiast',
      'Full-Stack Web Developer',
      'Public Speaker',
    ],
    speed: 100,
    startDelay: 1000,
    nextStringDelay: 2500,
    loop: true,
    breakLines: false,
    autoStart: false
  })
}

function initWaypoints() {
  let waypoint1 = new Waypoint({
    element: $('.waypoint.first'),
    handler: function(direction) {
      if (direction === 'down') {
        M.toast({ html: '<i class="material-icons">chevron_left</i> Scroll me!' })
      } else {
        M.Toast.dismissAll()
      }
    },
    offset: '40%'
  })

  let waypoint2 = new Waypoint({
    element: $('.waypoint.last'),
    handler: function(direction) {
      if (direction === 'down') {
        M.toast({ html: '<i class="material-icons">chevron_left</i> Scroll me!' })
      } else {
        M.Toast.dismissAll()
      }
    },
    offset: '40%'
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

  let $nav = $('nav')

  $(window).on('scroll', function() {
    let section = $('a.scroll.active').attr('scroll-target')

    if (section === '#intro') {
      $nav.css('background-color', 'transparent')
    } else {
      $nav.css('background-color', '#263238')
    }
  })
}