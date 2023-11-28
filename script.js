document.addEventListener('DOMContentLoaded', function () {
    const tablesContainer = document.getElementById('tables-container');

    const numTables = 6; // Adjust the number of tables as needed
    const tables = Array.from({ length: numTables }, (_, index) => ({
        number: index + 1,
        reserved: false
    }));

    function renderTables() {
        tablesContainer.innerHTML = '<h2>Available Tables</h2>';
        const tableElement = document.createElement('table');

        // Table header
        const headerRow = document.createElement('tr');
        const headers = ['Table Number', 'Status', 'Action'];
        headers.forEach(headerText => {
            const th = document.createElement('th');
            th.appendChild(document.createTextNode(headerText));
            headerRow.appendChild(th);
        });
        tableElement.appendChild(headerRow);

        // Table rows
        tables.forEach(table => {
            const tr = document.createElement('tr');
            const tdNumber = document.createElement('td');
            tdNumber.appendChild(document.createTextNode(table.number));
            tr.appendChild(tdNumber);

            const tdStatus = document.createElement('td');
            const statusText = table.reserved ? 'Reserved' : 'Available';
            tdStatus.appendChild(document.createTextNode(statusText));
            tr.appendChild(tdStatus);

            const tdAction = document.createElement('td');
            const actionButton = document.createElement('button');
            actionButton.innerText = table.reserved ? 'Cancel' : 'Reserve';
            actionButton.addEventListener('click', () => toggleReservation(table.number));
            tdAction.appendChild(actionButton);
            tr.appendChild(tdAction);

            tableElement.appendChild(tr);
        });

        tablesContainer.appendChild(tableElement);
    }

    function toggleReservation(tableNumber) {
        const table = tables.find(table => table.number === tableNumber);
        if (table) {
            table.reserved = !table.reserved;
            renderTables();
        }
    }

    renderTables();
});
