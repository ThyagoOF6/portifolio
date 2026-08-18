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
