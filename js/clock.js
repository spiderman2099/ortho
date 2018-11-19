function display_running_clock(){
    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('display_clock()',refresh)
}
function display_clock() {
    document.getElementById('jsClock').innerHTML = moment().format('MMMM D, YYYY h:mm A');
    display_running_clock();
}
