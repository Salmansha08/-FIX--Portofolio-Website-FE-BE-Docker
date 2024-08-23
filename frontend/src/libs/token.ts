export const getTokenExpiration = (token: string): Date | null => {
  try {
    const decodedToken: { exp?: number } = JSON.parse(
      atob(token.split(".")[1])
    );
    if (decodedToken.exp) {
      const expirationDate = new Date(decodedToken.exp * 1000);
      return expirationDate;
    } else {
      throw new Error("Token doesn't have an expiration date");
    }
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
};

export const isTokenExpired = (token: string): boolean => {
  const expirationDate = getTokenExpiration(token);
  if (expirationDate) {
    return expirationDate <= new Date();
  } else {
    return true;
  }
};
