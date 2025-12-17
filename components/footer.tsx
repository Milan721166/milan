const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#0a0f1a",
        color: "#ededed",
        padding: "2rem 1rem",
        textAlign: "center",
        borderTop: "1px solid #1a2332",
      }}
    >
      <p style={{ margin: 0, fontSize: "0.9rem" }}>© {new Date().getFullYear()} Milan Sahoo. All rights reserved.</p>
      <p style={{ margin: "0.5rem 0 0 0", fontSize: "0.85rem", color: "#8892b0" }}>
        Built with Next.js and passion for web development
      </p>
    </footer>
  )
}

export default Footer
