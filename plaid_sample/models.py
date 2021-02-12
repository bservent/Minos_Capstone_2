# import from SQL Alchemy

from sqlalchemy import Table, Column, String, Date, PrimaryKeyConstraint
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.dialects.postgresql import DATE, MONEY, VARCHAR

base = declarative_base()

# postgres
class Transaction(base):
    __tablename__ = 'Transactions'

    transaction_id = Column(VARCHAR, primary_key=True)
    description = Column(VARCHAR)
    date = Column(DATE)
    amount = Column(MONEY)

    # sqlalchemy class links to postgres
    def __init__(self, transaction_id, name, amount, date):
        self.transaction_id = transaction_id
        self.description = name
        self.date = date
        self.amount = amount
