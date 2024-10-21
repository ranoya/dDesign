let portarias = function (par) {
  let jsonfile = `https://docs.google.com/spreadsheets/d/1lncqczCIBX0fl9O0XpDt_ogiqQW5iZUKX-kqH6yHNVQ/edit?gid=2067735433#gid=2067735433`;

  getcsvdata(GoogleSheetCsvURL(jsonfile), function (dados) {
    dados.reverse();

    let newarr = select(dados, multipatterncheck_exclude, par);

    let xpto = `
          
          
          <style>

          .gridth {
            display: grid;
            grid-template-columns: [init] 1fr 1.5fr 2fr [ fim ];
            gap: 3px 10px;
            width: calc(100vw - 50px);
            margin-left: 20px;
            margin-right: 20px;
            padding-bottom: 20px;
          }

          .gridlink {
            display: grid;
            grid-template-columns: [init] 1fr 1.5fr 2fr [ fim ];
            gap: 3px 10px;
            width: calc(100vw - 55px);
            margin-left: 20px;
            margin-right: 19px;
            padding-bottom: 20px;
            padding-top: 20px;
            margin-bottom: 1px;
            margin-top: 2px;
          }

          .ithead {
                margin-top: 16px;
                color: var(--text-color, #bbbbbb);
                text-transform: uppercase;
                font-size: 11px;
                padding-left: 8px;
          }

          .separalinks {
                display: block;
                width: calc(100vw - 40px);
                margin: 0;
                margin-right: 20px;
                margin-left: 20px;
                height: 1px;
                border-bottom: 1px solid var(--line-separator, #dddddd);
                color: var(--text-color, #bbbbbb);
                
          }

          </style>
          
          <div class='gridth'>

          <div class="ithead">PORTARIA</div>
          <div class="ithead">PROFESSOR</div>
          <div class="ithead">DESIGNAÇÃO</div>

          </div>
          `;

    let temlink = "";
    for (let i = 0; i < newarr.length; i++) {
      xpto += `
                <span class='separalinks'></span>`;

      if (
        typeof newarr[i].Link != "undefined" &&
        newarr[i].Link != null &&
        newarr[i].Link != ""
      ) {
        xpto += `<a class='gridlink' target='_blank' href='${newarr[
          i
        ].Link.replace(/\/view\?.*$/, "/preview")}'><div>${newarr[i].Data} ${
          newarr[i].Numero
        }</div>
          <div>${newarr[i].Professor}</div>
          <div>${newarr[i].Designacao}</div>
          </a>`;
      } else {
        xpto += `<div class='gridlink'><div>${newarr[i].Data} ${newarr[i].Numero}</div>
          <div>${newarr[i].Professor}</div>
          <div>${newarr[i].Designacao}</div>
          </div>`;
      }
    }

    xpto += `
          <span class='separalinks'></span>
          
          `;

    present(xpto);
  });
};
