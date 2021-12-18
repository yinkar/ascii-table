const buildTable = (tableData) => {
    const generateCell = (cellData) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('cell');

        const cellDecimalElement = document.createElement('div');
        cellDecimalElement.classList.add('cell-decimal');

        const cellContentElement = document.createElement('div');
        cellContentElement.classList.add('cell-content');

        const cellNameElement = document.createElement('div');
        cellNameElement.classList.add('cell-name');

        cellDecimalElement.innerText = cellData.ord !== undefined ? cellData.ord : '';
        cellContentElement.innerText = cellData.abbr ? 
            cellData.abbr : 
                (
                    cellData.character ?
                        cellData.character :
                        ''
                );

        cellContentElement.classList.add(
                cellData.abbr ? 
                    'cell-abbr' : 
                    cellData.character !== undefined ?
                        'cell-character' :
                        ''
            );

        cellNameElement.innerText = cellData.name ? cellData.name : '';

        cellElement.title = cellData.name ?
            cellData.name :
            (
                cellData.character !== undefined ?
                    cellData.character :
                    ''
            );

        cellElement.appendChild(cellDecimalElement);
        cellElement.appendChild(cellContentElement);
        cellElement.appendChild(cellNameElement);

        return cellElement;
    };

    const tableElement = document.createElement('div');
    tableElement.classList.add('ascii-table');
    document.body.appendChild(tableElement);

    const popupElement = document.createElement('div');
    popupElement.classList.add('ascii-popup');

    const popupOverlay = document.createElement('div');
    popupOverlay.classList.add('popup-overlay');
    popupOverlay.addEventListener('click', () => {
        document.body.removeChild(popupElement);
        document.body.removeChild(popupOverlay);

        document.body.classList.remove('popup-opened');
    });

    tableData.forEach((cellData, idx) => {
        const cell = generateCell(cellData);

        cell.addEventListener('click', () => {
            popupElement.innerText = `Order: ${cellData.ord}${
                    cellData.character !== undefined ? 
                        (`\nCharacter: ${cellData.character}`) : 
                        ''
                }${
                    cellData.abbr !== undefined ? 
                        (`\nAbbreviation: ${cellData.abbr}`) : 
                        ''
                }${
                    cellData.name !== undefined ? 
                        (`\nName: ${cellData.name}`) : 
                        ''
                }
                Binary: 0b${cellData.ord.toString(2)}
                Octal: 0o${cellData.ord.toString(8)}
                Hexadecimal: 0x${cellData.ord.toString(16)}
                `;

            const keyElement = document.createElement('kbd');
            keyElement.innerText = cellData.key !== undefined ?
                                        cellData.key : 
                                        (
                                            cellData.character !== undefined ?
                                                cellData.character :
                                                ''
                                        );
            
            if (cellData.key || cellData.character) {
                popupElement.appendChild(keyElement);
            }

            const wikipediaLinkElement = document.createElement('a');
            wikipediaLinkElement.href = cellData.wikipedia !== undefined ?
                                            `https://en.wikipedia.org/wiki${
                                                cellData.wikipedia
                                            }` :
                                            '#';
            wikipediaLinkElement.target = '_blank';
            wikipediaLinkElement.innerText = `Wikipedia (${
                cellData.name ?
                    cellData.name :
                    (
                        cellData.character !== undefined ?
                            cellData.character :
                            ''
                    )
                })`;
            wikipediaLinkElement.classList.add('wikipedia-link');
            popupElement.appendChild(wikipediaLinkElement);
            
            document.body.appendChild(popupOverlay);
            document.body.appendChild(popupElement);

            document.body.classList.add('popup-opened');
        });

        tableElement.appendChild(cell);
    });

};

fetch('ascii.json')
    .then(r => r.json())
    .then(d => buildTable(d));