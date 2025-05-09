
CREATE TABLE IF NOT EXISTS contactos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL,
    nombre TEXT NOT NULL,
    comentario TEXT NOT NULL,
    ip TEXT NOT NULL,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE IF NOT EXISTS pagos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    servicio TEXT NOT NULL CHECK(servicio IN ('entrenamiento', 'nutricion', 'horarios')),
    email TEXT NOT NULL,
    titular TEXT NOT NULL,  
    ultimos4digitos TEXT NOT NULL CHECK(LENGTH(ultimos4digitos) = 4), 
    exp_mes INTEGER NOT NULL CHECK(exp_mes BETWEEN 1 AND 12),
    exp_ano INTEGER NOT NULL CHECK(exp_ano >= 2024),
    monto REAL NOT NULL CHECK(monto > 0),
    moneda TEXT NOT NULL DEFAULT 'USD',
    ip TEXT NOT NULL,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE INDEX IF NOT EXISTS idx_contactos_email ON contactos(email);
CREATE INDEX IF NOT EXISTS idx_pagos_transaccion ON pagos(email, fecha);

