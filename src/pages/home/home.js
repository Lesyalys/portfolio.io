 import './home.css'

export function home(element) {
  element.innerHTML = `
  <div>
    <img src="https://i.pinimg.com/736x/8a/39/5c/8a395c1f432ecb52c04c8a023ef4647b.jpg" class ="gameComp" alt="JavaScript logo" />

  </div>
`
document.querySelector('#header h1').innerHTML = `
      <h2>My contact:
      </h2>

      <ul>
        <li class="underHearUl"><p id="underHeader">mail:</p></li>
        <li class="underHearUl"><img src ="/public/nodejs.png"></li>
      </ul>

      <ul>
        <li class="underHearUl"><p id="underHeader">tg:</p></li>
        <li class="underHearUl"><img src ="/public/nodejs.png"></li>
      </ul>
      `
  
}

