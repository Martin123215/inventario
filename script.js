import { db } from "./firebase.js";

import {
  ref,
  push,
  remove,
  onValue
}
from "https://inven-d458a-default-rtdb.firebaseio.com";

const form =
document.getElementById("formAlmacen");

const lista =
document.getElementById("listaAlmacenes");

const almacenesRef =
ref(db, "almacenes");

let almacenes = {};

form.addEventListener(
  "submit",
  async (e) => {

    e.preventDefault();

    const nombre =
    document
    .getElementById("nombreAlmacen")
    .value
    .trim();

    if(!nombre){
      return;
    }

    await push(
      almacenesRef,
      {
        nombre
      }
    );

    form.reset();

  }
);

onValue(
  almacenesRef,
  (snapshot)=>{

    almacenes =
    snapshot.val() || {};

    render();

  }
);

function render(){

  let html = `
  <table>

    <tr>
      <th>Almacén</th>
      <th>Acción</th>
    </tr>
  `;

  Object.keys(almacenes)
  .forEach(id=>{

    html += `
      <tr>

        <td>
          ${almacenes[id].nombre}
        </td>

        <td>

          <button
            class="delete"
            onclick="eliminar('${id}')"
          >
            Eliminar
          </button>

        </td>

      </tr>
    `;

  });

  html += "</table>";

  lista.innerHTML = html;

}

window.eliminar =
async function(id){

  if(
    !confirm(
      "¿Eliminar almacén?"
    )
  ){
    return;
  }

  await remove(
    ref(
      db,
      "almacenes/" + id
    )
  );

};
