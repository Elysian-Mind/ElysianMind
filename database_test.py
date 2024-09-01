import sqlite3

def connect_to_database(db_name):
    conn = sqlite3.connect(db_name)
    return conn

def create_appointments_table(conn):
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS appointments (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            patient_name TEXT,
            appointment_date TEXT,
            appointment_time TEXT
        )
    ''')
    conn.commit()

def insert_dummy_data(conn):
    cursor = conn.cursor()
    cursor.execute("INSERT INTO appointments (patient_name, appointment_date, appointment_time) VALUES ('dummy_value1', '2024-09-01', '10:00AM')")
    conn.commit()

if __name__ == "__main__":
    connection = connect_to_database("patient_bookings.db")
    
    # Create the appointments table if it doesn't exist
    create_appointments_table(connection)

    # Insert dummy data
    insert_dummy_data(connection)

    print("Dummy data inserted successfully.")
    connection.close()

