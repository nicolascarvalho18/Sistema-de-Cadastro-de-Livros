
let livros = [];


function exibirLivros() {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = ''; 

    livros.forEach((livro, index) => {
        const li = document.createElement('li');
        li.textContent = `${livro.nome} - ${livro.autor} (${livro.genero})`;
        
       
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Editar';
        editBtn.onclick = () => editarLivro(index);


        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Excluir';
        deleteBtn.onclick = () => excluirLivro(index);

        li.appendChild(editBtn);
        li.appendChild(deleteBtn);

        bookList.appendChild(li);
    });
}

function cadastrarLivro() {
    const nome = document.getElementById('bookName').value;
    const autor = document.getElementById('bookAuthor').value;
    const genero = document.getElementById('bookGenre').value;

    if (nome && autor && genero) {
        const livro = {
            nome,
            autor,
            genero
        };
        livros.push(livro);
        exibirLivros();
        limparCampos();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}


function editarLivro(index) {
    const livro = livros[index];

    document.getElementById('editBookName').value = livro.nome;
    document.getElementById('editBookAuthor').value = livro.autor;
    document.getElementById('editBookGenre').value = livro.genero;

   
    const editButton = document.getElementById('editBookBtn');
    editButton.onclick = () => salvarAlteracoes(index);
}


function salvarAlteracoes(index) {
    const nome = document.getElementById('editBookName').value;
    const autor = document.getElementById('editBookAuthor').value;
    const genero = document.getElementById('editBookGenre').value;

    if (nome && autor && genero) {
        livros[index] = { nome, autor, genero };
        exibirLivros();
        limparCampos();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}


function excluirLivro(index) {
    livros.splice(index, 1);
    exibirLivros();
}


function limparCampos() {
    document.getElementById('bookName').value = '';
    document.getElementById('bookAuthor').value = '';
    document.getElementById('bookGenre').value = '';
    document.getElementById('editBookName').value = '';
    document.getElementById('editBookAuthor').value = '';
    document.getElementById('editBookGenre').value = '';
}

document.getElementById('addBookBtn').addEventListener('click', cadastrarLivro);


exibirLivros();
