const currentPath = location.pathname
const menuItens = document.querySelectorAll('header .links a')
const formDelete = document.querySelector('#form-delete')

for (let item of menuItens) {
    if(currentPath.includes(item.getAttribute('href'))) {
        item.classList.add('active')
    }
}

if(formDelete) {
    formDelete.addEventListener('submit', function(event){
        const deleteOption = confirm('Are you sure?')
        if(!deleteOption) {
            event.preventDefault()
        }
    })
}

let totalPages = 20,
    selectedPage = 15,
    pages = [],
    oldPage

for(let currentPage = 1; currentPage <= totalPages; currentPage++) {

    const firstAndLastPage = currentPage == 1 || currentPage == totalPages
    const pagesAfterSelectedPage = currentPage <= selectedPage + 2
    const pagesBeforeSelectedPage = currentPage >= selectedPage - 2
    
    if(firstAndLastPage || pagesBeforeSelectedPage && pagesAfterSelectedPage) {
        if(oldPage && currentPage - oldPage > 2) {
            pages.push('...')
        }

        if(oldPage && currentPage - oldPage == 2) {
            pages.push(oldPage + 1)
        }

        pages.push(currentPage)
        oldPage = currentPage

    }
    
}