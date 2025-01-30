import { ClerkProvider } from '@clerk/nextjs';
import NavBar from './_components/NavBar';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <div className="selection:bg-[hsl(320,65%,52%,20%)]">
        <NavBar />
        test
        {children}
      </div>
    </ClerkProvider>
  );
}
