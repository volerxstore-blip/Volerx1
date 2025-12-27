/ ضع هنا رابط جدولك المنشور
const sheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSOpBiZrdzvfBLt9pkupN_CYY_KgusSVpxmvt10N_S-BlAkgfmludXmaXwhZcXx-lzRqwMAWeHTlX9w/pub?output=csv";

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
