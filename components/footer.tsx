export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">About Us</h3>
            <p className="text-sm text-muted-foreground">
              Expert transportation services for construction equipment, delivering
              reliability and efficiency across the nation.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/services" className="text-muted-foreground hover:text-primary">
                  Services
                </a>
              </li>
              <li>
                <a href="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </a>
              </li>
              <li>
                <a href="/quote" className="text-muted-foreground hover:text-primary">
                  Get a Quote
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Info</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>123 Transport Street</li>
              <li>City, State 12345</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@transportpro.com</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Business Hours</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
              <li>Saturday: 9:00 AM - 3:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} TransportPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}