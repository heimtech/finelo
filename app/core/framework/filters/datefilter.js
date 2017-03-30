
var module = angular
    .module('Fineloo')
    .filter("dateFilter", dateFilter);


function dateFilter() {
    return function(input, start, end) {

        var inputDate = new Date(input);
        var startDate = null;
        var result  = [];
        var endDate = null;
        if(start) {
            startDate = new Date(start)

        }
        if(end) {
            endDate = new Date(end)

        }

        for (var i=0, len = input.length; i < len; i++) {
            inputDate = parseDate(input[i].date, 'dd.mm.yyyy');


            if ( Object.prototype.toString.call(startDate) === "[object Date]"  || Object.prototype.toString.call(endDate) === "[object Date]" ) {
                // it is a date
                if ((!start && !end) || (!startDate || !startDate.getDate()) && (!endDate || !endDate.getDate())) {  // d.valueOf() could also work
                    // date is not valid
                    result.push(input[i]);
                } else if ((!startDate || !startDate.getDate()) && (endDate && endDate.getDate())) {  // d.valueOf() could also work
                    // only Date to is given
                    if (inputDate <= endDate) {
                        result.push(input[i]);
                    }


                } else if ((startDate && startDate.getDate()) && (!endDate || !endDate.getDate())) {
                  // only dateFrom is Given
                    if (startDate <= inputDate) {
                        result.push(input[i]);
                    }
                }
                else {
                    if (startDate <= inputDate && inputDate <= endDate) {
                        result.push(input[i]);
                    }
                }

            } else {
                result.push(input[i]);
            }
                  }
        return result;

    }
}



function parseDate(input, format) {
    format = format || 'yyyy-mm-dd'; // default format
    var parts = input.match(/(\d+)/g),
        i = 0, fmt = {};
    // extract date-part indexes from the format
    format.replace(/(yyyy|dd|mm)/g, function(part) { fmt[part] = i++; });

    return new Date(parts[fmt['yyyy']], parts[fmt['mm']]-1, parts[fmt['dd']]);
}