import { getFirestore, collection, addDoc, doc, updateDoc, serverTimestamp} from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG);

initializeApp(firebaseConfig);
const db = getFirestore();

export function createOrder(buyer, orderItems, total){
    const ordersCollection = collection(db, 'orders');
    const date = serverTimestamp();
    let order = {
        buyer: buyer,
        items: orderItems,
        total: total,
        date : date
    };
    return new Promise((resolve, reject) => {
        if (orderItems.length===0){
            const errorMessage = "Debe seleccionar articulos para comprar";
            reject(errorMessage);
        }
        addDoc(ordersCollection, order)
            .then(() => {
                const message = "Orden creada con exito";
                console.log(message);
                resolve (message);
            })
            .catch((error) => {
                const errorMessage = "Error al crear la orden";
                console.error( errorMessage, error);
                reject (errorMessage);
            });
    });
}

export function updateOrder(orderId, order){
    const orderDoc = doc(db, "orders", orderId);
    return new Promise((resolve, reject) => {
        updateDoc(orderDoc, order)
            .then(() => {
                const message = "Orden actualizada";
                console.log(message); 
                resolve(message);
            })
            .catch((error) => {
                const errorMessage = "Error al actualizar la orden";
                console.error("Error al actualizar la orden: ", error);
                reject(errorMessage);
            });
    });
}
