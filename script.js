let speed = 120;
/*speed = 0.1;*/
let i = 0; /*перебор по буквам*/
let j = 0; /*перебор по title_text*/ 
let k = 0; /*перебор по title_text[j]*/ 
let container_certificate = [];
/*let titles = document.getElementsByClassName("titles"); */
let title_text = [
                ['- Вас приветствует Открытое Акционерное Общество с Неограниченной Ответственностью ”Канцелярия Небес”'],
                ["- Юридический адрес : галактика  Млечный путь, рукав Ореона, Солнечная Система, где-то чуть дальше Нептуна, планета Нибиру, гора Блаженства, улица У Христа за пазухой, Летняя Резиденция, корпус 3"],
                [   "- Выберите тему обращения (тык) :",
                    "1. Жалоба: почему в мой др вечно плохая погода",
                    "2. Поныть: эти дни, короче",
                    "3. У нас тут СВАДЬБА намечается"
                ],
                [
                    "Канцелярия небес искренне поздравляет ВАС. Все ли документы у вас подготовлены?",
                    "1. Фото первого поцелуя",
                    "2. Ваша родословная",
                    "3. Тест на религиозность",
                    "4. Тест на счастье",
                    "5. Пройдите аутентификацию"
                ],
                [
                    "- У нас есть все ваши самые запоминающиеся поцелуи",
                    "- Выберите фото, которое подтверждает ваш ПЕРВЫЙ поцелуй"
                ], 
                [
                    "- Документ 'Фото первого поцелуя' получен!"
                ],
                [
                    '- Подтвердите год рождения ваших родных :',
                    '- невеста играла в его комп, когда он уходил на работу',
                    '- личный дизайнер одежды жениха',
                    '- постоянно просит внуков',
                    '- прораб жениха',
                    '- называет жениха и невесту Биба и Боба',
                    '- била качелью невесту'
                ],
                [
                    '- Родословная успешно подтверждена!'
                ],
                [
                    'Что такое “ани охев отах” (тык)?',
                    '- я тебе доверяю',
                    '- я тобой горжусь',
                    '- я тебя люблю',
                    '- я тебя ценю', 
                    '- я твой друг'
                ],
                [
                    '- Тест на религиозность пройден успешно!'
                ],
                [
                    '- Сделайте и отправьте',
                    'реквизиты своих карт',
                    'фото следующего формата:'
                ],
                [
                    '- Тест на счастье пройден успешно!'
                ],
                [
                    '- Дайте клятву друг другу',
                    '- Помните, "Канцелярия небес" строго следит за исполнением!'
                ],
                [
                    '- Аутентификация пройдена успешно!'
                ],
                [
                    '- Поздравляем!',
                    '- Все документы собраны'
                ]
                ];

let block = document.querySelector('#block');
let cursor = document.getElementsByClassName("cursor")[0];

