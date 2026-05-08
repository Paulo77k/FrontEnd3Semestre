import "./title.css";

function title({texto, sobrenome, idade}) {
  return <h1>{texto} - {sobrenome} - {idade}</h1>;
}


export default title;