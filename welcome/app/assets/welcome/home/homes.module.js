/**
 Copyright 2013 Red Hat, Inc.

 This software is licensed to you under the GNU General Public
 License as published by the Free Software Foundation; either version
 2 of the License (GPLv2) or (at your option) any later version.
 There is NO WARRANTY for this software, express or implied,
 including the implied warranties of MERCHANTABILITY,
 NON-INFRINGEMENT, or FITNESS FOR A PARTICULAR PURPOSE. You should
 have received a copy of GPLv2 along with this software; if not, see
 http://www.gnu.org/licenses/old-licenses/gpl-2.0.txt.
 **/

/**
 * @ngdoc module
 * @name  Welcome.home
 *
 * @description
 *   Module for home related functionality.
 */
angular.module('Welcome.home', [
    'ngResource',
    'alchemy',
    'alch-templates',
    'ui.router',
    // TODO: make configurable to reduce coupling to Bastion?
    'Bastion.widgets'
]);

/**
 * @ngdoc object
 * @name Welcome.home.config
 *
 * @requires $stateProvider
 *
 * @description
 *   Used for systems level configuration such as setting up the ui state machine.
 */
angular.module('Welcome.home').config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('home', {
        abstract: true,
        controller: 'HomeController',
        templateUrl: 'home/views/home.html'
    })
    .state('home.index', {
        url: '/home',
        views: {
            'table': {
                templateUrl: 'home/views/home-table-full.html'
            }
        }
    })
}]);