function typeWriter_title() {
    if (j === title_text.length){
        console.log("basta");
    }else if (k < title_text[j].length){

        let span = document.createElement('span');
        span.textContent = '';
        span.classList.add('text');
        if (title_text[j].length < 2){
            block.prepend(span);
        }else if (j === 6 && k !== 0){
                let year = document.createElement('input');
                year.setAttribute('type', 'text');
                year.setAttribute('placeholder', 'введите год');
                year.classList.add('year');
                cursor.insertAdjacentElement('beforeBegin', year);
                cursor.insertAdjacentElement('beforeBegin', span);
        }else if (j === 10 && k === 1){
            span.style.textDecoration = "line-through";
            cursor.insertAdjacentElement('beforeBegin', span);                      
        }else{
            cursor.insertAdjacentElement('beforeBegin', span);
        }
        function typing(){
            if (i < title_text[j][k].length) {
                span.innerHTML += title_text[j][k].charAt(i);
                i++;
                setTimeout(typing, speed);
            }else{
                k++;
                i = 0;
                let br = document.createElement('br');
                br.classList.add('br');
                span.insertAdjacentElement('afterEnd', br);
                setTimeout(typeWriter_title, 1000);
            }           
        }
        typing();        
    }else{
        function clear(){
            let texts = document.getElementsByClassName('text');
            let br = document.getElementsByClassName('br');
            while (texts.length) {
                texts[0].parentNode.removeChild(texts[0]);
            }
            while (br.length) {
                br[0].parentNode.removeChild(br[0]);
            }            
            i = 0;
            j++;
            k=0;
        }
        if (title_text[j].length == 1) {
            setTimeout(clear, 2000);
            setTimeout(typeWriter_title, 3000);  
        }else if (j === 2){
           let texts = document.getElementsByClassName('text');
           for (let i = 1; i < texts.length-1; i++) {
                texts[i].style.cursor = 'pointer';
                texts[i].addEventListener('click', function(){
                    alert("Ведутся технические работы, но Вы можете воспользоваться нашей горячей линией 8-965-55-92-910, возможно там Вам помогут, но не факт");
                });
           }
           texts[texts.length-1].style.cursor = 'pointer';
           texts[texts.length-1].addEventListener('click', function(){
            clear();
            setTimeout(typeWriter_title, 0); 
           });
        }else if (j === 3){
            let div_buttons = document.createElement('div');
            div_buttons.classList.add('buttons');

            let div_button_1 = document.createElement('div');
            let div_button_2 = document.createElement('div');

            div_button_1.classList.add('button');
            div_button_2.classList.add('button');

            div_button_1.textContent = 'Все документы при себе';
            div_button_2.textContent = 'У нас есть ничего из этого';

            cursor.insertAdjacentElement('afterEnd', div_buttons);
            div_buttons.prepend(div_button_1);
            div_buttons.prepend(div_button_2);

            let buttons = document.getElementsByClassName('button');

            buttons[0].addEventListener('click', function(){
                clear();
                while (buttons[0]) {
                    buttons[0].parentNode.removeChild(buttons[0]);
                }
                setTimeout(typeWriter_title, 0);
            });
            buttons[1].addEventListener('click', function(){
                alert("Пожалуйста, подождите...");
                alert("Не хорошо обманывать, минусик к карме");
            });
        }else if (j === 4){
            let buttons = document.getElementsByClassName('buttons');
            let photos_container = document.createElement('div');
            photos_container.classList.add('photos_container');
            block.insertAdjacentElement('afterEnd', photos_container);
            while (buttons[0]){
                buttons[0].parentNode.removeChild(buttons[0]);
            }
            let arr_div_photo = [];
            let arr_photo = [];
            
            for (let i = 0; i < 6; i++){
                arr_div_photo[i] = document.createElement('div');
                arr_photo[i] = document.createElement('img');
                arr_photo[i].src = `images/kiss_${i+1}.png`;
                photos_container.append(arr_div_photo[i]);
                arr_div_photo[i].append(arr_photo[i]);

                arr_div_photo[i].addEventListener('click', function(){
                    container_certificate.push(arr_photo[i].src); //add the kiss................................................................................................
                    clear();
                    photos_container.remove();
                    while (photos_container[0]){
                        photos_container[0].parentNode.removeChild([0]);
                    }
                    typeWriter_title();
                });
            }
            
        }else if (j === 6){
            let button = document.createElement('button');
            button.classList.add('button');
            button.textContent = 'Проверьте, пожалуйста';
            block.insertAdjacentElement('afterEnd', button);         
            let yaer = document.getElementsByClassName('year');
            button.addEventListener('click', function(){
                let right_answers = ['1978', '1964', '1973', '1965',  '1994', '1993'];
                let answers = [];
                for (let i = 0; i < yaer.length; i++) {
                    answers[i] = yaer[i].value;
                    if (answers[i] == right_answers[i]){
                        while (button[0]){
                            button[0].parentNode.removeChild(button[0]);
                        }
                        button.style.display = 'none';
                        while (yaer.length) {
                            yaer[0].parentNode.removeChild(yaer[0]);
                        }
                        clear();
                        setTimeout(typeWriter_title, 0);
                    }else{
                        alert("Стыдно должно быть!");
                        break;
                    }
                }                
            });
        }else if (j === 8){
            let button = document.getElementsByClassName('button');

            while (button[0]){
                button[0].parentNode.removeChild(button[0]);
            }
            let texts = document.getElementsByClassName('text');

                for (let i = 1; i < texts.length; i++) {
                    texts[i].style.cursor = 'pointer';
                    texts[i].addEventListener('click', function(){
                        if (i === 1){
                            alert ("Я, конечно, тебе тоже доверяю, но возьми словарь");
                        }else if (i === 2){
                            alert ("Да как тобой не гордится-то, но ответ неверный");
                        }else if (i === 3){
                            clear();
                            setTimeout(typeWriter_title, 0);
                        }else if (i === 4){
                            alert ("Нет тебе цены! Но включи мозги")
                        }else if (i === 5){
                            alert ("Ты, конечно мой друг, но не на столько, чтобы поблату пройти дальше. Ответ неверный")
                        }
                    });
                };
        }else if (j === 10){
            let div_happiness = document.createElement('div');
            let img_happiness = document.createElement('img');

            div_happiness.classList.add ("photo_happiness");
            img_happiness.src = "images/happiness.jpg";

            block.insertAdjacentElement('afterEnd', div_happiness);
            div_happiness.append(img_happiness);

            let input = document.createElement('input');
            input.setAttribute('id','input_file')
            input.type = 'file';

            let button = document.createElement('button');
            button.textContent = 'отправить фото';
            button.classList.add('button');

            div_happiness.insertAdjacentElement('afterEnd', button);
            div_happiness.insertAdjacentElement('afterEnd', input);


            button.addEventListener('click', function(){
                let imageFile = document.getElementById('input_file').files[0];
                if (imageFile) {
                    let url = URL.createObjectURL(imageFile);               
                    container_certificate.push(url); // add photo............................................................................................................
                }else{
                    alert("Вы не выбрали фото или еще какая-то фигня произошла, попробуйте снова");
                    return;
                }
                input.style.display = 'none';
                let button = document.getElementsByClassName('button');
                let div_happiness = document.getElementsByClassName('photo_happiness');
                        while (button[0]){
                            button[0].parentNode.removeChild(button[0]);
                        }
                        while (div_happiness.length) {
                            div_happiness[0].parentNode.removeChild(div_happiness[0]);
                        }             
                clear();
                setTimeout(typeWriter_title, 0);
            });
        }else if (j === 12){
            let swears_container = document.createElement('div');
            swears_container.className = 'swears_container';

            let swear_1 = document.createElement('div');
            let swear_2 = document.createElement('div');

            block.insertAdjacentElement('afterEnd', swears_container);
            swears_container.append(swear_1);
            swears_container.append(swear_2);

            let button = document.createElement('button');
            button.classList.add('button');
            button.textContent = 'Отправить';
            swears_container.insertAdjacentElement('afterEnd', button);


            let title_swear_1 = document.createElement('h2');
            title_swear_1.textContent = 'Клятва жениха';
            let title_swear_2 = document.createElement('h2');
            title_swear_2.textContent = 'Клятва невесты';
            swear_1.append(title_swear_1);
            swear_2.append(title_swear_2);

            

            let text_swear_1 = document.createElement('span');
            let text_swear_2 = document.createElement('span');
            swear_1.append(text_swear_1);
            swear_2.append(text_swear_2);

            let texsts_swears = [
                [
                    'Торжественно клянусь быть опорой своей невесте и чинить любые неполадки в сроки до',
                    'дней(дня), водить в ресторан',
                    'раз(а) в месяц, покупать косметику на сумму',
                    'рублей в месяц'
                ],
                [
                    'Торжественно клянусь поддерживать своего жениха, готовить вкусный ужин не реже, чем',
                    'раз(а) в неделю, смотреть его любимые фильмы не реже',
                    'раз(а) в месяц, покупать трусы и носки жениху не реже',
                    'раз(а) в год'
                ]
            ];
            for (let i = 0; i < texsts_swears[0].length; i++) {
                let span_s_1 = document.createElement('span');
                span_s_1.textContent = texsts_swears[0][i];
                text_swear_1.append(span_s_1);

                let span_s_2 = document.createElement('span');
                span_s_2.textContent = texsts_swears[1][i];
                text_swear_2.append(span_s_2);

                if (i < texsts_swears[0].length - 1) {
                    let input_swear_1 = document.createElement('input');
                    input_swear_1.setAttribute('type', 'number');
                    input_swear_1.classList.add('swear_input');

                    let input_swear_2 = document.createElement('input');
                    input_swear_2.setAttribute('type', 'number');
                    input_swear_2.classList.add('swear_input');

                    span_s_1.insertAdjacentElement('afterEnd', input_swear_1);
                    span_s_2.insertAdjacentElement('afterEnd', input_swear_2);
                }
                
            }
            button.addEventListener('click', function(){
                let inputs = document.getElementsByClassName('swear_input');
                for (let i = 0; i < inputs.length; i++) {
                    if (inputs[i].value === ''){
                        alert('Заполните все поля, помните "Канцедярия небес" все видит');
                        return;
                    }
                }

                container_certificate[2] = '';
                container_certificate[3] = '';

                for (let i = 0; i < texsts_swears[0].length-1; i++){
                    container_certificate[2] += `${texsts_swears[0][i]} `;
                    container_certificate[3] += `${texsts_swears[1][i]} `;
                    container_certificate[2] += `${inputs[i].value} `;
                    container_certificate[3] += `${inputs[3+i].value} `;    
                }

                container_certificate[2] += `${texsts_swears[0][texsts_swears[0].length-1]}`;//push swears...................................................................................................................
                container_certificate[3] += `${texsts_swears[1][texsts_swears[1].length-1]}`;//push swears...................................................................................................................

                let button = document.getElementsByClassName('button');
                let swears_container = document.getElementsByClassName('swears_container');
                        while (button[0]){
                            button[0].parentNode.removeChild(button[0]);
                        }
                        while (swears_container.length) {
                            swears_container[0].parentNode.removeChild(swears_container[0]);
                        }             
                clear();
                setTimeout(typeWriter_title, 0);
            });
            
        }else if (j === 14){
            let button = document.createElement('button');
            button.classList.add('button');

            button.textContent = 'Посмотреть сертификат';
            block.insertAdjacentElement('afterEnd', button);

            button.addEventListener('click', function(){
                let bg = document.getElementById('bg');
                bg.classList.add('bg_for_Certificate');
                bg.classList.remove('block_bg');

                let button = document.getElementsByClassName('button');
                        while (button[0]){
                            button[0].parentNode.removeChild(button[0]);
                        }
                clear();
                let block_info = document.getElementById('block_info');
                    block_info.style.display = 'none';


                let certificate = document.getElementById('certificate');
                certificate.classList.add('certificate');
                certificate.classList.remove('hidden');
                let cert_input_img = document.getElementsByClassName('cert_input_img');
                let cert_swear_text = document.getElementsByClassName('cert_swear_text');
                for (let i = 0; i<cert_input_img.length; i++){
                    let img_cert = document.createElement("img");
                    img_cert.src = container_certificate[i];
                    cert_input_img[i].append(img_cert);

                    cert_swear_text[i].textContent = container_certificate[i+2];
                }

            });
            
        }
    }           
}

typeWriter_title();


