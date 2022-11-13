function tabuada () {
    let num = document.getElementById('numTabuada')
    let tabs = document.getElementById('seltab')
    let tabtxt = document.getElementById('texttab')
    console.log(tabtxt.getAttributeNames())
    if (num.value.length == 0) {
        window.alert('Por favor digite um número.')
        tabs.innerHTML = ''
        tabtxt.innerHTML = ''
    } else {
        num = Number(num.value)
        let c = 1
        tabs.innerHTML = ''
        tabtxt.innerHTML = `Tabuada de ${num}:\n`
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `tab${c}`
            tabs.appendChild(item)
            tabtxt.innerHTML += `${num} x ${c} = ${num*c}`
            if (c < 10) tabtxt.innerHTML += '\n'
            c++
        }
    }
}
