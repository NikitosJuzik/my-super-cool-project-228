var info = confirm("Привет это информация про Майкла Джордана.");
console.log(info);

function checkForm(el) {
    var answer = el.answer.value;
    var entry = el.entry.value;

    console.log("Понравилась информация про Майкла Джордана?:" + answer + ";" + "Про какого баскетболиств мне ещё сделать информацию:" + entry + ".");

    return false;
}