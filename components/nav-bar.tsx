"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import "@/styles/nav-bar.css"

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navbarRef = useRef<HTMLElement>(null)
  const menuToggleRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node) &&
        menuToggleRef.current &&
        !menuToggleRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("touchstart", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("touchstart", handleClickOutside)
    }
  }, [])

  const cvLink = "/images/CV.pdf"

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <header className="header">
      <Link href="/" className="logo" style={{ cursor: "pointer" }}>
        Portfolio
      </Link>

      <div className="menu-toggle" onClick={toggleMenu} ref={menuToggleRef} aria-expanded={isOpen}>
        &#9776;
      </div>

      <nav className={`navbar ${isOpen ? "active" : ""}`} ref={navbarRef}>
        <a
          href="#home"
          style={{ "--i": 1 } as React.CSSProperties}
          onClick={(e) => {
            e.preventDefault()
            scrollToSection("home")
          }}
        >
          Home
        </a>
        <a
          href="#about"
          style={{ "--i": 2 } as React.CSSProperties}
          onClick={(e) => {
            e.preventDefault()
            scrollToSection("about")
          }}
        >
          About
        </a>
        <a
          href="#projects"
          style={{ "--i": 3 } as React.CSSProperties}
          onClick={(e) => {
            e.preventDefault()
            scrollToSection("projects")
          }}
        >
          Projects
        </a>
        <a
          href="#skills"
          style={{ "--i": 4 } as React.CSSProperties}
          onClick={(e) => {
            e.preventDefault()
            scrollToSection("skills")
          }}
        >
          Skills
        </a>
        <a
          href="#education"
          style={{ "--i": 5 } as React.CSSProperties}
          onClick={(e) => {
            e.preventDefault()
            scrollToSection("education")
          }}
        >
          Education
        </a>
        <a
          href="#blog"
          style={{ "--i": 6 } as React.CSSProperties}
          onClick={(e) => {
            e.preventDefault()
            scrollToSection("blog")
          }}
        >
          Blog
        </a>
        <a
          href="#contact"
          style={{ "--i": 7 } as React.CSSProperties}
          onClick={(e) => {
            e.preventDefault()
            scrollToSection("contact")
          }}
        >
          Contact
        </a>
        <a href="tel:+916296740204" style={{ "--i": 8 } as React.CSSProperties} onClick={() => setIsOpen(false)}>
          Call Me
        </a>
        <a href={cvLink} download style={{ "--i": 9 } as React.CSSProperties} onClick={() => setIsOpen(false)}>
          Download CV
        </a>
      </nav>
    </header>
  )
}

export default NavBar
