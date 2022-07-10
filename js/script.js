console.log("Задание №1");

let firstName=prompt("Введите имя:"),
    age=prompt("Введите возраст:"),
    city=prompt("Введите город проживания:"),
    phone=prompt("Введите телефон:"),
    email=prompt("Введите email:"),
    company=prompt("Введите компанию:"); 
console.log(`Меня зовут ${firstName}. Мне ${age} лет. Я проживаю в городе ${city} и работаю в компании ${company}.\n Мои контактные данные: 
${phone}, ${email}.»`);
console.log("--------------------------------------------------");
console.log("Задание №2");
    let YearOfBirth=2022-Number(age);
    console.log(`Год рождения ${YearOfBirth}`);
console.log("--------------------------------------------------");


console.log("Задание №3");
    let string="133123";
    let firstThree=Number(string[0])+Number(string[1])+Number(string[2]);
    let lastThree=Number(string[3])+Number(string[4])+Number(string[5]);
    if( firstThree === lastThree ){
        console.log('Да');
    }else{
        console.log('Нет');
    }

console.log("--------------------------------------------------");
console.log("Задание №4");
    let a=1;//1,0,-3
    if(a>0){
        console.log('Верно');
    }else{
        console.log('Неверно');
    }
console.log("--------------------------------------------------");

console.log("Задание №5");
    a=10;
    let b=2;
    console.log(`Сумма ${a+b}`);
    console.log(`Разность ${a-b}`);
    console.log(`Произведение ${a*b}`);
    console.log(`Частное ${a/b}`);
    if(a+b>1){
        console.log(`Квадрат ${(a+b)**2}`);
    }
console.log("--------------------------------------------------");

console.log("Задание №6");
    a=15;
    b=6;
   
    if((a > 2 && a < 11)||(b >= 6 && b < 14)){
        console.log('Верно');
    }else{
        console.log('Неверно');
    }
console.log("--------------------------------------------------");
console.log("Задание №7");
let n=17;
    switch(true){
        case n>=0 && n<=14:
            console.log('Первая четверть часа');
            break;
        case n>=15 && n<=29:
            console.log('Вторая четверть часа');
            break;
        case n>=30 && n<=44:
            console.log('Третья четверть часа');
            break;
        case n>=45 && n<=59:
            console.log('Четвертая четверть часа');
            break;
        default:
            console.log('Таких чисел в часе нет');
            break;

    }
console.log("--------------------------------------------------");
console.log("Задание №8");
let day=17;
switch (true){
    case day>=1 && day<=10:
        console.log('Первая декада');
        break;
    case day>=11 && day<=20:
        console.log('Вторая декада');
        break;
    case day>=21 && day<=31:
        console.log('Третья декада');
        break;    
}
console.log("--------------------------------------------------");
console.log("Задание №9");
    day=354;
    let dayInYear,
        dayInMounth,
        dayInWeek,
        dayInHours,
        dayInMinute,
        dayInSecond;


        dayInYear=day/365;
        switch(true){
            case dayInYear<1:
                console.log('Меньше года');
                break;
            case dayInYear===1:
                console.log('Один год');
                break;
            default:
                console.log(`В годах: ${dayInYear} года/лет`);
        }

        dayInMounth=day/31;
        switch(true){
            case dayInMounth<1:
                console.log('Меньше месяца');
                break;
            case dayInMounth===1:
                console.log('Один месяц');
                break;
            default:
                console.log(`В месяцах: ${dayInMounth} месяца/месяцев`);
        }
       
        dayInWeek=day/7;
        switch(true){
            case dayInWeek<1:
                console.log('Меньше недели');
                break;
            case dayInWeek===1:
                console.log('Одна неделя');
                break;
            default:
                console.log(`В неделях: ${dayInWeek} недели/недель`);
        }


        dayInHours=day*24;
        console.log(`В часах: ${dayInHours} часов`);
        
        dayInMinute=day*1440;
        console.log(`В минутах: ${dayInMinute} минут`);
        dayInSecond=day*86400;
        console.log(`В секундах: ${dayInSecond} секунд`);
console.log("--------------------------------------------------");
console.log("Задание №10");
    day=256;
    let dayInMounth_new;
    if(day<=365 && !(Number.isInteger(day/31))){       
         dayInMounth_new=Math.trunc(day/31)+1;
         console.log(`${dayInMounth_new} месяц`);
    }else if(Number.isInteger(day/31)){
        dayInMounth_new=Math.trunc(day/31);
        console.log(`${dayInMounth_new} месяц`);
    }else{
        console.log('Задано слишком большое или слишком малое значение');
    }

    switch(true){
        case dayInMounth_new<=2 || dayInMounth_new===12:
            console.log("Зима");
            break;
        case dayInMounth_new>=3 && dayInMounth_new<=5:
            console.log("Весна");
            break;
        case dayInMounth_new>=6 && dayInMounth_new<=8:
        console.log("Лето");
            break;
        case dayInMounth_new>=9 && dayInMounth_new<=11:
        console.log("Осень");
            break;
    }

console.log("--------------------------------------------------");

