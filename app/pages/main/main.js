import angular from "angular";

// Styles
import styles from "./main.scss";

// Data
import heroDetail from "../../data/hero";
import featured from "../../data/featured";
import content from "../../data/content";

// Components
import hero from "../../components/hero/hero";
import band from "../../components/band/band";
import bandheader from "../../components/bandheader/bandheader";
import card from "../../components/card/card";
import group from "../../components/group/group";
import dynamictable from "../../components/dynamictable/dynamictable";

export default angular.module("rhGitHub.main", [
    "ngRoute",
    "rhGitHub.hero",
    "rhGitHub.band",
    "rhGitHub.bandheader",
    "rhGitHub.card",
    "rhGitHub.group",
    "rhGitHub.dynamictable"
  ])
  .config(["$routeProvider", ($routeProvider) => {
    $routeProvider.when("/main", {
      template: require("./mainView.html"),
      controller: "mainCtrl"
    })
  }])
  .controller("mainCtrl", ["$scope", function($scope) {
    this.heroDetail = heroDetail;
    this.featured = featured;
    this.content = content;
  }]);
