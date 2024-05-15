const urlParams = new URLSearchParams(window.location.search);
const selectedCategory = JSON.parse(urlParams.get('item'));
const navSubmenuLinks = document.querySelectorAll('.nav-submenu-link');
const xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "catalog.xml", true);
xmlhttp.send();
xmlhttp.onload = function() {
  if (xmlhttp.status === 200) {
    const xmlDoc = xmlhttp.responseXML;
    const items = xmlDoc.getElementsByTagName("item");

    const listBlock = document.querySelector('.list');
    listBlock.innerHTML = '';


    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const name = item.getElementsByTagName("name")[0].childNodes[0].nodeValue;
      const price = item.getElementsByTagName("price")[0].childNodes[0].nodeValue;
      const image = item.getElementsByTagName("img")[0].childNodes[0].nodeValue;
      const description = item.getElementsByTagName("description")[0].childNodes[0].nodeValue;
      const category = item.getElementsByTagName("category")[0].childNodes[0].nodeValue;
      if((category==selectedCategory.category) || ((selectedCategory.category=='Товары') && (category=='Мячи' || category=='Шорты' || category=='Бутсы' || category=='Майки'))){
        const card = document.createElement('a');
        card.className = 'card';
        card.href = `itemCard.html?item=${JSON.stringify({ name, price, image, description })}`;

        const img = document.createElement('img');
        img.src = 'img/' + image;
        card.appendChild(img);

        const h3 = document.createElement('h3');
        h3.textContent = name;
        card.appendChild(h3);

        const p = document.createElement('p');
        p.textContent = price + ' BYN';
        card.appendChild(p);

        listBlock.appendChild(card);
      }

      }
    }
  }


navSubmenuLinks.forEach(link => {
  link.addEventListener('click', () => {
   
    const linkText=link.textContent;


  const xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", "catalog.xml", true);
  xmlhttp.send();

  xmlhttp.onload = function() {
    if (xmlhttp.status === 200) {
      const xmlDoc = xmlhttp.responseXML;
      const items = xmlDoc.getElementsByTagName("item");

      const listBlock = document.querySelector('.list');
      listBlock.innerHTML = '';

      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const name = item.getElementsByTagName("name")[0].childNodes[0].nodeValue;
        const price = item.getElementsByTagName("price")[0].childNodes[0].nodeValue;
        const image = item.getElementsByTagName("img")[0].childNodes[0].nodeValue;
        const category = item.getElementsByTagName("category")[0].childNodes[0].nodeValue;
        const description = item.getElementsByTagName("description")[0].childNodes[0].nodeValue;

        if(linkText === category){
          const card = document.createElement('a');
          card.className = 'card';
          card.href = `itemCard.html?item=${JSON.stringify({ name, price, image, description })}`;

          const img = document.createElement('img');
          img.src = 'img/' + image;
          card.appendChild(img);

          const h3 = document.createElement('h3');
          h3.textContent = name;
          card.appendChild(h3);

          const p = document.createElement('p');
          p.textContent = price + ' BYN';
          card.appendChild(p);

          listBlock.appendChild(card);
        }
        }
      }
    }
  });
});

const navLinks = document.querySelectorAll('.nav-link');
const navSubmenus = document.querySelectorAll('.nav-submenu');

navLinks.forEach((link, index) => {
  link.addEventListener('click', () => {
    if (navSubmenus[index].style.display === 'block') {
      navSubmenus[index].style.display = 'none';
    } else {
      navSubmenus[index].style.display = 'block';
    }
  });
});