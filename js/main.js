'use strict';

//INDEX SCRIPT
const factBtns = document.querySelectorAll('[data-fact]');
const containers = document.querySelectorAll('.fact-container');
const closeBtn = document.querySelectorAll('.close-button');
let currentBtn = '';
let currentCont = '';
let thisLocation = '';
let para = document.createElement('p');
let attrib = '';

const facts = {
  semiCharmed: `This song describes a drug user's descent into crystal meth
  addiction.`,
  napster: `Shawn Fanning, the creator of Napster, got the idea while he was enrolled at Northeastern University in 1998`,
  woodstock99: `During the final hours of the "Woodstock 99," a peace promotion organization handed out candles to the audience to create a candlelight vigil for the final hours of the festival. The audience used the candles to set fire to an audio tower and start bonfires.`,
  goldeneye: `Most of the non-player characters were rendered from employees at Rare Studios.`,
  that70sShow: `The show was initially going to be named after The Who song “Teenage Wasteland.”`,
  darkKnight: `For the role of the Joker, Heath Ledger drew inspiration from: Johnny Rotten & Sid Vicious of the Sex Pistols, as well as the character Alex from Stanley Kubrick’s film, A Clockwork Orange. `,
  anchorman: `The film was inspired by a biography show that Will Ferrell watched about Jessica Savitch, and how one of her male co-workers confessed to being a total chauvinist back in the day.`,
  cloverfield: `During the first weekend of the release, many theaters posted signs warning guests that the hand-held camera movements may cause motion sickness.`,
  donnieDarko: `This was Seth Rogen’s feature film debut.`,
  godOfWar: `David Jaffe's inspiration for the game was partly inspired by the 1981 film Clash of the Titans.`,
  halfLife: `Half-Life was the highest-selling first-person shooter of all time up until the release of Call of Duty: Modern Warfare 3 (2011) - that's a total of 13 years.`,
  mario64: `Was voted as the most important video game ever by Electronic Gaming Magazine (Jan 2005).`,
  southPark: `Most of Cartman's lines are ad-libbed by Trey Parker, who has stated that Cartman is his favorite character on the show.`,
  sopranos: `James Gandolfini said that he was often contacted by real-life "wise guys", complimenting him on the authenticity of the series, as well as giving him advice.`,
  dexter: `Though they play brother and sister in the series, having met on the show, Michael C. Hall  and Jennifer Carpenter married on 31st December 2008. They subsequently divorced in December 2010, but continued to work together in the show.`,
  hammer: `The music is based on  “Super Freak” by Rick James. That song was a hit in 1981, so many younger listeners did not know the beat was sampled.`,
  teenSpirit: `Kurt Cobain wrote this song for Nirvana; it came together in a jam session when he played it for the band. He said: "I was trying to write the ultimate pop song. I was basically trying to rip off The Pixies."`,
  bittersweetSymphony: `The famous orchestral riff incorporates a sample from an obscure instrumental version of the 1965 Rolling Stones song ”The Last Time” by Stones producer Andrew Loog Oldham, who included it on a 1966 album called The Rolling Stones Songbook (credited to The Andrew Oldham Orchestra).`,
};

const setup = function () {
  currentBtn = this.getAttribute('data-fact');
  console.log(this);

  for (let i = 0; i < containers.length; i++) {
    currentCont = containers[i].getAttribute('id');
    console.log(`current cont is ${currentCont}`);

    if (currentCont === currentBtn) {
      attrib = currentCont;
      console.log(`attrib is ${attrib}`);
      if (attrib === 'semi-charmed') {
        console.log(`attrib is now: ${attrib}`);
        para.innerText = facts.semiCharmed;
        containers[i].appendChild(para);
      } else if (attrib === 'dark-knight') {
        para.innerText = facts.that70sShow;
        containers[i].appendChild(para);
      } else if (attrib === 'that-70s-show') {
        para.innerText = facts.that70sShow;
        containers[i].appendChild(para);
      } else if (attrib === 'goldeneye') {
        para.innerText = facts.goldeneye;
        containers[i].appendChild(para);
      } else if (attrib === 'woodstock99') {
        para.innerText = facts.woodstock99;
        containers[i].appendChild(para);
      } else if (attrib === 'napster') {
        para.innerText = facts.napster;
        containers[i].appendChild(para);
      }
      containers[i].classList.remove('hide-item');
      containers[i].classList.add('fade-in');
    } else {
      containers[i].classList.add('hide-item');
    }

    const hideContainer = function () {
      containers[i].classList.add('hide-item');
    };
    for (const cb of closeBtn) {
      cb.addEventListener('click', hideContainer);
    }
  }

  currentBtn = '';
  currentCont = '';
};

for (const btn of factBtns) {
  btn.addEventListener('click', setup);
}

//page start
const factCont = document.querySelectorAll('[data-container]');
const factPageBtns = document.querySelectorAll('[data-fact-button]');
let curFB = '';
let curCont = '';

const testClick = function () {
  console.log(`test click`);
};

const pageSetup = function () {
  curFB = this.getAttribute('data-fact-button');
  console.log(`current button is ${curFB}`);

  for (let y = 0; y < factCont.length; y++) {
    // console.log(factCont[y]);
    curCont = factCont[y].getAttribute('data-container');
    // console.log(`current container is ${curCont}`);

    let originalText = factCont[y].innerText;
    let initBtnTxt = factPageBtns[y].innerText;

    if (curCont === curFB) {
      console.log(`current container is: ${curCont}`);
      console.log(`it's a match`);
      // console.log(factCont[y]);

      function delta() {
        factCont[y].innerText = '';
        // factCont[y].classList.add('delta');
        factPageBtns[y].innerText = 'close';
        factCont[y].appendChild(para);
        // console.log(`factContY is ${factCont[y]}`);
      }

      const unDelta = function () {
        para.innerText = '';
        factCont[y].innerText = originalText;
        factPageBtns[y].innerText = initBtnTxt;
        curFB = '';
        curCont = '';
        console.log(`curFB is now ${curFB} curCont is now ${curCont}`);
      };

      switch (curCont) {
        case 'anchorman':
          para.innerText = facts.anchorman;
          delta();
          break;
        case 'cloverfield':
          para.innerText = facts.cloverfield;
          delta();
          break;
        case 'donnie-darko':
          console.log(`current cont is now ${curCont}`);
          para.innerText = facts.donnieDarko;
          delta();
          break;
        case 'bittersweet':
          para.innerText = facts.bittersweetSymphony;
          delta();
          break;
        case 'spirit':
          para.innerText = facts.teenSpirit;
          delta();
          break;
        case 'hammer':
          para.innerText = facts.hammer;
          delta();
          break;
        case 'south-park':
          para.innerText = facts.southPark;
          delta();
          break;
        case 'sopranos':
          para.innerText = facts.sopranos;
          delta();
          break;
        case 'dexter':
          para.innerText = facts.dexter;
          delta();
          break;
        case 'god-of-war':
          para.innerText = facts.godOfWar;
          delta();
          break;
        case 'half-life':
          para.innerText = facts.halfLife;
          delta();
          break;
        case 'mario':
          para.innerText = facts.mario64;
          delta();
          break;
        default:
          '';
      }

      for (const fpb of factPageBtns) {
        if (fpb.innerText === 'close') {
          fpb.addEventListener('click', unDelta);
        } else {
          curCont = curFB;
        }
      }
    }
  }
};

for (const fb of factPageBtns) {
  console.log(`fb is ${fb}`);
  fb.addEventListener('click', pageSetup);
}
