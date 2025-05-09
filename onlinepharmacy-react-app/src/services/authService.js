import { auth } from './firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';

export const signup = (email, password, displayName) =>
  createUserWithEmailAndPassword(auth, email, password)
    .then(({ user }) => updateProfile(user, { displayName }));

export const login = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);

export const fetchUserProfile = () => {
  const user = auth.currentUser;
  if (!user) return Promise.resolve(null);
  return Promise.resolve({
    uid: user.uid,
    email: user.email,
    fullName: user.displayName,
  });
};
