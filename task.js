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

let isCompleted = 1;
if ( isCompleted === 1) {
    console.log("Задача выполнена");
} else if (isCompleted < 1 ) {
    console.log("Задача ещё в работе");
}

let tasksTwo = 3;     
let urgent = 1;     

if (tasksTwo > 0 && urgent) {
    console.log("Есть срочные задачи");
} else if (tasksTwo > 0 && !urgent) {
    console.log("Задачи есть, но они не срочные");
} else if (tasksTwo === 0) {
    console.log("Все задачи завершены");
}

let isAdmin = 1;
let isModerator = 1;
if ( isAdmin === 1 || isModerator === 1 ) {
    console.log("Доступ разрешён");
} else if (isAdmin === 0 && isModerator === 0 ) {
    console.log("Доступ запрещён");
}
//Урок 3

function summa(a,b) {
return a + b
}

console.log(summa(2,3))
console.log(summa(8,34))

function isTaskDones (status) {
    return status === "выполнена";
}

let result =  isTaskDones("выполнена") ;
console.log(result)

function taskSummary(total,done) {

    let active = total - done;
    return (
        "Всего: " + total + " | Активных:" + active +  " | Выполненых:" + done
    );
}
console.log (taskSummary(8,3));