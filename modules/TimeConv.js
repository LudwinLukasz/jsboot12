
function TimeConv(timeIn) {
    var seconds;
    var minutes;
    var hours;

    hours = Math.floor(timeIn / 3600);
    minutes = Math.floor((timeIn - (hours  * 3600))/60);
    seconds = timeIn - (hours  * 3600) - (minutes * 60);
    if (timeIn >= 3600) {
        console.log(hours + ' godz. ' + minutes + ' min. ' + seconds + ' sek.');
    } else {
        console.log(minutes + ' min. ' + seconds + ' sek.');
    }
}

TimeConv(126);

// function getOSinfo() {
//     var type = os.type();
//     if(type === 'Darwin') {
//         type = 'OSX';
//     } else if(type === 'Windows_NT') {
//         type = 'Windows';
//     }
//     var release = os.release();
//     var cpu = os.cpus()[0].model;
//     var uptime = os.uptime();
//     var userInfo = os.userInfo();
//     console.log('System:', type);
//     console.log('Release:', release);
//     console.log('CPU model:', cpu);
//     console.log('Uptime: ~', (uptime / 60).toFixed(0), 'min');
//     console.log('User name:', userInfo.username);
//     console.log('Home dir:', userInfo.homedir);
// }

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read(); 
    if(input !== null) {
        var instruction = input.trim();
        switch(instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/sayhello':
                process.stdout.write('hello!\n');
                break;
            case '/getOSinfo':
            	//getOSinfo();
                OSinfo.print();
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
        };
    }
});