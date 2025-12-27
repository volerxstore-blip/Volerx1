/ ضع هنا رابط جدولك المنشور
const sheetURL = "ضع_رابط_الجدول_هنا";

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