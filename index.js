let email = prompt("Bienvenido a LV Shop, por favor ingresa tu email.");
let productoDeseado = prompt(
    "Elige poniendo el numero correspondiente el producto que deseas:\n1: Iphone 13.\n2: Iphone 13 Pro.\n3: Iphone 13 Pro Max.");
if (productoDeseado == 1){
    let producto = ("Iphone 13");
    let procederALaCompra = prompt(`Tienes suerte! Estas comprando el ${producto} ¿Quieres proceder al pago? (SI/NO).`);
    if (procederALaCompra === "SI" || procederALaCompra === "si" || procederALaCompra === "sí" || procederALaCompra === "Sí") {
        let FormaDePago = parseInt(prompt("Ya casi! Si pagas en efectivo coloca 1. Si pagas de otra forma coloca 2."));
        if (FormaDePago === 1){
            let agregarAlCarrito = prompt(`Felicitaciones, te contactaremos a ${email} para confirmar tu compra. Si deseas agregar un ${producto} más al carrito, presiona 1, por el contrario, presiona 2.`);
            if (agregarAlCarrito == 1) {
                for (agregarAlCarrito == 1; agregarAlCarrito <= 3; agregarAlCarrito++){
                    agregarAlCarrito++;
                    alert(`Ahora tienes ${agregarAlCarrito}x ${producto}.`);
                    break
                }
            }
            else if (agregarAlCarrito == 2){
                alert("Ok! Muchas gracias por comprar.")
            }
            else {
                alert("Introduce una opción válida.")
            }
            
        } 
        else if (FormaDePago === 2){
            let OtraFormaDePago = parseInt(prompt("¿Como deseas pagar? Introduce el número:\n1. TARJETA\n2. TRANSFERENCIA\n3. CRIPTO"));
            switch (OtraFormaDePago) {
                case 1:
                    alert(`Felicitaciones, estas pagando con TARJETA. Te contactaremos a ${email} para confirmar tu compra! Saludos.`);
                    break;
                
                case 2:
                    alert(`Felicitaciones, estas pagando con TRANSFERENCIA. Te contactaremos a ${email} para confirmar tu compra! Saludos.`);
                    break;

                case 3:
                    alert(`Felicitaciones, estas pagando con CRIPTO. Te contactaremos a ${email} para confirmar tu compra! Saludos.`);
                    break;
                
                default:
                    alert("Introduce una opción válida.");
                    break;
            }
        }
        else {
            alert("Introduce una opción válida.");
        }
    }
    else if (procederALaCompra === "NO" || procederALaCompra === "no" || procederALaCompra === "No"){
        alert("Ohhh! Lamentamos no haber cumplido tus expectativas.")
    }
    else {
        alert("Introduce una opción válid.a")
    }
}
else if (productoDeseado == 2){
    let producto = ("Iphone 13 Pro");
    let procederALaCompra = prompt(`Tienes suerte! Estas comprando el ${producto} ¿Quieres proceder al pago? (SI/NO).`);
    if (procederALaCompra === "SI" || procederALaCompra === "si" || procederALaCompra === "sí" || procederALaCompra === "Sí") {
        let FormaDePago = parseInt(prompt("Ya casi! Si pagas en efectivo coloca 1. Si pagas de otra forma coloca 2."));
        if (FormaDePago === 1){
            let agregarAlCarrito = prompt(`Felicitaciones, te contactaremos a ${email} para confirmar tu compra. Si deseas agregar un ${producto} más al carrito, presiona 1, por el contrario, presiona 2.`);
            if (agregarAlCarrito == 1) {
                for (agregarAlCarrito == 1; agregarAlCarrito <= 3; agregarAlCarrito++){
                    agregarAlCarrito++;
                    alert(`Ahora tienes ${agregarAlCarrito}x ${producto}.`);
                    break
                }
            }
            else if (agregarAlCarrito == 2){
                alert("Ok! Muchas gracias por comprar.")
            }
            else {
                alert("Introduce una opción válida.")
            }
            
        } 
        else if (FormaDePago === 2){
            let OtraFormaDePago = parseInt(prompt("¿Como deseas pagar? Introduce el número:\n1. TARJETA\n2. TRANSFERENCIA\n3. CRIPTO"));
            switch (OtraFormaDePago) {
                case 1:
                    alert(`Felicitaciones, estas pagando con TARJETA. Te contactaremos a ${email} para confirmar tu compra! Saludos.`);
                    break;
                
                case 2:
                    alert(`Felicitaciones, estas pagando con TRANSFERENCIA. Te contactaremos a ${email} para confirmar tu compra! Saludos.`);
                    break;

                case 3:
                    alert(`Felicitaciones, estas pagando con CRIPTO. Te contactaremos a ${email} para confirmar tu compra! Saludos.`);
                    break;
                
                default:
                    alert("Introduce una opción válida.");
                    break;
            }
        }
        else {
            alert("Introduce una opción válida.");
        }
    }
    else if (procederALaCompra === "NO" || procederALaCompra === "no" || procederALaCompra === "No"){
        alert("Ohhh! Lamentamos no haber cumplido tus expectativas.")
    }
    else {
        alert("Introduce una opción válid.a")
    }
}
else if (productoDeseado == 3){
    let producto = ("Iphone 13 Pro Max");
    let procederALaCompra = prompt(`Tienes suerte! Estas comprando el ${producto} ¿Quieres proceder al pago? (SI/NO).`);
    if (procederALaCompra === "SI" || procederALaCompra === "si" || procederALaCompra === "sí" || procederALaCompra === "Sí") {
        let FormaDePago = parseInt(prompt("Ya casi! Si pagas en efectivo coloca 1. Si pagas de otra forma coloca 2."));
        if (FormaDePago === 1){
            let agregarAlCarrito = prompt(`Felicitaciones, te contactaremos a ${email} para confirmar tu compra. Si deseas agregar un ${producto} más al carrito, presiona 1, por el contrario, presiona 2.`);
            if (agregarAlCarrito == 1) {
                for (agregarAlCarrito == 1; agregarAlCarrito <= 3; agregarAlCarrito++){
                    agregarAlCarrito++;
                    alert(`Ahora tienes ${agregarAlCarrito}x ${producto}.`);
                    break
                }
            }
            else if (agregarAlCarrito == 2){
                alert("Ok! Muchas gracias por comprar.")
            }
            else {
                alert("Introduce una opción válida.")
            }
            
        } 
        else if (FormaDePago === 2){
            let OtraFormaDePago = parseInt(prompt("¿Como deseas pagar? Introduce el número:\n1. TARJETA\n2. TRANSFERENCIA\n3. CRIPTO"));
            switch (OtraFormaDePago) {
                case 1:
                    alert(`Felicitaciones, estas pagando con TARJETA. Te contactaremos a ${email} para confirmar tu compra! Saludos.`);
                    break;
                
                case 2:
                    alert(`Felicitaciones, estas pagando con TRANSFERENCIA. Te contactaremos a ${email} para confirmar tu compra! Saludos.`);
                    break;

                case 3:
                    alert(`Felicitaciones, estas pagando con CRIPTO. Te contactaremos a ${email} para confirmar tu compra! Saludos.`);
                    break;
                
                default:
                    alert("Introduce una opción válida.");
                    break;
            }
        }
        else {
            alert("Introduce una opción válida.");
        }
    }
    else if (procederALaCompra === "NO" || procederALaCompra === "no" || procederALaCompra === "No"){
        alert("Ohhh! Lamentamos no haber cumplido tus expectativas.")
    }
    else {
        alert("Introduce una opción válid.a")
    }
}
else {
    alert("Lo sentimos, no encontramos el producto :(")
}
