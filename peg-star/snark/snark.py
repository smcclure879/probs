rules = [  [0,1],[1,2],[2,3],[3,4],[2,4]   ]
    

def tryStartMove():
    for m in range(0,4):
        tryMove([],m)
        
def tryMove(board,move):
    print board,move
    if (move in board):
        return
    board.append(move)  #make this move

    #figure next available moves, just attempt all of them.
    for rule in rules:
        if (move in rule):
            newMove = filter(lambda pos: move <> pos , rule)[0]   #set subtraction
            tryMove(board,newMove)
    #got here then done with trying this move
    board.pop();


tryStartMove()
