/**
 * Copyright 2013 Red Hat, Inc.
 *
 * This software is licensed to you under the GNU General Public
 * License as published by the Free Software Foundation; either version
 * 2 of the License (GPLv2) or (at your option) any later version.
 * There is NO WARRANTY for this software, express or implied,
 * including the implied warranties of MERCHANTABILITY,
 * NON-INFRINGEMENT, or FITNESS FOR A PARTICULAR PURPOSE. You should
 * have received a copy of GPLv2 along with this software; if not, see
 * http://www.gnu.org/licenses/old-licenses/gpl-2.0.txt.
*/

/**
 * @ngdoc object
 * @name  Welcome.home.controller:HomeController
 *
 * @requires $scope
 * @requires $location
 * @requires Nutupane
 * @requires Home
 *
 * @description
 *   Provides the functionality specific to Home for use with the Nutupane UI pattern.
 *   Defines the columns to display and the transform function for how to generate each row
 *   within the table.
 */
angular.module('Welcome.homes').controller('HomesController',
    ['$scope', '$location', 'Nutupane', 'Home',
    function($scope, $location, Nutupane, Home) {
        var params = {
            'search': $location.search().search || "",
            'offset': 0,
            'sort_by': 'name',
            'sort_order': 'ASC'
            //'enabled': true,
            //'paged': true
        }

        var nutupane = new Nutupane(Home, params);
        $scope.table = nutupane.table;
        $scope.removeRow = nutupane.removeRow;
    }]
);
