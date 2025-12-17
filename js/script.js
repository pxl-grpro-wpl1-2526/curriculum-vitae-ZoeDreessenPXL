function getRowMate(number) {
    if (number % 2 !== 0) {
        return number + 1;
    } else {
        return number - 1;
    }
}

function widthCheck(number) {
    const element = document.getElementById('workExperience_' + number);
    const taskPackage = element.querySelector('p[class^="taskPackage"]');
    const mateNumber = getRowMate(number);
    const rowElement = document.getElementById('workExperience_' + mateNumber);

    const isOpen = element.classList.contains('fullWidth');

    element.classList.toggle('fullWidth', !isOpen);
    rowElement.classList.toggle('hidden', !isOpen);

    taskPackage.classList.toggle('taskPackageHide', isOpen);
    taskPackage.classList.toggle('taskPackageShow', !isOpen);
}