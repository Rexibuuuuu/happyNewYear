let name = document.querySelector('#name');
let player = document.querySelector('#player');
let startWindow = document.querySelector('#start');
let questionWindow = document.querySelector('#questions');
let d = document.querySelector('.inp_group'); 
let score = document.querySelector('#score');

let num = 0;
let sum = 0;

let questions = [
    {
        'question':'Что, по английским обычаям, делают люди, случайно оказавшиеся под рождественским украшением из веток омелы?',
        'answers':{
            'v1':{'answ':'Целоваться', 'correct':true},
            'v2':{'answ':'загадывать желание', 'correct':false},
            'v3':{'answ':'Делиться секретами', 'correct':false} 
        }
    },
    {
        'question':'На какой вечеринке у каждого два лица?',
        'answers':{
            'v1':{'answ':'Дискотека', 'correct':false},
            'v2':{'answ':'Маскарад', 'correct':true},
            'v3':{'answ':'Утренник', 'correct':false}
        }
    },
    {
        'question':'Главные атрибуты деда Мороза',
        'answers':{
            'v1':{'answ':'Мешок и посох', 'correct':true},
            'v2':{'answ':'борода и красный нос', 'correct':false},
            'v3':{'answ':'валенки и шуба', 'correct':false} 
        }
    },
    {
        'question':'На новый год итальянцы выбрасывают старую мебель из дома. Зачем?',
        'answers':{
            'v1':{'answ':'Избавляются от злых духов', 'correct':false},
            'v2':{'answ':'На удачу', 'correct':false}, 
            'v3':{'answ':'Старая традиция', 'correct':true}
        }
    },
    {
        'question':'Страна, в которой впервые придумали украсить ель из леса?',
        'answers':{
            'v1':{'answ':'Россия', 'correct':false}, 
            'v2':{'answ':'Франция', 'correct':false},
            'v3':{'answ':'Германия', 'correct':true}
        }
    },
    {
        'question':'Сколько резиденций имеет Дед Мороз по всей России?',
        'answers':{
            'v1':{'answ':'4', 'correct':true},
            'v2':{'answ':'3', 'correct':false},
            'v3':{'answ':'5', 'correct':false} 
        }
    },
    {
        'question':'Как называют ритуальный танец, который проводится вокруг ели?',
        'answers':{
            'v1':{'answ':'Чечетка', 'correct':false},
            'v2':{'answ':'Хоровод', 'correct':true},
            'v3':{'answ':'Вальс', 'correct':false}
        }
    },
    {
        'question':'Какой напиток является неотъемлемым атрибутом новогоднего вечера для гостей, которые любят риск?',
        'answers':{
            'v1':{'answ':'Вино', 'correct':false},
            'v2':{'answ':'Глинтвейн', 'correct':false},
            'v3':{'answ':'Шампанское', 'correct':true}
        }
    },
    {
        'question':' что в Греции запекают в новогоднем кексе?',
        'answers':{
            'v1':{'answ':'Монетку', 'correct':true},
            'v2':{'answ':'Ключик', 'correct':false},
            'v3':{'answ':'Изюм', 'correct':false}
        }
        
    }
];

let question = document.querySelector('#question');
let var1 = document.querySelector('#var1');
let var2 = document.querySelector('#var2');
let var3 = document.querySelector('#var3');

let variant1 = document.querySelector('#variant1');
let variant2 = document.querySelector('#variant2');
let variant3 = document.querySelector('#variant3');

function nextQuestion(){
    question.innerHTML = questions[num]['question'];

    variant1.innerHTML = questions[num]['answers']['v1']['answ'];
    var1.value = questions[num]['answers']['v1']['correct'];

    variant2.innerHTML = questions[num]['answers']['v2']['answ'];
    var2.value = questions[num]['answers']['v2']['correct'];

    variant3.innerHTML = questions[num]['answers']['v3']['answ'];
    var3.value = questions[num]['answers']['v3']['correct'];

    num+=1;
}

function StartGame(){
    if(name.value !== ''){
        startWindow.style.display = 'none';
        questionWindow.style.display = 'block';
        player.innerHTML = name.value;
        nextQuestion();
    }else{
        let p = document.createElement('p');
        p.innerHTML = 'Введите имя!';
        p.style.color = 'red';
        p.style.fontFamily = 'Nexa';
        d.append(p);
    }
}


function checkAnswer(){
    let selectedValue = document.querySelector('input[name="answers"]:checked');
    console.log(selectedValue.value);
    if(selectedValue.value=='true'){
        sum+=1;
        score.innerHTML=sum;
        alert("Верно!");
        
    }else{
        alert("Ответ неверный!");
    }

    if(num<questions.length){
        nextQuestion();
    }else{
        alert(`Ваш результат: ${sum}!`);
    }
}





















/*
1. Что, по английским обычаям, делают люди, случайно оказавшиеся под рождественским украшением из веток омелы? (целоваться)
2. На какой вечеринке у каждого два лица? (Маскарад)
3. Главные атрибуты деда Мороза (Мешок и посох)
4. На новый год итальянцы выбрасывают старую мебель из дома. Зачем? (Это старая традиция )
5.
6.
7.
8.
9.
10.
11.
12.
13.
14.
15.
*/