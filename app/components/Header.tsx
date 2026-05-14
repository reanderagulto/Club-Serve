import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="header" data-node-id="2:523" data-name="header">
          <div className="header__logo" data-node-id="2:524" data-name="Logo">
            <Image
              alt="ClubServe Logo"
              src="/svg/clubserve-logo.svg" // Placeholder, replace with actual logo
              fill
            />
          </div>
          <div
            className="content-stretch flex gap-6 items-center justify-end relative shrink-0"
            data-node-id="2:525"
          >
            <button
              className="header__button"
              data-node-id="2:527"
              data-name="Button-Secondary"
            >
              <p className="header__button-text" data-node-id="I2:527;384:4023">
                Login
              </p>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
