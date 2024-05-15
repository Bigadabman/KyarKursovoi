const xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        const xmlDoc = xmlhttp.responseXML;
        const items = xmlDoc.getElementsByTagName("item");
        const recBlock = document.querySelector('.recommended-block');

        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            const name = item.getElementsByTagName("name")[0].childNodes[0].nodeValue;
            const price = item.getElementsByTagName("price")[0].childNodes[0].nodeValue;
            const image = item.getElementsByTagName("img")[0].childNodes[0].nodeValue;
            const rec = item.getElementsByTagName("rec")[0].childNodes[0].nodeValue;
            const description=item.getElementsByTagName("description")[0].childNodes[0].nodeValue;

            if (rec == 1) {
                const card = document.createElement('a');
                card.className = 'card';
                card.href = `itemCard.html?item=${JSON.stringify(item)}`;
    
                const img = document.createElement('img');
                img.src = 'img/' + image;
                card.appendChild(img);
    
                const h3 = document.createElement('h3');
                h3.textContent = name;
                card.appendChild(h3);
    
                const p = document.createElement('p');
                p.textContent = price + ' BYN';
                card.appendChild(p);
    
                recBlock.appendChild(card);
            }
        }
    }
};
xmlhttp.open("GET", "catalog.xml", true);
xmlhttp.send();