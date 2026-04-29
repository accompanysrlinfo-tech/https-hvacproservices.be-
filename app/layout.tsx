export const metadata = {
  title: "HVAC Pro Services",
  description: "Services professionnels HVAC en Belgique",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
import "./globals.css";
