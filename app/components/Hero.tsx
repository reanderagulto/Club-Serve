import Image from "next/image";

export default function Hero() {
  return (
    <div className="hero" data-node-id="2:530">
      <div className="hero__visual" data-node-id="2:531">
        <div className="hero__phone" data-node-id="2:532" data-name="image">
          <div
            className="hero__phone-inner"
            data-node-id="2:533"
            data-name="Phone 2 1"
          >
            <Image
              alt="Phone mockup showing ClubServe app"
              src="/phone.svg"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="hero__hero-caption" data-node-id="2:534">
          <p
            className="font-semibold leading-normal min-w-full text-center text-[24.087px] text-black tracking-[-0.7226px] w-fit"
            data-node-id="2:535"
          >
            COMING SOON
          </p>
          <div
            className="content-stretch flex gap-8 h-7 items-center relative shrink-0"
            data-node-id="2:536"
          >
            <div
              className="h-7 relative shrink-0 w-[107px]"
              data-node-id="2:537"
            >
              <Image
                alt="App Store"
                src="/apple-store.png"
                width={107}
                height={28}
              />
            </div>
            <div
              className="h-7 overflow-clip relative shrink-0 w-[142px]"
              data-node-id="2:548"
              data-name="Google_Play_2022_logo 1"
            >
              <Image
                alt="Google Play"
                src="/google-play.png"
                width={142}
                height={28}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hero__info" data-node-id="2:556" data-name="hero copy">
        <div className="hero__copy" data-node-id="2:557" data-name="top">
          <div
            className="content-stretch flex flex-col gap-8 items-start leading-[1.2] not-italic relative shrink-0 text-black w-full"
            data-node-id="2:558"
            data-name="hero copy"
          >
            <p className="hero__headline" data-node-id="2:559">
              Your gateway to Asia's best fitness & wellness spaces
            </p>
            <p className="hero__subtitle" data-node-id="2:560">
              Find top-rated sports clubs, gyms, studios, and wellness
              destinations across Asia — all in one easy-to-use app built for
              active lifestyles.
            </p>
          </div>
        </div>
        <button className="hero__cta" data-node-id="2:561" data-name="CTA">
          <p className="hero__cta-text" data-node-id="I2:561;57:1899">
            Become a partner
          </p>
          <div
            className="overflow-clip relative shrink-0 w-6 h-6"
            data-node-id="I2:561;57:1900"
            data-name="Arrow / Arrow Up_Right_LG"
          >
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
