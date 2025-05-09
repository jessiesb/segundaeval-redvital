import { Database } from 'sqlite3';

class ContactsModel {
    private static instance: ContactsModel;
    private db: Database;

    private constructor() {
        this.db = new Database('database.db', (err) => {
            if (err) {
                console.error('Error opening database:', err.message);
            } else {
                this.initDb();
            }
        });
    }

    public static getInstance(): ContactsModel {
        if (!ContactsModel.instance) {
            ContactsModel.instance = new ContactsModel();
        }
        return ContactsModel.instance;
    }

    private initDb(): void {
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS contactos (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                email TEXT NOT NULL,
                nombre TEXT NOT NULL,
                comentario TEXT NOT NULL,
                ip TEXT NOT NULL,
                fecha TEXT NOT NULL
            )
        `;
        this.db.run(createTableQuery, (err) => {
            if (err) {
                console.error('Error creating table:', err.message);
            }
        });
    }

    public addContact(email: string, nombre: string, comentario: string, ip: string): void {
        const insertQuery = `
            INSERT INTO contactos (email, nombre, comentario, ip, fecha)
            VALUES (?, ?, ?, ?, ?)
        `;
        const fecha = new Date().toISOString();
        this.db.run(insertQuery, [email, nombre, comentario, ip, fecha], (err) => {
            if (err) {
                console.error('Error inserting contact:', err.message);
            }
        });
    }
}