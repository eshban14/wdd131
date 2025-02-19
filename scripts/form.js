
const products = [
   { id: '1', name: 'Product A' },
   { id: '2', name: 'Product B' },
   { id: '3', name: 'Product C' }
];

const productSelect = document.getElementById('productName');
products.forEach(product => {
   const option = document.createElement('option');
   option.value = product.id;
   option.textContent = product.name;
   productSelect.appendChild(option);
});

if (localStorage.getItem('reviewCount') === null) {
   localStorage.setItem('reviewCount', 0);
}

document.getElementById('reviewForm').addEventListener('submit', function() {
   let count = parseInt(localStorage.getItem('reviewCount'));
   count++;
   localStorage.setItem('reviewCount', count);
});