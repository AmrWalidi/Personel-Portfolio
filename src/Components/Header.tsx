interface headerProp {
  backgroundText: string;
  title: string;
}

function Header({ backgroundText, title }: headerProp) {
  return (
    <div className="header">
      <div className="background-text">{backgroundText}</div>
      <h3 className="title">{title}</h3>
    </div>
  );
}

export default Header;
