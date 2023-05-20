tableProductsObj = [
    {
        id: 1,
        productName: 'Motorola Moto G22',
        originalPrice: 'R$ 959.00',
        currentPrice: 'R$ 900.00',
        discount: 'R$ 59.00'
    },
    {
        id: 2,
        productName: 'Xiaomi Redmi 9a 32 GB 2 GB Ram Verde',
        originalPrice: 'R$ 599.00',
        currentPrice: 'R$ 500.00',
        discount: 'R$ 99.00'
    },    
    {
        id: 3,
        productName: 'iPhone 11 - 64 GB - Preto',
        originalPrice: 'R$ 2449.00',
        currentPrice: 'R$ 2400.00',
        discount: 'R$ 49.00'
    },    
    {
        id: 4,
        productName: 'Smartphone Galaxy A31 128GB Preto Samsung',
        originalPrice: 'R$ 809.00',
        currentPrice: 'R$ 800.00',
        discount: 'R$ 9.00'
    },
]

const products = tableProductsObj.map(function(product) {
    return `
            <tr>
                <td>${product.productName}</td>
                <td>${product.originalPrice}</td>
                <td>${product.currentPrice}</td>
                <td>${product.discount}</td>
            </tr>
            `;
})

document.querySelector('tbody').innerHTML = products.join("");