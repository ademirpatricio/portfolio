# Ademir Patrício

Portfolio pessoal em React + Vite + Tailwind CSS.

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Tailwind

O projeto usa Tailwind CSS pelo plugin oficial do Vite (`@tailwindcss/vite`).

- `src/index.css` importa o Tailwind e carrega `tailwind.config.js` com `@config`.
- `tailwind.config.js` concentra os tokens do projeto, como cores, fonte, radius, sombras e container.
- Os componentes e páginas devem usar classes utilitárias Tailwind por padrão.
- CSS próprio deve ficar restrito a casos realmente específicos.
