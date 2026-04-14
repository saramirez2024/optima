export default function Footer() {
  return (
    <footer className="bg-dark-card border-t border-border-dark py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <span className="font-heading font-bold text-xl text-white">
            OPTIMA
          </span>
          <p className="text-sm text-text-muted mt-2 max-w-xs">
            AI chatbots and landing pages for fitness gyms. More leads, less
            hassle.
          </p>
        </div>

        {/* Product */}
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
            Product
          </h4>
          <ul className="space-y-2 mt-3">
            <li>
              <a
                href="#features"
                className="text-sm text-text-muted hover:text-white transition"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="text-sm text-text-muted hover:text-white transition"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="[YOUR_FAN_CLUB_DEMO_URL]"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-muted hover:text-white transition"
              >
                Demo
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
            Company
          </h4>
          <ul className="space-y-2 mt-3">
            <li>
              <a
                href="#"
                className="text-sm text-text-muted hover:text-white transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="mailto:[YOUR_EMAIL]"
                className="text-sm text-text-muted hover:text-white transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
            Legal
          </h4>
          <ul className="space-y-2 mt-3">
            <li>
              <a
                href="#"
                className="text-sm text-text-muted hover:text-white transition"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-text-muted hover:text-white transition"
              >
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border-dark pt-8 mt-8">
        <p className="text-sm text-text-muted text-center">
          2026 Optima. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
