;(function() { 'use strict';
    angular
        .module('mz.layout.flex', [])
        .directive('mzFlex', mzFlex)
        .run(mzRunner);

    function mzRunner($rootScope) {
        $rootScope.$toggleLeftSideNav = function() {
        }
    }


    /* @inject */
    function mzFlex() {
        return {
            template: '<div class="mz-flex" data-ng-transclude></div>',
            restrict: 'E',
            scope: {},
            replace:true,
            transclude: true,
            controller: 'mzNavController as vm',
            link: link
        };

        ////////////////

        function link(scope, element, attrs, ctrl) {
            var $body;


            ///////////////////////////////


        }

    }

}).call(this);
