const combinacoes = [
    [0, 1, 2], // linha 1
    [3, 4, 5], // linha 2
    [6, 7, 8], // linha 3
    [0, 3, 6], // coluna 1
    [1, 4, 7], // coluna 2
    [2, 5, 8], // coluna 3
    [0, 4, 8], // diagonal esqueda direita
    [2, 4, 6] // diagonal direita esquerda
  ]
  
  const getGrid = document.querySelector('.grid');
  const player = document.querySelector('#player');
  const btnReset = document.querySelector('#reset');
  
  let check = true;
  const playerX = 'X';
  const playerO = 'O';
  
  function createDiv() {
    for (let i = 0; i < 9; i += 1) {
      let criaDiv = document.createElement('div');
      criaDiv.className = 'celula';
      criaDiv.id = i;
      criaDiv.addEventListener('click', game);
      getGrid.appendChild(criaDiv);
    };
  }
  
  createDiv();
  
  const divs = document.querySelectorAll('.celula');
  
  function game(event) {
    const div = document.getElementById(event.target.id);
    let turno = '';
  
    if (check) {
      turno = playerX;
      player.innerText = 'Vez do jogador O';
    } else {
      turno = playerO;
      player.innerText = 'Vez do jogador X';
    }
    div.innerText = turno;
    check = !check;
    winner(turno);
  }
  
  function winner(turno) {
    let points = 0;
    let position = [];
  
    for (let i = 0; i < combinacoes.length; i += 1) {
      position = combinacoes[i];
      points = 0;
  
      for (let index = 0; index < position.length; index += 1) {
        if (document.getElementById(position[index]).innerText == turno) {
          points += 1;
          if (points >= 3) {
            player.innerHTML = `${turno} Ganhou !`;
          }
          else {
            tie();
          }
        }
      }
    }
  }
  
  function tie() {
    let cont = 0;
    for (let i = 0; i < divs.length; i += 1) {
      if (divs[i].innerText != '') {
        cont += 1;
        if (cont >= divs.length) {
          player.innerHTML = `Empatou!!`;
        }
      }
    }
  }
  
  function reset() {
    for (const i of divs) {
      i.innerText = '';
    }
  }
  
  btnReset.addEventListener('click', reset);