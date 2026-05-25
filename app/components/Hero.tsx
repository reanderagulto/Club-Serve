import Image from "next/image";

interface HeroProps {
  onOpenModal?: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <div className="hero">
      <div className="hero__visual">
        <div className="hero__phone">
          <div className="hero__phone-inner">
            <Image
              alt="Phone mockup showing ClubServe app"
              src="/marketing/iphone.svg"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="hero__hero-caption">
          <p className="font-semibold leading-normal min-w-full text-center text-[24.087px] text-black tracking-[-0.7226px] w-fit">
            COMING SOON
          </p>
          <div className="content-stretch flex gap-8 h-7 items-center relative shrink-0">
            <div className="h-7 relative shrink-0 w-[107px]">
              <Image
                alt="App Store"
                src="/marketing/apple-store.png"
                width={107}
                height={28}
              />
            </div>
            <div className="h-7 overflow-clip relative shrink-0 w-[142px]">
              <Image
                alt="Google Play"
                src="/marketing/google-play.png"
                width={142}
                height={28}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hero__info">
        <div className="hero__copy">
          <div className="content-stretch flex flex-col gap-8 items-start leading-[1.2] not-italic relative shrink-0 text-black w-full">
            <p className="hero__headline">
              Your gateway to Asia&apos;s best fitness & wellness spaces
            </p>
            <p className="hero__subtitle">
              Find top-rated sports clubs, gyms, studios, and wellness
              destinations across Asia — all in one easy-to-use app built for
              active lifestyles.
            </p>
          </div>
        </div>
        <button className="hero__cta" onClick={onOpenModal}>
          <p className="hero__cta-text">Become a partner</p>
          <div className="overflow-clip relative shrink-0 w-6 h-6">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}
