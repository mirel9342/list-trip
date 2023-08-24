const form = document.getElementById('novoItem');
const list = document.getElementById('lista');
const itensOfLocalStorage = JSON.parse(localStorage.getItem('itens')) || []


itensOfLocalStorage.forEach(element => {
    newItem(element)
});

function newItem(item) {

    listItem = list.appendChild(document.createElement('li'));

    listItem.classList.add('item');

    numeroItem = document.createElement('strong')
    numeroItem.dataset.id = item.id
    numeroItem.textContent = item['quantidade']
    listItem.appendChild(numeroItem)

    listItem.innerHTML += item['nome']


    listItem.appendChild(delButton(item.id))


}
function attElement(item) {
    document.querySelector("[data-id='" + item.id + "']").innerHTML = item.quantidade


}

function delButton(id) {
    const elementoBotao = document.createElement('button')
    elementoBotao.innerText = 'x'

    elementoBotao.addEventListener('click', function () {
        deletaElemento(this.parentNode, id)
    })

    return elementoBotao



}
function deletaElemento(tag, id) {
    tag.remove()
    itensOfLocalStorage.splice(itensOfLocalStorage.findIndex(e => e.id === id), 1)
    localStorage.setItem("itens", JSON.stringify(itensOfLocalStorage))

}

form.addEventListener('submit', (evento) => {

    evento.preventDefault()
    const item = evento.target.elements;

    const existe = itensOfLocalStorage.find(element => element.nome === nome.value)




    const itemAtual = {
        'nome': item['nome'].value,
        'quantidade': item['quantidade'].value,
    }

    if (existe) {
        itemAtual.id = existe.id
        attElement(itemAtual)

        itensOfLocalStorage[itensOfLocalStorage.findIndex(e => e.id === existe.id)] = itemAtual

    } else {
        itemAtual.id = itensOfLocalStorage[itensOfLocalStorage.length - 1] ? (itensOfLocalStorage[itensOfLocalStorage.length - 1]).id + 1 : 0

        newItem(itemAtual)

        itensOfLocalStorage.push(itemAtual)

    }





    localStorage.setItem("itens", JSON.stringify(itensOfLocalStorage))


    item['nome'].value = ''
    item['quantidade'].value = '1'




})