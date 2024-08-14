import random from './Random'

export default function confronto(btn, setGanhador) {
    const relacoes = [
        {
          move: "pedra",
          ganha: "papel"
        },
    
        {
          move: "papel",
          ganha: "tesoura"
        },
    
        {
          move: "tesoura",
          ganha: "pedra"
        }
    ]

    const numberMoveBot = random()
    const moveBot = relacoes[numberMoveBot]

    if(btn.id == moveBot.move) {
      setGanhador('Empate')
      return 'empatou'
    } else if (btn.id == moveBot.ganha) {
      setGanhador('Você ganhou')
      return 'ganhou'
    } else {
      setGanhador('Bot ganhou')
      return 'perdeu'
    }
}