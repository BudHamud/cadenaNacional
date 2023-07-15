import { useEffect } from 'react';
import { getFirestore, doc, setDoc, collection, deleteDoc, getDocs, addDoc } from 'firebase/firestore'

const Update = () => {
    useEffect(() => {
        
    }, [])

    const db = getFirestore()

    const addProd = async () => {
        await setDoc(doc(db, 'prods', 'asd'), {
            nombre: 'הוא'
        })

        await addDoc(collection(db, 'prods'), {
            nombre: 'הוא'
        })
    }

    const showProds = async () => {
        let arr = []
        const prods = await getDocs(collection(db, 'prods'))
        prods.docs.forEach((e) => {
            arr.push(e.data())
            console.log(e);
        })
        console.log(arr);
    }

    const deleteProds = async () => {
        await deleteDoc(doc(db, 'prods', 'asd'))
    }

    return (
        <div>
            <button onClick={addProd}>Crear Prod</button>
            <button onClick={showProds}>Mostrar Prod</button>
            <button onClick={deleteProds}>Borrar Prod</button>
        </div>
    );
}

export default Update;
