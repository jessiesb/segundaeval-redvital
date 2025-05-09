export function validateForm(data: {
    name: string;
    id: string;
    phone: string;
    age: string;
    medicalCondition: string;
    email: string;
    message: string;
}): string[] {
    const errors: string[] = [];

    if (!data.name.trim()) {
        errors.push('El nombre es obligatorio.');
    }

    if (!data.id.trim()) {
        errors.push('El ID es obligatorio.');
    }

    if (!data.phone.trim()) {
        errors.push('El teléfono es obligatorio.');
    }

    if (!data.age.trim() || isNaN(Number(data.age)) || Number(data.age) <= 0) {
        errors.push('La edad debe ser un número válido mayor a 0.');
    }

    if (!data.email.trim() || !/\S+@\S+\.\S+/.test(data.email)) {
        errors.push('El correo electrónico no es válido.');
    }

    if (!data.message.trim()) {
        errors.push('El mensaje es obligatorio.');
    }

    return errors;
}