jobService = ($http) ->
  $http.get('/jobs.json')
    .success (data, status, headers, config) ->
      job = data
      return

    .error (data, status, headers, config) ->
      console.log 'Did not get Jobs'

angular
  .module('Joynus')
  .service('jobService', ['$http', jobService])
