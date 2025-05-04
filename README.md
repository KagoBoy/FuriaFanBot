
# FURIA Fan BOT - Documentação
## 📌 Visão Geral
O FURIA Fan BOT é uma aplicação web dedicada aos fãs da FURIA Esports, oferecendo informações sobre o time de CS:GO, quizzes interativos e dados atualizados sobre partidas. Desenvolvido com:

. Frontend: Next.js/React

. Backend: Node.js/Express

. Hospedagem: Vercel

# 🎮 Funcionalidades Principais
## 1. Quiz Interativo
. Teste seu conhecimento sobre a FURIA

. 5 perguntas com temporizador

. Sistema de pontuação e ranking

. Feedback visual para respostas

## 2. Informações de Partidas
### . Partidas concluídas:

. Resultados recentes

. Estatísticas dos jogos

. Performance dos jogadores

### . Próximas partidas:

. Calendário de jogos

. Times adversários

. Horários das partidas

## 3. Ranking de Jogadores
. Classificação baseada em pontuação no quiz

. Top 10 jogadores

. Seu histórico pessoal

## 🛠️ Configuração Técnica
### Estrutura do Projeto

```A
furia-fan-bot/
├── api/               # Backend (API)
│   └── index.js       # Endpoints da API
├── public/            # Assets estáticos
├── src/               # Frontend
│   ├── components/    # Componentes React
│   ├── pages/         # Rotas da aplicação
│   └── services/      # Chamadas à API
├── vercel.json        # Configuração de deploy
└── package.json       # Dependências
```


### Variáveis de Ambiente

```env
NEXT_PUBLIC_API_URL=https://furia-fan-bot-api.vercel.app
PANDASCORE_TOKEN=seu_token_aqui  # Somente no backend
```
🚀 Como Executar
Localmente
bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/furia-fan-bot.git

# 2. Instale as dependências
npm install

# 3. Execute o frontend
npm run dev

# 4. Execute o backend (em outro terminal)
cd api && vercel dev

### Deploy na Vercel
1. Conecte seu repositório GitHub

2. Configure as variáveis de ambiente

3. O Vercel detectará automaticamente a configuração

## 🔧 Solução de Problemas Comuns
### Erro de CORS
```javascript
// No backend (api/index.js)
app.use(cors({
  origin: [
    'https://furia-fan-bot.vercel.app',
    'http://localhost:3000'
  ]
}));
```

### Erro "Unexpected token '<'"
. Verifique se a URL da API está correta

. Confira se o backend está retornando JSON

### Problemas no Quiz
. Atualize o state corretamente após cada resposta

. Garanta que o temporizador seja limpo com clearTimeout

### 📊 Futuras Atualizações
. Integração com API de estatísticas em tempo real

. Seção de notícias da FURIA

. Autenticação de usuários

. Sistema de conquistas

### 🤝 Como Contribuir
1. Faça um fork do projeto

2. Crie uma branch (git checkout -b feature/nova-funcionalidade)

3. Commit suas mudanças (git commit -m 'Adiciona nova funcionalidade')

4. Push para a branch (git push origin feature/nova-funcionalidade)

5. Abra um Pull Request


Desenvolvido com ❤️ por Yan Nascimento | Twitter | Email

⚫ #GoFURIA
