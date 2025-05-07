import { getAll } from './db.js';//1

const table = document.querySelector('table.table');//3


const generateTable = (data = []) =>{ //1
    console.log(data);//1

    const thead = document.createElement('thead');//thead elem létrehozása
    table.appendChild(thead);//4

    const keys = Object.keys(data[0]);//5 lekérjük az első objektum elemeit

    const tr = document.createElement('tr');//új sor létrehozása
    thead.appendChild(tr);// 5
    
    //5 for ciklusban végigmegyünk az objektum kulcsain
    keys.forEach(key => {
        const th = document.createElement('th');
        th.innerText = key;
        tr.appendChild(th);
    });
    // oszlop a gomboknak
    const th = document.createElement('th');
    th.appendChild = (th);
    // oszlop neve
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
        const td = document.createElement('td');// 6 új cella létrehozása
        tr.appendChild(td);
        //6 Gombcsoport
        const btnGroup = document.createElement('div');//gomboknak div létrehozása
        td.appendChild(btnGroup);// a cellába
        btnGroup.classList.add('btn-group');//gomboknak osztály
        //6 infogomb
        const infoBtn = document.createElement('button');//új gomb létrehozása
        btnGroup.appendChild(infoBtn);//gomb a divbe
        infoBtn.classList.add('btn', 'btn-info');//gomb osztályok
        infoBtn.innerText = 'Info';//gomb szövege
        //6 infogomb eseménykezelője
        infoBtn.addEventListener('click', () => {
            alert(JSON.stringify(row, null, 2));//alertben kiírja az objektumot
        });
        //6 törlés
        const deleteBtn = document.createElement('button');
        btnGroup.appendChild(deleteBtn);
        deleteBtn.classList.add('btn', 'btn-danger');
        deleteBtn.innerText = 'Delete';
        //6 törlés gomb eseménykezelője
        deleteBtn.addEventListener('click', async () => {
            if (confirm('Biztos?')) {
                await remove(row.id);
                tr.parentElement.removeChild(tr);
                alert('A ${row.id} sor törölve.');
            }
        });

    });

};

//meghívom a GetAll függvényt
getAll().then(data => generateTable(data));//1

