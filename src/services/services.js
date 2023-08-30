const categories = ['Café', 'Tazas', 'Dulces'];

const products = [
    { id: 1, name: 'Café Arabica', description: 'Café Arabica de alta calidad, con aroma y sabor excepcionales.', category: 'cafe', price: 12.99 },
    { id: 2, name: 'Taza de Café Vintage', description: 'Taza de café con diseño vintage, perfecta para disfrutar tu bebida favorita.', category: 'tazas', price: 8.95 },
    { id: 3, name: 'Cafetera Express', description: 'Cafetera express para preparar espressos y cappuccinos deliciosos en casa.', category: 'cafetera', price: 149.99 },
    { id: 4, name: 'Café Molido Colombian', description: 'Café molido Colombian de cuerpo completo y notas afrutadas.', category: 'cafe', price: 9.49 },
    { id: 5, name: 'Taza de Café de Viaje', description: 'Taza de café aislada para llevar tus bebidas calientes mientras te desplazas.', category: 'tazas', price: 16.75 },
    { id: 6, name: 'Mocha Chocolate', description: 'Tabletas de chocolate con trozos de granos de café tostado.', category: 'dulces', price: 5.99 },
    { id: 7, name: 'Café Cold Brew', description: 'Botella de café cold brew listo para beber, suave y refrescante.', category: 'cafe', price: 3.99 },
    { id: 8, name: 'Café Descafeinado', description: 'Café descafeinado con sabor intenso pero sin cafeína.', category: 'cafe', price: 11.49 },
    { id: 9, name: 'Galletas de Café', description: 'Galletas con sabor a café, el complemento perfecto para tu pausa cafetera.', category: 'dulces', price: 4.75 }
];

export function getCategories() {
    return categories;
}

export function getProducts(category) {
    if (category) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const filteredProducts = products.filter(product => product.category === category);
                if (filteredProducts.length > 0) {
                    resolve(filteredProducts);
                } else {
                    reject('No se encontraron productos con esta categoria');
                }
            }, 1000);
        });
    }
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 1000);
    });
}

export function getProductsById(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = products.find(product => product.id == id);
            if (product) {
                resolve(product);
            } else {
                reject('Producto no encontrado');
            }
        }, 1000);
    });
}
