// import { initializeApp } from "firebase/app";
// import { getFirestore, doc, getDoc, getDocs, collection, query, where } from 'firebase/firestore';


// const firebaseConfig = {
//     apiKey: "AIzaSyBc0gCqb9VRbZYLLFnbIeAVCkuO0g3T9D8",
//     authDomain: "curso-reactjs-coderhouse.firebaseapp.com",
//     projectId: "curso-reactjs-coderhouse",
//     storageBucket: "curso-reactjs-coderhouse.appspot.com",
//     messagingSenderId: "768513447329",
//     appId: "1:768513447329:web:2557a5dbac09288ed327e0"
// };

// initializeApp(firebaseConfig);
// const db = getFirestore();

// export function getProducts(category) {
//     const productsCollection = collection(db, 'items');
//     const productQuery = category ? query(productsCollection, where('category', '==', category)) : productsCollection;

//     return new Promise((resolve, reject) => {
//         getDocs(productQuery)
//             .then((snapshot) => {

//                 if (snapshot.size === 0) {
//                     const errorMessage = category ? `No se encontraron productos con la categoría ${category}` : 'Productos no encontrados';
//                     reject(errorMessage);
//                 }

//                 const products = snapshot.docs.map((doc) => ({
//                     id: doc.id,
//                     ...doc.data()
//                 }));

//                 resolve(products);
//             })
//             .catch((error) => {
//                 const errorMessage = 'Error al obtener documentos';
//                 console.log(errorMessage, error);
//                 reject(errorMessage);
//             });
//     });
// }

// export function getProductsById(id) {
//     const productRef = doc(db, 'items', id);

//     return new Promise((resolve, reject) => {
//         getDoc(productRef)
//             .then((snapshot) => {
//                 if (snapshot.exists()) {
//                     resolve(snapshot.data());
//                 } else {
//                     reject('Producto no encontrado');
//                 }
//             })
//             .catch((error) => {
//                 reject(error);
//             });
//     });
// }


import { addDoc, collection, getFirestore } from "firebase/firestore";
const sendOrder = () => {
    const order = {
        buyer: { name: "Agustin", phone: "1111", items: [{ name: "Bici", price: 100 }], email: "a@a.com" },
        total: 100
}; 
const db = getFirestore();
const ordersCollection = collection(db, "orders");
addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
}