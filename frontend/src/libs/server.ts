"use server";
import { cookies } from "next/headers";

// No explicit return type needed as cookies().delete returns void
export const signOutCookie = (): void => {
  cookies().delete("token");
  cookies().delete("role");
};
