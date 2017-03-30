
var module = angular
    .module('Fineloo')
    .filter("toolFilter", toolFilter);


function toolFilter() {
    return function(input, possibleTools) {

        var result = [];

        for (var i=0, len = input.length; i < len; i++) {

            var lToolName  = input[i].toolName;

            for (var j=0, len2 = possibleTools.length; j < len2; j++) {

                if(angular.equals(possibleTools[j], lToolName )) {

                    result.push(input[i]);
                    break;
                }
            }






                  }
        return result;

    }
}


