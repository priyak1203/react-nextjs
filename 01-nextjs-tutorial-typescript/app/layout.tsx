import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav>hello there navbar</nav>
        {children}
      </body>
    </html>
  );
}
