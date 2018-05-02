'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
  .controller('MainCtrl', function ($scope, $timeout, $location, $anchorScroll, $rootScope, $log) {

    $rootScope.ready = false;

    $timeout(function () {
      $rootScope.ready = true;
    }, 1);

    $rootScope.vidSource = '';

    $scope.gotoAnchor = function (x) {
      var newHash = x;
      if ($location.hash() !== newHash) {
        // set the $location.hash to `newHash` and
        // $anchorScroll will automatically scroll to it
        $location.hash(x);
      } else {
        // call $anchorScroll() explicitly,
        // since $location.hash hasn't changed
        $anchorScroll();
      }
    };

    $scope.playVid = function (src, poster) {
      $log.log(poster);
      $rootScope.vidSource = src;
      $rootScope.posterSrc = poster;
    };

    $rootScope.closeVid = function () {
      $rootScope.vidSource = '';
    };

    $scope.works = [{
      title: 'The Night Sky Create App',
      roles: ['reactjs conversion', 'web design'],
      description: 'I redesigned and rebuilt The Night Sky\'s create app from near scratch. The app allows users to intuitively design their Night Sky poster with a live render of thier changes. Utilizing Redux and Axios, I created an efficient flow of information between the front and back end. I also designed and created for them an admin app, which allows administrative personel to view and modify existing orders, as well as view charts containing relevant demographics. ',
      techs: [{
        icon: 'ion-social-javascript-outline',
        name: 'Javascript',
        link: 'https://www.javascript.com/'
      }, {
        icon: 'ion-redux',
        name: 'Redux',
        link: 'http://redux.js.org/'
      }, {
        icon: 'ion-react',
        name: 'React',
        link: 'https://facebook.github.io/react/'
      }, {
        icon: 'ion-social-sass',
        name: 'Sass',
        link: 'http://sass-lang.com/'
      }, {
        icon: 'ion-social-html5-outline',
        name: 'Html5',
        link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'
      },
      {
        icon: 'ion-social-css3-outline',
        name: 'Css3',
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3'
      }],
      show: false,
      web_path: 'images/create-web.png',
      mobile_path: 'images/create-mobile.png',
      video_path: 'videos/tns-create.mp4',
      poster: 'images/create-web.png',
      link: 'https://create.thenightsky.com/',
      buttons: [{
        name: 'View Site',
        link: 'https://create.thenightsky.com/'
      }]
    }, {
      title: 'Work Machines',
      roles: ['first dev hire', 'sole front end dev', 'lead front end dev'],
      description: 'At Work Machines I was the first dev hire. I, in addition to working with thier Web Designer to formulate the design, established the foundation of the front end. From API interaction to creating data services and custom directives, all development was done in alignment with the John Papa Angular 1 styleguide and JS best practices.',
      techs: [{
        icon: 'ion-social-javascript-outline',
        name: 'Javascript',
        link: 'https://www.javascript.com/'
      }, {
        icon: 'ion-social-sass',
        name: 'Sass',
        link: 'http://sass-lang.com/'
      }, {
        icon: 'ion-social-html5-outline',
        name: 'Html5',
        link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'
      },
      {
        icon: 'ion-social-css3-outline',
        name: 'Css3',
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3'
      }],

      show: false,
      web_path: 'images/work-machines-web-min.png',
      mobile_path: 'images/work-machines-mobile-min.png',
      video_path: 'videos/work-machines.mp4',
      poster: 'images/work-machines-web-min.png',
      link: 'https://workmachines.com/',
      buttons: [{
        name: 'View Site',
        link: 'https://workmachines.com/'
      }]


      // web_path: 'images/work-machines-min.png',
      // mobile_path: 'images/work-machines-mobile-min.png',
      // show: false,
      // video_path: '',
      // link: 'https://workmachines-a3578.firebaseapp.com/#!/',
      // buttons: [{
      //   name: 'View Site',
      //   link: 'https://workmachines-a3578.firebaseapp.com/#!/'
      // }]
    },
    
    
    // {
    //   title: 'Work Machines App',
    //   roles: ['first dev hire', 'lead front end dev'],
    //   description: 'As the first dev hire at Work Machines, an Austin based startup, I established the front end development and deployment environment and converted the jquery based prototype to a robust, error-free react app. I also created a front end React template for future projects that contained components that would be used in every Press app, like navigation, etc. ',
    //   techs: [{
    //     icon: 'ion-social-javascript-outline',
    //     name: 'Javascript',
    //     link: 'https://www.javascript.com/'
    //   }, {
    //     icon: 'ion-redux',
    //     name: 'Redux',
    //     link: 'http://redux.js.org/'
    //   }, {
    //     icon: 'ion-react',
    //     name: 'React',
    //     link: 'https://facebook.github.io/react/'
    //   }, {
    //     icon: 'ion-social-sass',
    //     name: 'Sass',
    //     link: 'http://sass-lang.com/'
    //   }, {
    //     icon: 'ion-social-html5-outline',
    //     name: 'Html5',
    //     link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'
    //   },
    //   {
    //     icon: 'ion-social-css3-outline',
    //     name: 'Css3',
    //     link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3'
    //   }],
    //   show: false,
    //   web_path: 'images/press-web.png',
    //   mobile_path: 'images/press-mobile.png',
    //   video_path: 'videos/customer-web.mp4',
    //   poster: 'images/press-web.png',
    //   link: 'https://www.presscleaners.com/',
    //   buttons: [{
    //     name: 'View Site',
    //     link: 'https://www.presscleaners.com/'
    //   }]
    // }, 
    
    
    {
      title: 'Press Customer App',
      roles: ['first dev hire', 'reactjs conversion'],
      description: 'As the front end dev at Press, an Austin based startup, I established the front end development and deployment environment and converted the jquery based prototype to a robust, error-free react app. I also created a front end React template for future projects that contained components that would be used in every Press app, like navigation, etc. ',
      techs: [{
        icon: 'ion-social-javascript-outline',
        name: 'Javascript',
        link: 'https://www.javascript.com/'
      }, {
        icon: 'ion-redux',
        name: 'Redux',
        link: 'http://redux.js.org/'
      }, {
        icon: 'ion-react',
        name: 'React',
        link: 'https://facebook.github.io/react/'
      }, {
        icon: 'ion-social-sass',
        name: 'Sass',
        link: 'http://sass-lang.com/'
      }, {
        icon: 'ion-social-html5-outline',
        name: 'Html5',
        link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'
      },
      {
        icon: 'ion-social-css3-outline',
        name: 'Css3',
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3'
      }],
      show: false,
      web_path: 'images/press-web.png',
      mobile_path: 'images/press-mobile.png',
      video_path: 'videos/customer-web.mp4',
      poster: 'images/press-web.png',
      link: 'https://www.presscleaners.com/',
      buttons: [{
        name: 'View Site',
        link: 'https://www.presscleaners.com/'
      }]
    }, {
      title: 'Press Provider App',
      roles: ['first dev hire', 'reactjs conversion'],
      description: 'The Press Provider App allows laundry providers to login and view current jobs, invoices, future payouts, modify their availability calendar, etc. It is also a way for providers to communicate with customers. This was also a conversion from the jQuery based prototype to a stable react/redux app.',
      techs: [{
        icon: 'ion-social-javascript-outline',
        name: 'Javascript',
        link: 'https://www.javascript.com/'
      }, {
        icon: 'ion-redux',
        name: 'Redux',
        link: 'http://redux.js.org/'
      }, {
        icon: 'ion-react',
        name: 'React',
        link: 'https://facebook.github.io/react/'
      }, {
        icon: 'ion-social-sass',
        name: 'Sass',
        link: 'http://sass-lang.com/'
      }, {
        icon: 'ion-social-html5-outline',
        name: 'Html5',
        link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'
      },
      {
        icon: 'ion-social-css3-outline',
        name: 'Css3',
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3'
      }],
      show: false,
      web_path: 'images/provider-web.png',
      mobile_path: 'images/provider-mobile.png',
      video_path: 'videos/provider-web.mp4',
      poster: 'images/provider-web.png',
      link: 'https://www.presscleaners.com/',
      buttons: [{
        name: 'View Site',
        link: 'https://www.presscleaners.com/'
      }]
    }, {
      title: 'Press Mobile App UI/UX',
      roles: ['ui design', 'user flows', 'user experience design'],
      description: 'This was the first project I did for Press. After multiple meetings with the CTO and other members of the Press team, we reimagined the Press mobile app. I then materialized this concept in the form of high fidelity mockups and user flows in Sketch.',
      techs: [{
        icon: 'fa fa-diamond',
        name: 'Sketch',
        link: 'https://www.sketchapp.com/'
      }],
      show: false,
      web_path: 'images/press-ux.png',
      mobile_path: '',

      scroll_buttons: [{
        name: 'More Info'
      }]
      // buttons: [{
      //   // name: 'More Info',
      //   // link: 'https://johnsephr.me/#!/#contact'
      //   // link: 'http://localhost:9000/#!/#contact'
      // }]
    }, {
      title: 'RHC Consulting',
      roles: ['sole front end dev', 'ui design', 'user flows', 'SEO enhancement'],
      description: 'RHC Consulting hired me to design and build a site for them from scratch. I, very thoughtfully, created for them a website, designed their business cards, and established SEO. They had a very specific vision for the functionality of the site. To accommodate the client in the most efficient way, I utilized the concept of releasing rapid prototypes for the client to give feedback and keep me on track with the design and other details.',
      techs: [{
        icon: 'ion-social-javascript-outline',
        name: 'Javascript',
        link: 'https://www.javascript.com/'
      }, {
        icon: 'ion-social-angular-outline',
        name: 'AngularJS',
        link: 'https://angularjs.org/'
      }, {
        icon: 'ion-social-sass',
        name: 'Sass',
        link: 'http://sass-lang.com/'
      }, {
        icon: 'ion-social-html5-outline',
        name: 'Html5',
        link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'
      },
      {
        icon: 'ion-social-css3-outline',
        name: 'Css3',
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3'
      }],
      show: false,
      web_path: 'images/rhc-consulting-min.png',
      mobile_path: 'images/rhc-consulting-mobile-min.png',
      //                video_path: 'videos/atlas-dash.mp4',
      //                poster: 'images/atlas-dash.png',
      link: 'http://www.rhcconsult.com/',
      buttons: [{
        name: 'View Site',
        link: 'http://www.rhcconsult.com/'
      }]
    }
    ];

    $scope.projects = [{
      title: 'Web to Mobile',
      roles: ['front end dev', 'concept', 'ui design'],
      description: 'This project demonstrates that web apps can feel native within a mobile browser. The app listens for specific mobile media queries, within which it fills the entire screen, providing a more native mobile experience',
      techs: [{
        icon: 'ion-social-javascript-outline',
        name: 'Javascript',
        link: 'https://www.javascript.com/'
      }, {
        icon: 'ion-social-angular-outline',
        name: 'AngularJS',
        link: 'https://angularjs.org/'
      }, {
        icon: 'ion-social-sass',
        name: 'Sass',
        link: 'http://sass-lang.com/'
      }, {
        icon: 'ion-social-html5-outline',
        name: 'Html5',
        link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'
      },
      {
        icon: 'ion-social-css3-outline',
        name: 'Css3',
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3'
      }],
      show: false,
      web_path: 'images/calc-web-min.png',
      mobile_path: 'images/calc-mobile-min.png',
      link: 'https://calculation.firebaseapp.com/#/',

      buttons: [{
        name: 'View Demo',
        link: 'https://calculation.firebaseapp.com/#/'
      }]
    },
    {
      title: 'Responsive Jobs Board Concept',
      roles: ['front end dev', 'concept', 'ui design'],
      description: 'Demonstrating my ability to create a responsive experience for all screen sizes, this elegant job boards concept utilizes a vertical chronological timeline to create a natural user experience within a clean, modern user interface.',
      techs: [{
        icon: 'ion-social-javascript-outline',
        name: 'Javascript',
        link: 'https://www.javascript.com/'
      }, {
        icon: 'ion-social-angular-outline',
        name: 'AngularJS',
        link: 'https://angularjs.org/'
      }, {
        icon: 'ion-social-sass',
        name: 'Sass',
        link: 'http://sass-lang.com/'
      }, {
        icon: 'ion-social-html5-outline',
        name: 'Html5',
        link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'
      },
      {
        icon: 'ion-social-css3-outline',
        name: 'Css3',
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3'
      }],
      show: false,
      web_path: 'images/awesome-jobs-min.png',
      mobile_path: 'images/awesome-jobs-mobile-min.png',
      link: 'https://awesome-fdb5d.firebaseapp.com/#!/',

      buttons: [{
        name: 'View Demo',
        link: 'https://awesome-fdb5d.firebaseapp.com/#!/'
      }]
    },
    {
      title: 'Ecommerce Design',
      roles: ['front end dev', 'concept', 'ui design'],
      description: 'Similar to my jobs board project, this stylish ecommerce site possesses a completely responsive grid system designed to demonstrate my ability to create an attractive user experience on all standard devices and screen sizes.',
      techs: [
        {
          icon: 'ion-social-html5-outline',
          name: 'Html5',
          link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'
        },
        {
          icon: 'ion-social-css3-outline',
          name: 'Css3',
          link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3'
        },
      ],
      web_path: 'images/ecommerce-min.png',
      mobile_path: 'images/ecommerce-mobile-min.png',
      show: false,
      video_path: '',
      link: 'https://ecommerce-8fa4b.firebaseapp.com/',
      buttons: [{
        name: 'View Demo',
        link: 'https://ecommerce-8fa4b.firebaseapp.com/'
      }]
    }];
  });
