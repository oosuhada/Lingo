import type { PropsWithChildren } from "react";

import { Header } from "./header";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />

      <main className="flex flex-1 flex-col items-center justify-center p-4">
        {children}
      </main>
    </div>
  );
};

export default AuthLayout;
