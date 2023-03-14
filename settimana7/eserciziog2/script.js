const scriviTesto = document.getElementById('testo')
const bottoneS = document.getElementById('btnSalva')
const bottoneR = document.getElementById('btnRimuovi')
const scriviNome = document.getElementById('nomeSalvato')


const save = function () {
    const prendiTesto = scriviTesto.value
    localStorage.setItem('textValue', prendiTesto)
    scriviNome.innerHTML = prendiTesto
    scriviTesto.value = ''
}

const remove = function () {
    localStorage.clear()
    scriviNome.innerHTML = ''
}

bottoneS.onclick = save
bottoneR.onclick = remove

const btnParti = document.getElementById('parti')

let conteggio = sessionStorage.getItem('tempoPassato') || 0

let timer = setInterval(() => {
    document.getElementById("conta").innerHTML = ++conteggio
    sessionStorage.setItem('tempoPassato', conteggio)
}, 1000)


