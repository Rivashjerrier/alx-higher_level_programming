#!/usr/bin/python3
""" Script that lists all states from the database hbtn_0e_0_usa """

import MySQLdb
import sys

if __name__ == "__main__":
    conn = MySQLdb.connect(host="localhost", user="root", passwd="root",
                           db="hbtn_0e_0_usa", port=3306)
    cur = conn.cursor()
    cur.execute("SELECT * FROM states ORDER BY id ASC")
    for rows in cur.fetchall():
        print(rows)

    cur.close()
    conn.close()
