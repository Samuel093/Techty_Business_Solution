
import { Facebook, Instagram, Github, Twitter, Linkedin } from "lucide-react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-100">
      {/* Top Call-to-Action */}
      <div className="mx-auto max-w-7xl px-4 py-12 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
          Ready to take your business to the next level?
        </h2>
        <div className="mt-6 lg:mt-0">
          <a
            href="#demo"
            className="inline-block rounded-md bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-600"
          >
            Request a Free Demo
          </a>
        </div>
      </div>

      <hr className="border-slate-700" />

      {/* Bottom Grid */}
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand & Social */}
          <div>
            <div className="flex items-center gap-2">
              <span className="relative inline-flex h-8 w-8">
               <Image src="/images/mainlogo.png" alt="logo" width={40} height={40}/>
              </span>
              <span className="text-lg font-semibold">Techty</span>
            </div>
            <div className="mt-4 flex gap-4 text-slate-300">
              <Link href="#"><Facebook className="h-5 w-5 hover:text-white" /></Link>
              <Link href="#"><Instagram className="h-5 w-5 hover:text-white" /></Link>
              <Link href="#"><Github className="h-5 w-5 hover:text-white" /></Link>
              <Link href="#"><Twitter className="h-5 w-5 hover:text-white" /></Link>
              <Link href="#"><Linkedin className="h-5 w-5 hover:text-white" /></Link>
            </div>
            <p className="mt-4 text-sm text-slate-400">
              © 2023 Techty. All Rights Reserved
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-slate-300">
              <li><Link href="#about" className="hover:text-white">About</Link></li>
              <li><Link href="#service" className="hover:text-white">Services</Link></li>
              <li><Link href="#blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="#contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-white">Social</h3>
            <ul className="mt-4 space-y-2 text-slate-300">
              <li><Link href="#" className="hover:text-white">Twitter</Link></li>
              <li><Link href="#" className="hover:text-white">LinkedIn</Link></li>
              <li><Link href="#" className="hover:text-white">Facebook</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-white">Our Newsletter</h3>
            <p className="mt-4 text-slate-300">
              Subscribe to our newsletter to get our news delivered to you.
            </p>
            <form className="mt-4 flex rounded-md border border-slate-600">
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-l-md bg-slate-700 px-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-r-md bg-emerald-500 px-4 py-2 font-semibold text-white hover:bg-emerald-600"
              >
                Join
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
