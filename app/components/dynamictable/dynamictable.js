import angular from "angular";

// Styles
import styles from "./dynamictable.scss";

// Data
import projects from "../../data/projects";

export default angular.module("rhGitHub.dynamictable", [])
    .component("dynamictable", {
        template: require("./dynamictable.html"),
        controller: "dynamictableCtrl"
    })
    .controller("dynamictableCtrl", ["$scope", function($scope) {
        // Initial
        $scope.searchQuery = "";
        
        // We'll pre-sort the list first, ignoring leading 'The's
        $scope.ignoreThes = (projectList) => {
          return projectList.sort( (a,b) => {
            return a['projectName'].toUpperCase().replace(/^THE /, "") > b['projectName'].toUpperCase().replace(/^THE /, "") ? 1 : -1 
          });
        };

        // Create sorted list of projects
        $scope.projects = $scope.ignoreThes(projects);

        // Get unique category lists
        let flags = [];
        $scope.categories = [];
        for (let i = 0; i < projects.length; i++) {
          //if ( i === 0 ) $scope.labels = Object.keys(projects[i]);
          if ( flags[ projects[i].category ] ) continue;
          flags[ projects[i].category ] = true;
          if (projects[i].category) {
            $scope.categories.push( projects[i].category );
          }
        }

        // Search the table
        $scope.searchTable = () => {
            $scope.searchQuery = $scope.searchInputValue;
        };

        // Clear filters and drodown
        $scope.searchClear = () => {
          $scope.searchInputValue = null;
          $scope.searchQuery = '';
          $scope.searchCategory = null;
        };
    }]);
