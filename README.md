# Thyago Oliveira Ferreira — Portfólio

Portfólio pessoal para apresentar projetos, experiência e formas de contato.

## Rodar localmente

```bash
npm install
npm run dev
```

Para gerar a versão de produção:

```bash
npm run build
```

## Sincronização com LinkedIn

O portfólio possui um backend OAuth 2.0 em `server.js`. Ele mantém o segredo do
LinkedIn no servidor, valida o parâmetro `state` contra CSRF e disponibiliza as
certificações em `/api/certifications`.

1. Copie `.env.example` para `.env` e preencha `LINKEDIN_CLIENT_ID`,
   `LINKEDIN_CLIENT_SECRET`, `LINKEDIN_REDIRECT_URI` e `SYNC_SECRET`.
2. Cadastre exatamente `LINKEDIN_REDIRECT_URI` na aba **Auth** da aplicação no
   LinkedIn Developer Portal.
3. Execute `npm install`, depois `npm run start`, e abra `/auth/linkedin` para
   autorizar a aplicação.
4. Execute a sincronização administrativa com o segredo configurado:

```bash
curl -X POST http://localhost:3000/api/certifications/sync \
  -H "x-sync-secret: SEU_SYNC_SECRET"
```

O LinkedIn não oferece uma API pública para certificações pessoais. Por isso,
sem um endpoint aprovado configurado em `LINKEDIN_CERTIFICATIONS_URL`, a
integração OAuth funciona para a conexão da conta, mas a lista continua sendo
carregada de `certifications.json`. Caso você tenha acesso a um provedor ou
parceiro que exponha essas certificações, informe a URL nesse campo e o endpoint
de sincronização atualizará o arquivo automaticamente.

## Personalização rápida

- Edite nome, biografia e e-mail em `index.html`.
- Os projetos são carregados automaticamente dos repositórios públicos do usuário
  definido em `data-github-user` na seção de projetos de `index.html`.
- Para usar outro perfil, altere esse valor e publique novamente.
- Ajuste cores, tipografia e espaçamentos em `style.css`.
- As imagens dos cards usam a prévia Open Graph gerada pelo GitHub.

### Sincronização com o GitHub

A página consulta a API pública do GitHub sempre que é carregada. Repositórios
públicos novos aparecem automaticamente na próxima visita, sem editar o site.
Repositórios privados não são exibidos, porque a página não usa token de acesso.
Forks também são ignorados.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub, por exemplo `portfolio`.
2. Execute `git init`, `git add .`, `git commit -m "feat: cria portfolio"` e `git branch -M main`.
3. Adicione o remoto com `git remote add origin URL_DO_REPOSITORIO` e envie com `git push -u origin main`.
4. No GitHub, abra **Settings > Pages**, escolha **GitHub Actions** e aguarde o
   workflow `.github/workflows/deploy.yml` concluir.
5. Abra a URL exibida na implantação. A sincronização funcionará no endereço
   publicado, desde que o navegador consiga acessar `api.github.com`.
