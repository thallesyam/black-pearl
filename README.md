<h2 align="center">
  <img src="https://img.shields.io/badge/web%3F-ok-00b8d3?style=for-the-badge" alt="Sistema web Ok" />
  <img src="https://img.shields.io/badge/server%3F-ok-00b8d3?style=for-the-badge" alt="Serverless OK" />
  <img src="https://img.shields.io/github/license/matheusfelipeog/proffy?color=00b8d3&style=for-the-badge" alt="License" />
</h2>

<h1 align="center">
  <img src="https://user-images.githubusercontent.com/59545660/166710893-b405f6c4-b9d5-4e9d-afd5-6ee7b82f00e8.png" alt="Apresentação" width="1000px" />
</h1>


## 📌 Index

- [Sobre o projeto](#-sobre-o-projeto)
- [Screenshots](#-screenshots)
- [Techs](#-techs)
- [Instalação e Start](#-instalação-e-start)
- [Contribuições](#-contribuições)
- [License](#-license)


## ❔ Sobre o projeto

Para começar o nome do projeto é Black Pearl por causa do navio do Jack Sparrow e não tem ligação direta com o app kkkkkkk

O aplicativo foi feito para solucionar uma dor do meu dia a dia, eu estudo inglês e diariamente preciso escutar alguns audios, eu gostaria de ter um app simples e rapido que eu pudesse escutar esses audios em qualquer lugar, dai surgiu a ideia de criar o black-pearl. Nele você consegue fazer um login usando o google, e fazer o upload do seu audio de forma simples sem se preocupar com outras coisas.

## 📸 Screenshots

<p align="center">
  <strong>Tela Web</strong> <br />
  <img src="https://user-images.githubusercontent.com/59545660/166712534-c028f710-e227-4a41-bde0-964e57117a89.png" alt="Demonstração da plataforma" />
</p>

<p align="center">
  <strong>Tela Mobile</strong> <br />
  <img src="https://user-images.githubusercontent.com/59545660/166713081-0080bdf7-4363-4874-b9c0-edbbd66d203f.jpeg" alt="Demonstração da plataforma" />
</p>

## 🛠 Techs

- **Web**
  - [Next](https://nextjs.org/docs)
  - [Typescript](https://www.typescriptlang.org/)
  - [Tailwind](https://tailwindcss.com/)
  - [Cloudinary](https://cloudinary.com/)
  - 
- **Backend**
  - [Api Routes Next](https://nextjs.org/docs/api-routes/introduction)
  - [FaunaDb](https://fauna.com/)


## ⚙ Instalação e Start

Clone o repositório com:

```bash
> git clone https://github.com/thallesyam/black-pearl.git
```

As demonstrações utilizam **YARN** por padronização, mas, caso use **NPM**, basta substituir onde estiver escrito `yarn` por `npm`.

**Instalando dependências do projeto web:**

```bash
> cd black-pearl
> yarn install
```

Crie um app no [Google Console](https://console.cloud.google.com/) e e adicione ao seu .env as variáveis `GOOGLE_CLIENT_SECRET` e `GOOGLE_CLIENT_ID`

Crie uma base de dados no [FaunaDb](https://fauna.com/) e e adicione ao seu .env as variáveis `FAUNA_KEY`

Crie uma conta e um app no [Next Auth](https://next-auth.js.org) e e adicione ao seu .env as variáveis `NEXTAUTH_SECRET` e `NEXTAUTH_URL`

Crie também uma conta no cloudinary e adicione ao seu .env as variáveis `CLOUDINARY_NAME`, `CLOUDINARY_KEY` e `CLOUDINARY_SECRET`


Exemplo:

```text

GOOGLE_CLIENT_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
GOOGLE_CLIENT_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
FAUNA_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NEXTAUTH_URL=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NEXTAUTH_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
CLOUDINARY_NAME=xxxxxxxxxxxxxxxxxxxxxx
CLOUDINARY_KEY=xxxxxxxxxxxxxxxxxxxxxx
CLOUDINARY_SECRET=xxxxxxxxxxxxxxxxxxxxxx

```

Agora starte o projeto em seu ambiente com:

```bash
> yarn dev
```

Acesse: [`http://localhost:3000/`](http://localhost:3000/) para visualizar.

## 🔮 Layout

O layout do projeto é simples mas foi desenvolvido por mim, e está disponivel nesse link [Layout Figma](https://www.figma.com/file/waJOmf6nBBdds68u7gX4fs/Audio?node-id=37%3A2)

## 📜 License

O projeto está sobre a licença [MIT](./LICENSE) ❤️ 

Gostou? Deixe uma estrelinha para ajudar o projeto ⭐
