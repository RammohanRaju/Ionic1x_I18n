// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic', 'starter.controllers', 'pascalprecht.translate']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
});

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
});

var translationsEN = {
		  HEADLINE: 'What an awesome module!',
		  PARAGRAPH: 'Srsly!',
		  NAMESPACE: {
		    PARAGRAPH: 'And it comes with awesome features!'
		  },
		  PLAYLISTS: {
			  TITLE: 'Test Playlists Translation EN'
		  }
};

var translationsDE = {
		  HEADLINE: 'What an awesome module! DE',
		  PARAGRAPH: 'Srsly! DE',
		  NAMESPACE: {
		    PARAGRAPH: 'And it comes with awesome features! DE'
		  },
		  PLAYLISTS: {
			  TITLE: 'Test Playlists Translation DE'
		  }
};

app.config(['$translateProvider', function ($translateProvider) {
	  // add translation tables
	  $translateProvider.translations('en', translationsEN);
	  $translateProvider.translations('de', translationsDE);
	  $translateProvider.preferredLanguage('en');
	  $translateProvider.fallbackLanguage('en');
	}]);