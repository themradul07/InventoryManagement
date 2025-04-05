"use client";

import React, { useState } from "react";
import Link from "next/link";

import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <ClerkProvider>
      <div className="w-full bg-white z-40 shadow-md fixed top-0">
        <div className="w-full max-w-[1240px] mx-auto h-[60px] flex justify-between items-center px-4">
          {/* Logo */}
          <div className="font-bold text-[#007BFF] text-lg">ToolCrib</div>

          {/* Desktop Nav */}
          <div className="hidden md:flex md:gap-4 lg:gap-6 text-md">
            <Link href="/">Home</Link>
            <Link href="/Store">Store</Link>
            <Link href="/Store/create">Add-Product</Link>
            <Link href="/dashboard">Profile</Link>
            <Link href="/contactus">Contact Us</Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex gap-2 items-center">
            <SignedOut>
              <div className="bg-pri rounded-sm text-sm p-2 text-white">
                <SignInButton />
              </div>
              <div className="bg-pri rounded-sm text-sm p-2 text-white">
                <SignUpButton />
              </div>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>

          {/* Hamburger Icon (SVG) */}
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {!menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white w-full px-6 py-4 shadow-md space-y-4 flex flex-col gap-6 justify-center items-center">
            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/Store" onClick={() => setMenuOpen(false)}>Store</Link>
            <Link href="/Store/create" onClick={() => setMenuOpen(false)}>Add-Product</Link>
            <Link href="/dashboard" onClick={() => setMenuOpen(false)}>Profile</Link>
            <Link href="/contactus" onClick={() => setMenuOpen(false)}>Contact Us</Link>

            <div className="flex flex-col gap-2 pt-2">
              <SignedOut>
                <div className="bg-pri rounded-sm text-sm p-2 text-white">
                  <SignInButton />
                </div>
                <div className="bg-pri rounded-sm text-sm p-2 text-white">
                  <SignUpButton />
                </div>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </div>
        )}
      </div>
    </ClerkProvider>
  );
};

export default Navbar;
