
function TimeConv(timeIn) {
    var seconds;
    var minutes;
    var hours;

    hours = Math.floor(timeIn / 3600);
    minutes = Math.floor((timeIn - (hours  * 3600))/60);
    seconds = (timeIn - (hours  * 3600) - (minutes * 60)).toFixed(0);
    if (timeIn >= 3600) {
        return hours + ' godz. ' + minutes + ' min. ' + seconds + ' sek.' ;
    } else {
        return minutes + ' min. ' + seconds + ' sek.' ;
    }
}
exports.format = TimeConv;
