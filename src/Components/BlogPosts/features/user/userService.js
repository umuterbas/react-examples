import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase-config';

const provider = new GoogleAuthProvider();

const userService = {
  login: async () => {
    return await signInWithPopup(auth, provider);
  },
};

export default userService;
