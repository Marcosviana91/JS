let amigo = {
    nome: 'josé',
    sexo: 'M',
    peso: 85.4, 
    engordar(p=0) {
        this.peso += p
        console.log('Engordou ' +p+ " kilos")
    }
}

console.log(amigo.engordar(9))
console.log(amigo.peso)
