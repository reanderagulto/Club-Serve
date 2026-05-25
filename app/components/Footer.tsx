export default function Footer() {
  return (
    <footer className="container">
      <div className="footer">
        <p className="footer__text">
          <span>©2026 ClubServe, a service provided by </span>
          <a
            className="footer__link"
            href="https://www.oqulo.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Oqulo
          </a>
          <span>. All rights reserved.</span>
        </p>
        <div className="footer__actions">
          <p className="footer__action-item">Terms & Conditions</p>
          <p className="footer__action-item">Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}
