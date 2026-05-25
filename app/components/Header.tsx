import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="header">
          <div className="header__logo">
            <Image
              alt="ClubServe Logo"
              src="/marketing/clubserve-logo.svg" // Placeholder, replace with actual logo
              fill
            />
          </div>
        </div>
      </div>
    </header>
  );
}
