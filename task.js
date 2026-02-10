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

summa (a,b);
 console.log(summa(7,8))

function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log(max(8, 3));  // 8
console.log(max(2, 10)); // 10

max(a, b);
console.log(max(9, 11));

function printTask(title, status) {
  return "Задача: " + title + " | Статус: " + status;
}

console.log(printTask("Купить молоко", "активна"));
console.log(printTask("Сходить в спортзал", "выполнена"));

printTask(title,status);
console.log(printTask("Сделать уроки", "активна"));

function isTaskDones (status) {
    return status === "выполнена";
}

let result =  isTaskDones("выполнена") ;
console.log(result)


function greetUser(name) {
  return "Добро пожаловать, " + name + "!";
}

console.log(greetUser("Катя"));
console.log(greetUser("Иван"));


function taskSummary(total,done) {

    let active = total - done;
    return (
        "Всего: " + total + " | Активных:" + active +  " | Выполненых:" + done
    );
}
console.log (taskSummary(8,3));

 
let amount = 67;

if (amount === 0) {
    console.log("Корзина пуста");
} else if (amount < 1000) {
    console.log("Скидка не применяется");
} else if (amount >= 1000 && amount <= 5000) {
    console.log("Скидка 5%");
} else if (amount >= 5000) {
    console.log('Скидка 10%');
}

let numbers = [10, 20, 30, 40, 50];
console.log(numbers[0]);              // первый элемент — 10
console.log(numbers[numbers.length-1]); // последний элемент — 50



let cities = ["Москва","Питер","Казань"];

cities[2] = "Новосибирск";

console.log(cities);



let task = {
    id: 1,
    title: "Купить молоко",
    status:"активна",
};

console.log(task.title);
task.status = "выполнена"
console.log(task.status);

let tasks = [ 
    {id: 1,title: "Купить молоко",status:"активна"},
    {id: 2,title: "Позвонить врачу",status:"выполнена"},
    {id: 3,title: "Сделать уроки",status:"активна"},
]

console.log(tasks[0].title);
console.log(tasks[1].status);

tasks[0].status = "выполнена";
console.log(tasks[0]); 
// { id: 1, title: "Купить молоко", status: "выполнена" }

tasks.push({ id: 4, title: "Прогулка", status: "активна" });
console.log(tasks);


let user = {
    name: "Иван" ,
    tasks: tasks
}

console.log(user);


function findTaskByTitle(tasks, title) {
  if (title = title) {
    return tasks;
  } else {
    return "Задача не найдена"
  }
}
console.log(findTaskByTitle(tasks, "Купить молоко"));


