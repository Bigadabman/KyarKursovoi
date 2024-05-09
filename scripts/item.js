const urlParams = new URLSearchParams(window.location.search);
const selectedItem = JSON.parse(urlParams.get('item'));

const infoBlock = document.querySelector('.itemInfo');
infoBlock.innerHTML = '';

const imgBlock=document.createElement('div');
imgBlock.className='imgBlock';

const img = document.createElement('img');
          img.src = 'img/'+ selectedItem.image;
          img.alt = selectedItem.name;
          imgBlock.appendChild(img);

          infoBlock.appendChild(imgBlock);

const cont=document.createElement('div');
        cont.className='info';

const itemName = selectedItem.name;
const h3 = document.createElement('h3');
        h3.textContent = itemName;
        cont.appendChild(h3);

const price = selectedItem.price;
const p = document.createElement('p');
          p.textContent = price + ' BYN';
          cont.appendChild(p);

const description = selectedItem.description;
const p2 = document.createElement('p');
          p2.textContent = description;
          cont.appendChild(p2);

          infoBlock.appendChild(cont);

const button =document.createElement('button');
button.textContent='Заказать';

const a=document.createElement('a');
a.href='form.html';
a.appendChild(button);
cont.appendChild(a);