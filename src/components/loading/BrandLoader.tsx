interface BrandLoaderProps {
  message?: string;
}

export default function BrandLoader({  }: BrandLoaderProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      <img
        src="/images/hotbedlk-logo.png"
        alt="Hotbed.lk"
        className="h-8 w-auto"
      />
      <div className="flex items-center gap-2">
        <span className="dot-blink h-2 w-2 rounded-full bg-[var(--primary-color)]" />
        <span className="dot-blink dot-blink-delay-1 h-2 w-2 rounded-full bg-[var(--primary-color)]" />
        <span className="dot-blink dot-blink-delay-2 h-2 w-2 rounded-full bg-[var(--primary-color)]" />
      </div>
      {/* {message ? (
        <p className="font-body text-sm text-gray-600">{message}</p>
      ) : null} */}
    </div>
  );
}
