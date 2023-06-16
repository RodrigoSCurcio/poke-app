import { atom } from "jotai";
import { IAuthUser } from "../../interfaces/user";

export const userAuth = {
  uid: "",
  email: "",
  emailVerified: false,
  isAnonymous: false,
  photoURL: null,
  providerData: [
    {
      providerId: "",
      uid: "",
      displayName: "",
      email: "",
      phoneNumber: "",
      photoURL: "",
    },
  ],
} as IAuthUser;

export const userAuthAtom = atom(userAuth);
