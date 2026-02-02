import Navbar from "@/components/layout/Navbar";
import "./globals.css";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Westland Minerals & Mining ltd",
  description: "Building Value Through Responsible Mining",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Westland Minerals & Mining",
    description: "Building Value Through Responsible Business",
    url: "https://westlandminerals.com", // Your actual website URL
    siteName: "Westland Minerals",
    images: [
      {
        url: "/og-image.png", // This is what shows when sharing!
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Westland Minerals & Mining",
    description: "Building Value Through Responsible Business",
    images: ["/og-image.png"], // For Twitter
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
