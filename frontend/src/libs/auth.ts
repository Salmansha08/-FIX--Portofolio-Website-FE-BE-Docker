import { AUTH_KEY } from "@/constants/variables";
import { signOutCookie } from "./server";

// signOut function does not return anything explicitly
export const signOut = (): void => {
  signOutCookie();
  localStorage.removeItem(AUTH_KEY);
  window.location.reload();
};
