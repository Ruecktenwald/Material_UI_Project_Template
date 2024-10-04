from sqlalchemy import Column, Integer, String, Boolean
from .session import Base

# Define a GenericModel that corresponds to a table in the database


class GenericModel(Base):
    __tablename__ = "generic_table"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    email = Column(String, unique=True, nullable=False)
    age = Column(Integer, nullable=False)
    position = Column(String, nullable=False)
    active = Column(Boolean, default=True)
