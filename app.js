const daireler = document.querySelectorAll(".col-4");
const kelebek = document.querySelector(".resim");
const timer = document.getElementById("timer");
const scoreEl = document.getElementById("score");
const mesaj = document.querySelector(".mesaj");

let score = 0;
let konum;
let zaman = 20;
let timerId = null;

const rndmKonum = () => {
  daireler.forEach((daire, index) => {
    if (daire.classList.contains("resim")) {
      daire.classList.remove("resim");
    }
    daire.setAttribute("id", index);
    // console.log(daire.id);
  });

  let randomYer = daireler[Math.floor(Math.random() * daireler.length)];
  randomYer.classList.add("resim");

  konum = randomYer.id;
};

/* Mouse Down olayı farenin tuşuna basıldığında,

mouse up ise farenin tuşu bırakıldığında devreye girer.
 
dairelere mousedown özelliğiye idleri kontrol edelim.
random olarak seçilenle aynıysa puan artırılsın ve 
scoreEl a yerleştirilin.
 */
daireler.forEach((daire) => {
  daire.addEventListener("mousedown", () => {
    if (daire.id == konum) {
      score++;
      scoreEl.innerText = score;
      konum = null;
    }
  });
});

/*belli süre aralıklarında  rndmKonum methodu çalışsın. */

const yerles = () => {
  timerId = setInterval(rndmKonum, 700);
};

yerles();

/* gerisayım yapılsın ve süre dolunca clear interval yapılsın.
gerisayım methodu sanyede bir çalışsın. */

const geriSayim = () => {
  zaman--;
  timer.innerText = zaman;
  if (zaman == 0) {
    clearInterval(geriSayimTimer);
    clearInterval(timerId);
    mesaj.innerHTML = ` <h2>GAME OVER</h2>  <br> <h2>PUAN:${score}</h2>`;
  }
};

let geriSayimTimer = setInterval(geriSayim, 1000);
