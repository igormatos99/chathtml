function adicionarElemento() {
    const input = document.getElementById("escrever").value;

    const original = document.getElementById("enviadas");

    const copia = original.cloneNode(true);

    copia.textContent = input || original.textContent;

    document.getElementById("container3").appendChild(copia);
    }
