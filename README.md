<div align="center">

# ☀️ Dev Clima

### Aplicativo de Previsão do Tempo em Tempo Real

Um aplicativo mobile elegante e animado que fornece informações meteorológicas precisas baseadas na sua localização atual.

[![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![OpenWeather](https://img.shields.io/badge/OpenWeather-EB6E4B?style=for-the-badge&logo=openweathermap&logoColor=white)](https://openweathermap.org/)
![Axios](https://img.shields.io/badge/Axios-HTTP%20Client-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

#### Sobre •  Demonstração • Funcionalidades • Tecnologias • Instalação • Deploy • Licença

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
    <th>Dia Nublado</th>
    <th>Noite</th>
    <th>Dia Chuvoso</th>
  </tr>
  <tr>
    <td>
      <img src="https://github.com/joao-robertoo/projeto-app-dev-clima/blob/main/assets/demo/dia-nublado.gif?raw=true" width="200"/>
    </td>
    <td>
      <img src="https://github.com/joao-robertoo/projeto-app-dev-clima/blob/main/assets/demo/noite.gif?raw=true" width="200"/>
    </td>
    <td>
      <img src="" width="200"/>
    </td>
  </tr>
</table>

---

## 🚀 Funcionalidades

<table>
<tr>
<td width="50%" valign="top">

### 📍 Geolocalização em Tempo Real
- Solicitação de permissões de localização  
- Obtenção automática de coordenadas GPS  
- Atualização baseada na posição do usuário  

### 🌦️ Informações Meteorológicas
- Temperatura atual  
- Sensação térmica  
- Umidade do ar  
- Velocidade do vento  
- Descrição das condições climáticas  

</td>

<td width="50%" valign="top">

### 🎞️ Animações Contextuais
- Ensolarado ☀️  
- Nublado ☁️  
- Chuvoso 🌧️  
- Tempestade ⛈️  
- Modo noturno 🌙  

### 🎨 Elementos Visuais Dinâmicos
- Gradientes adaptativos  
- Nuvens animadas em movimento  
- Estrelas piscantes no modo noturno  
- Lua com crateras no período noturno  
- Transições suaves entre estados  

</td>
</tr>
</table>

---

## 🛠 Tecnologias

<table>
<tr>
<td width="60%" valign="top">

### ⚙️ Core

- **[React Native](https://reactnative.dev/)** — Framework para desenvolvimento mobile  
- **[Expo](https://expo.dev/)** — Plataforma para desenvolvimento React Native  
- **[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** — Linguagem de programação  

### 🔌 Bibliotecas e APIs

- **[Expo Location](https://docs.expo.dev/versions/latest/sdk/location/)** — Geolocalização do dispositivo  
- **[Axios](https://axios-http.com/)** — Cliente HTTP para requisições  
- **[Lottie React Native](https://github.com/lottie-react-native/lottie-react-native)** — Animações vetoriais  
- **[Expo Linear Gradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/)** — Gradientes lineares  
- **[OpenWeather API](https://openweathermap.org/api)** — API de dados meteorológicos  

</td>
<td width="50%" valign="top" align="center">


### 🧰 Ferramentas de Desenvolvimento

<br>

<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/><br><br>
<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"/><br><br>
<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white"/>

</td>
</tr>
</table>

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

## 📱 Testar o App

### 🌐 Simulador Web

Experimente o aplicativo diretamente no navegador sem precisar instalar nada!

<div align="center">

[![Vercel](https://img.shields.io/badge/Testar_Simulador-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://simulador-dev-clima.vercel.app/)
[![Deploy Status](https://img.shields.io/badge/deploy-success-brightgreen?style=for-the-badge&logo=vercel)](https://simulador-dev-clima.vercel.app/)

</div>

> 💡 **Dica:** O simulador web permite testar todas as funcionalidades do app diretamente no navegador, incluindo detecção de localização e animações em tempo real!

---

## 📲 Como baixar o aplicativo (Android)

<table>
<tr>
<td>

📱 **Instalação direta via APK**

O app pode ser instalado diretamente no seu celular Android através do arquivo `.apk`.

**Passo a passo:**

1️⃣ Baixe o arquivo do aplicativo clicando no botão ao lado  
2️⃣ Ative a opção **"Permitir instalação de fontes desconhecidas"** no seu celular  
3️⃣ Abra o arquivo baixado  
4️⃣ Toque em **Instalar**  
5️⃣ Pronto! Agora é só abrir e usar 🚀  

</td>
<td align="center">

<img src="https://raw.githubusercontent.com/joao-robertoo/projeto-app-dev-clima/0f790afd6bb47d52bdd0e5b6af441a2f1ad7a50c/assets/qrcode/qrcode.svg" width="200"/><br><br>

<a href="https://github.com/joao-robertoo/projeto-app-dev-clima/releases/download/v1.0.0/dev-clima.apk" download>
  <img src="https://img.shields.io/badge/Baixar%20APK-Android-3DDC84?style=for-the-badge&logo=android&logoColor=white"/>
</a>

</td>
</tr>
</table>

---

## 🍏 Como testar no iPhone (iOS)

<table>
<tr>
<td>

📱 **Teste pelo Expo Go**

Por limitações da Apple, não é possível instalar o app diretamente por arquivo como no Android. Mas você pode testar facilmente usando o **Expo Go**.

**Passo a passo:**

1️⃣ Baixe o app **Expo Go** na App Store  
2️⃣ Abra a câmera do iPhone  
3️⃣ Escaneie o QR Code ao lado  
4️⃣ O app abrirá automaticamente no Expo Go  

</td>
<td align="center">

<img src="https://raw.githubusercontent.com/joao-robertoo/projeto-app-dev-clima/0f790afd6bb47d52bdd0e5b6af441a2f1ad7a50c/assets/qrcode/qrcode.svg" width="400"/><br><br>

<a href="exp+://expo-development-client/?url=https://u.expo.dev/da23e3e5-537f-4f6c-a20a-239ec93997c5/group/84884f11-07d6-4e3a-8148-afa258229cde">
  <img src="https://img.shields.io/badge/iOS-Abrir%20no%20Expo%20Dev%20Client-000?logo=apple"/>
</a>

</td>
</tr>
</table>

---

## 📂 Estrutura de Pastas

```
dev-clima/
├── assets/
│   ├── animations/          # Arquivos Lottie (.json)
│   │   ├── sunny.json
│   │   ├── cloudy.json
│   │   ├── rainy.json
│   │   └── thunderstorm.json
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
  <img src="https://github.com/user-attachments/assets/9a443f9a-f136-449e-a349-6f9ea088a8ca" width="180" style="border-radius: 50%;" alt="João Roberto"/>

  **João Roberto - Desenvolvedor FullStack**

  [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/joao-robertoo)
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/joaorobertoo)
  [![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=google-chrome&logoColor=white)](https://portifolio-nu-ruddy-64.vercel.app/)
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
