const scroll = document.querySelector('#scroll') // const scroll criando uma varialvel chamado scroll e chamando o elemento que tiver o id scroll no html que foi o id que eu defini para o botão de rolar a pagina


// addEventListener é o ouvidor de eventos, ele vai ficar ouvindo ate que o usuario faça uma ação que nesse caso é o click e vai depois executar uma ação
scroll.addEventListener('click', () => {
    window.scroll({top: window.innerHeight, behavior: "smooth"}) // essa no caso é a ação, aqui estamos dizendo para ele rolar a janela a partir do topo que é o top e o window.innerHeight é o tanto de pix que o usuario estiver e o behavior:"smooth" é para essa rolagem ser mais devagar sutilmente

    scroll.style.display = 'none' // esconde o scroll depois que o usuario clica
}) 