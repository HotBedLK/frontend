import Button from "../ui/Button/Button";

type SubscriptionDetailsCardProps = {
  onSubscribe?: () => void;
  loading?: boolean;
  className?: string;
};

export default function SubscriptionDetailsCard({
  onSubscribe,
  loading = false,
  className = "",
}: SubscriptionDetailsCardProps) {
  return (
    <div className={`rounded-2xl border border-gray-200 bg-white p-7 shadow-sm ${className}`.trim()}>
      <div className="flex items-center gap-4">
        <img src="/images/hotbedlk-logo.png" alt="hotbedlk logo here" className="h-16 w-16 object-contain" />

        <div>
          <p className="text-sm font-medium text-[var(--listing-ink-muted)]">Subscription</p>
          <h3 className="font-display text-2xl font-semibold text-[var(--listing-ink)]">Hotbed.lk</h3>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-5">
        <div className="flex items-center justify-between text-base">
          <span className="text-[var(--listing-ink-muted)]">Period</span>
          <span className="font-medium text-[var(--listing-ink)]">Monthly</span>
        </div>

        <div className="my-4 h-px bg-gray-200" />

        <div className="flex items-center justify-between">
          <span className="text-base text-[var(--listing-ink-muted)]">Price</span>
          <span className="font-display text-2xl font-semibold text-[var(--primary-color)]">
            LKR 500
          </span>
        </div>
      </div>

      <Button className="mt-6 h-13 rounded-xl text-base" onClick={onSubscribe} loading={loading}>
        Subscribe
      </Button>
    </div>
  );
}
