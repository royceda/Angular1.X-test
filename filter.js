var app = angular.module("app", []);
/*
Reverse String
*/
app.filter('reverse', function() {
    return function(input, uppercase) {
      input = input || '';
      var out = "";
      for (var i = 0; i < input.length; i++) {
        out = input.charAt(i) + out;
      }
      // conditional based on optional argument
      if (uppercase) {
        out = out.toUpperCase();
      }
      return out;
    };
});

app.controller('myController', function($scope) {
    $scope.greeting = 'hello';
});
