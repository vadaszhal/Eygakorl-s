import { getAll } from './db.js';

const table = document.querySelector('table.table');


const generateTable = (data = []) => {
    console.log(data);

    const thead = document.createElement('thead');//thead elem létrehozása

    table.appendChild(thead);//thead a táblába

    const keys = Object.keys(data[0]);//lekérjük az első objektum elemeit

    const tr = document.createElement('tr');//új sor létrehozása
    thead.appendChild(tr);// be a theadbe
    //for ciklusban végigmegyünk az objektum kulcsain
    keys.forEach(key => {
        const th = document.createElement('th');
        th.innerText = key;
        tr.appendChild(th);
    });
    //oszlop a gomboknak
    const th = document.createElement('th');
    th.appendChild = (th);
    //oszlop neve
    const actionTh = document.createElement('th');
    actionTh.innerText = 'Műveletek';
    tr.appendChild(actionTh);

    const tbody = document.createElement('tbody');//tbody létrehozása
    table.appendChild(tbody);// a táblába
    data.forEach(row => {
        const tr = document.createElement('tr');//új sor létrehozása
        tbody.appendChild(tr);// a tbodybe
        keys.forEach(key => {
            const td = document.createElement('td');//új cella létrehozása
            td.innerText = row[key];//az objektum kulcsának értéke
            tr.appendChild(td);// a sorba
        });
        const td = document.createElement('td');//új cella létrehozása
        tr.appendChild(td);
        //Gombcsoport
        const btnGroup = document.createElement('div');//gomboknak div létrehozása
        td.appendChild(btnGroup);// a cellába
        btnGroup.classList.add('btn-group');//gomboknak osztály
        //infogomb
        const infoBtn = document.createElement('button');//új gomb létrehozása
        btnGroup.appendChild(infoBtn);//gomb a divbe
        infoBtn.classList.add('btn', 'btn-info');//gomb osztályok
        infoBtn.innerText = 'Info';//gomb szövege
        //infogomb eseménykezelője
        infoBtn.addEventListener('click', () => {
            alert(JSON.stringify(row, null, 2));//alertben kiírja az objektumot
        });
        //törlés
        const deleteBtn = document.createElement('button');//új gomb létrehozása
        btnGroup.appendChild(deleteBtn);//gomb a divbe
        deleteBtn.classList.add('btn', 'btn-danger');//gomb osztályok
        deleteBtn.innerText = 'Delete';//gomb szövege
        // törlés gomb eseménykezelője
        deleteBtn.addEventListener('click', async () => {
            if (confirm('Biztos?')) {
                await remove(row.id);//törlés
                tr.parentElement.removeChild(tr);//sor törlése
                alert('A ${row.id} sor törölve.');//alertben kiírja, hogy törölve
            }
        });

    });

};

//meghívom a GetAll függvényt
getAll().then(data => generateTable(data));

