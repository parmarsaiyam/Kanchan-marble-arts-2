import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-foreground text-background mt-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col items-center justify-center gap-3 text-center">
          {/* <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
            <Image
              src="/images/kma-logo.png"
              alt="Kanchan Marble Arts"
              width={140}
              height={40}
              className="h-8 w-auto"
              loading="lazy"
            />
          </Link> */}
          <p className="text-xs opacity-90">
            © {currentYear} Kanchan Marble Arts. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}