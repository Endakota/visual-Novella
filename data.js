const zhenya = "Евгений", zhako = "Жандос", danya = "Даниил" 
const imgPath = './img/'
const firstOption = "<div class='form_radio_btn' value = 1><input id='radio-1' type='radio' name='option' value='1'><label for='radio-1'>"
const secondOption = "<div class='form_radio_btn' value = 2><input id='radio-2' type='radio' name='option' value='2'><label for='radio-2'>"
const thirdOption = "<div class='form_radio_btn' value = 3><input id='radio-3' type='radio' name='option' value='3'><label for='radio-3'>"
const submitter = "<button class = 'submit'>Отправить</button>"
const finisher = "</label></div>"
const level11 = {
	"content": {
		"1": "*увлечённо играет бравл старс*",
		"2": "*внезапно приходит уведомление*",
		"3": "от неожиданности испуганный, смотрит на телефон",
		"4": "*письмо от yablonski.aa@gmail.com*: ",
		"5": "«Даниил, здравствуй! В прошлый раз мы отлично поработали, так что хотел бы предложить тебе новый проект. Нужно будет организовать выставку научно-технического творчества в ФабЛабе. Дай ответ до конца недели, пожалуйста! P.S. остальная команда уже сформирована, нужен хороший лидер! »",
		"6": "*улыбается, глаза сверкают*",
		"7": "«Спустя неделю…»",
		"8": "Всем привет, очень рад со всеми познакомиться, меня зовут Даниил и я буду руководить нашим проектом. Ранее я уже занимался подобной деятельностью, поэтому постараюсь помочь вам со всем разобраться. А сегодня давайте просто познакомимся. Расскажите немного о себе.",
		"9": "Меня зовут Женя, ранее в проектах задействован не был, но буду очень стараться! Если коротко, я буду посредником между участниками выставки и нами. Если буду нужен, пишите в любое время, кроме вечеров среды и субботы – я в качалочке",
		"10": "А я Жандос",
		"11": "*не расслышал*",
		"12": "Ж-А-Н-Д-О-С. Ударение на О",
		"13": "*понимает*",
		"14": "Я уже непосредственно оформляю экспонаты и помещение, в котором всё будет проходить. Буду раз поработать со всеми!",
		"15": "Ну что же, рад буду со всеми поработать! Со следующей недели начинаем подготовку. Предлагаю начать с обсуждения рисков, которые могут возникнуть при работе над проектом.",
		"16": "А зачем это нужно?",
		"17": "Да, я тоже не в курсе.",
		"18": "«Выборы в этой игре будут влиять на Ваш авторитет, а также на степень рискованности проекта.»",
		"19": "Да, простите, не подумал об этом. Перебивайте меня, если что-то не будет понятно. Начну с того, что риск это - …",
		"20": "<h3>Начну с того, что риск это - …</h3>" + firstOption + "Неопределенное событие или условие, возникающее в ходе проектной деятельности. Однако его наступление может иметь как положительное, так и отрицательное влияние на проект."+ finisher + secondOption + "Неопределенное событие или условие, возникающее в ходе проектной деятельности. Его наступление влечёт за собой отрицательные последствия для проекта." + finisher + thirdOption + "Неопределенное событие или условие, возникающее в ходе проектной деятельности. Однако оно зачастую достаточно незначительное, поэтому не повлияет на проект"+finisher + submitter,
		"21": "Их главной причиной является...",
		"22": "<h3>Их главной причиной является...</h3>" + firstOption + "Невезение" + finisher + secondOption + "Неопределенность" + finisher + thirdOption + "Некомпетентность участников проекта" + finisher  + submitter,
		"23": "Мы не можем контролировать все процессы, происходящие в мире. Понятное дело, возникает неопределённости перед происходящими событиями",
		"24": "Уххх. Можешь привести примеры, а то я не очень понимаю?",
		"25": "Нууу, например это может быть…",
		"26": "<h3>Привести примеры</h3>" + firstOption + "Отсутствие денег на дорогу" + finisher + secondOption + "Недостаток компетентных специалистов"+finisher  + submitter,
		"27": "Или же...",
		"28": "<h3>Привести примеры</h3>" + firstOption + "Неисправный кофейный аппарат" + finisher + secondOption + "Отсутствие опыта работы с проектами заданного типа" + finisher  + submitter,
		"29": "Для идентификации рисков удобно использовать…",
		"30": "<h3>Для идентификации рисков удобно использовать…</h3>"+firstOption+"Диаграмму Ганта"+finisher+secondOption+"Диаграмма Исикавы" + finisher+thirdOption+"Диаграмма Кэмпбелла"+finisher  + submitter,
		"31": "Она рисуется в форме рыбы. В её голове обозначают проблему или цель; по ребрам – причины или факторы, которые могут быть декомпозированы до требуемого уровня. Ну а также использование диаграммы перестать подменять риски их причинами.",
		"32": "О, да, я понял тебя. Тогда давайте начнём обсуждать риски.",
		"33": "Только подумайте прежде чем называть, мы можем потратить много ресурсов на предотвращение невозможных рисков. Жандос, какие возможные риски ты видишь со своей стороны?",
		"34": "Ну, наверное, с моей стороны это может быть… порча стендов, то, что мы не успеем оформить помещение вовремя и плохая погода, наверное. Никто просто не придёт на выставку",
		"35": "Так, хорошо, только ты назвал причину риска…",
		"36": "<h3>Что из названного Жандосом было причиной риска?? (Ваш выбор может повлиять на дальнейший исход событий)</h3>" + firstOption + "Порчу стенда" + finisher + secondOption + "Плохую погода" + finisher  + submitter,
		"37": "А остальные два мы учтём, спасибо! Женя, а что ты думаешь по этому поводу",
		"38": "Наверное, существенным будет организация подобной нашей выставки в тот же день или невозможность кого-либо выступить. Не знаю, что ещё может страшного случиться",
		"39": "Ну, с первым согласен, а второе ведь не риск. Или я что-то не понимаю, Дань?",
		"40": "<h3>Согласиться/Не согласиться с Жандосом(Ваш выбор может повлиять на дальнейший исход событий)</h3>" + firstOption + "Согласиться с Жандосом" + finisher + secondOption + "Не соглашаться с Жандосом" + finisher+submitter,
		"41": "Ну а теперь смотрите: риском ещё будет… отказ инвесторов дальше спонсировать нашу выставку. Мы просто не сможем ничего сделать без вложений. Ну а так, это, кажется, всё",
		"42": "Фух, это было увлекательно. Может закончили на сегодня? А то у меня ещё встреча с участниками выставки",
		"43": "Да, мне тоже нужно идти. Через час нужно забрать распечатанные брошюры",
		"44": "Конечно! Надеюсь, я вас не утомил. Тогда встретимся здесь же в среду. Буду ждать к 17:00"		
	},
	"bye-bye-jojo": {
		"1": "Я что-то совсем ничего не понял.",
		"2": "Удивительно, но я тоже. До сих пор не осознаю, зачем это всё надо. Просто лишняя трата времени",
		"3": "Слушай, Дань, давай без обид. Нам обещали, что придёт человек, который разбирается в теме. Но я на счёт тебя сильно сомневаюсь.Я бы хотел работать с компетентными людьми, поэтому я думаю, что мы попросим найти тебе замену.",
		"4": "Да, к сожалению, согласен. У нас не получится слаженно поработать. Прости",
	},
	"badCharacter-name": [zhako, zhenya, zhako, zhenya],
	"badCharacter-img": [imgPath + "Zhako/zhandos_zloi.png", imgPath+"Zhenya/zhenya_zloi.png",imgPath+"Zhako/zhandos_razoch.png",imgPath+"Zhenya/zhenya_razoch.png"],
	"character-name": [danya, "Телефон", danya, "Телефон", "Письмо", danya,"", danya, zhenya, zhako, zhenya, zhako, zhenya,zhako, danya, zhako, zhenya, "", danya, "Опрос", danya, "Опрос", danya, zhenya, danya, "Опрос", danya, "Опрос", danya, "Опрос", danya,zhenya,danya,zhako,danya,"Выбор",danya,zhenya,zhako,"Выбор",danya,zhenya,zhako,danya],
	"characters-img": [imgPath+'Danya/danya_smiling_onPhone.png', imgPath+'Danya/danya_smiling_onPhone.png', imgPath+'Danya/danya_onPhone.png',"", "", imgPath+'Danya/danya_smiling.png',"",imgPath+"Danya/danya_classic.png",imgPath+"Zhenya/zhenya_classic.png",imgPath+"Zhenya/zhenya_classic.png",imgPath+"Zhenya/zhenya_confused.png",imgPath+"Zhenya/zhenya_classic2.png",imgPath+"Zhenya/zhenya_smile2.png",imgPath + "Zhako/zhandos_smiling.png",imgPath + "Danya/danya_smiling.png",imgPath + "Danya/danya_classic2.png",imgPath + "Danya/danya_classic2.png",/*текст*/"",imgPath + "Danya/danya_tallking2.png",/*опрос*/imgPath + "Danya/danya_thinking.png", imgPath + "Danya/danya_tallking.png",/*второй вопрос*/ imgPath + "Danya/danya_tallking.png", imgPath + "Danya/danya_thinking.png", imgPath + "Danya/danya_classic2.png", imgPath + "Danya/danya_thinking.png",imgPath + "Danya/danya_thinking.png",imgPath + "Danya/danya_tallking.png",imgPath + "Danya/danya_tallking.png",imgPath + "Danya/danya_tallking.png",imgPath + "Danya/danya_tallking.png",imgPath + "Danya/danya_classic.png", imgPath + "Danya/danya_classic.png", imgPath + "Danya/danya_tallking2.png",imgPath + "Danya/danya_classic.png",imgPath + "Danya/danya_smiling.png", imgPath + "Danya/danya_tallking2.png", imgPath + "Danya/danya_thinking.png", imgPath+"Zhenya/zhenya_confused.png",imgPath+"Zhenya/zhenya_classic2.png",imgPath+"Zhenya/zhenya_classic2.png", imgPath + "Danya/danya_tallking.png", imgPath + "Zhenya/zhenya_smile2.png", imgPath + "Danya/danya_classic.png", imgPath+"Danya/danya_smiling2.png"],
	"sideCharacters-img": ["","","","","","","","","",imgPath + "Zhako/zhandos_classic.png",imgPath + "Zhako/zhandos_confussed.png",imgPath + "Zhako/zhandos_smiling.png","","","",imgPath + "Zhako/zhandos_confussed.png",imgPath+"Zhenya/zhenya_confused.png","",imgPath+"Zhenya/zhenya_classic.png",imgPath+"Zhenya/zhenya_smile2.png","","","",imgPath+"Zhenya/zhenya_confused.png","","","","","","","",imgPath+"Zhenya/zhenya_smile.png",imgPath+"Zhako/zhandos_classic.png",imgPath+"Zhako/zhandos_tallking.png","",imgPath+"Zhako/zhandos_confussed.png",imgPath+"Zhenya/zhenya_classic2.png","",imgPath+"Zhako/zhandos_confussed.png",imgPath+"Zhako/zhandos_confussed.png","","",imgPath+"Zhako/zhandos_classic.png",""],
	"module": "Модуль 1",
	"level": "Блок 1/Этап 1",
	"positiveAnswer": ["Неопределенное событие или условие, возникающее в ходе проектной деятельности. Однако его наступление может иметь как положительное, так и отрицательное влияние на проект.", "Неопределенность", "Недостаток компетентных специалистов", "Отсутствие опыта работы с проектами заданного типа", "Диаграмма Исикавы"],
	work() { iter(this, Object.keys(this["content"]).length,this["level"],this["module"]) }
}
const level21 = {
	"content": {
		"1": "*сосредоточенно смотрит на листок бумаги*",
		"2": "Привет, что-то случилось? Ты какой-то хмурый",
		"3": "Здравствуй. Я просто пока никто не подошёл начал оформлять реестр рисков на основе того, что мы решили в прошлый раз, вот и задумался",
		"4": "Реестр рисков?",
		"5": "Да, на первой встрече мы разобрались с чем можем столкнуться во время проекта. Теперь нужно заняться их управлением.",
		"6": "<h3>Этот процесс можно разделить на 4 этапа. Первым будет</h3>" + firstOption + "Оценка Рисков" + finisher + secondOption + "Выявление рисков" + finisher + submitter,
		"7": "По сути мы это уже сделали в прошлый раз.",
		"8": "<h3>Следом нужно будет</h3>" + firstOption + "Оценить риски" + finisher + secondOption +"Начать планировать мероприятия по предотвращению рисков"+finisher + submitter,
		"9": "С этим у нас также проблем быть не должно. Нужно будет оценить вероятность наступления риска и оценить последствия. Как раз этим я бы и хотел заняться, когда придёт Женя.",
		"10": "<h3>Самым сложным будет следующий шаг</h3>" + firstOption + "Планирование мероприятий по предотвращению рисков и устранению последствий" + finisher + secondOption + "Отслеживание рисков и реагирование" + finisher + submitter,
		"11": "Зато, когда мы это проделаем, нам останется просто отслеживать риски и вовремя на них реагировать.",
		"12": "Так, хорошо, я понял. Ты говорил про реестр рисков. Я так понимаю это в качестве документации всего, что ты называл?",
		"13": "Да, абсолютно верно. Именно этим я и хотел заняться.",
		"14": "О, все уже собрались, извините, у меня была тренировка в качалке. Привет, кстати",
		"15": "А меня не позвал…",
		"16": "Ну ничего, у нас времени много… Сходим ещё. Вы уже начали что-то делать?",
		"17": "Я обозначил, что нам нужно будет сделать, а так ничего больше. Я думаю, Жандос тебе расскажет. Мне нужно минут 5 доделать таблицу для реестра рисков.",
		"18": "Чего?",
		"19": "Присядь, у нас будет долгий разговор"
	},
	"bye-bye-jojo": {
		"1": "Слушай, когда Александр Александрович о тебе рассказывал, он отмечал, что ты хорошо разбираешься в теме.",
		"2": "Сейчас ты постоянно путаешься в том, что нужно говорить. Это совершенно не укладывается в тот образ, который нам описали.",
		"3": "Мне кажется мы пока на том этапе, когда можно безболезненно заменить участника. Поэтому ты меня извини, но я попрошу Александра Александровича рассмотреть другую кандидатуру."
	},
	"character-name": [danya, zhako, danya, zhako, danya, "Опрос", danya, "Опрос", danya,"Опрос", danya, zhako, danya, zhenya, zhako, zhenya, danya,zhenya,zhako],
	"characters-img": [imgPath + "Danya/danya_onPhone.png", imgPath + "Danya/danya_classic.png", imgPath + "Danya/danya_tallking.png", imgPath + "Danya/danya_classic2.png", imgPath + "Danya/danya_thinking.png", imgPath + "Danya/danya_thinking.png", imgPath + "Danya/danya_tallking.png", imgPath + "Danya/danya_tallking2.png", imgPath + "Danya/danya_thinking.png", imgPath + "Danya/danya_smiling2.png",imgPath + "Danya/danya_tallking.png", imgPath + "Danya/danya_smiling3.png", imgPath + "Danya/danya_smiling.png", imgPath + "Zhenya/zhenya_smile.png", imgPath + "Zhenya/zhenya_smile2.png", imgPath + "Zhenya/zhenya_classic.png", imgPath + "Danya/danya_smiling3.png", imgPath + "Zhenya/zhenya_confused.png", imgPath + "Zhenya/zhenya_razoch.png"],
	"badCharacter-name": [zhako, zhako, zhako],
	"badCharacter-img": [imgPath + "Zhako/zhandos_confussed.png", imgPath + "Zhako/zhandos_zloi.png", imgPath + "Zhako/zhandos_razoch.png"],
	"sideCharacters-img": ["", imgPath + "Zhako/zhandos_classic.png", "", imgPath + "Zhako/zhandos_confussed.png", "", "", "", "", "", "", "", imgPath + "Zhako/zhandos_classic.png", imgPath + "Zhako/zhandos_smiling.png","", imgPath + "Zhako/zhandos_razoch.png", "", imgPath + "Zhenya/zhenya_confused.png", "", imgPath + "Zhako/zhandos_tallking.png"],
	"module": "Модуль 2",
	"level": "Блок 2/Этап 1",
	"positiveAnswer":["Выявление рисков", "Оценить риски ", "Планирование мероприятий по предотвращению рисков и устранению последствий"],
	work(){ iter(this, Object.keys(this["content"]).length,this["level"],this["module"]) }
}

