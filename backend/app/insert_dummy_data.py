from database import models, session
from datetime import datetime


def insert_data():
    db = session.SessionLocal()

    entries = [
        models.GenericModel(name="John Doe", active=True, email="john.doe@example.com",
                            age=30, position="Engineer", joined_at=datetime(2020, 5, 17)),
        models.GenericModel(name="Jane Smith", active=False, email="jane.smith@example.com",
                            age=28, position="Designer", joined_at=datetime(2019, 8, 21)),
        models.GenericModel(name="Alice Johnson", active=True, email="alice.johnson@example.com",
                            age=35, position="Manager", joined_at=datetime(2018, 2, 10)),
        models.GenericModel(name="Bob Brown", active=True, email="bob.brown@example.com",
                            age=40, position="Director", joined_at=datetime(2017, 11, 3)),
        models.GenericModel(name="Charlie Green", active=False, email="charlie.green@example.com",
                            age=45, position="Developer", joined_at=datetime(2016, 6, 25)),
    ]

    db.add_all(entries)
    db.commit()
    db.close()


# Call the function to insert the dummy data
insert_data()
