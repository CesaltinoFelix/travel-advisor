# 🌍 Travel Advisor

Aplicação web feita com React, integrando múltiplas APIs para fornecer recomendações de restaurantes, hotéis e pontos turísticos em tempo real.

## 📋 Sobre o Projeto

O Travel Advisor é uma aplicação web moderna que utiliza múltiplas APIs para fornecer aos utilizadores informações em tempo real sobre destinos de viagem, incluindo restaurantes, hotéis e pontos turísticos. Com uma interface intuitiva e mapas interativos, a aplicação torna o planeamento de viagens mais eficiente e informativo.

## 🚀 Tecnologias Utilizadas

- **React** (v19.1.0) - Biblioteca JavaScript para construção de interfaces
- **Material UI** - Framework de componentes para design moderno e responsivo
- **Google Maps API** - Integração de mapas interativos
- **RapidAPI** - Integração com TripAdvisor, OpenWeather e outras APIs
- **Axios** - Cliente HTTP para requisições à API
- **Create React App** - Ferramenta de desenvolvimento e build
- **JavaScript ES6+** - Funcionalidades modernas do JavaScript

## 📸 Funcionalidades

- 🔍 **Busca por Localização**: Pesquise qualquer localização no mundo
- �️ **Visualização em Mapa Interativo**: Explore destinos através do Google Maps
- 🏨 **Listagem de Hotéis**: Encontre acomodações com avaliações e preços
- 🍽️ **Restaurantes**: Descubra os melhores restaurantes da região
- 🎯 **Atrações Turísticas**: Explore pontos turísticos e atividades
- ⭐ **Filtros de Avaliação e Tipo**: Filtre resultados por categoria e classificação
- 📱 **Design Responsivo**: Interface otimizada para desktop e mobile
- ⚡ **Informações em Tempo Real**: Dados atualizados através de APIs externas

## 🧪 Como Executar Localmente

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn
- Chaves de API (Google Maps, RapidAPI)

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/CesaltinoFelix/travel-advisor.git
cd travel-advisor
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` na raiz do projeto
   - Adicione suas chaves de API:
```env
REACT_APP_GOOGLE_MAPS_API_KEY=sua_chave_google_maps
REACT_APP_RAPIDAPI_KEY=sua_chave_rapidapi
```

4. Execute o projeto em modo de desenvolvimento:
```bash
npm start
```

5. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 📁 Estrutura do Projeto

```
travel-advisor/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Header/          # Componente de cabeçalho e pesquisa
│   │   ├── List/           # Lista de lugares e resultados
│   │   ├── Map/            # Componente do mapa interativo
│   │   └── PlaceDetails/   # Detalhes de lugares específicos
│   ├── App.jsx             # Componente principal da aplicação
│   ├── App.css             # Estilos globais
│   ├── index.js            # Ponto de entrada da aplicação
│   └── index.css           # Estilos base
├── package.json
└── README.md
```

## 🔧 Scripts Disponíveis

### `npm start`
Executa a aplicação em modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizar no navegador.

### `npm test`
Executa os testes em modo interativo.

### `npm run build`
Constrói a aplicação para produção na pasta `build`.\
Optimiza a aplicação para melhor performance.

### `npm run eject`
**Nota: esta é uma operação irreversível!**

Remove a dependência de build única do projeto, copiando todos os ficheiros de configuração.

## 🤝 Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua funcionalidade (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

Desenvolvido com ❤️ por [Cesaltino Felix](https://github.com/CesaltinoFelix)

## 🔗 Links Úteis

- [Documentação do React](https://reactjs.org/)
- [Material-UI Documentation](https://mui.com/)
- [Google Maps API](https://developers.google.com/maps)
- [RapidAPI](https://rapidapi.com/)
- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
