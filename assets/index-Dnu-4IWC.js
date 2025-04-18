(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const t of i.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&n(t)}).observe(document,{childList:!0,subtree:!0});function a(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(e){if(e.ep)return;e.ep=!0;const i=a(e);fetch(e.href,i)}})();function c(r){r.innerHTML=`
    <div class = "gameCompUl">    
    
    <ul>
    <li class ="showPage2Li" id="li1"><h3>3D</h3></li>
    <li class ="showPage2Li" id="li2"><h3>DESIGN</h3></li>
    <li class ="showPage2Li" id="li3"><h3>POBLICARION</h3></li>
    <li class ="showPage2Li" id="li4"><h3>ART</h3></li>

    </ul>
  </div>
    `,document.querySelector("#header h1").innerHTML=`
      <h2>My stack:
      </h2>
      <ul>
        <li class="underHearUl"><p id="underHeader">Fortend development:</p></li>
        <li class="underHearUl" id="iconHtml"></li>
        <li class="underHearUl" id="iconCss"></li>
        <li class="underHearUl" id="iconJs"></li>
        <li class="underHearUl" id="iconFlutter"></li>
      </ul>

      <ul>
        <li class="underHearUl"><p id="underHeader">Design:</p></li>
        <li class="underHearUl" id="iconFigma"></li>
        <li class="underHearUl" id="iconTilda"></li>
        <li class="underHearUl" id="iconPs"></li>
      </ul>

      <ul>
        <li class="underHearUl"><p id="underHeader">See more:</p></li>
        <li class="underHearUl" id="iconArtstation"></li>
      </ul>
      `}function s(r){r.innerHTML=`
  <div>
    <img src="https://i.pinimg.com/736x/8a/39/5c/8a395c1f432ecb52c04c8a023ef4647b.jpg" class ="gameComp" alt="JavaScript logo" />

  </div>
`,document.querySelector("#header h1").innerHTML=`
      <h2>My contact:
      </h2>

      <ul>
        <li class="underHearUl"><p id="underHeader">mail:</p></li>
        <li class="underHearUl"><a href="https://e.mail.ru/cgi-bin/sentmsg?To=nya.olesya@bk.ru&from=otvet&afterReload=1" target="_blank">nya.olesya@bk.ru</a></li>
      </ul>

      <ul>
        <li class="underHearUl"><p id="underHeader">tg:</p></li>
        <li class="underHearUl"><a href="https://t.me/Shadowtav" target="_blank">@Shadowtav</a></li>
      </ul>
      `}function o(r){r.innerHTML=`
      <img id="iconMe" src ="https://i.pinimg.com/736x/4c/a1/07/4ca1075720f674d2e101118c3e38d37f.jpg">
      <h1>I'm Lesya, a beginner designer and frontend developer
        <p id="underHeader">Glad to see you!</p>
      </h1>
      <ul>
        <li><button class="btn" id="workBtn"><p>WORK</p></button></li>
        <li><button class="btn" id="contactBtn"><p>CONTACT</p></button></li>
        <!-- <li><button><p>WORK</p></button></li> -->
      </ul>
    `,document.querySelector("#MyAPPP").innerHTML=`
    `,r.querySelector("#workBtn").addEventListener("click",()=>c(document.querySelector("#MyAPPP"))),r.querySelector("#contactBtn").addEventListener("click",()=>s(document.querySelector("#MyAPPP"))),r.querySelector("#iconMe").addEventListener("click",()=>o(document.querySelector("#header")))}o(document.querySelector("#header"));
