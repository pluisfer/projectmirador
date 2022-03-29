

// let formulario = document.getElementById('formulario');
// formulario.addEventListener('submit', (e) => {
//     e.preventDefault();

//     datos = new FormData(formulario);

//     fetch('./includes/add.php', {
//         method: 'POST',
//         body: datos,
//     }).then(response => response.text())
//         .then(response => {
//             if (response == "ok") {
//                 Swal.fire({
//                     icon: 'success',
//                     title: 'mensaje enviado',
//                     showConfirmButton: true,
//                     timer: 1500
//                 });
//                 console.log(response);
//                 formulario.reset();
//             } else {
//                 Swal.fire({
//                     icon: 'error',
//                     title: 'mensaje no enviado',
//                     showConfirmButton: true,
//                     timer: 1500
//                 });
//                   console.log(response);
//                 formulario.reset();
//             }

//         })

// });


//   peticion con axios
      let formulario = document.getElementById("formulario");

      formulario.addEventListener("submit",  (e) => {
        e.preventDefault();
        let data = new FormData(formulario);
        const Url= "./includes/add.php";
        axios({
          method: "POST",
          url: Url,                
          data: data,
            headers: {
                'Access-Control-Allow-Origin' : 'http://miradordelmar1.com/',
                'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                }
        })
          .then( function  (response) {
         if (response.data == "respuesta") {
          Swal.fire({
                    icon: 'success',
                    title: 'mensaje enviado',
                    showConfirmButton: true,
                    timer: 1500
                })
                formulario.reset();
         }else{
          Swal.fire({
                    icon: 'error',
                    title: 'mensaje no enviado',
                    showConfirmButton: true,
                    timer: 1500
                })
                formulario.reset();
                console.log(response);
         }
        })
          .catch(err => console.log(err));
      });






