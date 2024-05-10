const urlParams = new URLSearchParams(window.location.search);
const selectedItem = JSON.parse(urlParams.get('item'));

const infoBlock = document.querySelector('.itemInfo');
infoBlock.innerHTML = '';

const itemName = selectedItem.name;
const h3 = document.createElement('h3');
        h3.textContent = itemName;
        infoBlock.appendChild(h3);

const price = selectedItem.price;
const p = document.createElement('p');
                p.textContent = price + ' BYN';
                infoBlock.appendChild(p);

const imgBlock=document.createElement('div');
imgBlock.className='imgBlock';

const img = document.createElement('img');
          img.src = 'img/'+ selectedItem.image;
          img.alt = selectedItem.name;
          imgBlock.appendChild(img);

          infoBlock.appendChild(imgBlock);







const description = selectedItem.description;
const p2 = document.createElement('p');
          p2.textContent = description;
          infoBlock.appendChild(p2);



const button =document.createElement('button');
button.textContent='Заказать';

const a=document.createElement('a');
a.href='form.html';
a.appendChild(button);
infoBlock.appendChild(a);