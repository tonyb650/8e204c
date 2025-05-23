import { PrefillProvider } from "@/features/action-blueprints/context/PrefillContext";
import { Outlet, ScrollRestoration } from "react-router";

export function RootLayout() {
  return (
    <PrefillProvider>
      <div className="flex flex-col items-center min-h-screen">
        <Outlet />
      </div>
      <ScrollRestoration />
    </PrefillProvider>
  );
}
