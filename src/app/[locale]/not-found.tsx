import Link from "next/link";
import { Metadata } from "next";
import Header from "@/components/_header/Header";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist or has been moved.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="text-center space-y-6 max-w-md">
          <p className="text-7xl font-bold text-muted-foreground/20">404</p>
          <h1 className="text-3xl font-bold tracking-tight">Page Not Found</h1>
          <p className="text-muted-foreground">
            The page you are looking for does not exist or has been moved.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex h-10 items-center justify-center rounded-lg bg-foreground text-background px-5 text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              Go Home
            </Link>
            <Link
              href="/#contact"
              className="inline-flex h-10 items-center justify-center rounded-lg border border-input bg-background px-5 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
