const urlParams = new URLSearchParams(window.location.search);
const selectedItem = JSON.parse(urlParams.get('item'));

const infoBlock = document.querySelector('.iteminfo');
infoBlock.innerHTML = '';

const img = document.createElement('img');
          img.src = 'img/'+selectedItem.image;
          img.alt = selectedItem.name;
          infoBlock.appendChild(img);

const name = selectedItem.name;
const h3 = document.createElement('h3');
        h3.textContent = name;
        infoBlock.appendChild(h3);

const price = selectedItem.price;
const p = document.createElement('p');
          p.textContent = price;
          infoBlock.appendChild(p);

const description = selectedItem.description;
const p2 = document.createElement('p');
          p2.textContent = description;
          infoBlock.appendChild(p2);