let path = ''
if(localStorage["Причина риска"] == "Плохую погода"){
	if(localStorage["Чью сторону"] == "Согласиться с Жандосом"){
		path = "../img/badWeather+impossible.jpg"
	}
	else{
		path = "../img/badWeather+Deadline.jpg"	
	}
}else{
	if(localStorage["Чью сторону"] == "Согласиться с Жандосом"){
		path = "../img/destruction+impossible.jpg"
	}
	else{
		path = "../img/destruction+Deadline.jpg"	
	}
}

const level22 = {
	"content": {
		"1": "Так, хорошо, я закончил. Давайте начнём. Я объясню, как заполнять реестр на примере одного риска. Потом уже пойдёт быстрее.",
		"2": "Рассмотрим ситуацию, что в тот же день организуется другая выставка, подобная нашей.",
		"3": "Первым делом, что случится, если риск реализуется",
		"4": "Меньше людей придут на нашу выставку?",
		"5": "Да, отлично. Если в один день будет две выставки, часть людей, которые могли бы прийти к нам, пойдут на другое мероприятие. А это не очень хорошо.",
		"6": "Так, теперь следующий пункт. Какова вероятность, что это произойдёт?",
		"7": "Этого не может произойти. Мы уже договорились с администрацией Политеха, что в назначенный день будет проходить только наше мероприятие.",
		"8": "Считай, мы одним зайцем убили два пункта. Это здорово. Но всё же произойти может что угодно, тем более выставки организует не только Политех, поэтому поставим низкую вероятность.",
		"9": "Что дальше заполняем?",
		"10": "Во-первых, если риск реализуется, то насколько серьёзное влияние он понесёт для проекта?",
		"11": "Ну, мы билеты заранее начнём продавать, заинтересованные люди должны будут всё равно прийти.",
		"12": "И несмотря на это часть людей может сдать билет, нельзя такую вероятность исключать.",
		"13": "В таком случае, поставим среднее влияние, раз его нельзя отбросить, но и оно не слишком критично.",
		"14": "Вот теперь будет самое сложное. Если риск реализуется, что мы будем с этим делать?",
		"15": "В плане?",
		"16": "Смотри, вот мы узнаём, что в один день с нашим проходит другая выставка. Что мы сделаем, чтобы не потерять посетителей?",
		"17": "О, у нас выступает несколько человек, которые делают интерактивные экспонаты. Можно попросить их выйти на улицу и провзаимодействовать с людьми, чтобы заинтересовать их.",
		"18": "Я думаю, нужно вложиться в рекламу.",
		"19": "Большая часть наших посетителей предполагается из Политеха. Может повесим плакаты на территории?", 
		"20": "Я придумал! Можем пустить дронов с баннерами, чтобы люди точно обратили внимание. У нас как раз есть участники с летающими экспонатами!",
		"21": "Главное, чтобы в стену не влетели… А так хорошая идея. Ты меня удивляешь сегодня, Женя.",
		"22": "Отлично, мне нравится, сейчас всё запишу.",
		"23": "Поздравляю, мы закончили обсуждать первый риск. Примерно понятно, как это работает?",
		"24": "Даже мне понятно!",
		"25": "Я рад. Осталось заполнить все остальные строки в таблице.",
		"26": "Нееееет",
		"27": "«спустя некоторое время»",
		"28": "Я не могу больше… Бросьте меня и убегайте.",
		"29": "Не смей нас бросать, мы будем страдать вдвоём.",
		"30": "Отставить драму. Тем более, что мы уже всё закончили.",
		"31": "Наконец-то… я ждал этого десять тысяч лет!",
		"32": "Да, да, Женя. У тебя тоже проблемы с девушками?",
		"33": "Поздравляю со вступлением в наши ряды, Даниил.",
		"34": "Почему все мои знакомства всегда этим заканчиваются…",
		"35": "Хехе, в любом случае, мы закончили.",
		"36": "",
		"37": "Теперь у нас есть оберег от нежеланных ситуаций."
	},
	"character-name": [danya, danya, danya, zhenya, danya, danya, zhako, danya, zhenya,danya, zhenya, zhako, danya, danya, zhako, danya, zhenya,zhako,zhenya,zhenya,zhako, danya, danya, zhenya, danya, zhenya, "", zhenya, zhako, danya, zhenya, danya,zhako,zhenya, danya,danya,danya],
	"characters-img": [imgPath + "Danya/danya_classic.png", "", imgPath + "Danya/danya_thinking.png", imgPath + "Danya/danya_smiling3.png", "",
						imgPath + "Danya/danya_tallking2.png", imgPath + "Danya/danya_smiling2.png", "", imgPath + "Danya/danya_smiling3.png",
						imgPath + "Danya/danya_tallking2.png", imgPath + "Danya/danya_smiling3.png", imgPath + "Danya/danya_classic.png",
						"", imgPath + "Danya/danya_smiling2.png", imgPath + "Danya/danya_classic2.png", imgPath + "Danya/danya_thinking.png",
						imgPath + "Zhenya/zhenya_classic.png", imgPath + "Zhenya/zhenya_classic2.png", imgPath + "Zhenya/zhenya_classic.png", imgPath + "Zhenya/zhenya_smile.png",
						imgPath + "Zhenya/zhenya_smile2.png", "",imgPath + "Danya/danya_classic.png", imgPath + "Danya/danya_smiling3.png",
						imgPath + "Danya/danya_smiling.png", imgPath + "Zhenya/zhenya_tired2.png", "", imgPath + "Zhenya/zhenya_tired.png",
						imgPath + "Zhenya/zhenya_razoch.png", imgPath + "Danya/danya_classic2.png", imgPath + "Zhenya/zhenya_smile2.png", imgPath + "Danya/danya_smiling3.png",
						imgPath + "Danya/danya_classic.png", imgPath + "Zhenya/zhenya_razoch.png", imgPath + "Danya/danya_smiling.png", "", imgPath + "Danya/danya_smiling3.png"],	
	"sideCharacters-img": ["","","",imgPath + "Zhenya/zhenya_classic2.png","","",imgPath + "Zhako/zhandos_classic.png","",imgPath + "Zhenya/zhenya_classic2.png","",imgPath + "Zhenya/zhenya_classic.png",
	imgPath + "Zhako/zhandos_classic.png","","",imgPath + "Zhako/zhandos_confussed.png","","",imgPath + "Zhako/zhandos_tallking.png",imgPath + "Zhako/zhandos_classic.png",imgPath + "Zhako/zhandos_confussed.png",
	imgPath + "Zhako/zhandos_smiling.png","","",imgPath + "Zhenya/zhenya_smile.png","","","","",imgPath + "Zhako/zhandos_razoch.png","","",imgPath+"Zhenya/zhenya_tired2.png", imgPath + "Zhako/zhandos_smiling.png",
	"","","",""],
	"pics": ["","../img/pic1.jpg","","","../img/pic2.jpg","","","../img/pic3.jpg","","","","","../img/pic4.jpg","","","","","","","","","../img/pic5.jpg","","","","","","","","","","","","","",path,"",""],
	"module": "Модуль 2",
	"level": "Блок 2/Этап 2",
	work(){ iter(this, Object.keys(this["content"]).length,this["level"],this["module"]) }
}
const level31 = {
	"content": {
		"1": "Ребята, у нас проблема!",
		"2": "Женя! Успокойся, перестань кричать. Расскажи, что случилось",
		"3": "Я ездил проверять степень готовности ключевого участника, а он, оказывается, лежит в больнице! Даже не предупредил меня… Он должен был дать лекцию о робототехнике с демонстрациями… Это одно из главных событий выставки.",
		"4": "Не зря же мы реестр заполняли. Сейчас, посмотрим, что нужно сделать…",
		"5": ""
	},
	"impossible-content": {
		"1": "Вот же оно. Посмотри, Женя. Ну, это твой первый проект, поэтому ты волнуешься, я понимаю, но не переживай так. Видишь, мы это уже учли. Осталось отработать.",
		"2": "Слава богу. Сейчас напишу Глебу."
	},
	"non-impossible-content":{
		"1": "Так, этого мы не учли. Придётся принимать решение на ходу.",
		"2": "Что же делать… Мне некем заменить его.Придётся отменять главное выступление.",
		"3": "А ты можешь предложить другому участнику выступить? По крайней мере не придётся перекраивать расписание.",
		"4": "Жандос, осталось мало времени, а выступающему нужно подготовить целую лекцию. Никто не справится.",
		"5": "Но я уже раздал листовки и развесил плакаты. Там везде указано, что будет лекция о робототехнике. Ты можешь попросить выступить нескольких человек.",
		"6": "Я не уверен, что выйдет договориться со всеми. Всё таки это дополнительная нагрузка.",
		"7": "<h3>Так, я склоняюсь к варианту</h3>" + firstOption + "Жени" + finisher + secondOption + "Жандоса" + finisher + submitter,

	},
	"non-impossible-content-zhako": {
		"1": "Всё-таки отменять выступление полностью – это не дело. Так у хотя бы будет возможность нас будет возможность исключить риск с минимумом последствий.",
		"2": "Хорошо, тогда я пошёл договариваться."
	}, 
	"non-impossible-content-zhenya":{
		"1": "Мне кажется, затея Жандоса спорная. Раз уж не вышло с лекцией, то не вышло. Давайте примем это и попробуем хотя бы заменить плакаты.",
		"2": "Ну, ладно, как скажешь. Мне нужно будет договариваться о дополнительном финансировании. Пойду позвоню Александру Александровичу."
	},
	"character-name": [zhenya, danya, zhenya, danya, ""],
	"impossible-content-name": [danya, zhenya],
	"impossible-content-img": [imgPath + "Danya/danya_classic.png",imgPath + "Zhenya/zhenya_fright.png"],
	"non-impossible-content-name": [danya, zhenya, zhako, zhenya, zhako,zhenya,"Выбор"],
	"non-impossible-content-img": [imgPath + "Danya/danya_fright.png",imgPath + "Zhenya/zhenya_fright.png",imgPath + "Zhako/zhandos_confussed.png",imgPath + "Zhenya/zhenya_confused.png",imgPath + "Zhako/zhandos_razoch.png",imgPath + "Zhenya/zhenya_classic2.png",""],
	"non-impossible-content-zhenya-name": [danya, zhako],
	"non-impossible-content-zhenya-img": [imgPath + "Danya/danya_thinking.png", imgPath + "Zhako/zhandos_tallking.png"],
	"non-impossible-content-zhako-name": [danya,zhenya],
	"non-impossible-content-zhako-img": [imgPath + "Danya/danya_thinking.png", imgPath + "Zhenya/zhenya_classic2.png"],
	"characters-img": [imgPath + "Zhenya/zhenya_fright.png", imgPath + "Danya/danya_tallking.png", imgPath + "Zhenya/zhenya_razoch.png", imgPath + "Danya/danya_classic2.png",""],	
	"sideCharacters-img": ["","","","",""],
	"pics": ["","","","",path],
	"module": "Модуль 3",
	"level": "Блок 3/Этап 1",
	work(){ iter(this, Object.keys(this["content"]).length,this["level"],this["module"]) }
}
const level32 = {
	"content": {
		"1": "*день выставки*",
		"2": "Так, пока всё идёт отлично, потенциал мероприятия меня радует. Жандос, как идут дела?",
		"3": "Пока проблем никаких не было.",
		"4": "*Шум ссоры*",
		"5": "Так, что это было.",
		"6": "Жандос, Даня! Там сейчас участники подерутся друг с другом! Когда переносили коробки, задели один из стендов…",
		"7": "*Все рухнуло*",
		"8": "Ну как такое могло произойти! Насколько там всё серьёзно?",
		"9": "Экспонаты-то ещё не выставлялись, но… Все украшения безнадёжно испорчены – я сам проверил. Всё в грязи! Разгрузки ещё не кончились, так что мы не вызывали клининг…",
		"10": "А ещё… Стол теперь ходуном ходит. Я осмотрел, но не понимаю в чём проблема. Такое чувство, что он от любого прикосновения повалится.",
		"11": "Так, подождите секунду",
		"12": ""
	},	
	"character-name": ["", danya, zhako, "", zhako, zhenya,"", zhako,zhenya,zhenya, danya,""],
	"characters-img": ["",imgPath + "Danya/danya_classic.png",imgPath + "Zhako/zhandos_tallking.png","",imgPath + "Zhako/zhandos_confussed.png",imgPath + "Zhenya/zhenya_fright.png","",imgPath + "Zhako/zhandos_zloi.png",imgPath + "Zhenya/zhenya_classic2.png",imgPath + "Zhenya/zhenya_tired.png",imgPath + "Danya/danya_thinking.png",""],	
	
	"destruction-content": {
		"1": "Вот же оно. Посмотри, Жандос. Тоже на нервах с начала дня, да? Забыл уже про это. Ты становишься похожим на Женю…",
		"2": "Ээээ, это совсем не смешно! Но я рад, что мы сделали этот реестр. Поможете?",
		"3": "Конечно, только мне нужно будет встретить клининг через минут 40",
		"4": "Так бы и сказал, что не хочешь с нами проводить время.",
		"5": "Да, Женя, как обычно!",
		"6": "Ну вы шутняры, конечно. Пойдёмте уже.",
		"7": "Ага"
	},
	"destruction-content-name": [danya, zhako, zhenya, danya, zhako, zhenya, danya],
	"destruction-content-img": [imgPath + "Danya/danya_smiling3.png",imgPath+"Zhako/zhandos_smiling.png",imgPath + "Zhenya/zhenya_classic.png",imgPath + "Danya/danya_smiling2.png",imgPath + "Zhako/zhandos_razoch.png",imgPath+"Zhenya/zhenya_smile.png",imgPath + "Danya/danya_smiling3.png"],
	
	"non-destruction-content":{
		"1": "Стало быть, мы этого не учитывали… Проблема",
		"2": "Ну и как тогда быть! Ставить всё на полу что ли? Где мне сейчас найти стол. Так мало того, ещё и декор.Свалилось же на мою голову прямо в день выставки…",
		"3": "Что можно сделать? Что же можно сделать? Мы точно не сможем найти всё необходимое?",
		"4": "Да, времени мало.",
		"5": "Тогда либо использовать стенд другого человека, либо объединять экспонаты. Женя, что ты думаешь?",
		"6": "Ну, использовать чужой стенд вариант не самый лучший… Можно попробовать договориться объединить экспонаты между пострадавшим и другим человеком, схожу поспрашиваю.",
		"7": "Давай. Кстати, вариант с расстановкой на полу не кажется уж таким и плохим.",
		"8": "Сейчас возможно и да, но ведь весна на дворе. Сам знаешь питерскую погоду, я бы не стал рисковать. Конечно, антураж будет очень хороший. И выглядело бы это очень располагающе: сесть вместе с гостями выставки, послушать рассказ выступающего…",
		"9":  "Очень неформальная обстановка получится, ребята расслабятся и гости тоже.",
		"10": "С другой стороны, если что-то случится, нам некуда будет перенести экспонаты. Даже если подключить сюда идею Жени, выставка уже начнётся и в толпе людей мы можем что-то задеть и сломать.",
		"11": "Так, я договорился. Парни могут потесниться на одном стенде.",
		"12": "Получается, два стула: рискованный, но потенциально успешный и надёжный, но не такой выигрышный",
		"13": "<h3>Получается, два стула: рискованный, но потенциально успешный и надёжный, но не такой выигрышный</h3>" + firstOption + "Попросить участника расставить экспонаты на полу "+ finisher + secondOption + "Попросить участников потесниться"+finisher+submitter
	},
	"non-destruction-content-name": [danya, zhako, zhenya, zhako, danya,zhenya,danya, zhako,zhako,zhako,zhenya, danya,"Выбор"],
	"non-destruction-content-img": [imgPath + "Danya/danya_fright.png",imgPath + "Zhako/zhandos_zloi.png",imgPath+"Zhenya/zhenya_classic2.png",
	imgPath+"Zhako/zhandos_razoch.png",imgPath+"Danya/danya_tallking.png",imgPath + "Zhenya/zhenya_classic2.png",imgPath+"Danya/danya_tallking2.png",
	imgPath + "Zhako/zhandos_classic.png", imgPath+"Zhako/zhandos_razoch.png", imgPath+"Zhako/zhandos_classic.png",imgPath+"Zhenya/zhenya_classic.png",imgPath+"Danya/danya_thinking.png",imgPath+"Danya/danya_thinking.png"],
	
	"non-destruction-content-first": {
		"1": "Всё-таки давайте рискнем. Чем черт не шутит",
		"2": "Хорошо, понял. Пойду обустраивать все."
	},
	"non-destruction-content-first-name": [danya, zhako],
	"non-destruction-content-first-img": [imgPath + "Danya/danya_smiling2.png", imgPath + "Zhako/zhandos_tallking.png"], 
	"non-destruction-content-second":{
		"1": "Я бы лучше не рисковал. Всё-таки нам очень нужно не налажать с выставкой.",
		"2": "Хорошо, понял. Пойду обустраивать всё. Поможете мне?",
		"3": "Конечно, только мне нужно будет встретить клининг через минут 40",
		"4": "Так бы и сказал, что не хочешь с нами проводить время.",
		"5": "Да, Женя, как обычно!",
		"6": "Ну вы шутняры, конечно. Пойдёмте уже.",
		"7": "Ага"
	},	
	"non-destruction-content-second-name": [danya, zhako,zhenya,danya,zhako,zhenya,danya],
	"non-destruction-content-second-img": [imgPath + "Danya/danya_smiling2.png", imgPath + "Zhako/zhandos_tallking.png",imgPath + "Zhenya/zhenya_classic.png",imgPath + "Danya/danya_smiling2.png",imgPath + "Zhako/zhandos_razoch.png",imgPath+"Zhenya/zhenya_smile.png",imgPath + "Danya/danya_smiling3.png"],
	
	"sideCharacters-img": ["","","","","","","","","","","",""],
	"pics": ["","","","","","","","","","","",path],
	"module": "Модуль 3",
	"level": "Блок 3/Этап 2",
	work(){ iter(this, Object.keys(this["content"]).length,this["level"],this["module"]) }
}
const level41 = {
	"badWeather-content": {
		"1": "«начало выставки»",
		"2": "Даня, срочно! Там ливень пошёл!",
		"3": "5 минут и всё, что стоит на полу, будет в грязи. Надо срочно это убрать.",
		"4": "Ну нет, выставка же только началась… Куда они всё уносят.",
		"5": "Мы же не успели ничего посмотреть.",
		"6": "Вот, смотри, даже в брошюре указано, что он будет стоять до конца. Я пришла ради него…",
		"7": "Уф, я расстроена",
		"8": "Даже слушать неприятно.",
		"9": "Да, но тут уже ничего не сделаешь. Надо будет извиниться перед человеком, что так получилось.",
		"10": "Ну мы хотя бы попробовали…"   
	},
	"badWeather-content-name":["", zhako, danya, "Гости", "Гости", "Гости", "Гости", zhako, danya, zhako],
	"badWeather-content-img":["", imgPath+"Zhako/zhandos_confussed.png", imgPath + "Danya/danya_classic2.png", imgPath + "guests.png",imgPath + "guests.png",imgPath + "guests.png",imgPath + "guests.png", imgPath + "Zhako/zhandos_zloi.png", imgPath + "Danya/danya_classic2.png", imgPath + "Zhako/zhandos_razoch.png"],
	"stando-content": {
		"1": "«начало выставки»",
		"2":"Я сейчас был у того стенда справа. Там два парня решили выступить вместе. Там сейчас битва роботов начнётся",
		"3": "Хаха, серьёзно? Где ещё раз на это посмотреть?",
		"4": "Ну, я утрирую, конечно, но всё же там достаточно интересно.",
		"5": "Может и хорошо, что ему стенд испортили.",
		"6": "Хаха, как-то цинично. Но в любом случае, пока гости не жалуются, можно считать и так." 
	},
	"stando-content-name": ["", "Гости", "Гости", "Гости", zhako, danya],
	"stando-content-img":["",imgPath + "guests.png",imgPath + "guests.png",imgPath + "guests.png",imgPath + "Zhako/zhandos_confussed.png",imgPath + "Danya/danya_smiling2.png"],
	work(){final_iter(this)} 
}
const level42 = {
	"impossible-content": {
		"1": "«спустя пару часов»",
		"2": "Фух, Женя, надеюсь, у тебя-то всё нормально?",
		"3": "Немного волнительно, но пока плохих предпосылок нет. Глеб пойдёт выступать через 15 минут, так что я за кулисы, нужно будет его представить и помочь донести экспонаты.",
		"4": "Нужна помощь?",
		"5": "Ты посмотри на меня! Как я могу не справиться сам",
		"6": "Понял тебя, хаха. Удачи!",
		"7": "Да, помахай нам ручкой.",
		"8": "Оке. Всё, я побежал",
		"9": "«после лекции»",
		"10": "Спасибо, что вытащила меня сюда. Отличная лекция была. Надо будет найти его стенд, посмотреть на того робота! Ты видела как он делал сальто?! Я теперь хочу всё осмотреть ещё раз.",
		"11": "Да! Да! Сложно поверить, что мы живём в такое время. Пойдём скорее, пока народ не сбежался!",
		"12": "Как хорошо, что мы заранее договорились с Глебом",
		"13": "Вот вам и отработка рисков. Не зря занимались этим."
	},
	"impossible-name": ["", danya, zhenya, zhako, zhenya, zhako, danya, zhenya, "", "Гости","Гости",zhenya,danya],
	"impossible-img": ["",imgPath+"Danya/danya_classic2.png",imgPath+"Zhenya/zhenya_classic2.png",imgPath+"Zhako/zhandos_classic.png",imgPath+"Zhenya/zhenya_smile.png",imgPath+"Zhako/zhandos_tallking.png",
						imgPath + "Danya/danya_classic.png",imgPath+"Zhenya/zhenya_classic.png","",imgPath+"guests.png",imgPath+"guests.png",imgPath+"Zhenya/zhenya_smile.png",imgPath+"Danya/danya_smiling3.png"],
	"non-impossible-zhenya-content": {
		"1": "«спустя пару часов»",
		"2": "Фух, Женя, надеюсь, у тебя-то всё нормально?",
		"3": "Даже не знаю, что тебе сказать. Народ надолго не задерживается. Поток посетителей низкий. Всё-таки из-за отмены лекции многие сдали билеты обратно.",
		"4": "Мне скучно, пойдём домой? Просто ходить смотреть экспонаты не интересно. Я хочу получить драйва от процесса.",
		"5": "Это потому что отменили лекцию. Потенциал был большой, говорят. Я расстроилась, когда узнала, но надежды оставались на мероприятие…",
		"6": "Не расстраивайся, в другой раз лучше получится.",
		"7": "Не уверен, что следующий раз будет, конечно, но спасибо…"
	},
	"non-impossible-zhenya-name": ["", danya, zhenya, "Гости", "Гости", zhako, zhenya],
	"non-impossible-zhenya-img": ["",imgPath+"Danya/danya_classic2.png",imgPath+"Zhenya/zhenya_classic2.png",imgPath+"guests.png",imgPath+"guests.png",imgPath+"Danya/danya_classic2.png",imgPath+"Zhenya/zhenya_razoch.png"],
	"non-impossible-zhako-content": {
		"1": "«спустя пару часов»",
		"2": "Фух, Женя, надеюсь, у тебя-то всё нормально?",
		"3": "Немного волнительно, но пока плохих предпосылок нет. Лекция будет через 15 минут, так что я за кулисы, нужно будет представить выступающих и помочь донести экспонаты.",
		"4": "Нужна помощь?",
		"5": "Ты посмотри на меня! Как я могу не справиться сам",
		"6": "Понял тебя, хаха. Удачи!",
		"7": "Да, помахай нам ручкой.",
		"8": "Оке. Всё, я побежал",
		"9": "«после лекции»",
		"10": "Спасибо, что вытащила меня сюда. Это была хорошая лекция. Правда много человек выступали, немного смазанное впечатление.",
		"11": "Да, согласна. Как будто впопыхах материал готовили. Но всё равно ведь интересно?",
		"12": "Бесспорно. Пойдём, может, ещё чего интересное найдём.",
		"13": "Фух, ну, благо смогли выкрутиться. Спасибо, Даня, что не послушал меня.",
		"14": "Ну, обращайся. Тем более я сам виноват, что так вышло."
	},
	"non-impossible-zhako-name": ["", danya, zhenya, zhako, zhenya, zhako, danya,zhenya,"","Гости","Гости","Гости",zhenya,zhako],
	"non-impossible-zhako-img": ["",imgPath+"Danya/danya_classic2.png",imgPath+"Zhenya/zhenya_classic2.png",imgPath+"Zhako/zhandos_classic.png",imgPath+"Zhenya/zhenya_smile.png",imgPath+"Zhako/zhandos_tallking.png",
						imgPath + "Danya/danya_classic.png",imgPath+"Zhenya/zhenya_classic.png","",imgPath+"guests.png", imgPath+"guests.png", imgPath+"guests.png", imgPath+"Zhenya/zhenya_classic.png",imgPath+"Danya/danya_classic.png"],
	work(){final_iter(this)} 
}

