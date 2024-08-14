import './App.css'

import confronto from './models/confronto'
import { useState, useEffect } from 'react'


function App() {
  let [ganhador, setGanhador] = useState('')
  let [ganhou, setGanhou] = useState(0)
  let [empatou, setEmpatou] = useState(0)
  let [perdeu, setPerdeu] = useState(0)

  useEffect(() => {
    const botoes = document.getElementsByClassName('botoes')

    const handleClick = async (btn) => {
      let resultado = await confronto(btn, setGanhador)
      console.log(resultado)
      if (resultado === 'ganhou') {
        setGanhou(ganhou + 1)
      } else if (resultado === 'empatou') {
        setEmpatou(empatou + 1)
      } else if (resultado === 'perdeu') {
        setPerdeu(perdeu + 1)
      }
    }

    for (let btn of botoes) {
      btn.addEventListener('click', () => handleClick(btn))
    }
  }, [ganhou, empatou, perdeu])

  return (
    <>
      <main>
        <h1>{ganhador}</h1>
        <div id="conjunto">
          <button id="papel" className="botoes">
            <div id="papel-img" className="backs"></div>
            <p id='coiso1'>Papel</p>
          </button>
          <button id="pedra" className="botoes">
            <div id="pedra-img" className="backs"></div>
            <p id='coiso2'>Pedra</p>
          </button>
          
          <button id="tesoura" className="botoes">
            <div id="tesoura-img" className="backs"></div>
            <p id = "coiso3">Tesoura</p>
          </button>
          
        </div>

        <div id='resultado'>
          <p>Você ganhou {ganhou} vezes</p>
          <p>Você perdeu {perdeu} vezes</p>
          <p>Você empatou {empatou} vezes</p>
        </div>
      </main>
    </>
  )
}

export default App
