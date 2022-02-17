const input = document.querySelector("input");
const add = document.querySelector(".add");
const ul = document.querySelector("ul");

add.addEventListener("click", (e) => {
    /* para evitar que se recarge la pagina */
    e.preventDefault();
    console.log(1)
    /* para que la variable del texto sea lo que la persona escriba en el input*/
    const text= input.value
    const li= document.createElement('li');
    const p= document.createElement('p');
    p.textContent= text;
    li.appendChild(p);
    ul.appendChild(li);   
  });
