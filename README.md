<div align="center">

# ☀️ Dev Clima

### Aplicativo de Previsão do Tempo em Tempo Real

Um aplicativo mobile elegante e animado que fornece informações meteorológicas precisas baseadas na sua localização atual.

[![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![OpenWeather](https://img.shields.io/badge/OpenWeather-EB6E4B?style=for-the-badge&logo=openweathermap&logoColor=white)](https://openweathermap.org/)

[Sobre](#-sobre-o-projeto) •
[Demonstração](#-demonstração) •
[Funcionalidades](#-funcionalidades) •
[Tecnologias](#-tecnologias) •
[Instalação](#-instalação) •
[Deploy](#-testar-o-app) •
[Licença](#-licença)

</div>

---

## 📱 Sobre o Projeto

**Dev Clima** é um aplicativo mobile desenvolvido com React Native e Expo que oferece uma experiência visual única ao exibir informações meteorológicas. O app detecta automaticamente a localização do usuário e apresenta dados climáticos em tempo real com animações dinâmicas que se adaptam às condições meteorológicas e ao período do dia (dia/noite).

### ✨ Destaques

- 🌍 **Detecção Automática de Localização** - GPS integrado para localização precisa
- 🎨 **Interface Dinâmica** - Gradientes e animações que mudam conforme o clima
- 🌙 **Modo Dia/Noite** - Adaptação automática baseada no nascer e pôr do sol
- ☁️ **Animações Fluidas** - Nuvens animadas, estrelas piscando e elementos interativos
- 📊 **Dados Completos** - Temperatura, sensação térmica, umidade e velocidade do vento
- 🎭 **Animações Lottie** - Ícones animados para cada condição climática

---

## 🎬 Demonstração

<table>
  <tr>
    <th>Tela Principal Dia</th>
    <th>Tela Principal Noite</th>
    <th>Tela Principal Chuvoso</th>
  </tr>
  <tr>
    <td>
      <img src="" width="250"/>
    </td>
    <td>
      <img src="" width="250"/>
    </td>
    <td>
      <img src="" width="250"/>
    </td>
  </tr>
</table>

---

## 🚀 Funcionalidades

- ✅ **Geolocalização em Tempo Real**
  - Solicitação de permissões de localização
  - Obtenção automática de coordenadas GPS
  - Atualização baseada na posição do usuário

- ✅ **Informações Meteorológicas Completas**
  - Temperatura atual
  - Sensação térmica
  - Umidade do ar
  - Velocidade do vento
  - Descrição das condições climáticas

- ✅ **Animações Contextuais**
  - Ensolarado ☀️
  - Nublado ☁️
  - Chuvoso 🌧️
  - Tempestade ⛈️
  - Modo noturno 🌙

- ✅ **Elementos Visuais Dinâmicos**
  - Gradientes adaptativos
  - Nuvens animadas em movimento
  - Estrelas piscantes no modo noturno
  - Lua com crateras no período noturno
  - Transições suaves entre estados

---

## 🛠 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

### Core

- **[React Native](https://reactnative.dev/)** - Framework para desenvolvimento mobile
- **[Expo](https://expo.dev/)** - Plataforma para desenvolvimento React Native
- **[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** - Linguagem de programação

### Bibliotecas e APIs

- **[Expo Location](https://docs.expo.dev/versions/latest/sdk/location/)** - Acesso à geolocalização do dispositivo
- **[Axios](https://axios-http.com/)** - Cliente HTTP para requisições
- **[Lottie React Native](https://github.com/lottie-react-native/lottie-react-native)** - Animações vetoriais
- **[Expo Linear Gradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/)** - Gradientes lineares
- **[OpenWeather API](https://openweathermap.org/api)** - API de dados meteorológicos

### Ferramentas de Desenvolvimento

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

---

## 📋 Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (opcional, mas recomendado)
- Aplicativo **Expo Go** no seu smartphone ([iOS](https://apps.apple.com/app/expo-go/id982107779) | [Android](https://play.google.com/store/apps/details?id=host.exp.exponent))

---

## 🔧 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/dev-clima.git
```

### 2. Acesse a pasta do projeto

```bash
cd dev-clima
```

### 3. Instale as dependências

```bash
npm install
# ou
yarn install
```

### 4. Configure a API Key

Obtenha uma chave de API gratuita em [OpenWeather API](https://openweathermap.org/api) e substitua no arquivo `App.js`:

```javascript
const API_KEY = 'SUA_CHAVE_API_AQUI';
```

### 5. Inicie o projeto

```bash
npx expo start
# ou
npm start
# ou
yarn start
```

### 6. Execute no dispositivo

- **Opção 1**: Escaneie o QR Code com o aplicativo **Expo Go**
- **Opção 2**: Pressione `a` para abrir no emulador Android
- **Opção 3**: Pressione `i` para abrir no simulador iOS (apenas macOS)

---

## 📲 Como baixar o aplicativo (Android)

O app pode ser instalado diretamente no seu celular Android através do arquivo `.apk`.

### Passo a passo:

1. Baixe o arquivo do aplicativo clicando no link abaixo
2. Ative a opção **"Permitir instalação de fontes desconhecidas"** no seu celular
3. Abra o arquivo baixado
4. Toque em **Instalar**
5. Pronto! Agora é só abrir e cozinhar 👨‍🍳🔥

<a href="" download>
  <img src="https://img.shields.io/badge/Baixar%20APK-Android-green?style=for-the-badge&logo=android&logoColor=white" />
</a>


---

## 📱 Testar o App

### 🌐 Simulador Web

Experimente o aplicativo diretamente no navegador sem precisar instalar nada!

<div align="center">

[![Vercel](https://img.shields.io/badge/Testar_Simulador-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://simulador-dev-clima.vercel.app/)
[![Deploy Status](https://img.shields.io/badge/deploy-success-brightgreen?style=for-the-badge&logo=vercel)](https://simulador-dev-clima.vercel.app/)

**[🚀 Acesse o Simulador Web](https://simulador-dev-clima.vercel.app/)**

</div>

> 💡 **Dica:** O simulador web permite testar todas as funcionalidades do app diretamente no navegador, incluindo detecção de localização e animações em tempo real!

---

## 🍏 Como testar no iPhone (iOS)

| 📱 Teste pelo Expo Go                                                                                                                                                                                                                                                                                                                                     | 📷 QR Code do Projeto                                            |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Por limitações da Apple, não é possível instalar o app diretamente por arquivo como no Android. Mas você pode testar facilmente usando o **Expo Go**. <br><br> **Passo a passo:** <br><br> 1️⃣ Baixe o app **Expo Go** na App Store <br> 2️⃣ Abra a câmera do seu iPhone <br> 3️⃣ Escaneie o QR Code ao lado <br> 4️⃣ O app abrirá automaticamente no Expo Go <br> | <img src="" width="450"/> |

## 📂 Estrutura de Pastas

```
dev-clima/
├── assets/
│   ├── animations/          # Arquivos Lottie (.json)
│   │   ├── sunny.json
│   │   ├── cloudy.json
│   │   ├── rainy.json
│   │   └── thunderstorm.json
│   ├── screenshots/         # Capturas de tela
│   ├── demo/               # GIFs de demonstração
│   └── qrcode/             # QR Code do Expo
├── App.js                  # Componente principal
├── app.json               # Configurações do Expo
├── package.json           # Dependências do projeto
└── README.md             # Documentação
```

---

## 🎨 Paleta de Cores

O aplicativo utiliza gradientes dinâmicos que se adaptam às condições climáticas:

### ☀️ Dia Ensolarado
- `#4ca1af` → `#5dade2` → `#85c1e9`

### ☁️ Dia Nublado
- `#bdc3c7` → `#95a5a6` → `#7f8c8d`

### 🌧️ Dia Chuvoso
- `#536976` → `#7a8c99` → `#8fa3ad`

### 🌙 Noite Limpa
- `#0f2027` → `#203a43` → `#2c5364`

### ⛈️ Tempestade Noturna
- `#0f0c29` → `#302b63` → `#24243e`

---

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Se você deseja contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adicionando nova feature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

<div align="center">
  <img src="https://github.com/seu-usuario.png" alt="Seu Nome" width="100" style="border-radius: 50%"/>
  
  **Seu Nome**
  
  [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/seu-usuario)
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/seu-usuario)
  [![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=google-chrome&logoColor=white)](https://seu-portfolio.com)
</div>

---

## 🙏 Agradecimentos

- [OpenWeather](https://openweathermap.org/) - Pelos dados meteorológicos
- [LottieFiles](https://lottiefiles.com/) - Pelas animações
- [Expo](https://expo.dev/) - Pela plataforma incrível
- Comunidade React Native - Pelo suporte e recursos

---

<div align="center">

⭐ **Se este projeto te ajudou, deixe uma estrela!** ⭐

Feito com ❤️ e ☕

</div>
