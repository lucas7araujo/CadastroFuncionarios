
const api = 'http://localhost:3000/funcionarios';

const formulario = document.querySelector('.formulario_cadastro');

formulario.addEventListener('submit', async (event) => {
    event.preventDefault();

    const dadosFuncionario = {
        nome: formulario.nome.value,
        matricula: formulario.matricula.value,
        salario: formulario.salario.value,
        cargo: formulario.cargo.value,
        admissao: (() => {
            const partes = formulario.admissao.value.split('-');
            return `${partes[2]}/${partes[1]}/${partes[0]}`;
        })(), contrato: formulario.contrato.value.toLocaleUpperCase('pt-BR')
    };

    try {
        const resposta = await fetch(api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/jsoon'
            },
            body: JSON.stringify(dadosFuncionario)
        });

        if (!resposta.ok) {
            throw new Error('Erro ao cadastrar funcionário')
        }

        const resultado = await resposta.json();
        alert('Funcionário Cadastrado com sucesso!');

        formulario.reset();

    } catch (erro) {
        alert('Erro: ' + erro.message);
    }
});