// ---------------------------
// أضف منتجاتك هنا فقط
// ---------------------------
const products = [
  {name: "فانوس ذهبي", price: 45, image: "فانوس ذهبي"}
   {name: "مضيفة طعام", price: 80, image: "مضيفة طعام"}
 {name: "فانوس سداسي ملون", price: 25, image: "فانوس سداسي ملون"}
  // مثال:
  // {name: "اسم المنتج", price: 100, image: "رابط الصورة"},
];

// ---------------------------
// الكود الذي يعرض المنتجات على الموقع
// لا تغير شيء هنا
// ---------------------------
const productsDiv = document.getElementById("products");

products.forEach(item => {
  productsDiv.innerHTML += `
    <div class="product">
      <img src="${item.image}">
      <h3>${item.name}</h3>
      <p>₪ ${item.price}</p>
    </div>
  `;
});







