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
    return conns.filter( conn => hasOneBitSet(conn ^ peg) );
}

function hasNoMoves(c) {

}

function hasOneEmptySlot(c) {

}



function byteForConnection(pair) {
    return 1<<(pair[0]-1) | 1<<(pair[1]-1);
}

var conns = [
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

show(conns.map(bits));

var t = new Array();  //the complete state since an empty board
      //an empty board no moves made , push new states here, pop on fail. one byte per state


while(1) {
    [1,2,4,8,16,32,64,128].map
    let c = t.peek();
    if ( hasNoMoves(c) ) {
	if ( hasOneEmptySlot(c) ) {
	    show("win:"+t);
	    exit(0);
	} else {
	    show("fail1:"+t);
	    t.pop();
	}
    }else{//has moves
	if ( hasOneEmptySlot(c) ) {
	    show("fail2:"+t);
	    t.pop();
	} else {
	    t.pop();
	}
    }
    
}
    

    
}



//show(connections);



    

