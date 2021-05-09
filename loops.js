const form = document.querySelector('form');
const input = document.querySelector('#txttaskname');
const deleteall = document.querySelector('#btndeleteall');
const tasklist = document.querySelector('#tasklist');
let items;

loaditems()

addevenetlisener()

function addevenetlisener() {
    form.addEventListener('submit', addnewitem)
    tasklist.addEventListener('click', deleteitem);
    deleteall.addEventListener('click', deleteallitem);
}

function addnewitem(e) {
    if (input.value == '') {
        alert('Add a item!')
    }
    creatitem(input.value);
    setitemLS(input.value)
    setitemLS(input.value)
    e.preventDefault()
    input.value = '';
}

function creatitem(text) {
    if (input.value !== '') {
        const li = document.createElement('li');
        li.className = 'list-group-item list-group-item-secondary';
        li.appendChild(document.createTextNode(text))
        //-------------------------
        const a = document.createElement('a');
        a.className = 'delete-item float-right';
        a.setAttribute('href', '#');
        //----------------------------
        const i = document.createElement('i');
        i.className = 'fas fa-times';
        //------------------------
        a.appendChild(i)
        li.appendChild(a)
        tasklist.appendChild(li)
    }
}


function loaditems() {
    items = getitemsLS();
    items.forEach(function (item) {

        creatitem(item)
    })
}

function getitemsLS() {
    if (localStorage.getItem('items') === null) {
        items = [];
    } else {
        items = JSON.parse(localStorage.getItem('items'))
    }
    return items;
}

function setitemLS(text) {
    items = getitemsLS();
    items.push(text);
    localStorage.setItem('items', JSON.stringify(items));

}

function deleteitemLS(text) {
    items = getitemsLS();
    items = forEach(function (item, index) {
        if (item == text) {
            items.splice(index, 1);
        }
    })
}


function deleteitem(e) {
    {
        if (e.target.className === 'fas fa-times') {
            if (confirm('are you sure?')) {
                e.target.parentElement.parentElement.remove();

                deleteitemLS(e.target.parentElement.parentElement.textContent);
            }
            e.preventDefault;
        }
    }
}

function deleteallitem() {
    if (confirm('are you sure?')) {
        tasklist.innerHTML = ''
    }
}