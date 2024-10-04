from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.endpoints.generic_table import generic_table
from app.database import models, session

app = FastAPI()

# Enable CORS to allow frontend requests from localhost:5173 (or wherever your frontend is hosted)
app.add_middleware(
    CORSMiddleware,
    # Adjust this for your frontend's URL
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create database tables if they do not exist
models.Base.metadata.create_all(bind=session.engine)

# Include the /api prefix for generic table routes
app.include_router(generic_table, prefix="/api")

# Test route (optional)


@app.get("/")
def read_root():
    return {"message": "Welcome to the API"}
