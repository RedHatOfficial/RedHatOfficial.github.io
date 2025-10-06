function searchTable() {
    let resultCount = 0;
    const input = document.querySelector('#table-search-input');
    const table = document.querySelector('#project-table');
    const trs = table.querySelectorAll('tr');
    const noDisplay = document.querySelector('#no-results');
    const clearInput = document.querySelector('#input-clear');

    clearInput.addEventListener('click', inputClear);

    filter = input.value.toLowerCase();

    if (input.value !== '') {
        clearInput.removeAttribute('hidden');
    } else {
        clearInput.setAttribute('hidden', 'hidden');
    }

    trs.forEach((tr) => {
        let tds = tr.querySelectorAll('td');
        let firstCell = tds[0];
        if (firstCell) {
            let txtValue = firstCell.textContent || firstCell.innerText;
            if (txtValue.toLowerCase().indexOf(filter) > -1) {
                tr.removeAttribute('hidden');
                resultCount++;
            } else {
                tr.setAttribute('hidden', 'hidden');
            }
        }
    });

    if (resultCount === 0) {
        noDisplay.removeAttribute('hidden');
    } else if (resultCount != 0) {
        noDisplay.setAttribute('hidden', 'hidden');
    }

    updateResultsCount(resultCount);
}

function filterTable() {
    let resultCount = 0;
    const input = document.querySelector('#table-search-dropdown');
    const table = document.querySelector('#project-table');
    const trs = table.querySelectorAll('tr');

    filter = input.value.toLowerCase();

    trs.forEach((tr) => {
        let tds = tr.querySelectorAll('td');
        let firstCell = tds[tds.length - 1]; // last column
        if (firstCell) {
            let txtValue = firstCell.textContent || firstCell.innerText;
            if (txtValue.toLowerCase().indexOf(filter) > -1) {
                tr.removeAttribute('hidden');
                resultCount++;
            } else {
                tr.setAttribute('hidden', 'hidden');
            }
        }
    });

    updateResultsCount(resultCount);
}

function updateResultsCount(count) {
    const resultsCount = document.querySelector('#results-count');

    resultsCount.innerText = count;
}

function inputClear() {
    let input = document.querySelector('#table-search-input');
    input.value = '';
    searchTable();
    input.focus();
}

function clearAllFilters() {
    const select = document.querySelector('#table-search-dropdown');
    select.value = '';

    inputClear();
}

document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.querySelector('#table-search-button');
    const searchInput = document.querySelector('#table-search-input');
    const searchDropdown = document.querySelector('#table-search-dropdown');
    const clearFilters = document.querySelector('#clear-filters');

    searchTable();

    searchButton.addEventListener('click', searchTable);
    searchInput.addEventListener('keyup', searchTable);
    searchDropdown.addEventListener('change', filterTable);
    clearFilters.addEventListener('click', clearAllFilters);
});