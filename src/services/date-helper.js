export function isValidDate(dateString) {
    const date = new Date(dateString);
    return !isNaN(date.getTime());
}

export function getDateFromString(dateString) {
    if (isValidDate(dateString)) {
        return new Date(dateString);
    }
    throw new Error('Invalid date string');
}

export function getDateDay(dateString) {
    if (isValidDate(dateString)) {
        return getDateFromString(dateString).getDate();
    }
    throw new Error('Invalid date string');
}
export function generateClassWithDayWeek(dateString) {
    if (isValidDate(dateString)) {
        return [0, 6].includes(dateString.getDay());
    }
    throw new Error('Invalid date string');
}
export function getDayOfWeek(dateString) {
    if (isValidDate(dateString)) {
        const options = { weekday: 'long' };
        return dateString.toLocaleDateString('en-US', options)
    }
    throw new Error('Invalid date string');
}

export function getAllDaysInMonth(dateString) {
    if (isValidDate(dateString)) {
        const month = dateString.getMonth() + 1;
        const year = dateString.getFullYear();
        return Array.from(
            { length: new Date(year, month, 0).getDate() },
            (_, i) => new Date(year, month - 1, i + 1)
        );
    }
    throw new Error('Invalid date string');
}
export function formatDateToISOString(day) {
    return new Date(day).toISOString().split('T')[0]
}
export function isFirstDateInEvent(start, day) {
    return formatDateToISOString(day) === formatDateToISOString(start);
}

export function isLastDateInEvent(end, day) {
    return formatDateToISOString(day) === formatDateToISOString(end);
}
export function groupByWeeks(dates) {
    const weeks = [];
    let currentWeek = Array(7).fill(null);

    dates.forEach((date) => {
        const dayOfWeek = date.getDay();

        currentWeek[dayOfWeek] = date;

        if (dayOfWeek === 0 || date === dates[dates.length - 1]) {
            weeks.push({ dates: [...currentWeek] });
            currentWeek = Array(7).fill(null);
        }
    });

    return weeks;
}
