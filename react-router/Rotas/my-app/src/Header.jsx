
const Header = () => {
  return (
    <div style={{ background: "black", padding: "20px" }}>
      <nav>
        <ul style={{ display: "flex", listStyle: 'none', gap: '20px' }}>
          <li style={{ color: 'white' }}>Home</li>
          <li style={{ color: 'white' }}>Sobre</li>
          <li style={{ color: 'white' }}>Compre</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
