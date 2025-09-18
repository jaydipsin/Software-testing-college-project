// authService.js
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase.config.js";

// Sign Up
export const register = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

// Login
export const login = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

// Google Login
const googleProvider = new GoogleAuthProvider();
export const loginWithGoogle = async () =>
  await signInWithPopup(auth, googleProvider);

// Logout
export const logout = () => signOut(auth);
