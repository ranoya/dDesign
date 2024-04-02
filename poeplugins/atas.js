let atas = function (par) {

  fetch(
    `https://opensheet.elk.sh/1lncqczCIBX0fl9O0XpDt_ogiqQW5iZUKX-kqH6yHNVQ/ATAS`
  )
    .then((response) => response.json())
      .then((dados) => {
        
          dados.reverse();
        
          let newarr = select(dados, multipatterncheck_exclude, par);


          let xpto = `
          
          
          <style>

          .gridatas {
            display: grid;
            grid-template-columns: [init] 130px 1fr 1fr 1fr [ fim ];
            gap: 3px 10px;
            width: calc(100vw - 50px);
            margin-left: 20px;
            margin-right: 20px;
            padding-bottom: 20px;
          }

          </style>
          
          <div class='gridatas'>
          `;
        
          for (let i = 0; i < newarr.length; i++) {
              
              xpto += `
                <span class='separaline'></span>
                <a class='atasdata' target='_blank' href='${newarr[i].Link}'>${newarr[i].Data}</a>
                <div class='ataspontos'>${newarr[i].Pontos.toString().replace(/\n/g, "<br>")}</div>
                <div class='atasdeferimentos'>${newarr[i].Deferimentos.toString().replace(/\n/g, "<br>")}</div>
                <div class='atasindeferimentos'>${newarr[i].Indeferimentos.toString().replace(/\n/g, "<br>")}</div>
              `;
              
          }

          xpto += `
          <span class='separaline'></span>
          </div>
          `;

      present(xpto);
    });
};