import angular from "angular";
import ngRoute from "angular-route";
import ngSanitize from "angular-sanitize";

// Styles
import styles from "./public/styles/global.scss";

// Pages
import main from "./pages/main/main.js";

// Components
import navigation from "./components/navigation/navigation";
import universalFooter from "./components/universalfooter/universalfooter";

// Services
angular.module("rhGitHub", [
    "ngRoute",
    "rhGitHub.navigation",
    "rhGitHub.main",
    "rhGitHub.universalfooter"
])
.config(["$locationProvider", "$routeProvider", ($locationProvider, $routeProvider) => {
    $locationProvider.hashPrefix("!");
    $routeProvider.otherwise({redirectTo: "/main"});
}])
.controller("rhGitHubCtrl", ["$scope", "$location", function($scope, $location) {
    $scope.location = $location.$$path;
}]);
