import "./globals.css";

export const metadata = {
  title: {
    default: "A&C Company SRL",
    template: "%s | Chauffage Bruxelles",
  },
  description:
    "Entreprise HVAC en Belgique spécialisée en chauffage, climatisation et ventilation. Dépannage rapide, devis gratuit.",
  keywords:
    "chauffage Bruxelles, climatisation Belgique, ventilation Bruxelles, plombier chauffage Belgique",
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
      <body className="bg-gray-100 text-gray-900">
        {children}
      </body>
    </html>
  );
}
