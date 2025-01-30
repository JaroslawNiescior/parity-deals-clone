import { Button } from '@/components/ui/button';
import { SignInButton } from '@clerk/nextjs';
import { ArrowRightIcon } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-[radial-gradient(hsl(0,72%,65%,40%),hsl(24,62%,73%,40%),hsl(var(--background))_60%)] flex items-center justify-center text-center text-balance flex-col gap-8 px-4">
      <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold m-4 tracking-tight">
        Price Smarter, Sell bigger!
      </h1>
      <p className="text-lg lgg:text-3xl max-w-screen-xl">
        Optimize your product pricing across countries to maximize sales.
        Capture 85% of the untapped market with location-based dynamic pricing
      </p>
      <SignInButton>
        <Button className="text-lg p-6 rounded-xl flex gap-2">
          Get started for free <ArrowRightIcon className="size-5" />
        </Button>
      </SignInButton>
    </section>
  );
}
