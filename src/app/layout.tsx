// src/app/layout.tsx
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../app/globals.css'; 

export const metadata = {
  title: "D'econtrakan",
  description: "Real estate platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header /> {/* Include Header component */}
        
        <main>{children}</main>

        <Footer /> {/* Include Footer component */}
      </body>
    </html>
  );
}
