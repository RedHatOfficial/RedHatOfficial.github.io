import angular  from 'angular';

import "./scrollbutton.scss"

export default angular.module("rhGitHub.scrollbutton", []).component("scrollbutton", {
    template: require("./scrollbutton.html"),
    controller: "scrollCtrl"
}).controller("scrollCtrl", ["$scope", function($scope) {
 
   $scope.isButtonVisible = false;

    // Function to update the button visibility based on the scroll position
    const updateButtonVisibility = () => {
      $scope.isButtonVisible = window.scrollY > 500;
      $scope.$apply(); // Manually trigger a digest cycle to update the view
    };

    // Attach the scroll event listener to update the button visibility
    angular.element(window).on("scroll", updateButtonVisibility);

    $scope.scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to the top
    };

    // Clean up the event listener when the controller is destroyed
    $scope.$on("$destroy", () => {
      angular.element(window).off("scroll", updateButtonVisibility);
    });
    }]);

