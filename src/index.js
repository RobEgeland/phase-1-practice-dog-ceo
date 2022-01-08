console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', getDogPics)
document.addEventListener('DOMContentLoaded', getDogBreeds)

let li = undefined;
let ul = document.querySelector('#dog-breeds');
let dropDown = document.querySelector('#breed-dropdown');
let list = ul.childNodes


function getDogPics() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((res) => res.json())
    .then((data) => {
        data.message.forEach((data) => renderPics(data))
    })

}

function renderPics(data) {
    let img = document.createElement('img');
    let div = document.createElement('div');
    img.src = data.toString()
    img.width = '300';
    img.height = '200';
    document.querySelector('#dogImageContainer').appendChild(img)
    document.querySelector('#dogImageContainer').appendChild(div)
}

function getDogBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then((res) => res.json())
    .then((data) => renderBreeds(data.message))
}

function renderBreeds(breeds) {
    for (const breed in breeds) {
        li = document.createElement('li')
        li.innerText = breed
        li.className = 'breed'
        document.querySelector('#dog-breeds').appendChild(li)
    }
}

ul.addEventListener('click', changeColor);

function changeColor(e) {
    if (e.target.style.color === 'black') {
        e.target.style.color = 'blue';
    }else {
        e.target.style.color = 'black';
    }
}

document.querySelector('#breed-dropdown').addEventListener('change', filterBreed)

function filterBreed(e) {
    list.forEach((item) => {
        if(item.textContent.charAt(0) === e.target.value) {
            item.hidden = false;
        }else {
            item.hidden = true;
        }
     })
}
