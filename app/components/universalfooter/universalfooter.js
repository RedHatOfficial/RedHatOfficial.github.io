import angular from "angular";

// Styles
import styles from "./universalfooter.scss";

// Data
import links from "../../data/footerLinks";

// Images
import logo from "../../public/img/redhat-logo-dark-retina.png";
import summit from "../../public/img/logo-summit.png";

export default angular.module("rhGitHub.universalfooter", [])
  .component("universalfooter", {
    template: require("./universalfooter.html"),
    controller: "universalfooterCtrl"
  }).controller("universalfooterCtrl", ["$scope", function($scope) {
    $scope.links = links;
    $scope.logo = logo;
    $scope.summit = summit;
    $scope.copyright_years = '2018–' + new Date().getFullYear();
  }]);
