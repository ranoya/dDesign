let comiss = function (par) {

  fetch(
    `https://opensheet.elk.sh/1lncqczCIBX0fl9O0XpDt_ogiqQW5iZUKX-kqH6yHNVQ/GRUPOS`
  )
    .then((response) => response.json())
    .then((dados) => {
        let newarr = select(dados, multipatterncheck_exclude, par);

        let registroscat = unique(newarr, "comissao");
        let separaregistros = [];
        let z = 0;
        for (let i = 0; i < registroscat.length; i++) {
            if (typeof registroscat[i] != "undefined" && registroscat[i] != "undefined" && registroscat[i] != "" && registroscat[i] != null) {

                console.log("----");
                console.log(i + ": " + registroscat[i] + " > " + (typeof registroscat[i] != "undefined" && registroscat[i] != "undefined" && registroscat[i] != "" && registroscat[i] != null))
                separaregistros[z] = {};
                separaregistros[z].comissao = registroscat[i];
                z++;
            }
        }

        console.log("separaregistros");
        console.table(separaregistros);
        
        
        let categorias = tags(separaregistros, "comissao", ",");

        console.log("categorias");
        console.table(categorias);

        let colunas = "";
        let itemheads = `<div class="gridcom">`;
        let heads = `<span class="categoriacomis">`;

        for (let i = 0; i < categorias.length; i++) {
            colunas += "1fr ";
            heads += ` `;
        }

        for (let i = 0; i < categorias.length; i++){
            itemheads += `<div>${categorias[i]}</div>`
        }

        heads += `</span>`;
        itemheads += `</div>`;

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

        .itemhead {

        }
        </style>
        
        ${itemheads}

        <div class="gridcom">
        
        ${heads}
        `;

        console.table(newarr);

        let patt = "";

        for (let c = 0; c < categorias.length; c++) {
            if (typeof categorias[c] != "undefined" && categorias[c] != "" && categorias[c] != null) {

                xpto += `<div>`;


                for (let i = 0; i < newarr.length; i++) {

                    patt = String(newarr[i].comissao);
                    console.log("---");
                    console.log(patt);

                    if (patt.match(categorias[c])) {

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