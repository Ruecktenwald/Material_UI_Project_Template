from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import models, session

# Create an APIRouter instance
generic_table = APIRouter()

# Define the endpoint to get generic table data


@generic_table.get("/generic-table")
def get_generic_data(db: Session = Depends(session.get_db)):
    # Query the database to retrieve all records
    data = db.query(models.GenericModel).all()

    # Define the columns for the frontend
    columns = [
        {"field": "name", "headerName": "Name"},
        {"field": "email", "headerName": "Email"},
        {"field": "age", "headerName": "Age"},
        {"field": "position", "headerName": "Position"},
        {"field": "active", "headerName": "Active"},
    ]

    # Serialize the data into a dictionary format
    serialized_data = [
        {
            "id": item.id,
            "name": item.name,
            "email": item.email,
            "age": item.age,
            "position": item.position,
            "active": item.active,
        }
        for item in data
    ]

    # Return the data and column structure
    return {"data": serialized_data, "columns": columns}
