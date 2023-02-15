#!/usr/bin/python3
""" prints the first State object from the database """

from sqlalchemy import create_engine
from sqlalchemy.orm import Session
from model_state import Base, State
from sys import arg

if __name__ == "__main__":
    engine = create_engine("mysql+mysqldb://{}:{}@localhost/{}".format(
                            argv[1], argv[2], argv[3]))
    session = Session(bind=engine)
    state = session.query(State).first()
    if state:
        print("{}: {}".format(state.id, state.name))
    else:
        print("Nothing")
    session.close()
