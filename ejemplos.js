// const list = ["carlos", "pepe", "marcos"]; 
// displayName.apply(this, list);

// function displayName() {
    //         for(var i = 0; i < list.length; i++)  {
        //             console.log(list[i]);
        //         }
        // }



var suscripciones = {free:"No puedes acceder a ningun curso", Expert:"puedes acceder a casi todos los cursos", platinum:"Acceso ilimitado"};

const userselection = "free";
function conseguirTipoDeSuscripcion(suscripcion) {
   if (suscripciones[suscripcion]) {
      console.log(suscripciones[suscripcion]);
      return;
   }

   console.warn("ese tipo de suscripcion no existe")
}
