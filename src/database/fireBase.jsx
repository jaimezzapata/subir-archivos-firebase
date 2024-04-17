// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const firebaseConfig = {
    apiKey: "AIzaSyBOaTk4LD8A8cvkReKabQ0ROomJPJyRhIg",
    authDomain: "subir-archivos-firebase.firebaseapp.com",
    projectId: "subir-archivos-firebase",
    storageBucket: "subir-archivos-firebase.appspot.com",
    messagingSenderId: "221040610069",
    appId: "1:221040610069:web:7603a0dea9ca8680af371c"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)

export async function uploadFile(file) {
    const storageRef = ref(storage, v4())
    await uploadBytes(storageRef, file)
    const url = await getDownloadURL(storageRef)
    return url
}