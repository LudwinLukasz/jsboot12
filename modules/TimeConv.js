
function TimeConv(timeIn) {
    var seconds;
    var minutes;
    var hours;

    hours = Math.floor(timeIn / 3600);
    minutes = Math.floor((timeIn - (hours  * 3600))/60);
    seconds = (timeIn - (hours  * 3600) - (minutes * 60)).toFixed(0);
    if (timeIn >= 3600) {
        var timeOut = hours + ' godz. ' + minutes + ' min. ' + seconds + ' sek.' ;
        return timeOut;
    } else {
        var timeOut = mintes + ' min. ' + seconds + ' sek.' ;
        return timeOut;
    }
}
exports.format = TimeConv;
