import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { auth } from "../../../app/config/firebase";
import { setUser } from "../../../store/slices/user";

// eslint-disable-next-line no-unused-vars
export const useSignInWithGoogle = (setAuthPopup: (state: boolean) => void) => {
  const dispatch = useDispatch();

  const handleSignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, new GoogleAuthProvider());
      const { displayName, email, photoURL, uid } = result.user;
      const payload = {
        displayName,
        email,
        photoUrl: photoURL,
        uid,
      };
      dispatch(setUser(payload));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setAuthPopup(false);
      toast.error(error.message);
    }
  };

  return handleSignInWithGoogle;
};