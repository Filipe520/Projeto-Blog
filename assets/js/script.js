let posts = document.querySelector('.posts');
let titleFild = document.querySelector('#titleFild');
let bodyField = document.querySelector('#bodyField');
let insertButton = document.querySelector('#insertButton')
let qtdPost = document.querySelector('.res')

insertButton.addEventListener('click', verificarPermissao);

function verificarPermissao() {
    if(titleFild.value === '' || bodyField === '') {
        alert('Preenchar os dados corretamente!')
    } else {
        // Inserindo novo POST na API.
        function inserPost() {
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: titleFild.value,
                    boty: bodyField.value
                }),
            }
        )
        .catch(() => {
            alert('REQUISIÇÃO FALHOU! Entre em contato com o suporte.');
        })
        
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
        })
        .finally(() => {
            alert('Post enviado para API')
        })
        }

        inserPost();
    }
}

let qtdAPI = 0

// CallBack
fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
    console.log(`Status code: ${response.status}`);
    return response.json();
})
.then((json) => {
    qtdAPI = json.length

    let h2 = document.createElement('h2')
    h2.className = 'res'
    h2.innerHTML = `Total de <strong>${qtdAPI} API</strong>`

    posts.insertAdjacentElement("afterbegin", h2)
    for (let i in json) {
        let titulos = json[i].title;
        let body = json[i].body;
        
        posts.innerHTML += `
        <article class="postArticle">
        <h2 class="titleH2">${titulos}</h2>
        <p class="postP">${body}<p>
        </article>
        <hr class="postHR">
        `;
    }
});
