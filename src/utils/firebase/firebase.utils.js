import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCS4ElOMeMw0T_dwn0AHN-BtM8rE21pzb0",
    authDomain: "crwn-clothing-db-98097.firebaseapp.com",
    projectId: "crwn-clothing-db-98097",
    storageBucket: "crwn-clothing-db-98097.appspot.com",
    messagingSenderId: "157028005540",
    appId: "1:157028005540:web:8961d5d42073fc94e11831"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot.exists());

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName, 
                email,
                createdAt
            }); 
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
}