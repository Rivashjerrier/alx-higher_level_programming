#!/usr/bin/python3
def divisible_by_2(my_list=[]):
    list = []
    for x in my_list:
        list.append(x %  2 == 0)
    return list
