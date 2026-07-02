# Portfólio — Lívia Lucena de Souza

Site de portfólio pessoal. HTML, CSS, JavaScript e Bootstrap 5.

## Estrutura de pastas

```
portifolio/
├── index.html              Página principal
├── css/
│   └── style.css           Todos os estilos
├── js/
│   └── main.js             Interações (nav, filtros, animações)
└── assets/
    ├── logo.png            Logo da navbar
    ├── profile/
    │   └── livia.jpg       Foto do hero
    ├── images/             Capas dos cards de projeto
    │   ├── nurie-capa.jpg
    │   ├── lumiere-capa.jpg
    │   └── aa-capa.jpg
    ├── pdf/                PDFs dos projetos (abrem nos modais)
    │   ├── nurie.pdf
    │   ├── lumiere.pdf
    │   └── aa.pdf          (PENDENTE — ver abaixo)
    └── pdfjs/              Visualizador de PDF (PENDENTE — ver abaixo)
```

## Correções aplicadas

- Cards de projeto tinham `project-thumb` aninhado em duplicidade — corrigido.
- Os 3 cards apontavam todos para `nurie-capa.jpg` — agora cada um usa a capa correta.
- Modal 3 (A.A Polimentos) estava sem o iframe do PDF — adicionado.
- Modais com tamanhos inconsistentes (`modal-lg` vs `modal-xl`) — padronizados para `modal-xl`.
- `</div>` extra na seção Sobre que desbalanceava o HTML — removido.
- Bloco "Aurora" morto no JS (criava div vazio inútil) — limpo.
- Logo com `height:200px` inline brigando com o CSS — removido o inline; o CSS controla o tamanho.
- Regra CSS `#particles` órfã (elemento não existe mais) — removida.
- Indentação dos iframes e comentários órfãos — limpos.

## Pendências (assets que faltam)

1. **`assets/pdf/aa.pdf`** — gere o PDF do projeto A.A Polimentos (mesmo processo dos outros) e coloque aqui.
2. **`assets/pdfjs/`** — o visualizador PDF.js precisa estar nesta pasta para os modais abrirem os PDFs. Baixe em mozilla.github.io/pdf.js e copie a pasta.
3. **Capas reais** — as imagens em `assets/images/` são placeholders. Substitua pelas capas reais dos projetos mantendo os mesmos nomes.

## Hospedagem

Suba a pasta `portifolio/` inteira para Vercel, Netlify ou GitHub Pages. Os caminhos são relativos e funcionam direto.
