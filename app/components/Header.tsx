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
        </div>
      </div>
    </header>
  );
}
