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
 * @ngdoc module
 * @name  Welcome
 *
 * @description
 *   Base module that defines the Welcome module namespace and includes any thirdparty
 *   modules used by the application.
 */
angular.module('Welcome', [
    'alchemy',
    'alchemy.format',
    'alch-templates',
    'ngSanitize',
    'ui.bootstrap'
]);

/**
 * @ngdoc config
 * @name  Welcome.config
 *
 * @requires $httpProvider
 * @requires $urlRouterProvider
 *
 * @description
 *   Used for establishing application wide configuration such as adding the Rails CSRF token
 *   to every request.
 */
angular.module('Welcome').config(['$httpProvider', '$urlRouterProvider', function($httpProvider, $urlRouterProvider) {
    $httpProvider.defaults.headers.common = {
        Accept: 'application/json, text/plain, version=2; */*',
        'X-XSRF-TOKEN': $('meta[name=csrf-token]').attr('content')
    };
    $urlRouterProvider.otherwise("/");
}]);

