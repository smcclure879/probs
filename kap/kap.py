import math
#import sys
#a=0+sys.stdin.readline()
#b=0+sys.stdin.readline()

a=1
b=10000

def isKap(x):
    x2=x*x
    digitsInX = math.floor(math.log10(x)+1)
    radix = 10**digitsInX
    #print x,digitsInX,radix
    return x2//radix + x2%radix == x
# def sumDigits(y):
#     retval = 0
#     while y:
#         retval = retval + y%10
#         y = y // 10
#     return retval


#def isKapKind(x,x2,radix):


def square(x):
    return x*x

print filter(isKap,range(a,b))

exit(0);











"""
Note: r may have leading zeros.

Here's an explanation from Wikipedia about the ORIGINAL Kaprekar Number (spot the
difference!): In mathematics, a Kaprekar number for a given base is a non-negative
integer, the representation of whose square in that base can be split into two parts
that add up to the original number again. For instance, 45 is a Kaprekar number,

The Task 
You are given the two positive integers and , where is lower than . Write a program to determine how many Kaprekar numbers are there in the range between and (both inclusive) and display them all.

Input Format

There will be two lines of input: , lowest value , highest value

Constraints: 

Output Format

Output each Kaprekar number in the given range, space-separated on a single line. If no Kaprekar numbers exist in the given range, print INVALID RANGE.

Sample Input

1
100
Sample Output

1 9 45 55 99

Explanation
"""
