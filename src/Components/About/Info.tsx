interface infoProp {
  label: string;
  text: string;
}

function Info({ label, text }: infoProp) {
  return (
    <div>
      <label>{label + ": "}</label>
      <p>{text}</p>
    </div>
  );
}

export default Info;
