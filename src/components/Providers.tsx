"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const Providers = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <NextThemesProvider
        {...props}
        attribute="class"
        defaultTheme="system"
        enableSystem
      >
        <SessionProvider>{children}</SessionProvider>
      </NextThemesProvider>
    </QueryClientProvider>
  );
};

export default Providers;
