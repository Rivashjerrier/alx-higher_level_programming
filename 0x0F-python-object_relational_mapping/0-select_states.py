#!/usr/bin/python3
""" Script that lists all states from the database hbtn_0e_0_usa """

import MySQLdb
import sys

if __name__ == "__main__":
    db = MySQLdb.connect(host="localhost", port=3306, user=argv[1],
                         passwd=argv[2], db=argv[3], charset="utf8")
    c = db.cursor()
    c.execute('SELECT * FROM states ORDER BY id')
    for rows in c.fetchall():
        print(rows)

    c.close()
    db.close()
