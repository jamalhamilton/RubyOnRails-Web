jobCtrl = ($scope, $http,  $location) ->
  $http.get('/en/jobs.json')
    .success (data, status, headers, config) ->
      $scope.jobs = data

    .error (data, status, headers, config) ->
      console.log 'Did not get Jobs'

  $scope.go = (jobId) ->
    href = 'jobs/' + jobId
    window.location = href

angular
  .module('Joynus')
  .controller('jobCtrl', ['$scope', '$http', '$location', jobCtrl])
