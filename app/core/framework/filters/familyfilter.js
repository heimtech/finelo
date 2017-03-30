
var module = angular
    .module('Fineloo')
    .filter("familyFilter", familyFilter);


function familyFilter() {
    return function(input, activeFamilies) {

        var result = [];

        for (var i=0, len = input.length; i < len; i++) {

            var lFamily = input[i].standardCode.substr(0, input[i].standardCode.indexOf('.'));



            if(activeFamilies[lFamily]){
                result.push(input[i]);

            }










                  }
        return result;

    }
}


