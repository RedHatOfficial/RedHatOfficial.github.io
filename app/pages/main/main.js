import angular from "angular";

// Styles
import styles from "./main.scss";

// Data
import heroDetail from "../../data/hero";
import featured from "../../data/featured";
import content from "../../data/content";

// Images
import centos from "../../public/img/logo-centos.png";
import ceph from "../../public/img/logo-ceph.png";
import okd from "../../public/img/logo-okd.png";
import pulp from "../../public/img/logo-pulp.png";
import quay from "../../public/img/project_quay_logo.png";
import wildfly from "../../public/img/logo-wildfly.png";

// Components
import hero from "../../components/hero/hero";
import band from "../../components/band/band";
import bandheader from "../../components/bandheader/bandheader";
import card from "../../components/card/card";
import group from "../../components/group/group";
import dynamictable from "../../components/dynamictable/dynamictable";
import scrollbutton from "../../components/button/scrollbutton";
export default angular.module("rhGitHub.main", [
    "ngRoute",
    "rhGitHub.hero",
    "rhGitHub.band",
    "rhGitHub.bandheader",
    "rhGitHub.card",
    "rhGitHub.group",
  "rhGitHub.dynamictable",
    "rhGitHub.scrollbutton"
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
    this.logos = {
      centos: centos,
      ceph: ceph,
      okd: okd,
      pulp: pulp,
      quay: quay,
      wildfly: wildfly
    };
    this.content = content;
  }]);
