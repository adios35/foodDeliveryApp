import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { db, storage } from "../config/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

export const createUser = async (auth, email, password, name, avatar) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);

      if (avatar) {
        const imageRef = ref(storage, `image/${Date.now() + name}`);
        const uploadTask = uploadBytesResumable(imageRef, avatar[0]);
        uploadTask.on(
          //   (error) => {
          //     reject(error);
          //   },
          "state_changed",
          () => {
            getDownloadURL(uploadTask.snapshot.ref)
              .then(async (imageRef) => {
                await updateProfile(user.user, {
                  displayName: name,
                  photoURL: imageRef,
                });
                await setDoc(doc(db, "users", user.user.uid), {
                  user: user.user.displayName,
                  email: user.user.email,
                  uid: user.user.uid,
                  photoURL: user.user.photoURL,
                  favorites: [],
                }).then(() => {
                  resolve((error) => {
                    reject(error);
                    console.log("error");
                  });
                });
              })
              .catch((error) => {
                reject(error);
              });
          }
        );
      } else {
        await setDoc(doc(db, "users", user.user.uid), {
          user: user.user.displayName,
          email: user.user.email,
          uid: user.user.uid,
          photoURL: null,
          favorites: [],
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};
