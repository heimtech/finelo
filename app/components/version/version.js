'use strict';

angular.module('Fineloo.version', [
  'Fineloo.version.interpolate-filter',
  'Fineloo.version.version-directive'
])

.value('version', '0.1');
