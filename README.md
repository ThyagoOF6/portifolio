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
- Troque os links dos projetos e do GitHub em `index.html`.
- Ajuste cores, tipografia e espaçamentos em `style.css`.
- Substitua as imagens dos projetos pelas imagens dos seus trabalhos.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub, por exemplo `portfolio`.
2. Execute `git init`, `git add .`, `git commit -m "feat: cria portfolio"` e `git branch -M main`.
3. Adicione o remoto com `git remote add origin URL_DO_REPOSITORIO` e envie com `git push -u origin main`.
4. No GitHub, abra **Settings > Pages**, escolha **GitHub Actions** e publique usando o workflow estático do Vite.
