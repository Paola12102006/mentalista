const numeroSecreto = parseInt(Math.random() * 11)
let tentativas = 0

const input = document.getElementById("inp-number")
input.addEventListener('input', ({ target }) => {

    if (target.value.length >= 1) {
        resultado.classList.remove('resultado-reveal-maior')
        resultado.classList.remove('resultado-reveal-menor')
        resultado.classList.remove('resultado-reveal')
    }
})

const resultado = document.querySelector('.resultado')

function chutar() {
    const chute = input.value

    if (chute == '' || chute > 10) {
        alert('Digite um número de 0 a 10.')
    }
    else if (tentativas != 3) {
        if (parseInt(chute) == numeroSecreto) {

            resultado.classList.remove('resultado-reveal-maior')
            resultado.classList.remove('resultado-reveal-menor')

            resultado.classList.add('resultado-reveal')
            resultado.innerHTML = 'Você acertou. Meus parabéns!!!'

            gameOver()

        } else if (parseInt(chute) > numeroSecreto) {

            tentativas++

            resultado.classList.remove('resultado-reveal')
            resultado.classList.remove('resultado-reveal-maior')

            resultado.classList.add('resultado-reveal-menor')
            resultado.innerHTML = 'Você errou, o número secreto é MENOR do que o número que você chutou.'

        } else if (parseInt(chute) < numeroSecreto) {

            tentativas++

            resultado.classList.remove('resultado-reveal')
            resultado.classList.remove('resultado-reveal-menor')

            resultado.classList.add('resultado-reveal-maior')
            resultado.innerHTML = 'Errou, o número secreto é MAIOR do que o seu chute.'
        }
    } else {

        if (parseInt(chute) === numeroSecreto) {

            resultado.classList.remove('resultado-reveal-maior')
            resultado.classList.remove('resultado-reveal-menor')

            resultado.classList.add('resultado-reveal')
            resultado.innerHTML = 'Você acertou. Meus parabéns!!!'

            gameOver()
        } else {

            resultado.classList.remove('resultado-reveal-maior')
            resultado.classList.remove('resultado-reveal-menor')
            resultado.classList.add('resultado-reveal')

            resultado.innerHTML = `Suas tentativas acabaram. O número secreto era: ${numeroSecreto}.`

            gameOver()

        }
    }

}

function reload() {
    document.location.reload(true)
}

function gameOver() {
    const boxTentativas = document.querySelector('.tentativas')
    const btnReload = document.querySelector('.btn-reload')
    const btnChute = document.getElementById('btn-chute')

    btnChute.setAttribute('disabled', '');
    boxTentativas.style.display = 'none'
    btnReload.style.display = 'block'

    document.getElementById("inp-number").value = ''
}