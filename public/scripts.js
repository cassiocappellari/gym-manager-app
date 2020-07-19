const currentPage = location.pathname // 'window.location' separa a localização atual (página) que estamos; 'location.pathname' separa a url da página atual que estamos
const menuItens = document.querySelectorAll('header .links a')

for (let item of menuItens) {
    if(currentPage.includes(item.getAttribute('href'))) { // retorna true quando a função includes() encontra uma string dentro do 'href'
        item.classList.add('active')
    }
}