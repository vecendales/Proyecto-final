const botonesAgregar = document.querySelectorAll("button");
  const listaCarrito = document.getElementById("lista-carrito");
  const total = document.getElementById("total");
  const carrito = new Map();

  botonesAgregar.forEach((boton) => {
    boton.addEventListener("click", agregarAlCarrito);
  });

  function agregarAlCarrito() {
    const producto = this.parentElement;
    const imagen = producto.querySelector("img").src;
    const nombre = producto.querySelector("img").alt;
    const precio = parseFloat(producto.dataset.precio);

    if (carrito.has(nombre)) {
      const cantidad = carrito.get(nombre).cantidad + 1;
      const totalProducto = cantidad * precio;
      carrito.set(nombre, { cantidad, totalProducto });
    } else {
      const cantidad = 1;
      const totalProducto = cantidad * precio;
      carrito.set(nombre, { cantidad, totalProducto });
    }

    actualizarCarrito();
  }

  function actualizarCarrito() {
    listaCarrito.innerHTML = "";
    let totalAcumulado = 0;

    for (const [nombre, { cantidad, totalProducto }] of carrito.entries()) {
      const li = document.createElement("li");
      li.textContent = `${cantidad} x ${nombre} - $${totalProducto.toFixed(2)}`;
      listaCarrito.appendChild(li);
      totalAcumulado += totalProducto;
    }

    total.textContent = totalAcumulado.toFixed(2);
  }