# 📁 Sistema de Cadastro de Funcionários - CRUD Completo

Projeto desenvolvido como prática de um sistema **CRUD** (Create, Read, Update, Delete), utilizando **HTML**, **CSS**, **JavaScript** e **JSON Server** para simulação de uma API REST.

---

## ✨ Funcionalidades

- Cadastro de novos funcionários  
- Visualização dos funcionários cadastrados  
- Edição de dados (Update)  
- Exclusão (Demissão) de funcionários  
- Layout organizado e responsivo  
- Interface amigável e intuitiva  

---

## 🧰 Tecnologias Utilizadas

- HTML5  
- CSS3  
- JavaScript  
- JSON Server  

---

## 📸 Imagens do Projeto

### 📄 Página de Cadastro (Create)  
_Formulário para adicionar novos funcionários ao sistema._

<img width="1921" height="1344" alt="image" src="https://github.com/user-attachments/assets/99c46c63-cf37-46b1-b804-c7bea2486c3b" />

---

### 🔍 Página de Leitura (Read)  
_Visualização de todos os funcionários registrados._

<img width="1921" height="863" alt="image" src="https://github.com/user-attachments/assets/f8b14230-20f7-4eb5-b6ed-c01101e35726" />


---

### 🔄 Página de Atualização (Update)  
_Alteração de informações de um funcionário já cadastrado._

<img width="1921" height="1111" alt="image" src="https://github.com/user-attachments/assets/6da80345-f3f8-4191-994e-4b122e92e57d" />


---

### ❌ Página de Demissão (Delete)  
_Remoção segura de um funcionário do sistema._

<img width="1921" height="863" alt="image" src="https://github.com/user-attachments/assets/fb9783d7-4a1d-42e8-9188-193aa8d7c633" />


---

## 🧪 Como Rodar o Projeto Localmente

### 1. Clone o repositório e acesse pasta CadastroFuncionarios
`git clone https://github.com/lucas7araujo/CadastroFuncionarios.git  
cd CadastroFuncionarios`

### 2. Instale o JSON Server  
`npm install -g json-server`

### 3. Inicie o JSON Server  
`json-server --watch db/db.json --port 3000`

A aplicação estará disponível em **http://localhost:3000**

### 4. Abra o projeto no navegador  
`Abra o arquivo Cadastro.html para começar a usar o sistema`

---

## 🧠 Estrutura do Projeto

```
CadastroFuncionarios/  
├── db/  
│   └── db.json               → Banco de dados simulado  
├── public/  
│   ├── css/                  → Estilos visuais (CSS)  
│   └── scripts/              → Funcionalidades JS  
│       ├── app.js  
│       ├── cadastro.js  
│       ├── delete.js  
│       ├── login.js  
│       ├── read.js  
│       └── update.js  
├── Cadastro.html             → Página de cadastro de funcionários  
├── Delete.html               → Página de exclusão de funcionários  
├── Index.html                → Página inicial  
├── Lista.html                → Listagem de funcionários  
├── Login.html                → Página de login  
├── Update.html               → Página de atualização de dados  
└── README.md                 → Documentação do projeto

```

---

## 🤝 Créditos

Projeto criado por [Lucas Araújo](https://github.com/lucas7araujo) como parte dos estudos em desenvolvimento web com JavaScript | HTML | CSS. 👨‍💻  

---


