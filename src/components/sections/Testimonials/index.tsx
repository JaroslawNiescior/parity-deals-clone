import { ClerkIcon } from '@/app/(marketing)/_icons/Clerk';
import { NeonIcon } from '@/app/(marketing)/_icons/Neon';
import Link from 'next/link';

export default function TestimonialsSection() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container py-16 flex flex-col gap-16 px-8 md:px-16">
        <h2 className="text-3xl text-center text-balance">
          Trusted by the top modern companies
        </h2>
        <div className="grid grid-col-2 md:grid-cols-3 xl:grid-cols-5 gap-16">
          <Link href="https://neon.tech">
            <NeonIcon />
          </Link>
          <Link href="https://clerk.com">
            <ClerkIcon />
          </Link>
          <Link href="https://neon.tech">
            <NeonIcon />
          </Link>
          <Link href="https://clerk.com">
            <ClerkIcon />
          </Link>
          <Link href="https://neon.tech">
            <NeonIcon />
          </Link>
          <Link href="https://clerk.com">
            <ClerkIcon />
          </Link>
          <Link href="https://neon.tech">
            <NeonIcon />
          </Link>
          <Link href="https://clerk.com">
            <ClerkIcon />
          </Link>
          <Link href="https://neon.tech">
            <NeonIcon />
          </Link>
          <Link href="https://clerk.com" className="md:max-xl:hidden">
            <ClerkIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
