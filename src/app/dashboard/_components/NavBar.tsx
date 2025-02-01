import BrandLogo from '@/components/BrandLogo';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';

export default function NavBar() {
  return (
    <header className="flex py-4 shadow bg-background">
      <nav className="container flex items-center gap-10">
        <Link href="/dashboard" className="mr-auto">
          <BrandLogo />
        </Link>
        <Link href="/products" className="mr-auto">
          Products
        </Link>
        <Link href="/products" className="mr-auto">
          Analytics
        </Link>
        <Link href="/products" className="mr-auto">
          Subscriptions
        </Link>
        <UserButton />
      </nav>
    </header>
  );
}
