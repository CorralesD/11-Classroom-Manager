(function() {
    'use strict';

    angular
        .module('app')
        .factory('teacherFactory', teacherFactory);

    teacherFactory.$inject = ['$http'];

    /* @ngInject */
    function teacherFactory($http) {
        var service = {
            create: create,
            getAll: getAll,
            getById: getById,
            update: update,
            remove: remove
        };
        return service;

        ////////////////

        function create(teacher) {
        	return $http.post('http://localhost:54425/api/teachers', teacher);
        }

        function getAll() {
        	return $http.get('http://localhost:54425/api/teachers');
        }

        function getById(id) {
        	return $http.get('http://localhost:54425/api/teachers/' + id);
        }

        function update(id, teacher) {
        	return $http.put('http://localhost:54425/api/teachers/' + id, teacher);
        }

        function remove(id) {
        	return $http.delete('http://localhost:54425/api/teachers/' + id);
        }
    }
})();