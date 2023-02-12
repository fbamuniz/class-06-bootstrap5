# jQuery3
![NPM](https://img.shields.io/npm/l/react)
# Introdução

Originalmente criado por um designer e um desenvolvedor no Twitter, o Bootstrap se tornou um dos mais populares frameworks front-end e projetos de código aberto no mundo. O Bootstrap foi criado no Twitter em meados de 2010 por Mark Otto e Jacó Thornton. Antes de ser uma estrutura de código aberto, o Bootstrap era conhecido como Twitter Blueprint. Após alguns meses de desenvolvimento, o Twitter realizou sua primeira Hack Week e o projeto explodiu à medida que os desenvolvedores de todos os níveis evoluíram sem nenhuma orientação externa. Ele serviu como guia de estilo para o desenvolvimento de ferramentas internas na empresa, por mais de um ano até ter o seu lançamento público, e continua a fazê-lo até hoje.

Lançado originalmente em 19 de agosto de 2011, O Bootstrap já recebeu mais de vinte atualizações, incluindo dois grandes reescritos com v2 e v3. Com o Bootstrap 2, foi adicionado funcionalidades responsivas a toda a estrutura como uma folha de estilo opcional. Já o Bootstrap teve a sua biblioteca reescrita para torná-la responsiva por padrão, atendendo as necesidades de dispositivos móveis.

Abaixo, um exemplo de uma estrutura básica HTML, com botões escritos com classes Bootstrap.

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" 
    rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" 
    crossorigin="anonymous">    
    <title>Bootstrap</title>
    <link rel="stylesheet" href="css/style.css" type="text/css">
</head>
<body>
    <div class="container-fluid">
        <div class="container-fluid col bg-white m-3 p-3">
            <button type="button" class="btn">Normal</button>
            <button type="button" class="btn btn-primary">Primário</button>
            <button type="button" class="btn btn-secondary">Secundário</button>
            <button type="button" class="btn btn-success">Sucesso</button>
            <button type="button" class="btn btn-info">Informação</button>
        </div>
    </div>  

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" 
    crossorigin="anonymous"></script>
</body>
</html>
```

Com o Bootstrap 4, mais uma vez o projeto foi reescrito para levar em conta duas alterações arquiteturais importantes: uma migração para o SASS e a mudança para o flexbox do CSS. O objetivo do Bootstrap é ajudar a comunidade de desenvolvimento Web a seguir pelo caminho das novas propriedades do CSS, com menos dependências e novas tecnologias em navegadores mais modernos.

No vídeo abaixo do Rodolfo Mori, é apresentado um pequeno resumo do que é o Bootstrap e sua aplicabilidade. 

[![Assista ao vídeo](https://img.youtube.com/vi/pvf9jX_Ej28/maxresdefault.jpg)](https://www.youtube.com/watch?v=pvf9jX_Ej28)

## Referências

- About Bootstrap. Boostrap, disponível em: [https://getbootstrap.com.br](https://getbootstrap.com.br/docs/4.1/about/overview/). Acesso em: 28 de jan. de 2023.
- O que é Bootstrap. Kenzie, disponível em: [https://kenzie.com.br](https://kenzie.com.br/blog/bootstrap/). Acesso em: 28 de jan. de 2023.

# Como executar

## Front end Web
Pré-requisitos: 
- Visual Studio Code
- GIT

```bash
# clonar repositório
git clone https://github.com/fbamuniz/class-04-jquery3.git

```

## Bibliografia das aulas

- DUCKETT, J. HTML e CSS: Projete e Construa Websites. Rio de Janeiro: Alta Books. 2016.
- MEYER, E. S. CSS – técnicas profissionais para um layout moderno. Porto Alegre: Bookman, 2011.


# Autor

Prof. Frederico Barbosa Muniz<br>
https://linktr.ee/fbamuniz
