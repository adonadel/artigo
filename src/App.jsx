import { useState } from 'react'
import './Style.css'


function App() {
  const realText = "A roda é uma das seis máquinas simples com vastas aplicações no transporte e em máquinas mecânicas, caracterizada pelo movimento rotativo no seu interior. A roda transmite de maneira amplificada para o eixo de rotação qualquer força aplicada na sua borda, reduzindo a transmissão tanto da velocidade quanto da distância que foram aplicadas. Similarmente, a roda transmite de maneira reduzida para a borda qualquer força aplicada no seu eixo de rotação, amplificando a transmissão tanto da velocidade quanto da distância que foram aplicadas. Um fator importante para determinar a transmissão de força, velocidade e distância é a relação entre o diâmetro da borda da roda e o diâmetro do eixo. Evidências de veículos com rodas datam da metade do quarto milênio a.C., quase simultaneamente na Mesopotâmia, no nordeste de Cáucaso (cultura de Maikop) e a Europa Central, então a pergunta sobre qual cultura inventou originalmente o veículo a roda permanece não resolvida e sob debate. Uma das mais antigas representações de um veículo possuindo rodas está no pote de Bronocice, um pote de barro de ca. 3500-3350 a.C. escavado no sudeste da Polônia. Os veículos a roda se espalharam da sua área de origem (Mesopotâmia, Cáucaso, Bálcans, Europa Central) através da Eurásia, chegando no Vale do Indo no terceiro milênio a.C. Durante o segundo milênio a.C., a biga se espalhou em um ritmo acelerado, chegando tanto a China e Escandinávia em 1200 a.C. Na China, a roda certamente esteve presente com a adaptação da biga em ca. 1200 a.C., apesar de Barbieri-Low argumentar a existência de veículos chineses com roda anteriormente, cerca de 2000 a.C.. Apesar de não terem desenvolvido a roda propriamente dita, os Olmecas e outras culturas do hemisfério ocidental parecem ter se aproximado disso, tendo sido encontradas pedras trabalhadas com aspecto de roda em brinquedos de criança datando a cerca de 1500 a.C. Se pensa que o principal obstáculo ao desenvolvimento em larga escala da roda no hemisfério ocidental foi a ausência de grandes animais domesticados que pudessem puxar as carruagens com roda. O mais próximo do gado bovino presente nas Américas no período pré-Colombiano, o bisão-americano, é difícil de domesticar e nunca foi domesticado pelos americanos nativos; várias espécies de cavalos existiram até cerca de 12.000 anos atrás, mas forma extintas, provavelmente por causa de sobre-caça pelos humanos recém-chegados. O único animal grande que foi domesticado no hemisfério ocidental, a lhama, não se espalhou para muito além dos Andes até a chegada de Colombo. Antiguidades da Núbia usavam a roda para cerâmica e roda de água. Se considera que as rodas de água da Núbia eram movidas por bois. Também se sabe que os núbios usavam bigas puxadas por cavalo importadas do Egito. A invenção da roda então ocorreu no final do Neolítico, e pode ser vista em conjunção com outros avanços tecnológicos que deram início a Idade do Bronze. Note que isso implica a passagem de vários milênios sem roda mesmo depois da invenção da agricultura e da cerâmica.Um uso mais amplo da roda foi provavelmente adiado pela necessidade de ruas mais lisas para as rodas serem eficientes. Carregar os bens nas costas teria sido o método preferido de transporte para as superfícies com muitos obstáculos. A falta de desenvolvimento das ruas impediu uma ampla adoção da roda para transporte até o século XX nas áreas menos desenvolvidas. ";

  const allowed = ["a", "e", "i", "o", "u", "as", "os", "eu", "tu", "nós", "vós", "nosso", "vosso", "meu", "seu", "teu", "tua", "meus", "seus", "teus", "tuas", "nossos", "nossas", "vossos", "vossas", "sua", "suas", "minha", "minhas", "ele", "eles", "ela", "elas", "vocês", "você", "aquela", "aquele", "aquelas", "aqueles", "naquela", "naquele", "naquelas", "naqueles", "naquilo", "em", "um", "uns", "umas", "uma", "pelo", "pela", "pelos", "pelas", "nos", "dos", "aos", "à", "é", "num", "numa", "ou", "da", "do", "de", "sim", "não", "sem", "com", "aqui", "ali", "aquilo", "nú", "no", "ter", "ser", "tem", "teve", "esteja", "esteje", "houve", "há", "têm", "na", "nas", "até", "outro", "outra", "outros", "outras", "outrem", "uso", "foi", "para", "sim", "não", "eram", "são", "por", "se", "que", ",", ".", "'", "\"", ";", "/", "-", "*", "+", "das"];

  let arrText = [];
  let aux = "";
  let text = "";
  
  realText.split(" ").forEach(word => {
    if(!allowed.includes(word.toLowerCase())) {
      aux = "";
      for (let i = 0; i < word.length; i++) {                
        aux  += "█";
      }
      arrText.push(aux);
      console.log(word.toLowerCase())
    }else{
      arrText.push(word);
    }
  });
  text = arrText.join(" ");
  // console.log(text);
  const [countPalpit, setCountPalpit] = useState(0);
  const [atual, setAtual] = useState('');
  const [palpit, setPalpit] = useState([]);
  let color = "";
  const handleChange = (e) => {
    setAtual(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(palpit.length > 0) {
      let existe = palpit.findIndex(ex =>
        ex.value == atual
      );
      
      if(existe < 0) {
        let reg = new RegExp(atual, "g");
        const textoo = (realText.match(reg) || []).length;
        if (textoo > 0) {
          color = "fc-green";
        }else{
          color = "fc-red";
        }
        setPalpit(arr => [...arr, {"value": atual, "qntd" : textoo, "color" : color}]); 
        setCountPalpit(countPalpit + 1);
      }
    }else{
      let reg = new RegExp(atual, "g");
      const textoo = (realText.match(reg) || []).length;
      if (textoo > 0) {
        color = "fc-green";
      }else{
        color = "fc-red";
      }
      setPalpit(arr => [...arr, {"value": atual, "qntd" : 0, "color" : color}]); 
      setCountPalpit(countPalpit + 1);
    }
    
    setAtual('');
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-9 col-md-9 col-sm-12 col-12" style={{padding : "20px"}}>
          {text}
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12 col-12">
          <h3>Chutes: {countPalpit}</h3>
          <div>
            {palpit.slice(0).reverse().map( e =>
              <div className={e.color} key={e.value}>{ e.value } ({e.qntd})</div>
            )}
          </div>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className='required d-flex'>
              <input type="text" className='form-control' name='palpite' id='palpite' required="required" value={atual} onChange={(e) => handleChange(e)} autoComplete="off" placeholder='Chutar' style={{maxWidth : "200px"}} />
              <button className='ms-1'><i className="fa-solid fa-paper-plane"></i></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App