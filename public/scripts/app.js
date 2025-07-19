
const api = 'http://localhost:3000/funcionarios';

const formulario = document.querySelector('.formulario_cadastro');

formulario.addEventListener('submit', async (event) => {
    event.preventDefault();

    const dadosFuncionario = {
        nome: formulario.nome.value,
        matricula: formulario.matricula.value,
        salario: formulario.salario.value,
        cargo: formulario.cargo.value,
        admissao: formulario.admissao.value,
        contrato: formulario.contrato.value
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