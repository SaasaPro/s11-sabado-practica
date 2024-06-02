const addBtn = document.getElementById("btn-add");
const delBtn = document.getElementById("btn-del");
const buyBtn = document.getElementById("btn-comprar");
const amount = document.getElementById("cant");
const totalPay = document.getElementById("total");

let cantidad = 0;
let total = 0;
stateButtons(true);


addBtn.addEventListener("click", () => {
    stateButtons(false);
    cantidad ++;
    total = cantidad * 50.00;
    showdetails();
})

delBtn.addEventListener("click", () => {
    cantidad --;
    total = cantidad * 50.00;
    
    showdetails();
    if (cantidad === 0) {
        stateButtons(true);
    }
})


buyBtn.addEventListener("click", () => {
    alert(`Su compra por el valor de S/. ${total} se registro exitosamente`);
    total = 0;
    cantidad = 0;
    showdetails();
    stateButtons(true);
})


function stateButtons(state){
    buyBtn.disabled = state;
    delBtn.disabled = state;

    if (state) {
        delBtn.classList.add("is-disabled");
        buyBtn.classList.add("is-disabled");
    }else{
        delBtn.classList.remove("is-disabled");
        buyBtn.classList.remove("is-disabled");
    }
}

function showdetails(){
    amount.innerHTML = cantidad;
    totalPay.innerHTML = total;
}