const level43 = {
	"good-ending": {
		"1": "Фух, наконец всё закончилось, я так устал.",
		"2": "И не говори, даже не ели за весь день толком. Бегаем туда-сюда как белки в колесе.",
		"3": "Зато вы официально можете считаться героями сегодняшнего дня.",
		"4": "Вообще-то и ты тоже.",
		
		"5": "Да, ты отличный лидер. Без тебя мы бы не справились, спасибо!",
		"6": "Лесть командиру вознаграждается походом покушать! Это мы все заслужили.",
		"7": "Ураааа!",
		"8": "Так, только сейчас отвечу, это Александр Александрович.",
		
		"9": "Держись.",
		"10": "Этим и занимаюсь. Да, здравствуйте!",
		"11": "// Даниил, я не успел Вас застать сегодня, чтобы сказать всё лично, мне нужно было на совещание! Это было просто чудесно. Держите планку, как и всегда. //",
		"12": "Спасибо большое. Ваше мнение для меня очень важно.",
		
		"13": "А я переживал за него… Нам с такими вещами обычно не звонят.",
		"14": "// Знаете, я бы хотел Вам предложить на постоянной основе заниматься ведением проектов ФабЛаба. Я в Вас уверен и хотел бы, чтобы все мероприятия проходили, как сегодняшняя выставка. //",
		"15": "// Тем более, после такого успеха финансирование нам поднимут и можно будет устраивать мероприятия чаще. //»",
		"16": "Александр Александрович, я очень благодарен за предложение и с радостью его принимаю! Спасибо огромное! Мы очень хорошо сработались с ребятами. Они достаточно талантливы и организованны. Могу ли я продолжать работу с ними?", 
		
		"17": "Новая работа? Что?",
		"18": "// Хаха, ну что же. Я рад, что Вы предложили. Если они не против, я думаю, никаких проблем не возникнет. В течение следующей недели решим этот вопрос. До свидания. //",
		"19": "До свидания, Александр Александрович! Спасибо ещё раз.",
		"20": "Вот теперь давай поподробнее, о чём вы там говорили!",
		
		"21": "Да! Интересно же.",
		"22": "Расскажу вам, как поедим. Я сейчас отключусь, если не подниму уровень сахара",
		"23": "Тогда побежали скорее! Вперёёёёд!"
	},
	"good-ending-name":[zhenya, zhako, danya,zhenya, 
						zhako, danya, zhenya,danya,
						zhako,danya,"Телефон",danya, 
						zhako,"Телефон","Телефон",
						danya,zhenya,"Телефон",
						danya,zhako,zhenya,danya,
						zhenya],
	"good-ending-img": [imgPath + "Zhenya/zhenya_tired.png", imgPath + "Zhako/zhandos_razoch.png",imgPath+"Danya/danya_smiling2.png",imgPath + "Zhenya/zhenya_classic.png", 
						imgPath + "Zhako/zhandos_classic.png",imgPath+"Danya/danya_smiling2.png",imgPath + "Zhenya/zhenya_smile.png", imgPath+"Danya/danya_onPhone.png",
						imgPath+"Zhako/zhandos_confussed.png",imgPath+"Danya/danya_onPhone.png", "",imgPath+"Danya/danya_smiling_onPhone.png",
						imgPath + "Zhako/zhandos_classic.png", "","",
						imgPath+"Danya/danya_smiling_onPhone.png", imgPath+"Zhenya/zhenya_fright.png","",
						imgPath+"Danya/danya_smiling_onPhone.png",imgPath+"Zhako/zhandos_tallking.png",imgPath+"Zhenya/zhenya_smile2.png",imgPath+"Danya/danya_smiling2.png", 
						imgPath+"Zhenya/zhenya_smile.png"],
	"bad-ending": {
		"1": "Фух, наконец всё закончилось, я так устал.",
		"2": "И не говори, даже не ели за весь день толком. Бегаем туда-сюда как белки в колесе.",
		"3": "Зато вы официально можете считаться героями сегодняшнего дня.",
		"4": "Ну, не сказал бы.",
		
		"5": "Это да, получилось сильно хуже, чем я думал.",
		"6": "Простите меня, в этот раз я как лидер был плох…",
		"7": "Мы все напортачили, не взваливай всю вину на себя",
		"8": "Так, подождите, Александр Александрович звонит.",
		
		"9": "Держись.",
		"10": "Этим и занимаюсь. Да, здравствуйте!",
		"11": "// Даниил, я не успел Вас застать сегодня, чтобы поговорить, мне нужно было на совещание! Честно, дажe не знаю, что можно сказать. Раньше Вы не подводили.//",
		"12": "Простите, пожалуйста, я действительно многого не учёл в этот раз.",
		
		"13": "Уххх, началось.",
		"14": "// Знаете, после этого мероприятия я хотел предложить Вам официальное вступление в штат, но теперь мне не кажется это такой хорошей идеей. // // Самое печальное, что после подобного провала пострадает наше финансирование и мне очень сложно будет оправдаться перед начальством. //",
		"15": "Мне очень жаль, что так вышло, это целиком моя вина.",
		"16": "// Рад, что Вы это понимаете. Это всё, что я хотел сказать. До свидания. //",
		
		"17": "До свидания, Александр Александрович…",
		"18": "Ты как?",
		"19": "Нормально. По крайней мере пока что.",
		"20": "Давай пойдём поедим. А то сегодня весь день на ногах. И у Жени становится дикий взгляд, когда он голодный. Я начинаю бояться.",
		
		"21": "И ничего он не дикий, у меня просто сосуды в глазах тонкие, поэтому часто глаза краснеют.",
		"22": "Но выглядит правда страшно. В любом случае, я был рад с Вами работать. Жаль, что это в последний раз.",
		"23": "Не загадывай наперёд. Может он остынет и передумает.",
		"24": "Сильно сомневаюсь, но спасибо за поддержку. Пойдёмте скорее, а то уже поздно."
	},
	"bad-ending-name":[zhenya, zhako, danya, zhenya, 
						zhako, danya, zhenya, danya, 
						zhako,danya, "Телефон", danya, 
						zhako,"Телефон", danya,"Телефон",
						danya,zhenya,danya,zhako,
						zhenya, danya,zhenya,danya],
	"bad-ending-img": [imgPath + "Zhenya/zhenya_tired.png", imgPath + "Zhako/zhandos_razoch.png",imgPath+"Danya/danya_smiling2.png",imgPath+"Zhenya/zhenya_razoch.png", 
						imgPath+"Zhako/zhandos_razoch.png",imgPath+"Danya/danya_classic2.png",imgPath+"Zhenya/zhenya_tired2.png", imgPath+"Danya/danya_onPhone.png",
						imgPath+"Zhako/zhandos_classic.png",imgPath+"Danya/danya_onPhone.png", "",imgPath+"Danya/danya_onPhone.png",
						imgPath+"Zhako/zhandos_zloi.png", "",imgPath+"Danya/danya_onPhone.png","", 
						imgPath+"Danya/danya_onPhone.png",imgPath+"Zhenya/zhenya_classic2.png",imgPath+"Danya/danya_classic2.png", imgPath+"Zhako/zhandos_razoch.png",
						imgPath+"Zhenya/zhenya_classic2.png",imgPath+"Danya/danya_classic2.png", imgPath+"Zhenya/zhenya_classic.png",imgPath+"Danya/danya_smiling2.png"],
	work(){final_iter(this)}
}

