import {Theme} from './thems.js';
const body= document.querySelector('body');
const themeSwitchToggle=document.querySelector(`#theme-switch-toggle`);

// body.classList.add(Theme.LIGHT);
const currentTheme=localStorage.getItem("currentTheme");

if (currentTheme){
  body.classList.add(currentTheme)}
else {body.classList.add(Theme.LIGHT);}


const checkthemeSwitchToggle=()=>{
  if (currentTheme===Theme.DARK)
  {themeSwitchToggle.checked=true}}

  checkthemeSwitchToggle();

const changeTheme=()=>{
  if(body.classList.contains(Theme.LIGHT)){
    body.classList.replace(Theme.LIGHT,Theme.DARK);
    localStorage.setItem("currentTheme", `${Theme.DARK}`);
  }
  else 
   if(body.classList.contains(Theme.DARK)){
      body.classList.replace(Theme.DARK,Theme.LIGHT);
     localStorage.setItem("currentTheme", `${Theme.LIGHT}`);
    }
 }
 
themeSwitchToggle.addEventListener('change',changeTheme);
