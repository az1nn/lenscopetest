import React, { useState } from 'react';
import './App.css';

function App() {
  
  const [lens, setLens] = useState('')

  const checkLens = () => {
    let leftEsf = document.getElementById('esf-lefteye').value
    let rightEsf = document.getElementById('esf-righteye').value
    let leftCil = document.getElementById('cil-lefteye').value
    let rightCil = document.getElementById('cil-righteye').value  

    if(leftEsf === '0' && rightEsf === '0' && leftCil === '0' && rightCil === '0') {
      setLens("Por favor insira os valores")
    }
    else if((leftEsf <= -3 && leftEsf >= -12 ) || (rightEsf <= -3 && rightEsf >= -12 ) ) {
      if(leftCil >= -5 && rightCil >= -5) {
        if(leftCil <= -2 || rightCil <= -2) {
          setLens('Vision')
        }
        else if((leftCil >= -2 && leftCil !== 0 && rightCil !== '') || (rightCil >= -2 && rightCil !== 0 && rightCil !== '')){
          if((leftEsf <= -3 && leftEsf <= -10 ) || (rightEsf <= -3 && rightEsf <= -10 )) {
            setLens('Vision')
          }
          else {
            setLens('Prime')
          }
        }
      }
      else {
        setLens('Nenhuma das nossas opções pode te atender')
      }
    }
  }

  return (
    <div className="App">
      <h1>Lenscope</h1>
      <div>
        <p>Grau Esférico - Olho Esquerdo</p>
        <input id='esf-lefteye' type='number'step='0.25' max='0' min='-15' defaultValue='0'/>
      </div>
      <div>
        <p>Grau Esférico - Olho Direito</p>
        <input id='esf-righteye' type='number'step='0.25' max='0' min='-15' defaultValue='0'/>
      </div>
      <div>
        <p>Grau Cilíndrico - Olho Esquerdo</p>
        <input id='cil-lefteye' type='number'step='0.25' max='0' min='-6' defaultValue='0'/>
      </div>
      <div>
        <p>Grau Cilíndrico - Olho Direito</p>
        <input id='cil-righteye' type='number'step='0.25' max='0' min='-6' defaultValue='0'/>
      </div>
      <button id='ok-button' onClick={checkLens}>OK</button>
      <div>
        <h2>Lentes Disponíveis:</h2>
        <h3>{lens}</h3  >
      </div>
    </div>
  );
}

export default App;
