/ ضع هنا رابط جدولك المنشور
const sheetURL = "https://api.sheetbest.com/sheets/182e80a2-6937-4313-9add-82f8f95b4b54";

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




