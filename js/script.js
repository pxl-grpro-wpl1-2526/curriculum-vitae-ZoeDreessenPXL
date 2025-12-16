function fullWidth (number) {
    const element = document.getElementById('workExperience_' + number);
    const mateNumber = getRowMate(number);
    const rowElement = document.getElementById('workExperience_' + mateNumber);

    element.classList.add('fullWidth');
    rowElement.classList.add('hidden');
}

function normalWidth (number) {
    const element = document.getElementById('workExperience_' + number);
    const mateNumber = getRowMate(number);
    const rowElement = document.getElementById('workExperience_' + mateNumber);

    element.classList.remove('fullWidth');
    rowElement.classList.remove('hidden');
}

function getRowMate(number) {
    if (number % 2 !== 0) {
        return number + 1;
    } else {
        return number - 1;
    }
}