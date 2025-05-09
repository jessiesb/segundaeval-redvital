import sqlite3 from 'sqlite3';

export class contacts_model {
    private db: sqlite3.Database;

    constructor() {
        this.db = new sqlite3.Database('database.db', (err) => {
            if (err) {
                console.error('Error connecting to the database:', err.message);
            } else {
                console.log('Connected to the SQLite database.');
            }
        });
    }

    public addContact(email: string, nombre: string, comentario: string, ip: string): void {
        const query = `INSERT INTO contactos (email, nombre, comentario, ip) VALUES (?, ?, ?, ?)`;

        this.db.run(query, [email, nombre, comentario, ip], (err) => {
            if (err) {
                console.error('Error adding contact:', err.message);
            } else {
                console.log('Contact added successfully.');
            }
        });
    }

    public close(): void {
        this.db.close((err) => {
            if (err) {
                console.error('Error closing the database:', err.message);
            } else {
                console.log('Database connection closed.');
            }
        });
    }
}