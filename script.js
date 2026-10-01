document.addEventListener('DOMContentLoaded', function () {

  /* ===================== LOGIN ===================== */
  const loginForm = document.getElementById('loginForm');
  const mensajeError = document.getElementById('mensajeError');
  const USUARIO_VALIDO = 'cliente';
  const PASSWORD_VALIDO = '1234';

  if (loginForm) {
    const checkMostrar = document.getElementById('mostrarPassword');
    const inputPassword = document.getElementById('password');
    if (checkMostrar && inputPassword) {
      checkMostrar.addEventListener('change', function () {
        inputPassword.type = this.checked ? 'text' : 'password';
      });
    }

    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();
      event.stopPropagation();

      const usuario = document.getElementById('usuario').value.trim();
      const password = document.getElementById('password').value.trim();

      if (!loginForm.checkValidity()) {
        loginForm.classList.add('was-validated');
        mensajeError.textContent = 'Por favor complete todos los campos.';
        mensajeError.hidden = false;
        return;
      }

      if (usuario === USUARIO_VALIDO && password === PASSWORD_VALIDO) {
        window.location.href = 'dashboard.html';
      } else {
        mensajeError.textContent = 'Usuario o contraseña incorrectos.';
        mensajeError.hidden = false;
      }
    });
  }

  /* ===================== FILTRO MOVIMIENTOS ===================== */
  const filtroTipo = document.getElementById('filtroTipo');
  if (filtroTipo) {
    filtroTipo.addEventListener('change', function () {
      const valor = this.value;
      const filas = document.querySelectorAll('#cuerpoTabla tr');
      let visibles = 0;

      filas.forEach(function (fila) {
        const tipo = fila.getAttribute('data-tipo');
        const mostrar = (valor === 'todos' || tipo === valor);
        fila.hidden = !mostrar;
        if (mostrar) visibles++;
      });

      const sinResultados = document.getElementById('sinResultados');
      if (sinResultados) sinResultados.hidden = visibles > 0;
    });
  }

  /* ===================== TRANSFERENCIAS ===================== */
  const formTransferencia = document.getElementById('formTransferencia');
  if (formTransferencia) {
    formTransferencia.addEventListener('submit', function (event) {
      event.preventDefault();
      event.stopPropagation();

      const mensajeExito = document.getElementById('mensajeExito');
      const mensajeErrorTrans = document.getElementById('mensajeErrorTrans');

      if (!formTransferencia.checkValidity()) {
        formTransferencia.classList.add('was-validated');
        mensajeErrorTrans.textContent = 'Por favor revise los campos marcados.';
        mensajeErrorTrans.hidden = false;
        mensajeExito.hidden = true;
        return;
      }

      mensajeErrorTrans.hidden = true;
      mensajeExito.hidden = false;
      formTransferencia.reset();
      formTransferencia.classList.remove('was-validated');

      setTimeout(function () { mensajeExito.hidden = true; }, 4000);
    });
  }

  /* ===================== PAGAR SERVICIOS ===================== */
  const formPago = document.getElementById('formPago');
  if (formPago) {
    formPago.addEventListener('submit', function (event) {
      event.preventDefault();
      event.stopPropagation();

      const mensajeExito = document.getElementById('mensajeExito');
      const mensajeErrorPago = document.getElementById('mensajeErrorPago');

      if (!formPago.checkValidity()) {
        formPago.classList.add('was-validated');
        mensajeErrorPago.textContent = 'Por favor revise los campos marcados.';
        mensajeErrorPago.hidden = false;
        mensajeExito.hidden = true;
        return;
      }

      mensajeErrorPago.hidden = true;
      mensajeExito.hidden = false;
      formPago.reset();
      formPago.classList.remove('was-validated');

      setTimeout(function () { mensajeExito.hidden = true; }, 4000);
    });
  }

  /* ===================== EXTRACTOS ===================== */
  const formExtracto = document.getElementById('formExtracto');
  if (formExtracto) {
    formExtracto.addEventListener('submit', function (event) {
      event.preventDefault();
      event.stopPropagation();

      const mensajeExtracto = document.getElementById('mensajeExtracto');
      const resultadoExtracto = document.getElementById('resultadoExtracto');

      if (!formExtracto.checkValidity()) {
        formExtracto.classList.add('was-validated');
        mensajeExtracto.hidden = true;
        resultadoExtracto.hidden = true;
        return;
      }

      mensajeExtracto.hidden = false;
      resultadoExtracto.hidden = false;
      formExtracto.classList.remove('was-validated');
    });

    const btnDescargar = document.getElementById('btnDescargar');
    if (btnDescargar) {
      btnDescargar.addEventListener('click', function () {
        const mensajeDescarga = document.getElementById('mensajeDescarga');
        mensajeDescarga.hidden = false;
        setTimeout(function () { mensajeDescarga.hidden = true; }, 4000);
      });
    }
  }

});