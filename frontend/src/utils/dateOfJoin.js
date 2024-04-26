export function dateOfJoin(dateString) {
    const date = new Date(dateString);
    const days = padZero(date.getDate());
    const years = padZero(date.getFullYear());
    let months = padZero(date.getMonth());

    if (months == 0) {
        months = 'Stycznia';
    } else if (months == 1) {
        months = 'Lutego';
    } else if (months == 2) {
        months = 'Marca';
    } else if (months == 3) {
        months = 'Kwietnia';
    } else if (months == 4) {
        months = 'Maja';
    } else if (months == 5) {
        months = 'Czerwca';
    } else if (months == 6) {
        months = 'Lipca';
    } else if (months == 7) {
        months = 'Sierpnia';
    } else if (months == 8) {
        months = 'Września';
    } else if (months == 9) {
        months = 'Października';
    } else if (months == 10) {
        months = 'Listopada';
    } else if (months == 11) {
        months = 'Grudnia';
    };

    return `${days} ${months} ${years}`;
}

// Helper function to pad single-digit numbers with a leading zero
function padZero(number) {
    return number.toString().padStart(2, "0");
}
