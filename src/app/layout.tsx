// src/app/layout.tsx
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../app/globals.css'; 
import { ThemeProvider } from '@/components/ThemeProvider';
import Header1 from "../components/Header1"

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
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <Header1 />
          <main>{children}</main>
          <Footer /> 
        </ThemeProvider>
      </body>
    </html>
  );
}
