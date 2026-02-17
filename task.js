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



let task3 = {
    id: 1,
    title: "Купить молоко",
    status:"активна",
};

console.log(task3.title);
task3.status = "выполнена"
console.log(task3.status);

let tasks = [ 
    {id: 1,title: "Купить молоко",status:"активна"},
    {id: 2,title: "Позвонить врачу",status:"выполнена"},
    {id: 3,title: "Сделать уроки",status:"активна"},
    {id: 4,title: "Прочитать книгу",status:"выполнена"},
    {id: 5,title: "Посмотреть фильм",status:"активна"},
    {id: 6,title: "Погулять с собакой",status:"выполнена"},
]

console.log(tasks[0].title);
console.log(tasks[1].status);

tasks[0].status = "выполнена";
console.log(tasks[0]); 


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



function filterByStatus(tasks, status) {
    return tasks.filter((task) => task.status === status);
}
console.log(filterByStatus(tasks, "активна"));//

function sortByTitle(tasks) {
    tasks.sort(function(a,b){
        if (a.title > b.title){
            return 1
        }if (a.title < b.title){
            return -1
        }
        return 0
    })

    return tasks
}

console.log(sortByTitle(tasks))

function searchByTitle(tasks, query) {
    let q = query.toLowerCase();
    return tasks.filter(task =>
        task.title.toLowerCase().indexOf(q) !== -1
    )
}

console.log(searchByTitle(tasks, "Ку"));


for (let i = 0; i < tasks.length; i++) {
    console.log(tasks[i].id + ": " + tasks[i].title)
}

for (let task of tasks) {
    console.log(task.id + ": " + task.title)
}

let i = 0;
let total = 0;
let active = 0;
let done = 0;

while (i < tasks.length) {
    total++;
    if (tasks[i].status === "выполнена") {
        done++;
    } else {
        active++
    }

    i++
}

console.log("Всего: " + total + " | Активных:" + active +  " | Выполненых:" + done)


for (let task of tasks) {
    if (task.status === "активна") {
        console.log("Активных задача: " + task.title)
    }
}

tasks.forEach(task => {
    console.log("#" + task.id + " " + task.title + "(" + task.status +")")
})

let searchTitle = "Купить молоко"

let found = null;

for (let task of tasks) {
    if (task.title === searchTitle) {
        found = task;
        break;
    }
}

if (found) {
    console.log("Найдена задача: ", found)
} else {
    console.log("Задача не найдена: ")
}

let activeTasks = [];
for (let task of tasks) {
  if (task.status === "активна") {
    activeTasks.push(task);
  }
}
console.log("Активные задачи:", activeTasks);

function findTaskByKeyword(tasks, keyword) {
  for (let task of tasks) {
    if (task.title.toLowerCase().indexOf(keyword) !== -1) {
      return task;
    }
  }
  return 'Задача не найдена';
}

console.log(findTaskByKeyword(tasks, "ф"));