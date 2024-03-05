<div align="center">
<h2>
    <em>CV</em> minimalista maquetado para web e impresión PDF en español e inglés
</h2>
<p>
    Esquema del JSON de CV de <a href="https://jsonresume.org/schema/">jsonresume.org</a>
</p>

<p>
    Basado en el diseño de <a href="https://github.com/BartoszJarocki/cv">Bartosz Jarocki</a>
</p>

<p>
    Fork desde el <a href="https://github.com/midudev/minimalist-portfolio-json">repositorio</a> de <a href="https://midu.dev">Midudev</a>
</p>

</div>

<div align="center">
    <a href="#🚀-empezar">
        Empezar
    </a>
    <span>&nbsp;✦&nbsp;</span>
    <a href="#🧞-comandos">
        Comandos
    </a>
    <span>&nbsp;✦&nbsp;</span>
    <a href="#🔑-licencia">
        Licencia
    </a>
    <span>&nbsp;✦&nbsp;</span>
    <a href="https://midu.dev">
        Personal
    </a>
   
</div>

<p></p>

<div align="center">

![Astro Badge](https://img.shields.io/badge/Astro-BC52EE?logo=astro&logoColor=fff&style=flat)

</div>

<img src="portada.png"></img>

## 🛠️ Stack

- [**Astro**](https://astro.build/) - El framework web de la nueva época.
- [**Typescript**](https://www.typescriptlang.org/) - JavaScript con sintaxis de tipado.

## 🚀 Empezar

### 1. Usa este [repo](https://github.com/rafasanabria1/minimalist-portfolio-json) como _template_ de un proyecto de Astro

- Yo uso [pnpm](https://pnpm.io/installation) como gestor de dependencias y empaquetador.

```bash
# Activa pnpm en MacOS, WSL & Linux:
corepack enable
corepack prepare pnpm@latest --activate

# Inicializa el proyecto
pnpm create astro@latest -- --template midudev/minimalist-portfolio-json
```

### 2. Añade tu contenido:

Edita los archivos `data/cv-es.json` y `data/cv-en.json` para crear tu propio Portafolio/CV imprimible multi-idioma.

### 3. Lanza el servidor de desarrollo:

```bash
# Disfruta del resultado
pnpm dev
```

1. Abre [**http://localhost:4321**](http://localhost:4321/) en tu navegador para ver el resultado 🚀

## 🧞 Comandos

|     | Comando         | Acción                                                                       |
| :-- | :-------------- | :--------------------------------------------------------------------------- |
| ⚙️  | `dev` o `start` | Lanza un servidor de desarrollo local en `localhost:4321`.                   |
| ⚙️  | `build`         | Comprueba posibles errores y hace un empaquetado de producción en `./dist/`. |
| ⚙️  | `preview`       | Vista previa en local `localhost:4321`                                       |

## 🔑 Licencia

[MIT](LICENSE.txt) - Creado por [**midudev**](https://midu.dev) y adaptado por [**rafasanabria1**](https://www.github.com/rafasanabria1).
