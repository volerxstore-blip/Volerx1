/ ضع هنا رابط جدولك المنشور
const sheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRKGKEnpyZI-y9qqmEz9aYsOCuDi-uId6_DCT4CiSo6c0VIa1FmuvfHbHCJDp2w85P6N4TMOfpMGU09/pub?gid=1255028173&single=true&output=csv";

// المكان الذي ستعرض فيه المنتجات
const productsDiv = document.getElementById("products");

// جلب البيانات من الجدول
fetch(sheetURL)
  .then(response => response.text())
  .then(data => {
    const rows = data.split("\n").slice(1); // نتجاوز العنوان
    rows.forEach(row => {
      const [name, price, image] = row.split(",");
      if(name && price && image){
        productsDiv.innerHTML += `
          <div class="product">
            <img src="${image}">
            <h3>${name}</h3>
            <p>₪ ${price}</p>
          </div>
        `;
      }
    });

  });


