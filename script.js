window.onload = function() {
  let basePyramid = 9;
  let numberOfLines = (basePyramid + 1) / 2; // 5
  let controlLeft = numberOfLines; // 5
  let controlRight = numberOfLines; // 5
  let lines = document.querySelectorAll(".line");

  updateVisit();

  fillTriangle(lines);
  
  // Atualiza a quantidade de visitar no site, utilizando o LocalStorage
  function updateVisit() {
    if (typeof (Storage) != "undefined") {
      if(localStorage.count !== undefined) {
        let count = parseInt(localStorage.count);
        count+=1;
        localStorage.count = count;
        document.getElementById("count").innerHTML = count;
      } else {
        localStorage.count = 1;
        document.getElementById("count").innerHTML = 1;
      }
    } else {
      document.write("Sem suporte para Web Storage");
    }  
  }

  // Passa por todos as linhas e preenche os triangulos
  function fillTriangle(lines) {
    for(let i = 0; i < lines.length; i += 1) {
      fillLine(lines[i]);
      controlLeft += 1;
      controlRight -= 1;
    }
  }

  // Cria uma caixa com base nas diferentes classes
  function createBox(className) {
    let box = document.createElement("div");
    box.className = className;
    return box;
  }

  // Preenche uma linha
  function fillLine(divLine) {
    for (let lineColumn = 1; lineColumn <= basePyramid; lineColumn += 1) {
      if(lineColumn === controlLeft && lineColumn === controlRight) {
        let box = createBox("tri-top");
        divLine.appendChild(box);
      } else if(lineColumn === controlLeft) {
        let box = createBox("box");
        box.className = `${box.className} left`;
        divLine.appendChild(box);
      } else if(lineColumn === controlRight) {
        let box = createBox("box");
        box.className = `${box.className} right`;
        divLine.appendChild(box);
      } else if (lineColumn < controlLeft && lineColumn > controlRight) {
        divLine.appendChild(createBox("box"));
      } else {
        divLine.appendChild(createBox("empty-box"));
      }
    }
  }
}
