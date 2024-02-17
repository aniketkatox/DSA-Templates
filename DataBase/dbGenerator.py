import sqlite3
import pandas as pd
import os

filename = "questionBank.db"

# Check if the file exists
if os.path.exists(filename):
    # File exists, read the data from the file
    conn = sqlite3.connect(filename)
    df = pd.read_sql_query("SELECT * FROM questionTable", conn)
    conn.close()
else:
    # File doesn't exist, create a new DataFrame
    data = {
        'questionId': [1],
        'title':["Maximum Subarray"],
        'questionLink':['https://leetcode.com/problems/maximum-subarray/'],
        'solutionLink':['https://github.com/Dummy-Bug/Data-Structures-and-Algorithms/blob/master/01%20Scaler%20Academy/1%20Advanced%20DSA/02%20Advanced%20DSA%20I/01%20Arrays/Arrays%201/2%20Maximum%20SubArray%20sum.md'],        
        'topic': ["Array"],
        'subTopic':["two Pointers"],
        'difficulty': ["Medium"],
    }
    df = pd.DataFrame(data)

    # Save the DataFrame to the database
    conn = sqlite3.connect(filename)
    df.to_sql("questionTable", conn, if_exists="replace", index=False)
    conn.close()

# Print the DataFrame
print(df.columns,df);

