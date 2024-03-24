let comiss = function (par) {

  fetch(
    `https://opensheet.elk.sh/1lncqczCIBX0fl9O0XpDt_ogiqQW5iZUKX-kqH6yHNVQ/GRUPOS`
  )
    .then((response) => response.json())
    .then((dados) => {
        let newarr = select(dados, multipatterncheck_exclude, par);

        let registroscat = unique(newarr, "comissao");
        let separaregistros = [];
        for (let i = 0; i < registroscat.length; i++) {
            if (typeof registroscat[i] != "undefined" && registroscat[i] != "" && registroscat[i] != null) {

                console.log("----");
                console.log(i + ": " + registroscat[i] + " > " + (typeof registroscat[i] != "undefined" && registroscat[i] != "" && registroscat[i] != null))
                separaregistros.push(registroscat[i]);
            }
        }

        console.log("separaregistros");
        console.table(separaregistros);
        
        
        let categorias = tags(separaregistros, "comissao", ",");

        console.log("categorias");
        console.table(categorias);

        let colunas = "";
        let heads = `<span class="categoriacomis">`;

        for (let i = 0; i < categorias.length; i++) {
            colunas += "1fr ";
            heads += `${categorias[i]}`;
        }

        heads += `</span>`;

        let xpto = `
        <style>

        .categoriacomis {
            grid-column: 1 / Span ${categorias.length} !important;
            margin-top: 16px;
            border-bottom: 1px solid var(--line-separator, #dddddd);
            color: var(--text-color, #bbbbbb);
            text-transform: uppercase;
            font-size: 11px;
        }

        .gridcom {

            display: grid;
            grid-template-columns: [init] ${colunas} [ fim ];
            gap: 3px 10px;
            width: calc(100vw - 50px);
            margin-left: 20px;
            margin-right: 20px;
            padding-bottom: 20px;

        }
        </style>
        
        <div class="gridcom">
        
        ${heads}
        `;

        

        for (let c = 0; c < categorias.length; c++) {
            if (typeof categorias[c] != "undefined" && categorias[c] != "" && categorias[c] != null) {

                xpto += `<div>`;


                for (let i = 0; i < newarr.length; i++) {

                    if (newarr[i].comissao.toString.match(categorias[c])) {

                        xpto += newarr[i].professor + "<br>";

                    }

                }

                xpto += `</div>`;

            }
        }

      xpto += `</div>`;
      present(xpto);
    });
};