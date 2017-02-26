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

var b=[]; //empty board, no moves made

//try all m's later...bugbug
attempt(b,m);
exit(0);




function attempt(board,move) {
    if ( board.peek() & move ) { //move is valid, no slot
	

}
while(1) {
    show(bits(b)+"--"+i);

    var r=rules[i];
    var x=r&m;
    if (x) {    //move applies to this slot
	x=r-m;     //new move
	if (!(x&b)) {   //not already a peg there
	    //make the move, FORWARD PROGRESS is here
	    b |= x;
	    oldMoves.push(m);
	    m  = x;      
	    i = 0;
	    next;
	}else{

	
	}
    }else{

    }


//bugbug still need a stack to keep old moves and pop one out below if we don't find other rules
    	

nextRule:
    i++;
    if (i>rules.length) {
	//regress board state
	b=b-m;
	m=oldMoves.pop();
	//how to recover old m?
	i=0;
    }
    

}  //end while(1)

//show(connections);



    

