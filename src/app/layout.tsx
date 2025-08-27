import "./globals.css";

export const metadata = {
  title: "Passport Wait Time — V0",
  description: "Passport processing and appointment wait times.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
