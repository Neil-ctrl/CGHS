

function Header({ currPage, setCurrPage }) {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "discover", label: "Discover" },
    { id: "search", label: "Search" },
  ];

  return (
    <nav>
      {navItems.map(item => (
        <button
          key={item.id}
          onClick={() => setCurrPage(item.id)}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}

export default Header;
