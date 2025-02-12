"use client"; // Ensures it runs on the client side

import { createContext, useContext } from "react";
import { useRouter } from "next/navigation";

const RouterContext = createContext<{ navigateToFaq: () => void } | null>(null);

export const RouterProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  function navigateToFaq() {
    router.push("/faq");
  }

  return (
    <RouterContext.Provider value={{ navigateToFaq }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useAppRouter = () => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error("useAppRouter must be used within RouterProvider");
  }
  return context;
};
