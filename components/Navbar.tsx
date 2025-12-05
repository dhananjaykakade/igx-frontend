import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Instagram } from 'lucide-react';
import { MobileMenu } from '@/components/MobileMenu';

export function Navbar() {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Tools', href: '/tools' },
    { name: 'Blog', href: '/blog' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'FAQ', href: '/faq' },
    { name: 'About', href: '/about' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="bg-primary p-2 rounded-lg">
              <Instagram className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="hidden sm:inline">IGX</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link href="/">
              <Button>Download Now</Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <MobileMenu navLinks={navLinks} />
        </div>
      </div>
    </nav>
  );
}
