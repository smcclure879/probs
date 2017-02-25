'use strict';

function bits(x) {
    var retval = "00000000"+x.toString(2)
    retval = retval.substr(-8);
    return retval;
}

function show(x) {
    console.log(x);
}


//bugbug replace with lookup for more speed since only 256 bytes!
function count(a){  //a is a byte...
    return a == 0 ? 0 
	: 1 + count( a & (a-1) );
}



function moves(peg) {
    return conns.filter( function(conn) { return hasOneBitSet(conn ^ peg); } );
}

function hasNoMoves(c) {

}

function hasOneEmptySlot(c) {

}



function byteForConnection(pair) {
    return 1<<(pair[0]-1) | 1<<(pair[1]-1);
}

var rules = [
    [1,4],
    [1,6],
    [1,7],
    [2,4],
    [2,5],
    [2,6],
    [3,7],
    [3,8],
    [5,8]].map(byteForConnection);
;  //so 8 bytes, one per connection

show(rules.map(bits));


var m = 1; //move to make on board
var b = 0; //empty board
var i = 0; //rule indexer
//bugbug you are here. for each starting peg, b=m=that peg, run this...
while(1) {
    show(bits(b));
    var r=rules[i];
    var x=r&m;
    if (!x)    //move doesn't apply to this slot
	goto nextRule;
    x=r-m;     //new move
    if (x&b)   //already a peg there
	goto nextRule;
    //else

    //make the move, FORWARD PROGRESS is here
    b |= x;
    m  = x;      
    next;
    	


nextRule:
    i++;
    if (i>rules.length) {
	i=0;
	m <<= 1;
	if (m>255) {
	    show("fail");
	    exit(1);
	}
    }

}  //end while(1)

//show(connections);



    

