"use strict";

function gen() {
  let inp = document.getElementById("pw");
  inp.value = secpw();
}

function cpy() {
  let inp = document.getElementById("pw");
  inp.select();
  navigator.clipboard.writeText(inp.value);
}

document.addEventListener("DOMContentLoaded", function() {
  let btn = document.getElementById("gen");
  btn.onclick = gen;

  let cbtn = document.getElementById("cpy");
  cbtn.onclick = cpy;
});