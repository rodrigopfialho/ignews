<h1 align="center">
    <img src="./public/images/logo.svg" alt="logo">
</h1>


<h2>
    ig.News - Next.js
</h2>
<p><span>Sobre - </span>Projeto desenvolvido durante as aulas da trilha Ignite. O projeto é um
blog desenvolvido onde o usuário ira fazer o seu login com o Github. caso o usuário seja um usuário
ativo com o pagamento podera realizar ler o conteúdo na aplicação. Projeto conta com as seguintes Tecnologias.
</p>

<h1>Tecnologias</h1>
- [React.js](https://pt-br.reactjs.org/)
- [Prismic CMS](https://prismic.io/)
- [Stripe](https://stripe.com/)
- [SASS](https://sass-lang.com/)
- [FaunaDB](https://fauna.com/)
- [Next.js](https://nextjs.org/)

<h1>Instalação</h1>
```
# Abra um terminal e copie este repositório com o comando
$ git clone https://github.com/rodrigopfialho/ignews.git
```

```
# Acesse a pasta da aplicação
$ cd ignews

# Crie um arquivo .env.local e coloque as variaveis
# de ambiente baseado, ex.

#NEXT_PUBLIC_STRIPE_PUBLIC_KEY=

#STRIPE_API_KEY=
#STRIPE_WEBHOOK_SECRET=
#STRIPE_SUCCESS_URL=http://localhost:3000/posts
#STRIPE_CANCEL_URL=http://localhost:3000/

#GITHUB_CLIENT_ID=
#GITHUB_CLIENT_SECRET=

#FAUNADB_KEY=

#PRISMIC_ENDPOINT=
#PRISMIC_ACCESS_TOKEN=


# Instale as dependências
$ yarn

# Inicie a aplicação
$ yarn start
# ou
$ yarn dev

```



