
winCount = 0 # no wins yet

rules = [  # map( byteForConnection,[
    [1,4],
    [1,6],
    [1,7],
    [2,4],
    [2,5],
    [2,6],
    [3,7],
    [3,8],
    [5,8]  # ])
]
# old rules = [  [0,1],[1,2],[2,3],[3,4],[2,4]   ]



def tryStartMove():
    for m in range(0,4):
        tryMove([],m)
        
def tryMove(board,move):
    global winCount
    print board,move
    if (move in board):
        return

    board.append(move)  # make this move
    # print board
    # figure next available moves, just attempt all of them.
    for rule in rules:
        foundRule = False
        if (move in rule):
            foundRule = True
            newMove = sum(rule)-move  # trick: sumRule=move+newMove, but in what order...don't care
            tryMove(board,newMove)
        # got here then done with trying this move and it's undone!
    if not foundRule and len(board)==7:
        print "---^^----WINWINWINWINWINWINWINWINWIN---^^---"
        winCount = winCount + 1
            
    board.pop();


tryStartMove()
print "wins:"+str(winCount)
