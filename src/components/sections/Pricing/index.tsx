import { subscriptionTiersInOrder } from '@/app/data/subscriptionTiers';
import PricingCard from './PricingCard';

export default function PricingSection() {
  return (
    <section id="pricing" className="px-8 py-16 bg-accent/5 ">
      <h2 className="text-4xl text-center text-balance font-semibold mb-8">
        Pricing software which pays for itself 20x over
      </h2>
      <div className="grid grid-col-2 lg:grid-cols-4 gap-4 max-w-screen-xl mx-auto">
        {subscriptionTiersInOrder.map((tier) => (
          <PricingCard key={tier.name} {...tier} />
        ))}
      </div>
    </section>
  );
}
