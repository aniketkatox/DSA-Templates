import os
import pandas as pd
from sqlalchemy import create_engine

# Path to your Excel file
file_path = 'questionBank.xlsx'

# Load the Excel file into a Pandas DataFrame
df = pd.read_excel(file_path)
print(df.head());
# Get the current directory
current_directory = os.getcwd()

# SQLite database file path
db_file_name = 'database.db'
db_file_path = os.path.join(current_directory, db_file_name)

# Create a SQLite engine
engine = create_engine(f'sqlite:///{db_file_path}')

# Store the DataFrame as a table in the SQLite database
# df.to_sql('table_name', engine, if_exists='replace', index=False)
