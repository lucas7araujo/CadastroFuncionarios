const api = 'http://localhost:3000/funcionarios';

async function carregarNomes() {
    const nomeSelecionado = document.getElementById('nome');
    nomeSelecionado.innerHTML = ''; 
    try {
        const resposta = await fetch(api);
        if (!resposta.ok) throw new Error('Erro ao buscar nomes');

        const funcionarios = await resposta.json();

        if (funcionarios.length === 0) {
            const option = document.createElement('option');
            option.textContent = 'Nenhum funcionário cadastrado';
            option.disabled = true;
            nomeSelecionado.appendChild(option);
            return;
        }

        const nomesUnicos = [...new Set(funcionarios.map(f => f.nome))].sort();

        const optionInicial = document.createElement('option');
        optionInicial.value = '';
        optionInicial.textContent = 'Selecione';
        nomeSelecionado.appendChild(optionInicial);

        nomesUnicos.forEach(nome => {
            const option = document.createElement('option');
            option.value = nome;
            option.textContent = nome;
            nomeSelecionado.appendChild(option);
        });

    } catch (error) {
        console.error('Erro ao carregar nomes: ', error.message);
        const option = document.createElement('option');
        option.textContent = 'Erro ao carregar dados';
        option.disabled = true;
        nomeSelecionado.appendChild(option);
    }
}

async function deletarFuncionario() {
    const nomeSelecionado = document.getElementById('nome').value;

    if (!nomeSelecionado) {
        alert('Selecione um nome para deletar.');
        console.warn('Tentativa de deletar sem nome selecionado.');
        return;
    }

    try {
        const resposta = await fetch(api);
        const funcionarios = await resposta.json();
        console.log('Funcionários encontrados:', funcionarios);

        const funcionariosParaDeletar = funcionarios.filter(f => f.nome === nomeSelecionado);
        console.log(`Encontrados ${funcionariosParaDeletar.length} com o nome "${nomeSelecionado}".`);

        if (funcionariosParaDeletar.length === 0) {
            alert('Funcionário não encontrado.');
            console.warn(`Nenhum funcionário com nome "${nomeSelecionado}".`);
            return;
        }

        const promises = funcionariosParaDeletar.map(funcionario =>
            fetch(`${api}/${funcionario.id}`, {
                method: 'DELETE'
            })
        );

        await Promise.all(promises);

        alert(`Funcionário "${nomeSelecionado}" deletado com sucesso!`);
        carregarNomes();


    } catch (error) {
        console.error('Erro ao deletar funcionário: ', error.message);
        alert('Erro ao deletar funcionário.');
    }
}

document.addEventListener('DOMContentLoaded', carregarNomes);


document.getElementById('btnDeletar').addEventListener('click', deletarFuncionario);
