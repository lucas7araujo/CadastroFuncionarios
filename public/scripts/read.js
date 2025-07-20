const api = 'http://localhost:3000/funcionarios';
const listaFuncionarios = document.getElementById('lista_funcionarios');

async function carregarFuncionarios() {
    try {
        const resposta = await fetch(api);
        if (!resposta.ok) throw new Error('Erro ao buscar os funcionários')

        const funcionarios = await resposta.json();

        listaFuncionarios.innerHTML = '';

        funcionarios.forEach(func => {
            const card = document.createElement('div');
            card.classList.add('card_funcionario');

            card.innerHTML = `
        <div class="funcinario_texto">
          <h2 class="funcionario_nome">${func.nome}</h2>
          <p class="funcionario_matricula"><strong>Matrícula: </strong>${func.matricula}</p>
          <p class="funcionario_cargo"><strong>Cargo: </strong>${func.cargo}</p>
          <p class="funcionario_salario"><strong>Salário: </strong>R$ ${func.salario}</p>
          <p class="funcionario_admissao"><strong>Admissão: </strong>${func.admissao}</p>
          <p class="funcionario_contrato"><strong>Tipo de Contrato: </strong>${func.contrato}</p>
        </div>
      `;

            listaFuncionarios.appendChild(card);
        });
    } catch (erro) {
        listaFuncionarios.innerHTML = `<p>Erro ao carregar funcionários: ${erro.message}</p>`;
    }
}

carregarFuncionarios()
