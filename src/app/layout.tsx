import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
export const metadata = {
  title: "Liva",
  description: "Empreendimentos imobiliários",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
