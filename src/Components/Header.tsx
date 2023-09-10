interface headerProp {
  backgroundText: string;
  title: string;
}

function Header({ backgroundText, title }: headerProp) {
  return (
    <div>
      <div>{backgroundText}</div>
      <h3>{title}</h3>
    </div>
  );
}

export default Header;
