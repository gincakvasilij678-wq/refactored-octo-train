let a = 5;
let b = 2;

let sum = a + b;
let difference = a - b;
console.log("Сумма:" + sum)
console.log("Разность:" + difference)

let title = "";
if (title === "") {
    console.log("Заголовок пустой");
} else {console.log("Заголовок:" + title);}

let tasks = 7;

if (tasks === 0) {
    console.log("Список пуст,можно отдыхать");
} else if (tasks > 0 && tasks <= 3) {
    console.log("Есть задачи для выполнения");
}else if (tasks > 3) {
    console.log("Список задачч переполнен");
}