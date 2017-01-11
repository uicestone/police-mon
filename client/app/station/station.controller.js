(function () {
    'use strict';

    angular.module('app.station')
    .controller('stationMapCtrl', ['$scope', '$timeout', stationMapCtrl]);

    function stationMapCtrl($scope, $timeout) {

        $scope.targets = [
            {"level":"1", "category":"1", "space":"办公室", "name":"张三"},
            {"level":"1", "category":"1", "space":"讯询问室（1）", "name":"李四"},
            {"level":"1", "category":"1", "space":"讯询问室（1）", "name":"王五"},
            {"level":"1", "category":"1", "space":"人身安全检查室", "name":"赵六"},
            {"level":"1", "category":"1", "space":"等候室", "name":"钱七"},
            {"level":"1", "category":"2", "status":"醒酒中", "space":"醒酒室", "name":"孙八"},
            {"level":"1", "category":"2", "status":"讯询问中", "space":"讯询问室（1）", "name":"周九"},
            {"level":"1", "category":"2", "status":"等候中", "space":"讯询问室（2）", "name":"吴十"},
            {"level":"1", "category":"2", "status":"看管候问中", "space":"看管候问室", "name":"郑十一"}
        ];

        $scope.levels = 1;

        $timeout(function() {
        	$scope.showLevel(1);
        }, 3000);

		/**
         * Opens a level. The current level moves to the center while the other ones move away.
         */
        $scope.showLevel = function(level) {
            if( $scope.isExpanded ) {
                return false;
            }
            
            $scope.selectedLevel = level;

            $scope.showPins();
            $scope.isExpanded = true;

            $scope.hideSurroundings();
            
            // show mall nav ctrls
            $scope.showMallNav();

            // filter the spaces for this level
            $scope.showLevelSpaces();
        }

        /**
         * Shows all Mall´s levels
         */
        $scope.showAllLevels = function() {
            if( $scope.isNavigating || !$scope.isExpanded ) {
                return false;
            }
            $scope.isExpanded = false;

            $scope.removePins();

            // shows surrounding element
            $scope.eshowSurroundings();
            
            // hide mall nav ctrls
            $scope.hideMallNav();

            // close content area if it is open
            if( isOpenContentArea ) {
                $scope.closeContentArea();
            }
        }

        /**
         * Shows all spaces for current level
         */
        $scope.showLevelSpaces = function() {
            // spacesList.filter(function(item) { 
            //     return item.values().level === selectedLevel.toString(); 
            // });
        }

        /**
         * Shows the level´s pins
         */
        $scope.showPins = function() {
        	$scope.showingPins = true;
        }

        /**
         * Removes the level´s pins
         */
        $scope.removePins = function() {
        	$scope.showingPins = false;
        }

        /**
         * Show the navigation ctrls
         */
        $scope.showMallNav = function() {
        	$scope.showingMallNav = true;
        }

        /**
         * Hide the navigation ctrls
         */
        $scope.hideMallNav = function() {
        	$scope.showingMallNav = false;
        }

        /**
         * Show the surroundings level
         */
        $scope.showSurroundings = function() {
        	$scope.showingSurroundings = true;
        }

        /**
         * Hide the surroundings level
         */
        $scope.hideSurroundings = function() {
        	$scope.showingSurroundings = false;
        }

        /**
         * Navigate through the mall´s levels
         */
        $scope.navigate = function(direction) {
            if( $scope.isNavigating || !$scope.isExpanded || $scope.isOpenContentArea ) {
                return false;
            }
            $scope.isNavigating = true;

            $scope.prevSelectedLevel = $scope.selectedLevel;

            if( direction === 'Up' && $scope.prevSelectedLevel > 1 ) {
                --$scope.selectedLevel;
            }
            else if( direction === 'Down' && $scope.prevSelectedLevel < mallLevelsTotal ) {
                ++$scope.selectedLevel;
            }
            else {
                $scope.isNavigating = false;    
                return false;
            }

            $scope.movingOutDirection = direction;

            $scope.showLevelSpaces();

            $scope.removePins();
        }

        /**
         * Opens/Reveals a content item.
         */
        $scope.openContent = function(spacerefval) {
            // if one already shown:
            if( $scope.isOpenContentArea ) {
                $scope.hideSpace();
                $scope.spaceref = spacerefval;
                $scope.showSpace();
            }
            else {
                $scope.spaceref = $scope.spacerefval;
                $scope.openContentArea();
            }
        }

        /**
         * Opens the content area.
         */
        $scope.openContentArea = function() {
            $scope.isOpenContentArea = true;
            $scope.showSpace(true);
        }

        /**
         * Shows a space.
         */
        $scope.showSpace = function(sliding) {
            $scope.showingSpace = true;
        }

        /**
         * Closes the content area.
         */
        $scope.closeContentArea = function() {
        	$scope.slidingSpace = false;
        	$scope.isOpenContentArea = false;
            $scope.hideSpace();
        }

        /**
         * Hides a space.
         */
        $scope.hideSpace = function(){

        	$scope.showingSpace = false;
           
        }

        /**
         * for smaller screens: open search bar
         */
        $scope.openSearch = function() {

            $scope.showAllLevels();
            $scope.isSpaceListOpen = true;
        }

        /**
         * for smaller screens: close search bar
         */
        $scope.closeSearch = function() {
        	$scope.isSpaceListOpen = false;
        }

    }

})();