if(localStorage["tappedMenu"] == 1){
	document.body.style.background = "url('./img/4italnii.jpg')"
	document.body.style.backgroundSize = "cover"
	level11.work()	
}

if(localStorage["tappedMenu"] == 2){
		
	if(localStorage["tappedLevel"] == 1) {
		document.body.style.background = "url('./img/hall.jpg')"
		document.body.style.backgroundSize = "cover"
		level21.work()
	}
	if(localStorage["tappedLevel"] == 2){
		document.body.style.background = "url('./img/ximia-2.jpg')"
		document.body.style.backgroundSize = "cover"
		level22.work()
	}
}
if(localStorage["tappedMenu"] == 3){
		
	if(localStorage["tappedLevel"] == 1) {
		document.body.style.background = "url('./img/hall.jpg')"
		document.body.style.backgroundSize = "cover"
		level31.work()
	}
	if(localStorage["tappedLevel"] == 2){
		level32.work()
	}
}

if(localStorage["tappedMenu"] == 4){
		
	if(localStorage["tappedLevel"] == 1) {
		document.body.style.background = "url('./img/hall.jpg')"
		document.body.style.backgroundSize = "cover"
		level41.work()
	}
	if(localStorage["tappedLevel"] == 2){
		document.body.style.background = "url('./img/theatre.jpg')"
		document.body.style.backgroundSize = "cover"
		level42.work()
	}
	if(localStorage["tappedLevel"] == 3){
		document.body.style.background = "url('./img/polytech.jpg')"
		document.body.style.backgroundSize = "cover"
		level43.work()
	}
}

