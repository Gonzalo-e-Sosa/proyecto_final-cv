const API_URL = 'https://randomuser.me/api/?nat=es,us,mx,br';
const h1 = document.getElementById("nombre");
const h2 = document.getElementById("trabajo");
const p = document.getElementById("bio");
const contendor_img = document.getElementById("contenedor_img");
const img = document.getElementById("img_perfil");
const a_email = document.getElementById("email");
const a_tel = document.getElementById("telefono");
const a_cel = document.getElementById("celular");
const p_pais = document.getElementById("pais");
const p_estado = document.getElementById("estado");
const p_ciudad = document.getElementById("ciudad");
const p_dir = document.getElementById("direccion");

fetch(API_URL)
  .then((response) => response.json())
  .then((user) => {
    const Persona = user.results['0'];
    
    const nombre = Persona.name.first;
    const apellido = Persona.name.last;
    const email = Persona.email;
    const telefono = Persona.phone;
    const celular = Persona.cell;
    const edad = Persona.dob.age > 40 ? 40 : Persona.dob.age;
    const genero = Persona.gender === 'male' ? 'hombre' : 'mujer';
    let eng_pais = Persona.location.country;
    const estado = Persona.location.state;
    const ciudad = Persona.location.city;
    const direccion = Persona.location.street.name + ' ' + Persona.location.street.number;
    const img_url_l = Persona.picture.large;
    const img_url_m = Persona.picture.medium;
    const img_url_t = Persona.picture.thumbnail;

    switch(eng_pais){
      case "Spain": eng_pais = "España";
        break; 
      case "United States": eng_pais = "Estados Unidos";
        break;
      case "Brazil": eng_pais = "Brasil";
        break;
      case "Mexico": eng_pais = "México";
        break;
    }
    const pais = eng_pais;

    console.log(Persona);
    console.log(nombre);
    console.log(apellido);
    console.log(email);
    console.log(telefono);
    console.log(edad);
    console.log(genero);
    console.log(pais);
    

    h1.innerHTML = nombre + ' ' + apellido;
    h2.innerHTML = genero === 'hombre' ? "Desarrollador web" : "Desarrolladora web"
    p.innerHTML = "Hola, mi nombre es " + nombre + ", vivo en " + estado + ', ' + pais + ".<br>" + 
                  "Me especializo en el diseño de páginas web utilizando HTML, CSS y JS, además, tengo conociemientos de Git."

    img.setAttribute("srcset",img_url_t + " 48w, " + img_url_m + " 72w, " + img_url_l + " 128w");
    img.setAttribute("alt",nombre + ' ' + apellido + ", imagen de perfil.")
    
    a_email.setAttribute("href", "mailto: " + email);
    a_email.innerHTML = email;
    
    a_tel.setAttribute("href", "tel:+" + telefono);
    a_tel.innerHTML = telefono;
    
    a_cel.setAttribute("href", "tel:+" + celular);
    a_cel.innerHTML = celular;

    p_pais.innerHTML = pais;
    p_estado.innerHTML = estado;
    p_ciudad.innerHTML = ciudad;
    p_dir.innerHTML = direccion;
  });