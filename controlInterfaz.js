/* funcion para eventos de boton al hacer click */
    function comprobarBotones(valorPulsado) {
      if (valorPulsado.className === 'boton_operacion') {
        escribirOperacion(valorPulsado.innerHTML);
      } else if (valorPulsado.className === 'boton_numero') {
        escribirOperando(valorPulsado.innerHTML);
      }
    }
    /* funcion para eventos de teclado */
    function comprobarTecla(evento) {
      if (evento === 'Enter') {
        comprobarModoCalculo();
      }
      if (/^(\+|-|\*|\/)$/.test(evento)) {
        escribirOperacion(evento);
      } else if (/^(\d|\.)$/.test(evento)) {
        escribirOperando(evento);
      }
    }
    function comprobarPantalla(datos) {
      return datos === 'No valido' || datos === 'NaN' || datos === '0' || 
              datos === 'Infinity' || datos === 'Funcion no valida';
    }
    function escribirOperando(input) {
      var pantallaInferior = document.getElementById('pantallaInferior');
      if (comprobarPantalla(pantallaInferior.innerHTML)) {
        pantallaInferior.innerHTML = input;
      } else {
        pantallaInferior.innerHTML += input;
      }
    }
    function escribirOperacion(input) {
      var pantallaInferior = document.getElementById('pantallaInferior');
      var pantallaSuperior = document.getElementById('pantallaSuperior');
      var operando = pantallaInferior.innerHTML;
      if (input === '-' && pantallaInferior.innerHTML === '0') {
        pantallaInferior.innerHTML = input;
      } else if (comprobarPantalla(pantallaSuperior.innerHTML)) {
        pantallaSuperior.innerHTML = operando + input;
        document.getElementById('pantallaInferior').innerHTML = '0';
      } else {
        pantallaSuperior.innerHTML += operando + input;
        document.getElementById('pantallaInferior').innerHTML = '0';
      }
      
    }

    function resetearInput() {
      document.getElementById('pantallaSuperior').innerHTML = '0';
      document.getElementById('pantallaInferior').innerHTML = '0';
    }
    function mostrarResultado() {
      var input = document.getElementById('pantallaInferior').innerHTML;
      document.getElementById('pantallaSuperior').innerHTML += input;
      comprobarModoCalculo();
    }
    
    function comprobarModoCalculo() {
        inputIntroducido = formatearCadena(document.getElementById('pantallaSuperior').innerHTML);
        if (/X=|Y=/.test(inputIntroducido)) {
            calcularFuncion();
        } else {
            
            calcular();
        }
    }