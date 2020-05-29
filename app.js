function back() {
    // get the clock
    var myClock = document.getElementById('left');

    // get the current value of the clock's display property
    myClock.style.display = 'inline';

    var myRight = document.getElementById('right');

    myRight.style.display = 'none';
    // also get the clock button, so we can change what it says

}

function check() {
    // get the clock
    var myClock1 = document.getElementById('left');

    // get the current value of the clock's display property
    myClock1.style.display = 'none';

    var myRight1 = document.getElementById('right');

    myRight1.style.display = 'inline';
    // also get the clock button, so we can change what it says

}



//document.getElementById("change").onclick=toggleVis();

