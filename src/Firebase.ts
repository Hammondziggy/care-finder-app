import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  TwitterAuthProvider,
  FacebookAuthProvider,
  getAuth,
  createUserWithEmailAndPassword, 
  sendEmailVerification, 
  applyActionCode,
  signInWithPopup,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  doc,
  updateDoc,
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmuXOBRCnG86kZQaKqFKxaPEuoB3Wwp8Q",
  authDomain: "carefinder-auth-4b357.firebaseapp.com",
  projectId: "carefinder-auth-4b357",
  storageBucket: "carefinder-auth-4b357.appspot.com",
  messagingSenderId: "800889108915",
  appId: "1:800889108915:web:38c4c47867fccaab8c73c6",
  measurementId: "G-PDLDHG23RV"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const twitterProvider = new TwitterAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            });
        }
    } catch (err: any) {
        console.error(err);
        alert((err as Error).message);
    }
};


const signInWithTwitter = async () => {
    try {
        const res = await signInWithPopup(auth, twitterProvider);
        const user = res.user;
        // Additional logic specific to Twitter sign-in
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);

        if (docs.docs.length === 0) {
            // User doesn't exist, add them to the database
            await addDoc(collection(db, "users"), {
            uid: user.uid,
            name: user.displayName,
            authProvider: "twitter",
            email: "", // Twitter doesn't provide email, leave it blank or handle it differently
            });
        } else {
            // User already exists, perform any necessary updates
            const existingUser = docs.docs[0];
            if (existingUser.data().name !== user.displayName) {
                await updateDoc(doc(db, "users", existingUser.id), {
                    name: user.displayName,
                });
            }
        }
        // Redirect or perform post-login actions
        //navigate("/");
    } catch (err: any) {
        console.error(err);
        alert((err as Error).message);
    }
};

const signInWithFacebook = async () => {
    try {
        const res = await signInWithPopup(auth, facebookProvider);
        const user = res.user;

        // Additional logic specific to Facebook sign-in
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);

        if (docs.docs.length === 0) {
            // User doesn't exist, add them to the database
            await addDoc(collection(db, "users"), {
            uid: user.uid,
            name: user.displayName,
            authProvider: "facebook",
            email: user.email,
            });
        } else {
            // User already exists, perform any necessary updates
            const existingUser = docs.docs[0];
            if (existingUser.data().name !== user.displayName) {
                await updateDoc(doc(db, "users", existingUser.id), {
                    name: user.displayName,
                });
            }
        }
        // Redirect or perform post-login actions
        // history.push("/");
    } catch (err: any) {
        console.error(err);
        alert((err as Error).message);
    }
};

const logInWithEmailAndPassword = async (email: string, password: string) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
        console.error(err);
        alert((err as Error).message);
    }
};

const registerWithEmailAndPassword = async (
  name: string,
  email: string,
  password: string
) => {
    try {
        const res = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (err: any) {
        console.error(err);
        alert((err as Error).message);
    }
};

const sendPasswordReset = async (email: string) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset link sent!");
    } catch (err: any) {
        console.error(err);
        alert((err as Error).message);
    }
};

const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  googleProvider, 
  twitterProvider, 
  facebookProvider,
  createUserWithEmailAndPassword, 
  sendEmailVerification, 
  applyActionCode,
  signInWithGoogle,
  signInWithTwitter,
  signInWithFacebook,
  registerWithEmailAndPassword,
  logInWithEmailAndPassword,
  sendPasswordReset,
  logout,
};