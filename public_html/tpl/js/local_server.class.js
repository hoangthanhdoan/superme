function DIFFICULT_NATIONAL(){
    return 1;
}
function DIFFICULT_INTERNATIONAL(){
    return 2;
}
function DIFFICULT_WORLD(){
    return 3;
}
function DIFFICULT_FREEDOM(){
    return 4;
}
function GAMETYPE_NAME_AND_FACE(){
    return 1;
}
function GAMETYPE_BINARY_NUMBER(){
    return 2;
}
function GAMETYPE_RANDOM_NUMBER(){
    return 3;
}
function GAMETYPE_ABSTRACT_IMAGES(){
    return 4;
}
function GAMETYPE_SPEED_NUMBER(){
    return 5;
}
function GAMETYPE_HISTORY_FUTURE_DATES(){
    return 6;
}
function GAMETYPE_RANDOM_CARD(){
    return 7;
}
function GAMETYPE_RANDOM_WORD(){
    return 8;
}
function GAMETYPE_SPOKEN_NUMBER(){
    return 9;
}
function GAMETYPE_SPEED_CARDS(){
    return 10;
}

var Game_type = {
    _game_random_number: 1,
    _game_random_number2: 2
}

function decodeVNString(str){
    str = str.toLowerCase().trim();
    
    var dictDau = {};
    dictDau["ú"] = "s";
    dictDau["ứ"] = "s";
    dictDau["é"] = "s";
    dictDau["ế"] = "s";
    dictDau["ó"] = "s";
    dictDau["ớ"] = "s";
    dictDau["ố"] = "s";
    dictDau["á"] = "s";
    dictDau["ắ"] = "s";
    dictDau["ấ"] = "s";
    dictDau["í"] = "s";
    dictDau["ý"] = "s";
    
    
    dictDau["ù"] = "f";
    dictDau["ừ"] = "f";
    dictDau["è"] = "f";
    dictDau["ề"] = "f";
    dictDau["ò"] = "f";
    dictDau["ờ"] = "f";
    dictDau["ồ"] = "f";
    dictDau["à"] = "f";
    dictDau["ằ"] = "f";
    dictDau["ầ"] = "f";
    dictDau["ì"] = "f";
    dictDau["ỳ"] = "f";
    
    dictDau["ủ"] = "r";
    dictDau["ử"] = "r";
    dictDau["ẻ"] = "r";
    dictDau["ể"] = "r";
    dictDau["ỏ"] = "r";
    dictDau["ở"] = "r";
    dictDau["ổ"] = "r";
    dictDau["ả"] = "r";
    dictDau["ẳ"] = "r";
    dictDau["ẩ"] = "r";
    dictDau["ỉ"] = "r";
    dictDau["ỷ"] = "r";
    
    dictDau["ũ"] = "x";
    dictDau["ữ"] = "x";
    dictDau["ẽ"] = "x";
    dictDau["ễ"] = "x";
    dictDau["õ"] = "x";
    dictDau["ỡ"] = "x";
    dictDau["ỗ"] = "x";
    dictDau["ã"] = "x";
    dictDau["ẵ"] = "x";
    dictDau["ẫ"] = "x";
    dictDau["ĩ"] = "x";
    dictDau["ỹ"] = "x";
    
    dictDau["ụ"] = "j";
    dictDau["ự"] = "j";
    dictDau["ẹ"] = "j";
    dictDau["ệ"] = "j";
    dictDau["ọ"] = "j";
    dictDau["ợ"] = "j";
    dictDau["ộ"] = "j";
    dictDau["ạ"] = "j";
    dictDau["ặ"] = "j";
    dictDau["ậ"] = "j";
    dictDau["ị"] = "j";
    dictDau["ỵ"] = "j";
    
    
    var dictTu = {};
    dictTu["ú"] = "u";
    dictTu["ứ"] = "ư";
    dictTu["é"] = "e";
    dictTu["ế"] = "ê";
    dictTu["ó"] = "o";
    dictTu["ớ"] = "ơ";
    dictTu["ố"] = "ô";
    dictTu["á"] = "a";
    dictTu["ắ"] = "ă";
    dictTu["ấ"] = "â";
    dictTu["í"] = "i";
    dictTu["ý"] = "y";
    
    
    dictTu["ù"] = "u";
    dictTu["ừ"] = "ư";
    dictTu["è"] = "e";
    dictTu["ề"] = "ê";
    dictTu["ò"] = "o";
    dictTu["ờ"] = "ơ";
    dictTu["ồ"] = "ô";
    dictTu["à"] = "a";
    dictTu["ằ"] = "ă";
    dictTu["ầ"] = "â";
    dictTu["ì"] = "i";
    dictTu["ỳ"] = "y";
    
    dictTu["ủ"] = "u";
    dictTu["ử"] = "ư";
    dictTu["ẻ"] = "e";
    dictTu["ể"] = "ê";
    dictTu["ỏ"] = "o";
    dictTu["ở"] = "ơ";
    dictTu["ổ"] = "ô";
    dictTu["ả"] = "a";
    dictTu["ẳ"] = "ă";
    dictTu["ẩ"] = "â";
    dictTu["ỉ"] = "i";
    dictTu["ỷ"] = "y";
    
    dictTu["ũ"] = "u";
    dictTu["ữ"] = "ư";
    dictTu["ẽ"] = "e";
    dictTu["ễ"] = "ê";
    dictTu["õ"] = "o";
    dictTu["ỡ"] = "ơ";
    dictTu["ỗ"] = "ô";
    dictTu["ã"] = "a";
    dictTu["ẵ"] = "ă";
    dictTu["ẫ"] = "â";
    dictTu["ĩ"] = "i";
    dictTu["ỹ"] = "y";
    
    
    dictTu["ụ"] = "u";
    dictTu["ự"] = "ư";
    dictTu["ẹ"] = "e";
    dictTu["ệ"] = "ê";
    dictTu["ọ"] = "o";
    dictTu["ợ"] = "ơ";
    dictTu["ộ"] = "ô";
    dictTu["ạ"] = "a";
    dictTu["ặ"] = "ă";
    dictTu["ậ"] = "â";
    dictTu["ị"] = "i";
    dictTu["ỵ"] = "y";
    
    var strnew = "";
    var strnewdau = "";
    
    for (var i = 0; i < str.length; i++) {
        var character = str.substring(i, i+1);
        var dau = dictDau[character];
        var tempChar = "";
        if (dau){
            tempChar = dictTu[character];
            strnewdau = strnewdau+dau;
        }else{
            tempChar = character;
        }
        strnew = strnew+tempChar;
    }
    
    strnew = strnew+strnewdau;
    return strnew;
}

function compareVNString(str1, str2){
    var str1s = decodeVNString(str1);
    var str2s = decodeVNString(str2);
    
    return (str1s === str2s);
}


class Local_Server{
    constructor(para) {
        if (para == null) var para = {};
        if (para.game_type == null) para.game_type = Game_type._game_random_number;
        
    }
    
    /** Dung de sinh de
        Output: json
     **/
    generate(paraInput, callback){
        //window.alert(decodeVNString("Thân chào các bạn yêu quý của tôi ơi. có nghe tôi nói gì không?"));

        var game_type = paraInput.game_type;
        var game_mode = paraInput.game_mode;
        if (game_type == GAMETYPE_SPEED_NUMBER())
        {
            var generate = new ServerSpeedNumber();
            generate.generate(paraInput,callback);
            return;
        }else if(game_type == GAMETYPE_RANDOM_NUMBER()) {
            var generate = new ServerRandomNumber();
            generate.generate(paraInput,callback);
        }else if(game_type == GAMETYPE_BINARY_NUMBER()) {
            var generate = new ServerBinaryNumber();
            generate.generate(paraInput,callback);
        }else if(game_type == GAMETYPE_SPOKEN_NUMBER()) {
            var generate = new ServerSpokenNumber();
            generate.generate(paraInput,callback);
        }else if(game_type == GAMETYPE_NAME_AND_FACE()) {
            var generate = new ServerNameAndFace();
            generate.generate(paraInput,callback);
        }else if(game_type == GAMETYPE_ABSTRACT_IMAGES()) {
            var generate = new ServerAbstractImage();
            generate.generate(paraInput,callback);
        }else if(game_type == GAMETYPE_HISTORY_FUTURE_DATES()) {
            var generate = new ServerHictoricAndFutureDate();
            generate.generate(paraInput,callback);
        }else if(game_type == GAMETYPE_RANDOM_WORD()) {
            var generate = new ServerRandomWord();
            generate.generate(paraInput,callback);
            //window.alert("1234 speed" + compareVNString("cột điện cao thế","  Cột điện cao thế"));
        }else if(game_type == GAMETYPE_RANDOM_CARD()) {
            var generate = new ServerRandomCard();
            generate.generate(paraInput,callback);
        }else if(game_type == GAMETYPE_SPEED_CARDS()) {
            
            var generate = new ServerSpeedCard();
            generate.generate(paraInput,callback);
        }
    }
    
    /** Dung de sinh de
        Output: json
     **/
    check_mark(paraInput, callback){
        var game_type = paraInput.gameInfo.gameType;
        var game_mode = paraInput.gameInfo.difficultType;
        
        var checkCallback = function(isSuccess, errorCode, errorMessage, resultPara){
            callback(isSuccess, errorCode, errorMessage, resultPara);

            resultPara = JSON.parse(JSON.stringify(resultPara));
            var gameInfo = resultPara.gameInfo;
            var examQuestions = resultPara.examQuestions;
            var questions = resultPara.questions;

            for (var c = 0; c < questions.items.length; c++) {
                var questionItemDict = questions.items[c];
                var answerItem = questionItemDict.answer;

                var questionItem = questionItemDict.question;
                if (questionItem.hasOwnProperty("title")){
                    questionItem.title = questionItem.title + "";
                }
                if (questionItem.hasOwnProperty("subtitle")){
                    questionItem.subtitle = questionItem.subtitle + "";
                }

                if (answerItem.hasOwnProperty("value1") && answerItem.value1 == -1){
                    answerItem.value1 = "";
                }else if (answerItem.hasOwnProperty("value1")){
                    answerItem.value1 = answerItem.value1 + "";
                }
                if (answerItem.hasOwnProperty("value2") && answerItem.value2 == -1){
                    answerItem.value2 = "";
                }else if (answerItem.hasOwnProperty("value2")){
                    answerItem.value2 = answerItem.value2 + "";
                }
            }
            var detail = JSON.stringify(resultPara);
            var contentInput = {"content":{"email": user_logined.email,"difficult_type":game_mode,"game_type":game_type,"score":questions.score,"error_num":0,"detail":detail,"memory_time":questions.memoryTime,"answer_time":questions.recallTime} };
            
            REQUEST_SEND_TRAINING_REQUEST(contentInput, function(rs){
                var objs = JSON.parse(rs);
                //window.alert(rs);
                //var data = objs.content.array;
                
            });
            // var inputContent = input.content;
            // var email = inputContent.email;
            // var difficulty = inputContent.difficult_type;
            // var game_type = inputContent.game_type;
            // var score = inputContent.score;
            // var memory_time = inputContent.memory_time;
            var contentInput2 = {"content":{"email": user_logined.email,"difficult_type":game_mode,"game_type":game_type,"score":questions.score,"error_num":0,"memory_time":questions.memoryTime,"answer_time":questions.recallTime} };
            REQUEST_CALCULATE_LEVEL_REQUEST(contentInput, function(rs){
                var objDict = JSON.parse(rs).content;
                var oldLevel = objDict.oldLevel;
                var currentLevel = objDict.level;
                var arrayLevel = objDict.listLevel;
                
                var message = "";
                if (oldLevel==currentLevel){
                    message = message + "\n Bạn đang ở level " + currentLevel;
                }else{
                    message = message + "\n XIN CHÚC MỪNG \n bạn vừa đạt được level " + currentLevel;
                }

                message = message + "\n Để đạt được level tiếp theo (level " +(currentLevel+1)+ ") bạn cần Hoàn Thành được các mục tiêu chưa đạt bên dưới: \n";
                var datas = [[],[],[],[],[],[],[],[],[],[],[]];
                var titles = ["","","","","","","","","","",""];
                var indexCalculatorLevels = [1,GAMETYPE_RANDOM_WORD(),GAMETYPE_RANDOM_NUMBER(),GAMETYPE_HISTORY_FUTURE_DATES(),GAMETYPE_SPEED_NUMBER(),GAMETYPE_SPEED_CARDS(),GAMETYPE_RANDOM_CARD(),GAMETYPE_BINARY_NUMBER(),GAMETYPE_SPOKEN_NUMBER(),GAMETYPE_ABSTRACT_IMAGES(),GAMETYPE_NAME_AND_FACE()];
                {
                    datas[GAMETYPE_RANDOM_WORD()] = [20,25,30,40,50,60,70,80,90,100];
                    titles[GAMETYPE_RANDOM_WORD()] = "15 phút nhớ Từ";
                }{
                    datas[GAMETYPE_RANDOM_NUMBER()] = [0,40,60,80,100,120,140,160,180,200];
                    titles[GAMETYPE_RANDOM_NUMBER()] = "15 phút nhớ Số Ngẫu Nhiên";
                }
                {
                    datas[GAMETYPE_HISTORY_FUTURE_DATES()] = [0,0,6,8,10,12,14,16,18,20];
                    titles[GAMETYPE_HISTORY_FUTURE_DATES()] = "5 phút nhớ Lịch Sử";
                }
                {
                    datas[GAMETYPE_SPEED_NUMBER()] = [0,0,0,20,30,40,50,60,80,100];
                    titles[GAMETYPE_SPEED_NUMBER()] = "5 phút nhớ Số Nhanh";
                }{
                    datas[GAMETYPE_SPEED_CARDS()] = [0,0,0,0,10,20,30,40,50,52];
                    titles[GAMETYPE_SPEED_CARDS()] = "5 phút nhớ Bài Nhanh";
                }{
                    datas[GAMETYPE_RANDOM_CARD()] = [0,0,0,0,0,52,65,78,91,104];
                    titles[GAMETYPE_RANDOM_CARD()] = "10 phút nhớ Bài Ngẫu Nhiên";
                }{
                    datas[GAMETYPE_BINARY_NUMBER()] = [0,0,0,0,0,0,190,220,250,280];
                    titles[GAMETYPE_BINARY_NUMBER()] = "5 phút nhớ Số Nhị Phân";
                }{
                    datas[GAMETYPE_SPOKEN_NUMBER()] = [0,0,0,0,0,0,0,20,30,40];
                    titles[GAMETYPE_SPOKEN_NUMBER()] = "60 phút nghe nhớ Số";
                }{
                    datas[GAMETYPE_ABSTRACT_IMAGES()] = [0,0,0,0,0,0,0,0,75,100];
                    titles[GAMETYPE_ABSTRACT_IMAGES()] = "15 phút Hình trừu tượng";
                }{
                    datas[GAMETYPE_NAME_AND_FACE()] = [0,0,0,0,0,0,0,0,0,20];
                    titles[GAMETYPE_NAME_AND_FACE()] = "5 phút Tên Và Gương mặt";
                }
                for (var i = 1; i <= currentLevel+1; i++) {
                    console.log("TINHLEVEL "+i);
                    var gameTypeABC = indexCalculatorLevels[i];
                    message = message + "\n " + titles[gameTypeABC] + "\t Điểm: " + datas[gameTypeABC][currentLevel+1] + "\t Trạng Thái: " + (arrayLevel[gameTypeABC]>currentLevel?"Hoàn Thành":"Chưa Đạt");
                }

                window.alert(message);
                //var data = objs.content.array;
                
            });
        }

        //window.alert(game_type+"game_type");
        //window.alert(game_mode+"game_mode");
        if (game_type == GAMETYPE_RANDOM_NUMBER())//speed  number
        {
            var generate = new ServerRandomNumber();
            generate.check_mark(paraInput,checkCallback);
            return;
        }if (game_type == GAMETYPE_SPEED_NUMBER())//speed  number
        { 
            var generate = new ServerSpeedNumber();
            generate.check_mark(paraInput,checkCallback);
            return;
        }else if(game_type == GAMETYPE_BINARY_NUMBER()) {
            var generate = new ServerBinaryNumber();
            generate.check_mark(paraInput,checkCallback);
        }else if(game_type == GAMETYPE_SPOKEN_NUMBER()) {
            var generate = new ServerSpokenNumber();
            generate.check_mark(paraInput,checkCallback);
        }else if(game_type == GAMETYPE_NAME_AND_FACE()) {
            var generate = new ServerNameAndFace();
            generate.check_mark(paraInput,checkCallback);
        }else if(game_type == GAMETYPE_ABSTRACT_IMAGES()) {
            var generate = new ServerAbstractImage();
            generate.check_mark(paraInput,checkCallback);
        }else if(game_type == GAMETYPE_HISTORY_FUTURE_DATES()) {
            var generate = new ServerHictoricAndFutureDate();
            generate.check_mark(paraInput,checkCallback);
        }else if(game_type == GAMETYPE_RANDOM_WORD()) {
            var generate = new ServerRandomWord();
            generate.check_mark(paraInput,checkCallback);
        }else if(game_type == GAMETYPE_RANDOM_CARD()) {
            //window.alert("1234 random");
            var generate = new ServerRandomCard();
            generate.check_mark(paraInput,checkCallback);
        }else if(game_type == GAMETYPE_SPEED_CARDS()) {
            //window.alert("1234 speed");
            var generate = new ServerSpeedCard();
            generate.check_mark(paraInput,checkCallback);
        }


        
    }
}

class ServerSpeedCard{
    generate(paraInput, callback){
        var game_type = paraInput.game_type;
        var game_mode = paraInput.game_mode;

        var column = 1;
        var row = 158;
        var count = column*row;
        var memoryTime = 300;
        var recallTime = 300;

        if (game_mode == DIFFICULT_NATIONAL()){
            column = 52;
            row = 1;
            count = column*row;
            memoryTime = 60*5;
            recallTime = 60*5;
        }else if (game_mode == DIFFICULT_INTERNATIONAL()){
            column = 52;
            row = 1;
            count = column*row;
            memoryTime = 60*5;
            recallTime = 60*5;
        }else if (game_mode == DIFFICULT_WORLD()){
            column = 52;
            row = 1;
            count = column*row;
            memoryTime = 60*5;
            recallTime = 60*5;
        }else if (game_mode == DIFFICULT_FREEDOM()){
            column = 52;
            row = 1;//paraInput.rowCount;
            count = column*row;
        }
        var gameInfo = {
                    "amount": 0,
                    "displayName": "Speed Card",
                    "answerTime": recallTime,
                    "prepareTime": 60,
                    "gameType": game_type,
                    "speed":1,
                    "difficultType": game_mode,
                    "readExamTime": memoryTime
                    };
        
        var examQuestionItems = [];
        var examQuestions = {
            "column": column,
            "row": row,
            "count" : count,
            "items": examQuestionItems
        }
        {
            var questionCount = count;

            var resultArray = examQuestionItems;
            try{

                for (var r = 0; r < row; r++) {
                    var list = [];
                    for (var i = 0; i < 13; i++) {
                        list.push((i+1)+"a");
                        list.push((i+1)+"b");
                        list.push((i+1)+"c");
                        list.push((i+1)+"d");
                    }

                    for (var c = 0; c < column; c++) {
                        var index = JS_RAND(0,list.length);
                        var item = {};
                        item.title = list[index];
                        item.image = 'tpl/images/poker_'+item.title+'@3x.png';
                        resultArray.push(item);
                        list.splice(index, 1);
                    }
                }
                

            }catch(e){
                console.log("ERRROR SINH DE : "+e);
            }
        }

        var questionItems = [];
        var question = {
            "column": column,
            "row": row,
            "count" : count,
            "items": questionItems
        }
        {
            for (var i = 0; i < count; i++){
                var questionItemDict = examQuestionItems[i];
                var awserItemDict = {"value1":"","value2":""};
                var itemDict = {"question":questionItemDict, "answer":awserItemDict};
                questionItems.push(itemDict);
            }
        }

        var resultPara = {
            "gameInfo": gameInfo,
            "examQuestions": examQuestions,
            "questions": question
        }

        //xu ly sinh de
        var isSuccess = true;
        var errorCode = 0;
        var errorMessage = 0;
        callback(isSuccess, errorCode, errorMessage, resultPara);
        
    }
    check_mark(paraInput, callback){


        function valueOfCell(r,c, questions){
            var column = questions.column;
            return questions.items[r * column + c];
        }

        function checkAnwserEmpty(answerItem){
            //window.alert("item:"+answerItem.value1+"compare:" + (answerItem.value1 === "-1"));
            //window.alert("item:"+answerItem.value1+"value2:" + answerItem.value2);
            if ((answerItem.value1 === "-1" || answerItem.value1.length == 0) && (answerItem.value2 === "-1"  || answerItem.value2.length == 0)){
                return true;
            }
            return false;
        }

        function checkEmptyRow(r, questions){
            var column = questions.column;
            for (var c = 0; c < column; c++) {
                var questionItemDict = valueOfCell(r,c,questions);
                var answerItem = questionItemDict.answer;
                if (!checkAnwserEmpty(answerItem)){
                    return false;
                }
            }
            return true;
        }

        function scoreForMiddleRow(r, questions){
            var column = questions.column;
            var score = 0;
            var answerCount = column;
            for (var c = 0; c < column; c++) {
                var questionItemDict = valueOfCell(r,c,questions);
                // var answerItem = questionItemDict.answer;
                // var questionItem = questionItemDict.question;
                if (questionItemDict.correct){
                    score++;
                }
            }
            //window.alert(r+ " middle score: "+ score +" answer: " + answerCount);
            if (score == answerCount) return score;
            if (score == answerCount-1) return Math.round(score/2);
            return 0;
        }

        function scoreForEndRow(r, questions){
            var column = questions.column;
            var score = 0;
            var answerCount = 0;
            for (var c = Math.min(questions.count-questions.column*r-1,questions.column-1); c>= 0; c--) {
                var questionItemDict = valueOfCell(r,c,questions);
                var answerItem = questionItemDict.answer;

                if (!checkAnwserEmpty(answerItem)){
                    answerCount = c+1;
                    break;
                }
            }

            for (var c = 0; c < column; c++) {
                var questionItemDict = valueOfCell(r,c,questions);
                var answerItem = questionItemDict.answer;
                // var questionItem = questionItemDict.question;
                // answerCount++;
                if (!checkAnwserEmpty(answerItem)){
                    if (questionItemDict.correct) score++;
                }
            }
            //window.alert(r+" end score: "+ score +" answer: " + answerCount);
            if (score == answerCount) return score;
            if (score == answerCount-1) return Math.round(score/2);
            return 0;
        }


        // var question = paraInput.question;
        var gameInfo = paraInput.gameInfo;
        var examQuestions = paraInput.examQuestions;
        var questions = paraInput.questions;
        var column = examQuestions.column;
        var row = examQuestions.row;
        var count = examQuestions.count;

        var score = 0;


        //cap nhat cacs gia tri correct1, correct2, correct3
        for (var i = 0; i < count; i++){
            var questionItemDict = questions.items[i];
            var answerItem = questionItemDict.answer;
            var questionItem = questionItemDict.question;
            questionItemDict.correct1 = false;
            questionItemDict.correct2 = false;
            if (answerItem.hasOwnProperty("value1") && questionItem.hasOwnProperty("title")){
                questionItemDict.correct1 = (answerItem.value1 == questionItem.title);
            }
            if (answerItem.hasOwnProperty("value2") && questionItem.hasOwnProperty("subtitle")){
                questionItemDict.correct2 = (answerItem.value2 == questionItem.subtitle);
            }
            questionItemDict.correct = questionItemDict.correct1;// && questionItemDict.correct2;
        }

        //tinh diem cho question
        // tinh diem cho dong cuoi cung
        var r = row-1;
        for (; r >= 0; r--){
            if (!checkEmptyRow(r, questions)){
                score+= scoreForEndRow(r, questions);
                r --;
                break;
            }
        }

        // tinh deim cho dong o giua 
        for (; r >= 0; r--){
            if (!checkEmptyRow(r, questions)){
                score+= scoreForMiddleRow(r, questions);
            }
        }

        //window.alert(score+"diem");

        questions.score = score;
        // questions.recallTime = 100;//tam bo
        // questions.memoryTime = 100;//tam bo
        //xu ly sinh de
        var resultPara = paraInput;
        var isSuccess = true;
        var errorCode = 0;
        var errorMessage = 0;
        callback(isSuccess, errorCode, errorMessage, resultPara);
    }
}
class ServerRandomCard{
    generate(paraInput, callback){
        var game_type = paraInput.game_type;
        var game_mode = paraInput.game_mode;

        var column = 1;
        var row = 158;
        var count = column*row;
        var memoryTime = 300;
        var recallTime = 300;

        if (game_mode == DIFFICULT_NATIONAL()){
            column = 52;
            row = 100;
            count = column*row;
            memoryTime = 60*10;
            recallTime = 60*30;
        }else if (game_mode == DIFFICULT_INTERNATIONAL()){
            column = 52;
            row = 100;
            count = column*row;
            memoryTime = 60*30;
            recallTime = 60*60;
        }else if (game_mode == DIFFICULT_WORLD()){
            column = 52;
            row = 100;
            count = column*row;
            memoryTime = 60*60;
            recallTime = 60*120;
        }else if (game_mode == DIFFICULT_FREEDOM()){
            column = 52;
            row = paraInput.rowCount;
            count = column*row;
        }
        var gameInfo = {
                    "amount": 0,
                    "displayName": "Random Card",
                    "answerTime": recallTime,
                    "prepareTime": 60,
                    "gameType": game_type,
                    "speed":1,
                    "difficultType": game_mode,
                    "readExamTime": memoryTime
                    };
        
        var examQuestionItems = [];
        var examQuestions = {
            "column": column,
            "row": row,
            "count" : count,
            "items": examQuestionItems
        }
        {
            var questionCount = count;

            var resultArray = examQuestionItems;
            try{

                for (var r = 0; r < row; r++) {
                    var list = [];
                    for (var i = 0; i < 13; i++) {
                        list.push((i+1)+"a");
                        list.push((i+1)+"b");
                        list.push((i+1)+"c");
                        list.push((i+1)+"d");
                    }

                    for (var c = 0; c < column; c++) {
                        var index = JS_RAND(0,list.length);
                        var item = {};
                        item.title = list[index];
                        item.image = 'tpl/images/poker_'+item.title+'@3x.png';
                        resultArray.push(item);
                        list.splice(index, 1);
                    }
                }
                

            }catch(e){
                console.log("ERRROR SINH DE : "+e);
            }
        }

        var questionItems = [];
        var question = {
            "column": column,
            "row": row,
            "count" : count,
            "items": questionItems
        }
        {
            for (var i = 0; i < count; i++){
                var questionItemDict = examQuestionItems[i];
                var awserItemDict = {"value1":"","value2":""};
                var itemDict = {"question":questionItemDict, "answer":awserItemDict};
                questionItems.push(itemDict);
            }
        }

        var resultPara = {
            "gameInfo": gameInfo,
            "examQuestions": examQuestions,
            "questions": question
        }

        //xu ly sinh de
        var isSuccess = true;
        var errorCode = 0;
        var errorMessage = 0;
        callback(isSuccess, errorCode, errorMessage, resultPara);
        
    }
    check_mark(paraInput, callback){


        function valueOfCell(r,c, questions){
            var column = questions.column;
            return questions.items[r * column + c];
        }

        function checkAnwserEmpty(answerItem){
            //window.alert("item:"+answerItem.value1+"compare:" + (answerItem.value1 === "-1"));
            //window.alert("item:"+answerItem.value1+"value2:" + answerItem.value2);
            if ((answerItem.value1 === "-1" || answerItem.value1.length == 0) && (answerItem.value2 === "-1"  || answerItem.value2.length == 0)){
                return true;
            }
            return false;
        }

        function checkEmptyRow(r, questions){
            var column = questions.column;
            for (var c = 0; c < column; c++) {
                var questionItemDict = valueOfCell(r,c,questions);
                var answerItem = questionItemDict.answer;
                if (!checkAnwserEmpty(answerItem)){
                    return false;
                }
            }
            return true;
        }

        function scoreForMiddleRow(r, questions){
            var column = questions.column;
            var score = 0;
            var answerCount = column;
            for (var c = 0; c < column; c++) {
                var questionItemDict = valueOfCell(r,c,questions);
                // var answerItem = questionItemDict.answer;
                // var questionItem = questionItemDict.question;
                if (questionItemDict.correct){
                    score++;
                }
            }
            //window.alert(r+ " middle score: "+ score +" answer: " + answerCount);
            if (score == answerCount) return score;
            if (score == answerCount-1) return Math.round(score/2);
            return 0;
        }

        function scoreForEndRow(r, questions){
            var column = questions.column;
            var score = 0;
            var answerCount = 0;
            for (var c = Math.min(questions.count-questions.column*r-1,questions.column-1); c>= 0; c--) {
                var questionItemDict = valueOfCell(r,c,questions);
                var answerItem = questionItemDict.answer;

                if (!checkAnwserEmpty(answerItem)){
                    answerCount = c+1;
                    break;
                }
            }

            for (var c = 0; c < column; c++) {
                var questionItemDict = valueOfCell(r,c,questions);
                var answerItem = questionItemDict.answer;
                // var questionItem = questionItemDict.question;
                // answerCount++;
                if (!checkAnwserEmpty(answerItem)){
                    if (questionItemDict.correct) score++;
                }
            }
            //window.alert(r+" end score: "+ score +" answer: " + answerCount);
            if (score == answerCount) return score;
            if (score == answerCount-1) return Math.round(score/2);
            return 0;
        }


        // var question = paraInput.question;
        var gameInfo = paraInput.gameInfo;
        var examQuestions = paraInput.examQuestions;
        var questions = paraInput.questions;
        var column = examQuestions.column;
        var row = examQuestions.row;
        var count = examQuestions.count;

        var score = 0;


        //cap nhat cacs titlegia tri correct1, correct2, correct3

        for (var i = 0; i < count; i++){
            var questionItemDict = questions.items[i];
            var answerItem = questionItemDict.answer;
            var questionItem = questionItemDict.question;
            questionItemDict.correct1 = false;
            questionItemDict.correct2 = false;
            if (answerItem.hasOwnProperty("value1") && questionItem.hasOwnProperty("title")){
                questionItemDict.correct1 = (answerItem.value1 == questionItem.title);
            }
            if (answerItem.hasOwnProperty("value2") && questionItem.hasOwnProperty("subtitle")){
                questionItemDict.correct2 = (answerItem.value2 == questionItem.subtitle);
            }
            questionItemDict.correct = questionItemDict.correct1;// && questionItemDict.correct2;
        }

        //tinh diem cho question
        // tinh diem cho dong cuoi cung
        var r = row-1;
        for (; r >= 0; r--){
            if (!checkEmptyRow(r, questions)){
                score+= scoreForEndRow(r, questions);
                r --;
                break;
            }
        }

        // tinh deim cho dong o giua 
        for (; r >= 0; r--){
            if (!checkEmptyRow(r, questions)){
                score+= scoreForMiddleRow(r, questions);
            }
        }

        // window.alert(JSON.stringify(questions));
        // window.alert(score+"diem");

        questions.score = score;
        // questions.recallTime = 100;//tam bo
        // questions.memoryTime = 100;//tam bo
        //xu ly sinh de
        var resultPara = paraInput;
        var isSuccess = true;
        var errorCode = 0;
        var errorMessage = 0;
        callback(isSuccess, errorCode, errorMessage, resultPara);
    }
}

class ServerRandomWord{
    generate(paraInput, callback){
        var game_type = paraInput.game_type;
        var game_mode = paraInput.game_mode;

        var column = 1;
        var row = 158;
        var count = column*row;
        var memoryTime = 300;
        var recallTime = 300;

        if (game_mode == DIFFICULT_NATIONAL()){
            column = 20;
            row = 8;
            count = column*row;
            memoryTime = 60*5;
            recallTime = 60*15;
        }else if (game_mode == DIFFICULT_INTERNATIONAL()){
            column = 20;
            row = 18;
            count = column*row;
            memoryTime = 60*15;
            recallTime = 60*40;
        }else if (game_mode == DIFFICULT_WORLD()){
            column = 20;
            row = 18;
            count = column*row;
            memoryTime = 60*15;
            recallTime = 60*40;
        }else if (game_mode == DIFFICULT_FREEDOM()){
            column = 20;
            row = paraInput.rowCount;
            count = column*row;
        }
        var gameInfo = {
                    "amount": 0,
                    "displayName": "Random word",
                    "answerTime": recallTime,
                    "prepareTime": 60,
                    "gameType": game_type,
                    "speed":1,
                    "difficultType": game_mode,
                    "readExamTime": memoryTime
                    };
        
        var examQuestionItems = [];
        var examQuestions = {
            "column": column,
            "row": row,
            "count" : count,
            "items": examQuestionItems
        }
        {
            var questionCount = count;

            var resultArray = examQuestionItems;
            try{

                var datas = ["Đu dây","Học viện","Sự nhào lộn","Không trung","Tình cảm","Đồng ý","Sự ngạc nhiên","Bùa","Áo khoác đông","Dấu nháy đơn","Bắt giữ","Người ngu","Tiểu hành tinh","Con lửng","Cây tre","Ban nhạc","Vòng tay","Ngân hàng","Bồn rửa mặt","Bãi biển","Sắc đẹp","Cái chuông","Cá cược","Cái yếm","Con thuyền","Quả bom","Giầy ống","Sếp","Cái hộp","Bộ não","Tính dũng cảm","Bánh mì","Tính toán","Súng đại bác","Mái hiên","Xe hơi","Cái bình","Máy phóng đá","Bắt lấy","Con sâu bướm","Cần tây","Từ thiện","Thời thơ ấu","Sóc chuột","Rạp xiếc","Huấn luyện viên","Jacket","Đồng tiền","Sự thoải mái","Truyện tranh","Sự giao tiếp","Bê tông","Sự nhầm lẫn","Kết nối","Chinh phục","Tu viện","Bánh quy","Nút chai","Ghế trường kỷ","Tội ác","Cá sấu","Hình lập phương","Chim cu","Văn hóa","Cái ly","Cái gối","Hình trụ","Dao găm","Hoa cúc","Cây thương","Ngày","Tranh luận","Phát hiện","Giọt sương","Mặt đồng hồ","Sự thất vọng","Tình trạng khó xử","Bữa tối","Khủng long","Bụi bẩn","Biến mất","Loại bỏ","Món ăn","Giải tán","Con mương","Thợ lặn","Bến tàu","Bác sĩ","Tài liệu","Sự che khuất","Trứng","Con voi","Ngọc lục bảo","Thuê","Đà điểu","Phóng to","Đi vào","Lòng ghen","Trốn thoát","Bất động sản","Tai nạn","Người điều hành","Trưng bày","Chuyên gia","Mắt","Mặt","Nàng tiên","Nỗi sợ","Lông vũ","Học phí","Kẻ sát nhân","Cây dương sỉ","Phà","Chuyện viễn tưởng","Cánh đồng","Ngón tay","Bọ chét","Sàn nhà","Cái nĩa","Pháo đài","Con cáo","Khung","Nấm","Cái phễu","Lông thú","Thiên hà","Nhà để xe","Khí ga","Cổng","Bàn tay sắt","Đá quý","Người khổng lồ","Món quà","Đấu sĩ","Quả địa cầu","Keo","Con ngỗng","Nho","Con thú thần thoại","Cửa hàng tạp hóa","Sự phát triển","Phòng tập thể dục","Tóc","Bóng đèn","Bàn tay","Tay cầm","Hải cảng","Thụ cầm","Cây lao","Nón","Nhiệt","Hàng rào","Máy trục","Mui xe","Khách sạn","Nhà ở","Khí hydro","Đốt cháy","Chiếu sáng","Nhập khẩu","Tánh do dự","Cây chàm","Côn trùng","Thanh tra","Sự thông minh","Người phát minh","Đầu tư","Mống mắt","Bàn ủi","Hòn đảo","Ngà voi","Dây leo Thường Xuân","Áo khoác","Nhật ký","Niềm hân hoan","Đan","Bãi cỏ","Chân","Cái nắp","Cuộc sống","Ánh sáng","Vải lanh","Cây đà ngang","Đà mã","Xe tải","Con chí","Tình yêu","Sự may mắn","Cục bướu","Vẹt đuôi dài","Đàn ông","Người nộm ma nơ canh","Bữa ăn","Huy chương","Màng (tế bào)","Trí nhớ","Lòng nhân từ","Kim loại","Thiên thạch","Kính hiển vi","Nấm mốc","Sữa","Cối xay","Mỏ than","Cây bạc hà","Ảo ảnh","Gương","Sương mù","Bọn du côn","Người mẫu","Nhà sư","Mẹ","Động cơ","Bức tranh tường","Cơ bắp","Âm nhạc","Móng tay","Khí trơ","Thị trường ngách","Cháu gái","Quý tộc","Vòi phun","Nhân nguyên tử","Đại dương","Bạch tuộc","Văn phòng","Đá thạch anh","Cơ hội","Vật trang trí","Kẻ cướp","Chim cú","Con hàu","sơn","Bảng màu vẽ","Cái dù","Sân trong","Quả lê","Đá cuội","Tiêu","Vật nuôi","Váy lót dài","Dưa leo chua","Đinh ghim","Súng lục","Sự vui thích","Chân tượng","Túi","Cái ao","Ngựa con","Cá heo","Chân dung","Quyền lực","Cái lọng","Giới thiệu","Sự kiêu căng","Máy chiếu","Đẩy đi","Thước đo góc","Máy bơm","Câu đố","Cột điện cao thế","Bút lông ngỗng","Giẻ rách","Cái dốc","Kỷ lục","Cây lau","Rạn san hô","Tủ lạnh","Con tuần lộc","Loài bò sát","Mặt nạ phòng hơi độc","Võng mạc","Con tê giác","Dòng sông","Hồng ngọc","Cái thảm","Cái sẹo","Muối","Vệ tinh","Vải sa tanh","Nhà thông thái","Mã tấu","Màn hình","Đinh ốc","Cuộn giấy","Biển","Chỗ ngồi","Thư ký","Ván bập bênh","Khăn choàng","Cây bụi","Hát","Ống chuyền nước","Da","Ốc sên","Bọt biển","Mùa xuân","Mực ống","Tượng","Bốc hơi","Quản gia","Gậy","Chích","Ghế đẩu","Bếp lò","Dòng suối","Sức mạnh","Bút cảm ứng","Tàu ngầm","Đường","Lưu huỳnh","Mặt trời","Siêu thị","Điều mê tín","Hỗ trợ","Thiên nga","Công tắc điện","Nước đường","Đinh ghim bảng","Xe tắc xi","Kính thiên văn","Ti vi","Lều","Con mối","Chó săn","Nguyên bản","Vải dệt","Rạp hát","Ngón tay cái","Thanh gỗ","Khăn giấy","Răng","Khăn tắm","Thị trấn","Kẻ lang thang","Bẫy","Rác","Kho báu","Giá đỡ","Chiếc cúp","Lốp xe","Sự thấu hiểu","Loại bỏ","Mở cửa","Kim loại nặng","Nước tiểu","Bình đựng di cốt","Thói xấu","Con kên kên","Ong vò vẽ","Sự giàu có","Cái còi","Tủ quần áo","Bộ tóc giả","Dây điện","Sự khôn ngoan","Chiếc xe lu","Chó sói","Đàn bà","Du thuyền"];
                for (var i = 0; i < questionCount; i++){
                    var index = JS_RAND(0,datas.length);


                    var item = {};
                    item.title = datas[index];
                    resultArray.push(item);
                    datas.splice(index, 1);
                }
                

            }catch(e){
                console.log("ERRROR SINH DE : "+e);
            }
        }

        var questionItems = [];
        var question = {
            "column": column,
            "row": row,
            "count" : count,
            "items": questionItems
        }
        {
            for (var i = 0; i < count; i++){
                var questionItemDict = examQuestionItems[i];
                var awserItemDict = {"value1":"","value2":""};
                var itemDict = {"question":questionItemDict, "answer":awserItemDict};
                questionItems.push(itemDict);
            }
        }

        var resultPara = {
            "gameInfo": gameInfo,
            "examQuestions": examQuestions,
            "questions": question
        }

        //xu ly sinh de
        var isSuccess = true;
        var errorCode = 0;
        var errorMessage = 0;
        callback(isSuccess, errorCode, errorMessage, resultPara);
        
    }
    check_mark(paraInput, callback){


        function valueOfCell(r,c, questions){
            var column = questions.column;
            return questions.items[r * column + c];
        }

        function checkAnwserEmpty(answerItem){
            //window.alert("item:"+answerItem.value1+"compare:" + (answerItem.value1 === "-1"));
            //window.alert("item:"+answerItem.value1+"value2:" + answerItem.value2);
            if ((answerItem.value1 === "-1" || answerItem.value1.length == 0) && (answerItem.value2 === "-1"  || answerItem.value2.length == 0)){
                return true;
            }
            return false;
        }

        function checkEmptyRow(r, questions){
            var column = questions.column;
            for (var c = 0; c < column; c++) {
                var questionItemDict = valueOfCell(r,c,questions);
                var answerItem = questionItemDict.answer;
                if (!checkAnwserEmpty(answerItem)){
                    return false;
                }
            }
            return true;
        }

        function scoreForMiddleRow(r, questions){
            var column = questions.column;
            var score = 0;
            var answerCount = column;
            for (var c = 0; c < column; c++) {
                var questionItemDict = valueOfCell(r,c,questions);
                // var answerItem = questionItemDict.answer;
                // var questionItem = questionItemDict.question;
                if (questionItemDict.correct){
                    score++;
                }
            }
            //window.alert(r+ " middle score: "+ score +" answer: " + answerCount);
            if (score == answerCount) return score;
            if (score == answerCount-1) return Math.round(score/2);
            return 0;
        }

        function scoreForEndRow(r, questions){
            var column = questions.column;
            var score = 0;
            var answerCount = 0;
            for (var c = Math.min(questions.count-questions.column*r-1,questions.column-1); c>= 0; c--) {
                var questionItemDict = valueOfCell(r,c,questions);
                var answerItem = questionItemDict.answer;

                if (!checkAnwserEmpty(answerItem)){
                    answerCount = c+1;
                    break;
                }
            }

            for (var c = 0; c < column; c++) {
                var questionItemDict = valueOfCell(r,c,questions);
                var answerItem = questionItemDict.answer;
                // var questionItem = questionItemDict.question;
                // answerCount++;
                if (!checkAnwserEmpty(answerItem)){
                    if (questionItemDict.correct) score++;
                }
            }
            //window.alert(r+" end score: "+ score +" answer: " + answerCount);
            if (score == answerCount) return score;
            if (score == answerCount-1) return Math.round(score/2);
            return 0;
        }


        // var question = paraInput.question;
        var gameInfo = paraInput.gameInfo;
        var examQuestions = paraInput.examQuestions;
        var questions = paraInput.questions;
        var column = examQuestions.column;
        var row = examQuestions.row;
        var count = examQuestions.count;

        var score = 0;


        //cap nhat cacs gia tri correct1, correct2, correct3
        for (var i = 0; i < count; i++){
            var questionItemDict = questions.items[i];
            var answerItem = questionItemDict.answer;
            var questionItem = questionItemDict.question;
            questionItemDict.correct1 = false;
            questionItemDict.correct2 = false;
            if (answerItem.hasOwnProperty("value1") && questionItem.hasOwnProperty("title")){
                questionItemDict.correct1 = compareVNString(answerItem.value1,questionItem.title);
            }
            if (answerItem.hasOwnProperty("value2") && questionItem.hasOwnProperty("subtitle")){
                questionItemDict.correct2 = compareVNString(answerItem.value2,questionItem.subtitle);
            }
            questionItemDict.correct = questionItemDict.correct1;// && questionItemDict.correct2;
        }

        //tinh diem cho question
        // tinh diem cho dong cuoi cung
        var r = row-1;
        for (; r >= 0; r--){
            if (!checkEmptyRow(r, questions)){
                score+= scoreForEndRow(r, questions);
                r --;
                break;
            }
        }

        // tinh deim cho dong o giua 
        for (; r >= 0; r--){
            if (!checkEmptyRow(r, questions)){
                score+= scoreForMiddleRow(r, questions);
            }
        }

        //window.alert(score+"diem");

        questions.score = score;
        // questions.recallTime = 100;//tam bo
        // questions.memoryTime = 100;//tam bo
        //xu ly sinh de
        var resultPara = paraInput;
        var isSuccess = true;
        var errorCode = 0;
        var errorMessage = 0;
        callback(isSuccess, errorCode, errorMessage, resultPara);
    }
}

class ServerHictoricAndFutureDate{
    generate(paraInput, callback){
        var game_type = paraInput.game_type;
        var game_mode = paraInput.game_mode;

        var column = 1;
        var row = 158;
        var count = column*row;
        var memoryTime = 300;
        var recallTime = 300;

        if (game_mode == DIFFICULT_NATIONAL()){
            column = 1;
            row = 158;
            count = column*row;
            memoryTime = 60*5;
            recallTime = 60*15;
        }else if (game_mode == DIFFICULT_INTERNATIONAL()){
            column = 1;
            row = 158;
            count = column*row;
            memoryTime = 60*5;
            recallTime = 60*15;
        }else if (game_mode == DIFFICULT_WORLD()){
            column = 1;
            row = 158;
            count = column*row;
            memoryTime = 60*5;
            recallTime = 60*15;
        }else if (game_mode == DIFFICULT_FREEDOM()){
            column = 1;
            row = 158;//paraInput.rowCount;
            count = 158;//column*row;
        }
        var gameInfo = {
                    "amount": 0,
                    "displayName": "Hictoric And Future ",
                    "answerTime": recallTime,
                    "prepareTime": 60,
                    "gameType": game_type,
                    "speed":1,
                    "difficultType": game_mode,
                    "readExamTime": memoryTime
                    };
        
        var examQuestionItems = [];
        var examQuestions = {
            "column": column,
            "row": row,
            "count" : count,
            "items": examQuestionItems
        }
        {
            var questionCount = count;

            var resultArray = examQuestionItems;
            try{

                var datas = ["Ngành kế toán thì thú vị","Mưa axit phân huỷ cây dù","Nữ diễn viên ly hôn","Al thì thông minh hơn mọi người","Thợ rèn biến vàng thành chì","Bệnh dị ứng đã được chữa khỏi","Cái đĩa cổ được bán đấu giá","Hệ thống Chống đối Xã Hội đã được giới thiệu","Nhà khảo cổ học bị nguyền rủa","Kiến trúc sư xây dựng tòa nhà chọc trời","Hạm đội căng buồm","Quân đội bao vây toà lâu đài","Nghệ sĩ giành giải thưởng nghệ thuật","Nhà thơ đọc thuộc lòng từ quyển sách","Người đàn ông hói quảng cáo dầu gội","Trận chiến bị thua","Gấu bắn thợ săn","Xe đạp là hình thức giao thông chính","Tỷ phú trao tặng tài sản","Nhà sinh vật học nói chuyện với cá heo","Hoa hồng đen nở rộ","Sách trong thư viện bị lấy cắp ","Sự chán nản thì bị lây","Cây cầu đã mở","Người xây dựng trở thành nhà thiết kế thời trang","Doanh nhân phạm tội gian lận","Chiến dịch yêu ong bắp cày","Thủ tướng cắt giảm thuế","Than thay thế cho mực","Những nguyên tố hoá học đã được tìm ra","Kiện tướng cờ vua mua lâu đài ","Gà đẻ trứng sô cô la","Đồng hồ chạy ngược","Chú hề làm trẻ em sợ","Thuyết ngờ vực đã được chứng minh","Tù khổ sai thoát ngục bằng bong bóng","Cuốn sách nấu ăn của những công thức nấu ăn kinh tởm","Cây trồng chết vì hạn hán","Cà ri là món ăn ưa thích của thế giới","Người chết tổ chức buổi cầu hồn để liên hệ với người sống","Nhà soạn nhạc điếc sáng tác bản nhạc giao hưởng","Lỗi thiết kế - Ấm nước làm bằng đá","Trứng khủng long nở","Chim Dodo được phát hiện ở Úc","Rồng đốt nhà","Váy được bán với giá 1 triệu đô la","Nhật thực chỉ kéo dài 24 giờ","Những loại nón ăn được đã được bán","Điện thì miễn phí","Voi đi dây leo","Pin vĩnh cửu đã được phát minh","Mọi người chúc mừng 2 sinh nhật","Mưa nhiều gây ra lũ lụt","Các nhà thám hiểm phát hiện ra các chủng loại mới","Ngày nghỉ quốc gia đặc biệt","Nhà vô địch F1 thi trượt kỳ thi lái xe","Câu chuyện thần tiên trở thành sự thật","Người nông dân bán ngựa","Thời trang: giày cao gót dành cho đàn ông","Tốc độ nhanh hơn ánh sáng là điều có thể","Tháng hai có 30 ngày","Thuộc địa đầu tiên trên sao Hỏa","Cầu vòng ban đêm đầu tiên","Nước hoa có mùi thơm cá đã ngưng bán","Ngư dân bắt được những túi nhựa","Đứa trẻ 5 tuổi học đại học","Kẻ giả mạo in giả những tờ giấy 7 đô la","Con ma ám viện bảo tàng","Người khổng lồ chiến đấu với người lùn","Vận động viên đạt huy chương vàng được vạch trần là kẻ lừa đảo","Chính phủ thay đổi chính sách","Bánh mì kẹp thịt mọc trên cây","Hạnh phúc là xác nhận bị bệnh tâm thần","Bệnh viện chữa trị cho những vận động viên bị thương","Chó sói học cách hôn","Hòn đảo bị chìm dưới nước","Người gác cổng trở thành giám đốc điều hành","Nghệ sĩ tung hứng làm rớt banh","Thịt xiên nướng được làm bất hợp pháp","Nhà vua được trao vương miện ","Hôn trước đám đông bị người ta nhăn mặt","Mèo con vượt sa mạc","Hiệp sĩ bị đánh bại","Bức tượng lớn nhất thế giới được dựng lên","Cây cuối cùng trong rừng đã bị chặt","Sét đánh trúng toà tháp","Em gái nhỏ bị cảm lạnh","Chim cánh cụt bị lạc được tìm thấy ở sa mạc","Cái tất bị mất đã được tìm thấy","Tạp chí trở nên lỗi thời","Người đàn ông bị xét xử vì tự sát","Người đàn ông với hai chân trái nhảy","Mặt nạ trở nên thời trang","Ý nghĩa cuộc đời được khám phá","Giải vô địch trí nhớ được đăng cai ở không gian","Thuốc kiểm soát tâm trí là một loại vũ khí","Điện thoại di động nhỏ hơn một đồng xu","Phù thuỷ hiện đại cưỡi máy hút bụi","Mặt trăng phát nổ","Ngọn núi cao hơn núi Everest đã được tìm thấy","Nước hoa dùng sau khi cạo râu bị thiếu hàng","Kỷ lục nhảy cao mới","Cái bẫy chuột mới được phát minh","Kính thiên văn mới được đặt tại thành phố","Báo in tin tức giả","Người đọc tin mất giọng","Ốc đảo là ảo ảnh","Người đàn ông một tay chiến thắng cuộc thi bắn cung","Nhà tiên tri dự đoán thiên tai","Tinh tinh bị tuyệt chủng","Thuế oxy được giới thiệu","Con vẹt nói được 20 thứ tiếng","Người nhận tiền trợ cấp phun sơn vẽ trên tường","Triết gia chứng minh màu đen là màu trắng","Cướp biển cướp thuyền buồm lớn","Thiên tai ếch","Vở kịch kết thúc sau một đêm","Trụ sở cảnh sát bị trộm","Thiếu điện gây mất điện","Tổng thống từ chức","Công chúa kết hôn với người quét đường","Chó con đi lậu vé trên tàu","Hoàng hậu bị buộc tội phản quốc","Áo mưa bị co lại khi giặt","Rừng nhiệt đới được trồng lại","Mèo máy bắt chuột máy tính","Việc phóng tên lửa bị hoãn","Ngôi sao nhạc rock trở thành nhà sư","Cơn bão cát nhấn chìm thành phố","Nhà khoa học nhầm lẫn muối độc là đường","Kẻ đốt phá môn lặn dưới biển thất vọng","Biển đóng băng","Thuỷ quái ăn tàu","Bí mật của tuổi trẻ vĩnh hằng là một trò lừa bịp","Xe tự lái thì bình thường","Cá mập trở thành cá ăn chay","Cừu có lông màu tím được lai tạo","Bầu trời đổi màu thành màu xanh lá cây","Các con sên được cứu ra khỏi khu rừng bị cháy","Tuyết ở sa mạc Sahara","Ngôi sao bóng đá bị cắt giảm lương","Chim sẻ học bài hát của chim két","Nhện là vật nuôi phổ biến","Sao biển rời bỏ rặng san hô","Mặt trời mọc ở phía tây","Siêu thị giảm giá","Hồ bơi bị rỉ lổ thủng","Học thuyết : ăn kiêng làm bạn bị mập","Lăng mộ được phát hiện","Ách tắc giao thông dài 20 dặm","Tàu chạy với tốc độ âm thanh","Người làm dịch vụ tang lễ thì quá vui vẻ","Chiến tranh kết thúc","Việc phân phối nước kết thúc","Mùa đông kéo dài 6 tháng","Người phụ nữ bơi qua Đại Tây Dương","Loài voi ma mút có lông được trưng bày trong vườn thú","Thế giới hoà bình","Cô gái trẻ chiến thắng cuộc thi hát"];
                for (var i = 0; i < questionCount; i++){
                    var index = JS_RAND(0,datas.length);


                    var item = {};
                    item.subtitle = datas[index];
                    item.title = JS_RAND(1000,3000)+"";
                    resultArray.push(item);
                    datas.splice(index, 1);
                }

            }catch(e){
                console.log("ERRROR SINH DE : "+e);
            }
        }

        var questionItems = [];
        var question = {
            "column": column,
            "row": row,
            "count" : count,
            "items": questionItems
        }
        {
            var tempArray = [];
            for (var i = 0; i < count; i++){
                var questionItemDict = examQuestionItems[i];
                var awserItemDict = {"value1":"","value2":""};
                var itemDict = {"question":questionItemDict, "answer":awserItemDict};
                tempArray.push(itemDict);
            }

            while (tempArray.length>0){
                var index = JS_RAND(0,tempArray.length);
                var itemDict = tempArray[index];
                questionItems.push(itemDict);
                tempArray.splice(index,1);
            }

            console.log("ERRROR SINH DE : "+questionItems.length + " count:" + count +" examQuestionItems:" + examQuestionItems.length);
        }

        var resultPara = {
            "gameInfo": gameInfo,
            "examQuestions": examQuestions,
            "questions": question
        }

        //xu ly sinh de
        var isSuccess = true;
        var errorCode = 0;
        var errorMessage = 0;
        callback(isSuccess, errorCode, errorMessage, resultPara);
        
    }
    check_mark(paraInput, callback){


        function valueOfCell(r,c, questions){
            var column = questions.column;
            return questions.items[r * column + c];
        }

        function checkAnwserEmpty(answerItem){
            //window.alert("item:"+answerItem.value1+"compare:" + (answerItem.value1 === "-1"));
            
            if ((answerItem.value1 === "-1" || answerItem.value1.length == 0) && (answerItem.value2 === "-1"  || answerItem.value2.length == 0)){
                return true;
            }
            return false;
        }

        function checkEmptyRow(r, questions){
            var column = questions.column;
            for (var c = 0; c < column; c++) {
                var questionItemDict = valueOfCell(r,c,questions);
                var answerItem = questionItemDict.answer;
                if (!checkAnwserEmpty(answerItem)){
                    return false;
                }
            }
            return true;
        }

        function scoreForMiddleRow(r, questions){
            var column = questions.column;
            var score = 0;
            var answerCount = column;
            for (var c = 0; c < column; c++) {
                var questionItemDict = valueOfCell(r,c,questions);
                // var answerItem = questionItemDict.answer;
                // var questionItem = questionItemDict.question;
                if (questionItemDict.correct){
                    score++;
                }
            }
            //window.alert(r+ " middle score: "+ score +" answer: " + answerCount);
            if (score == answerCount) return score;
            if (score == answerCount-1) return Math.round(score/2);
            return 0;
        }

        function scoreForEndRow(r, questions){
            var column = questions.column;
            var score = 0;
            var answerCount = 0;
            for (var c = Math.min(questions.count-questions.column*r-1,questions.column-1); c>= 0; c--) {
                var questionItemDict = valueOfCell(r,c,questions);
                var answerItem = questionItemDict.answer;

                if (!checkAnwserEmpty(answerItem)){
                    answerCount = c+1;
                    break;
                }
            }

            for (var c = 0; c < column; c++) {
                var questionItemDict = valueOfCell(r,c,questions);
                var answerItem = questionItemDict.answer;
                // var questionItem = questionItemDict.question;
                // answerCount++;
                if (!checkAnwserEmpty(answerItem)){
                    if (questionItemDict.correct) score++;
                }
            }
            //window.alert(r+" end score: "+ score +" answer: " + answerCount);
            if (score == answerCount) return score;
            if (score == answerCount-1) return Math.round(score/2);
            return 0;
        }


        // var question = paraInput.question;
        var gameInfo = paraInput.gameInfo;
        var examQuestions = paraInput.examQuestions;
        var questions = paraInput.questions;
        var column = examQuestions.column;
        var row = examQuestions.row;
        var count = examQuestions.count;

        var score = 0;


        //cap nhat cacs gia tri correct1, correct2, correct3
        for (var i = 0; i < count; i++){
            var questionItemDict = questions.items[i];
            var answerItem = questionItemDict.answer;
            var questionItem = questionItemDict.question;
            questionItemDict.correct1 = false;
            questionItemDict.correct2 = false;

            if (answerItem.hasOwnProperty("value1") && questionItem.hasOwnProperty("title")){
                questionItemDict.correct1 = (answerItem.value1 == questionItem.title);
                if (!checkAnwserEmpty(answerItem))
                {
                    if (questionItemDict.correct1){
                        score+=1;
                    }else {
                        score-=0.5;
                    }
                    
                }
                
            }
            
            questionItemDict.correct = questionItemDict.correct1;// && questionItemDict.correct2;

        }

        //window.alert(score+"diem");

        questions.score = Math.round(score);//Math.max(0,Math.round(score));//tinh max
        // questions.recallTime = 100;//tam bo
        // questions.memoryTime = 100;//tam bo
        //xu ly sinh de
        var resultPara = paraInput;
        var isSuccess = true;
        var errorCode = 0;
        var errorMessage = 0;
        callback(isSuccess, errorCode, errorMessage, resultPara);
    }
}

class ServerAbstractImage{
    generate(paraInput, callback){
        var game_type = paraInput.game_type;
        var game_mode = paraInput.game_mode;

        var column = 5;
        var row = 100;
        var count = column*row;
        var memoryTime = 300;
        var recallTime = 300;

        if (game_mode == DIFFICULT_NATIONAL()){
            column = 5;
            row = 162;
            count = column*row;
            memoryTime = 60*5;
            recallTime = 60*15;
        }else if (game_mode == DIFFICULT_INTERNATIONAL()){
            column = 5;
            row = 162;
            count = column*row;
            memoryTime = 60*15;
            recallTime = 60*30;
        }else if (game_mode == DIFFICULT_WORLD()){
            column = 5;
            row = 162;
            count = column*row;
            memoryTime = 60*15;
            recallTime = 60*30;
        }else if (game_mode == DIFFICULT_FREEDOM()){
            column = 40;
            row = paraInput.rowCount;
            count = column*row;
        }
        var gameInfo = {
                    "amount": 0,
                    "displayName": "Abstract Images",
                    "answerTime": recallTime,
                    "prepareTime": 60,
                    "gameType": game_type,
                    "speed":1,
                    "difficultType": game_mode,
                    "readExamTime": memoryTime
                    };
        
        var examQuestionItems = [];
        var examQuestions = {
            "column": column,
            "row": row,
            "count" : count,
            "items": examQuestionItems
        }
        {
            var questionCount = count;

            var resultArray = examQuestionItems;
            try{

                var datas =  ["2017Abstracts%20%2810%29.jpg","2017Abstracts%20%28100%29.jpg","2017Abstracts%20%281000%29.jpg","2017Abstracts%20%281001%29.jpg","2017Abstracts%20%281002%29.jpg","2017Abstracts%20%281003%29.jpg","2017Abstracts%20%281004%29.jpg","2017Abstracts%20%281005%29.jpg","2017Abstracts%20%281006%29.jpg","2017Abstracts%20%281007%29.jpg","2017Abstracts%20%281008%29.jpg","2017Abstracts%20%281009%29.jpg","2017Abstracts%20%28101%29.jpg","2017Abstracts%20%281010%29.jpg","2017Abstracts%20%281011%29.jpg","2017Abstracts%20%281012%29.jpg","2017Abstracts%20%281013%29.jpg","2017Abstracts%20%281014%29.jpg","2017Abstracts%20%281015%29.jpg","2017Abstracts%20%281016%29.jpg","2017Abstracts%20%281017%29.jpg","2017Abstracts%20%281018%29.jpg","2017Abstracts%20%281019%29.jpg","2017Abstracts%20%28102%29.jpg","2017Abstracts%20%281020%29.jpg","2017Abstracts%20%281021%29.jpg","2017Abstracts%20%281022%29.jpg","2017Abstracts%20%281023%29.jpg","2017Abstracts%20%281024%29.jpg","2017Abstracts%20%281025%29.jpg","2017Abstracts%20%281026%29.jpg","2017Abstracts%20%281027%29.jpg","2017Abstracts%20%281028%29.jpg","2017Abstracts%20%281029%29.jpg","2017Abstracts%20%28103%29.jpg","2017Abstracts%20%281030%29.jpg","2017Abstracts%20%281031%29.jpg","2017Abstracts%20%281032%29.jpg","2017Abstracts%20%281033%29.jpg","2017Abstracts%20%281034%29.jpg","2017Abstracts%20%281035%29.jpg","2017Abstracts%20%281036%29.jpg","2017Abstracts%20%281037%29.jpg","2017Abstracts%20%281038%29.jpg","2017Abstracts%20%281039%29.jpg","2017Abstracts%20%28104%29.jpg","2017Abstracts%20%281040%29.jpg","2017Abstracts%20%281041%29.jpg","2017Abstracts%20%281042%29.jpg","2017Abstracts%20%281043%29.jpg","2017Abstracts%20%281044%29.jpg","2017Abstracts%20%281045%29.jpg","2017Abstracts%20%281046%29.jpg","2017Abstracts%20%281047%29.jpg","2017Abstracts%20%281048%29.jpg","2017Abstracts%20%281049%29.jpg","2017Abstracts%20%28105%29.jpg","2017Abstracts%20%281050%29.jpg","2017Abstracts%20%281051%29.jpg","2017Abstracts%20%281052%29.jpg","2017Abstracts%20%281053%29.jpg","2017Abstracts%20%281054%29.jpg","2017Abstracts%20%281055%29.jpg","2017Abstracts%20%281056%29.jpg","2017Abstracts%20%281057%29.jpg","2017Abstracts%20%281058%29.jpg","2017Abstracts%20%281059%29.jpg","2017Abstracts%20%28106%29.jpg","2017Abstracts%20%281060%29.jpg","2017Abstracts%20%281061%29.jpg","2017Abstracts%20%281062%29.jpg","2017Abstracts%20%281063%29.jpg","2017Abstracts%20%281064%29.jpg","2017Abstracts%20%281065%29.jpg","2017Abstracts%20%281066%29.jpg","2017Abstracts%20%281067%29.jpg","2017Abstracts%20%281068%29.jpg","2017Abstracts%20%281069%29.jpg","2017Abstracts%20%28107%29.jpg","2017Abstracts%20%281070%29.jpg","2017Abstracts%20%281071%29.jpg","2017Abstracts%20%281072%29.jpg","2017Abstracts%20%281073%29.jpg","2017Abstracts%20%281074%29.jpg","2017Abstracts%20%281075%29.jpg","2017Abstracts%20%281076%29.jpg","2017Abstracts%20%281077%29.jpg","2017Abstracts%20%281078%29.jpg","2017Abstracts%20%281079%29.jpg","2017Abstracts%20%28108%29.jpg","2017Abstracts%20%281080%29.jpg","2017Abstracts%20%281081%29.jpg","2017Abstracts%20%281082%29.jpg","2017Abstracts%20%281083%29.jpg","2017Abstracts%20%281084%29.jpg","2017Abstracts%20%281085%29.jpg","2017Abstracts%20%281086%29.jpg","2017Abstracts%20%281087%29.jpg","2017Abstracts%20%281088%29.jpg","2017Abstracts%20%281089%29.jpg","2017Abstracts%20%28109%29.jpg","2017Abstracts%20%281090%29.jpg","2017Abstracts%20%281091%29.jpg","2017Abstracts%20%281092%29.jpg","2017Abstracts%20%281093%29.jpg","2017Abstracts%20%281094%29.jpg","2017Abstracts%20%281095%29.jpg","2017Abstracts%20%281096%29.jpg","2017Abstracts%20%281097%29.jpg","2017Abstracts%20%281098%29.jpg","2017Abstracts%20%281099%29.jpg","2017Abstracts%20%2811%29.jpg","2017Abstracts%20%28110%29.jpg","2017Abstracts%20%281100%29.jpg","2017Abstracts%20%281101%29.jpg","2017Abstracts%20%281102%29.jpg","2017Abstracts%20%281103%29.jpg","2017Abstracts%20%281104%29.jpg","2017Abstracts%20%281105%29.jpg","2017Abstracts%20%281106%29.jpg","2017Abstracts%20%281107%29.jpg","2017Abstracts%20%281108%29.jpg","2017Abstracts%20%281109%29.jpg","2017Abstracts%20%28111%29.jpg","2017Abstracts%20%281110%29.jpg","2017Abstracts%20%281111%29.jpg","2017Abstracts%20%281112%29.jpg","2017Abstracts%20%281113%29.jpg","2017Abstracts%20%281114%29.jpg","2017Abstracts%20%281115%29.jpg","2017Abstracts%20%281116%29.jpg","2017Abstracts%20%281117%29.jpg","2017Abstracts%20%281118%29.jpg","2017Abstracts%20%281119%29.jpg","2017Abstracts%20%28112%29.jpg","2017Abstracts%20%281120%29.jpg","2017Abstracts%20%281121%29.jpg","2017Abstracts%20%281122%29.jpg","2017Abstracts%20%281123%29.jpg","2017Abstracts%20%281124%29.jpg","2017Abstracts%20%281125%29.jpg","2017Abstracts%20%281126%29.jpg","2017Abstracts%20%281127%29.jpg","2017Abstracts%20%281128%29.jpg","2017Abstracts%20%281129%29.jpg","2017Abstracts%20%28113%29.jpg","2017Abstracts%20%281130%29.jpg","2017Abstracts%20%281131%29.jpg","2017Abstracts%20%281132%29.jpg","2017Abstracts%20%281133%29.jpg","2017Abstracts%20%281134%29.jpg","2017Abstracts%20%281135%29.jpg","2017Abstracts%20%281136%29.jpg","2017Abstracts%20%281137%29.jpg","2017Abstracts%20%281138%29.jpg","2017Abstracts%20%281139%29.jpg","2017Abstracts%20%28114%29.jpg","2017Abstracts%20%281140%29.jpg","2017Abstracts%20%281141%29.jpg","2017Abstracts%20%281142%29.jpg","2017Abstracts%20%281143%29.jpg","2017Abstracts%20%281144%29.jpg","2017Abstracts%20%281145%29.jpg","2017Abstracts%20%281146%29.jpg","2017Abstracts%20%281147%29.jpg","2017Abstracts%20%281148%29.jpg","2017Abstracts%20%281149%29.jpg","2017Abstracts%20%28115%29.jpg","2017Abstracts%20%281150%29.jpg","2017Abstracts%20%281151%29.jpg","2017Abstracts%20%281152%29.jpg","2017Abstracts%20%281153%29.jpg","2017Abstracts%20%281154%29.jpg","2017Abstracts%20%281155%29.jpg","2017Abstracts%20%281156%29.jpg","2017Abstracts%20%281157%29.jpg","2017Abstracts%20%281158%29.jpg","2017Abstracts%20%281159%29.jpg","2017Abstracts%20%28116%29.jpg","2017Abstracts%20%281160%29.jpg","2017Abstracts%20%281161%29.jpg","2017Abstracts%20%281162%29.jpg","2017Abstracts%20%281163%29.jpg","2017Abstracts%20%281164%29.jpg","2017Abstracts%20%281165%29.jpg","2017Abstracts%20%281166%29.jpg","2017Abstracts%20%281167%29.jpg","2017Abstracts%20%281168%29.jpg","2017Abstracts%20%281169%29.jpg","2017Abstracts%20%28117%29.jpg","2017Abstracts%20%281170%29.jpg","2017Abstracts%20%281171%29.jpg","2017Abstracts%20%281172%29.jpg","2017Abstracts%20%281173%29.jpg","2017Abstracts%20%281174%29.jpg","2017Abstracts%20%281175%29.jpg","2017Abstracts%20%281176%29.jpg","2017Abstracts%20%281177%29.jpg","2017Abstracts%20%281178%29.jpg","2017Abstracts%20%281179%29.jpg","2017Abstracts%20%28118%29.jpg","2017Abstracts%20%281180%29.jpg","2017Abstracts%20%281181%29.jpg","2017Abstracts%20%281182%29.jpg","2017Abstracts%20%281183%29.jpg","2017Abstracts%20%281184%29.jpg","2017Abstracts%20%281185%29.jpg","2017Abstracts%20%281186%29.jpg","2017Abstracts%20%281187%29.jpg","2017Abstracts%20%281188%29.jpg","2017Abstracts%20%281189%29.jpg","2017Abstracts%20%28119%29.jpg","2017Abstracts%20%281190%29.jpg","2017Abstracts%20%281191%29.jpg","2017Abstracts%20%281192%29.jpg","2017Abstracts%20%281193%29.jpg","2017Abstracts%20%281194%29.jpg","2017Abstracts%20%281195%29.jpg","2017Abstracts%20%281196%29.jpg","2017Abstracts%20%281197%29.jpg","2017Abstracts%20%281198%29.jpg","2017Abstracts%20%281199%29.jpg","2017Abstracts%20%2812%29.jpg","2017Abstracts%20%28120%29.jpg","2017Abstracts%20%281200%29.jpg","2017Abstracts%20%281201%29.jpg","2017Abstracts%20%281202%29.jpg","2017Abstracts%20%281203%29.jpg","2017Abstracts%20%281204%29.jpg","2017Abstracts%20%281205%29.jpg","2017Abstracts%20%281206%29.jpg","2017Abstracts%20%281207%29.jpg","2017Abstracts%20%281208%29.jpg","2017Abstracts%20%281209%29.jpg","2017Abstracts%20%28121%29.jpg","2017Abstracts%20%281210%29.jpg","2017Abstracts%20%281211%29.jpg","2017Abstracts%20%281212%29.jpg","2017Abstracts%20%281213%29.jpg","2017Abstracts%20%281214%29.jpg","2017Abstracts%20%281215%29.jpg","2017Abstracts%20%281216%29.jpg","2017Abstracts%20%281217%29.jpg","2017Abstracts%20%281218%29.jpg","2017Abstracts%20%281219%29.jpg","2017Abstracts%20%28122%29.jpg","2017Abstracts%20%281220%29.jpg","2017Abstracts%20%281221%29.jpg","2017Abstracts%20%281222%29.jpg","2017Abstracts%20%281223%29.jpg","2017Abstracts%20%281224%29.jpg","2017Abstracts%20%281225%29.jpg","2017Abstracts%20%281226%29.jpg","2017Abstracts%20%281227%29.jpg","2017Abstracts%20%281228%29.jpg","2017Abstracts%20%281229%29.jpg","2017Abstracts%20%28123%29.jpg","2017Abstracts%20%281230%29.jpg","2017Abstracts%20%281231%29.jpg","2017Abstracts%20%281232%29.jpg","2017Abstracts%20%281233%29.jpg","2017Abstracts%20%281234%29.jpg","2017Abstracts%20%281235%29.jpg","2017Abstracts%20%281236%29.jpg","2017Abstracts%20%281237%29.jpg","2017Abstracts%20%281238%29.jpg","2017Abstracts%20%281239%29.jpg","2017Abstracts%20%28124%29.jpg","2017Abstracts%20%281240%29.jpg","2017Abstracts%20%281241%29.jpg","2017Abstracts%20%281242%29.jpg","2017Abstracts%20%281243%29.jpg","2017Abstracts%20%281244%29.jpg","2017Abstracts%20%281245%29.jpg","2017Abstracts%20%281246%29.jpg","2017Abstracts%20%281247%29.jpg","2017Abstracts%20%281248%29.jpg","2017Abstracts%20%281249%29.jpg","2017Abstracts%20%28125%29.jpg","2017Abstracts%20%281250%29.jpg","2017Abstracts%20%281251%29.jpg","2017Abstracts%20%281252%29.jpg","2017Abstracts%20%281253%29.jpg","2017Abstracts%20%281254%29.jpg","2017Abstracts%20%281255%29.jpg","2017Abstracts%20%281256%29.jpg","2017Abstracts%20%281257%29.jpg","2017Abstracts%20%281258%29.jpg","2017Abstracts%20%281259%29.jpg","2017Abstracts%20%28126%29.jpg","2017Abstracts%20%281260%29.jpg","2017Abstracts%20%281261%29.jpg","2017Abstracts%20%281262%29.jpg","2017Abstracts%20%281263%29.jpg","2017Abstracts%20%281264%29.jpg","2017Abstracts%20%281265%29.jpg","2017Abstracts%20%281266%29.jpg","2017Abstracts%20%281267%29.jpg","2017Abstracts%20%281268%29.jpg","2017Abstracts%20%281269%29.jpg","2017Abstracts%20%28127%29.jpg","2017Abstracts%20%281270%29.jpg","2017Abstracts%20%281271%29.jpg","2017Abstracts%20%281272%29.jpg","2017Abstracts%20%281273%29.jpg","2017Abstracts%20%281274%29.jpg","2017Abstracts%20%281275%29.jpg","2017Abstracts%20%281276%29.jpg","2017Abstracts%20%281277%29.jpg","2017Abstracts%20%281278%29.jpg","2017Abstracts%20%281279%29.jpg","2017Abstracts%20%28128%29.jpg","2017Abstracts%20%281280%29.jpg","2017Abstracts%20%281281%29.jpg","2017Abstracts%20%281282%29.jpg","2017Abstracts%20%281283%29.jpg","2017Abstracts%20%281284%29.jpg","2017Abstracts%20%281285%29.jpg","2017Abstracts%20%281286%29.jpg","2017Abstracts%20%281287%29.jpg","2017Abstracts%20%281288%29.jpg","2017Abstracts%20%281289%29.jpg","2017Abstracts%20%28129%29.jpg","2017Abstracts%20%281290%29.jpg","2017Abstracts%20%281291%29.jpg","2017Abstracts%20%281292%29.jpg","2017Abstracts%20%281293%29.jpg","2017Abstracts%20%281294%29.jpg","2017Abstracts%20%281295%29.jpg","2017Abstracts%20%281296%29.jpg","2017Abstracts%20%281297%29.jpg","2017Abstracts%20%281298%29.jpg","2017Abstracts%20%281299%29.jpg","2017Abstracts%20%2813%29.jpg","2017Abstracts%20%28130%29.jpg","2017Abstracts%20%281300%29.jpg","2017Abstracts%20%281301%29.jpg","2017Abstracts%20%281302%29.jpg","2017Abstracts%20%281303%29.jpg","2017Abstracts%20%281304%29.jpg","2017Abstracts%20%281305%29.jpg","2017Abstracts%20%281306%29.jpg","2017Abstracts%20%281307%29.jpg","2017Abstracts%20%281308%29.jpg","2017Abstracts%20%281309%29.jpg","2017Abstracts%20%28131%29.jpg","2017Abstracts%20%281310%29.jpg","2017Abstracts%20%281311%29.jpg","2017Abstracts%20%281312%29.jpg","2017Abstracts%20%281313%29.jpg","2017Abstracts%20%281314%29.jpg","2017Abstracts%20%281315%29.jpg","2017Abstracts%20%281316%29.jpg","2017Abstracts%20%281317%29.jpg","2017Abstracts%20%281318%29.jpg","2017Abstracts%20%281319%29.jpg","2017Abstracts%20%28132%29.jpg","2017Abstracts%20%281320%29.jpg","2017Abstracts%20%281321%29.jpg","2017Abstracts%20%281322%29.jpg","2017Abstracts%20%281323%29.jpg","2017Abstracts%20%281324%29.jpg","2017Abstracts%20%281325%29.jpg","2017Abstracts%20%281326%29.jpg","2017Abstracts%20%281327%29.jpg","2017Abstracts%20%281328%29.jpg","2017Abstracts%20%281329%29.jpg","2017Abstracts%20%28133%29.jpg","2017Abstracts%20%281330%29.jpg","2017Abstracts%20%281331%29.jpg","2017Abstracts%20%281332%29.jpg","2017Abstracts%20%281333%29.jpg","2017Abstracts%20%281334%29.jpg","2017Abstracts%20%281335%29.jpg","2017Abstracts%20%281336%29.jpg","2017Abstracts%20%281337%29.jpg","2017Abstracts%20%281338%29.jpg","2017Abstracts%20%281339%29.jpg","2017Abstracts%20%28134%29.jpg","2017Abstracts%20%281340%29.jpg","2017Abstracts%20%281341%29.jpg","2017Abstracts%20%281342%29.jpg","2017Abstracts%20%281343%29.jpg","2017Abstracts%20%281344%29.jpg","2017Abstracts%20%281345%29.jpg","2017Abstracts%20%281346%29.jpg","2017Abstracts%20%281347%29.jpg","2017Abstracts%20%281348%29.jpg","2017Abstracts%20%281349%29.jpg","2017Abstracts%20%28135%29.jpg","2017Abstracts%20%281350%29.jpg","2017Abstracts%20%281351%29.jpg","2017Abstracts%20%281352%29.jpg","2017Abstracts%20%281353%29.jpg","2017Abstracts%20%281354%29.jpg","2017Abstracts%20%281355%29.jpg","2017Abstracts%20%281356%29.jpg","2017Abstracts%20%281357%29.jpg","2017Abstracts%20%281358%29.jpg","2017Abstracts%20%281359%29.jpg","2017Abstracts%20%28136%29.jpg","2017Abstracts%20%281360%29.jpg","2017Abstracts%20%281361%29.jpg","2017Abstracts%20%281362%29.jpg","2017Abstracts%20%281363%29.jpg","2017Abstracts%20%281364%29.jpg","2017Abstracts%20%281365%29.jpg","2017Abstracts%20%281366%29.jpg","2017Abstracts%20%281367%29.jpg","2017Abstracts%20%281368%29.jpg","2017Abstracts%20%281369%29.jpg","2017Abstracts%20%28137%29.jpg","2017Abstracts%20%281370%29.jpg","2017Abstracts%20%281371%29.jpg","2017Abstracts%20%281372%29.jpg","2017Abstracts%20%281373%29.jpg","2017Abstracts%20%281374%29.jpg","2017Abstracts%20%281375%29.jpg","2017Abstracts%20%281376%29.jpg","2017Abstracts%20%281377%29.jpg","2017Abstracts%20%281378%29.jpg","2017Abstracts%20%281379%29.jpg","2017Abstracts%20%28138%29.jpg","2017Abstracts%20%281380%29.jpg","2017Abstracts%20%281381%29.jpg","2017Abstracts%20%281382%29.jpg","2017Abstracts%20%281383%29.jpg","2017Abstracts%20%281384%29.jpg","2017Abstracts%20%281385%29.jpg","2017Abstracts%20%281386%29.jpg","2017Abstracts%20%281387%29.jpg","2017Abstracts%20%281388%29.jpg","2017Abstracts%20%281389%29.jpg","2017Abstracts%20%28139%29.jpg","2017Abstracts%20%281390%29.jpg","2017Abstracts%20%281391%29.jpg","2017Abstracts%20%281392%29.jpg","2017Abstracts%20%281393%29.jpg","2017Abstracts%20%281394%29.jpg","2017Abstracts%20%281395%29.jpg","2017Abstracts%20%281396%29.jpg","2017Abstracts%20%281397%29.jpg","2017Abstracts%20%281398%29.jpg","2017Abstracts%20%281399%29.jpg","2017Abstracts%20%2814%29.jpg","2017Abstracts%20%28140%29.jpg","2017Abstracts%20%281400%29.jpg","2017Abstracts%20%281401%29.jpg","2017Abstracts%20%281402%29.jpg","2017Abstracts%20%281403%29.jpg","2017Abstracts%20%281404%29.jpg","2017Abstracts%20%281405%29.jpg","2017Abstracts%20%281406%29.jpg","2017Abstracts%20%281407%29.jpg","2017Abstracts%20%281408%29.jpg","2017Abstracts%20%281409%29.jpg","2017Abstracts%20%28141%29.jpg","2017Abstracts%20%281410%29.jpg","2017Abstracts%20%281411%29.jpg","2017Abstracts%20%281412%29.jpg","2017Abstracts%20%281413%29.jpg","2017Abstracts%20%281414%29.jpg","2017Abstracts%20%281415%29.jpg","2017Abstracts%20%281416%29.jpg","2017Abstracts%20%281417%29.jpg","2017Abstracts%20%281418%29.jpg","2017Abstracts%20%281419%29.jpg","2017Abstracts%20%28142%29.jpg","2017Abstracts%20%281420%29.jpg","2017Abstracts%20%281421%29.jpg","2017Abstracts%20%281422%29.jpg","2017Abstracts%20%281423%29.jpg","2017Abstracts%20%281424%29.jpg","2017Abstracts%20%281425%29.jpg","2017Abstracts%20%281426%29.jpg","2017Abstracts%20%281427%29.jpg","2017Abstracts%20%281428%29.jpg","2017Abstracts%20%281429%29.jpg","2017Abstracts%20%28143%29.jpg","2017Abstracts%20%281430%29.jpg","2017Abstracts%20%281431%29.jpg","2017Abstracts%20%281432%29.jpg","2017Abstracts%20%281433%29.jpg","2017Abstracts%20%281434%29.jpg","2017Abstracts%20%281435%29.jpg","2017Abstracts%20%281436%29.jpg","2017Abstracts%20%281437%29.jpg","2017Abstracts%20%281438%29.jpg","2017Abstracts%20%281439%29.jpg","2017Abstracts%20%28144%29.jpg","2017Abstracts%20%281440%29.jpg","2017Abstracts%20%281441%29.jpg","2017Abstracts%20%281442%29.jpg","2017Abstracts%20%281443%29.jpg","2017Abstracts%20%281444%29.jpg","2017Abstracts%20%281445%29.jpg","2017Abstracts%20%281446%29.jpg","2017Abstracts%20%281447%29.jpg","2017Abstracts%20%281448%29.jpg","2017Abstracts%20%281449%29.jpg","2017Abstracts%20%28145%29.jpg","2017Abstracts%20%281450%29.jpg","2017Abstracts%20%281451%29.jpg","2017Abstracts%20%281452%29.jpg","2017Abstracts%20%281453%29.jpg","2017Abstracts%20%281454%29.jpg","2017Abstracts%20%281455%29.jpg","2017Abstracts%20%281456%29.jpg","2017Abstracts%20%281457%29.jpg","2017Abstracts%20%281458%29.jpg","2017Abstracts%20%281459%29.jpg","2017Abstracts%20%28146%29.jpg","2017Abstracts%20%281460%29.jpg","2017Abstracts%20%281461%29.jpg","2017Abstracts%20%281462%29.jpg","2017Abstracts%20%281463%29.jpg","2017Abstracts%20%281464%29.jpg","2017Abstracts%20%281465%29.jpg","2017Abstracts%20%281466%29.jpg","2017Abstracts%20%281467%29.jpg","2017Abstracts%20%281468%29.jpg","2017Abstracts%20%281469%29.jpg","2017Abstracts%20%28147%29.jpg","2017Abstracts%20%281470%29.jpg","2017Abstracts%20%281471%29.jpg","2017Abstracts%20%281472%29.jpg","2017Abstracts%20%281473%29.jpg","2017Abstracts%20%281474%29.jpg","2017Abstracts%20%281475%29.jpg","2017Abstracts%20%281476%29.jpg","2017Abstracts%20%281477%29.jpg","2017Abstracts%20%281478%29.jpg","2017Abstracts%20%281479%29.jpg","2017Abstracts%20%28148%29.jpg","2017Abstracts%20%281480%29.jpg","2017Abstracts%20%281481%29.jpg","2017Abstracts%20%281482%29.jpg","2017Abstracts%20%281483%29.jpg","2017Abstracts%20%281484%29.jpg","2017Abstracts%20%281485%29.jpg","2017Abstracts%20%281486%29.jpg","2017Abstracts%20%281487%29.jpg","2017Abstracts%20%281488%29.jpg","2017Abstracts%20%281489%29.jpg","2017Abstracts%20%28149%29.jpg","2017Abstracts%20%281490%29.jpg","2017Abstracts%20%281491%29.jpg","2017Abstracts%20%281492%29.jpg","2017Abstracts%20%281493%29.jpg","2017Abstracts%20%281494%29.jpg","2017Abstracts%20%281495%29.jpg","2017Abstracts%20%281496%29.jpg","2017Abstracts%20%281497%29.jpg","2017Abstracts%20%281498%29.jpg","2017Abstracts%20%281499%29.jpg","2017Abstracts%20%2815%29.jpg","2017Abstracts%20%28150%29.jpg","2017Abstracts%20%281500%29.jpg","2017Abstracts%20%281501%29.jpg","2017Abstracts%20%281502%29.jpg","2017Abstracts%20%281503%29.jpg","2017Abstracts%20%281504%29.jpg","2017Abstracts%20%281505%29.jpg","2017Abstracts%20%281506%29.jpg","2017Abstracts%20%281507%29.jpg","2017Abstracts%20%281508%29.jpg","2017Abstracts%20%281509%29.jpg","2017Abstracts%20%28151%29.jpg","2017Abstracts%20%281510%29.jpg","2017Abstracts%20%281511%29.jpg","2017Abstracts%20%281512%29.jpg","2017Abstracts%20%281513%29.jpg","2017Abstracts%20%281514%29.jpg","2017Abstracts%20%281515%29.jpg","2017Abstracts%20%281516%29.jpg","2017Abstracts%20%281517%29.jpg","2017Abstracts%20%281518%29.jpg","2017Abstracts%20%281519%29.jpg","2017Abstracts%20%28152%29.jpg","2017Abstracts%20%281520%29.jpg","2017Abstracts%20%281521%29.jpg","2017Abstracts%20%281522%29.jpg","2017Abstracts%20%281523%29.jpg","2017Abstracts%20%281524%29.jpg","2017Abstracts%20%281525%29.jpg","2017Abstracts%20%281526%29.jpg","2017Abstracts%20%281527%29.jpg","2017Abstracts%20%281528%29.jpg","2017Abstracts%20%281529%29.jpg","2017Abstracts%20%28153%29.jpg","2017Abstracts%20%281530%29.jpg","2017Abstracts%20%281531%29.jpg","2017Abstracts%20%281532%29.jpg","2017Abstracts%20%281533%29.jpg","2017Abstracts%20%281534%29.jpg","2017Abstracts%20%281535%29.jpg","2017Abstracts%20%281536%29.jpg","2017Abstracts%20%281537%29.jpg","2017Abstracts%20%281538%29.jpg","2017Abstracts%20%281539%29.jpg","2017Abstracts%20%28154%29.jpg","2017Abstracts%20%281540%29.jpg","2017Abstracts%20%281541%29.jpg","2017Abstracts%20%281542%29.jpg","2017Abstracts%20%281543%29.jpg","2017Abstracts%20%281544%29.jpg","2017Abstracts%20%281545%29.jpg","2017Abstracts%20%281546%29.jpg","2017Abstracts%20%281547%29.jpg","2017Abstracts%20%281548%29.jpg","2017Abstracts%20%281549%29.jpg","2017Abstracts%20%28155%29.jpg","2017Abstracts%20%281550%29.jpg","2017Abstracts%20%281551%29.jpg","2017Abstracts%20%281552%29.jpg","2017Abstracts%20%281553%29.jpg","2017Abstracts%20%281554%29.jpg","2017Abstracts%20%281555%29.jpg","2017Abstracts%20%281556%29.jpg","2017Abstracts%20%281557%29.jpg","2017Abstracts%20%281558%29.jpg","2017Abstracts%20%281559%29.jpg","2017Abstracts%20%28156%29.jpg","2017Abstracts%20%281560%29.jpg","2017Abstracts%20%281561%29.jpg","2017Abstracts%20%281562%29.jpg","2017Abstracts%20%281563%29.jpg","2017Abstracts%20%281564%29.jpg","2017Abstracts%20%281565%29.jpg","2017Abstracts%20%281566%29.jpg","2017Abstracts%20%281567%29.jpg","2017Abstracts%20%281568%29.jpg","2017Abstracts%20%281569%29.jpg","2017Abstracts%20%28157%29.jpg","2017Abstracts%20%281570%29.jpg","2017Abstracts%20%281571%29.jpg","2017Abstracts%20%281572%29.jpg","2017Abstracts%20%281573%29.jpg","2017Abstracts%20%281574%29.jpg","2017Abstracts%20%281575%29.jpg","2017Abstracts%20%281576%29.jpg","2017Abstracts%20%281577%29.jpg","2017Abstracts%20%281578%29.jpg","2017Abstracts%20%281579%29.jpg","2017Abstracts%20%28158%29.jpg","2017Abstracts%20%281580%29.jpg","2017Abstracts%20%281581%29.jpg","2017Abstracts%20%281582%29.jpg","2017Abstracts%20%281583%29.jpg","2017Abstracts%20%281584%29.jpg","2017Abstracts%20%281585%29.jpg","2017Abstracts%20%281586%29.jpg","2017Abstracts%20%281587%29.jpg","2017Abstracts%20%281588%29.jpg","2017Abstracts%20%281589%29.jpg","2017Abstracts%20%28159%29.jpg","2017Abstracts%20%281590%29.jpg","2017Abstracts%20%281591%29.jpg","2017Abstracts%20%281592%29.jpg","2017Abstracts%20%281593%29.jpg","2017Abstracts%20%281594%29.jpg","2017Abstracts%20%281595%29.jpg","2017Abstracts%20%281596%29.jpg","2017Abstracts%20%281597%29.jpg","2017Abstracts%20%281598%29.jpg","2017Abstracts%20%281599%29.jpg","2017Abstracts%20%2816%29.jpg","2017Abstracts%20%28160%29.jpg","2017Abstracts%20%281600%29.jpg","2017Abstracts%20%281601%29.jpg","2017Abstracts%20%281602%29.jpg","2017Abstracts%20%281603%29.jpg","2017Abstracts%20%281604%29.jpg","2017Abstracts%20%281605%29.jpg","2017Abstracts%20%281606%29.jpg","2017Abstracts%20%281607%29.jpg","2017Abstracts%20%281608%29.jpg","2017Abstracts%20%281609%29.jpg","2017Abstracts%20%28161%29.jpg","2017Abstracts%20%281610%29.jpg","2017Abstracts%20%281611%29.jpg","2017Abstracts%20%281612%29.jpg","2017Abstracts%20%281613%29.jpg","2017Abstracts%20%281614%29.jpg","2017Abstracts%20%281615%29.jpg","2017Abstracts%20%281616%29.jpg","2017Abstracts%20%281617%29.jpg","2017Abstracts%20%281618%29.jpg","2017Abstracts%20%281619%29.jpg","2017Abstracts%20%28162%29.jpg","2017Abstracts%20%281620%29.jpg","2017Abstracts%20%281621%29.jpg","2017Abstracts%20%281622%29.jpg","2017Abstracts%20%281623%29.jpg","2017Abstracts%20%281624%29.jpg","2017Abstracts%20%281625%29.jpg","2017Abstracts%20%281626%29.jpg","2017Abstracts%20%281627%29.jpg","2017Abstracts%20%281628%29.jpg","2017Abstracts%20%281629%29.jpg","2017Abstracts%20%28163%29.jpg","2017Abstracts%20%281630%29.jpg","2017Abstracts%20%281631%29.jpg","2017Abstracts%20%281632%29.jpg","2017Abstracts%20%281633%29.jpg","2017Abstracts%20%281634%29.jpg","2017Abstracts%20%281635%29.jpg","2017Abstracts%20%281636%29.jpg","2017Abstracts%20%281637%29.jpg","2017Abstracts%20%281638%29.jpg","2017Abstracts%20%281639%29.jpg","2017Abstracts%20%28164%29.jpg","2017Abstracts%20%281640%29.jpg","2017Abstracts%20%281641%29.jpg","2017Abstracts%20%281642%29.jpg","2017Abstracts%20%281643%29.jpg","2017Abstracts%20%281644%29.jpg","2017Abstracts%20%281645%29.jpg","2017Abstracts%20%281646%29.jpg","2017Abstracts%20%281647%29.jpg","2017Abstracts%20%281648%29.jpg","2017Abstracts%20%281649%29.jpg","2017Abstracts%20%28165%29.jpg","2017Abstracts%20%281650%29.jpg","2017Abstracts%20%281651%29.jpg","2017Abstracts%20%281652%29.jpg","2017Abstracts%20%281653%29.jpg","2017Abstracts%20%281654%29.jpg","2017Abstracts%20%281655%29.jpg","2017Abstracts%20%281656%29.jpg","2017Abstracts%20%281657%29.jpg","2017Abstracts%20%281658%29.jpg","2017Abstracts%20%281659%29.jpg","2017Abstracts%20%28166%29.jpg","2017Abstracts%20%281660%29.jpg","2017Abstracts%20%281661%29.jpg","2017Abstracts%20%281662%29.jpg","2017Abstracts%20%281663%29.jpg","2017Abstracts%20%281664%29.jpg","2017Abstracts%20%281665%29.jpg","2017Abstracts%20%281666%29.jpg","2017Abstracts%20%281667%29.jpg","2017Abstracts%20%281668%29.jpg","2017Abstracts%20%281669%29.jpg","2017Abstracts%20%28167%29.jpg","2017Abstracts%20%281670%29.jpg","2017Abstracts%20%281671%29.jpg","2017Abstracts%20%281672%29.jpg","2017Abstracts%20%281673%29.jpg","2017Abstracts%20%281674%29.jpg","2017Abstracts%20%281675%29.jpg","2017Abstracts%20%281676%29.jpg","2017Abstracts%20%281677%29.jpg","2017Abstracts%20%281678%29.jpg","2017Abstracts%20%281679%29.jpg","2017Abstracts%20%28168%29.jpg","2017Abstracts%20%281680%29.jpg","2017Abstracts%20%281681%29.jpg","2017Abstracts%20%281682%29.jpg","2017Abstracts%20%281683%29.jpg","2017Abstracts%20%281684%29.jpg","2017Abstracts%20%281685%29.jpg","2017Abstracts%20%281686%29.jpg","2017Abstracts%20%281687%29.jpg","2017Abstracts%20%281688%29.jpg","2017Abstracts%20%281689%29.jpg","2017Abstracts%20%28169%29.jpg","2017Abstracts%20%281690%29.jpg","2017Abstracts%20%281691%29.jpg","2017Abstracts%20%281692%29.jpg","2017Abstracts%20%281693%29.jpg","2017Abstracts%20%281694%29.jpg","2017Abstracts%20%281695%29.jpg","2017Abstracts%20%281696%29.jpg","2017Abstracts%20%281697%29.jpg","2017Abstracts%20%281698%29.jpg","2017Abstracts%20%281699%29.jpg","2017Abstracts%20%2817%29.jpg","2017Abstracts%20%28170%29.jpg","2017Abstracts%20%281700%29.jpg","2017Abstracts%20%281701%29.jpg","2017Abstracts%20%281702%29.jpg","2017Abstracts%20%281703%29.jpg","2017Abstracts%20%281704%29.jpg","2017Abstracts%20%281705%29.jpg","2017Abstracts%20%281706%29.jpg","2017Abstracts%20%281707%29.jpg","2017Abstracts%20%281708%29.jpg","2017Abstracts%20%281709%29.jpg","2017Abstracts%20%28171%29.jpg","2017Abstracts%20%281710%29.jpg","2017Abstracts%20%281711%29.jpg","2017Abstracts%20%281712%29.jpg","2017Abstracts%20%281713%29.jpg","2017Abstracts%20%281714%29.jpg","2017Abstracts%20%281715%29.jpg","2017Abstracts%20%281716%29.jpg","2017Abstracts%20%281717%29.jpg","2017Abstracts%20%281718%29.jpg","2017Abstracts%20%281719%29.jpg","2017Abstracts%20%28172%29.jpg","2017Abstracts%20%281720%29.jpg","2017Abstracts%20%281721%29.jpg","2017Abstracts%20%281722%29.jpg","2017Abstracts%20%281723%29.jpg","2017Abstracts%20%281724%29.jpg","2017Abstracts%20%281725%29.jpg","2017Abstracts%20%281726%29.jpg","2017Abstracts%20%281727%29.jpg","2017Abstracts%20%281728%29.jpg","2017Abstracts%20%281729%29.jpg","2017Abstracts%20%28173%29.jpg","2017Abstracts%20%281730%29.jpg","2017Abstracts%20%281731%29.jpg","2017Abstracts%20%281732%29.jpg","2017Abstracts%20%281733%29.jpg","2017Abstracts%20%281734%29.jpg","2017Abstracts%20%281735%29.jpg","2017Abstracts%20%281736%29.jpg","2017Abstracts%20%281737%29.jpg","2017Abstracts%20%281738%29.jpg","2017Abstracts%20%281739%29.jpg","2017Abstracts%20%28174%29.jpg","2017Abstracts%20%281740%29.jpg","2017Abstracts%20%281741%29.jpg","2017Abstracts%20%281742%29.jpg","2017Abstracts%20%281743%29.jpg","2017Abstracts%20%281744%29.jpg","2017Abstracts%20%281745%29.jpg","2017Abstracts%20%281746%29.jpg","2017Abstracts%20%281747%29.jpg","2017Abstracts%20%281748%29.jpg","2017Abstracts%20%281749%29.jpg","2017Abstracts%20%28175%29.jpg","2017Abstracts%20%281750%29.jpg","2017Abstracts%20%281751%29.jpg","2017Abstracts%20%281752%29.jpg","2017Abstracts%20%281753%29.jpg","2017Abstracts%20%281754%29.jpg","2017Abstracts%20%281755%29.jpg","2017Abstracts%20%281756%29.jpg","2017Abstracts%20%281757%29.jpg","2017Abstracts%20%281758%29.jpg","2017Abstracts%20%281759%29.jpg","2017Abstracts%20%28176%29.jpg","2017Abstracts%20%281760%29.jpg","2017Abstracts%20%281761%29.jpg","2017Abstracts%20%281762%29.jpg","2017Abstracts%20%281763%29.jpg","2017Abstracts%20%281764%29.jpg","2017Abstracts%20%281765%29.jpg","2017Abstracts%20%281766%29.jpg","2017Abstracts%20%281767%29.jpg","2017Abstracts%20%281768%29.jpg","2017Abstracts%20%281769%29.jpg","2017Abstracts%20%28177%29.jpg","2017Abstracts%20%281770%29.jpg","2017Abstracts%20%281771%29.jpg","2017Abstracts%20%281772%29.jpg","2017Abstracts%20%281773%29.jpg","2017Abstracts%20%281774%29.jpg","2017Abstracts%20%281775%29.jpg","2017Abstracts%20%281776%29.jpg","2017Abstracts%20%281777%29.jpg","2017Abstracts%20%281778%29.jpg","2017Abstracts%20%281779%29.jpg","2017Abstracts%20%28178%29.jpg","2017Abstracts%20%281780%29.jpg","2017Abstracts%20%281781%29.jpg","2017Abstracts%20%281782%29.jpg","2017Abstracts%20%281783%29.jpg","2017Abstracts%20%281784%29.jpg","2017Abstracts%20%281785%29.jpg","2017Abstracts%20%281786%29.jpg","2017Abstracts%20%281787%29.jpg","2017Abstracts%20%281788%29.jpg","2017Abstracts%20%281789%29.jpg","2017Abstracts%20%28179%29.jpg","2017Abstracts%20%281790%29.jpg","2017Abstracts%20%281791%29.jpg","2017Abstracts%20%281792%29.jpg","2017Abstracts%20%281793%29.jpg","2017Abstracts%20%281794%29.jpg","2017Abstracts%20%281795%29.jpg","2017Abstracts%20%281796%29.jpg","2017Abstracts%20%281797%29.jpg","2017Abstracts%20%281798%29.jpg","2017Abstracts%20%281799%29.jpg","2017Abstracts%20%2818%29.jpg","2017Abstracts%20%28180%29.jpg","2017Abstracts%20%281800%29.jpg","2017Abstracts%20%281801%29.jpg","2017Abstracts%20%281802%29.jpg","2017Abstracts%20%281803%29.jpg","2017Abstracts%20%281804%29.jpg","2017Abstracts%20%281805%29.jpg","2017Abstracts%20%281806%29.jpg","2017Abstracts%20%281807%29.jpg","2017Abstracts%20%281808%29.jpg","2017Abstracts%20%281809%29.jpg","2017Abstracts%20%28181%29.jpg","2017Abstracts%20%281810%29.jpg","2017Abstracts%20%281811%29.jpg","2017Abstracts%20%281812%29.jpg","2017Abstracts%20%281813%29.jpg","2017Abstracts%20%281814%29.jpg","2017Abstracts%20%281815%29.jpg","2017Abstracts%20%281816%29.jpg","2017Abstracts%20%281817%29.jpg","2017Abstracts%20%281818%29.jpg","2017Abstracts%20%281819%29.jpg","2017Abstracts%20%28182%29.jpg","2017Abstracts%20%281820%29.jpg","2017Abstracts%20%281821%29.jpg","2017Abstracts%20%281822%29.jpg","2017Abstracts%20%281823%29.jpg","2017Abstracts%20%281824%29.jpg","2017Abstracts%20%281825%29.jpg","2017Abstracts%20%281826%29.jpg","2017Abstracts%20%281827%29.jpg","2017Abstracts%20%281828%29.jpg","2017Abstracts%20%281829%29.jpg","2017Abstracts%20%28183%29.jpg","2017Abstracts%20%281830%29.jpg","2017Abstracts%20%281831%29.jpg","2017Abstracts%20%281832%29.jpg","2017Abstracts%20%281833%29.jpg","2017Abstracts%20%281834%29.jpg","2017Abstracts%20%281835%29.jpg","2017Abstracts%20%281836%29.jpg","2017Abstracts%20%281837%29.jpg","2017Abstracts%20%281838%29.jpg","2017Abstracts%20%281839%29.jpg","2017Abstracts%20%28184%29.jpg","2017Abstracts%20%281840%29.jpg","2017Abstracts%20%281841%29.jpg","2017Abstracts%20%281842%29.jpg","2017Abstracts%20%281843%29.jpg","2017Abstracts%20%281844%29.jpg","2017Abstracts%20%281845%29.jpg","2017Abstracts%20%281846%29.jpg","2017Abstracts%20%281847%29.jpg","2017Abstracts%20%281848%29.jpg","2017Abstracts%20%281849%29.jpg","2017Abstracts%20%28185%29.jpg","2017Abstracts%20%281850%29.jpg","2017Abstracts%20%281851%29.jpg","2017Abstracts%20%281852%29.jpg","2017Abstracts%20%281853%29.jpg","2017Abstracts%20%281854%29.jpg","2017Abstracts%20%281855%29.jpg","2017Abstracts%20%281856%29.jpg","2017Abstracts%20%281857%29.jpg","2017Abstracts%20%281858%29.jpg","2017Abstracts%20%281859%29.jpg","2017Abstracts%20%28186%29.jpg","2017Abstracts%20%281860%29.jpg","2017Abstracts%20%281861%29.jpg","2017Abstracts%20%281862%29.jpg","2017Abstracts%20%281863%29.jpg","2017Abstracts%20%281864%29.jpg","2017Abstracts%20%281865%29.jpg","2017Abstracts%20%281866%29.jpg","2017Abstracts%20%281867%29.jpg","2017Abstracts%20%281868%29.jpg","2017Abstracts%20%281869%29.jpg","2017Abstracts%20%28187%29.jpg","2017Abstracts%20%281870%29.jpg","2017Abstracts%20%281871%29.jpg","2017Abstracts%20%281872%29.jpg","2017Abstracts%20%281873%29.jpg","2017Abstracts%20%281874%29.jpg","2017Abstracts%20%281875%29.jpg","2017Abstracts%20%281876%29.jpg","2017Abstracts%20%281877%29.jpg","2017Abstracts%20%281878%29.jpg","2017Abstracts%20%281879%29.jpg","2017Abstracts%20%28188%29.jpg","2017Abstracts%20%281880%29.jpg","2017Abstracts%20%281881%29.jpg","2017Abstracts%20%281882%29.jpg","2017Abstracts%20%281883%29.jpg","2017Abstracts%20%281884%29.jpg","2017Abstracts%20%281885%29.jpg","2017Abstracts%20%281886%29.jpg","2017Abstracts%20%281887%29.jpg","2017Abstracts%20%281888%29.jpg","2017Abstracts%20%281889%29.jpg","2017Abstracts%20%28189%29.jpg","2017Abstracts%20%281890%29.jpg","2017Abstracts%20%281891%29.jpg","2017Abstracts%20%281892%29.jpg","2017Abstracts%20%281893%29.jpg","2017Abstracts%20%281894%29.jpg","2017Abstracts%20%281895%29.jpg","2017Abstracts%20%281896%29.jpg","2017Abstracts%20%281897%29.jpg","2017Abstracts%20%281898%29.jpg","2017Abstracts%20%281899%29.jpg","2017Abstracts%20%2819%29.jpg","2017Abstracts%20%28190%29.jpg","2017Abstracts%20%281900%29.jpg","2017Abstracts%20%281901%29.jpg","2017Abstracts%20%281902%29.jpg","2017Abstracts%20%281903%29.jpg","2017Abstracts%20%281904%29.jpg","2017Abstracts%20%281905%29.jpg","2017Abstracts%20%281906%29.jpg","2017Abstracts%20%281907%29.jpg","2017Abstracts%20%281908%29.jpg","2017Abstracts%20%281909%29.jpg","2017Abstracts%20%28191%29.jpg","2017Abstracts%20%281910%29.jpg","2017Abstracts%20%281911%29.jpg","2017Abstracts%20%281912%29.jpg","2017Abstracts%20%281913%29.jpg","2017Abstracts%20%281914%29.jpg","2017Abstracts%20%281915%29.jpg","2017Abstracts%20%281916%29.jpg","2017Abstracts%20%281917%29.jpg","2017Abstracts%20%281918%29.jpg","2017Abstracts%20%281919%29.jpg","2017Abstracts%20%28192%29.jpg","2017Abstracts%20%281920%29.jpg","2017Abstracts%20%281921%29.jpg","2017Abstracts%20%281922%29.jpg","2017Abstracts%20%281923%29.jpg","2017Abstracts%20%281924%29.jpg","2017Abstracts%20%281925%29.jpg","2017Abstracts%20%281926%29.jpg","2017Abstracts%20%281927%29.jpg","2017Abstracts%20%281928%29.jpg","2017Abstracts%20%281929%29.jpg","2017Abstracts%20%28193%29.jpg","2017Abstracts%20%281930%29.jpg","2017Abstracts%20%281931%29.jpg","2017Abstracts%20%281932%29.jpg","2017Abstracts%20%281933%29.jpg","2017Abstracts%20%281934%29.jpg","2017Abstracts%20%281935%29.jpg","2017Abstracts%20%281936%29.jpg","2017Abstracts%20%281937%29.jpg","2017Abstracts%20%281938%29.jpg","2017Abstracts%20%281939%29.jpg","2017Abstracts%20%28194%29.jpg","2017Abstracts%20%281940%29.jpg","2017Abstracts%20%281941%29.jpg","2017Abstracts%20%281942%29.jpg","2017Abstracts%20%281943%29.jpg","2017Abstracts%20%281944%29.jpg","2017Abstracts%20%281945%29.jpg","2017Abstracts%20%281946%29.jpg","2017Abstracts%20%281947%29.jpg","2017Abstracts%20%281948%29.jpg","2017Abstracts%20%281949%29.jpg","2017Abstracts%20%28195%29.jpg","2017Abstracts%20%281950%29.jpg","2017Abstracts%20%281951%29.jpg","2017Abstracts%20%281952%29.jpg","2017Abstracts%20%281953%29.jpg","2017Abstracts%20%281954%29.jpg","2017Abstracts%20%281955%29.jpg","2017Abstracts%20%281956%29.jpg","2017Abstracts%20%281957%29.jpg","2017Abstracts%20%281958%29.jpg","2017Abstracts%20%281959%29.jpg","2017Abstracts%20%28196%29.jpg","2017Abstracts%20%281960%29.jpg","2017Abstracts%20%281961%29.jpg","2017Abstracts%20%281962%29.jpg","2017Abstracts%20%281963%29.jpg","2017Abstracts%20%281964%29.jpg","2017Abstracts%20%281965%29.jpg","2017Abstracts%20%281966%29.jpg","2017Abstracts%20%281967%29.jpg","2017Abstracts%20%281968%29.jpg","2017Abstracts%20%281969%29.jpg","2017Abstracts%20%28197%29.jpg","2017Abstracts%20%281970%29.jpg","2017Abstracts%20%281971%29.jpg","2017Abstracts%20%281972%29.jpg","2017Abstracts%20%281973%29.jpg","2017Abstracts%20%281974%29.jpg","2017Abstracts%20%281975%29.jpg","2017Abstracts%20%281976%29.jpg","2017Abstracts%20%281977%29.jpg","2017Abstracts%20%281978%29.jpg","2017Abstracts%20%281979%29.jpg","2017Abstracts%20%28198%29.jpg","2017Abstracts%20%281980%29.jpg","2017Abstracts%20%281981%29.jpg","2017Abstracts%20%281982%29.jpg","2017Abstracts%20%281983%29.jpg","2017Abstracts%20%281984%29.jpg","2017Abstracts%20%281985%29.jpg","2017Abstracts%20%281986%29.jpg","2017Abstracts%20%281987%29.jpg","2017Abstracts%20%281988%29.jpg","2017Abstracts%20%281989%29.jpg","2017Abstracts%20%28199%29.jpg","2017Abstracts%20%281990%29.jpg","2017Abstracts%20%281991%29.jpg","2017Abstracts%20%281992%29.jpg","2017Abstracts%20%281993%29.jpg","2017Abstracts%20%281994%29.jpg","2017Abstracts%20%281995%29.jpg","2017Abstracts%20%281996%29.jpg","2017Abstracts%20%281997%29.jpg","2017Abstracts%20%281998%29.jpg","2017Abstracts%20%281999%29.jpg","2017Abstracts%20%282%29.jpg","2017Abstracts%20%2820%29.jpg","2017Abstracts%20%28200%29.jpg","2017Abstracts%20%282000%29.jpg","2017Abstracts%20%282001%29.jpg","2017Abstracts%20%282002%29.jpg","2017Abstracts%20%282003%29.jpg","2017Abstracts%20%282004%29.jpg","2017Abstracts%20%282005%29.jpg","2017Abstracts%20%282006%29.jpg","2017Abstracts%20%282007%29.jpg","2017Abstracts%20%282008%29.jpg","2017Abstracts%20%282009%29.jpg","2017Abstracts%20%28201%29.jpg","2017Abstracts%20%282010%29.jpg","2017Abstracts%20%282011%29.jpg","2017Abstracts%20%282012%29.jpg","2017Abstracts%20%282013%29.jpg","2017Abstracts%20%282014%29.jpg","2017Abstracts%20%282015%29.jpg","2017Abstracts%20%282016%29.jpg","2017Abstracts%20%282017%29.jpg","2017Abstracts%20%282018%29.jpg","2017Abstracts%20%282019%29.jpg","2017Abstracts%20%28202%29.jpg","2017Abstracts%20%282020%29.jpg","2017Abstracts%20%282021%29.jpg","2017Abstracts%20%282022%29.jpg","2017Abstracts%20%282023%29.jpg","2017Abstracts%20%282024%29.jpg","2017Abstracts%20%282025%29.jpg","2017Abstracts%20%282026%29.jpg","2017Abstracts%20%282027%29.jpg","2017Abstracts%20%282028%29.jpg","2017Abstracts%20%282029%29.jpg","2017Abstracts%20%28203%29.jpg","2017Abstracts%20%282030%29.jpg","2017Abstracts%20%282031%29.jpg","2017Abstracts%20%282032%29.jpg","2017Abstracts%20%282033%29.jpg","2017Abstracts%20%282034%29.jpg","2017Abstracts%20%282035%29.jpg","2017Abstracts%20%282036%29.jpg","2017Abstracts%20%282037%29.jpg","2017Abstracts%20%282038%29.jpg","2017Abstracts%20%282039%29.jpg","2017Abstracts%20%28204%29.jpg","2017Abstracts%20%282040%29.jpg","2017Abstracts%20%282041%29.jpg","2017Abstracts%20%282042%29.jpg","2017Abstracts%20%282043%29.jpg","2017Abstracts%20%282044%29.jpg","2017Abstracts%20%282045%29.jpg","2017Abstracts%20%282046%29.jpg","2017Abstracts%20%282047%29.jpg","2017Abstracts%20%282048%29.jpg","2017Abstracts%20%282049%29.jpg","2017Abstracts%20%28205%29.jpg","2017Abstracts%20%282050%29.jpg","2017Abstracts%20%282051%29.jpg","2017Abstracts%20%282052%29.jpg","2017Abstracts%20%282053%29.jpg","2017Abstracts%20%282054%29.jpg","2017Abstracts%20%282055%29.jpg","2017Abstracts%20%282056%29.jpg","2017Abstracts%20%282057%29.jpg","2017Abstracts%20%282058%29.jpg","2017Abstracts%20%282059%29.jpg","2017Abstracts%20%28206%29.jpg","2017Abstracts%20%282060%29.jpg","2017Abstracts%20%282061%29.jpg","2017Abstracts%20%282062%29.jpg","2017Abstracts%20%282063%29.jpg","2017Abstracts%20%282064%29.jpg","2017Abstracts%20%282065%29.jpg","2017Abstracts%20%282066%29.jpg","2017Abstracts%20%282067%29.jpg","2017Abstracts%20%282068%29.jpg","2017Abstracts%20%282069%29.jpg","2017Abstracts%20%28207%29.jpg","2017Abstracts%20%282070%29.jpg","2017Abstracts%20%282071%29.jpg","2017Abstracts%20%282072%29.jpg","2017Abstracts%20%282073%29.jpg","2017Abstracts%20%282074%29.jpg","2017Abstracts%20%282075%29.jpg","2017Abstracts%20%282076%29.jpg","2017Abstracts%20%282077%29.jpg","2017Abstracts%20%282078%29.jpg","2017Abstracts%20%282079%29.jpg","2017Abstracts%20%28208%29.jpg","2017Abstracts%20%282080%29.jpg","2017Abstracts%20%282081%29.jpg","2017Abstracts%20%282082%29.jpg","2017Abstracts%20%282083%29.jpg","2017Abstracts%20%282084%29.jpg","2017Abstracts%20%282085%29.jpg","2017Abstracts%20%282086%29.jpg","2017Abstracts%20%282087%29.jpg","2017Abstracts%20%282088%29.jpg","2017Abstracts%20%282089%29.jpg","2017Abstracts%20%28209%29.jpg","2017Abstracts%20%282090%29.jpg","2017Abstracts%20%282091%29.jpg","2017Abstracts%20%282092%29.jpg","2017Abstracts%20%282093%29.jpg","2017Abstracts%20%282094%29.jpg","2017Abstracts%20%282095%29.jpg","2017Abstracts%20%282096%29.jpg","2017Abstracts%20%282097%29.jpg","2017Abstracts%20%282098%29.jpg","2017Abstracts%20%282099%29.jpg","2017Abstracts%20%2821%29.jpg","2017Abstracts%20%28210%29.jpg","2017Abstracts%20%282100%29.jpg","2017Abstracts%20%282101%29.jpg","2017Abstracts%20%282102%29.jpg","2017Abstracts%20%282103%29.jpg","2017Abstracts%20%282104%29.jpg","2017Abstracts%20%282105%29.jpg","2017Abstracts%20%282106%29.jpg","2017Abstracts%20%282107%29.jpg","2017Abstracts%20%282108%29.jpg","2017Abstracts%20%282109%29.jpg","2017Abstracts%20%28211%29.jpg","2017Abstracts%20%282110%29.jpg","2017Abstracts%20%282111%29.jpg","2017Abstracts%20%282112%29.jpg","2017Abstracts%20%282113%29.jpg","2017Abstracts%20%282114%29.jpg","2017Abstracts%20%282115%29.jpg","2017Abstracts%20%282116%29.jpg","2017Abstracts%20%282117%29.jpg","2017Abstracts%20%282118%29.jpg","2017Abstracts%20%282119%29.jpg","2017Abstracts%20%28212%29.jpg","2017Abstracts%20%282120%29.jpg","2017Abstracts%20%282121%29.jpg","2017Abstracts%20%282122%29.jpg","2017Abstracts%20%282123%29.jpg","2017Abstracts%20%282124%29.jpg","2017Abstracts%20%282125%29.jpg","2017Abstracts%20%282126%29.jpg","2017Abstracts%20%282127%29.jpg","2017Abstracts%20%282128%29.jpg","2017Abstracts%20%282129%29.jpg","2017Abstracts%20%28213%29.jpg","2017Abstracts%20%282130%29.jpg","2017Abstracts%20%282131%29.jpg","2017Abstracts%20%282132%29.jpg","2017Abstracts%20%282133%29.jpg","2017Abstracts%20%282134%29.jpg","2017Abstracts%20%282135%29.jpg","2017Abstracts%20%282136%29.jpg","2017Abstracts%20%282137%29.jpg","2017Abstracts%20%282138%29.jpg","2017Abstracts%20%282139%29.jpg","2017Abstracts%20%28214%29.jpg","2017Abstracts%20%282140%29.jpg","2017Abstracts%20%282141%29.jpg","2017Abstracts%20%282142%29.jpg","2017Abstracts%20%282143%29.jpg","2017Abstracts%20%282144%29.jpg","2017Abstracts%20%282145%29.jpg","2017Abstracts%20%282146%29.jpg","2017Abstracts%20%282147%29.jpg","2017Abstracts%20%282148%29.jpg","2017Abstracts%20%282149%29.jpg","2017Abstracts%20%28215%29.jpg","2017Abstracts%20%282150%29.jpg","2017Abstracts%20%282151%29.jpg","2017Abstracts%20%282152%29.jpg","2017Abstracts%20%282153%29.jpg","2017Abstracts%20%282154%29.jpg","2017Abstracts%20%282155%29.jpg","2017Abstracts%20%282156%29.jpg","2017Abstracts%20%282157%29.jpg","2017Abstracts%20%282158%29.jpg","2017Abstracts%20%282159%29.jpg","2017Abstracts%20%28216%29.jpg","2017Abstracts%20%282160%29.jpg","2017Abstracts%20%282161%29.jpg","2017Abstracts%20%282162%29.jpg","2017Abstracts%20%282163%29.jpg","2017Abstracts%20%282164%29.jpg","2017Abstracts%20%282165%29.jpg","2017Abstracts%20%282166%29.jpg","2017Abstracts%20%282167%29.jpg","2017Abstracts%20%282168%29.jpg","2017Abstracts%20%282169%29.jpg","2017Abstracts%20%28217%29.jpg","2017Abstracts%20%282170%29.jpg","2017Abstracts%20%282171%29.jpg","2017Abstracts%20%282172%29.jpg","2017Abstracts%20%282173%29.jpg","2017Abstracts%20%282174%29.jpg","2017Abstracts%20%282175%29.jpg","2017Abstracts%20%282176%29.jpg","2017Abstracts%20%282177%29.jpg","2017Abstracts%20%282178%29.jpg","2017Abstracts%20%282179%29.jpg","2017Abstracts%20%28218%29.jpg","2017Abstracts%20%282180%29.jpg","2017Abstracts%20%282181%29.jpg","2017Abstracts%20%282182%29.jpg","2017Abstracts%20%282183%29.jpg","2017Abstracts%20%282184%29.jpg","2017Abstracts%20%282185%29.jpg","2017Abstracts%20%282186%29.jpg","2017Abstracts%20%282187%29.jpg","2017Abstracts%20%282188%29.jpg","2017Abstracts%20%282189%29.jpg","2017Abstracts%20%28219%29.jpg","2017Abstracts%20%282190%29.jpg","2017Abstracts%20%282191%29.jpg","2017Abstracts%20%282192%29.jpg","2017Abstracts%20%282193%29.jpg","2017Abstracts%20%282194%29.jpg","2017Abstracts%20%282195%29.jpg","2017Abstracts%20%282196%29.jpg","2017Abstracts%20%282197%29.jpg","2017Abstracts%20%282198%29.jpg","2017Abstracts%20%282199%29.jpg","2017Abstracts%20%2822%29.jpg","2017Abstracts%20%28220%29.jpg","2017Abstracts%20%282200%29.jpg","2017Abstracts%20%282201%29.jpg","2017Abstracts%20%282202%29.jpg","2017Abstracts%20%282203%29.jpg","2017Abstracts%20%282204%29.jpg","2017Abstracts%20%282205%29.jpg","2017Abstracts%20%282206%29.jpg","2017Abstracts%20%282207%29.jpg","2017Abstracts%20%282208%29.jpg","2017Abstracts%20%282209%29.jpg","2017Abstracts%20%28221%29.jpg","2017Abstracts%20%282210%29.jpg","2017Abstracts%20%282211%29.jpg","2017Abstracts%20%282212%29.jpg","2017Abstracts%20%282213%29.jpg","2017Abstracts%20%282214%29.jpg","2017Abstracts%20%282215%29.jpg","2017Abstracts%20%282216%29.jpg","2017Abstracts%20%282217%29.jpg","2017Abstracts%20%282218%29.jpg","2017Abstracts%20%282219%29.jpg","2017Abstracts%20%28222%29.jpg","2017Abstracts%20%282220%29.jpg","2017Abstracts%20%282221%29.jpg","2017Abstracts%20%282222%29.jpg","2017Abstracts%20%282223%29.jpg","2017Abstracts%20%282224%29.jpg","2017Abstracts%20%282225%29.jpg","2017Abstracts%20%282226%29.jpg","2017Abstracts%20%282227%29.jpg","2017Abstracts%20%282228%29.jpg","2017Abstracts%20%282229%29.jpg","2017Abstracts%20%28223%29.jpg","2017Abstracts%20%282230%29.jpg","2017Abstracts%20%282231%29.jpg","2017Abstracts%20%282232%29.jpg","2017Abstracts%20%282233%29.jpg","2017Abstracts%20%282234%29.jpg","2017Abstracts%20%282235%29.jpg","2017Abstracts%20%282236%29.jpg","2017Abstracts%20%282237%29.jpg","2017Abstracts%20%282238%29.jpg","2017Abstracts%20%282239%29.jpg","2017Abstracts%20%28224%29.jpg","2017Abstracts%20%282240%29.jpg","2017Abstracts%20%282241%29.jpg","2017Abstracts%20%282242%29.jpg","2017Abstracts%20%282243%29.jpg","2017Abstracts%20%282244%29.jpg","2017Abstracts%20%282245%29.jpg","2017Abstracts%20%282246%29.jpg","2017Abstracts%20%282247%29.jpg","2017Abstracts%20%282248%29.jpg","2017Abstracts%20%282249%29.jpg","2017Abstracts%20%28225%29.jpg","2017Abstracts%20%282250%29.jpg","2017Abstracts%20%282251%29.jpg","2017Abstracts%20%282252%29.jpg","2017Abstracts%20%282253%29.jpg","2017Abstracts%20%282254%29.jpg","2017Abstracts%20%282255%29.jpg","2017Abstracts%20%282256%29.jpg","2017Abstracts%20%282257%29.jpg","2017Abstracts%20%282258%29.jpg","2017Abstracts%20%282259%29.jpg","2017Abstracts%20%28226%29.jpg","2017Abstracts%20%282260%29.jpg","2017Abstracts%20%282261%29.jpg","2017Abstracts%20%282262%29.jpg","2017Abstracts%20%282263%29.jpg","2017Abstracts%20%282264%29.jpg","2017Abstracts%20%282265%29.jpg","2017Abstracts%20%282266%29.jpg","2017Abstracts%20%282267%29.jpg","2017Abstracts%20%282268%29.jpg","2017Abstracts%20%282269%29.jpg","2017Abstracts%20%28227%29.jpg","2017Abstracts%20%282270%29.jpg","2017Abstracts%20%282271%29.jpg","2017Abstracts%20%282272%29.jpg","2017Abstracts%20%282273%29.jpg","2017Abstracts%20%282274%29.jpg","2017Abstracts%20%282275%29.jpg","2017Abstracts%20%282276%29.jpg","2017Abstracts%20%282277%29.jpg","2017Abstracts%20%282278%29.jpg","2017Abstracts%20%282279%29.jpg","2017Abstracts%20%28228%29.jpg","2017Abstracts%20%282280%29.jpg","2017Abstracts%20%282281%29.jpg","2017Abstracts%20%282282%29.jpg","2017Abstracts%20%282283%29.jpg","2017Abstracts%20%282284%29.jpg","2017Abstracts%20%282285%29.jpg","2017Abstracts%20%282286%29.jpg","2017Abstracts%20%282287%29.jpg","2017Abstracts%20%282288%29.jpg","2017Abstracts%20%282289%29.jpg","2017Abstracts%20%28229%29.jpg","2017Abstracts%20%282290%29.jpg","2017Abstracts%20%282291%29.jpg","2017Abstracts%20%282292%29.jpg","2017Abstracts%20%282293%29.jpg","2017Abstracts%20%282294%29.jpg","2017Abstracts%20%282295%29.jpg","2017Abstracts%20%282296%29.jpg","2017Abstracts%20%282297%29.jpg","2017Abstracts%20%282298%29.jpg","2017Abstracts%20%282299%29.jpg","2017Abstracts%20%2823%29.jpg","2017Abstracts%20%28230%29.jpg","2017Abstracts%20%282300%29.jpg","2017Abstracts%20%282301%29.jpg","2017Abstracts%20%282302%29.jpg","2017Abstracts%20%282303%29.jpg","2017Abstracts%20%282304%29.jpg","2017Abstracts%20%282305%29.jpg","2017Abstracts%20%282306%29.jpg","2017Abstracts%20%282307%29.jpg","2017Abstracts%20%282308%29.jpg","2017Abstracts%20%282309%29.jpg","2017Abstracts%20%28231%29.jpg","2017Abstracts%20%282310%29.jpg","2017Abstracts%20%282311%29.jpg","2017Abstracts%20%282312%29.jpg","2017Abstracts%20%282313%29.jpg","2017Abstracts%20%282314%29.jpg","2017Abstracts%20%282315%29.jpg","2017Abstracts%20%282316%29.jpg","2017Abstracts%20%282317%29.jpg","2017Abstracts%20%282318%29.jpg","2017Abstracts%20%282319%29.jpg","2017Abstracts%20%28232%29.jpg","2017Abstracts%20%282320%29.jpg","2017Abstracts%20%282321%29.jpg","2017Abstracts%20%282322%29.jpg","2017Abstracts%20%282323%29.jpg","2017Abstracts%20%282324%29.jpg","2017Abstracts%20%282325%29.jpg","2017Abstracts%20%282326%29.jpg","2017Abstracts%20%282327%29.jpg","2017Abstracts%20%282328%29.jpg","2017Abstracts%20%282329%29.jpg","2017Abstracts%20%28233%29.jpg","2017Abstracts%20%282330%29.jpg","2017Abstracts%20%282331%29.jpg","2017Abstracts%20%282332%29.jpg","2017Abstracts%20%282333%29.jpg","2017Abstracts%20%282334%29.jpg","2017Abstracts%20%282335%29.jpg","2017Abstracts%20%282336%29.jpg","2017Abstracts%20%282337%29.jpg","2017Abstracts%20%282338%29.jpg","2017Abstracts%20%282339%29.jpg","2017Abstracts%20%28234%29.jpg","2017Abstracts%20%282340%29.jpg","2017Abstracts%20%282341%29.jpg","2017Abstracts%20%282342%29.jpg","2017Abstracts%20%282343%29.jpg","2017Abstracts%20%282344%29.jpg","2017Abstracts%20%282345%29.jpg","2017Abstracts%20%282346%29.jpg","2017Abstracts%20%282347%29.jpg","2017Abstracts%20%282348%29.jpg","2017Abstracts%20%282349%29.jpg","2017Abstracts%20%28235%29.jpg","2017Abstracts%20%282350%29.jpg","2017Abstracts%20%282351%29.jpg","2017Abstracts%20%282352%29.jpg","2017Abstracts%20%282353%29.jpg","2017Abstracts%20%282354%29.jpg","2017Abstracts%20%282355%29.jpg","2017Abstracts%20%282356%29.jpg","2017Abstracts%20%282357%29.jpg","2017Abstracts%20%282358%29.jpg","2017Abstracts%20%282359%29.jpg","2017Abstracts%20%28236%29.jpg","2017Abstracts%20%282360%29.jpg","2017Abstracts%20%282361%29.jpg","2017Abstracts%20%282362%29.jpg","2017Abstracts%20%282363%29.jpg","2017Abstracts%20%282364%29.jpg","2017Abstracts%20%282365%29.jpg","2017Abstracts%20%282366%29.jpg","2017Abstracts%20%282367%29.jpg","2017Abstracts%20%282368%29.jpg","2017Abstracts%20%282369%29.jpg","2017Abstracts%20%28237%29.jpg","2017Abstracts%20%282370%29.jpg","2017Abstracts%20%282371%29.jpg","2017Abstracts%20%282372%29.jpg","2017Abstracts%20%282373%29.jpg","2017Abstracts%20%282374%29.jpg","2017Abstracts%20%282375%29.jpg","2017Abstracts%20%282376%29.jpg","2017Abstracts%20%282377%29.jpg","2017Abstracts%20%282378%29.jpg","2017Abstracts%20%282379%29.jpg","2017Abstracts%20%28238%29.jpg","2017Abstracts%20%282380%29.jpg","2017Abstracts%20%282381%29.jpg","2017Abstracts%20%282382%29.jpg","2017Abstracts%20%282383%29.jpg","2017Abstracts%20%282384%29.jpg","2017Abstracts%20%282385%29.jpg","2017Abstracts%20%282386%29.jpg","2017Abstracts%20%282387%29.jpg","2017Abstracts%20%282388%29.jpg","2017Abstracts%20%282389%29.jpg","2017Abstracts%20%28239%29.jpg","2017Abstracts%20%282390%29.jpg","2017Abstracts%20%282391%29.jpg","2017Abstracts%20%282392%29.jpg","2017Abstracts%20%282393%29.jpg","2017Abstracts%20%282394%29.jpg","2017Abstracts%20%282395%29.jpg","2017Abstracts%20%282396%29.jpg","2017Abstracts%20%282397%29.jpg","2017Abstracts%20%282398%29.jpg","2017Abstracts%20%282399%29.jpg","2017Abstracts%20%2824%29.jpg","2017Abstracts%20%28240%29.jpg","2017Abstracts%20%282400%29.jpg","2017Abstracts%20%282401%29.jpg","2017Abstracts%20%282402%29.jpg","2017Abstracts%20%282403%29.jpg","2017Abstracts%20%282404%29.jpg","2017Abstracts%20%282405%29.jpg","2017Abstracts%20%282406%29.jpg","2017Abstracts%20%282407%29.jpg","2017Abstracts%20%282408%29.jpg","2017Abstracts%20%282409%29.jpg","2017Abstracts%20%28241%29.jpg","2017Abstracts%20%282410%29.jpg","2017Abstracts%20%282411%29.jpg","2017Abstracts%20%282412%29.jpg","2017Abstracts%20%282413%29.jpg","2017Abstracts%20%282414%29.jpg","2017Abstracts%20%282415%29.jpg","2017Abstracts%20%282416%29.jpg","2017Abstracts%20%282417%29.jpg","2017Abstracts%20%282418%29.jpg","2017Abstracts%20%282419%29.jpg","2017Abstracts%20%28242%29.jpg","2017Abstracts%20%282420%29.jpg","2017Abstracts%20%282421%29.jpg","2017Abstracts%20%282422%29.jpg","2017Abstracts%20%282423%29.jpg","2017Abstracts%20%282424%29.jpg","2017Abstracts%20%282425%29.jpg","2017Abstracts%20%282426%29.jpg","2017Abstracts%20%282427%29.jpg","2017Abstracts%20%282428%29.jpg","2017Abstracts%20%282429%29.jpg","2017Abstracts%20%28243%29.jpg","2017Abstracts%20%282430%29.jpg","2017Abstracts%20%282431%29.jpg","2017Abstracts%20%282432%29.jpg","2017Abstracts%20%282433%29.jpg","2017Abstracts%20%282434%29.jpg","2017Abstracts%20%282435%29.jpg","2017Abstracts%20%282436%29.jpg","2017Abstracts%20%282437%29.jpg","2017Abstracts%20%282438%29.jpg","2017Abstracts%20%282439%29.jpg","2017Abstracts%20%28244%29.jpg","2017Abstracts%20%282440%29.jpg","2017Abstracts%20%282441%29.jpg","2017Abstracts%20%282442%29.jpg","2017Abstracts%20%282443%29.jpg","2017Abstracts%20%282444%29.jpg","2017Abstracts%20%282445%29.jpg","2017Abstracts%20%282446%29.jpg","2017Abstracts%20%282447%29.jpg","2017Abstracts%20%282448%29.jpg","2017Abstracts%20%282449%29.jpg","2017Abstracts%20%28245%29.jpg","2017Abstracts%20%282450%29.jpg","2017Abstracts%20%282451%29.jpg","2017Abstracts%20%282452%29.jpg","2017Abstracts%20%282453%29.jpg","2017Abstracts%20%282454%29.jpg","2017Abstracts%20%282455%29.jpg","2017Abstracts%20%282456%29.jpg","2017Abstracts%20%282457%29.jpg","2017Abstracts%20%282458%29.jpg","2017Abstracts%20%282459%29.jpg","2017Abstracts%20%28246%29.jpg","2017Abstracts%20%282460%29.jpg","2017Abstracts%20%282461%29.jpg","2017Abstracts%20%282462%29.jpg","2017Abstracts%20%282463%29.jpg","2017Abstracts%20%282464%29.jpg","2017Abstracts%20%282465%29.jpg","2017Abstracts%20%282466%29.jpg","2017Abstracts%20%282467%29.jpg","2017Abstracts%20%282468%29.jpg","2017Abstracts%20%282469%29.jpg","2017Abstracts%20%28247%29.jpg","2017Abstracts%20%282470%29.jpg","2017Abstracts%20%282471%29.jpg","2017Abstracts%20%282472%29.jpg","2017Abstracts%20%282473%29.jpg","2017Abstracts%20%282474%29.jpg","2017Abstracts%20%282475%29.jpg","2017Abstracts%20%282476%29.jpg","2017Abstracts%20%282477%29.jpg","2017Abstracts%20%282478%29.jpg","2017Abstracts%20%282479%29.jpg","2017Abstracts%20%28248%29.jpg","2017Abstracts%20%282480%29.jpg","2017Abstracts%20%282481%29.jpg","2017Abstracts%20%282482%29.jpg","2017Abstracts%20%282483%29.jpg","2017Abstracts%20%282484%29.jpg","2017Abstracts%20%282485%29.jpg","2017Abstracts%20%282486%29.jpg","2017Abstracts%20%282487%29.jpg","2017Abstracts%20%282488%29.jpg","2017Abstracts%20%282489%29.jpg","2017Abstracts%20%28249%29.jpg","2017Abstracts%20%282490%29.jpg","2017Abstracts%20%282491%29.jpg","2017Abstracts%20%282492%29.jpg","2017Abstracts%20%282493%29.jpg","2017Abstracts%20%282494%29.jpg","2017Abstracts%20%282495%29.jpg","2017Abstracts%20%282496%29.jpg","2017Abstracts%20%282497%29.jpg","2017Abstracts%20%282498%29.jpg","2017Abstracts%20%282499%29.jpg","2017Abstracts%20%2825%29.jpg","2017Abstracts%20%28250%29.jpg","2017Abstracts%20%282500%29.jpg","2017Abstracts%20%282501%29.jpg","2017Abstracts%20%282502%29.jpg","2017Abstracts%20%282503%29.jpg","2017Abstracts%20%282504%29.jpg","2017Abstracts%20%282505%29.jpg","2017Abstracts%20%282506%29.jpg","2017Abstracts%20%282507%29.jpg","2017Abstracts%20%282508%29.jpg","2017Abstracts%20%282509%29.jpg","2017Abstracts%20%28251%29.jpg","2017Abstracts%20%282510%29.jpg","2017Abstracts%20%282511%29.jpg","2017Abstracts%20%282512%29.jpg","2017Abstracts%20%282513%29.jpg","2017Abstracts%20%282514%29.jpg","2017Abstracts%20%282515%29.jpg","2017Abstracts%20%282516%29.jpg","2017Abstracts%20%282517%29.jpg","2017Abstracts%20%282518%29.jpg","2017Abstracts%20%282519%29.jpg","2017Abstracts%20%28252%29.jpg","2017Abstracts%20%282520%29.jpg","2017Abstracts%20%282521%29.jpg","2017Abstracts%20%282522%29.jpg","2017Abstracts%20%282523%29.jpg","2017Abstracts%20%282524%29.jpg","2017Abstracts%20%282525%29.jpg","2017Abstracts%20%282526%29.jpg","2017Abstracts%20%282527%29.jpg","2017Abstracts%20%282528%29.jpg","2017Abstracts%20%282529%29.jpg","2017Abstracts%20%28253%29.jpg","2017Abstracts%20%282530%29.jpg","2017Abstracts%20%282531%29.jpg","2017Abstracts%20%282532%29.jpg","2017Abstracts%20%282533%29.jpg","2017Abstracts%20%282534%29.jpg","2017Abstracts%20%282535%29.jpg","2017Abstracts%20%282536%29.jpg","2017Abstracts%20%282537%29.jpg","2017Abstracts%20%282538%29.jpg","2017Abstracts%20%282539%29.jpg","2017Abstracts%20%28254%29.jpg","2017Abstracts%20%282540%29.jpg","2017Abstracts%20%282541%29.jpg","2017Abstracts%20%282542%29.jpg","2017Abstracts%20%282543%29.jpg","2017Abstracts%20%282544%29.jpg","2017Abstracts%20%282545%29.jpg","2017Abstracts%20%282546%29.jpg","2017Abstracts%20%282547%29.jpg","2017Abstracts%20%282548%29.jpg","2017Abstracts%20%282549%29.jpg","2017Abstracts%20%28255%29.jpg","2017Abstracts%20%282550%29.jpg","2017Abstracts%20%282551%29.jpg","2017Abstracts%20%282552%29.jpg","2017Abstracts%20%282553%29.jpg","2017Abstracts%20%282554%29.jpg","2017Abstracts%20%282555%29.jpg","2017Abstracts%20%282556%29.jpg","2017Abstracts%20%282557%29.jpg","2017Abstracts%20%282558%29.jpg","2017Abstracts%20%282559%29.jpg","2017Abstracts%20%28256%29.jpg","2017Abstracts%20%282560%29.jpg","2017Abstracts%20%282561%29.jpg","2017Abstracts%20%282562%29.jpg","2017Abstracts%20%282563%29.jpg","2017Abstracts%20%282564%29.jpg","2017Abstracts%20%282565%29.jpg","2017Abstracts%20%282566%29.jpg","2017Abstracts%20%282567%29.jpg","2017Abstracts%20%282568%29.jpg","2017Abstracts%20%282569%29.jpg","2017Abstracts%20%28257%29.jpg","2017Abstracts%20%282570%29.jpg","2017Abstracts%20%282571%29.jpg","2017Abstracts%20%282572%29.jpg","2017Abstracts%20%282573%29.jpg","2017Abstracts%20%282574%29.jpg","2017Abstracts%20%282575%29.jpg","2017Abstracts%20%282576%29.jpg","2017Abstracts%20%282577%29.jpg","2017Abstracts%20%282578%29.jpg","2017Abstracts%20%282579%29.jpg","2017Abstracts%20%28258%29.jpg","2017Abstracts%20%282580%29.jpg","2017Abstracts%20%282581%29.jpg","2017Abstracts%20%282582%29.jpg","2017Abstracts%20%282583%29.jpg","2017Abstracts%20%282584%29.jpg","2017Abstracts%20%282585%29.jpg","2017Abstracts%20%282586%29.jpg","2017Abstracts%20%282587%29.jpg","2017Abstracts%20%282588%29.jpg","2017Abstracts%20%282589%29.jpg","2017Abstracts%20%28259%29.jpg","2017Abstracts%20%282590%29.jpg","2017Abstracts%20%282591%29.jpg","2017Abstracts%20%282592%29.jpg","2017Abstracts%20%282593%29.jpg","2017Abstracts%20%282594%29.jpg","2017Abstracts%20%282595%29.jpg","2017Abstracts%20%282596%29.jpg","2017Abstracts%20%282597%29.jpg","2017Abstracts%20%282598%29.jpg","2017Abstracts%20%282599%29.jpg","2017Abstracts%20%2826%29.jpg","2017Abstracts%20%28260%29.jpg","2017Abstracts%20%282600%29.jpg","2017Abstracts%20%282601%29.jpg","2017Abstracts%20%282602%29.jpg","2017Abstracts%20%282603%29.jpg","2017Abstracts%20%282604%29.jpg","2017Abstracts%20%282605%29.jpg","2017Abstracts%20%282606%29.jpg","2017Abstracts%20%282607%29.jpg","2017Abstracts%20%282608%29.jpg","2017Abstracts%20%282609%29.jpg","2017Abstracts%20%28261%29.jpg","2017Abstracts%20%282610%29.jpg","2017Abstracts%20%282611%29.jpg","2017Abstracts%20%282612%29.jpg","2017Abstracts%20%282613%29.jpg","2017Abstracts%20%282614%29.jpg","2017Abstracts%20%282615%29.jpg","2017Abstracts%20%282616%29.jpg","2017Abstracts%20%282617%29.jpg","2017Abstracts%20%282618%29.jpg","2017Abstracts%20%282619%29.jpg","2017Abstracts%20%28262%29.jpg","2017Abstracts%20%282620%29.jpg","2017Abstracts%20%282621%29.jpg","2017Abstracts%20%282622%29.jpg","2017Abstracts%20%282623%29.jpg","2017Abstracts%20%282624%29.jpg","2017Abstracts%20%282625%29.jpg","2017Abstracts%20%282626%29.jpg","2017Abstracts%20%282627%29.jpg","2017Abstracts%20%282628%29.jpg","2017Abstracts%20%282629%29.jpg","2017Abstracts%20%28263%29.jpg","2017Abstracts%20%282630%29.jpg","2017Abstracts%20%282631%29.jpg","2017Abstracts%20%282632%29.jpg","2017Abstracts%20%282633%29.jpg","2017Abstracts%20%282634%29.jpg","2017Abstracts%20%282635%29.jpg","2017Abstracts%20%282636%29.jpg","2017Abstracts%20%282637%29.jpg","2017Abstracts%20%282638%29.jpg","2017Abstracts%20%282639%29.jpg","2017Abstracts%20%28264%29.jpg","2017Abstracts%20%282640%29.jpg","2017Abstracts%20%282641%29.jpg","2017Abstracts%20%282642%29.jpg","2017Abstracts%20%282643%29.jpg","2017Abstracts%20%282644%29.jpg","2017Abstracts%20%282645%29.jpg","2017Abstracts%20%282646%29.jpg","2017Abstracts%20%282647%29.jpg","2017Abstracts%20%282648%29.jpg","2017Abstracts%20%282649%29.jpg","2017Abstracts%20%28265%29.jpg","2017Abstracts%20%282650%29.jpg","2017Abstracts%20%282651%29.jpg","2017Abstracts%20%282652%29.jpg","2017Abstracts%20%282653%29.jpg","2017Abstracts%20%282654%29.jpg","2017Abstracts%20%282655%29.jpg","2017Abstracts%20%282656%29.jpg","2017Abstracts%20%282657%29.jpg","2017Abstracts%20%282658%29.jpg","2017Abstracts%20%282659%29.jpg","2017Abstracts%20%28266%29.jpg","2017Abstracts%20%282660%29.jpg","2017Abstracts%20%282661%29.jpg","2017Abstracts%20%282662%29.jpg","2017Abstracts%20%282663%29.jpg","2017Abstracts%20%282664%29.jpg","2017Abstracts%20%282665%29.jpg","2017Abstracts%20%282666%29.jpg","2017Abstracts%20%282667%29.jpg","2017Abstracts%20%282668%29.jpg","2017Abstracts%20%282669%29.jpg","2017Abstracts%20%28267%29.jpg","2017Abstracts%20%282670%29.jpg","2017Abstracts%20%282671%29.jpg","2017Abstracts%20%282672%29.jpg","2017Abstracts%20%282673%29.jpg","2017Abstracts%20%282674%29.jpg","2017Abstracts%20%282675%29.jpg","2017Abstracts%20%282676%29.jpg","2017Abstracts%20%282677%29.jpg","2017Abstracts%20%282678%29.jpg","2017Abstracts%20%282679%29.jpg","2017Abstracts%20%28268%29.jpg","2017Abstracts%20%282680%29.jpg","2017Abstracts%20%282681%29.jpg","2017Abstracts%20%282682%29.jpg","2017Abstracts%20%282683%29.jpg","2017Abstracts%20%282684%29.jpg","2017Abstracts%20%282685%29.jpg","2017Abstracts%20%282686%29.jpg","2017Abstracts%20%282687%29.jpg","2017Abstracts%20%282688%29.jpg","2017Abstracts%20%282689%29.jpg","2017Abstracts%20%28269%29.jpg","2017Abstracts%20%282690%29.jpg","2017Abstracts%20%282691%29.jpg","2017Abstracts%20%282692%29.jpg","2017Abstracts%20%282693%29.jpg","2017Abstracts%20%282694%29.jpg","2017Abstracts%20%282695%29.jpg","2017Abstracts%20%282696%29.jpg","2017Abstracts%20%282697%29.jpg","2017Abstracts%20%282698%29.jpg","2017Abstracts%20%282699%29.jpg","2017Abstracts%20%2827%29.jpg","2017Abstracts%20%28270%29.jpg","2017Abstracts%20%282700%29.jpg","2017Abstracts%20%282701%29.jpg","2017Abstracts%20%282702%29.jpg","2017Abstracts%20%282703%29.jpg","2017Abstracts%20%282704%29.jpg","2017Abstracts%20%282705%29.jpg","2017Abstracts%20%282706%29.jpg","2017Abstracts%20%282707%29.jpg","2017Abstracts%20%282708%29.jpg","2017Abstracts%20%282709%29.jpg","2017Abstracts%20%28271%29.jpg","2017Abstracts%20%282710%29.jpg","2017Abstracts%20%282711%29.jpg","2017Abstracts%20%282712%29.jpg","2017Abstracts%20%282713%29.jpg","2017Abstracts%20%282714%29.jpg","2017Abstracts%20%282715%29.jpg","2017Abstracts%20%282716%29.jpg","2017Abstracts%20%282717%29.jpg","2017Abstracts%20%282718%29.jpg","2017Abstracts%20%282719%29.jpg","2017Abstracts%20%28272%29.jpg","2017Abstracts%20%282720%29.jpg","2017Abstracts%20%282721%29.jpg","2017Abstracts%20%282722%29.jpg","2017Abstracts%20%282723%29.jpg","2017Abstracts%20%282724%29.jpg","2017Abstracts%20%282725%29.jpg","2017Abstracts%20%282726%29.jpg","2017Abstracts%20%282727%29.jpg","2017Abstracts%20%282728%29.jpg","2017Abstracts%20%282729%29.jpg","2017Abstracts%20%28273%29.jpg","2017Abstracts%20%282730%29.jpg","2017Abstracts%20%282731%29.jpg","2017Abstracts%20%282732%29.jpg","2017Abstracts%20%282733%29.jpg","2017Abstracts%20%282734%29.jpg","2017Abstracts%20%282735%29.jpg","2017Abstracts%20%282736%29.jpg","2017Abstracts%20%282737%29.jpg","2017Abstracts%20%282738%29.jpg","2017Abstracts%20%282739%29.jpg","2017Abstracts%20%28274%29.jpg","2017Abstracts%20%282740%29.jpg","2017Abstracts%20%282741%29.jpg","2017Abstracts%20%282742%29.jpg","2017Abstracts%20%282743%29.jpg","2017Abstracts%20%282744%29.jpg","2017Abstracts%20%282745%29.jpg","2017Abstracts%20%282746%29.jpg","2017Abstracts%20%282747%29.jpg","2017Abstracts%20%282748%29.jpg","2017Abstracts%20%282749%29.jpg","2017Abstracts%20%28275%29.jpg","2017Abstracts%20%282750%29.jpg","2017Abstracts%20%282751%29.jpg","2017Abstracts%20%282752%29.jpg","2017Abstracts%20%282753%29.jpg","2017Abstracts%20%282754%29.jpg","2017Abstracts%20%282755%29.jpg","2017Abstracts%20%282756%29.jpg","2017Abstracts%20%282757%29.jpg","2017Abstracts%20%282758%29.jpg","2017Abstracts%20%282759%29.jpg","2017Abstracts%20%28276%29.jpg","2017Abstracts%20%282760%29.jpg","2017Abstracts%20%282761%29.jpg","2017Abstracts%20%282762%29.jpg","2017Abstracts%20%282763%29.jpg","2017Abstracts%20%282764%29.jpg","2017Abstracts%20%282765%29.jpg","2017Abstracts%20%282766%29.jpg","2017Abstracts%20%282767%29.jpg","2017Abstracts%20%282768%29.jpg","2017Abstracts%20%282769%29.jpg","2017Abstracts%20%28277%29.jpg","2017Abstracts%20%282770%29.jpg","2017Abstracts%20%282771%29.jpg","2017Abstracts%20%282772%29.jpg","2017Abstracts%20%282773%29.jpg","2017Abstracts%20%282774%29.jpg","2017Abstracts%20%282775%29.jpg","2017Abstracts%20%282776%29.jpg","2017Abstracts%20%282777%29.jpg","2017Abstracts%20%282778%29.jpg","2017Abstracts%20%282779%29.jpg","2017Abstracts%20%28278%29.jpg","2017Abstracts%20%282780%29.jpg","2017Abstracts%20??    ??                    ??             P??     ?            ??      ?     ??             84%29.jpg","2017Abstracts%20%282785%29.jpg","2017Abstracts%20%282786%29.jpg","2017Abstracts%20%282787%29.jpg","2017Abstracts%20%282788%29.jpg","2017Abstracts%20%282789%29.jpg","2017Abstracts%20%28279%29.jpg","2017Abstracts%20%282790%29.jpg","2017Abstracts%20%282791%29.jpg","2017Abstracts%20%282792%29.jpg","2017Abstracts%20%282793%29.jpg","2017Abstracts%20%282794%29.jpg","2017Abstracts%20%282795%29.jpg","2017Abstracts%20%282796%29.jpg","2017Abstracts%20%282797%29.jpg","2017Abstracts%20%282798%29.jpg","2017Abstracts%20%282799%29.jpg","2017Abstracts%20%2828%29.jpg","2017Abstracts%20%28280%29.jpg","2017Abstracts%20%282800%29.jpg","2017Abstracts%20%282801%29.jpg","2017Abstracts%20%282802%29.jpg","2017Abstracts%20%282803%29.jpg","2017Abstracts%20%282804%29.jpg","2017Abstracts%20%282805%29.jpg","2017Abstracts%20%282806%29.jpg","2017Abstracts%20%282807%29.jpg","2017Abstracts%20%282808%29.jpg","2017Abstracts%20%282809%29.jpg","2017Abstracts%20%28281%29.jpg","2017Abstracts%20%282810%29.jpg","2017Abstracts%20%282811%29.jpg","2017Abstracts%20%282812%29.jpg","2017Abstracts%20%282813%29.jpg","2017Abstracts%20%282814%29.jpg","2017Abstracts%20%282815%29.jpg","2017Abstracts%20%282816%29.jpg","2017Abstracts%20%282817%29.jpg","2017Abstracts%20%282818%29.jpg","2017Abstracts%20%282819%29.jpg","2017Abstracts%20%28282%29.jpg","2017Abstracts%20%282820%29.jpg","2017Abstracts%20%282821%29.jpg","2017Abstracts%20%282822%29.jpg","2017Abstracts%20%282823%29.jpg","2017Abstracts%20%282824%29.jpg","2017Abstracts%20%282825%29.jpg","2017Abstracts%20%282826%29.jpg","2017Abstracts%20%282827%29.jpg","2017Abstracts%20%282828%29.jpg","2017Abstracts%20%282829%29.jpg","2017Abstracts%20%28283%29.jpg","2017Abstracts%20%282830%29.jpg","2017Abstracts%20%282831%29.jpg","2017Abstracts%20%282832%29.jpg","2017Abstracts%20%282833%29.jpg","2017Abstracts%20%282834%29.jpg","2017Abstracts%20%282835%29.jpg","2017Abstracts%20%282836%29.jpg","2017Abstracts%20%282837%29.jpg","2017Abstracts%20%282838%29.jpg","2017Abstracts%20%282839%29.jpg","2017Abstracts%20%28284%29.jpg","2017Abstracts%20%282840%29.jpg","2017Abstracts%20%282841%29.jpg","2017Abstracts%20%282842%29.jpg","2017Abstracts%20%282843%29.jpg","2017Abstracts%20%282844%29.jpg","2017Abstracts%20%282845%29.jpg","2017Abstracts%20%282846%29.jpg","2017Abstracts%20%282847%29.jpg","2017Abstracts%20%282848%29.jpg","2017Abstracts%20%282849%29.jpg","2017Abstracts%20%28285%29.jpg","2017Abstracts%20%282850%29.jpg","2017Abstracts%20%282851%29.jpg","2017Abstracts%20%282852%29.jpg","2017Abstracts%20%282853%29.jpg","2017Abstracts%20%282854%29.jpg","2017Abstracts%20%282855%29.jpg","2017Abstracts%20%282856%29.jpg","2017Abstracts%20%282857%29.jpg","2017Abstracts%20%282858%29.jpg","2017Abstracts%20%282859%29.jpg","2017Abstracts%20%28286%29.jpg","2017Abstracts%20%282860%29.jpg","2017Abstracts%20%282861%29.jpg","2017Abstracts%20%282862%29.jpg","2017Abstracts%20%282863%29.jpg","2017Abstracts%20%282864%29.jpg","2017Abstracts%20%282865%29.jpg","2017Abstracts%20%282866%29.jpg","2017Abstracts%20%282867%29.jpg","2017Abstracts%20%282868%29.jpg","2017Abstracts%20%282869%29.jpg","2017Abstracts%20%28287%29.jpg","2017Abstracts%20%282870%29.jpg","2017Abstracts%20%282871%29.jpg","2017Abstracts%20%282872%29.jpg","2017Abstracts%20%282873%29.jpg","2017Abstracts%20%282874%29.jpg","2017Abstracts%20%282875%29.jpg","2017Abstracts%20%282876%29.jpg","2017Abstracts%20%282877%29.jpg","2017Abstracts%20%282878%29.jpg","2017Abstracts%20%282879%29.jpg","2017Abstracts%20%28288%29.jpg","2017Abstracts%20%282880%29.jpg","2017Abstracts%20%282881%29.jpg","2017Abstracts%20%282882%29.jpg","2017Abstracts%20%282883%29.jpg","2017Abstracts%20%282884%29.jpg","2017Abstracts%20%282885%29.jpg","2017Abstracts%20%282886%29.jpg","2017Abstracts%20%282887%29.jpg","2017Abstracts%20%282888%29.jpg","2017Abstracts%20%282889%29.jpg","2017Abstracts%20%28289%29.jpg","2017Abstracts%20%282890%29.jpg","2017Abstracts%20%282891%29.jpg","2017Abstracts%20%282892%29.jpg","2017Abstracts%20%282893%29.jpg","2017Abstracts%20%282894%29.jpg","2017Abstracts%20%282895%29.jpg","2017Abstracts%20%282896%29.jpg","2017Abstracts%20%282897%29.jpg","2017Abstracts%20%282898%29.jpg","2017Abstracts%20%282899%29.jpg","2017Abstracts%20%2829%29.jpg","2017Abstracts%20%28290%29.jpg","2017Abstracts%20%282900%29.jpg","2017Abstracts%20%282901%29.jpg","2017Abstracts%20%282902%29.jpg","2017Abstracts%20%282903%29.jpg","2017Abstracts%20%282904%29.jpg","2017Abstracts%20%282905%29.jpg","2017Abstracts%20%282906%29.jpg","2017Abstracts%20%282907%29.jpg","2017Abstracts%20%282908%29.jpg","2017Abstracts%20%282909%29.jpg","2017Abstracts%20%28291%29.jpg","2017Abstracts%20%282910%29.jpg","2017Abstracts%20%282911%29.jpg","2017Abstracts%20%282912%29.jpg","2017Abstracts%20%282913%29.jpg","2017Abstracts%20%282914%29.jpg","2017Abstracts%20%282915%29.jpg","2017Abstracts%20%282916%29.jpg","2017Abstracts%20%282917%29.jpg","2017Abstracts%20%282918%29.jpg","2017Abstracts%20%282919%29.jpg","2017Abstracts%20%28292%29.jpg","2017Abstracts%20%282920%29.jpg","2017Abstracts%20%282921%29.jpg","2017Abstracts%20%282922%29.jpg","2017Abstracts%20%282923%29.jpg","2017Abstracts%20%282924%29.jpg","2017Abstracts%20%282925%29.jpg","2017Abstracts%20%282926%29.jpg","2017Abstracts%20%282927%29.jpg","2017Abstracts%20%282928%29.jpg","2017Abstracts%20%282929%29.jpg","2017Abstracts%20%28293%29.jpg","2017Abstracts%20%282930%29.jpg","2017Abstracts%20%282931%29.jpg","2017Abstracts%20%282932%29.jpg","2017Abstracts%20%282933%29.jpg","2017Abstracts%20%282934%29.jpg","2017Abstracts%20%282935%29.jpg","2017Abstracts%20%282936%29.jpg","2017Abstracts%20%282937%29.jpg","2017Abstracts%20%282938%29.jpg","2017Abstracts%20%282939%29.jpg","2017Abstracts%20%28294%29.jpg","2017Abstracts%20%282940%29.jpg","2017Abstracts%20%282941%29.jpg","2017Abstracts%20%282942%29.jpg","2017Abstracts%20%282943%29.jpg","2017Abstracts%20%282944%29.jpg","2017Abstracts%20%282945%29.jpg","2017Abstracts%20%282946%29.jpg","2017Abstracts%20%282947%29.jpg","2017Abstracts%20%282948%29.jpg","2017Abstracts%20%282949%29.jpg","2017Abstracts%20%28295%29.jpg","2017Abstracts%20%282950%29.jpg","2017Abstracts%20%282951%29.jpg","2017Abstracts%20%282952%29.j? ?     ? ?                     ?z?             Px?     ? ?            ?    ?                    Pm?             p??     8j            ?     ?     ?                ??     ???             @??      ?     @??             bstracts%20%28296%29.jpg","2017Abstracts%20%282960%29.jpg","2017Abstracts%20%282961%29.jpg","2017Abstracts%20%282962%29.jpg","2017Abstracts%20%282963%29.jpg","2017Abstracts%20%282964%29.jpg","2017Abstracts%20%282965%29.jpg","2017Abstracts%20%282966%29.jpg","2017Abstracts%20%282967%29.jpg","2017Abstracts%20%282968%29.jpg","2017Abstracts%20%282969%29.jpg","2017Abstracts%20%28297%29.jpg","2017Abstracts%20%282970%29.jpg","2017Abstracts%20%282971%29.jpg","2017Abstracts%20%282972%29.jpg","2017Abstracts%20%282973%29.jpg","2017Abstracts%20%282974%29.jpg","2017Abstracts%20%282975%29.jpg","2017Abstracts%20%282976%29.jpg","2017Abstracts%20%282977%29.jpg","2017Abstracts%20%282978%29.jpg","2017Abstracts%20%282979%29.jpg","2017Abstracts%20%28298%29.jpg","2017Abstracts%20%282980%29.jpg","2017Abstracts%20%282981%29.jpg","2017Abstracts%20%282982%29.jpg","2017Abstracts%20%282983%29.jpg","2017Abstracts%20%282984%29.jpg","2017Abstracts%20%282985%29.jpg","2017Abstracts%20%282986%29.jpg","2017Abstracts%20%282987%29.jpg","2017Abstracts%20%282988%29.jpg","2017Abstracts%20%282989%29.jpg","2017Abstracts%20%28299%29.jpg","2017Abstracts%20%282990%29.jpg","2017Abstracts%20%282991%29.jpg","2017Abstracts%20%282992%29.jpg","2017Abstracts%20%282993%29.jpg","2017Abstracts%20%282994%29.jpg","2017Abstracts%20%282995%29.jpg","2017Abstracts%20%282996%29.jpg","2017Abstracts%20%282997%29.jpg","2017Abstracts%20%282998%29.jpg","2017Abstracts%20%282999%29.jpg","2017Abstracts%20%283%29.jpg","2017Abstracts%20%2830%29.jpg","2017Abstracts%20%28300%29.jpg","2017Abstracts%20%283000%29.jpg","2017Abstracts%20%283001%29.jpg","2017Abstracts%20%283002%29.jpg","2017Abstracts%20%283003%29.jpg","2017Abstracts%20%283004%29.jpg","2017Abstracts%20%283005%29.jpg","2017Abstracts%20%283006%29.jpg","2017Abstracts%20%283007%29.jpg","2017Abstracts%20%283008%29.jpg","2017Abstracts%20%283009%29.jpg","2017Abstracts%20%28301%29.jpg","2017Abstracts%20%283010%29.jpg","2017Abstracts%20%283011%29.jpg","2017Abstracts%20%283012%29.jpg","2017Abstracts%20%283013%29.jpg","2017Abstracts%20%283014%29.jpg","2017Abstracts%20%283015%29.jpg","2017Abstracts%20%283016%29.jpg","2017Abstracts%20%283017%29.jpg","2017Abstracts%20%283018%29.jpg","2017Abstracts%20%283019%29.jpg","2017Abstracts%20%28302%29.jpg","2017Abstracts%20%283020%29.jpg","2017Abstracts%20%283021%29.jpg","2017Abstracts%20%283022%29.jpg","2017Abstracts%20%283023%29.jpg","2017Abstracts%20%283024%29.jpg","2017Abstracts%20%283025%29.jpg","2017Abstracts%20%283026%29.jpg","2017Abstracts%20%283027%29.jpg","2017Abstracts%20%283028%29.jpg","2017Abstracts%20%283029%29.jpg","2017Abstracts%20%28303%29.jpg","2017Abstracts%20%283030%29.jpg","2017Abstracts%20%283031%29.jpg","2017Abstracts%20%283032%29.jpg","2017Abstracts%20%283033%29.jpg","2017Abstracts%20%283034%29.jpg","2017Abstracts%20%283035%29.jpg","2017Abstracts%20%283036%29.jpg","2017Abstracts%20%283037%29.jpg","2017Abstracts%20%283038%29.jpg","2017Abstracts%20%283039%29.jpg","2017Abstracts%20%28304%29.jpg","2017Abstracts%20%283040%29.jpg","2017Abstracts%20%283041%29.jpg","2017Abstracts%20%283042%29.jpg","2017Abstracts%20%283043%29.jpg","2017Abstracts%20%283044%29.jpg","2017Abstracts%20%283045%29.jpg","2017Abstracts%20%283046%29.jpg","2017Abstracts%20%283047%29.jpg","2017Abstracts%20%283048%29.jpg","2017Abstracts%20%283049%29.jpg","2017Abstracts%20%28305%29.jpg","2017Abstracts%20%283050%29.jpg","2017Abstracts%20%283051%29.jpg","2017Abstracts%20%283052%29.jpg","2017Abstracts%20%283053%29.jpg","2017Abstracts%20%283058%29.jpg","2017Abstracts%20%283059%29.jpg","2017Abstracts%20%28306%29.jpg","2017Abstracts%20%283060%29.jpg","2017Abstracts%20%283061%29.jpg","2017Abstracts%20%283062%29.jpg","2017Abstracts%20%283063%29.jpg","2017Abstracts%20%283064%29.jpg","2017Abstracts%20%283069%29.jpg","2017Abstracts%20%28307%29.jpg","2017Abstracts%20%283070%29.jpg","2017Abstracts%20%283071%29.jpg","2017Abstracts%20%283072%29.jpg","2017Abstracts%20%283073%29.jpg","2017Abstracts%20%283074%29.jpg","2017Abstracts%20%283075%29.jpg","2017Abstracts%20%283076%29.jpg","2017Abstracts%20%283077%29.jpg","2017Abstracts%20%283078%29.jpg","2017Abstracts%20%283079%29.jpg","2017Abstracts%20%28308%29.jpg","2017Abstracts%20%283080%29.jpg","2017Abstracts%20%283081%29.jpg","2017Abstracts%20%283082%29.jpg","2017Abstracts%20%283083%29.jpg","2017Abstracts%20%283084%29.jpg","2017Abstracts%20%283085%29.jpg","2017Abstracts%20%283086%29.jpg","2017Abstracts%20%283087%29.jpg","2017Abstracts%20%283088%29.jpg","2017Abstracts%20%283089%29.jpg","2017Abstracts%20%28309%29.jpg","2017Abstracts%20%283090%29.jpg","2017Abstracts%20%283091%29.jpg","2017Abstracts%20%283092%29.jpg","2017Abstracts%20%283093%29.jpg","2017Abstracts%20%283094%29.jpg","2017Abstracts%20%283095%29.jpg","2017Abstracts%20%283096%29.jpg","2017Abstracts%20%283097%29.jpg","2017Abstracts%20%283098%29.jpg","2017Abstracts%20%283099%29.jpg","2017Abstracts%20%2831%29.jpg","2017Abstracts%20%28310%29.jpg","2017Abstracts%20%283100%29.jpg","2017Abstracts%20%283101%29.jpg","2017Abstracts%20%283102%29.jpg","2017Abstracts%20%283103%29.jpg","2017Abstracts%20%283104%29.jpg","2017Abstracts%20%283105%29.jpg","2017Abstracts%20%283106%29.jpg","2017Abstracts%20%283107%29.jpg","2017Abstracts%20%283108%29.jpg","2017Abstracts%20%283109%29.jpg","2017Abstracts%20%28311%29.jpg","2017Abstracts%20%283110%29.jpg","2017Abstracts%20%283111%29.jpg","2017Abstracts%20%283112%29.jpg","2017Abstracts%20%283113%29.jpg","2017Abstracts%20%283114%29.jpg","2017Abstracts%20%283115%29.jpg","2017Abstracts%20%283116%29.jpg","2017Abstracts%20%283117%29.jpg","2017Abstracts%20%283118%29.jpg","2017Abstracts%20%283119%29.jpg","2017Abstracts%20%28312%29.jpg","2017Abstracts%20%283120%29.jpg","2017Abstracts%20%283121%29.jpg","2017Abstracts%20%283122%29.jpg","2017Abstracts%20%283123%29.jpg","2017Abstracts%20%283124%29.jpg","2017Abstracts%20%283125%29.jpg","2017Abstracts%20%283126%29.jpg","2017Abstracts%20%283127%29.jpg","2017Abstracts%20%283128%29.jpg","2017Abstracts%20%283129%29.jpg","2017Abstracts%20%28313%29.jpg","2017Abstracts%20%283130%29.jpg","2017Abstracts%20%283131%29.jpg","2017Abstracts%20%283132%29.jpg","2017Abstracts%20%283133%29.jpg","2017Abstracts%20%283134%29.jpg","2017Abstracts%20%283135%29.jpg","2017Abstracts%20%283136%29.jpg","2017Abstracts%20%283137%29.jpg","2017Abstracts%20%283138%29.jpg","2017Abstracts%20%283139%29.jpg","2017Abstracts%20%28314%29.jpg","2017Abstracts%20%283140%29.jpg","2017Abstracts%20%283141%29.jpg","2017Abstracts%20%283142%29.jpg","2017Abstracts%20%283143%29.jpg","2017Abstracts%20%283144%29.jpg","2017Abstracts%20%283145%29.jpg","2017Abstracts%20%283146%29.jpg","2017Abstracts%20%283147%29.jpg","2017Abstracts%20%283148%29.jpg","2017Abstracts%20%283149%29.jpg","2017Abstracts%20%28315%29.jpg","2017Abstracts%20%283150%29.jpg","2017Abstracts%20%283151%29.jpg","2017Abstracts%20%283152%29.jpg","2017Abstracts%20%283153%29.jpg","2017Abstracts%20%283154%29.jpg","2017Abstracts%20%283155%29.jpg","2017Abstracts%20%283156%29.jpg","2017Abstracts%20%283157%29.jpg","2017Abstracts%20%283158%29.jpg","2017Abstracts%20%283159%29.jpg","2017Abstracts%20%28316%29.jpg","2017Abstracts%20%283160%29.jpg","2017Abstracts%20%283161%29.jpg","2017Abstracts%20%283162%29.jpg","2017Abstracts%20%283163%29.jpg","2017Abstracts%20%283164%29.jpg","2017Abstracts%20%283165%29.jpg","2017Abstracts%20%283166%29.jpg","2017Abstracts%20%283167%29.jpg","2017Abstracts%20%283168%29.jpg","2017Abstracts%20%283169%29.jpg","2017Abstracts%20%28317%29.jpg","2017Abstracts%20%283170%29.jpg","2017Abstracts%20%283171%29.jpg","2017Abstracts%20%283172%29.jpg","2017Abstracts%20%283173%29.jpg","2017Abstracts%20%283174%29.jpg","2017Abstracts%20%283175%29.jpg","2017Abstracts%20%283176%29.jpg","2017Abstracts%20%283177%29.jpg","2017Abstracts%20%283178%29.jpg","2017Abstracts%20%283179%29.jpg","2017Abstracts%20%28318%29.jpg","2017Abstracts%20%283180%29.jpg","2017Abstracts%20%283181%29.jpg","2017Abstracts%20%283182%29.jpg","2017Abstracts%20%283183%29.jpg","2017Abstracts%20%283184%29.jpg","2017Abstracts%20%283185%29.jpg","2017Abstracts%20%283186%29.jpg","2017Abstracts%20%283187%29.jpg","2017Abstracts%20%283188%29.jpg","2017Abstracts%20%283189%29.jpg","2017Abstracts%20%28319%29.jpg","2017Abstracts%20%283190%29.jpg","2017Abstracts%20%283191%29.jpg","2017Abstracts%20%283192%29.jpg","2017Abstracts%20%283193%29.jpg","2017Abstracts%20%283194%29.jpg","2017Abstracts%20%283195%29.jpg","2017Abstracts%20%283196%29.jpg","2017Abstracts%20%283197%29.jpg","2017Abstracts%20%283198%29.jpg","2017Abstracts%20%283199%29.jpg","2017Abstracts%20%2832%29.jpg","2017Abstracts%20%28320%29.jpg","2017Abstracts%20%283200%29.jpg","2017Abstracts%20%283201%29.jpg","2017Abstracts%20%283202%29.jpg","2017Abstracts%20%283203%29.jpg","2017Abstracts%20%283204%29.jpg","2017Abstracts%20%283205%29.jpg","2017Abstracts%20%283206%29.jpg","2017Abstracts%20%283207%29.jpg","2017Abstracts%20%283208%29.jpg","2017Abstracts%20%283209%29.jpg","2017Abstracts%20%28321%29.jpg","2017Abstracts%20%283210%29.jpg","2017Abstracts%20%283211%29.jpg","2017Abstracts%20%283212%29.jpg","2017Abstracts%20%283213%29.jpg","2017Abstracts%20%283214%29.jpg","2017Abstracts%20%283215%29.jpg","2017Abstracts%20%283216%29.jpg","2017Abstracts%20%283217%29.jpg","2017Abstracts%20%283218%29.jpg","2017Abstracts%20%283219%29.jpg","2017Abstracts%20%28322%29.jpg","2017Abstracts%20%283220%29.jpg","2017Abstracts%20%283221%29.jpg","2017Abstracts%20%283222%29.jpg","2017Abstracts%20%283223%29.jpg","2017Abstracts%20%283224%29.jpg","2017Abstracts%20%283225%29.jpg","2017Abstracts%20%283226%29.jpg","2017Abstracts%20%283227%29.jpg","2017Abstracts%20%283228%29.jpg","2017Abstracts%20%283229%29.jpg","2017Abstracts%20%28323%29.jpg","2017Abstracts%20%283230%29.jpg","2017Abstracts%20%283231%29.jpg","2017Abstracts%20%283232%29.jpg","2017Abstracts%20%283233%29.jpg","2017Abstracts%20%283234%29.jpg","2017Abstracts%20%283235%29.jpg","2017Abstracts%20%283236%29.jpg","2017Abstracts%20%283237%29.jpg","2017Abstracts%20%283238%29.jpg","2017Abstracts%20%283239%29.jpg","2017Abstracts%20%28324%29.jpg","2017Abstracts%20%283240%29.jpg","2017Abstracts%20%283241%29.jpg","2017Abstracts%20%283242%29.jpg","2017Abstracts%20%283243%29.jpg","2017Abstracts%20%283244%29.jpg","2017Abstracts%20%283245%29.jpg","2017Abstracts%20%283246%29.jpg","2017Abstracts%20%283247%29.jpg","2017Abstracts%20%283248%29.jpg","2017Abstracts%20%283249%29.jpg","2017Abstracts%20%28325%29.jpg","2017Abstracts%20%283250%29.jpg","2017Abstracts%20%283251%29.jpg","2017Abstracts%20%283252%29.jpg","2017Abstracts%20%283253%29.jpg","2017Abstracts%20%283254%29.jpg","2017Abstracts%20%283255%29.jpg","2017Abstracts%20%283256%29.jpg","2017Abstracts%20%283257%29.jpg","2017Abstracts%20%283258%29.jpg","2017Abstracts%20%283259%29.jpg","2017Abstracts%20%28326%29.jpg","2017Abstracts%20%283260%29.jpg","2017Abstracts%20%283261%29.jpg","2017Abstracts%20%283262%29.jpg","2017Abstracts%20%283263%29.jpg","2017Abstracts%20%283264%29.jpg","2017Abstracts%20%283265%29.jpg","2017Abstracts%20%283266%29.jpg","2017Abstracts%20%283267%29.jpg","2017Abstracts%20%283268%29.jpg","2017Abstracts%20%283269%29.jpg","2017Abstracts%20%28327%29.jpg","2017Abstracts%20%283270%29.jpg","2017Abstracts%20%283271%29.jpg","2017Abstracts%20%283272%29.jpg","2017Abstracts%20%283273%29.jpg","2017Abstracts%20%283274%29.jpg","2017Abstracts%20%283275%29.jpg","2017Abstracts%20%283276%29.jpg","2017Abstracts%20%283277%29.jpg","2017Abstracts%20%283278%29.jpg","2017Abstracts%20%283279%29.jpg","2017Abstracts%20%28328%29.jpg","2017Abstracts%20%283280%29.jpg","2017Abstracts%20%283281%29.jpg","2017Abstracts%20%283282%29.jpg","2017Abstracts%20%283283%29.jpg","2017Abstracts%20%283284%29.jpg","2017Abstracts%20%283285%29.jpg","2017Abstracts%20%283286%29.jpg","2017Abstracts%20%283287%29.jpg","2017Abstracts%20%283288%29.jpg","2017Abstracts%20%283289%29.jpg","2017Abstracts%20%28329%29.jpg","2017Abstracts%20%283290%29.jpg","2017Abstracts%20%283291%29.jpg","2017Abstracts%20%283292%29.jpg","2017Abstracts%20%283293%29.jpg","2017Abstracts%20%283294%29.jpg","2017Abstracts%20%283295%29.jpg","2017Abstracts%20%283296%29.jpg","2017Abstracts%20%283297%29.jpg","2017Abstracts%20%283298%29.jpg","2017Abstracts%20%283299%29.jpg","2017Abstracts%20%2833%29.jpg","2017Abstracts%20%28330%29.jpg","2017Abstracts%20%283300%29.jpg","2017Abstracts%20%283301%29.jpg","2017Abstracts%20%283302%29.jpg","2017Abstracts%20%283303%29.jpg","2017Abstracts%20%283304%29.jpg","2017Abstracts%20%283305%29.jpg","2017Abstracts%20%283306%29.jpg","2017Abstracts%20%283307%29.jpg","2017Abstracts%20%283308%29.jpg","2017Abstracts%20%283309%29.jpg","2017Abstracts%20%28331%29.jpg","2017Abstracts%20%283310%29.jpg","2017Abstracts%20%283311%29.jpg","2017Abstracts%20%283312%29.jpg","2017Abstracts%20%283313%29.jpg","2017Abstracts%20%283314%29.jpg","2017Abstracts%20%283315%29.jpg","2017Abstracts%20%283316%29.jpg","2017Abstracts%20%283317%29.jpg","2017Abstracts%20%283318%29.jpg","2017Abstracts%20%283319%29.jpg","2017Abstracts%20%28332%29.jpg","2017Abstracts%20%283320%29.jpg","2017Abstracts%20%283321%29.jpg","2017Abstracts%20%283322%29.jpg","2017Abstracts%20%283323%29.jpg","2017Abstracts%20%283324%29.jpg","2017Abstracts%20%283325%29.jpg","2017Abstracts%20%283326%29.jpg","2017Abstracts%20%283327%29.jpg","2017Abstracts%20%283328%29.jpg","2017Abstracts%20%283329%29.jpg","2017Abstracts%20%28333%29.jpg","2017Abstracts%20%283330%29.jpg","2017Abstracts%20%283331%29.jpg","2017Abstracts%20%283332%29.jpg","2017Abstracts%20%283333%29.jpg","2017Abstracts%20%283334%29.jpg","2017Abstracts%20%283335%29.jpg","2017Abstracts%20%283336%29.jpg","2017Abstracts%20%283337%29.jpg","2017Abstracts%20%283338%29.jpg","2017Abstracts%20%283339%29.jpg","2017Abstracts%20%28334%29.jpg","2017Abstracts%20%283340%29.jpg","2017Abstracts%20%283341%29.jpg","2017Abstracts%20%283342%29.jpg","2017Abstracts%20%283343%29.jpg","2017Abstracts%20%283344%29.jpg","2017Abstracts%20%283345%29.jpg","2017Abstracts%20%283346%29.jpg","2017Abstracts%20%283347%29.jpg","2017Abstracts%20%283348%29.jpg","2017Abstracts%20%283349%29.jpg","2017Abstracts%20%28335%29.jpg","2017Abstracts%20%283350%29.jpg","2017Abstracts%20%283351%29.jpg","2017Abstracts%20%283352%29.jpg","2017Abstracts%20%283353%29.jpg","2017Abstracts%20%283354%29.jpg","2017Abstracts%20%283355%29.jpg","2017Abstracts%20%283356%29.jpg","2017Abstracts%20%283357%29.jpg","2017Abstracts%20%283358%29.jpg","2017Abstracts%20%283359%29.jpg","2017Abstracts%20%28336%29.jpg","2017Abstracts%20%283360%29.jpg","2017Abstracts%20%283361%29.jpg","2017Abstracts%20%283362%29.jpg","2017Abstracts%20%283363%29.jpg","2017Abstracts%20%283364%29.jpg","2017Abstracts%20%283365%29.jpg","2017Abstracts%20%283366%29.jpg","2017Abstracts%20%283367%29.jpg","2017Abstracts%20%283368%29.jpg","2017Abstracts%20%283369%29.jpg","2017Abstracts%20%28337%29.jpg","2017Abstracts%20%283370%29.jpg","2017Abstracts%20%283371%29.jpg","2017Abstracts%20%283372%29.jpg","2017Abstracts%20%283373%29.jpg","2017Abstracts%20%283374%29.jpg","2017Abstracts%20%283375%29.jpg","2017Abstracts%20%283376%29.jpg","2017Abstracts%20%283377%29.jpg","2017Abstracts%20%283378%29.jpg","2017Abstracts%20%283379%29.jpg","2017Abstracts%20%28338%29.jpg","2017Abstracts%20%283380%29.jpg","2017Abstracts%20%283381%29.jpg","2017Abstracts%20%283382%29.jpg","2017Abstracts%20%283383%29.jpg","2017Abstracts%20%283384%29.jpg","2017Abstracts%20%283385%29.jpg","2017Abstracts%20%283386%29.jpg","2017Abstracts%20%283387%29.jpg","2017Abstracts%20%283388%29.jpg","2017Abstracts%20%283389%29.jpg","2017Abstracts%20%28339%29.jpg","2017Abstracts%20%283390%29.jpg","2017Abstracts%20%283391%29.jpg","2017Abstracts%20%283392%29.jpg","2017Abstracts%20%283393%29.jpg","2017Abstracts%20%283394%29.jpg","2017Abstracts%20%283395%29.jpg","2017Abstracts%20%283396%29.jpg","2017Abstracts%20%283397%29.jpg","2017Abstracts%20%283398%29.jpg","2017Abstracts%20%283399%29.jpg","2017Abstracts%20%2834%29.jpg","2017Abstracts%20%28340%29.jpg","2017Abstracts%20%283400%29.jpg","2017Abstracts%20%283401%29.jpg","2017Abstracts%20%283402%29.jpg","2017Abstracts%20%283403%29.jpg","2017Abstracts%20%283404%29.jpg","2017Abstracts%20%283405%29.jpg","2017Abstracts%20%283406%29.jpg","2017Abstracts%20%283407%29.jpg","2017Abstracts%20%283408%29.jpg","2017Abstracts%20%283409%29.jpg","2017Abstracts%20%28341%29.jpg","2017Abstracts%20%283410%29.jpg","2017Abstracts%20%283411%29.jpg","2017Abstracts%20%283412%29.jpg","2017Abstracts%20%283413%29.jpg","2017Abstracts%20%283414%29.jpg","2017Abstracts%20%283415%29.jpg","2017Abstracts%20%283416%29.jpg","2017Abstracts%20%283417%29.jpg","2017Abstracts%20%283418%29.jpg","2017Abstracts%20%283419%29.jpg","2017Abstracts%20%28342%29.jpg","2017Abstracts%20%283420%29.jpg","2017Abstracts%20%283421%29.jpg","2017Abstracts%20%283422%29.jpg","2017Abstracts%20%283423%29.jpg","2017Abstracts%20%283424%29.jpg","2017Abstracts%20%283425%29.jpg","2017Abstracts%20%283426%29.jpg","2017Abstracts%20%283427%29.jpg","2017Abstracts%20%283428%29.jpg","2017Abstracts%20%283429%29.jpg","2017Abstracts%20%28343%29.jpg","2017Abstracts%20%283430%29.jpg","2017Abstracts%20%283431%29.jpg","2017Abstracts%20%283432%29.jpg","2017Abstracts%20%283433%29.jpg","2017Abstracts%20%283434%29.jpg","2017Abstracts%20%283435%29.jpg","2017Abstracts%20%283436%29.jpg","2017Abstracts%20%283437%29.jpg","2017Abstracts%20%283438%29.jpg","2017Abstracts%20%283439%29.jpg","2017Abstracts%20%28344%29.jpg","2017Abstracts%20%283440%29.jpg","2017Abstracts%20%283441%29.jpg","2017Abstracts%20%283442%29.jpg","2017Abstracts%20%283443%29.jpg","2017Abstracts%20%283444%29.jpg","2017Abstracts%20%283445%29.jpg","2017Abstracts%20%283446%29.jpg","2017Abstracts%20%283447%29.jpg","2017Abstracts%20%283448%29.jpg","2017Abstracts%20%283449%29.jpg","2017Abstracts%20%28345%29.jpg","2017Abstracts%20%283450%29.jpg","2017Abstracts%20%283451%29.jpg","2017Abstracts%20%283452%29.jpg","2017Abstracts%20%283453%29.jpg","2017Abstracts%20%283454%29.jpg","2017Abstracts%20%283455%29.jpg","2017Abstracts%20%283456%29.jpg","2017Abstracts%20%283457%29.jpg","2017Abstracts%20%283458%29.jpg","2017Abstracts%20%283459%29.jpg","2017Abstracts%20%28346%29.jpg","2017Abstracts%20%283460%29.jpg","2017Abstracts%20%283461%29.jpg","2017Abstracts%20%283462%29.jpg","2017Abstracts%20%283463%29.jpg","2017Abstracts%20%283464%29.jpg","2017Abstracts%20%283465%29.jpg","2017Abstracts%20%283466%29.jpg","2017Abstracts%20%283467%29.jpg","2017Abstracts%20%283468%29.jpg","2017Abstracts%20%283469%29.jpg","2017Abstracts%20%28347%29.jpg","2017Abstracts%20%283470%29.jpg","2017Abstracts%20%283471%29.jpg","2017Abstracts%20%283472%29.jpg","2017Abstracts%20%283473%29.jpg","2017Abstracts%20%283474%29.jpg","2017Abstracts%20%283475%29.jpg","2017Abstracts%20%283476%29.jpg","2017Abstracts%20%283477%29.jpg","2017Abstracts%20%283478%29.jpg","2017Abstracts%20%283479%29.jpg","2017Abstracts%20%28348%29.jpg","2017Abstracts%20%283480%29.jpg","2017Abstracts%20%283481%29.jpg","2017Abstracts%20%283482%29.jpg","2017Abstracts%20%283483%29.jpg","2017Abstracts%20%283484%29.jpg","2017Abstracts%20%283485%29.jpg","2017Abstracts%20%283486%29.jpg","2017Abstracts%20%283487%29.jpg","2017Abstracts%20%283488%29.jpg","2017Abstracts%20%283489%29.jpg","2017Abstracts%20%28349%29.jpg","2017Abstracts%20%283490%29.jpg","2017Abstracts%20%283491%29.jpg","2017Abstracts%20%283492%29.jpg","2017Abstracts%20%283493%29.jpg","2017Abstracts%20%283494%29.jpg","2017Abstracts%20%283495%29.jpg","2017Abstracts%20%283496%29.jpg","2017Abstracts%20%283497%29.jpg","2017Abstracts%20%283498%29.jpg","2017Abstracts%20%283499%29.jpg","2017Abstracts%20%2835%29.jpg","2017Abstracts%20%28350%29.jpg","2017Abstracts%20%283500%29.jpg","2017Abstracts%20%283501%29.jpg","2017Abstracts%20%283502%29.jpg","2017Abstracts%20%283503%29.jpg","2017Abstracts%20%283504%29.jpg","2017Abstracts%20%283505%29.jpg","2017Abstracts%20%283506%29.jpg","2017Abstracts%20%283507%29.jpg","2017Abstracts%20%283508%29.jpg","2017Abstracts%20%283509%29.jpg","2017Abstracts%20%28351%29.jpg","2017Abstracts%20%283510%29.jpg","2017Abstracts%20%283511%29.jpg","2017Abstracts%20%283512%29.jpg","2017Abstracts%20%283513%29.jpg","2017Abstracts%20%283514%29.jpg","2017Abstracts%20%283515%29.jpg","2017Abstracts%20%283516%29.jpg","2017Abstracts%20%283517%29.jpg","2017Abstracts%20%283518%29.jpg","2017Abstracts%20%283519%29.jpg","2017Abstracts%20%28352%29.jpg","2017Abstracts%20%283520%29.jpg","2017Abstracts%20%283521%29.jpg","2017Abstracts%20%283522%29.jpg","2017Abstracts%20%283523%29.jpg","2017Abstracts%20%283524%29.jpg","2017Abstracts%20%283525%29.jpg","2017Abstracts%20%283526%29.jpg","2017Abstracts%20%283527%29.jpg","2017Abstracts%20%283528%29.jpg","2017Abstracts%20%283529%29.jpg","2017Abstracts%20%28353%29.jpg","2017Abstracts%20%283530%29.jpg","2017Abstracts%20%283531%29.jpg","2017Abstracts%20%283532%29.jpg","2017Abstracts%20%283533%29.jpg","2017Abstracts%20%283534%29.jpg","2017Abstracts%20%283535%29.jpg","2017Abstracts%20%283536%29.jpg","2017Abstracts%20%283537%29.jpg","2017Abstracts%20%283538%29.jpg","2017Abstracts%20%283539%29.jpg","2017Abstracts%20%28354%29.jpg","2017Abstracts%20%283540%29.jpg","2017Abstracts%20%283541%29.jpg","2017Abstracts%20%283542%29.jpg","2017Abstracts%20%283543%29.jpg","2017Abstracts%20%283544%29.jpg","2017Abstracts%20%283545%29.jpg","2017Abstracts%20%283546%29.jpg","2017Abstracts%20%283547%29.jpg","2017Abstracts%20%283548%29.jpg","2017Abstracts%20%283549%29.jpg","2017Abstracts%20%28355%29.jpg","2017Abstracts%20%283550%29.jpg","2017Abstracts%20%283551%29.jpg","2017Abstracts%20%283552%29.jpg","2017Abstracts%20%283553%29.jpg","2017Abstracts%20%283554%29.jpg","2017Abstracts%20%283555%29.jpg","2017Abstracts%20%283556%29.jpg","2017Abstracts%20%283557%29.jpg","2017Abstracts%20%283558%29.jpg","2017Abstracts%20%283559%29.jpg","2017Abstracts%20%28356%29.jpg","2017Abstracts%20%283560%29.jpg","2017Abstracts%20%283561%29.jpg","2017Abstracts%20%283562%29.jpg","2017Abstracts%20%283563%29.jpg","2017Abstracts%20%283564%29.jpg","2017Abstracts%20%283565%29.jpg","2017Abstracts%20%283566%29.jpg","2017Abstracts%20%283567%29.jpg","2017Abstracts%20%283568%29.jpg","2017Abstracts%20%283569%29.jpg","2017Abstracts%20%28357%29.jpg","2017Abstracts%20%283570%29.jpg","2017Abstracts%20%283571%29.jpg","2017Abstracts%20%283572%29.jpg","2017Abstracts%20%283573%29.jpg","2017Abstracts%20%283574%29.jpg","2017Abstracts%20%283575%29.jpg","2017Abstracts%20%283576%29.jpg","2017Abstracts%20%283577%29.jpg","2017Abstracts%20%283578%29.jpg","2017Abstracts%20%283579%29.jpg","2017Abstracts%20%28358%29.jpg","2017Abstracts%20%283580%29.jpg","2017Abstracts%20%283581%29.jpg","2017Abstracts%20%283582%29.jpg","2017Abstracts%20%283583%29.jpg","2017Abstracts%20%283584%29.jpg","2017Abstracts%20%283585%29.jpg","2017Abstracts%20%283586%29.jpg","2017Abstracts%20%283587%29.jpg","2017Abstracts%20%283588%29.jpg","2017Abstracts%20%283589%29.jpg","2017Abstracts%20%28359%29.jpg","2017Abstracts%20%283590%29.jpg","2017Abstracts%20%283591%29.jpg","2017Abstracts%20%283592%29.jpg","2017Abstracts%20%283593%29.jpg","2017Abstracts%20%283594%29.jpg","2017Abstracts%20%283595%29.jpg","2017Abstracts%20%283596%29.jpg","2017Abstracts%20%283597%29.jpg","2017Abstracts%20%283598%29.jpg","2017Abstracts%20%283599%29.jpg","2017Abstracts%20%2836%29.jpg","2017Abstracts%20%28360%29.jpg","2017Abstracts%20%283600%29.jpg","2017Abstracts%20%283601%29.jpg","2017Abstracts%20%283602%29.jpg","2017Abstracts%20%283603%29.jpg","2017Abstracts%20%283604%29.jpg","2017Abstracts%20%283605%29.jpg","2017Abstracts%20%283606%29.jpg","2017Abstracts%20%283607%29.jpg","2017Abstracts%20%283608%29.jpg","2017Abstracts%20%283609%29.jpg","2017Abstracts%20%28361%29.jpg","2017Abstracts%20%283610%29.jpg","2017Abstracts%20%283611%29.jpg","2017Abstracts%20%283612%29.jpg","2017Abstracts%20%283613%29.jpg","2017Abstracts%20%283614%29.jpg","2017Abstracts%20%283615%29.jpg","2017Abstracts%20%283616%29.jpg","2017Abstracts%20%283617%29.jpg","2017Abstracts%20%283618%29.jpg","2017Abstracts%20%283619%29.jpg","2017Abstracts%20%28362%29.jpg","2017Abstracts%20%283620%29.jpg","2017Abstracts%20%283621%29.jpg","2017Abstracts%20%283622%29.jpg","2017Abstracts%20%283623%29.jpg","2017Abstracts%20%283624%29.jpg","2017Abstracts%20%283625%29.jpg","2017Abstracts%20%283626%29.jpg","2017Abstracts%20%283627%29.jpg","2017Abstracts%20%283628%29.jpg","2017Abstracts%20%283629%29.jpg","2017Abstracts%20%28363%29.jpg","2017Abstracts%20%283630%29.jpg","2017Abstracts%20%283631%29.jpg","2017Abstracts%20%283632%29.jpg","2017Abstracts%20%283633%29.jpg","2017Abstracts%20%283634%29.jpg","2017Abstracts%20%283635%29.jpg","2017Abstracts%20%283636%29.jpg","2017Abstracts%20%283637%29.jpg","2017Abstracts%20%283638%29.jpg","2017Abstracts%20%283639%29.jpg","2017Abstracts%20%28364%29.jpg","2017Abstracts%20%283640%29.jpg","2017Abstracts%20%283641%29.jpg","2017Abstracts%20%283642%29.jpg","2017Abstracts%20%283643%29.jpg","2017Abstracts%20%283644%29.jpg","2017Abstracts%20%283645%29.jpg","2017Abstracts%20%283646%29.jpg","2017Abstracts%20%283647%29.jpg","2017Abstracts%20%283648%29.jpg","2017Abstracts%20%283649%29.jpg","2017Abstracts%20%28365%29.jpg","2017Abstracts%20%283650%29.jpg","2017Abstracts%20%283651%29.jpg","2017Abstracts%20%283652%29.jpg","2017Abstracts%20%283653%29.jpg","2017Abstracts%20%283654%29.jpg","2017Abstracts%20%283655%29.jpg","2017Abstracts%20%283656%29.jpg","2017Abstracts%20%283657%29.jpg","2017Abstracts%20%283658%29.jpg","2017Abstracts%20%283659%29.jpg","2017Abstracts%20%28366%29.jpg","2017Abstracts%20%283660%29.jpg","2017Abstracts%20%283661%29.jpg","2017Abstracts%20%283662%29.jpg","2017Abstracts%20%283663%29.jpg","2017Abstracts%20%283664%29.jpg","2017Abstracts%20%283665%29.jpg","2017Abstracts%20%283666%29.jpg","2017Abstracts%20%283667%29.jpg","2017Abstracts%20%283668%29.jpg","2017Abstracts%20%283669%29.jpg","2017Abstracts%20%28367%29.jpg","2017Abstracts%20%283670%29.jpg","2017Abstracts%20%283671%29.jpg","2017Abstracts%20%283672%29.jpg","2017Abstracts%20%283673%29.jpg","2017Abstracts%20%283674%29.jpg","2017Abstracts%20%283675%29.jpg","2017Abstracts%20%283676%29.jpg","2017Abstracts%20%283677%29.jpg","2017Abstracts%20%283678%29.jpg","2017Abstracts%20%283679%29.jpg","2017Abstracts%20%28368%29.jpg","2017Abstracts%20%283680%29.jpg","2017Abstracts%20%283681%29.jpg","2017Abstracts%20%283682%29.jpg","2017Abstracts%20%283683%29.jpg","2017Abstracts%20%283684%29.jpg","2017Abstracts%20%283685%29.jpg","2017Abstracts%20%283686%29.jpg","2017Abstracts%20%283687%29.jpg","2017Abstracts%20%283688%29.jpg","2017Abstracts%20%283689%29.jpg","2017Abstracts%20%28369%29.jpg","2017Abstracts%20%283690%29.jpg","2017Abstracts%20%283691%29.jpg","2017Abstracts%20%283692%29.jpg","2017Abstracts%20%283693%29.jpg","2017Abstracts%20%283694%29.jpg","2017Abstracts%20%283695%29.jpg","2017Abstracts%20%283696%29.jpg","2017Abstracts%20%283697%29.jpg","2017Abstracts%20%283698%29.jpg","2017Abstracts%20%283699%29.jpg","2017Abstracts%20%2837%29.jpg","2017Abstracts%20%28370%29.jpg","2017Abstracts%20%283700%29.jpg","2017Abstracts%20%283701%29.jpg","2017Abstracts%20%283702%29.jpg","2017Abstracts%20%283703%29.jpg","2017Abstracts%20%283704%29.jpg","2017Abstracts%20%283705%29.jpg","2017Abstracts%20%283706%29.jpg","2017Abstracts%20%283707%29.jpg","2017Abstracts%20%283708%29.jpg","2017Abstracts%20%283709%29.jpg","2017Abstracts%20%28371%29.jpg","2017Abstracts%20%283710%29.jpg","2017Abstracts%20%283711%29.jpg","2017Abstracts%20%283712%29.jpg","2017Abstracts%20%283713%29.jpg","2017Abstracts%20%283714%29.jpg","2017Abstracts%20%283715%29.jpg","2017Abstracts%20%283716%29.jpg","2017Abstracts%20%283717%29.jpg","2017Abstracts%20%283718%29.jpg","2017Abstracts%20%283719%29.jpg","2017Abstracts%20%28372%29.jpg","2017Abstracts%20%283720%29.jpg","2017Abstracts%20%283721%29.jpg","2017Abstracts%20%283722%29.jpg","2017Abstracts%20%283723%29.jpg","2017Abstracts%20%283724%29.jpg","2017Abstracts%20%283725%29.jpg","2017Abstracts%20%283726%29.jpg","2017Abstracts%20%283727%29.jpg","2017Abstracts%20%283728%29.jpg","2017Abstracts%20%283729%29.jpg","2017Abstracts%20%28373%29.jpg","2017Abstracts%20%283730%29.jpg","2017Abstracts%20%283731%29.jpg","2017Abstracts%20%283732%29.jpg","2017Abstracts%20%283733%29.jpg","2017Abstracts%20%283734%29.jpg","2017Abstracts%20%283735%29.jpg","2017Abstracts%20%283736%29.jpg","2017Abstracts%20%283737%29.jpg","2017Abstracts%20%283738%29.jpg","2017Abstracts%20%283739%29.jpg","2017Abstracts%20%28374%29.jpg","2017Abstracts%20%283740%29.jpg","2017Abstracts%20%283741%29.jpg","2017Abstracts%20%283742%29.jpg","2017Abstracts%20%283743%29.jpg","2017Abstracts%20%283744%29.jpg","2017Abstracts%20%283745%29.jpg","2017Abstracts%20%283746%29.jpg","2017Abstracts%20%283747%29.jpg","2017Abstracts%20%283748%29.jpg","2017Abstracts%20%283749%29.jpg","2017Abstracts%20%28375%29.jpg","2017Abstracts%20%283750%29.jpg","2017Abstracts%20%283751%29.jpg","2017Abstracts%20%283752%29.jpg","2017Abstracts%20%283753%29.jpg","2017Abstracts%20%283754%29.jpg","2017Abstracts%20%283755%29.jpg","2017Abstracts%20%283756%29.jpg","2017Abstracts%20%283757%29.jpg","2017Abstracts%20%283758%29.jpg","2017Abstracts%20%283759%29.jpg","2017Abstracts%20%28376%29.jpg","2017Abstracts%20%283760%29.jpg","2017Abstracts%20%283761%29.jpg","2017Abstracts%20%283762%29.jpg","2017Abstracts%20%283763%29.jpg","2017Abstracts%20%283764%29.jpg","2017Abstracts%20%283765%29.jpg","2017Abstracts%20%283766%29.jpg","2017Abstracts%20%283767%29.jpg","2017Abstracts%20%283768%29.jpg","2017Abstracts%20%283769%29.jpg","2017Abstracts%20%28377%29.jpg","2017Abstracts%20%283770%29.jpg","2017Abstracts%20%283771%29.jpg","2017Abstracts%20%283772%29.jpg","2017Abstracts%20%283773%29.jpg","2017Abstracts%20%283774%29.jpg","2017Abstracts%20%283775%29.jpg","2017Abstracts%20%283776%29.jpg","2017Abstracts%20%283777%29.jpg","2017Abstracts%20%283778%29.jpg","2017Abstracts%20%283779%29.jpg","2017Abstracts%20%28378%29.jpg","2017Abstracts%20%283780%29.jpg","2017Abstracts%20%283781%29.jpg","2017Abstracts%20%283782%29.jpg","2017Abstracts%20%283783%29.jpg","2017Abstracts%20%283784%29.jpg","2017Abstracts%20%283785%29.jpg","2017Abstracts%20%283786%29.jpg","2017Abstracts%20%283787%29.jpg","2017Abstracts%20%283788%29.jpg","2017Abstracts%20%283789%29.jpg","2017Abstracts%20%28379%29.jpg","2017Abstracts%20%283790%29.jpg","2017Abstracts%20%283791%29.jpg","2017Abstracts%20%283792%29.jpg","2017Abstracts%20%283793%29.jpg","2017Abstracts%20%283794%29.jpg","2017Abstracts%20%283795%29.jpg","2017Abstracts%20%283796%29.jpg","2017Abstracts%20%283797%29.jpg","2017Abstracts%20%283798%29.jpg","2017Abstracts%20%283799%29.jpg","2017Abstracts%20%2838%29.jpg","2017Abstracts%20%28380%29.jpg","2017Abstracts%20%283800%29.jpg","2017Abstracts%20%283801%29.jpg","2017Abstracts%20%283802%29.jpg","2017Abstracts%20%283803%29.jpg","2017Abstracts%20%283804%29.jpg","2017Abstracts%20%283805%29.jpg","2017Abstracts%20%283806%29.jpg","2017Abstracts%20%283807%29.jpg","2017Abstracts%20%283808%29.jpg","2017Abstracts%20%283809%29.jpg","2017Abstracts%20%28381%29.jpg","2017Abstracts%20%283810%29.jpg","2017Abstracts%20%283811%29.jpg","2017Abstracts%20%283812%29.jpg","2017Abstracts%20%283813%29.jpg","2017Abstracts%20%283814%29.jpg","2017Abstracts%20%283815%29.jpg","2017Abstracts%20%283816%29.jpg","2017Abstracts%20%283817%29.jpg","2017Abstracts%20%283818%29.jpg","2017Abstracts%20%283819%29.jpg","2017Abstracts%20%28382%29.jpg","2017Abstracts%20%283820%29.jpg","2017Abstracts%20%283821%29.jpg","2017Abstracts%20%283822%29.jpg","2017Abstracts%20%283823%29.jpg","2017Abstracts%20%283824%29.jpg","2017Abstracts%20%283825%29.jpg","2017Abstracts%20%283826%29.jpg","2017Abstracts%20%283827%29.jpg","2017Abstracts%20%283828%29.jpg","2017Abstracts%20%283829%29.jpg","2017Abstracts%20%28383%29.jpg","2017Abstracts%20%283830%29.jpg","2017Abstracts%20%283831%29.jpg","2017Abstracts%20%283832%29.jpg","2017Abstracts%20%283833%29.jpg","2017Abstracts%20%283834%29.jpg","2017Abstracts%20%283835%29.jpg","2017Abstracts%20%283836%29.jpg","2017Abstracts%20%283837%29.jpg","2017Abstracts%20%283838%29.jpg","2017Abstracts%20%283839%29.jpg","2017Abstracts%20%28384%29.jpg","2017Abstracts%20%283840%29.jpg","2017Abstracts%20%283841%29.jpg","2017Abstracts%20%283842%29.jpg","2017Abstracts%20%283843%29.jpg","2017Abstracts%20%283844%29.jpg","2017Abstracts%20%283845%29.jpg","2017Abstracts%20%283846%29.jpg","2017Abstracts%20%283847%29.jpg","2017Abstracts%20%283848%29.jpg","2017Abstracts%20%283849%29.jpg","2017Abstracts%20%28385%29.jpg","2017Abstracts%20%283850%29.jpg","2017Abstracts%20%283851%29.jpg","2017Abstracts%20%283852%29.jpg","2017Abstracts%20%283853%29.jpg","2017Abstracts%20%283854%29.jpg","2017Abstracts%20%283855%29.jpg","2017Abstracts%20%283856%29.jpg","2017Abstracts%20%283857%29.jpg","2017Abstracts%20%283858%29.jpg","2017Abstracts%20%283859%29.jpg","2017Abstracts%20%28386%29.jpg","2017Abstracts%20%283860%29.jpg","2017Abstracts%20%283861%29.jpg","2017Abstracts%20%283862%29.jpg","2017Abstracts%20%283863%29.jpg","2017Abstracts%20%283864%29.jpg","2017Abstracts%20%283865%29.jpg","2017Abstracts%20%283866%29.jpg","2017Abstracts%20%283867%29.jpg","2017Abstracts%20%283868%29.jpg","2017Abstracts%20%283869%29.jpg","2017Abstracts%20%28387%29.jpg","2017Abstracts%20%283870%29.jpg","2017Abstracts%20%283871%29.jpg","2017Abstracts%20%283872%29.jpg","2017Abstracts%20%283873%29.jpg","2017Abstracts%20%283874%29.jpg","2017Abstracts%20%283875%29.jpg","2017Abstracts%20%283876%29.jpg","2017Abstracts%20%283877%29.jpg","2017Abstracts%20%283878%29.jpg","2017Abstracts%20%283879%29.jpg","2017Abstracts%20%28388%29.jpg","2017Abstracts%20%283880%29.jpg","2017Abstracts%20%283881%29.jpg","2017Abstracts%20%283882%29.jpg","2017Abstracts%20%283883%29.jpg","2017Abstracts%20%283884%29.jpg","2017Abstracts%20%283885%29.jpg","2017Abstracts%20%283886%29.jpg","2017Abstracts%20%283887%29.jpg","2017Abstracts%20%283888%29.jpg","2017Abstracts%20%283889%29.jpg","2017Abstracts%20%28389%29.jpg","2017Abstracts%20%283890%29.jpg","2017Abstracts%20%283891%29.jpg","2017Abstracts%20%283892%29.jpg","2017Abstracts%20%283893%29.jpg","2017Abstracts%20%283894%29.jpg","2017Abstracts%20%283895%29.jpg","2017Abstracts%20%283896%29.jpg","2017Abstracts%20%283897%29.jpg","2017Abstracts%20%283898%29.jpg","2017Abstracts%20%283899%29.jpg","2017Abstracts%20%2839%29.jpg","2017Abstracts%20%28390%29.jpg","2017Abstracts%20%283900%29.jpg","2017Abstracts%20%283901%29.jpg","2017Abstracts%20%283902%29.jpg","2017Abstracts%20%283903%29.jpg","2017Abstracts%20%283904%29.jpg","2017Abstracts%20%283905%29.jpg","2017Abstracts%20%283906%29.jpg","2017Abstracts%20%283907%29.jpg","2017Abstracts%20%283908%29.jpg","2017Abstracts%20%283909%29.jpg","2017Abstracts%20%28391%29.jpg","2017Abstracts%20%283910%29.jpg","2017Abstracts%20%283911%29.jpg","2017Abstracts%20%283912%29.jpg","2017Abstracts%20%283913%29.jpg","2017Abstracts%20%283914%29.jpg","2017Abstracts%20%283915%29.jpg","2017Abstracts%20%283916%29.jpg","2017Abstracts%20%283917%29.jpg","2017Abstracts%20%283918%29.jpg","2017Abstracts%20%283919%29.jpg","2017Abstracts%20%28392%29.jpg","2017Abstracts%20%283920%29.jpg","2017Abstracts%20%283921%29.jpg","2017Abstracts%20%283922%29.jpg","2017Abstracts%20%283923%29.jpg","2017Abstracts%20%283924%29.jpg","2017Abstracts%20%283925%29.jpg","2017Abstracts%20%283926%29.jpg","2017Abstracts%20%283927%29.jpg","2017Abstracts%20%283928%29.jpg","2017Abstracts%20%283929%29.jpg","2017Abstracts%20%28393%29.jpg","2017Abstracts%20%283930%29.jpg","2017Abstracts%20%283931%29.jpg","2017Abstracts%20%283932%29.jpg","2017Abstracts%20%283933%29.jpg","2017Abstracts%20%283934%29.jpg","2017Abstracts%20%283935%29.jpg","2017Abstracts%20%283936%29.jpg","2017Abstracts%20%283937%29.jpg","2017Abstracts%20%283938%29.jpg","2017Abstracts%20%283939%29.jpg","2017Abstracts%20%28394%29.jpg","2017Abstracts%20%283940%29.jpg","2017Abstracts%20%283941%29.jpg","2017Abstracts%20%283942%29.jpg","2017Abstracts%20%283943%29.jpg","2017Abstracts%20%283944%29.jpg","2017Abstracts%20%283945%29.jpg","2017Abstracts%20%283946%29.jpg","2017Abstracts%20%283947%29.jpg","2017Abstracts%20%283948%29.jpg","2017Abstracts%20%283949%29.jpg","2017Abstracts%20%28395%29.jpg","2017Abstracts%20%283950%29.jpg","2017Abstracts%20%283951%29.jpg","2017Abstracts%20%283952%29.jpg","2017Abstracts%20%283953%29.jpg","2017Abstracts%20%283954%29.jpg","2017Abstracts%20%283955%29.jpg","2017Abstracts%20%283956%29.jpg","2017Abstracts%20%283957%29.jpg","2017Abstracts%20%283958%29.jpg","2017Abstracts%20%283959%29.jpg","2017Abstracts%20%28396%29.jpg","2017Abstracts%20%283960%29.jpg","2017Abstracts%20%283961%29.jpg","2017Abstracts%20%283962%29.jpg","2017Abstracts%20%283963%29.jpg","2017Abstracts%20%283964%29.jpg","2017Abstracts%20%283965%29.jpg","2017Abstracts%20%283966%29.jpg","2017Abstracts%20%283967%29.jpg","2017Abstracts%20%283968%29.jpg","2017Abstracts%20%283969%29.jpg","2017Abstracts%20%28397%29.jpg","2017Abstracts%20%283970%29.jpg","2017Abstracts%20%283971%29.jpg","2017Abstracts%20%283972%29.jpg","2017Abstracts%20%283973%29.jpg","2017Abstracts%20%283974%29.jpg","2017Abstracts%20%283975%29.jpg","2017Abstracts%20%283976%29.jpg","2017Abstracts%20%283977%29.jpg","2017Abstracts%20%283978%29.jpg","2017Abstracts%20%283979%29.jpg","2017Abstracts%20%28398%29.jpg","2017Abstracts%20%283980%29.jpg","2017Abstracts%20%283981%29.jpg","2017Abstracts%20%283982%29.jpg","2017Abstracts%20%283983%29.jpg","2017Abstracts%20%283984%29.jpg","2017Abstracts%20%283985%29.jpg","2017Abstracts%20%283986%29.jpg","2017Abstracts%20%283987%29.jpg","2017Abstracts%20%283988%29.jpg","2017Abstracts%20%283989%29.jpg","2017Abstracts%20%28399%29.jpg","2017Abstracts%20%283990%29.jpg","2017Abstracts%20%283991%29.jpg","2017Abstracts%20%283992%29.jpg","2017Abstracts%20%283993%29.jpg","2017Abstracts%20%283994%29.jpg","2017Abstracts%20%283995%29.jpg","2017Abstracts%20%283996%29.jpg","2017Abstracts%20%283997%29.jpg","2017Abstracts%20%283998%29.jpg","2017Abstracts%20%283999%29.jpg","2017Abstracts%20%284%29.jpg","2017Abstracts%20%2840%29.jpg","2017Abstracts%20%28400%29.jpg","2017Abstracts%20%284000%29.jpg","2017Abstracts%20%284001%29.jpg","2017Abstracts%20%284002%29.jpg","2017Abstracts%20%284003%29.jpg","2017Abstracts%20%284004%29.jpg","2017Abstracts%20%284005%29.jpg","2017Abstracts%20%284006%29.jpg","2017Abstracts%20%284007%29.jpg","2017Abstracts%20%284008%29.jpg","2017Abstracts%20%284009%29.jpg","2017Abstracts%20%28401%29.jpg","2017Abstracts%20%284010%29.jpg","2017Abstracts%20%284011%29.jpg","2017Abstracts%20%284012%29.jpg","2017Abstracts%20%284013%29.jpg","2017Abstracts%20%284014%29.jpg","2017Abstracts%20%284015%29.jpg","2017Abstracts%20%284016%29.jpg","2017Abstracts%20%284017%29.jpg","2017Abstracts%20%284018%29.jpg","2017Abstracts%20%284019%29.jpg","2017Abstracts%20%28402%29.jpg","2017Abstracts%20%284020%29.jpg","2017Abstracts%20%284021%29.jpg","2017Abstracts%20%284022%29.jpg","2017Abstracts%20%284023%29.jpg","2017Abstracts%20%284024%29.jpg","2017Abstracts%20%284025%29.jpg","2017Abstracts%20%284026%29.jpg","2017Abstracts%20%284027%29.jpg","2017Abstracts%20%284028%29.jpg","2017Abstracts%20%284029%29.jpg","2017Abstracts%20%28403%29.jpg","2017Abstracts%20%284030%29.jpg","2017Abstracts%20%284031%29.jpg","2017Abstracts%20%284032%29.jpg","2017Abstracts%20%284033%29.jpg","2017Abstracts%20%284034%29.jpg","2017Abstracts%20%284035%29.jpg","2017Abstracts%20%284036%29.jpg","2017Abstracts%20%284037%29.jpg","2017Abstracts%20%284038%29.jpg","2017Abstracts%20%284039%29.jpg","2017Abstracts%20%28404%29.jpg","2017Abstracts%20%284040%29.jpg","2017Abstracts%20%284041%29.jpg","2017Abstracts%20%284042%29.jpg","2017Abstracts%20%284043%29.jpg","2017Abstracts%20%284044%29.jpg","2017Abstracts%20%284045%29.jpg","2017Abstracts%20%284046%29.jpg","2017Abstracts%20%284047%29.jpg","2017Abstracts%20%284048%29.jpg","2017Abstracts%20%284049%29.jpg","2017Abstracts%20%28405%29.jpg","2017Abstracts%20%284050%29.jpg","2017Abstracts%20%284051%29.jpg","2017Abstracts%20%284052%29.jpg","2017Abstracts%20%284053%29.jpg","2017Abstracts%20%284054%29.jpg","2017Abstracts%20%284055%29.jpg","2017Abstracts%20%284056%29.jpg","2017Abstracts%20%284057%29.jpg","2017Abstracts%20%284058%29.jpg","2017Abstracts%20%284059%29.jpg","2017Abstracts%20%28406%29.jpg","2017Abstracts%20%284060%29.jpg","2017Abstracts%20%284061%29.jpg","2017Abstracts%20%284062%29.jpg","2017Abstracts%20%284063%29.jpg","2017Abstracts%20%284064%29.jpg","2017Abstracts%20%284065%29.jpg","2017Abstracts%20%284066%29.jpg","2017Abstracts%20%284067%29.jpg","2017Abstracts%20%284068%29.jpg","2017Abstracts%20%284069%29.jpg","2017Abstracts%20%28407%29.jpg","2017Abstracts%20%284070%29.jpg","2017Abstracts%20%284071%29.jpg","2017Abstracts%20%284072%29.jpg","2017Abstracts%20%284073%29.jpg","2017Abstracts%20%284074%29.jpg","2017Abstracts%20%284075%29.jpg","2017Abstracts%20%284076%29.jpg","2017Abstracts%20%284077%29.jpg","2017Abstracts%20%284078%29.jpg","2017Abstracts%20%284079%29.jpg","2017Abstracts%20%28408%29.jpg","2017Abstracts%20%284080%29.jpg","2017Abstracts%20%284081%29.jpg","2017Abstracts%20%284082%29.jpg","2017Abstracts%20%284083%29.jpg","2017Abstracts%20%284084%29.jpg","2017Abstracts%20%284085%29.jpg","2017Abstracts%20%284086%29.jpg","2017Abstracts%20%284087%29.jpg","2017Abstracts%20%284088%29.jpg","2017Abstracts%20%284089%29.jpg","2017Abstracts%20%28409%29.jpg","2017Abstracts%20%284090%29.jpg","2017Abstracts%20%284091%29.jpg","2017Abstracts%20%284092%29.jpg","2017Abstracts%20%284093%29.jpg","2017Abstracts%20%284094%29.jpg","2017Abstracts%20%284095%29.jpg","2017Abstracts%20%284096%29.jpg","2017Abstracts%20%284097%29.jpg","2017Abstracts%20%284098%29.jpg","2017Abstracts%20%284099%29.jpg","2017Abstracts%20%2841%29.jpg","2017Abstracts%20%28410%29.jpg","2017Abstracts%20%284100%29.jpg","2017Abstracts%20%284101%29.jpg","2017Abstracts%20%284102%29.jpg","2017Abstracts%20%284103%29.jpg","2017Abstracts%20%284104%29.jpg","2017Abstracts%20%284105%29.jpg","2017Abstracts%20%284106%29.jpg","2017Abstracts%20%284107%29.jpg","2017Abstracts%20%284108%29.jpg","2017Abstracts%20%284109%29.jpg","2017Abstracts%20%28411%29.jpg","2017Abstracts%20%284110%29.jpg","2017Abstracts%20%284111%29.jpg","2017Abstracts%20%284112%29.jpg","2017Abstracts%20%284113%29.jpg","2017Abstracts%20%284114%29.jpg","2017Abstracts%20%284115%29.jpg","2017Abstracts%20%284116%29.jpg","2017Abstracts%20%284117%29.jpg","2017Abstracts%20%284118%29.jpg","2017Abstracts%20%284119%29.jpg","2017Abstracts%20%28412%29.jpg","2017Abstracts%20%284120%29.jpg","2017Abstracts%20%284121%29.jpg","2017Abstracts%20%284122%29.jpg","2017Abstracts%20%284123%29.jpg","2017Abstracts%20%284124%29.jpg","2017Abstracts%20%284125%29.jpg","2017Abstracts%20%284126%29.jpg","2017Abstracts%20%284127%29.jpg","2017Abstracts%20%284128%29.jpg","2017Abstracts%20%284129%29.jpg","2017Abstracts%20%28413%29.jpg","2017Abstracts%20%284130%29.jpg","2017Abstracts%20%284131%29.jpg","2017Abstracts%20%284132%29.jpg","2017Abstracts%20%284133%29.jpg","2017Abstracts%20%284134%29.jpg","2017Abstracts%20%284135%29.jpg","2017Abstracts%20%284136%29.jpg","2017Abstracts%20%284137%29.jpg","2017Abstracts%20%284138%29.jpg","2017Abstracts%20%284139%29.jpg","2017Abstracts%20%28414%29.jpg","2017Abstracts%20%284140%29.jpg","2017Abstracts%20%284141%29.jpg","2017Abstracts%20%284142%29.jpg","2017Abstracts%20%284143%29.jpg","2017Abstracts%20%284144%29.jpg","2017Abstracts%20%284145%29.jpg","2017Abstracts%20%284146%29.jpg","2017Abstracts%20%284147%29.jpg","2017Abstracts%20%284148%29.jpg","2017Abstracts%20%284149%29.jpg","2017Abstracts%20%28415%29.jpg","2017Abstracts%20%284150%29.jpg","2017Abstracts%20%284151%29.jpg","2017Abstracts%20%284152%29.jpg","2017Abstracts%20%284153%29.jpg","2017Abstracts%20%284154%29.jpg","2017Abstracts%20%284155%29.jpg","2017Abstracts%20%284156%29.jpg","2017Abstracts%20%284157%29.jpg","2017Abstracts%20%284158%29.jpg","2017Abstracts%20%284159%29.jpg","2017Abstracts%20%28416%29.jpg","2017Abstracts%20%284160%29.jpg","2017Abstracts%20%284161%29.jpg","2017Abstracts%20%284162%29.jpg","2017Abstracts%20%284163%29.jpg","2017Abstracts%20%284164%29.jpg","2017Abstracts%20%284165%29.jpg","2017Abstracts%20%284166%29.jpg","2017Abstracts%20%284167%29.jpg","2017Abstracts%20%284168%29.jpg","2017Abstracts%20%284169%29.jpg","2017Abstracts%20%28417%29.jpg","2017Abstracts%20%284170%29.jpg","2017Abstracts%20%284171%29.jpg","2017Abstracts%20%284172%29.jpg","2017Abstracts%20%284173%29.jpg","2017Abstracts%20%284174%29.jpg","2017Abstracts%20%284175%29.jpg","2017Abstracts%20%284176%29.jpg","2017Abstracts%20%284177%29.jpg","2017Abstracts%20%284178%29.jpg","2017Abstracts%20%284179%29.jpg","2017Abstracts%20%28418%29.jpg","2017Abstracts%20%284180%29.jpg","2017Abstracts%20%284181%29.jpg","2017Abstracts%20%284182%29.jpg","2017Abstracts%20%284183%29.jpg","2017Abstracts%20%284184%29.jpg","2017Abstracts%20%284185%29.jpg","2017Abstracts%20%284186%29.jpg","2017Abstracts%20%284187%29.jpg","2017Abstracts%20%284188%29.jpg","2017Abstracts%20%284189%29.jpg","2017Abstracts%20%28419%29.jpg","2017Abstracts%20%284190%29.jpg","2017Abstracts%20%284191%29.jpg","2017Abstracts%20%284192%29.jpg","2017Abstracts%20%284193%29.jpg","2017Abstracts%20%284194%29.jpg","2017Abstracts%20%284195%29.jpg","2017Abstracts%20%284196%29.jpg","2017Abstracts%20%284197%29.jpg","2017Abstracts%20%284198%29.jpg","2017Abstracts%20%284199%29.jpg","2017Abstracts%20%2842%29.jpg","2017Abstracts%20%28420%29.jpg","2017Abstracts%20%284200%29.jpg","2017Abstracts%20%284201%29.jpg","2017Abstracts%20%284202%29.jpg","2017Abstracts%20%284203%29.jpg","2017Abstracts%20%284204%29.jpg","2017Abstracts%20%284205%29.jpg","2017Abstracts%20%284206%29.jpg","2017Abstracts%20%284207%29.jpg","2017Abstracts%20%284208%29.jpg","2017Abstracts%20%284209%29.jpg","2017Abstracts%20%28421%29.jpg","2017Abstracts%20%284210%29.jpg","2017Abstracts%20%284211%29.jpg","2017Abstracts%20%284212%29.jpg","2017Abstracts%20%284213%29.jpg","2017Abstracts%20%284214%29.jpg","2017Abstracts%20%284215%29.jpg","2017Abstracts%20%284216%29.jpg","2017Abstracts%20%284217%29.jpg","2017Abstracts%20%284218%29.jpg","2017Abstracts%20%284219%29.jpg","2017Abstracts%20%28422%29.jpg","2017Abstracts%20%284220%29.jpg","2017Abstracts%20%284221%29.jpg","2017Abstracts%20%284222%29.jpg","2017Abstracts%20%284223%29.jpg","2017Abstracts%20%284224%29.jpg","2017Abstracts%20%284225%29.jpg","2017Abstracts%20%284226%29.jpg","2017Abstracts%20%284227%29.jpg","2017Abstracts%20%284228%29.jpg","2017Abstracts%20%284229%29.jpg","2017Abstracts%20%28423%29.jpg","2017Abstracts%20%284230%29.jpg","2017Abstracts%20%284231%29.jpg","2017Abstracts%20%284232%29.jpg","2017Abstracts%20%284233%29.jpg","2017Abstracts%20%284234%29.jpg","2017Abstracts%20%284235%29.jpg","2017Abstracts%20%284236%29.jpg","2017Abstracts%20%284237%29.jpg","2017Abstracts%20%284238%29.jpg","2017Abstracts%20%284239%29.jpg","2017Abstracts%20%28424%29.jpg","2017Abstracts%20%284240%29.jpg","2017Abstracts%20%284241%29.jpg","2017Abstracts%20%284242%29.jpg","2017Abstracts%20%284243%29.jpg","2017Abstracts%20%284244%29.jpg","2017Abstracts%20%284245%29.jpg","2017Abstracts%20%284246%29.jpg","2017Abstracts%20%284247%29.jpg","2017Abstracts%20%284248%29.jpg","2017Abstracts%20%284249%29.jpg","2017Abstracts%20%28425%29.jpg","2017Abstracts%20%284250%29.jpg","2017Abstracts%20%284251%29.jpg","2017Abstracts%20%284252%29.jpg","2017Abstracts%20%284253%29.jpg","2017Abstracts%20%284254%29.jpg","2017Abstracts%20%284255%29.jpg","2017Abstracts%20%284256%29.jpg","2017Abstracts%20%284257%29.jpg","2017Abstracts%20%284258%29.jpg","2017Abstracts%20%284259%29.jpg","2017Abstracts%20%28426%29.jpg","2017Abstracts%20%284260%29.jpg","2017Abstracts%20%284261%29.jpg","2017Abstracts%20%284262%29.jpg","2017Abstracts%20%284263%29.jpg","2017Abstracts%20%284264%29.jpg","2017Abstracts%20%284265%29.jpg","2017Abstracts%20%284266%29.jpg","2017Abstracts%20%284267%29.jpg","2017Abstracts%20%284268%29.jpg","2017Abstracts%20%284269%29.jpg","2017Abstracts%20%28427%29.jpg","2017Abstracts%20%284270%29.jpg","2017Abstracts%20%284271%29.jpg","2017Abstracts%20%284272%29.jpg","2017Abstracts%20%284273%29.jpg","2017Abstracts%20%284274%29.jpg","2017Abstracts%20%284275%29.jpg","2017Abstracts%20%284276%29.jpg","2017Abstracts%20%284277%29.jpg","2017Abstracts%20%284278%29.jpg","2017Abstracts%20%284279%29.jpg","2017Abstracts%20%28428%29.jpg","2017Abstracts%20%284280%29.jpg","2017Abstracts%20%284281%29.jpg","2017Abstracts%20%284282%29.jpg","2017Abstracts%20%284283%29.jpg","2017Abstracts%20%284284%29.jpg","2017Abstracts%20%284285%29.jpg","2017Abstracts%20%284286%29.jpg","2017Abstracts%20%284287%29.jpg","2017Abstracts%20%284288%29.jpg","2017Abstracts%20%284289%29.jpg","2017Abstracts%20%28429%29.jpg","2017Abstracts%20%284290%29.jpg","2017Abstracts%20%284291%29.jpg","2017Abstracts%20%284292%29.jpg","2017Abstracts%20%284293%29.jpg","2017Abstracts%20%284294%29.jpg","2017Abstracts%20%284295%29.jpg","2017Abstracts%20%284296%29.jpg","2017Abstracts%20%284297%29.jpg","2017Abstracts%20%284298%29.jpg","2017Abstracts%20%284299%29.jpg","2017Abstracts%20%2843%29.jpg","2017Abstracts%20%28430%29.jpg","2017Abstracts%20%284300%29.jpg","2017Abstracts%20%284301%29.jpg","2017Abstracts%20%284302%29.jpg","2017Abstracts%20%284303%29.jpg","2017Abstracts%20%284304%29.jpg","2017Abstracts%20%284305%29.jpg","2017Abstracts%20%284306%29.jpg","2017Abstracts%20%284307%29.jpg","2017Abstracts%20%284308%29.jpg","2017Abstracts%20%284309%29.jpg","2017Abstracts%20%28431%29.jpg","2017Abstracts%20%284310%29.jpg","2017Abstracts%20%284311%29.jpg","2017Abstracts%20%284312%29.jpg","2017Abstracts%20%284313%29.jpg","2017Abstracts%20%284314%29.jpg","2017Abstracts%20%284315%29.jpg","2017Abstracts%20%284316%29.jpg","2017Abstracts%20%284317%29.jpg","2017Abstracts%20%284318%29.jpg","2017Abstracts%20%284319%29.jpg","2017Abstracts%20%28432%29.jpg","2017Abstracts%20%284320%29.jpg","2017Abstracts%20%284321%29.jpg","2017Abstracts%20%284322%29.jpg","2017Abstracts%20%284323%29.jpg","2017Abstracts%20%284324%29.jpg","2017Abstracts%20%284325%29.jpg","2017Abstracts%20%284326%29.jpg","2017Abstracts%20%284327%29.jpg","2017Abstracts%20%284328%29.jpg","2017Abstracts%20%284329%29.jpg","2017Abstracts%20%28433%29.jpg","2017Abstracts%20%284330%29.jpg","2017Abstracts%20%284331%29.jpg","2017Abstracts%20%284332%29.jpg","2017Abstracts%20%284333%29.jpg","2017Abstracts%20%284334%29.jpg","2017Abstracts%20%284335%29.jpg","2017Abstracts%20%284336%29.jpg","2017Abstracts%20%284337%29.jpg","2017Abstracts%20%284338%29.jpg","2017Abstracts%20%284339%29.jpg","2017Abstracts%20%28434%29.jpg","2017Abstracts%20%284340%29.jpg","2017Abstracts%20%284341%29.jpg","2017Abstracts%20%284342%29.jpg","2017Abstracts%20%284343%29.jpg","2017Abstracts%20%284344%29.jpg","2017Abstracts%20%284345%29.jpg","2017Abstracts%20%284346%29.jpg","2017Abstracts%20%284347%29.jpg","2017Abstracts%20%284348%29.jpg","2017Abstracts%20%284349%29.jpg","2017Abstracts%20%28435%29.jpg","2017Abstracts%20%284350%29.jpg","2017Abstracts%20%284351%29.jpg","2017Abstracts%20%284352%29.jpg","2017Abstracts%20%284353%29.jpg","2017Abstracts%20%284354%29.jpg","2017Abstracts%20%284355%29.jpg","2017Abstracts%20%284356%29.jpg","2017Abstracts%20%284357%29.jpg","2017Abstracts%20%284358%29.jpg","2017Abstracts%20%284359%29.jpg","2017Abstracts%20%28436%29.jpg","2017Abstracts%20%284360%29.jpg","2017Abstracts%20%284361%29.jpg","2017Abstracts%20%284362%29.jpg","2017Abstracts%20%284363%29.jpg","2017Abstracts%20%284364%29.jpg","2017Abstracts%20%284365%29.jpg","2017Abstracts%20%284366%29.jpg","2017Abstracts%20%284367%29.jpg","2017Abstracts%20%284368%29.jpg","2017Abstracts%20%284369%29.jpg","2017Abstracts%20%28437%29.jpg","2017Abstracts%20%284370%29.jpg","2017Abstracts%20%284371%29.jpg","2017Abstracts%20%284372%29.jpg","2017Abstracts%20%284373%29.jpg","2017Abstracts%20%284374%29.jpg","2017Abstracts%20%284375%29.jpg","2017Abstracts%20%284376%29.jpg","2017Abstracts%20%284377%29.jpg","2017Abstracts%20%284378%29.jpg","2017Abstracts%20%284379%29.jpg","2017Abstracts%20%28438%29.jpg","2017Abstracts%20%284380%29.jpg","2017Abstracts%20%284381%29.jpg","2017Abstracts%20%284382%29.jpg","2017Abstracts%20%284383%29.jpg","2017Abstracts%20%284384%29.jpg","2017Abstracts%20%284385%29.jpg","2017Abstracts%20%284386%29.jpg","2017Abstracts%20%284387%29.jpg","2017Abstracts%20%284388%29.jpg","2017Abstracts%20%284389%29.jpg","2017Abstracts%20%28439%29.jpg","2017Abstracts%20%284390%29.jpg","2017Abstracts%20%284391%29.jpg","2017Abstracts%20%284392%29.jpg","2017Abstracts%20%284393%29.jpg","2017Abstracts%20%284394%29.jpg","2017Abstracts%20%284395%29.jpg","2017Abstracts%20%284396%29.jpg","2017Abstracts%20%284397%29.jpg","2017Abstracts%20%284398%29.jpg","2017Abstracts%20%284399%29.jpg","2017Abstracts%20%2844%29.jpg","2017Abstracts%20%28440%29.jpg","2017Abstracts%20%284400%29.jpg","2017Abstracts%20%284401%29.jpg","2017Abstracts%20%284402%29.jpg","2017Abstracts%20%284403%29.jpg","2017Abstracts%20%284404%29.jpg","2017Abstracts%20%284405%29.jpg","2017Abstracts%20%284406%29.jpg","2017Abstracts%20%284407%29.jpg","2017Abstracts%20%284408%29.jpg","2017Abstracts%20%284409%29.jpg","2017Abstracts%20%28441%29.jpg","2017Abstracts%20%284410%29.jpg","2017Abstracts%20%284411%29.jpg","2017Abstracts%20%284412%29.jpg","2017Abstracts%20%284413%29.jpg","2017Abstracts%20%284414%29.jpg","2017Abstracts%20%284415%29.jpg","2017Abstracts%20%284416%29.jpg","2017Abstracts%20%284417%29.jpg","2017Abstracts%20%284418%29.jpg","2017Abstracts%20%284419%29.jpg","2017Abstracts%20%28442%29.jpg","2017Abstracts%20%284420%29.jpg","2017Abstracts%20%284421%29.jpg","2017Abstracts%20%284422%29.jpg","2017Abstracts%20%284423%29.jpg","2017Abstracts%20%284424%29.jpg","2017Abstracts%20%284425%29.jpg","2017Abstracts%20%284426%29.jpg","2017Abstracts%20%284427%29.jpg","2017Abstracts%20%284428%29.jpg","2017Abstracts%20%284429%29.jpg","2017Abstracts%20%28443%29.jpg","2017Abstracts%20%284430%29.jpg","2017Abstracts%20%284431%29.jpg","2017Abstracts%20%284432%29.jpg","2017Abstracts%20%284433%29.jpg","2017Abstracts%20%284434%29.jpg","2017Abstracts%20%284435%29.jpg","2017Abstracts%20%284436%29.jpg","2017Abstracts%20%284437%29.jpg","2017Abstracts%20%284438%29.jpg","2017Abstracts%20%284439%29.jpg","2017Abstracts%20%28444%29.jpg","2017Abstracts%20%284440%29.jpg","2017Abstracts%20%284441%29.jpg","2017Abstracts%20%284442%29.jpg","2017Abstracts%20%284443%29.jpg","2017Abstracts%20%284444%29.jpg","2017Abstracts%20%284445%29.jpg","2017Abstracts%20%284446%29.jpg","2017Abstracts%20%284447%29.jpg","2017Abstracts%20%284448%29.jpg","2017Abstracts%20%284449%29.jpg","2017Abstracts%20%28445%29.jpg","2017Abstracts%20%284450%29.jpg","2017Abstracts%20%284451%29.jpg","2017Abstracts%20%284452%29.jpg","2017Abstracts%20%284453%29.jpg","2017Abstracts%20%284454%29.jpg","2017Abstracts%20%284455%29.jpg","2017Abstracts%20%284456%29.jpg","2017Abstracts%20%284457%29.jpg","2017Abstracts%20%284458%29.jpg","2017Abstracts%20%284459%29.jpg","2017Abstracts%20%28446%29.jpg","2017Abstracts%20%284460%29.jpg","2017Abstracts%20%284461%29.jpg","2017Abstracts%20%284462%29.jpg","2017Abstracts%20%284463%29.jpg","2017Abstracts%20%284464%29.jpg","2017Abstracts%20%284465%29.jpg","2017Abstracts%20%284466%29.jpg","2017Abstracts%20%284467%29.jpg","2017Abstracts%20%284468%29.jpg","2017Abstracts%20%284469%29.jpg","2017Abstracts%20%28447%29.jpg","2017Abstracts%20%284470%29.jpg","2017Abstracts%20%284471%29.jpg","2017Abstracts%20%284472%29.jpg","2017Abstracts%20%284473%29.jpg","2017Abstracts%20%284474%29.jpg","2017Abstracts%20%284475%29.jpg","2017Abstracts%20%284476%29.jpg","2017Abstracts%20%284477%29.jpg","2017Abstracts%20%284478%29.jpg","2017Abstracts%20%284479%29.jpg","2017Abstracts%20%28448%29.jpg","2017Abstracts%20%284480%29.jpg","2017Abstracts%20%284481%29.jpg","2017Abstracts%20%284482%29.jpg","2017Abstracts%20%284483%29.jpg","2017Abstracts%20%284484%29.jpg","2017Abstracts%20%284485%29.jpg","2017Abstracts%20%284486%29.jpg","2017Abstracts%20%284487%29.jpg","2017Abstracts%20%284488%29.jpg","2017Abstracts%20%284489%29.jpg","2017Abstracts%20%28449%29.jpg","2017Abstracts%20%284490%29.jpg","2017Abstracts%20%284491%29.jpg","2017Abstracts%20%284492%29.jpg","2017Abstracts%20%284493%29.jpg","2017Abstracts%20%284494%29.jpg","2017Abstracts%20%284495%29.jpg","2017Abstracts%20%284496%29.jpg","2017Abstracts%20%284497%29.jpg","2017Abstracts%20%284498%29.jpg","2017Abstracts%20%284499%29.jpg","2017Abstracts%20%2845%29.jpg","2017Abstracts%20%28450%29.jpg","2017Abstracts%20%284500%29.jpg","2017Abstracts%20%284501%29.jpg","2017Abstracts%20%284502%29.jpg","2017Abstracts%20%284503%29.jpg","2017Abstracts%20%284504%29.jpg","2017Abstracts%20%284505%29.jpg","2017Abstracts%20%284506%29.jpg","2017Abstracts%20%284507%29.jpg","2017Abstracts%20%284508%29.jpg","2017Abstracts%20%284509%29.jpg","2017Abstracts%20%28451%29.jpg","2017Abstracts%20%284510%29.jpg","2017Abstracts%20%284511%29.jpg","2017Abstracts%20%284512%29.jpg","2017Abstracts%20%284513%29.jpg","2017Abstracts%20%284514%29.jpg","2017Abstracts%20%284515%29.jpg","2017Abstracts%20%284516%29.jpg","2017Abstracts%20%284517%29.jpg","2017Abstracts%20%284518%29.jpg","2017Abstracts%20%284519%29.jpg","2017Abstracts%20%28452%29.jpg","2017Abstracts%20%284520%29.jpg","2017Abstracts%20%284521%29.jpg","2017Abstracts%20%284522%29.jpg","2017Abstracts%20%284523%29.jpg","2017Abstracts%20%284524%29.jpg","2017Abstracts%20%284525%29.jpg","2017Abstracts%20%284526%29.jpg","2017Abstracts%20%284527%29.jpg","2017Abstracts%20%284528%29.jpg","2017Abstracts%20%284529%29.jpg","2017Abstracts%20%28453%29.jpg","2017Abstracts%20%284530%29.jpg","2017Abstracts%20%284531%29.jpg","2017Abstracts%20%284532%29.jpg","2017Abstracts%20%284533%29.jpg","2017Abstracts%20%284534%29.jpg","2017Abstracts%20%284535%29.jpg","2017Abstracts%20%284536%29.jpg","2017Abstracts%20%284537%29.jpg","2017Abstracts%20%284538%29.jpg","2017Abstracts%20%284539%29.jpg","2017Abstracts%20%28454%29.jpg","2017Abstracts%20%284540%29.jpg","2017Abstracts%20%284541%29.jpg","2017Abstracts%20%284542%29.jpg","2017Abstracts%20%284543%29.jpg","2017Abstracts%20%284544%29.jpg","2017Abstracts%20%284545%29.jpg","2017Abstracts%20%284546%29.jpg","2017Abstracts%20%284547%29.jpg","2017Abstracts%20%284548%29.jpg","2017Abstracts%20%284549%29.jpg","2017Abstracts%20%28455%29.jpg","2017Abstracts%20%284550%29.jpg","2017Abstracts%20%284551%29.jpg","2017Abstracts%20%284552%29.jpg","2017Abstracts%20%284553%29.jpg","2017Abstracts%20%284554%29.jpg","2017Abstracts%20%284555%29.jpg","2017Abstracts%20%284556%29.jpg","2017Abstracts%20%284557%29.jpg","2017Abstracts%20%284558%29.jpg","2017Abstracts%20%284559%29.jpg","2017Abstracts%20%28456%29.jpg","2017Abstracts%20%284560%29.jpg","2017Abstracts%20%284561%29.jpg","2017Abstracts%20%284562%29.jpg","2017Abstracts%20%284563%29.jpg","2017Abstracts%20%284564%29.jpg","2017Abstracts%20%284565%29.jpg","2017Abstracts%20%284566%29.jpg","2017Abstracts%20%284567%29.jpg","2017Abstracts%20%284568%29.jpg","2017Abstracts%20%284569%29.jpg","2017Abstracts%20%28457%29.jpg","2017Abstracts%20%284570%29.jpg","2017Abstracts%20%284571%29.jpg","2017Abstracts%20%284572%29.jpg","2017Abstracts%20%284573%29.jpg","2017Abstracts%20%284574%29.jpg","2017Abstracts%20%284575%29.jpg","2017Abstracts%20%284576%29.jpg","2017Abstracts%20%284577%29.jpg","2017Abstracts%20%284578%29.jpg","2017Abstracts%20%284579%29.jpg","2017Abstracts%20%28458%29.jpg","2017Abstracts%20%284580%29.jpg","2017Abstracts%20%284581%29.jpg","2017Abstracts%20%284582%29.jpg","2017Abstracts%20%284583%29.jpg","2017Abstracts%20%284584%29.jpg","2017Abstracts%20%284585%29.jpg","2017Abstracts%20%284586%29.jpg","2017Abstracts%20%284587%29.jpg","2017Abstracts%20%284588%29.jpg","2017Abstracts%20%284589%29.jpg","2017Abstracts%20%28459%29.jpg","2017Abstracts%20%284590%29.jpg","2017Abstracts%20%284591%29.jpg","2017Abstracts%20%284592%29.jpg","2017Abstracts%20%284593%29.jpg","2017Abstracts%20%284594%29.jpg","2017Abstracts%20%284595%29.jpg","2017Abstracts%20%284596%29.jpg","2017Abstracts%20%284597%29.jpg","2017Abstracts%20%284598%29.jpg","2017Abstracts%20%284599%29.jpg","2017Abstracts%20%2846%29.jpg","2017Abstracts%20%28460%29.jpg","2017Abstracts%20%284600%29.jpg","2017Abstracts%20%284601%29.jpg","2017Abstracts%20%284602%29.jpg","2017Abstracts%20%284603%29.jpg","2017Abstracts%20%284604%29.jpg","2017Abstracts%20%284605%29.jpg","2017Abstracts%20%284606%29.jpg","2017Abstracts%20%284607%29.jpg","2017Abstracts%20%284608%29.jpg","2017Abstracts%20%284609%29.jpg","2017Abstracts%20%28461%29.jpg","2017Abstracts%20%284610%29.jpg","2017Abstracts%20%284611%29.jpg","2017Abstracts%20%284612%29.jpg","2017Abstracts%20%284613%29.jpg","2017Abstracts%20%284614%29.jpg","2017Abstracts%20%284615%29.jpg","2017Abstracts%20%284616%29.jpg","2017Abstracts%20%284617%29.jpg","2017Abstracts%20%284618%29.jpg","2017Abstracts%20%284619%29.jpg","2017Abstracts%20%28462%29.jpg","2017Abstracts%20%284620%29.jpg","2017Abstracts%20%284621%29.jpg","2017Abstracts%20%284622%29.jpg","2017Abstracts%20%284623%29.jpg","2017Abstracts%20%284624%29.jpg","2017Abstracts%20%284625%29.jpg","2017Abstracts%20%284626%29.jpg","2017Abstracts%20%284627%29.jpg","2017Abstracts%20%284628%29.jpg","2017Abstracts%20%284629%29.jpg","2017Abstracts%20%28463%29.jpg","2017Abstracts%20%284630%29.jpg","2017Abstracts%20%284631%29.jpg","2017Abstracts%20%284632%29.jpg","2017Abstracts%20%284633%29.jpg","2017Abstracts%20%284634%29.jpg","2017Abstracts%20%284635%29.jpg","2017Abstracts%20%284636%29.jpg","2017Abstracts%20%284637%29.jpg","2017Abstracts%20%284638%29.jpg","2017Abstracts%20%284639%29.jpg","2017Abstracts%20%28464%29.jpg","2017Abstracts%20%284640%29.jpg","2017Abstracts%20%284641%29.jpg","2017Abstracts%20%284642%29.jpg","2017Abstracts%20%284643%29.jpg","2017Abstracts%20%284644%29.jpg","2017Abstracts%20%284645%29.jpg","2017Abstracts%20%284646%29.jpg","2017Abstracts%20%284647%29.jpg","2017Abstracts%20%284648%29.jpg","2017Abstracts%20%284649%29.jpg","2017Abstracts%20%28465%29.jpg","2017Abstracts%20%284650%29.jpg","2017Abstracts%20%284651%29.jpg","2017Abstracts%20%284652%29.jpg","2017Abstracts%20%284653%29.jpg","2017Abstracts%20%284654%29.jpg","2017Abstracts%20%284655%29.jpg","2017Abstracts%20%284656%29.jpg","2017Abstracts%20%284657%29.jpg","2017Abstracts%20%284658%29.jpg","2017Abstracts%20%284659%29.jpg","2017Abstracts%20%28466%29.jpg","2017Abstracts%20%284660%29.jpg","2017Abstracts%20%284661%29.jpg","2017Abstracts%20%284662%29.jpg","2017Abstracts%20%284663%29.jpg","2017Abstracts%20%284664%29.jpg","2017Abstracts%20%284665%29.jpg","2017Abstracts%20%284666%29.jpg","2017Abstracts%20%284667%29.jpg","2017Abstracts%20%284668%29.jpg","2017Abstracts%20%284669%29.jpg","2017Abstracts%20%28467%29.jpg","2017Abstracts%20%284670%29.jpg","2017Abstracts%20%284671%29.jpg","2017Abstracts%20%284672%29.jpg","2017Abstracts%20%284673%29.jpg","2017Abstracts%20%284674%29.jpg","2017Abstracts%20%284675%29.jpg","2017Abstracts%20%284676%29.jpg","2017Abstracts%20%284677%29.jpg","2017Abstracts%20%284678%29.jpg","2017Abstracts%20%284679%29.jpg","2017Abstracts%20%28468%29.jpg","2017Abstracts%20%284680%29.jpg","2017Abstracts%20%284681%29.jpg","2017Abstracts%20%284682%29.jpg","2017Abstracts%20%284683%29.jpg","2017Abstracts%20%284684%29.jpg","2017Abstracts%20%284685%29.jpg","2017Abstracts%20%284686%29.jpg","2017Abstracts%20%284687%29.jpg","2017Abstracts%20%284688%29.jpg","2017Abstracts%20%284689%29.jpg","2017Abstracts%20%28469%29.jpg","2017Abstracts%20%284690%29.jpg","2017Abstracts%20%284691%29.jpg","2017Abstracts%20%284692%29.jpg","2017Abstracts%20%284693%29.jpg","2017Abstracts%20%284694%29.jpg","2017Abstracts%20%284695%29.jpg","2017Abstracts%20%284696%29.jpg","2017Abstracts%20%284697%29.jpg","2017Abstracts%20%284698%29.jpg","2017Abstracts%20%284699%29.jpg","2017Abstracts%20%2847%29.jpg","2017Abstracts%20%28470%29.jpg","2017Abstracts%20%284700%29.jpg","2017Abstracts%20%284701%29.jpg","2017Abstracts%20%284702%29.jpg","2017Abstracts%20%284703%29.jpg","2017Abstracts%20%284704%29.jpg","2017Abstracts%20%284705%29.jpg","2017Abstracts%20%284706%29.jpg","2017Abstracts%20%284707%29.jpg","2017Abstracts%20%284708%29.jpg","2017Abstracts%20%284709%29.jpg","2017Abstracts%20%28471%29.jpg","2017Abstracts%20%284710%29.jpg","2017Abstracts%20%284711%29.jpg","2017Abstracts%20%284712%29.jpg","2017Abstracts%20%284713%29.jpg","2017Abstracts%20%284714%29.jpg","2017Abstracts%20%284715%29.jpg","2017Abstracts%20%284716%29.jpg","2017Abstracts%20%284717%29.jpg","2017Abstracts%20%284718%29.jpg","2017Abstracts%20%284719%29.jpg","2017Abstracts%20%28472%29.jpg","2017Abstracts%20%284720%29.jpg","2017Abstracts%20%284721%29.jpg","2017Abstracts%20%284722%29.jpg","2017Abstracts%20%284723%29.jpg","2017Abstracts%20%284724%29.jpg","2017Abstracts%20%284725%29.jpg","2017Abstracts%20%284726%29.jpg","2017Abstracts%20%284727%29.jpg","2017Abstracts%20%284728%29.jpg","2017Abstracts%20%284729%29.jpg","2017Abstracts%20%28473%29.jpg","2017Abstracts%20%284730%29.jpg","2017Abstracts%20%284731%29.jpg","2017Abstracts%20%284732%29.jpg","2017Abstracts%20%284733%29.jpg","2017Abstracts%20%284734%29.jpg","2017Abstracts%20%284735%29.jpg","2017Abstracts%20%284736%29.jpg","2017Abstracts%20%284737%29.jpg","2017Abstracts%20%284738%29.jpg","2017Abstracts%20%284739%29.jpg","2017Abstracts%20%28474%29.jpg","2017Abstracts%20%284740%29.jpg","2017Abstracts%20%284741%29.jpg","2017Abstracts%20%284742%29.jpg","2017Abstracts%20%284743%29.jpg","2017Abstracts%20%284744%29.jpg","2017Abstracts%20%284745%29.jpg","2017Abstracts%20%284746%29.jpg","2017Abstracts%20%284747%29.jpg","2017Abstracts%20%284748%29.jpg","2017Abstracts%20%284749%29.jpg","2017Abstracts%20%28475%29.jpg","2017Abstracts%20%284750%29.jpg","2017Abstracts%20%284751%29.jpg","2017Abstracts%20%284752%29.jpg","2017Abstracts%20%284753%29.jpg","2017Abstracts%20%284754%29.jpg","2017Abstracts%20%284755%29.jpg","2017Abstracts%20%284756%29.jpg","2017Abstracts%20%284757%29.jpg","2017Abstracts%20%284758%29.jpg","2017Abstracts%20%284759%29.jpg","2017Abstracts%20%28476%29.jpg","2017Abstracts%20%284760%29.jpg","2017Abstracts%20%284761%29.jpg","2017Abstracts%20%284762%29.jpg","2017Abstracts%20%284763%29.jpg","2017Abstracts%20%284764%29.jpg","2017Abstracts%20%284765%29.jpg","2017Abstracts%20%284766%29.jpg","2017Abstracts%20%284767%29.jpg","2017Abstracts%20%284768%29.jpg","2017Abstracts%20%284769%29.jpg","2017Abstracts%20%28477%29.jpg","2017Abstracts%20%284770%29.jpg","2017Abstracts%20%284771%29.jpg","2017Abstracts%20%284772%29.jpg","2017Abstracts%20%284773%29.jpg","2017Abstracts%20%284774%29.jpg","2017Abstracts%20%284775%29.jpg","2017Abstracts%20%284776%29.jpg","2017Abstracts%20%284777%29.jpg","2017Abstracts%20%284778%29.jpg","2017Abstracts%20%284779%29.jpg","2017Abstracts%20%28478%29.jpg","2017Abstracts%20%284780%29.jpg","2017Abstracts%20%284781%29.jpg","2017Abstracts%20%284782%29.jpg","2017Abstracts%20%284783%29.jpg","2017Abstracts%20%284784%29.jpg","2017Abstracts%20%284785%29.jpg","2017Abstracts%20%284786%29.jpg","2017Abstracts%20%284787%29.jpg","2017Abstracts%20%284788%29.jpg","2017Abstracts%20%284789%29.jpg","2017Abstracts%20%28479%29.jpg","2017Abstracts%20%284790%29.jpg","2017Abstracts%20%284791%29.jpg","2017Abstracts%20%284792%29.jpg","2017Abstracts%20%284793%29.jpg","2017Abstracts%20%284794%29.jpg","2017Abstracts%20%284795%29.jpg","2017Abstracts%20%284796%29.jpg","2017Abstracts%20%284797%29.jpg","2017Abstracts%20%284798%29.jpg","2017Abstracts%20%284799%29.jpg","2017Abstracts%20%2848%29.jpg","2017Abstracts%20%28480%29.jpg","2017Abstracts%20%284800%29.jpg","2017Abstracts%20%284801%29.jpg","2017Abstracts%20%284802%29.jpg","2017Abstracts%20%284803%29.jpg","2017Abstracts%20%284804%29.jpg","2017Abstracts%20%284805%29.jpg","2017Abstracts%20%284806%29.jpg","2017Abstracts%20%284807%29.jpg","2017Abstracts%20%284808%29.jpg","2017Abstracts%20%284809%29.jpg","2017Abstracts%20%28481%29.jpg","2017Abstracts%20%284810%29.jpg","2017Abstracts%20%284811%29.jpg","2017Abstracts%20%284812%29.jpg","2017Abstracts%20%284813%29.jpg","2017Abstracts%20%284814%29.jpg","2017Abstracts%20%284815%29.jpg","2017Abstracts%20%284816%29.jpg","2017Abstracts%20%284817%29.jpg","2017Abstracts%20%284818%29.jpg","2017Abstracts%20%284819%29.jpg","2017Abstracts%20%28482%29.jpg","2017Abstracts%20%284820%29.jpg","2017Abstracts%20%284821%29.jpg","2017Abstracts%20%284822%29.jpg","2017Abstracts%20%284823%29.jpg","2017Abstracts%20%284824%29.jpg","2017Abstracts%20%284825%29.jpg","2017Abstracts%20%284826%29.jpg","2017Abstracts%20%284827%29.jpg","2017Abstracts%20%284828%29.jpg","2017Abstracts%20%284829%29.jpg","2017Abstracts%20%28483%29.jpg","2017Abstracts%20%284830%29.jpg","2017Abstracts%20%284831%29.jpg","2017Abstracts%20%284832%29.jpg","2017Abstracts%20%284833%29.jpg","2017Abstracts%20%284834%29.jpg","2017Abstracts%20%284835%29.jpg","2017Abstracts%20%284836%29.jpg","2017Abstracts%20%284837%29.jpg","2017Abstracts%20%284838%29.jpg","2017Abstracts%20%284839%29.jpg","2017Abstracts%20%28484%29.jpg","2017Abstracts%20%284840%29.jpg","2017Abstracts%20%284841%29.jpg","2017Abstracts%20%284842%29.jpg","2017Abstracts%20%284843%29.jpg","2017Abstracts%20%284844%29.jpg","2017Abstracts%20%284845%29.jpg","2017Abstracts%20%284846%29.jpg","2017Abstracts%20%284847%29.jpg","2017Abstracts%20%284848%29.jpg","2017Abstracts%20%284849%29.jpg","2017Abstracts%20%28485%29.jpg","2017Abstracts%20%284850%29.jpg","2017Abstracts%20%284851%29.jpg","2017Abstracts%20%284852%29.jpg","2017Abstracts%20%284853%29.jpg","2017Abstracts%20%284854%29.jpg","2017Abstracts%20%284855%29.jpg","2017Abstracts%20%284856%29.jpg","2017Abstracts%20%284857%29.jpg","2017Abstracts%20%284858%29.jpg","2017Abstracts%20%284859%29.jpg","2017Abstracts%20%28486%29.jpg","2017Abstracts%20%284860%29.jpg","2017Abstracts%20%284861%29.jpg","2017Abstracts%20%284862%29.jpg","2017Abstracts%20%284863%29.jpg","2017Abstracts%20%284864%29.jpg","2017Abstracts%20%284865%29.jpg","2017Abstracts%20%284866%29.jpg","2017Abstracts%20%284867%29.jpg","2017Abstracts%20%284868%29.jpg","2017Abstracts%20%284869%29.jpg","2017Abstracts%20%28487%29.jpg","2017Abstracts%20%284870%29.jpg","2017Abstracts%20%284871%29.jpg","2017Abstracts%20%284872%29.jpg","2017Abstracts%20%284873%29.jpg","2017Abstracts%20%284874%29.jpg","2017Abstracts%20%284875%29.jpg","2017Abstracts%20%284876%29.jpg","2017Abstracts%20%284877%29.jpg","2017Abstracts%20%284878%29.jpg","2017Abstracts%20%284879%29.jpg","2017Abstracts%20%28488%29.jpg","2017Abstracts%20%284880%29.jpg","2017Abstracts%20%284881%29.jpg","2017Abstracts%20%284882%29.jpg","2017Abstracts%20%284883%29.jpg","2017Abstracts%20%284884%29.jpg","2017Abstracts%20%284885%29.jpg","2017Abstracts%20%284886%29.jpg","2017Abstracts%20%284887%29.jpg","2017Abstracts%20%284888%29.jpg","2017Abstracts%20%284889%29.jpg","2017Abstracts%20%28489%29.jpg","2017Abstracts%20%284890%29.jpg","2017Abstracts%20%284891%29.jpg","2017Abstracts%20%284892%29.jpg","2017Abstracts%20%284893%29.jpg","2017Abstracts%20%284894%29.jpg","2017Abstracts%20%284895%29.jpg","2017Abstracts%20%284896%29.jpg","2017Abstracts%20%284897%29.jpg","2017Abstracts%20%284898%29.jpg","2017Abstracts%20%284899%29.jpg","2017Abstracts%20%2849%29.jpg","2017Abstracts%20%28490%29.jpg","2017Abstracts%20%284900%29.jpg","2017Abstracts%20%284901%29.jpg","2017Abstracts%20%284902%29.jpg","2017Abstracts%20%284903%29.jpg","2017Abstracts%20%284904%29.jpg","2017Abstracts%20%284905%29.jpg","2017Abstracts%20%284906%29.jpg","2017Abstracts%20%284907%29.jpg","2017Abstracts%20%284908%29.jpg","2017Abstracts%20%284909%29.jpg","2017Abstracts%20%28491%29.jpg","2017Abstracts%20%284910%29.jpg","2017Abstracts%20%284911%29.jpg","2017Abstracts%20%284912%29.jpg","2017Abstracts%20%284913%29.jpg","2017Abstracts%20%284914%29.jpg","2017Abstracts%20%284915%29.jpg","2017Abstracts%20%284916%29.jpg","2017Abstracts%20%284917%29.jpg","2017Abstracts%20%284918%29.jpg","2017Abstracts%20%284919%29.jpg","2017Abstracts%20%28492%29.jpg","2017Abstracts%20%284920%29.jpg","2017Abstracts%20%284921%29.jpg","2017Abstracts%20%284922%29.jpg","2017Abstracts%20%284923%29.jpg","2017Abstracts%20%284924%29.jpg","2017Abstracts%20%284925%29.jpg","2017Abstracts%20%284926%29.jpg","2017Abstracts%20%284927%29.jpg","2017Abstracts%20%284928%29.jpg","2017Abstracts%20%284929%29.jpg","2017Abstracts%20%28493%29.jpg","2017Abstracts%20%284930%29.jpg","2017Abstracts%20%284931%29.jpg","2017Abstracts%20%284932%29.jpg","2017Abstracts%20%284933%29.jpg","2017Abstracts%20%284934%29.jpg","2017Abstracts%20%284935%29.jpg","2017Abstracts%20%284936%29.jpg","2017Abstracts%20%284937%29.jpg","2017Abstracts%20%284938%29.jpg","2017Abstracts%20%284939%29.jpg","2017Abstracts%20%28494%29.jpg","2017Abstracts%20%284940%29.jpg","2017Abstracts%20%284941%29.jpg","2017Abstracts%20%284942%29.jpg","2017Abstracts%20%284943%29.jpg","2017Abstracts%20%284944%29.jpg","2017Abstracts%20%284945%29.jpg","2017Abstracts%20%284946%29.jpg","2017Abstracts%20%284947%29.jpg","2017Abstracts%20%284948%29.jpg","2017Abstracts%20%284949%29.jpg","2017Abstracts%20%28495%29.jpg","2017Abstracts%20%284950%29.jpg","2017Abstracts%20%284951%29.jpg","2017Abstracts%20%284952%29.jpg","2017Abstracts%20%284953%29.jpg","2017Abstracts%20%284954%29.jpg","2017Abstracts%20%284955%29.jpg","2017Abstracts%20%284956%29.jpg","2017Abstracts%20%284957%29.jpg","2017Abstracts%20%284958%29.jpg","2017Abstracts%20%284959%29.jpg","2017Abstracts%20%28496%29.jpg","2017Abstracts%20%284960%29.jpg","2017Abstracts%20%284961%29.jpg","2017Abstracts%20%284962%29.jpg","2017Abstracts%20%284963%29.jpg","2017Abstracts%20%284964%29.jpg","2017Abstracts%20%284965%29.jpg","2017Abstracts%20%284966%29.jpg","2017Abstracts%20%284967%29.jpg","2017Abstracts%20%284968%29.jpg","2017Abstracts%20%284969%29.jpg","2017Abstracts%20%28497%29.jpg","2017Abstracts%20%284970%29.jpg","2017Abstracts%20%284971%29.jpg","2017Abstracts%20%284972%29.jpg","2017Abstracts%20%284973%29.jpg","2017Abstracts%20%284974%29.jpg","2017Abstracts%20%284975%29.jpg","2017Abstracts%20%284976%29.jpg","2017Abstracts%20%284977%29.jpg","2017Abstracts%20%284978%29.jpg","2017Abstracts%20%284979%29.jpg","2017Abstracts%20%28498%29.jpg","2017Abstracts%20%284980%29.jpg","2017Abstracts%20%284981%29.jpg","2017Abstracts%20%284982%29.jpg","2017Abstracts%20%284983%29.jpg","2017Abstracts%20%284984%29.jpg","2017Abstracts%20%284985%29.jpg","2017Abstracts%20%284986%29.jpg","2017Abstracts%20%284987%29.jpg","2017Abstracts%20%284988%29.jpg","2017Abstracts%20%284989%29.jpg","2017Abstracts%20%28499%29.jpg","2017Abstracts%20%284990%29.jpg","2017Abstracts%20%284991%29.jpg","2017Abstracts%20%284992%29.jpg","2017Abstracts%20%284993%29.jpg","2017Abstracts%20%284994%29.jpg","2017Abstracts%20%284995%29.jpg","2017Abstracts%20%284996%29.jpg","2017Abstracts%20%284997%29.jpg","2017Abstracts%20%284998%29.jpg","2017Abstracts%20%284999%29.jpg","2017Abstracts%20%285%29.jpg","2017Abstracts%20%2850%29.jpg","2017Abstracts%20%28500%29.jpg","2017Abstracts%20%285000%29.jpg","2017Abstracts%20%285001%29.jpg","2017Abstracts%20%285002%29.jpg","2017Abstracts%20%285003%29.jpg","2017Abstracts%20%285004%29.jpg","2017Abstracts%20%285005%29.jpg","2017Abstracts%20%285006%29.jpg","2017Abstracts%20%285007%29.jpg","2017Abstracts%20%285008%29.jpg","2017Abstracts%20%285009%29.jpg","2017Abstracts%20%28501%29.jpg","2017Abstracts%20%285010%29.jpg","2017Abstracts%20%285011%29.jpg","2017Abstracts%20%285012%29.jpg","2017Abstracts%20%285013%29.jpg","2017Abstracts%20%285014%29.jpg","2017Abstracts%20%285015%29.jpg","2017Abstracts%20%285016%29.jpg","2017Abstracts%20%285017%29.jpg","2017Abstracts%20%285018%29.jpg","2017Abstracts%20%285019%29.jpg","2017Abstracts%20%28502%29.jpg","2017Abstracts%20%285020%29.jpg","2017Abstracts%20%285021%29.jpg","2017Abstracts%20%285022%29.jpg","2017Abstracts%20%285023%29.jpg","2017Abstracts%20%285024%29.jpg","2017Abstracts%20%285025%29.jpg","2017Abstracts%20%285026%29.jpg","2017Abstracts%20%285027%29.jpg","2017Abstracts%20%285028%29.jpg","2017Abstracts%20%285029%29.jpg","2017Abstracts%20%28503%29.jpg","2017Abstracts%20%285030%29.jpg","2017Abstracts%20%285031%29.jpg","2017Abstracts%20%285032%29.jpg","2017Abstracts%20%285033%29.jpg","2017Abstracts%20%285034%29.jpg","2017Abstracts%20%285035%29.jpg","2017Abstracts%20%285036%29.jpg","2017Abstracts%20%285037%29.jpg","2017Abstracts%20%285038%29.jpg","2017Abstracts%20%285039%29.jpg","2017Abstracts%20%28504%29.jpg","2017Abstracts%20%285040%29.jpg","2017Abstracts%20%285041%29.jpg","2017Abstracts%20%285042%29.jpg","2017Abstracts%20%285043%29.jpg","2017Abstracts%20%285044%29.jpg","2017Abstracts%20%285045%29.jpg","2017Abstracts%20%285046%29.jpg","2017Abstracts%20%285047%29.jpg","2017Abstracts%20%285048%29.jpg","2017Abstracts%20%285049%29.jpg","2017Abstracts%20%28505%29.jpg","2017Abstracts%20%285050%29.jpg","2017Abstracts%20%285051%29.jpg","2017Abstracts%20%285052%29.jpg","2017Abstracts%20%285053%29.jpg","2017Abstracts%20%285054%29.jpg","2017Abstracts%20%285055%29.jpg","2017Abstracts%20%285056%29.jpg","2017Abstracts%20%285057%29.jpg","2017Abstracts%20%285058%29.jpg","2017Abstracts%20%285059%29.jpg","2017Abstracts%20%28506%29.jpg","2017Abstracts%20%285060%29.jpg","2017Abstracts%20%285061%29.jpg","2017Abstracts%20%285062%29.jpg","2017Abstracts%20%285063%29.jpg","2017Abstracts%20%285064%29.jpg","2017Abstracts%20%285065%29.jpg","2017Abstracts%20%285066%29.jpg","2017Abstracts%20%285067%29.jpg","2017Abstracts%20%285068%29.jpg","2017Abstracts%20%285069%29.jpg","2017Abstracts%20%28507%29.jpg","2017Abstracts%20%285070%29.jpg","2017Abstracts%20%285071%29.jpg","2017Abstracts%20%285072%29.jpg","2017Abstracts%20%285073%29.jpg","2017Abstracts%20%285074%29.jpg","2017Abstracts%20%285075%29.jpg","2017Abstracts%20%285076%29.jpg","2017Abstracts%20%285077%29.jpg","2017Abstracts%20%285078%29.jpg","2017Abstracts%20%285079%29.jpg","2017Abstracts%20%28508%29.jpg","2017Abstracts%20%285080%29.jpg","2017Abstracts%20%285081%29.jpg","2017Abstracts%20%285082%29.jpg","2017Abstracts%20%285083%29.jpg","2017Abstracts%20%285084%29.jpg","2017Abstracts%20%285085%29.jpg","2017Abstracts%20%285086%29.jpg","2017Abstracts%20%285087%29.jpg","2017Abstracts%20%285088%29.jpg","2017Abstracts%20%285089%29.jpg","2017Abstracts%20%28509%29.jpg","2017Abstracts%20%285090%29.jpg","2017Abstracts%20%285091%29.jpg","2017Abstracts%20%285092%29.jpg","2017Abstracts%20%285093%29.jpg","2017Abstracts%20%285094%29.jpg","2017Abstracts%20%285095%29.jpg","2017Abstracts%20%285096%29.jpg","2017Abstracts%20%285097%29.jpg","2017Abstracts%20%285098%29.jpg","2017Abstracts%20%285099%29.jpg","2017Abstracts%20%2851%29.jpg","2017Abstracts%20%28510%29.jpg","2017Abstracts%20%285100%29.jpg","2017Abstracts%20%285101%29.jpg","2017Abstracts%20%285102%29.jpg","2017Abstracts%20%285103%29.jpg","2017Abstracts%20%285104%29.jpg","2017Abstracts%20%285105%29.jpg","2017Abstracts%20%285106%29.jpg","2017Abstracts%20%285107%29.jpg","2017Abstracts%20%285108%29.jpg","2017Abstracts%20%285109%29.jpg","2017Abstracts%20%28511%29.jpg","2017Abstracts%20%285110%29.jpg","2017Abstracts%20%285111%29.jpg","2017Abstracts%20%285112%29.jpg","2017Abstracts%20%285113%29.jpg","2017Abstracts%20%285114%29.jpg","2017Abstracts%20%285115%29.jpg","2017Abstracts%20%285116%29.jpg","2017Abstracts%20%285117%29.jpg","2017Abstracts%20%285118%29.jpg","2017Abstracts%20%285119%29.jpg","2017Abstracts%20%28512%29.jpg","2017Abstracts%20%285120%29.jpg","2017Abstracts%20%285121%29.jpg","2017Abstracts%20%285122%29.jpg","2017Abstracts%20%285123%29.jpg","2017Abstracts%20%285124%29.jpg","2017Abstracts%20%285125%29.jpg","2017Abstracts%20%285126%29.jpg","2017Abstracts%20%285127%29.jpg","2017Abstracts%20%285128%29.jpg","2017Abstracts%20%285129%29.jpg","2017Abstracts%20%28513%29.jpg","2017Abstracts%20%285130%29.jpg","2017Abstracts%20%285131%29.jpg","2017Abstracts%20%285132%29.jpg","2017Abstracts%20%285133%29.jpg","2017Abstracts%20%285134%29.jpg","2017Abstracts%20%285135%29.jpg","2017Abstracts%20%285136%29.jpg","2017Abstracts%20%285137%29.jpg","2017Abstracts%20%285138%29.jpg","2017Abstracts%20%285139%29.jpg","2017Abstracts%20%28514%29.jpg","2017Abstracts%20%285140%29.jpg","2017Abstracts%20%285141%29.jpg","2017Abstracts%20%285142%29.jpg","2017Abstracts%20%285143%29.jpg","2017Abstracts%20%285144%29.jpg","2017Abstracts%20%285145%29.jpg","2017Abstracts%20%285146%29.jpg","2017Abstracts%20%285147%29.jpg","2017Abstracts%20%285148%29.jpg","2017Abstracts%20%285149%29.jpg","2017Abstracts%20%28515%29.jpg","2017Abstracts%20%285150%29.jpg","2017Abstracts%20%285151%29.jpg","2017Abstracts%20%285152%29.jpg","2017Abstracts%20%285153%29.jpg","2017Abstracts%20%285154%29.jpg","2017Abstracts%20%285155%29.jpg","2017Abstracts%20%285156%29.jpg","2017Abstracts%20%285157%29.jpg","2017Abstracts%20%285158%29.jpg","2017Abstracts%20%285159%29.jpg","2017Abstracts%20%28516%29.jpg","2017Abstracts%20%285160%29.jpg","2017Abstracts%20%285161%29.jpg","2017Abstracts%20%285162%29.jpg","2017Abstracts%20%285163%29.jpg","2017Abstracts%20%285164%29.jpg","2017Abstracts%20%285165%29.jpg","2017Abstracts%20%285166%29.jpg","2017Abstracts%20%285167%29.jpg","2017Abstracts%20%285168%29.jpg","2017Abstracts%20%285169%29.jpg","2017Abstracts%20%28517%29.jpg","2017Abstracts%20%285170%29.jpg","2017Abstracts%20%285171%29.jpg","2017Abstracts%20%285172%29.jpg","2017Abstracts%20%285173%29.jpg","2017Abstracts%20%285174%29.jpg","2017Abstracts%20%285175%29.jpg","2017Abstracts%20%285176%29.jpg","2017Abstracts%20%285177%29.jpg","2017Abstracts%20%285178%29.jpg","2017Abstracts%20%285179%29.jpg","2017Abstracts%20%28518%29.jpg","2017Abstracts%20%285180%29.jpg","2017Abstracts%20%285181%29.jpg","2017Abstracts%20%285182%29.jpg","2017Abstracts%20%285183%29.jpg","2017Abstracts%20%285184%29.jpg","2017Abstracts%20%285185%29.jpg","2017Abstracts%20%285186%29.jpg","2017Abstracts%20%285187%29.jpg","2017Abstracts%20%285188%29.jpg","2017Abstracts%20%285189%29.jpg","2017Abstracts%20%28519%29.jpg","2017Abstracts%20%285190%29.jpg","2017Abstracts%20%285191%29.jpg","2017Abstracts%20%285192%29.jpg","2017Abstracts%20%285193%29.jpg","2017Abstracts%20%285194%29.jpg","2017Abstracts%20%285195%29.jpg","2017Abstracts%20%285196%29.jpg","2017Abstracts%20%285197%29.jpg","2017Abstracts%20%285198%29.jpg","2017Abstracts%20%285199%29.jpg","2017Abstracts%20%2852%29.jpg","2017Abstracts%20%28520%29.jpg","2017Abstracts%20%285200%29.jpg","2017Abstracts%20%285201%29.jpg","2017Abstracts%20%285202%29.jpg","2017Abstracts%20%285203%29.jpg","2017Abstracts%20%285204%29.jpg","2017Abstracts%20%285205%29.jpg","2017Abstracts%20%285206%29.jpg","2017Abstracts%20%285207%29.jpg","2017Abstracts%20%285208%29.jpg","2017Abstracts%20%285209%29.jpg","2017Abstracts%20%28521%29.jpg","2017Abstracts%20%285210%29.jpg","2017Abstracts%20%285211%29.jpg","2017Abstracts%20%285212%29.jpg","2017Abstracts%20%285213%29.jpg","2017Abstracts%20%285214%29.jpg","2017Abstracts%20%285215%29.jpg","2017Abstracts%20%285216%29.jpg","2017Abstracts%20%285217%29.jpg","2017Abstracts%20%285218%29.jpg","2017Abstracts%20%285219%29.jpg","2017Abstracts%20%28522%29.jpg","2017Abstracts%20%285220%29.jpg","2017Abstracts%20%285221%29.jpg","2017Abstracts%20%285222%29.jpg","2017Abstracts%20%285223%29.jpg","2017Abstracts%20%285224%29.jpg","2017Abstracts%20%285225%29.jpg","2017Abstracts%20%285226%29.jpg","2017Abstracts%20%285227%29.jpg","2017Abstracts%20%285228%29.jpg","2017Abstracts%20%285229%29.jpg","2017Abstracts%20%28523%29.jpg","2017Abstracts%20%285230%29.jpg","2017Abstracts%20%285231%29.jpg","2017Abstracts%20%285232%29.jpg","2017Abstracts%20%285233%29.jpg","2017Abstracts%20%285234%29.jpg","2017Abstracts%20%285235%29.jpg","2017Abstracts%20%285236%29.jpg","2017Abstracts%20%285237%29.jpg","2017Abstracts%20%285238%29.jpg","2017Abstracts%20%285239%29.jpg","2017Abstracts%20%28524%29.jpg","2017Abstracts%20%285240%29.jpg","2017Abstracts%20%285241%29.jpg","2017Abstracts%20%285242%29.jpg","2017Abstracts%20%285243%29.jpg","2017Abstracts%20%285244%29.jpg","2017Abstracts%20%285245%29.jpg","2017Abstracts%20%285246%29.jpg","2017Abstracts%20%285247%29.jpg","2017Abstracts%20%285248%29.jpg","2017Abstracts%20%285249%29.jpg","2017Abstracts%20%28525%29.jpg","2017Abstracts%20%285250%29.jpg","2017Abstracts%20%285251%29.jpg","2017Abstracts%20%285252%29.jpg","2017Abstracts%20%285253%29.jpg","2017Abstracts%20%285254%29.jpg","2017Abstracts%20%285255%29.jpg","2017Abstracts%20%285256%29.jpg","2017Abstracts%20%285257%29.jpg","2017Abstracts%20%285258%29.jpg","2017Abstracts%20%285259%29.jpg","2017Abstracts%20%28526%29.jpg","2017Abstracts%20%285260%29.jpg","2017Abstracts%20%285261%29.jpg","2017Abstracts%20%285262%29.jpg","2017Abstracts%20%285263%29.jpg","2017Abstracts%20%285264%29.jpg","2017Abstracts%20%285265%29.jpg","2017Abstracts%20%285266%29.jpg","2017Abstracts%20%285267%29.jpg","2017Abstracts%20%285268%29.jpg","2017Abstracts%20%285269%29.jpg","2017Abstracts%20%28527%29.jpg","2017Abstracts%20%285270%29.jpg","2017Abstracts%20%285271%29.jpg","2017Abstracts%20%285272%29.jpg","2017Abstracts%20%285273%29.jpg","2017Abstracts%20%285274%29.jpg","2017Abstracts%20%285275%29.jpg","2017Abstracts%20%285276%29.jpg","2017Abstracts%20%285277%29.jpg","2017Abstracts%20%285278%29.jpg","2017Abstracts%20%285279%29.jpg","2017Abstracts%20%28528%29.jpg","2017Abstracts%20%285280%29.jpg","2017Abstracts%20%285281%29.jpg","2017Abstracts%20%285282%29.jpg","2017Abstracts%20%285283%29.jpg","2017Abstracts%20%285284%29.jpg","2017Abstracts%20%285285%29.jpg","2017Abstracts%20%285286%29.jpg","2017Abstracts%20%285287%29.jpg","2017Abstracts%20%285288%29.jpg","2017Abstracts%20%285289%29.jpg","2017Abstracts%20%28529%29.jpg","2017Abstracts%20%285290%29.jpg","2017Abstracts%20%285291%29.jpg","2017Abstracts%20%285292%29.jpg","2017Abstracts%20%285293%29.jpg","2017Abstracts%20%285294%29.jpg","2017Abstracts%20%285295%29.jpg","2017Abstracts%20%285296%29.jpg","2017Abstracts%20%285297%29.jpg","2017Abstracts%20%285298%29.jpg","2017Abstracts%20%285299%29.jpg","2017Abstracts%20%2853%29.jpg","2017Abstracts%20%28530%29.jpg","2017Abstracts%20%285300%29.jpg","2017Abstracts%20%285301%29.jpg","2017Abstracts%20%285302%29.jpg","2017Abstracts%20%285303%29.jpg","2017Abstracts%20%285304%29.jpg","2017Abstracts%20%285305%29.jpg","2017Abstracts%20%285306%29.jpg","2017Abstracts%20%285307%29.jpg","2017Abstracts%20%285308%29.jpg","2017Abstracts%20%285309%29.jpg","2017Abstracts%20%28531%29.jpg","2017Abstracts%20%285310%29.jpg","2017Abstracts%20%285311%29.jpg","2017Abstracts%20%285312%29.jpg","2017Abstracts%20%285313%29.jpg","2017Abstracts%20%285314%29.jpg","2017Abstracts%20%285315%29.jpg","2017Abstracts%20%285316%29.jpg","2017Abstracts%20%285317%29.jpg","2017Abstracts%20%285318%29.jpg","2017Abstracts%20%285319%29.jpg","2017Abstracts%20%28532%29.jpg","2017Abstracts%20%285320%29.jpg","2017Abstracts%20%285321%29.jpg","2017Abstracts%20%285322%29.jpg","2017Abstracts%20%285323%29.jpg","2017Abstracts%20%285324%29.jpg","2017Abstracts%20%285325%29.jpg","2017Abstracts%20%285326%29.jpg","2017Abstracts%20%285327%29.jpg","2017Abstracts%20%285328%29.jpg","2017Abstracts%20%285329%29.jpg","2017Abstracts%20%28533%29.jpg","2017Abstracts%20%285330%29.jpg","2017Abstracts%20%285331%29.jpg","2017Abstracts%20%285332%29.jpg","2017Abstracts%20%285333%29.jpg","2017Abstracts%20%285334%29.jpg","2017Abstracts%20%285335%29.jpg","2017Abstracts%20%285336%29.jpg","2017Abstracts%20%285337%29.jpg","2017Abstracts%20%285338%29.jpg","2017Abstracts%20%285339%29.jpg","2017Abstracts%20%28534%29.jpg","2017Abstracts%20%285340%29.jpg","2017Abstracts%20%285341%29.jpg","2017Abstracts%20%285342%29.jpg","2017Abstracts%20%285343%29.jpg","2017Abstracts%20%285344%29.jpg","2017Abstracts%20%285345%29.jpg","2017Abstracts%20%285346%29.jpg","2017Abstracts%20%285347%29.jpg","2017Abstracts%20%285348%29.jpg","2017Abstracts%20%285349%29.jpg","2017Abstracts%20%28535%29.jpg","2017Abstracts%20%285350%29.jpg","2017Abstracts%20%285351%29.jpg","2017Abstracts%20%285352%29.jpg","2017Abstracts%20%285353%29.jpg","2017Abstracts%20%285354%29.jpg","2017Abstracts%20%285355%29.jpg","2017Abstracts%20%285356%29.jpg","2017Abstracts%20%285357%29.jpg","2017Abstracts%20%285358%29.jpg","2017Abstracts%20%285359%29.jpg","2017Abstracts%20%28536%29.jpg","2017Abstracts%20%285360%29.jpg","2017Abstracts%20%285361%29.jpg","2017Abstracts%20%285362%29.jpg","2017Abstracts%20%285363%29.jpg","2017Abstracts%20%285364%29.jpg","2017Abstracts%20%285365%29.jpg","2017Abstracts%20%285366%29.jpg","2017Abstracts%20%285367%29.jpg","2017Abstracts%20%285368%29.jpg","2017Abstracts%20%285369%29.jpg","2017Abstracts%20%28537%29.jpg","2017Abstracts%20%285370%29.jpg","2017Abstracts%20%285371%29.jpg","2017Abstracts%20%285372%29.jpg","2017Abstracts%20%285373%29.jpg","2017Abstracts%20%285374%29.jpg","2017Abstracts%20%285375%29.jpg","2017Abstracts%20%285376%29.jpg","2017Abstracts%20%285377%29.jpg","2017Abstracts%20%285378%29.jpg","2017Abstracts%20%285379%29.jpg","2017Abstracts%20%28538%29.jpg","2017Abstracts%20%285380%29.jpg","2017Abstracts%20%285381%29.jpg","2017Abstracts%20%285382%29.jpg","2017Abstracts%20%285383%29.jpg","2017Abstracts%20%285384%29.jpg","2017Abstracts%20%285385%29.jpg","2017Abstracts%20%285386%29.jpg","2017Abstracts%20%285387%29.jpg","2017Abstracts%20%285388%29.jpg","2017Abstracts%20%285389%29.jpg","2017Abstracts%20%28539%29.jpg","2017Abstracts%20%285390%29.jpg","2017Abstracts%20%285391%29.jpg","2017Abstracts%20%285392%29.jpg","2017Abstracts%20%285393%29.jpg","2017Abstracts%20%285394%29.jpg","2017Abstracts%20%285395%29.jpg","2017Abstracts%20%285396%29.jpg","2017Abstracts%20%285397%29.jpg","2017Abstracts%20%285398%29.jpg","2017Abstracts%20%285399%29.jpg","2017Abstracts%20%2854%29.jpg","2017Abstracts%20%28540%29.jpg","2017Abstracts%20%285400%29.jpg","2017Abstracts%20%285401%29.jpg","2017Abstracts%20%285402%29.jpg","2017Abstracts%20%285403%29.jpg","2017Abstracts%20%285404%29.jpg","2017Abstracts%20%285405%29.jpg","2017Abstracts%20%285406%29.jpg","2017Abstracts%20%285407%29.jpg","2017Abstracts%20%285408%29.jpg","2017Abstracts%20%285409%29.jpg","2017Abstracts%20%28541%29.jpg","2017Abstracts%20%285410%29.jpg","2017Abstracts%20%285411%29.jpg","2017Abstracts%20%285412%29.jpg","2017Abstracts%20%285413%29.jpg","2017Abstracts%20%285414%29.jpg","2017Abstracts%20%285415%29.jpg","2017Abstracts%20%285416%29.jpg","2017Abstracts%20%285417%29.jpg","2017Abstracts%20%285418%29.jpg","2017Abstracts%20%285419%29.jpg","2017Abstracts%20%28542%29.jpg","2017Abstracts%20%285420%29.jpg","2017Abstracts%20%285421%29.jpg","2017Abstracts%20%285422%29.jpg","2017Abstracts%20%285423%29.jpg","2017Abstracts%20%285424%29.jpg","2017Abstracts%20%285425%29.jpg","2017Abstracts%20%285426%29.jpg","2017Abstracts%20%285427%29.jpg","2017Abstracts%20%285428%29.jpg","2017Abstracts%20%285429%29.jpg","2017Abstracts%20%28543%29.jpg","2017Abstracts%20%285430%29.jpg","2017Abstracts%20%285431%29.jpg","2017Abstracts%20%285432%29.jpg","2017Abstracts%20%285433%29.jpg","2017Abstracts%20%285434%29.jpg","2017Abstracts%20%285435%29.jpg","2017Abstracts%20%285436%29.jpg","2017Abstracts%20%285437%29.jpg","2017Abstracts%20%285438%29.jpg","2017Abstracts%20%285439%29.jpg","2017Abstracts%20%28544%29.jpg","2017Abstracts%20%285440%29.jpg","2017Abstracts%20%285441%29.jpg","2017Abstracts%20%285442%29.jpg","2017Abstracts%20%285443%29.jpg","2017Abstracts%20%285444%29.jpg","2017Abstracts%20%285445%29.jpg","2017Abstracts%20%285446%29.jpg","2017Abstracts%20%285447%29.jpg","2017Abstracts%20%285448%29.jpg","2017Abstracts%20%285449%29.jpg","2017Abstracts%20%28545%29.jpg","2017Abstracts%20%285450%29.jpg","2017Abstracts%20%285451%29.jpg","2017Abstracts%20%285452%29.jpg","2017Abstracts%20%285453%29.jpg","2017Abstracts%20%285454%29.jpg","2017Abstracts%20%285455%29.jpg","2017Abstracts%20%285456%29.jpg","2017Abstracts%20%285457%29.jpg","2017Abstracts%20%285458%29.jpg","2017Abstracts%20%285459%29.jpg","2017Abstracts%20%28546%29.jpg","2017Abstracts%20%285460%29.jpg","2017Abstracts%20%285461%29.jpg","2017Abstracts%20%285462%29.jpg","2017Abstracts%20%285463%29.jpg","2017Abstracts%20%285464%29.jpg","2017Abstracts%20%285465%29.jpg","2017Abstracts%20%285466%29.jpg","2017Abstracts%20%285467%29.jpg","2017Abstracts%20%285468%29.jpg","2017Abstracts%20%285469%29.jpg","2017Abstracts%20%28547%29.jpg","2017Abstracts%20%285470%29.jpg","2017Abstracts%20%285471%29.jpg","2017Abstracts%20%285472%29.jpg","2017Abstracts%20%285473%29.jpg","2017Abstracts%20%285474%29.jpg","2017Abstracts%20%285475%29.jpg","2017Abstracts%20%285476%29.jpg","2017Abstracts%20%285477%29.jpg","2017Abstracts%20%285478%29.jpg","2017Abstracts%20%285479%29.jpg","2017Abstracts%20%28548%29.jpg","2017Abstracts%20%285480%29.jpg","2017Abstracts%20%285481%29.jpg","2017Abstracts%20%285482%29.jpg","2017Abstracts%20%285483%29.jpg","2017Abstracts%20%285484%29.jpg","2017Abstracts%20%285485%29.jpg","2017Abstracts%20%285486%29.jpg","2017Abstracts%20%285487%29.jpg","2017Abstracts%20%285488%29.jpg","2017Abstracts%20%285489%29.jpg","2017Abstracts%20%28549%29.jpg","2017Abstracts%20%285490%29.jpg","2017Abstracts%20%285491%29.jpg","2017Abstracts%20%285492%29.jpg","2017Abstracts%20%285493%29.jpg","2017Abstracts%20%285494%29.jpg","2017Abstracts%20%285495%29.jpg","2017Abstracts%20%285496%29.jpg","2017Abstracts%20%285497%29.jpg","2017Abstracts%20%285498%29.jpg","2017Abstracts%20%285499%29.jpg","2017Abstracts%20%2855%29.jpg","2017Abstracts%20%28550%29.jpg","2017Abstracts%20%285500%29.jpg","2017Abstracts%20%285501%29.jpg","2017Abstracts%20%285502%29.jpg","2017Abstracts%20%285503%29.jpg","2017Abstracts%20%285504%29.jpg","2017Abstracts%20%285505%29.jpg","2017Abstracts%20%285506%29.jpg","2017Abstracts%20%285507%29.jpg","2017Abstracts%20%285508%29.jpg","2017Abstracts%20%285509%29.jpg","2017Abstracts%20%28551%29.jpg","2017Abstracts%20%285510%29.jpg","2017Abstracts%20%285511%29.jpg","2017Abstracts%20%285512%29.jpg","2017Abstracts%20%285513%29.jpg","2017Abstracts%20%285514%29.jpg","2017Abstracts%20%285515%29.jpg","2017Abstracts%20%285516%29.jpg","2017Abstracts%20%285517%29.jpg","2017Abstracts%20%285518%29.jpg","2017Abstracts%20%285519%29.jpg","2017Abstracts%20%28552%29.jpg","2017Abstracts%20%285520%29.jpg","2017Abstracts%20%285521%29.jpg","2017Abstracts%20%285522%29.jpg","2017Abstracts%20%285523%29.jpg","2017Abstracts%20%285524%29.jpg","2017Abstracts%20%285525%29.jpg","2017Abstracts%20%285526%29.jpg","2017Abstracts%20%285527%29.jpg","2017Abstracts%20%285528%29.jpg","2017Abstracts%20%285529%29.jpg","2017Abstracts%20%28553%29.jpg","2017Abstracts%20%285530%29.jpg","2017Abstracts%20%285531%29.jpg","2017Abstracts%20%285532%29.jpg","2017Abstracts%20%285533%29.jpg","2017Abstracts%20%285534%29.jpg","2017Abstracts%20%285535%29.jpg","2017Abstracts%20%285536%29.jpg","2017Abstracts%20%285537%29.jpg","2017Abstracts%20%285538%29.jpg","2017Abstracts%20%285539%29.jpg","2017Abstracts%20%28554%29.jpg","2017Abstracts%20%285540%29.jpg","2017Abstracts%20%285541%29.jpg","2017Abstracts%20%285542%29.jpg","2017Abstracts%20%285543%29.jpg","2017Abstracts%20%285544%29.jpg","2017Abstracts%20%285545%29.jpg","2017Abstracts%20%285546%29.jpg","2017Abstracts%20%285547%29.jpg","2017Abstracts%20%285548%29.jpg","2017Abstracts%20%285549%29.jpg","2017Abstracts%20%28555%29.jpg","2017Abstracts%20%285550%29.jpg","2017Abstracts%20%285551%29.jpg","2017Abstracts%20%285552%29.jpg","2017Abstracts%20%285553%29.jpg","2017Abstracts%20%285554%29.jpg","2017Abstracts%20%285555%29.jpg","2017Abstracts%20%285556%29.jpg","2017Abstracts%20%285557%29.jpg","2017Abstracts%20%285558%29.jpg","2017Abstracts%20%285559%29.jpg","2017Abstracts%20%28556%29.jpg","2017Abstracts%20%285560%29.jpg","2017Abstracts%20%285561%29.jpg","2017Abstracts%20%285562%29.jpg","2017Abstracts%20%285563%29.jpg","2017Abstracts%20%285564%29.jpg","2017Abstracts%20%285565%29.jpg","2017Abstracts%20%285566%29.jpg","2017Abstracts%20%285567%29.jpg","2017Abstracts%20%285568%29.jpg","2017Abstracts%20%285569%29.jpg","2017Abstracts%20%28557%29.jpg","2017Abstracts%20%285570%29.jpg","2017Abstracts%20%285571%29.jpg","2017Abstracts%20%285572%29.jpg","2017Abstracts%20%285573%29.jpg","2017Abstracts%20%285574%29.jpg","2017Abstracts%20%285575%29.jpg","2017Abstracts%20%285576%29.jpg","2017Abstracts%20%285577%29.jpg","2017Abstracts%20%285578%29.jpg","2017Abstracts%20%285579%29.jpg","2017Abstracts%20%28558%29.jpg","2017Abstracts%20%285580%29.jpg","2017Abstracts%20%285581%29.jpg","2017Abstracts%20%285582%29.jpg","2017Abstracts%20%285583%29.jpg","2017Abstracts%20%285584%29.jpg","2017Abstracts%20%285585%29.jpg","2017Abstracts%20%285586%29.jpg","2017Abstracts%20%285587%29.jpg","2017Abstracts%20%285588%29.jpg","2017Abstracts%20%285589%29.jpg","2017Abstracts%20%28559%29.jpg","2017Abstracts%20%285590%29.jpg","2017Abstracts%20%285591%29.jpg","2017Abstracts%20%285592%29.jpg","2017Abstracts%20%285593%29.jpg","2017Abstracts%20%285594%29.jpg","2017Abstracts%20%285595%29.jpg","2017Abstracts%20%285596%29.jpg","2017Abstracts%20%285597%29.jpg","2017Abstracts%20%285598%29.jpg","2017Abstracts%20%285599%29.jpg","2017Abstracts%20%2856%29.jpg","2017Abstracts%20%28560%29.jpg","2017Abstracts%20%285600%29.jpg","2017Abstracts%20%285601%29.jpg","2017Abstracts%20%285602%29.jpg","2017Abstracts%20%285603%29.jpg","2017Abstracts%20%285604%29.jpg","2017Abstracts%20%285605%29.jpg","2017Abstracts%20%285606%29.jpg","2017Abstracts%20%285607%29.jpg","2017Abstracts%20%285608%29.jpg","2017Abstracts%20%285609%29.jpg","2017Abstracts%20%28561%29.jpg","2017Abstracts%20%285610%29.jpg","2017Abstracts%20%285611%29.jpg","2017Abstracts%20%285612%29.jpg","2017Abstracts%20%285613%29.jpg","2017Abstracts%20%285614%29.jpg","2017Abstracts%20%285615%29.jpg","2017Abstracts%20%285616%29.jpg","2017Abstracts%20%285617%29.jpg","2017Abstracts%20%285618%29.jpg","2017Abstracts%20%285619%29.jpg","2017Abstracts%20%28562%29.jpg","2017Abstracts%20%285620%29.jpg","2017Abstracts%20%285621%29.jpg","2017Abstracts%20%285622%29.jpg","2017Abstracts%20%285623%29.jpg","2017Abstracts%20%285624%29.jpg","2017Abstracts%20%285625%29.jpg","2017Abstracts%20%285626%29.jpg","2017Abstracts%20%285627%29.jpg","2017Abstracts%20%285628%29.jpg","2017Abstracts%20%285629%29.jpg","2017Abstracts%20%28563%29.jpg","2017Abstracts%20%285630%29.jpg","2017Abstracts%20%285631%29.jpg","2017Abstracts%20%285632%29.jpg","2017Abstracts%20%285633%29.jpg","2017Abstracts%20%285634%29.jpg","2017Abstracts%20%285635%29.jpg","2017Abstracts%20%285636%29.jpg","2017Abstracts%20%285637%29.jpg","2017Abstracts%20%285638%29.jpg","2017Abstracts%20%285639%29.jpg","2017Abstracts%20%28564%29.jpg","2017Abstracts%20%285640%29.jpg","2017Abstracts%20%285641%29.jpg","2017Abstracts%20%285642%29.jpg","2017Abstracts%20%285643%29.jpg","2017Abstracts%20%285644%29.jpg","2017Abstracts%20%285645%29.jpg","2017Abstracts%20%285646%29.jpg","2017Abstracts%20%285647%29.jpg","2017Abstracts%20%285648%29.jpg","2017Abstracts%20%285649%29.jpg","2017Abstracts%20%28565%29.jpg","2017Abstracts%20%285650%29.jpg","2017Abstracts%20%285651%29.jpg","2017Abstracts%20%285652%29.jpg","2017Abstracts%20%285653%29.jpg","2017Abstracts%20%285654%29.jpg","2017Abstracts%20%285655%29.jpg","2017Abstracts%20%285656%29.jpg","2017Abstracts%20%285657%29.jpg","2017Abstracts%20%285658%29.jpg","2017Abstracts%20%285659%29.jpg","2017Abstracts%20%28566%29.jpg","2017Abstracts%20%285660%29.jpg","2017Abstracts%20%285661%29.jpg","2017Abstracts%20%285662%29.jpg","2017Abstracts%20%285663%29.jpg","2017Abstracts%20%285664%29.jpg","2017Abstracts%20%285665%29.jpg","2017Abstracts%20%285666%29.jpg","2017Abstracts%20%285667%29.jpg","2017Abstracts%20%285668%29.jpg","2017Abstracts%20%285669%29.jpg","2017Abstracts%20%28567%29.jpg","2017Abstracts%20%285670%29.jpg","2017Abstracts%20%285671%29.jpg","2017Abstracts%20%285672%29.jpg","2017Abstracts%20%285673%29.jpg","2017Abstracts%20%285674%29.jpg","2017Abstracts%20%285675%29.jpg","2017Abstracts%20%285676%29.jpg","2017Abstracts%20%285677%29.jpg","2017Abstracts%20%285678%29.jpg","2017Abstracts%20%285679%29.jpg","2017Abstracts%20%28568%29.jpg","2017Abstracts%20%285680%29.jpg","2017Abstracts%20%285681%29.jpg","2017Abstracts%20%285682%29.jpg","2017Abstracts%20%285683%29.jpg","2017Abstracts%20%285684%29.jpg","2017Abstracts%20%285685%29.jpg","2017Abstracts%20%285686%29.jpg","2017Abstracts%20%285687%29.jpg","2017Abstracts%20%285688%29.jpg","2017Abstracts%20%285689%29.jpg","2017Abstracts%20%28569%29.jpg","2017Abstracts%20%285690%29.jpg","2017Abstracts%20%285691%29.jpg","2017Abstracts%20%285692%29.jpg","2017Abstracts%20%285693%29.jpg","2017Abstracts%20%285694%29.jpg","2017Abstracts%20%285695%29.jpg","2017Abstracts%20%285696%29.jpg","2017Abstracts%20%285697%29.jpg","2017Abstracts%20%285698%29.jpg","2017Abstracts%20%285699%29.jpg","2017Abstracts%20%2857%29.jpg","2017Abstracts%20%28570%29.jpg","2017Abstracts%20%285700%29.jpg","2017Abstracts%20%285701%29.jpg","2017Abstracts%20%285702%29.jpg","2017Abstracts%20%285703%29.jpg","2017Abstracts%20%285704%29.jpg","2017Abstracts%20%285705%29.jpg","2017Abstracts%20%285706%29.jpg","2017Abstracts%20%285707%29.jpg","2017Abstracts%20%285708%29.jpg","2017Abstracts%20%285709%29.jpg","2017Abstracts%20%28571%29.jpg","2017Abstracts%20%285710%29.jpg","2017Abstracts%20%285711%29.jpg","2017Abstracts%20%285712%29.jpg","2017Abstracts%20%285713%29.jpg","2017Abstracts%20%285714%29.jpg","2017Abstracts%20%285715%29.jpg","2017Abstracts%20%285716%29.jpg","2017Abstracts%20%285717%29.jpg","2017Abstracts%20%285718%29.jpg","2017Abstracts%20%285719%29.jpg","2017Abstracts%20%28572%29.jpg","2017Abstracts%20%285720%29.jpg","2017Abstracts%20%285721%29.jpg","2017Abstracts%20%285722%29.jpg","2017Abstracts%20%285723%29.jpg","2017Abstracts%20%285724%29.jpg","2017Abstracts%20%285725%29.jpg","2017Abstracts%20%285726%29.jpg","2017Abstracts%20%285727%29.jpg","2017Abstracts%20%285728%29.jpg","2017Abstracts%20%285729%29.jpg","2017Abstracts%20%28573%29.jpg","2017Abstracts%20%285730%29.jpg","2017Abstracts%20%285731%29.jpg","2017Abstracts%20%285732%29.jpg","2017Abstracts%20%285733%29.jpg","2017Abstracts%20%285734%29.jpg","2017Abstracts%20%285735%29.jpg","2017Abstracts%20%285736%29.jpg","2017Abstracts%20%285737%29.jpg","2017Abstracts%20%285738%29.jpg","2017Abstracts%20%285739%29.jpg","2017Abstracts%20%28574%29.jpg","2017Abstracts%20%285740%29.jpg","2017Abstracts%20%285741%29.jpg","2017Abstracts%20%285742%29.jpg","2017Abstracts%20%285743%29.jpg","2017Abstracts%20%285744%29.jpg","2017Abstracts%20%285745%29.jpg","2017Abstracts%20%285746%29.jpg","2017Abstracts%20%285747%29.jpg","2017Abstracts%20%285748%29.jpg","2017Abstracts%20%285749%29.jpg","2017Abstracts%20%28575%29.jpg","2017Abstracts%20%285750%29.jpg","2017Abstracts%20%285751%29.jpg","2017Abstracts%20%285752%29.jpg","2017Abstracts%20%285753%29.jpg","2017Abstracts%20%285754%29.jpg","2017Abstracts%20%285755%29.jpg","2017Abstracts%20%285756%29.jpg","2017Abstracts%20%285757%29.jpg","2017Abstracts%20%285758%29.jpg","2017Abstracts%20%285759%29.jpg","2017Abstracts%20%28576%29.jpg","2017Abstracts%20%285760%29.jpg","2017Abstracts%20%285761%29.jpg","2017Abstracts%20%285762%29.jpg","2017Abstracts%20%285763%29.jpg","2017Abstracts%20%285764%29.jpg","2017Abstracts%20%285765%29.jpg","2017Abstracts%20%285766%29.jpg","2017Abstracts%20%285767%29.jpg","2017Abstracts%20%285768%29.jpg","2017Abstracts%20%285769%29.jpg","2017Abstracts%20%28577%29.jpg","2017Abstracts%20%285770%29.jpg","2017Abstracts%20%285771%29.jpg","2017Abstracts%20%285772%29.jpg","2017Abstracts%20%285773%29.jpg","2017Abstracts%20%285774%29.jpg","2017Abstracts%20%285775%29.jpg","2017Abstracts%20%285776%29.jpg","2017Abstracts%20%285777%29.jpg","2017Abstracts%20%285778%29.jpg","2017Abstracts%20%285779%29.jpg","2017Abstracts%20%28578%29.jpg","2017Abstracts%20%285780%29.jpg","2017Abstracts%20%285781%29.jpg","2017Abstracts%20%285782%29.jpg","2017Abstracts%20%285783%29.jpg","2017Abstracts%20%285784%29.jpg","2017Abstracts%20%285785%29.jpg","2017Abstracts%20%285786%29.jpg","2017Abstracts%20%285787%29.jpg","2017Abstracts%20%285788%29.jpg","2017Abstracts%20%285789%29.jpg","2017Abstracts%20%28579%29.jpg","2017Abstracts%20%285790%29.jpg","2017Abstracts%20%285791%29.jpg","2017Abstracts%20%285792%29.jpg","2017Abstracts%20%285793%29.jpg","2017Abstracts%20%285794%29.jpg","2017Abstracts%20%285795%29.jpg","2017Abstracts%20%285796%29.jpg","2017Abstracts%20%285797%29.jpg","2017Abstracts%20%285798%29.jpg","2017Abstracts%20%285799%29.jpg","2017Abstracts%20%2858%29.jpg","2017Abstracts%20%28580%29.jpg","2017Abstracts%20%285800%29.jpg","2017Abstracts%20%285801%29.jpg","2017Abstracts%20%285802%29.jpg","2017Abstracts%20%285803%29.jpg","2017Abstracts%20%285804%29.jpg","2017Abstracts%20%285805%29.jpg","2017Abstracts%20%285806%29.jpg","2017Abstracts%20%285807%29.jpg","2017Abstracts%20%285808%29.jpg","2017Abstracts%20%285809%29.jpg","2017Abstracts%20%28581%29.jpg","2017Abstracts%20%285810%29.jpg","2017Abstracts%20%285811%29.jpg","2017Abstracts%20%285812%29.jpg","2017Abstracts%20%285813%29.jpg","2017Abstracts%20%285814%29.jpg","2017Abstracts%20%285815%29.jpg","2017Abstracts%20%285816%29.jpg","2017Abstracts%20%285817%29.jpg","2017Abstracts%20%285818%29.jpg","2017Abstracts%20%285819%29.jpg","2017Abstracts%20%28582%29.jpg","2017Abstracts%20%285820%29.jpg","2017Abstracts%20%285821%29.jpg","2017Abstracts%20%285822%29.jpg","2017Abstracts%20%285823%29.jpg","2017Abstracts%20%285824%29.jpg","2017Abstracts%20%285825%29.jpg","2017Abstracts%20%285826%29.jpg","2017Abstracts%20%285827%29.jpg","2017Abstracts%20%285828%29.jpg","2017Abstracts%20%285829%29.jpg","2017Abstracts%20%28583%29.jpg","2017Abstracts%20%285830%29.jpg","2017Abstracts%20%285831%29.jpg","2017Abstracts%20%285832%29.jpg","2017Abstracts%20%285833%29.jpg","2017Abstracts%20%285834%29.jpg","2017Abstracts%20%285835%29.jpg","2017Abstracts%20%285836%29.jpg","2017Abstracts%20%285837%29.jpg","2017Abstracts%20%285838%29.jpg","2017Abstracts%20%285839%29.jpg","2017Abstracts%20%28584%29.jpg","2017Abstracts%20%285840%29.jpg","2017Abstracts%20%285841%29.jpg","2017Abstracts%20%285842%29.jpg","2017Abstracts%20%285843%29.jpg","2017Abstracts%20%285844%29.jpg","2017Abstracts%20%285845%29.jpg","2017Abstracts%20%285846%29.jpg","2017Abstracts%20%285847%29.jpg","2017Abstracts%20%285848%29.jpg","2017Abstracts%20%285849%29.jpg","2017Abstracts%20%28585%29.jpg","2017Abstracts%20%285850%29.jpg","2017Abstracts%20%285851%29.jpg","2017Abstracts%20%285852%29.jpg","2017Abstracts%20%285853%29.jpg","2017Abstracts%20%285854%29.jpg","2017Abstracts%20%285855%29.jpg","2017Abstracts%20%285856%29.jpg","2017Abstracts%20%285857%29.jpg","2017Abstracts%20%285858%29.jpg","2017Abstracts%20%285859%29.jpg","2017Abstracts%20%28586%29.jpg","2017Abstracts%20%285860%29.jpg","2017Abstracts%20%285861%29.jpg","2017Abstracts%20%285862%29.jpg","2017Abstracts%20%285863%29.jpg","2017Abstracts%20%285864%29.jpg","2017Abstracts%20%285865%29.jpg","2017Abstracts%20%285866%29.jpg","2017Abstracts%20%285867%29.jpg","2017Abstracts%20%285868%29.jpg","2017Abstracts%20%285869%29.jpg","2017Abstracts%20%28587%29.jpg","2017Abstracts%20%285870%29.jpg","2017Abstracts%20%285871%29.jpg","2017Abstracts%20%285872%29.jpg","2017Abstracts%20%285873%29.jpg","2017Abstracts%20%285874%29.jpg","2017Abstracts%20%285875%29.jpg","2017Abstracts%20%285876%29.jpg","2017Abstracts%20%285877%29.jpg","2017Abstracts%20%285878%29.jpg","2017Abstracts%20%285879%29.jpg","2017Abstracts%20%28588%29.jpg","2017Abstracts%20%285880%29.jpg","2017Abstracts%20%285881%29.jpg","2017Abstracts%20%285882%29.jpg","2017Abstracts%20%285883%29.jpg","2017Abstracts%20%285884%29.jpg","2017Abstracts%20%285885%29.jpg","2017Abstracts%20%285886%29.jpg","2017Abstracts%20%285887%29.jpg","2017Abstracts%20%285888%29.jpg","2017Abstracts%20%285889%29.jpg","2017Abstracts%20%28589%29.jpg","2017Abstracts%20%285890%29.jpg","2017Abstracts%20%285891%29.jpg","2017Abstracts%20%285892%29.jpg","2017Abstracts%20%285893%29.jpg","2017Abstracts%20%285894%29.jpg","2017Abstracts%20%285895%29.jpg","2017Abstracts%20%285896%29.jpg","2017Abstracts%20%285897%29.jpg","2017Abstracts%20%285898%29.jpg","2017Abstracts%20%285899%29.jpg","2017Abstracts%20%2859%29.jpg","2017Abstracts%20%28590%29.jpg","2017Abstracts%20%285900%29.jpg","2017Abstracts%20%285901%29.jpg","2017Abstracts%20%285902%29.jpg","2017Abstracts%20%285903%29.jpg","2017Abstracts%20%285904%29.jpg","2017Abstracts%20%285905%29.jpg","2017Abstracts%20%285906%29.jpg","2017Abstracts%20%285907%29.jpg","2017Abstracts%20%285908%29.jpg","2017Abstracts%20%285909%29.jpg","2017Abstracts%20%28591%29.jpg","2017Abstracts%20%285910%29.jpg","2017Abstracts%20%285911%29.jpg","2017Abstracts%20%285912%29.jpg","2017Abstracts%20%285913%29.jpg","2017Abstracts%20%285914%29.jpg","2017Abstracts%20%285915%29.jpg","2017Abstracts%20%285916%29.jpg","2017Abstracts%20%285917%29.jpg","2017Abstracts%20%285918%29.jpg","2017Abstracts%20%285919%29.jpg","2017Abstracts%20%28592%29.jpg","2017Abstracts%20%285920%29.jpg","2017Abstracts%20%285921%29.jpg","2017Abstracts%20%285922%29.jpg","2017Abstracts%20%285923%29.jpg","2017Abstracts%20%285924%29.jpg","2017Abstracts%20%285925%29.jpg","2017Abstracts%20%285926%29.jpg","2017Abstracts%20%285927%29.jpg","2017Abstracts%20%285928%29.jpg","2017Abstracts%20%285929%29.jpg","2017Abstracts%20%28593%29.jpg","2017Abstracts%20%285930%29.jpg","2017Abstracts%20%285931%29.jpg","2017Abstracts%20%285932%29.jpg","2017Abstracts%20%285933%29.jpg","2017Abstracts%20%285934%29.jpg","2017Abstracts%20%285935%29.jpg","2017Abstracts%20%285936%29.jpg","2017Abstracts%20%285937%29.jpg","2017Abstracts%20%285938%29.jpg","2017Abstracts%20%285939%29.jpg","2017Abstracts%20%28594%29.jpg","2017Abstracts%20%285940%29.jpg","2017Abstracts%20%285941%29.jpg","2017Abstracts%20%285942%29.jpg","2017Abstracts%20%285943%29.jpg","2017Abstracts%20%285944%29.jpg","2017Abstracts%20%285945%29.jpg","2017Abstracts%20%285946%29.jpg","2017Abstracts%20%285947%29.jpg","2017Abstracts%20%285948%29.jpg","2017Abstracts%20%285949%29.jpg","2017Abstracts%20%28595%29.jpg","2017Abstracts%20%285950%29.jpg","2017Abstracts%20%285951%29.jpg","2017Abstracts%20%285952%29.jpg","2017Abstracts%20%285953%29.jpg","2017Abstracts%20%285954%29.jpg","2017Abstracts%20%285955%29.jpg","2017Abstracts%20%285956%29.jpg","2017Abstracts%20%285957%29.jpg","2017Abstracts%20%285958%29.jpg","2017Abstracts%20%285959%29.jpg","2017Abstracts%20%28596%29.jpg","2017Abstracts%20%285960%29.jpg","2017Abstracts%20%285961%29.jpg","2017Abstracts%20%285962%29.jpg","2017Abstracts%20%285963%29.jpg","2017Abstracts%20%285964%29.jpg","2017Abstracts%20%285965%29.jpg","2017Abstracts%20%285966%29.jpg","2017Abstracts%20%285967%29.jpg","2017Abstracts%20%285968%29.jpg","2017Abstracts%20%285969%29.jpg","2017Abstracts%20%28597%29.jpg","2017Abstracts%20%285970%29.jpg","2017Abstracts%20%285971%29.jpg","2017Abstracts%20%285972%29.jpg","2017Abstracts%20%285973%29.jpg","2017Abstracts%20%285974%29.jpg","2017Abstracts%20%285975%29.jpg","2017Abstracts%20%285976%29.jpg","2017Abstracts%20%285977%29.jpg","2017Abstracts%20%285978%29.jpg","2017Abstracts%20%285979%29.jpg","2017Abstracts%20%28598%29.jpg","2017Abstracts%20%285980%29.jpg","2017Abstracts%20%285981%29.jpg","2017Abstracts%20%285982%29.jpg","2017Abstracts%20%285983%29.jpg","2017Abstracts%20%285984%29.jpg","2017Abstracts%20%285985%29.jpg","2017Abstracts%20%285986%29.jpg","2017Abstracts%20%285987%29.jpg","2017Abstracts%20%285988%29.jpg","2017Abstracts%20%285989%29.jpg","2017Abstracts%20%28599%29.jpg","2017Abstracts%20%285990%29.jpg","2017Abstracts%20%285991%29.jpg","2017Abstracts%20%285992%29.jpg","2017Abstracts%20%285993%29.jpg","2017Abstracts%20%285994%29.jpg","2017Abstracts%20%285995%29.jpg","2017Abstracts%20%285996%29.jpg","2017Abstracts%20%285997%29.jpg","2017Abstracts%20%285998%29.jpg","2017Abstracts%20%285999%29.jpg","2017Abstracts%20%286%29.jpg","2017Abstracts%20%2860%29.jpg","2017Abstracts%20%28600%29.jpg","2017Abstracts%20%286000%29.jpg","2017Abstracts%20%286001%29.jpg","2017Abstracts%20%286002%29.jpg","2017Abstracts%20%286003%29.jpg","2017Abstracts%20%286004%29.jpg","2017Abstracts%20%286005%29.jpg","2017Abstracts%20%286006%29.jpg","2017Abstracts%20%286007%29.jpg","2017Abstracts%20%286008%29.jpg","2017Abstracts%20%286009%29.jpg","2017Abstracts%20%28601%29.jpg","2017Abstracts%20%286010%29.jpg","2017Abstracts%20%286011%29.jpg","2017Abstracts%20%286012%29.jpg","2017Abstracts%20%286013%29.jpg","2017Abstracts%20%286014%29.jpg","2017Abstracts%20%286015%29.jpg","2017Abstracts%20%286016%29.jpg","2017Abstracts%20%286017%29.jpg","2017Abstracts%20%286018%29.jpg","2017Abstracts%20%286019%29.jpg","2017Abstracts%20%28602%29.jpg","2017Abstracts%20%286020%29.jpg","2017Abstracts%20%286021%29.jpg","2017Abstracts%20%286022%29.jpg","2017Abstracts%20%286023%29.jpg","2017Abstracts%20%286024%29.jpg","2017Abstracts%20%286025%29.jpg","2017Abstracts%20%286026%29.jpg","2017Abstracts%20%286027%29.jpg","2017Abstracts%20%286028%29.jpg","2017Abstracts%20%286029%29.jpg","2017Abstracts%20%28603%29.jpg","2017Abstracts%20%286030%29.jpg","2017Abstracts%20%286031%29.jpg","2017Abstracts%20%286032%29.jpg","2017Abstracts%20%286033%29.jpg","2017Abstracts%20%286034%29.jpg","2017Abstracts%20%286035%29.jpg","2017Abstracts%20%286036%29.jpg","2017Abstracts%20%286037%29.jpg","2017Abstracts%20%286038%29.jpg","2017Abstracts%20%286039%29.jpg","2017Abstracts%20%28604%29.jpg","2017Abstracts%20%286040%29.jpg","2017Abstracts%20%286041%29.jpg","2017Abstracts%20%286042%29.jpg","2017Abstracts%20%286043%29.jpg","2017Abstracts%20%286044%29.jpg","2017Abstracts%20%286045%29.jpg","2017Abstracts%20%286046%29.jpg","2017Abstracts%20%286047%29.jpg","2017Abstracts%20%286048%29.jpg","2017Abstracts%20%286049%29.jpg","2017Abstracts%20%28605%29.jpg","2017Abstracts%20%286050%29.jpg","2017Abstracts%20%286051%29.jpg","2017Abstracts%20%286052%29.jpg","2017Abstracts%20%286053%29.jpg","2017Abstracts%20%286054%29.jpg","2017Abstracts%20%286055%29.jpg","2017Abstracts%20%286056%29.jpg","2017Abstracts%20%286057%29.jpg","2017Abstracts%20%286058%29.jpg","2017Abstracts%20%286059%29.jpg","2017Abstracts%20%28606%29.jpg","2017Abstracts%20%286060%29.jpg","2017Abstracts%20%286061%29.jpg","2017Abstracts%20%286062%29.jpg","2017Abstracts%20%286063%29.jpg","2017Abstracts%20%286064%29.jpg","2017Abstracts%20%286065%29.jpg","2017Abstracts%20%286066%29.jpg","2017Abstracts%20%286067%29.jpg","2017Abstracts%20%286068%29.jpg","2017Abstracts%20%286069%29.jpg","2017Abstracts%20%28607%29.jpg","2017Abstracts%20%286070%29.jpg","2017Abstracts%20%286071%29.jpg","2017Abstracts%20%286072%29.jpg","2017Abstracts%20%286073%29.jpg","2017Abstracts%20%286074%29.jpg","2017Abstracts%20%286075%29.jpg","2017Abstracts%20%286076%29.jpg","2017Abstracts%20%286077%29.jpg","2017Abstracts%20%286078%29.jpg","2017Abstracts%20%286079%29.jpg","2017Abstracts%20%28608%29.jpg","2017Abstracts%20%286080%29.jpg","2017Abstracts%20%286081%29.jpg","2017Abstracts%20%286082%29.jpg","2017Abstracts%20%286083%29.jpg","2017Abstracts%20%286084%29.jpg","2017Abstracts%20%286085%29.jpg","2017Abstracts%20%286086%29.jpg","2017Abstracts%20%286087%29.jpg","2017Abstracts%20%286088%29.jpg","2017Abstracts%20%286089%29.jpg","2017Abstracts%20%28609%29.jpg","2017Abstracts%20%286090%29.jpg","2017Abstracts%20%286091%29.jpg","2017Abstracts%20%286092%29.jpg","2017Abstracts%20%286093%29.jpg","2017Abstracts%20%286094%29.jpg","2017Abstracts%20%286095%29.jpg","2017Abstracts%20%286096%29.jpg","2017Abstracts%20%286097%29.jpg","2017Abstracts%20%286098%29.jpg","2017Abstracts%20%286099%29.jpg","2017Abstracts%20%2861%29.jpg","2017Abstracts%20%28610%29.jpg","2017Abstracts%20%286100%29.jpg","2017Abstracts%20%286101%29.jpg","2017Abstracts%20%286102%29.jpg","2017Abstracts%20%286103%29.jpg","2017Abstracts%20%286104%29.jpg","2017Abstracts%20%286105%29.jpg","2017Abstracts%20%286106%29.jpg","2017Abstracts%20%286107%29.jpg","2017Abstracts%20%286108%29.jpg","2017Abstracts%20%286109%29.jpg","2017Abstracts%20%28611%29.jpg","2017Abstracts%20%286110%29.jpg","2017Abstracts%20%286111%29.jpg","2017Abstracts%20%286112%29.jpg","2017Abstracts%20%286113%29.jpg","2017Abstracts%20%286114%29.jpg","2017Abstracts%20%286115%29.jpg","2017Abstracts%20%286116%29.jpg","2017Abstracts%20%286117%29.jpg","2017Abstracts%20%286118%29.jpg","2017Abstracts%20%286119%29.jpg","2017Abstracts%20%28612%29.jpg","2017Abstracts%20%286120%29.jpg","2017Abstracts%20%286121%29.jpg","2017Abstracts%20%286122%29.jpg","2017Abstracts%20%286123%29.jpg","2017Abstracts%20%286124%29.jpg","2017Abstracts%20%286125%29.jpg","2017Abstracts%20%286126%29.jpg","2017Abstracts%20%286127%29.jpg","2017Abstracts%20%286128%29.jpg","2017Abstracts%20%286129%29.jpg","2017Abstracts%20%28613%29.jpg","2017Abstracts%20%286130%29.jpg","2017Abstracts%20%286131%29.jpg","2017Abstracts%20%286132%29.jpg","2017Abstracts%20%286133%29.jpg","2017Abstracts%20%286134%29.jpg","2017Abstracts%20%286135%29.jpg","2017Abstracts%20%286136%29.jpg","2017Abstracts%20%286137%29.jpg","2017Abstracts%20%286138%29.jpg","2017Abstracts%20%286139%29.jpg","2017Abstracts%20%28614%29.jpg","2017Abstracts%20%286140%29.jpg","2017Abstracts%20%286141%29.jpg","2017Abstracts%20%286142%29.jpg","2017Abstracts%20%286143%29.jpg","2017Abstracts%20%286144%29.jpg","2017Abstracts%20%286145%29.jpg","2017Abstracts%20%286146%29.jpg","2017Abstracts%20%286147%29.jpg","2017Abstracts%20%286148%29.jpg","2017Abstracts%20%286149%29.jpg","2017Abstracts%20%28615%29.jpg","2017Abstracts%20%286150%29.jpg","2017Abstracts%20%286151%29.jpg","2017Abstracts%20%286152%29.jpg","2017Abstracts%20%286153%29.jpg","2017Abstracts%20%286154%29.jpg","2017Abstracts%20%286155%29.jpg","2017Abstracts%20%286156%29.jpg","2017Abstracts%20%286157%29.jpg","2017Abstracts%20%286158%29.jpg","2017Abstracts%20%286159%29.jpg","2017Abstracts%20%28616%29.jpg","2017Abstracts%20%286160%29.jpg","2017Abstracts%20%286161%29.jpg","2017Abstracts%20%286162%29.jpg","2017Abstracts%20%286163%29.jpg","2017Abstracts%20%286164%29.jpg","2017Abstracts%20%286165%29.jpg","2017Abstracts%20%286166%29.jpg","2017Abstracts%20%286167%29.jpg","2017Abstracts%20%286168%29.jpg","2017Abstracts%20%286169%29.jpg","2017Abstracts%20%28617%29.jpg","2017Abstracts%20%286170%29.jpg","2017Abstracts%20%286171%29.jpg","2017Abstracts%20%286172%29.jpg","2017Abstracts%20%286173%29.jpg","2017Abstracts%20%286174%29.jpg","2017Abstracts%20%286175%29.jpg","2017Abstracts%20%286176%29.jpg","2017Abstracts%20%286177%29.jpg","2017Abstracts%20%286178%29.jpg","2017Abstracts%20%286179%29.jpg","2017Abstracts%20%28618%29.jpg","2017Abstracts%20%286180%29.jpg","2017Abstracts%20%286181%29.jpg","2017Abstracts%20%286182%29.jpg","2017Abstracts%20%286183%29.jpg","2017Abstracts%20%286184%29.jpg","2017Abstracts%20%286185%29.jpg","2017Abstracts%20%286186%29.jpg","2017Abstracts%20%286187%29.jpg","2017Abstracts%20%286188%29.jpg","2017Abstracts%20%286189%29.jpg","2017Abstracts%20%28619%29.jpg","2017Abstracts%20%286190%29.jpg","2017Abstracts%20%286191%29.jpg","2017Abstracts%20%286192%29.jpg","2017Abstracts%20%286193%29.jpg","2017Abstracts%20%286194%29.jpg","2017Abstracts%20%286195%29.jpg","2017Abstracts%20%286196%29.jpg","2017Abstracts%20%286197%29.jpg","2017Abstracts%20%286198%29.jpg","2017Abstracts%20%286199%29.jpg","2017Abstracts%20%2862%29.jpg","2017Abstracts%20%28620%29.jpg","2017Abstracts%20%286200%29.jpg","2017Abstracts%20%286201%29.jpg","2017Abstracts%20%286202%29.jpg","2017Abstracts%20%286203%29.jpg","2017Abstracts%20%286204%29.jpg","2017Abstracts%20%286205%29.jpg","2017Abstracts%20%286206%29.jpg","2017Abstracts%20%286207%29.jpg","2017Abstracts%20%286208%29.jpg","2017Abstracts%20%286209%29.jpg","2017Abstracts%20%28621%29.jpg","2017Abstracts%20%286210%29.jpg","2017Abstracts%20%286211%29.jpg","2017Abstracts%20%286212%29.jpg","2017Abstracts%20%286213%29.jpg","2017Abstracts%20%286214%29.jpg","2017Abstracts%20%286215%29.jpg","2017Abstracts%20%286216%29.jpg","2017Abstracts%20%286217%29.jpg","2017Abstracts%20%286218%29.jpg","2017Abstracts%20%286219%29.jpg","2017Abstracts%20%28622%29.jpg","2017Abstracts%20%286220%29.jpg","2017Abstracts%20%286221%29.jpg","2017Abstracts%20%286222%29.jpg","2017Abstracts%20%286223%29.jpg","2017Abstracts%20%286224%29.jpg","2017Abstracts%20%286225%29.jpg","2017Abstracts%20%286226%29.jpg","2017Abstracts%20%286227%29.jpg","2017Abstracts%20%286228%29.jpg","2017Abstracts%20%286229%29.jpg","2017Abstracts%20%28623%29.jpg","2017Abstracts%20%286230%29.jpg","2017Abstracts%20%286231%29.jpg","2017Abstracts%20%286232%29.jpg","2017Abstracts%20%286233%29.jpg","2017Abstracts%20%286234%29.jpg","2017Abstracts%20%286235%29.jpg","2017Abstracts%20%286236%29.jpg","2017Abstracts%20%286237%29.jpg","2017Abstracts%20%286238%29.jpg","2017Abstracts%20%286239%29.jpg","2017Abstracts%20%28624%29.jpg","2017Abstracts%20%286240%29.jpg","2017Abstracts%20%286241%29.jpg","2017Abstracts%20%286242%29.jpg","2017Abstracts%20%286243%29.jpg","2017Abstracts%20%286244%29.jpg","2017Abstracts%20%286245%29.jpg","2017Abstracts%20%286246%29.jpg","2017Abstracts%20%286247%29.jpg","2017Abstracts%20%286248%29.jpg","2017Abstracts%20%286249%29.jpg","2017Abstracts%20%28625%29.jpg","2017Abstracts%20%286250%29.jpg","2017Abstracts%20%286251%29.jpg","2017Abstracts%20%286252%29.jpg","2017Abstracts%20%286253%29.jpg","2017Abstracts%20%286254%29.jpg","2017Abstracts%20%286255%29.jpg","2017Abstracts%20%286256%29.jpg","2017Abstracts%20%286257%29.jpg","2017Abstracts%20%286258%29.jpg","2017Abstracts%20%286259%29.jpg","2017Abstracts%20%28626%29.jpg","2017Abstracts%20%286260%29.jpg","2017Abstracts%20%286261%29.jpg","2017Abstracts%20%286262%29.jpg","2017Abstracts%20%286263%29.jpg","2017Abstracts%20%286264%29.jpg","2017Abstracts%20%286265%29.jpg","2017Abstracts%20%286266%29.jpg","2017Abstracts%20%286267%29.jpg","2017Abstracts%20%286268%29.jpg","2017Abstracts%20%286269%29.jpg","2017Abstracts%20%28627%29.jpg","2017Abstracts%20%286270%29.jpg","2017Abstracts%20%286271%29.jpg","2017Abstracts%20%286272%29.jpg","2017Abstracts%20%286273%29.jpg","2017Abstracts%20%286274%29.jpg","2017Abstracts%20%286275%29.jpg","2017Abstracts%20%286276%29.jpg","2017Abstracts%20%286277%29.jpg","2017Abstracts%20%286278%29.jpg","2017Abstracts%20%286279%29.jpg","2017Abstracts%20%28628%29.jpg","2017Abstracts%20%286280%29.jpg","2017Abstracts%20%286281%29.jpg","2017Abstracts%20%286282%29.jpg","2017Abstracts%20%286283%29.jpg","2017Abstracts%20%286284%29.jpg","2017Abstracts%20%286285%29.jpg","2017Abstracts%20%286286%29.jpg","2017Abstracts%20%286287%29.jpg","2017Abstracts%20%286288%29.jpg","2017Abstracts%20%286289%29.jpg","2017Abstracts%20%28629%29.jpg","2017Abstracts%20%286290%29.jpg","2017Abstracts%20%286291%29.jpg","2017Abstracts%20%286292%29.jpg","2017Abstracts%20%286293%29.jpg","2017Abstracts%20%286294%29.jpg","2017Abstracts%20%286295%29.jpg","2017Abstracts%20%286296%29.jpg","2017Abstracts%20%286297%29.jpg","2017Abstracts%20%286298%29.jpg","2017Abstracts%20%286299%29.jpg","2017Abstracts%20%2863%29.jpg","2017Abstracts%20%28630%29.jpg","2017Abstracts%20%286300%29.jpg","2017Abstracts%20%286301%29.jpg","2017Abstracts%20%286302%29.jpg","2017Abstracts%20%286303%29.jpg","2017Abstracts%20%286304%29.jpg","2017Abstracts%20%286305%29.jpg","2017Abstracts%20%286306%29.jpg","2017Abstracts%20%286307%29.jpg","2017Abstracts%20%286308%29.jpg","2017Abstracts%20%286309%29.jpg","2017Abstracts%20%28631%29.jpg","2017Abstracts%20%286310%29.jpg","2017Abstracts%20%286311%29.jpg","2017Abstracts%20%286312%29.jpg","2017Abstracts%20%286313%29.jpg","2017Abstracts%20%286314%29.jpg","2017Abstracts%20%286315%29.jpg","2017Abstracts%20%286316%29.jpg","2017Abstracts%20%286317%29.jpg","2017Abstracts%20%286318%29.jpg","2017Abstracts%20%286319%29.jpg","2017Abstracts%20%28632%29.jpg","2017Abstracts%20%286320%29.jpg","2017Abstracts%20%286321%29.jpg","2017Abstracts%20%286322%29.jpg","2017Abstracts%20%286323%29.jpg","2017Abstracts%20%286324%29.jpg","2017Abstracts%20%286325%29.jpg","2017Abstracts%20%286326%29.jpg","2017Abstracts%20%286327%29.jpg","2017Abstracts%20%286328%29.jpg","2017Abstracts%20%286329%29.jpg","2017Abstracts%20%28633%29.jpg","2017Abstracts%20%286330%29.jpg","2017Abstracts%20%286331%29.jpg","2017Abstracts%20%286332%29.jpg","2017Abstracts%20%286333%29.jpg","2017Abstracts%20%286334%29.jpg","2017Abstracts%20%286335%29.jpg","2017Abstracts%20%286336%29.jpg","2017Abstracts%20%286337%29.jpg","2017Abstracts%20%286338%29.jpg","2017Abstracts%20%286339%29.jpg","2017Abstracts%20%28634%29.jpg","2017Abstracts%20%286340%29.jpg","2017Abstracts%20%286341%29.jpg","2017Abstracts%20%286342%29.jpg","2017Abstracts%20%286343%29.jpg","2017Abstracts%20%286344%29.jpg","2017Abstracts%20%286345%29.jpg","2017Abstracts%20%286346%29.jpg","2017Abstracts%20%286347%29.jpg","2017Abstracts%20%286348%29.jpg","2017Abstracts%20%286349%29.jpg","2017Abstracts%20%28635%29.jpg","2017Abstracts%20%286350%29.jpg","2017Abstracts%20%286351%29.jpg","2017Abstracts%20%286352%29.jpg","2017Abstracts%20%286353%29.jpg","2017Abstracts%20%286354%29.jpg","2017Abstracts%20%286355%29.jpg","2017Abstracts%20%286356%29.jpg","2017Abstracts%20%286357%29.jpg","2017Abstracts%20%286358%29.jpg","2017Abstracts%20%286359%29.jpg","2017Abstracts%20%28636%29.jpg","2017Abstracts%20%286360%29.jpg","2017Abstracts%20%286361%29.jpg","2017Abstracts%20%286362%29.jpg","2017Abstracts%20%286363%29.jpg","2017Abstracts%20%286364%29.jpg","2017Abstracts%20%286365%29.jpg","2017Abstracts%20%286366%29.jpg","2017Abstracts%20%286367%29.jpg","2017Abstracts%20%286368%29.jpg","2017Abstracts%20%286369%29.jpg","2017Abstracts%20%28637%29.jpg","2017Abstracts%20%286370%29.jpg","2017Abstracts%20%286371%29.jpg","2017Abstracts%20%286372%29.jpg","2017Abstracts%20%286373%29.jpg","2017Abstracts%20%286374%29.jpg","2017Abstracts%20%286375%29.jpg","2017Abstracts%20%286376%29.jpg","2017Abstracts%20%286377%29.jpg","2017Abstracts%20%286378%29.jpg","2017Abstracts%20%286379%29.jpg","2017Abstracts%20%28638%29.jpg","2017Abstracts%20%286380%29.jpg","2017Abstracts%20%286381%29.jpg","2017Abstracts%20%286382%29.jpg","2017Abstracts%20%286383%29.jpg","2017Abstracts%20%286384%29.jpg","2017Abstracts%20%286385%29.jpg","2017Abstracts%20%286386%29.jpg","2017Abstracts%20%286387%29.jpg","2017Abstracts%20%286388%29.jpg","2017Abstracts%20%286389%29.jpg","2017Abstracts%20%28639%29.jpg","2017Abstracts%20%286390%29.jpg","2017Abstracts%20%286391%29.jpg","2017Abstracts%20%286392%29.jpg","2017Abstracts%20%286393%29.jpg","2017Abstracts%20%286394%29.jpg","2017Abstracts%20%286395%29.jpg","2017Abstracts%20%286396%29.jpg","2017Abstracts%20%286397%29.jpg","2017Abstracts%20%286398%29.jpg","2017Abstracts%20%286399%29.jpg","2017Abstracts%20%2864%29.jpg","2017Abstracts%20%28640%29.jpg","2017Abstracts%20%286400%29.jpg","2017Abstracts%20%286401%29.jpg","2017Abstracts%20%286402%29.jpg","2017Abstracts%20%286403%29.jpg","2017Abstracts%20%286404%29.jpg","2017Abstracts%20%286405%29.jpg","2017Abstracts%20%286406%29.jpg","2017Abstracts%20%286407%29.jpg","2017Abstracts%20%286408%29.jpg","2017Abstracts%20%286409%29.jpg","2017Abstracts%20%28641%29.jpg","2017Abstracts%20%286410%29.jpg","2017Abstracts%20%286411%29.jpg","2017Abstracts%20%286412%29.jpg","2017Abstracts%20%286413%29.jpg","2017Abstracts%20%286414%29.jpg","2017Abstracts%20%286415%29.jpg","2017Abstracts%20%286416%29.jpg","2017Abstracts%20%286417%29.jpg","2017Abstracts%20%286418%29.jpg","2017Abstracts%20%286419%29.jpg","2017Abstracts%20%28642%29.jpg","2017Abstracts%20%286420%29.jpg","2017Abstracts%20%286421%29.jpg","2017Abstracts%20%286422%29.jpg","2017Abstracts%20%286423%29.jpg","2017Abstracts%20%286424%29.jpg","2017Abstracts%20%286425%29.jpg","2017Abstracts%20%286426%29.jpg","2017Abstracts%20%286427%29.jpg","2017Abstracts%20%286428%29.jpg","2017Abstracts%20%286429%29.jpg","2017Abstracts%20%28643%29.jpg","2017Abstracts%20%286430%29.jpg","2017Abstracts%20%286431%29.jpg","2017Abstracts%20%286432%29.jpg","2017Abstracts%20%286433%29.jpg","2017Abstracts%20%286434%29.jpg","2017Abstracts%20%286435%29.jpg","2017Abstracts%20%286436%29.jpg","2017Abstracts%20%286437%29.jpg","2017Abstracts%20%286438%29.jpg","2017Abstracts%20%286439%29.jpg","2017Abstracts%20%28644%29.jpg","2017Abstracts%20%286440%29.jpg","2017Abstracts%20%286441%29.jpg","2017Abstracts%20%286442%29.jpg","2017Abstracts%20%286443%29.jpg","2017Abstracts%20%286444%29.jpg","2017Abstracts%20%286445%29.jpg","2017Abstracts%20%286446%29.jpg","2017Abstracts%20%286447%29.jpg","2017Abstracts%20%286448%29.jpg","2017Abstracts%20%286449%29.jpg","2017Abstracts%20%28645%29.jpg","2017Abstracts%20%286450%29.jpg","2017Abstracts%20%286451%29.jpg","2017Abstracts%20%286452%29.jpg","2017Abstracts%20%286453%29.jpg","2017Abstracts%20%286454%29.jpg","2017Abstracts%20%286455%29.jpg","2017Abstracts%20%286456%29.jpg","2017Abstracts%20%286457%29.jpg","2017Abstracts%20%286458%29.jpg","2017Abstracts%20%286459%29.jpg","2017Abstracts%20%28646%29.jpg","2017Abstracts%20%286460%29.jpg","2017Abstracts%20%286461%29.jpg","2017Abstracts%20%286462%29.jpg","2017Abstracts%20%286463%29.jpg","2017Abstracts%20%286464%29.jpg","2017Abstracts%20%286465%29.jpg","2017Abstracts%20%286466%29.jpg","2017Abstracts%20%286467%29.jpg","2017Abstracts%20%286468%29.jpg","2017Abstracts%20%286469%29.jpg","2017Abstracts%20%28647%29.jpg","2017Abstracts%20%286470%29.jpg","2017Abstracts%20%286471%29.jpg","2017Abstracts%20%286472%29.jpg","2017Abstracts%20%286473%29.jpg","2017Abstracts%20%286474%29.jpg","2017Abstracts%20%286475%29.jpg","2017Abstracts%20%286476%29.jpg","2017Abstracts%20%286477%29.jpg","2017Abstracts%20%286478%29.jpg","2017Abstracts%20%286479%29.jpg","2017Abstracts%20%28648%29.jpg","2017Abstracts%20%286480%29.jpg","2017Abstracts%20%286481%29.jpg","2017Abstracts%20%286482%29.jpg","2017Abstracts%20%286483%29.jpg","2017Abstracts%20%286484%29.jpg","2017Abstracts%20%286485%29.jpg","2017Abstracts%20%286486%29.jpg","2017Abstracts%20%286487%29.jpg","2017Abstracts%20%286488%29.jpg","2017Abstracts%20%286489%29.jpg","2017Abstracts%20%28649%29.jpg","2017Abstracts%20%286490%29.jpg","2017Abstracts%20%286491%29.jpg","2017Abstracts%20%286492%29.jpg","2017Abstracts%20%286493%29.jpg","2017Abstracts%20%286494%29.jpg","2017Abstracts%20%286495%29.jpg","2017Abstracts%20%286496%29.jpg","2017Abstracts%20%286497%29.jpg","2017Abstracts%20%286498%29.jpg","2017Abstracts%20%286499%29.jpg","2017Abstracts%20%2865%29.jpg","2017Abstracts%20%28650%29.jpg","2017Abstracts%20%286500%29.jpg","2017Abstracts%20%286501%29.jpg","2017Abstracts%20%286502%29.jpg","2017Abstracts%20%286503%29.jpg","2017Abstracts%20%286504%29.jpg","2017Abstracts%20%286505%29.jpg","2017Abstracts%20%286506%29.jpg","2017Abstracts%20%286507%29.jpg","2017Abstracts%20%286508%29.jpg","2017Abstracts%20%286509%29.jpg","2017Abstracts%20%28651%29.jpg","2017Abstracts%20%286510%29.jpg","2017Abstracts%20%286511%29.jpg","2017Abstracts%20%286512%29.jpg","2017Abstracts%20%286513%29.jpg","2017Abstracts%20%286514%29.jpg","2017Abstracts%20%286515%29.jpg","2017Abstracts%20%286516%29.jpg","2017Abstracts%20%286517%29.jpg","2017Abstracts%20%286518%29.jpg","2017Abstracts%20%286519%29.jpg","2017Abstracts%20%28652%29.jpg","2017Abstracts%20%286520%29.jpg","2017Abstracts%20%286521%29.jpg","2017Abstracts%20%286522%29.jpg","2017Abstracts%20%286523%29.jpg","2017Abstracts%20%286524%29.jpg","2017Abstracts%20%286525%29.jpg","2017Abstracts%20%286526%29.jpg","2017Abstracts%20%286527%29.jpg","2017Abstracts%20%286528%29.jpg","2017Abstracts%20%286529%29.jpg","2017Abstracts%20%28653%29.jpg","2017Abstracts%20%286530%29.jpg","2017Abstracts%20%286531%29.jpg","2017Abstracts%20%286532%29.jpg","2017Abstracts%20%286533%29.jpg","2017Abstracts%20%286534%29.jpg","2017Abstracts%20%286535%29.jpg","2017Abstracts%20%286536%29.jpg","2017Abstracts%20%286537%29.jpg","2017Abstracts%20%286538%29.jpg","2017Abstracts%20%286539%29.jpg","2017Abstracts%20%28654%29.jpg","2017Abstracts%20%286540%29.jpg","2017Abstracts%20%286541%29.jpg","2017Abstracts%20%286542%29.jpg","2017Abstracts%20%286543%29.jpg","2017Abstracts%20%286544%29.jpg","2017Abstracts%20%286545%29.jpg","2017Abstracts%20%286546%29.jpg","2017Abstracts%20%286547%29.jpg","2017Abstracts%20%286548%29.jpg","2017Abstracts%20%286549%29.jpg","2017Abstracts%20%28655%29.jpg","2017Abstracts%20%286550%29.jpg","2017Abstracts%20%286551%29.jpg","2017Abstracts%20%286552%29.jpg","2017Abstracts%20%286553%29.jpg","2017Abstracts%20%286554%29.jpg","2017Abstracts%20%286555%29.jpg","2017Abstracts%20%286556%29.jpg","2017Abstracts%20%286557%29.jpg","2017Abstracts%20%286558%29.jpg","2017Abstracts%20%286559%29.jpg","2017Abstracts%20%28656%29.jpg","2017Abstracts%20%286560%29.jpg","2017Abstracts%20%286561%29.jpg","2017Abstracts%20%286562%29.jpg","2017Abstracts%20%286563%29.jpg","2017Abstracts%20%286564%29.jpg","2017Abstracts%20%286565%29.jpg","2017Abstracts%20%286566%29.jpg","2017Abstracts%20%286567%29.jpg","2017Abstracts%20%286568%29.jpg","2017Abstracts%20%286569%29.jpg","2017Abstracts%20%28657%29.jpg","2017Abstracts%20%286570%29.jpg","2017Abstracts%20%286571%29.jpg","2017Abstracts%20%286572%29.jpg","2017Abstracts%20%286573%29.jpg","2017Abstracts%20%286574%29.jpg","2017Abstracts%20%286575%29.jpg","2017Abstracts%20%286576%29.jpg","2017Abstracts%20%286577%29.jpg","2017Abstracts%20%286578%29.jpg","2017Abstracts%20%286579%29.jpg","2017Abstracts%20%28658%29.jpg","2017Abstracts%20%286580%29.jpg","2017Abstracts%20%286581%29.jpg","2017Abstracts%20%286582%29.jpg","2017Abstracts%20%286583%29.jpg","2017Abstracts%20%286584%29.jpg","2017Abstracts%20%286585%29.jpg","2017Abstracts%20%286586%29.jpg","2017Abstracts%20%286587%29.jpg","2017Abstracts%20%286588%29.jpg","2017Abstracts%20%286589%29.jpg","2017Abstracts%20%28659%29.jpg","2017Abstracts%20%286590%29.jpg","2017Abstracts%20%286591%29.jpg","2017Abstracts%20%286592%29.jpg","2017Abstracts%20%286593%29.jpg","2017Abstracts%20%286594%29.jpg","2017Abstracts%20%286595%29.jpg","2017Abstracts%20%286596%29.jpg","2017Abstracts%20%286597%29.jpg","2017Abstracts%20%286598%29.jpg","2017Abstracts%20%286599%29.jpg","2017Abstracts%20%2866%29.jpg","2017Abstracts%20%28660%29.jpg","2017Abstracts%20%286600%29.jpg","2017Abstracts%20%286601%29.jpg","2017Abstracts%20%286602%29.jpg","2017Abstracts%20%286603%29.jpg","2017Abstracts%20%286604%29.jpg","2017Abstracts%20%286605%29.jpg","2017Abstracts%20%286606%29.jpg","2017Abstracts%20%286607%29.jpg","2017Abstracts%20%286608%29.jpg","2017Abstracts%20%286609%29.jpg","2017Abstracts%20%28661%29.jpg","2017Abstracts%20%286610%29.jpg","2017Abstracts%20%286611%29.jpg","2017Abstracts%20%286612%29.jpg","2017Abstracts%20%286613%29.jpg","2017Abstracts%20%286614%29.jpg","2017Abstracts%20%286615%29.jpg","2017Abstracts%20%286616%29.jpg","2017Abstracts%20%286617%29.jpg","2017Abstracts%20%286618%29.jpg","2017Abstracts%20%286619%29.jpg","2017Abstracts%20%28662%29.jpg","2017Abstracts%20%286620%29.jpg","2017Abstracts%20%286621%29.jpg","2017Abstracts%20%286622%29.jpg","2017Abstracts%20%286623%29.jpg","2017Abstracts%20%286624%29.jpg","2017Abstracts%20%286625%29.jpg","2017Abstracts%20%286626%29.jpg","2017Abstracts%20%286627%29.jpg","2017Abstracts%20%286628%29.jpg","2017Abstracts%20%286629%29.jpg","2017Abstracts%20%28663%29.jpg","2017Abstracts%20%286630%29.jpg","2017Abstracts%20%286631%29.jpg","2017Abstracts%20%286632%29.jpg","2017Abstracts%20%286633%29.jpg","2017Abstracts%20%286634%29.jpg","2017Abstracts%20%286635%29.jpg","2017Abstracts%20%286636%29.jpg","2017Abstracts%20%286637%29.jpg","2017Abstracts%20%286638%29.jpg","2017Abstracts%20%286639%29.jpg","2017Abstracts%20%28664%29.jpg","2017Abstracts%20%286640%29.jpg","2017Abstracts%20%286641%29.jpg","2017Abstracts%20%286642%29.jpg","2017Abstracts%20%286643%29.jpg","2017Abstracts%20%286644%29.jpg","2017Abstracts%20%286645%29.jpg","2017Abstracts%20%286646%29.jpg","2017Abstracts%20%286647%29.jpg","2017Abstracts%20%286648%29.jpg","2017Abstracts%20%286649%29.jpg","2017Abstracts%20%28665%29.jpg","2017Abstracts%20%286650%29.jpg","2017Abstracts%20%286651%29.jpg","2017Abstracts%20%286652%29.jpg","2017Abstracts%20%286653%29.jpg","2017Abstracts%20%286654%29.jpg","2017Abstracts%20%286655%29.jpg","2017Abstracts%20%286656%29.jpg","2017Abstracts%20%286657%29.jpg","2017Abstracts%20%286658%29.jpg","2017Abstracts%20%286659%29.jpg","2017Abstracts%20%28666%29.jpg","2017Abstracts%20%286660%29.jpg","2017Abstracts%20%286661%29.jpg","2017Abstracts%20%286662%29.jpg","2017Abstracts%20%286663%29.jpg","2017Abstracts%20%286664%29.jpg","2017Abstracts%20%286665%29.jpg","2017Abstracts%20%286666%29.jpg","2017Abstracts%20%286667%29.jpg","2017Abstracts%20%286668%29.jpg","2017Abstracts%20%286669%29.jpg","2017Abstracts%20%28667%29.jpg","2017Abstracts%20%286670%29.jpg","2017Abstracts%20%286671%29.jpg","2017Abstracts%20%286672%29.jpg","2017Abstracts%20%286673%29.jpg","2017Abstracts%20%286674%29.jpg","2017Abstracts%20%286675%29.jpg","2017Abstracts%20%286676%29.jpg","2017Abstracts%20%286677%29.jpg","2017Abstracts%20%286678%29.jpg","2017Abstracts%20%286679%29.jpg","2017Abstracts%20%28668%29.jpg","2017Abstracts%20%286680%29.jpg","2017Abstracts%20%286681%29.jpg","2017Abstracts%20%286682%29.jpg","2017Abstracts%20%286683%29.jpg","2017Abstracts%20%286684%29.jpg","2017Abstracts%20%286685%29.jpg","2017Abstracts%20%286686%29.jpg","2017Abstracts%20%286687%29.jpg","2017Abstracts%20%286688%29.jpg","2017Abstracts%20%286689%29.jpg","2017Abstracts%20%28669%29.jpg","2017Abstracts%20%286690%29.jpg","2017Abstracts%20%286691%29.jpg","2017Abstracts%20%286692%29.jpg","2017Abstracts%20%286693%29.jpg","2017Abstracts%20%286694%29.jpg","2017Abstracts%20%286695%29.jpg","2017Abstracts%20%286696%29.jpg","2017Abstracts%20%286697%29.jpg","2017Abstracts%20%286698%29.jpg","2017Abstracts%20%286699%29.jpg","2017Abstracts%20%2867%29.jpg","2017Abstracts%20%28670%29.jpg","2017Abstracts%20%286700%29.jpg","2017Abstracts%20%286701%29.jpg","2017Abstracts%20%286702%29.jpg","2017Abstracts%20%286703%29.jpg","2017Abstracts%20%286704%29.jpg","2017Abstracts%20%286705%29.jpg","2017Abstracts%20%286706%29.jpg","2017Abstracts%20%286707%29.jpg","2017Abstracts%20%286708%29.jpg","2017Abstracts%20%286709%29.jpg","2017Abstracts%20%28671%29.jpg","2017Abstracts%20%286710%29.jpg","2017Abstracts%20%286711%29.jpg","2017Abstracts%20%286712%29.jpg","2017Abstracts%20%286713%29.jpg","2017Abstracts%20%286714%29.jpg","2017Abstracts%20%286715%29.jpg","2017Abstracts%20%286716%29.jpg","2017Abstracts%20%286717%29.jpg","2017Abstracts%20%286718%29.jpg","2017Abstracts%20%286719%29.jpg","2017Abstracts%20%28672%29.jpg","2017Abstracts%20%286720%29.jpg","2017Abstracts%20%286721%29.jpg","2017Abstracts%20%286722%29.jpg","2017Abstracts%20%286723%29.jpg","2017Abstracts%20%286724%29.jpg","2017Abstracts%20%286725%29.jpg","2017Abstracts%20%286726%29.jpg","2017Abstracts%20%286727%29.jpg","2017Abstracts%20%286728%29.jpg","2017Abstracts%20%286729%29.jpg","2017Abstracts%20%28673%29.jpg","2017Abstracts%20%286730%29.jpg","2017Abstracts%20%286731%29.jpg","2017Abstracts%20%286732%29.jpg","2017Abstracts%20%286733%29.jpg","2017Abstracts%20%286734%29.jpg","2017Abstracts%20%286735%29.jpg","2017Abstracts%20%286736%29.jpg","2017Abstracts%20%286737%29.jpg","2017Abstracts%20%286738%29.jpg","2017Abstracts%20%286739%29.jpg","2017Abstracts%20%28674%29.jpg","2017Abstracts%20%286740%29.jpg","2017Abstracts%20%286741%29.jpg","2017Abstracts%20%286742%29.jpg","2017Abstracts%20%286743%29.jpg","2017Abstracts%20%286744%29.jpg","2017Abstracts%20%286745%29.jpg","2017Abstracts%20%286746%29.jpg","2017Abstracts%20%286747%29.jpg","2017Abstracts%20%286748%29.jpg","2017Abstracts%20%286749%29.jpg","2017Abstracts%20%28675%29.jpg","2017Abstracts%20%286750%29.jpg","2017Abstracts%20%286751%29.jpg","2017Abstracts%20%286752%29.jpg","2017Abstracts%20%286753%29.jpg","2017Abstracts%20%286754%29.jpg","2017Abstracts%20%286755%29.jpg","2017Abstracts%20%286756%29.jpg","2017Abstracts%20%286757%29.jpg","2017Abstracts%20%286758%29.jpg","2017Abstracts%20%286759%29.jpg","2017Abstracts%20%28676%29.jpg","2017Abstracts%20%286760%29.jpg","2017Abstracts%20%286761%29.jpg","2017Abstracts%20%286762%29.jpg","2017Abstracts%20%286763%29.jpg","2017Abstracts%20%286764%29.jpg","2017Abstracts%20%286765%29.jpg","2017Abstracts%20%286766%29.jpg","2017Abstracts%20%286767%29.jpg","2017Abstracts%20%286768%29.jpg","2017Abstracts%20%286769%29.jpg","2017Abstracts%20%28677%29.jpg","2017Abstracts%20%286770%29.jpg","2017Abstracts%20%286771%29.jpg","2017Abstracts%20%286772%29.jpg","2017Abstracts%20%286773%29.jpg","2017Abstracts%20%286774%29.jpg","2017Abstracts%20%286775%29.jpg","2017Abstracts%20%286776%29.jpg","2017Abstracts%20%286777%29.jpg","2017Abstracts%20%286778%29.jpg","2017Abstracts%20%286779%29.jpg","2017Abstracts%20%28678%29.jpg","2017Abstracts%20%286780%29.jpg","2017Abstracts%20%286781%29.jpg","2017Abstracts%20%286782%29.jpg","2017Abstracts%20%286783%29.jpg","2017Abstracts%20%286784%29.jpg","2017Abstracts%20%286785%29.jpg","2017Abstracts%20%286786%29.jpg","2017Abstracts%20%286787%29.jpg","2017Abstracts%20%286788%29.jpg","2017Abstracts%20%286789%29.jpg","2017Abstracts%20%28679%29.jpg","2017Abstracts%20%286790%29.jpg","2017Abstracts%20%286791%29.jpg","2017Abstracts%20%286792%29.jpg","2017Abstracts%20%286793%29.jpg","2017Abstracts%20%286794%29.jpg","2017Abstracts%20%286795%29.jpg","2017Abstracts%20%286796%29.jpg","2017Abstracts%20%286797%29.jpg","2017Abstracts%20%286798%29.jpg","2017Abstracts%20%286799%29.jpg","2017Abstracts%20%2868%29.jpg","2017Abstracts%20%28680%29.jpg","2017Abstracts%20%286800%29.jpg","2017Abstracts%20%28681%29.jpg","2017Abstracts%20%28682%29.jpg","2017Abstracts%20%28683%29.jpg","2017Abstracts%20%28684%29.jpg","2017Abstracts%20%28685%29.jpg","2017Abstracts%20%28686%29.jpg","2017Abstracts%20%28687%29.jpg","2017Abstracts%20%28688%29.jpg","2017Abstracts%20%28689%29.jpg","2017Abstracts%20%2869%29.jpg","2017Abstracts%20%28690%29.jpg","2017Abstracts%20%28691%29.jpg","2017Abstracts%20%28692%29.jpg","2017Abstracts%20%28693%29.jpg","2017Abstracts%20%28694%29.jpg","2017Abstracts%20%28695%29.jpg","2017Abstracts%20%28696%29.jpg","2017Abstracts%20%28697%29.jpg","2017Abstracts%20%28698%29.jpg","2017Abstracts%20%28699%29.jpg","2017Abstracts%20%287%29.jpg","2017Abstracts%20%2870%29.jpg","2017Abstracts%20%28700%29.jpg","2017Abstracts%20%28701%29.jpg","2017Abstracts%20%28702%29.jpg","2017Abstracts%20%28703%29.jpg","2017Abstracts%20%28704%29.jpg","2017Abstracts%20%28705%29.jpg","2017Abstracts%20%28706%29.jpg","2017Abstracts%20%28707%29.jpg","2017Abstracts%20%28708%29.jpg","2017Abstracts%20%28709%29.jpg","2017Abstracts%20%2871%29.jpg","2017Abstracts%20%28710%29.jpg","2017Abstracts%20%28711%29.jpg","2017Abstracts%20%28712%29.jpg","2017Abstracts%20%28713%29.jpg","2017Abstracts%20%28714%29.jpg","2017Abstracts%20%28715%29.jpg","2017Abstracts%20%28716%29.jpg","2017Abstracts%20%28717%29.jpg","2017Abstracts%20%28718%29.jpg","2017Abstracts%20%28719%29.jpg","2017Abstracts%20%2872%29.jpg","2017Abstracts%20%28720%29.jpg","2017Abstracts%20%28721%29.jpg","2017Abstracts%20%28722%29.jpg","2017Abstracts%20%28723%29.jpg","2017Abstracts%20%28724%29.jpg","2017Abstracts%20%28725%29.jpg","2017Abstracts%20%28726%29.jpg","2017Abstracts%20%28727%29.jpg","2017Abstracts%20%28728%29.jpg","2017Abstracts%20%28729%29.jpg","2017Abstracts%20%2873%29.jpg","2017Abstracts%20%28730%29.jpg","2017Abstracts%20%28731%29.jpg","2017Abstracts%20%28732%29.jpg","2017Abstracts%20%28733%29.jpg","2017Abstracts%20%28734%29.jpg","2017Abstracts%20%28735%29.jpg","2017Abstracts%20%28736%29.jpg","2017Abstracts%20%28737%29.jpg","2017Abstracts%20%28738%29.jpg","2017Abstracts%20%28739%29.jpg","2017Abstracts%20%2874%29.jpg","2017Abstracts%20%28740%29.jpg","2017Abstracts%20%28741%29.jpg","2017Abstracts%20%28742%29.jpg","2017Abstracts%20%28743%29.jpg","2017Abstracts%20%28744%29.jpg","2017Abstracts%20%28745%29.jpg","2017Abstracts%20%28746%29.jpg","2017Abstracts%20%28747%29.jpg","2017Abstracts%20%28748%29.jpg","2017Abstracts%20%28749%29.jpg","2017Abstracts%20%2875%29.jpg","2017Abstracts%20%28750%29.jpg","2017Abstracts%20%28751%29.jpg","2017Abstracts%20%28752%29.jpg","2017Abstracts%20%28753%29.jpg","2017Abstracts%20%28754%29.jpg","2017Abstracts%20%28755%29.jpg","2017Abstracts%20%28756%29.jpg","2017Abstracts%20%28757%29.jpg","2017Abstracts%20%28758%29.jpg","2017Abstracts%20%28759%29.jpg","2017Abstracts%20%2876%29.jpg","2017Abstracts%20%28760%29.jpg","2017Abstracts%20%28761%29.jpg","2017Abstracts%20%28762%29.jpg","2017Abstracts%20%28763%29.jpg","2017Abstracts%20%28764%29.jpg","2017Abstracts%20%28765%29.jpg","2017Abstracts%20%28766%29.jpg","2017Abstracts%20%28767%29.jpg","2017Abstracts%20%28768%29.jpg","2017Abstracts%20%28769%29.jpg","2017Abstracts%20%2877%29.jpg","2017Abstracts%20%28770%29.jpg","2017Abstracts%20%28771%29.jpg","2017Abstracts%20%28772%29.jpg","2017Abstracts%20%28773%29.jpg","2017Abstracts%20%28774%29.jpg","2017Abstracts%20%28775%29.jpg","2017Abstracts%20%28776%29.jpg","2017Abstracts%20%28777%29.jpg","2017Abstracts%20%28778%29.jpg","2017Abstracts%20%28779%29.jpg","2017Abstracts%20%2878%29.jpg","2017Abstracts%20%28780%29.jpg","2017Abstracts%20%28781%29.jpg","2017Abstracts%20%28782%29.jpg","2017Abstracts%20%28783%29.jpg","2017Abstracts%20%28784%29.jpg","2017Abstracts%20%28785%29.jpg","2017Abstracts%20%28786%29.jpg","2017Abstracts%20%28787%29.jpg","2017Abstracts%20%28788%29.jpg","2017Abstracts%20%28789%29.jpg","2017Abstracts%20%2879%29.jpg","2017Abstracts%20%28790%29.jpg","2017Abstracts%20%28791%29.jpg","2017Abstracts%20%28792%29.jpg","2017Abstracts%20%28793%29.jpg","2017Abstracts%20%28794%29.jpg","2017Abstracts%20%28795%29.jpg","2017Abstracts%20%28796%29.jpg","2017Abstracts%20%28797%29.jpg","2017Abstracts%20%28798%29.jpg","2017Abstracts%20%28799%29.jpg","2017Abstracts%20%288%29.jpg","2017Abstracts%20%2880%29.jpg","2017Abstracts%20%28800%29.jpg","2017Abstracts%20%28801%29.jpg","2017Abstracts%20%28802%29.jpg","2017Abstracts%20%28803%29.jpg","2017Abstracts%20%28804%29.jpg","2017Abstracts%20%28805%29.jpg","2017Abstracts%20%28806%29.jpg","2017Abstracts%20%28807%29.jpg","2017Abstracts%20%28808%29.jpg","2017Abstracts%20%28809%29.jpg","2017Abstracts%20%2881%29.jpg","2017Abstracts%20%28810%29.jpg","2017Abstracts%20%28811%29.jpg","2017Abstracts%20%28812%29.jpg","2017Abstracts%20%28813%29.jpg","2017Abstracts%20%28814%29.jpg","2017Abstracts%20%28815%29.jpg","2017Abstracts%20%28816%29.jpg","2017Abstracts%20%28817%29.jpg","2017Abstracts%20%28818%29.jpg","2017Abstracts%20%28819%29.jpg","2017Abstracts%20%2882%29.jpg","2017Abstracts%20%28820%29.jpg","2017Abstracts%20%28821%29.jpg","2017Abstracts%20%28822%29.jpg","2017Abstracts%20%28823%29.jpg","2017Abstracts%20%28824%29.jpg","2017Abstracts%20%28825%29.jpg","2017Abstracts%20%28826%29.jpg","2017Abstracts%20%28827%29.jpg","2017Abstracts%20%28828%29.jpg","2017Abstracts%20%28829%29.jpg","2017Abstracts%20%2883%29.jpg","2017Abstracts%20%28830%29.jpg","2017Abstracts%20%28831%29.jpg","2017Abstracts%20%28832%29.jpg","2017Abstracts%20%28833%29.jpg","2017Abstracts%20%28834%29.jpg","2017Abstracts%20%28835%29.jpg","2017Abstracts%20%28836%29.jpg","2017Abstracts%20%28837%29.jpg","2017Abstracts%20%28838%29.jpg","2017Abstracts%20%28839%29.jpg","2017Abstracts%20%2884%29.jpg","2017Abstracts%20%28840%29.jpg","2017Abstracts%20%28841%29.jpg","2017Abstracts%20%28842%29.jpg","2017Abstracts%20%28843%29.jpg","2017Abstracts%20%28844%29.jpg","2017Abstracts%20%28845%29.jpg","2017Abstracts%20%28846%29.jpg","2017Abstracts%20%28847%29.jpg","2017Abstracts%20%28848%29.jpg","2017Abstracts%20%28849%29.jpg","2017Abstracts%20%2885%29.jpg","2017Abstracts%20%28850%29.jpg","2017Abstracts%20%28851%29.jpg","2017Abstracts%20%28852%29.jpg","2017Abstracts%20%28853%29.jpg","2017Abstracts%20%28854%29.jpg","2017Abstracts%20%28855%29.jpg","2017Abstracts%20%28856%29.jpg","2017Abstracts%20%28857%29.jpg","2017Abstracts%20%28858%29.jpg","2017Abstracts%20%28859%29.jpg","2017Abstracts%20%2886%29.jpg","2017Abstracts%20%28860%29.jpg","2017Abstracts%20%28861%29.jpg","2017Abstracts%20%28862%29.jpg","2017Abstracts%20%28863%29.jpg","2017Abstracts%20%28864%29.jpg","2017Abstracts%20%28865%29.jpg","2017Abstracts%20%28866%29.jpg","2017Abstracts%20%28867%29.jpg","2017Abstracts%20%28868%29.jpg","2017Abstracts%20%28869%29.jpg","2017Abstracts%20%2887%29.jpg","2017Abstracts%20%28870%29.jpg","2017Abstracts%20%28871%29.jpg","2017Abstracts%20%28872%29.jpg","2017Abstracts%20%28873%29.jpg","2017Abstracts%20%28874%29.jpg","2017Abstracts%20%28875%29.jpg","2017Abstracts%20%28876%29.jpg","2017Abstracts%20%28877%29.jpg","2017Abstracts%20%28878%29.jpg","2017Abstracts%20%28879%29.jpg","2017Abstracts%20%2888%29.jpg","2017Abstracts%20%28880%29.jpg","2017Abstracts%20%28881%29.jpg","2017Abstracts%20%28882%29.jpg","2017Abstracts%20%28883%29.jpg","2017Abstracts%20%28884%29.jpg","2017Abstracts%20%28885%29.jpg","2017Abstracts%20%28886%29.jpg","2017Abstracts%20%28887%29.jpg","2017Abstracts%20%28888%29.jpg","2017Abstracts%20%28889%29.jpg","2017Abstracts%20%2889%29.jpg","2017Abstracts%20%28890%29.jpg","2017Abstracts%20%28891%29.jpg","2017Abstracts%20%28892%29.jpg","2017Abstracts%20%28893%29.jpg","2017Abstracts%20%28894%29.jpg","2017Abstracts%20%28895%29.jpg","2017Abstracts%20%28896%29.jpg","2017Abstracts%20%28897%29.jpg","2017Abstracts%20%28898%29.jpg","2017Abstracts%20%28899%29.jpg","2017Abstracts%20%289%29.jpg","2017Abstracts%20%2890%29.jpg","2017Abstracts%20%28900%29.jpg","2017Abstracts%20%28901%29.jpg","2017Abstracts%20%28902%29.jpg","2017Abstracts%20%28903%29.jpg","2017Abstracts%20%28904%29.jpg","2017Abstracts%20%28905%29.jpg","2017Abstracts%20%28906%29.jpg","2017Abstracts%20%28907%29.jpg","2017Abstracts%20%28908%29.jpg","2017Abstracts%20%28909%29.jpg","2017Abstracts%20%2891%29.jpg","2017Abstracts%20%28910%29.jpg","2017Abstracts%20%28911%29.jpg","2017Abstracts%20%28912%29.jpg","2017Abstracts%20%28913%29.jpg","2017Abstracts%20%28914%29.jpg","2017Abstracts%20%28915%29.jpg","2017Abstracts%20%28916%29.jpg","2017Abstracts%20%28917%29.jpg","2017Abstracts%20%28918%29.jpg","2017Abstracts%20%28919%29.jpg","2017Abstracts%20%2892%29.jpg","2017Abstracts%20%28920%29.jpg","2017Abstracts%20%28921%29.jpg","2017Abstracts%20%28922%29.jpg","2017Abstracts%20%28923%29.jpg","2017Abstracts%20%28924%29.jpg","2017Abstracts%20%28925%29.jpg","2017Abstracts%20%28926%29.jpg","2017Abstracts%20%28927%29.jpg","2017Abstracts%20%28928%29.jpg","2017Abstracts%20%28929%29.jpg","2017Abstracts%20%2893%29.jpg","2017Abstracts%20%28930%29.jpg","2017Abstracts%20%28931%29.jpg","2017Abstracts%20%28932%29.jpg","2017Abstracts%20%28933%29.jpg","2017Abstracts%20%28934%29.jpg","2017Abstracts%20%28935%29.jpg","2017Abstracts%20%28936%29.jpg","2017Abstracts%20%28937%29.jpg","2017Abstracts%20%28938%29.jpg","2017Abstracts%20%28939%29.jpg","2017Abstracts%20%2894%29.jpg","2017Abstracts%20%28940%29.jpg","2017Abstracts%20%28941%29.jpg","2017Abstracts%20%28942%29.jpg","2017Abstracts%20%28943%29.jpg","2017Abstracts%20%28944%29.jpg","2017Abstracts%20%28945%29.jpg","2017Abstracts%20%28946%29.jpg","2017Abstracts%20%28947%29.jpg","2017Abstracts%20%28948%29.jpg","2017Abstracts%20%28949%29.jpg","2017Abstracts%20%2895%29.jpg","2017Abstracts%20%28950%29.jpg","2017Abstracts%20%28951%29.jpg","2017Abstracts%20%28952%29.jpg","2017Abstracts%20%28953%29.jpg","2017Abstracts%20%28954%29.jpg","2017Abstracts%20%28955%29.jpg","2017Abstracts%20%28956%29.jpg","2017Abstracts%20%28957%29.jpg","2017Abstracts%20%28958%29.jpg","2017Abstracts%20%28959%29.jpg","2017Abstracts%20%2896%29.jpg","2017Abstracts%20%28960%29.jpg","2017Abstracts%20%28961%29.jpg","2017Abstracts%20%28962%29.jpg","2017Abstracts%20%28963%29.jpg","2017Abstracts%20%28964%29.jpg","2017Abstracts%20%28965%29.jpg","2017Abstracts%20%28966%29.jpg","2017Abstracts%20%28967%29.jpg","2017Abstracts%20%28968%29.jpg","2017Abstracts%20%28969%29.jpg","2017Abstracts%20%2897%29.jpg","2017Abstracts%20%28970%29.jpg","2017Abstracts%20%28971%29.jpg","2017Abstracts%20%28972%29.jpg","2017Abstracts%20%28973%29.jpg","2017Abstracts%20%28974%29.jpg","2017Abstracts%20%28975%29.jpg","2017Abstracts%20%28976%29.jpg","2017Abstracts%20%28977%29.jpg","2017Abstracts%20%28978%29.jpg","2017Abstracts%20%28979%29.jpg","2017Abstracts%20%2898%29.jpg","2017Abstracts%20%28980%29.jpg","2017Abstracts%20%28981%29.jpg","2017Abstracts%20%28982%29.jpg","2017Abstracts%20%28983%29.jpg","2017Abstracts%20%28984%29.jpg","2017Abstracts%20%28985%29.jpg","2017Abstracts%20%28986%29.jpg","2017Abstracts%20%28987%29.jpg","2017Abstracts%20%28988%29.jpg","2017Abstracts%20%28989%29.jpg","2017Abstracts%20%2899%29.jpg","2017Abstracts%20%28990%29.jpg","2017Abstracts%20%28991%29.jpg","2017Abstracts%20%28992%29.jpg","2017Abstracts%20%28993%29.jpg","2017Abstracts%20%28994%29.jpg","2017Abstracts%20%28995%29.jpg","2017Abstracts%20%28996%29.jpg","2017Abstracts%20%28997%29.jpg","2017Abstracts%20%28998%29.jpg","2017Abstracts%20%28999%29.jpg","2017AbstractsSample.jpg"];
                var repeat = 1;
                for (var i = 0; i < questionCount; i++){
                    var index = JS_RAND(0,datas.length);


                    var item = {};
                    item.title = repeat+"";

                    item.image = RULE_BASE_URL() + "resources/abstract_images/60767b88bfaab78852233632c512441c.decompress/"+datas[index];
                    resultArray.push(item);
                    datas.splice(index, 1);
                    repeat = repeat+1;
                    if (repeat == 6){
                        repeat = 1;
                    }
                }


            }catch(e){
                console.log("ERRROR SINH DE : "+e);
            }
        }

        var questionItems = [];
        var question = {
            "column": column,
            "row": row,
            "count" : count,
            "items": questionItems
        }
        {
            for (var r = 0; r < row; r++){
                var tempArray = [];
                for (var i = 0; i < column; i++){
                    var questionItemDict = examQuestionItems[r*column+i];
                    var awserItemDict = {"value1":"","value2":""};
                    var itemDict = {"question":questionItemDict, "answer":awserItemDict};
                    tempArray.push(itemDict);
                }

                while (tempArray.length>0){
                    var index = JS_RAND(0,tempArray.length);
                    var itemDict = tempArray[index];
                    questionItems.push(itemDict);
                    tempArray.splice(index,1);
                }
            }

            console.log("ERRROR SINH DE : "+questionItems.length + " count:" + count +" examQuestionItems:" + examQuestionItems.length);
        }

        var resultPara = {
            "gameInfo": gameInfo,
            "examQuestions": examQuestions,
            "questions": question
        }

        //xu ly sinh de
        var isSuccess = true;
        var errorCode = 0;
        var errorMessage = 0;
        callback(isSuccess, errorCode, errorMessage, resultPara);
        
    }
    check_mark(paraInput, callback){


        function valueOfCell(r,c, questions){
            var column = questions.column;
            return questions.items[r * column + c];
        }

        function checkAnwserEmpty(answerItem){
            //window.alert("item:"+answerItem.value1+"compare:" + (answerItem.value1 === "-1"));
            //window.alert("item:"+answerItem.value1+"value2:" + answerItem.value2);
            if ((answerItem.value1 === "-1" || answerItem.value1.length == 0) && (answerItem.value2 === "-1"  || answerItem.value2.length == 0)){
                return true;
            }
            return false;
        }

        function checkEmptyRow(r, questions){
            var column = questions.column;
            for (var c = 0; c < column; c++) {
                var questionItemDict = valueOfCell(r,c,questions);
                var answerItem = questionItemDict.answer;
                if (!checkAnwserEmpty(answerItem)){
                    return false;
                }
            }
            return true;
        }

        function scoreForMiddleRow(r, questions){
            var column = questions.column;
            var score = 0;
            var answerCount = column;
            for (var c = 0; c < column; c++) {
                var questionItemDict = valueOfCell(r,c,questions);
                // var answerItem = questionItemDict.answer;
                // var questionItem = questionItemDict.question;
                if (questionItemDict.correct){
                    score++;
                }
            }
            //window.alert(r+ " middle score: "+ score +" answer: " + answerCount);
            if (score == answerCount) return score;
            return -1;
        }

        function scoreForEndRow(r, questions){
            var column = questions.column;
            var score = 0;
            var answerCount = 0;
            for (var c = Math.min(questions.count-questions.column*r-1,questions.column-1); c>= 0; c--) {
                var questionItemDict = valueOfCell(r,c,questions);
                var answerItem = questionItemDict.answer;

                if (!checkAnwserEmpty(answerItem)){
                    answerCount = c+1;
                    break;
                }
            }

            for (var c = 0; c < column; c++) {
                var questionItemDict = valueOfCell(r,c,questions);
                var answerItem = questionItemDict.answer;
                // var questionItem = questionItemDict.question;
                // answerCount++;
                if (!checkAnwserEmpty(answerItem)){
                    if (questionItemDict.correct) score++;
                }
            }
            //window.alert(r+" end score: "+ score +" answer: " + answerCount);
            if (score == answerCount) return score;
            if (score == answerCount-1) return Math.round(score/2);
            return 0;
        }


        // var question = paraInput.question;
        var gameInfo = paraInput.gameInfo;
        var examQuestions = paraInput.examQuestions;
        var questions = paraInput.questions;
        var column = examQuestions.column;
        var row = examQuestions.row;
        var count = examQuestions.count;

        var score = 0;


        //cap nhat cacs gia tri correct1, correct2, correct3
        for (var i = 0; i < count; i++){
            var questionItemDict = questions.items[i];
            var answerItem = questionItemDict.answer;
            var questionItem = questionItemDict.question;
            questionItemDict.correct1 = false;
            questionItemDict.correct2 = false;
            if (answerItem.hasOwnProperty("value1") && questionItem.hasOwnProperty("title")){
                questionItemDict.correct1 = (answerItem.value1 == questionItem.title);
            }
            if (answerItem.hasOwnProperty("value2") && questionItem.hasOwnProperty("subtitle")){
                questionItemDict.correct2 = (answerItem.value2 == questionItem.subtitle);
            }
            questionItemDict.correct = questionItemDict.correct1;// && questionItemDict.correct2;
        }

        //tinh diem cho question
        var r = row-1;

        // tinh deim cho dong o giua 
        for (; r >= 0; r--){
            if (!checkEmptyRow(r, questions)){
                score+= scoreForMiddleRow(r, questions);
            }
        }

        //window.alert(score+"diem");

        questions.score = score;
        // questions.recallTime = 100;//tam bo
        // questions.memoryTime = 100;//tam bo
        //xu ly sinh de
        var resultPara = paraInput;
        var isSuccess = true;
        var errorCode = 0;
        var errorMessage = 0;
        callback(isSuccess, errorCode, errorMessage, resultPara);
    }
}

class ServerNameAndFace{
    generate(paraInput, callback){
        var game_type = paraInput.game_type;
        var game_mode = paraInput.game_mode;

        var column = 5;
        var row = 100;
        var count = column*row;
        var memoryTime = 300;
        var recallTime = 300;

        if (game_mode == DIFFICULT_NATIONAL()){
            column = 5;
            row = 23;
            count = column*row;
            memoryTime = 60*15;
            recallTime = 60*30;
        }else if (game_mode == DIFFICULT_INTERNATIONAL()){
            column = 5;
            row = 45;
            count = column*row;
            memoryTime = 60*15;
            recallTime = 60*30;
        }else if (game_mode == DIFFICULT_WORLD()){
            column = 5;
            row = 45;
            count = column*row;
            memoryTime = 60*15;
            recallTime = 60*30;
        }else if (game_mode == DIFFICULT_FREEDOM()){
            column = 40;
            row = paraInput.rowCount;
            count = column*row;
        }
        var gameInfo = {
                    "amount": 0,
                    "displayName": "Name And Face",
                    "answerTime": recallTime,
                    "prepareTime": 60,
                    "gameType": game_type,
                    "speed":1,
                    "difficultType": game_mode,
                    "readExamTime": memoryTime
                    };
        
        var examQuestionItems = [];
        var examQuestions = {
            "column": column,
            "row": row,
            "count" : count,
            "items": examQuestionItems
        }
        {
            var questionCount = count;

            var resultArray = examQuestionItems;
            try{

                var images = [];
                var firstNames = [];
                var lastNames = [];
                
                {//female
                     var femaleCount = Math.floor(questionCount/2);
                     console.log("ERRROR so luong nu : "+femaleCount);
                     var datas2 =  ["female_image_0001.jpg","female_image_0002.jpg","female_image_0003.jpg","female_image_0004.jpg","female_image_0005.jpg","female_image_0006.jpg","female_image_0007.jpg","female_image_0008.jpg","female_image_0009.jpg","female_image_0010.jpg","female_image_0011.jpg","female_image_0012.jpg","female_image_0013.jpg","female_image_0014.jpg","female_image_0015.jpg","female_image_0016.jpg","female_image_0017.jpg","female_image_0018.jpg","female_image_0019.jpg","female_image_0020.jpg","female_image_0021.jpg","female_image_0022.jpg","female_image_0023.jpg","female_image_0024.jpg","female_image_0025.jpg","female_image_0026.jpg","female_image_0027.jpg","female_image_0028.jpg","female_image_0029.jpg","female_image_0030.jpg","female_image_0031.jpg","female_image_0032.jpg","female_image_0033.jpg","female_image_0034.jpg","female_image_0035.jpg","female_image_0036.jpg","female_image_0037.jpg","female_image_0038.jpg","female_image_0039.jpg","female_image_0040.jpg","female_image_0041.jpg","female_image_0042.jpg","female_image_0043.jpg","female_image_0044.jpg","female_image_0045.jpg","female_image_0046.jpg","female_image_0047.jpg","female_image_0048.jpg","female_image_0049.jpg","female_image_0050.jpg","female_image_0051.jpg","female_image_0052.jpg","female_image_0053.jpg","female_image_0054.jpg","female_image_0055.jpg","female_image_0056.jpg","female_image_0057.jpg","female_image_0058.jpg","female_image_0059.jpg","female_image_0060.jpg","female_image_0061.jpg","female_image_0062.jpg","female_image_0063.jpg","female_image_0064.jpg","female_image_0065.jpg","female_image_0066.jpg","female_image_0067.jpg","female_image_0068.jpg","female_image_0069.jpg","female_image_0070.jpg","female_image_0071.jpg","female_image_0072.jpg","female_image_0073.jpg","female_image_0074.jpg","female_image_0075.jpg","female_image_0076.jpg","female_image_0077.jpg","female_image_0078.jpg","female_image_0079.jpg","female_image_0080.jpg","female_image_0081.jpg","female_image_0082.jpg","female_image_0083.jpg","female_image_0084.jpg","female_image_0085.jpg","female_image_0086.jpg","female_image_0087.jpg","female_image_0088.jpg","female_image_0089.jpg","female_image_0090.jpg","female_image_0091.jpg","female_image_0092.jpg","female_image_0093.jpg","female_image_0094.jpg","female_image_0095.jpg","female_image_0096.jpg","female_image_0097.jpg","female_image_0098.jpg","female_image_0099.jpg","female_image_0100.jpg","female_image_0101.jpg","female_image_0102.jpg","female_image_0103.jpg","female_image_0104.jpg","female_image_0105.jpg","female_image_0106.jpg","female_image_0107.jpg","female_image_0108.jpg","female_image_0109.jpg","female_image_0110.jpg","female_image_0111.jpg","female_image_0112.jpg","female_image_0113.jpg","female_image_0114.jpg","female_image_0115.jpg","female_image_0116.jpg","female_image_0117.jpg","female_image_0118.jpg","female_image_0119.jpg","female_image_0120.jpg","female_image_0121.jpg","female_image_0122.jpg","female_image_0123.jpg","female_image_0124.jpg","female_image_0125.jpg","female_image_0126.jpg","female_image_0127.jpg","female_image_0128.jpg","female_image_0129.jpg","female_image_0130.jpg","female_image_0131.jpg","female_image_0132.jpg","female_image_0133.jpg","female_image_0134.jpg","female_image_0135.jpg","female_image_0136.jpg","female_image_0137.jpg","female_image_0138.jpg","female_image_0139.jpg","female_image_0140.jpg","female_image_0141.jpg","female_image_0142.jpg","female_image_0143.jpg","female_image_0144.jpg","female_image_0145.jpg","female_image_0146.jpg","female_image_0147.jpg","female_image_0148.jpg","female_image_0149.jpg","female_image_0150.jpg","female_image_0151.jpg","female_image_0152.jpg","female_image_0153.jpg","female_image_0154.jpg","female_image_0155.jpg","female_image_0156.jpg","female_image_0157.jpg","female_image_0158.jpg","female_image_0159.jpg","female_image_0160.jpg","female_image_0161.jpg","female_image_0162.jpg","female_image_0163.jpg","female_image_0164.jpg","female_image_0165.jpg","female_image_0166.jpg","female_image_0167.jpg","female_image_0168.jpg","female_image_0169.jpg","female_image_0170.jpg","female_image_0171.jpg","female_image_0172.jpg","female_image_0173.jpg","female_image_0174.jpg","female_image_0175.jpg","female_image_0176.jpg","female_image_0177.jpg","female_image_0178.jpg","female_image_0179.jpg","female_image_0180.jpg","female_image_0181.jpg","female_image_0182.jpg","female_image_0183.jpg","female_image_0184.jpg","female_image_0185.jpg","female_image_0186.jpg","female_image_0187.jpg","female_image_0188.jpg","female_image_0189.jpg","female_image_0190.jpg","female_image_0191.jpg","female_image_0192.jpg","female_image_0193.jpg","female_image_0194.jpg","female_image_0195.jpg","female_image_0196.jpg","female_image_0197.jpg","female_image_0198.jpg","female_image_0199.jpg","female_image_0200.jpg","female_image_0201.jpg","female_image_0202.jpg","female_image_0203.jpg","female_image_0204.jpg","female_image_0205.jpg","female_image_0206.jpg","female_image_0207.jpg","female_image_0208.jpg","female_image_0209.jpg","female_image_0210.jpg","female_image_0211.jpg","female_image_0212.jpg","female_image_0213.jpg","female_image_0214.jpg","female_image_0215.jpg","female_image_0216.jpg","female_image_0217.jpg","female_image_0218.jpg","female_image_0219.jpg","female_image_0220.jpg","female_image_0221.jpg","female_image_0222.jpg","female_image_0223.jpg","female_image_0224.jpg","female_image_0225.jpg","female_image_0226.jpg","female_image_0227.jpg","female_image_0228.jpg","female_image_0229.jpg","female_image_0230.jpg","female_image_0231.jpg","female_image_0232.jpg","female_image_0233.jpg","female_image_0234.jpg","female_image_0235.jpg","female_image_0236.jpg","female_image_0237.jpg","female_image_0238.jpg","female_image_0239.jpg","female_image_0240.jpg","female_image_0241.jpg","female_image_0242.jpg","female_image_0243.jpg","female_image_0244.jpg","female_image_0245.jpg","female_image_0246.jpg","female_image_0247.jpg","female_image_0248.jpg","female_image_0249.jpg","female_image_0250.jpg","female_image_0251.jpg","female_image_0252.jpg","female_image_0253.jpg","female_image_0254.jpg","female_image_0255.jpg","female_image_0256.jpg","female_image_0257.jpg","female_image_0258.jpg","female_image_0259.jpg","female_image_0260.jpg","female_image_0261.jpg","female_image_0262.jpg","female_image_0263.jpg","female_image_0264.jpg","female_image_0265.jpg","female_image_0266.jpg","female_image_0267.jpg","female_image_0268.jpg","female_image_0269.jpg","female_image_0270.jpg","female_image_0271.jpg","female_image_0272.jpg","female_image_0273.jpg","female_image_0274.jpg","female_image_0275.jpg","female_image_0276.jpg","female_image_0277.jpg","female_image_0278.jpg","female_image_0279.jpg"];
                     for (var i = 0; i < femaleCount; i++){
                        var index = JS_RAND(0,datas2.length);
                        console.log("ERRROR so luong nu : "+datas2[index]);
                        images.push(RULE_BASE_URL() + "resources/names_and_faces/c77162a7e800231c926d2571295c72bc.decompress/"+datas2[index]);
                        datas2.splice(index, 1);
                     }
                }
                {//male
                     var maleCount = Math.round(questionCount/2);
                     console.log("ERRROR so luong nam : "+maleCount);
                     var datas =  ["male_image_0001.jpg","male_image_0002.jpg","male_image_0003.jpg","male_image_0004.jpg","male_image_0005.jpg","male_image_0006.jpg","male_image_0007.jpg","male_image_0008.jpg","male_image_0009.jpg","male_image_0010.jpg","male_image_0011.jpg","male_image_0012.jpg","male_image_0013.jpg","male_image_0014.jpg","male_image_0015.jpg","male_image_0016.jpg","male_image_0017.jpg","male_image_0018.jpg","male_image_0019.jpg","male_image_0020.jpg","male_image_0021.jpg","male_image_0022.jpg","male_image_0023.jpg","male_image_0024.jpg","male_image_0025.jpg","male_image_0026.jpg","male_image_0027.jpg","male_image_0028.jpg","male_image_0029.jpg","male_image_0030.jpg","male_image_0031.jpg","male_image_0032.jpg","male_image_0033.jpg","male_image_0034.jpg","male_image_0035.jpg","male_image_0036.jpg","male_image_0037.jpg","male_image_0038.jpg","male_image_0039.jpg","male_image_0040.jpg","male_image_0041.jpg","male_image_0042.jpg","male_image_0043.jpg","male_image_0044.jpg","male_image_0045.jpg","male_image_0046.jpg","male_image_0047.jpg","male_image_0048.jpg","male_image_0049.jpg","male_image_0050.jpg","male_image_0051.jpg","male_image_0052.jpg","male_image_0053.jpg","male_image_0054.jpg","male_image_0055.jpg","male_image_0056.jpg","male_image_0057.jpg","male_image_0058.jpg","male_image_0059.jpg","male_image_0060.jpg","male_image_0061.jpg","male_image_0062.jpg","male_image_0063.jpg","male_image_0064.jpg","male_image_0065.jpg","male_image_0066.jpg","male_image_0067.jpg","male_image_0068.jpg","male_image_0069.jpg","male_image_0070.jpg","male_image_0071.jpg","male_image_0072.jpg","male_image_0073.jpg","male_image_0074.jpg","male_image_0075.jpg","male_image_0076.jpg","male_image_0077.jpg","male_image_0078.jpg","male_image_0079.jpg","male_image_0080.jpg","male_image_0081.jpg","male_image_0082.jpg","male_image_0083.jpg","male_image_0084.jpg","male_image_0085.jpg","male_image_0086.jpg","male_image_0087.jpg","male_image_0088.jpg","male_image_0089.jpg","male_image_0090.jpg","male_image_0091.jpg","male_image_0092.jpg","male_image_0093.jpg","male_image_0094.jpg","male_image_0095.jpg","male_image_0096.jpg","male_image_0097.jpg","male_image_0098.jpg","male_image_0099.jpg","male_image_0100.jpg","male_image_0101.jpg","male_image_0102.jpg","male_image_0103.jpg","male_image_0104.jpg","male_image_0105.jpg","male_image_0106.jpg","male_image_0107.jpg","male_image_0108.jpg","male_image_0109.jpg","male_image_0110.jpg","male_image_0111.jpg","male_image_0112.jpg","male_image_0113.jpg","male_image_0114.jpg","male_image_0115.jpg","male_image_0116.jpg","male_image_0117.jpg","male_image_0118.jpg","male_image_0119.jpg","male_image_0120.jpg","male_image_0121.jpg","male_image_0122.jpg","male_image_0123.jpg","male_image_0124.jpg","male_image_0125.jpg","male_image_0126.jpg","male_image_0127.jpg","male_image_0128.jpg","male_image_0129.jpg","male_image_0130.jpg","male_image_0131.jpg","male_image_0132.jpg","male_image_0133.jpg","male_image_0134.jpg","male_image_0135.jpg","male_image_0136.jpg","male_image_0137.jpg","male_image_0138.jpg","male_image_0139.jpg","male_image_0140.jpg","male_image_0141.jpg","male_image_0142.jpg","male_image_0143.jpg","male_image_0144.jpg","male_image_0145.jpg","male_image_0146.jpg","male_image_0147.jpg","male_image_0148.jpg","male_image_0149.jpg","male_image_0150.jpg","male_image_0151.jpg","male_image_0152.jpg","male_image_0153.jpg","male_image_0154.jpg","male_image_0155.jpg","male_image_0156.jpg","male_image_0157.jpg","male_image_0158.jpg","male_image_0159.jpg","male_image_0160.jpg","male_image_0161.jpg","male_image_0162.jpg","male_image_0163.jpg","male_image_0164.jpg","male_image_0165.jpg","male_image_0166.jpg","male_image_0167.jpg","male_image_0168.jpg","male_image_0169.jpg","male_image_0170.jpg","male_image_0171.jpg","male_image_0172.jpg","male_image_0173.jpg","male_image_0174.jpg","male_image_0175.jpg","male_image_0176.jpg","male_image_0177.jpg","male_image_0178.jpg","male_image_0179.jpg","male_image_0180.jpg","male_image_0181.jpg","male_image_0182.jpg","male_image_0183.jpg","male_image_0184.jpg","male_image_0185.jpg","male_image_0186.jpg","male_image_0187.jpg","male_image_0188.jpg","male_image_0189.jpg","male_image_0190.jpg","male_image_0191.jpg","male_image_0192.jpg","male_image_0193.jpg","male_image_0194.jpg","male_image_0195.jpg","male_image_0196.jpg","male_image_0197.jpg","male_image_0198.jpg","male_image_0199.jpg","male_image_0200.jpg","male_image_0201.jpg","male_image_0202.jpg","male_image_0203.jpg","male_image_0204.jpg","male_image_0205.jpg","male_image_0206.jpg","male_image_0207.jpg","male_image_0208.jpg","male_image_0209.jpg","male_image_0210.jpg","male_image_0211.jpg","male_image_0212.jpg","male_image_0213.jpg","male_image_0214.jpg","male_image_0215.jpg","male_image_0216.jpg","male_image_0217.jpg","male_image_0218.jpg","male_image_0219.jpg","male_image_0220.jpg","male_image_0221.jpg","male_image_0222.jpg","male_image_0223.jpg","male_image_0224.jpg","male_image_0225.jpg","male_image_0226.jpg","male_image_0227.jpg","male_image_0228.jpg","male_image_0229.jpg","male_image_0230.jpg","male_image_0231.jpg","male_image_0232.jpg","male_image_0233.jpg","male_image_0234.jpg","male_image_0235.jpg","male_image_0236.jpg","male_image_0237.jpg","male_image_0238.jpg","male_image_0239.jpg","male_image_0240.jpg","male_image_0241.jpg","male_image_0242.jpg","male_image_0243.jpg","male_image_0244.jpg","male_image_0245.jpg","male_image_0246.jpg","male_image_0247.jpg","male_image_0248.jpg","male_image_0249.jpg","male_image_0250.jpg","male_image_0251.jpg","male_image_0252.jpg","male_image_0253.jpg","male_image_0254.jpg","male_image_0255.jpg","male_image_0256.jpg","male_image_0257.jpg","male_image_0258.jpg","male_image_0259.jpg","male_image_0260.jpg","male_image_0261.jpg","male_image_0262.jpg","male_image_0263.jpg","male_image_0264.jpg","male_image_0265.jpg","male_image_0266.jpg","male_image_0267.jpg","male_image_0268.jpg","male_image_0269.jpg","male_image_0270.jpg","male_image_0271.jpg","male_image_0272.jpg","male_image_0273.jpg","male_image_0274.jpg","male_image_0275.jpg","male_image_0276.jpg","male_image_0277.jpg","male_image_0278.jpg","male_image_0279.jpg","male_image_0280.jpg","male_image_0281.jpg","male_image_0282.jpg","male_image_0283.jpg","male_image_0284.jpg","male_image_0285.jpg","male_image_0286.jpg","male_image_0287.jpg"];
                     for (var i = 0; i < maleCount; i++){
                        var index = JS_RAND(0,datas.length);
                        images.push(RULE_BASE_URL() + "resources/names_and_faces/5638e97011ae1a8df868cfb11a4abb9f.decompress/"+datas[index]);
                        datas.splice(index, 1);
                     }
                }

                var firstnamelastname =  ["An Chinh","An Di","An Dung","An Dương","Ân Huệ","Ân Khom","Ân Không","An Miên","Ân Mộng","Ân Ngân","An Ngang","Ân Ngao","An Ngọc","An Phan","An Phương","An Tăng","Ân Thiên","An Tông","Ân Tông","An Văn","An Vy","Ân Xinh","Ánh Be","Ánh Chi","Ánh Dung","Ánh Khả","Ánh Mạnh","Ánh Thanh","Ánh Thương","Ánh Tịnh","Ánh Xuân","Ánh Yến","Át Bảo","Át Đặng","Át Du","Át Lê","Át Mai","Át Miên","Át Sài","Át Sam","Át Thê","Át Tông","Át Vân","Ấu Át","Ấu Bảo","Ấu Biền","Ấu Ca","Ấu Chiên","Âu Hằng","Âu Hứa","Âu Huệ","Âu La","Ấu La","Ấu Lành","Âu Mẫn","Ấu Mang","Âu Mộng","Ấu Phái","Âu Sên","Ấu Sên","Ấu Tài","Âu Tăng","Âu Thanh","Âu Thi","Âu Thoa","Ấu Vy","Âu Xuân","Bảo Bảo","Bảo Mạ","Bảo Ngang","Bảo Song","Bảo Xinh","Be Bảo","Be Kha","Be Ngao","Be Tín","Be Viên","Biền Âu","Biền Bình","Biền Hà","Biền Mít","Biền Nam","Biền Ngây","Biền Niệm","Biền Phúc","Biền Phụng","Biền Quy","Biền Sa","Biền Song","Bình Mao","Bình Miên","Bình Na","Bình San","Bình Sen","Bình Thê","Bình Tình","Bình Viên","Ca Ấu","Ca Châu","Ca Chu","Ca Dui","Ca Hằng","Ca Huệ","Ca Khánh","Ca Lan","Ca Lành","Ca Lê","Ca Ngang","Ca Ngao","Ca Ni","Ca Phúc","Ca Quy","Ca Tăng","Châu Ấu","Châu Bình","Châu Khánh","Châu Mạnh","Châu Mẫu","Châu Ngà","Châu Ngao","Châu Ngọc","Châu Tài","Châu Thanh","Châu Thiên","Châu Vy","Chi Ân","Chi Be","Chi Ca","Chi Liên","Chi Luyến","Chi Ngọc","Chi Ôn","Chi Sa","Chi San","Chiên Châu","Chiên Lành","Chiên Linh","Chiên Ly","Chiên Mẫu","Chiên Mít","Chiên Phan","Chiên Thi","Chinh Dung","Chinh Mân","Chinh Nam","Chinh Ngây","Chinh Ngọc","Chinh Nguyễn","Chinh Pha","Chinh Phấn","Chu  Hà","Chu  Huệ","Chu  La","Chu  Mân","Chu  Pha","Chu  Phụng","Chu  Vy","Dân Đoàn","Dân Huệ","Dân Liên","Dân Mộng","Dân Ngà","Dân Nguyễn","Dân Song","Dân Tăng","Dân Tình","Dân Vân","Đặng Bảo","Đặng Hằng","Đặng Liên","Đặng Mạnh","Đặng Ngân","Đặng Ngang","Đặng Pha","Đặng Phan","Đặng Tịnh","Đặng Yến","Di An","Di Ân","Di Chi","Di Du","Di Huệ","Di Khom","Di Mân","Di Mao","Di Phúc","Di Thái","Di Thi","Đoàn Âu","Đoàn Ca","Đoàn Chiên","Đoàn Chu","Đoàn Khả","Đoàn La","Đoàn Mao","Đoàn Mẫu","Đoàn Nung","Đoàn Phái","Đoàn Phan","Đoàn Quý","Đoàn San","Đoàn Sên","Đoàn Thương","Du Di","Du Đoàn","Du Luyến","Du Mạnh","Du Ni","Du Niệm","Du Quy","Du Sam","Dui Hà","Dui La","Dui Nam","Dui Ni","Dui Quỳnh","Dui Xinh","Dung Chinh","Dung Dân","Dung Khanh","Dung Không","Dung Lê","Dung Ni","Dung Pha","Dung Tăng","Dung Thảo","Dung Thiên","Dương Dân","Dương Huệ","Dương Mạnh","Dương My","Dương Nguyễn","Dương Nung","Dương Tăng","Em Bình","Em Châu","Em Đặng","Em Dương","Em Lan","Em Lành","Em Linh","Em Lùng","Em Luyến","Em Mộng","Em Phụng","Em Sao","Em Sên","Em Thái","Em Vân","Em Yến","Hà Ân","Hà Ánh","Hà Bình","Hà Ca","Hà Chi","Hà Chu","Hà Dui","Hà Huệ","Hà Kha","Hà Khả","Hà Lan","Hà Liên","Hà Linh","Hà Mộng","Hà Ngà","Hà Niệm","Hà Nung","Hà Phan","Hà Qua","Hà San","Hà Tài","Hà Trinh","Hà Xinh","Hà Yến","Hằng An","Hằng Hằng","Hằng Mạ","Hằng Ngọc","Hằng Ni","Hằng Niệm","Hằng Quy","Hằng Quỳnh","Hằng Rang","Hằng San","Hằng Sen","Hằng Xinh","Hằng Xuân","Hứa Ân","Hứa Âu","Hứa Chu","Hứa Đoàn","Hứa Khanh","Hứa Khánh","Hứa Lành","Hứa Ma","Hứa Mân","Hứa Miên","Hứa Ngang","Hứa Rang","Huệ Đặng","Huệ Hà","Huệ Khả","Huệ Khánh","Huệ Mang","Huệ Nguyễn","Huệ Thoa","Huệ Tín","Kha Không","Khả Không","Kha Lã","Kha Lan","Kha Ngân","Khả Ngang","Khả Ninh","Khả Pha","Khả Phúc","Kha Phương","Khả Qua","Khả Quý","Khả Sà","Khả Sên","Khả Tín","Kha Trang","Khả Vân","Khanh Ánh","Khánh Chi","Khánh Dui","Khanh Hằng","Khánh Huệ","Khánh Luyến","Khánh Ma","Khánh Mai","Khanh Mẫn","Khánh Mẫu","Khanh Mít","Khánh Nam","Khanh Ngà","Khánh Ngọc","Khánh Ni","Khánh Phúc","Khánh Phụng","Khanh Qua","Khánh Riêng","Khánh Sài","Khanh Thi","Khanh Thương","Khánh Thương","Khanh Trinh","Khánh Vân","Khánh Viên","Khanh Yến","Khom Ca","Khom Lan","Khom Mẫu","Khom Ngang","Không Bảo","Không Be","Không Chi","Không Hà","Không Lê","Không Ngân","Không Ninh","Không Ôn","Không Phấn","Không Qua","Không Quý","Không Sài","Không Thái","Không Thảo","Không Thoa","La Huệ","Lã Khanh","Lã Khom","La Không","Lã Lê","Lã Mai","Lã Mao","Lã Na","La Nga","Lã Niệm","Lã Phái","La Phong","Lã Sài","La Tín","Lã Trang","La Xuân","Lan Khanh","Lan Luyến","Lan Nam","Lan Nung","Lan Phái","Lan Phúc","Lan Thiên","Lan Xinh","Lành Ân","Lành Âu","Lành Biền","Lành Ly","Lành My","Lành Quý","Lành Sên","Lành Thái","Lành Thanh","Lê Chinh","Lê Lành","Lê Liên","Lê Ma","Lê Mang","Lê Qua","Lê Riêng","Lê Thái","Lê Viên","Liên Át","Liên Du","Liên Hứa","Liên Khả","Liên Không","Liên Lan","Liên Lùng","Liên Mẫn","Liên Mao","Liên Phong","Liên Qua","Liên Vy","Liên Xuân","Linh Đoàn","Linh Huệ","Linh Mạnh","Linh Mộng","Linh Ngang","Linh Nguyễn","Linh Phái","Linh Phong","Linh Tín","Lùng An","Lùng Châu","Lùng Đoàn","Lùng Em","Lùng Hà","Lùng Liên","Lùng Mân","Lùng Phan","Lùng Sà","Lùng Song","Lùng Thảo","Lùng Thiên","Luyến Chi","Luyến Huệ","Luyến Kha","Luyến Mộng","Luyến Ngang","Luyến Nguyễn","Luyến Ninh","Luyến Ôn","Luyến Phấn","Luyến Rang","Luyến San","Luyến Sao","Luyến Tín","Luyến Vân","Ly Bảo","Ly Châu","Ly Khanh","Ly Mạnh","Ly Ngây","Ly Quỳnh","Ly Sao","Ly Tín","Ly Xuân","Ma An","Mạ Âu","Mạ Be","Mạ Biền","Mạ Châu","Mạ Chu","Ma Di","Mạ Dương","Ma Em","Mạ Em","Ma Huệ","Ma Kha","Ma Khánh","Mạ Khanh","Mạ Không","Mạ Lan","Ma Liên","Mạ Liên","Ma Lùng","Mạ Mai","Ma Mân","Mạ Mân","Mạ Miên","Ma Phấn","Ma Phụng","Ma Qua","Ma Sa","Mạ Thanh","Ma Thương","Mạ Tín","Ma Xinh","Mai Chiên","Mai Dân","Mai Huệ","Mai Kha","Mai Khánh","Mai Mẫu","Mai Ngang","Mai Phái","Mai Riêng","Mai Sao","Mai Sên","Mai Tông","Mai Viên","Mẫn Ân","Mân Ấu","Mẫn Biền","Mân Đoàn","Mẫn Du","Mân Dung","Mân Dương","Mẫn Huệ","Mân Lành","Mẫn Lành","Mân Liên","Mân Lùng","Mân Mai","Mân Mang","Mẫn Mẫu","Mân My","Mẫn Na","Mẫn Ngân","Mẫn Ninh","Mẫn Pha","Mân Phấn","Mẫn Phấn","Mân Phong","Mẫn Tông","Mân Xuân","Mẫn Xuân","Mang An","Mang Châu","Mang Chiên","Mang Dương","Mang Em","Mang Huệ","Mang Khả","Mang Liên","Mang Quỳnh","Mang Tín","Mạnh Âu","Mạnh Be","Mạnh Chinh","Mạnh Đặng","Mạnh Em","Mạnh Khánh","Mạnh Lã","Mạnh Liên","Mạnh Mạnh","Mạnh Na","Mạnh Nga","Mạnh Sa","Mạnh Sao","Mạnh Thảo","Mạnh Tình","Mạnh Trang","Mạnh Vân","Mạnh Xuân","Mao Châu","Mao Đoàn","Mao Dui","Mao Hà","Mao Không","Mao Luyến","Mao Mai","Mao Nung","Mao Phan","Mao Phong","Mao San","Mao Tăng","Mao Thái","Mao Thê","Mao Xuân","Mẫu Át","Mẫu Em","Mẫu Mạnh","Mẫu Mộng","Mẫu Ngang","Mẫu Ninh","Mẫu Ôn","Mẫu Rang","Mẫu Sao","Mẫu Song","Mẫu Tín","Miên Chi","Miên Chinh","Miên Dân","Miên Di","Miên Khanh","Miên Khom","Miên Ma","Miên Miên","Miên Mít","Miên Ngà","Miên Ngân","Miên Ngao","Miên Ngây","Miên Niệm","Miên Phan","Miên Phong","Miên Sài","Miên Thảo","Minh Dân","Minh Dung","Minh Lan","Minh Lê","Minh Ninh","Minh Song","Minh Thiên","Minh Thương","Minh Xuân","Mít Đặng","Mít Em","Mít Mạnh","Mít My","Mít Ngây","Mít Thiên","Mít Tịnh","Mộng Huệ","Mộng Mai","Mộng Ngao","Mộng Phan","Mộng Rang","Mộng Tông","Mộng Trinh","My Âu","My Em","My Mẫn","My Mẫu","My Nguyễn","My Niệm","My Ôn","My Phong","My Thiên","My Tín","My Xinh","Na Âu","Na Đoàn","Na Dui","Na Em","Na Lan","Na Lành","Na Mai","Na Mao","Na Ngân","Na Phái","Na Phấn","Na Rang","Nam Bảo","Nam Dân","Nam Khánh","Nam Linh","Nam Ma","Nam Mạ","Nam Mạnh","Nam Na","Nam Nguyễn","Nam Sa","Nam Sài","Nam Tín","Ngà An","Nga Chinh","Nga Kha","Nga Khả","Nga Khanh","Nga Khánh","Ngà Mang","Nga Mạnh","Nga Na","Nga Ngà","Nga Nguyễn","Ngà Phấn","Ngà Phương","Ngà Quý","Nga Rang","Ngà Tài","Nga Tín","Nga Tông","Ngà Trinh","Ngân Be","Ngân Hà","Ngân Ma","Ngân Niệm","Ngân Phúc","Ngân Quý","Ngân Sà","Ngân Sam","Ngân Thảo","Ngân Thiên","Ngân Trinh","Ngang Be","Ngang Em","Ngang Hà","Ngang Hứa","Ngang Khánh","Ngang Lan","Ngang Mẫu","Ngang Na","Ngang Nung","Ngang Sên","Ngang Song","Ngang Thương","Ngang Tịnh","Ngang Văn","Ngang Viên","Ngang Vy","Ngao Đặng","Ngao Hà","Ngao Hằng","Ngao Khả","Ngao Lã","Ngao Lan","Ngao Lê","Ngao Luyến","Ngao Ma","Ngao Minh","Ngao Thái","Ngây Đặng","Ngây Hà","Ngây Không","Ngây Nga","Ngây Pha","Ngây Phái","Ngây Phụng","Ngây Thương","Ngây Tịnh","Ngây Tông","Ngọc Chi","Ngọc Dân","Ngọc Hứa","Ngọc Không","Ngọc Lan","Ngọc Lành","Ngọc Lùng","Ngọc Mẫu","Ngọc Nung","Ngọc Phấn","Ngọc Quỳnh","Ngọc Tài","Ngọc Tịnh","Ngọc Văn","Ngọc Vân","Nguyễn Bảo","Nguyễn Ca","Nguyễn Chinh","Nguyễn Chu","Nguyễn Dung","Nguyễn La","Nguyễn Lành","Nguyễn Mạ","Nguyễn Mân","Nguyễn Thiên","Nguyễn Thương","Ni Chi","Ni Lan","Ni Lành","Ni Mẫn","Ni Miên","Ni Phấn","Ni Sam","Ni Tài","Ni Văn","Niệm Chinh","Niệm Kha","Niệm Ma","Niệm Mân","Niệm Mít","Niệm Ni","Niệm Rang","Niệm Sao","Niệm Tịnh","Niệm Yến","Ninh Ấu","Ninh Biền","Ninh Ngà","Ninh Ngân","Ninh Phúc","Ninh Tài","Ninh Tín","Nung  Du","Nung  Dung","Nung  Khanh","Nung  Lã","Nung  Lê","Nung  Ngao","Nung  Phái","Nung  Phương","Nung  Quy","Nung  Sam","Nung  Sen","Nung  Tông","Ôn Châu","Ôn Chiên","Ôn Khả","Ôn Ma","Ôn Mai","Ôn Mạnh","Ôn Miên","Ôn Ngọc","Ôn Ninh","Ôn Ôn","Ôn Phan","Ôn Quy","Ôn Tài","Pha Bình","Pha Chinh","Pha Đặng","Pha Lã","Pha Lê","Pha Mân","Pha Nam","Pha Ni","Pha Quy","Pha Sao","Pha Thê","Pha Thi","Pha Viên","Pha Xuân","Phái Biền","Phái Chinh","Phái Dung","Phái Hà","Phái Khom","Phái Ma","Phái Ngân","Phái Phấn","Phái Phong","Phái Phương","Phái Sam","Phái Tăng","Phái Thi","Phái Thiên","Phái Viên","Phấn Âu","Phan Be","Phan Bình","Phấn Châu","Phấn Chinh","Phấn Chu","Phấn Dương","Phan Hà","Phấn Kha","Phan La","Phấn La","Phan Lan","Phấn Ly","Phấn Mao","Phấn My","Phan Na","Phan Tông","Phấn Trang","Phan Xuân","Phan Yến","Phong Chi","Phong Dui","Phong Em","Phong La","Phong Ly","Phong Na","Phong Ngân","Phong Ngang","Phong Ngọc","Phong Phái","Phong Sà","Phong Sen","Phong Thương","Phúc An","Phúc Đoàn","Phúc Khả","Phúc Khom","Phúc Không","Phúc Mộng","Phúc Nam","Phúc Quý","Phúc Thê","Phúc Trinh","Phúc Viên","Phụng Be","Phụng Hứa","Phụng La","Phụng Luyến","Phụng Tài","Phụng Thảo","Phụng Thiên","Phương An","Phương Be","Phương Đặng","Phương Di","Phương Du","Phương Dung","Phương Mai","Phương Mạnh","Phương Phụng","Phương Riêng","Phương Sam","Phương Thái","Phương Tông","Phương Yến","Qua Ca","Qua Chi","Qua Dui","Qua Dung","Qua Mang","Qua Mạnh","Qua Mộng","Qua Na","Qua Pha","Qua Phan","Qua Phúc","Qua Sa","Qua Sà","Qua Viên","Quý Át","Quý Biền","Quy Em","Quy Hằng","Quý La","Quy Lan","Quý Lê","Quý Mân","Quý Na","Quy Nguyễn","Quy Ôn","Quý Ôn","Quy Tài","Quý Tài","Quý Thiên","Quy Thoa","Quy Văn","Quý Vân","Quỳnh Châu","Quỳnh Mân","Quỳnh Phúc","Quỳnh Trinh","Quỳnh Văn","Rang Đoàn","Rang Hà","Rang Khanh","Rang Lành","Rang Mạnh","Rang Minh","Rang Ngây","Rang Riêng","Rang Sên","Rang Thanh","Riêng Hứa","Riêng Lan","Riêng Mẫu","Riêng Ni","Riêng Pha","Riêng Phấn","Riêng Sài","Riêng Sên","Riêng Thê","Riêng Tình","Riêng Tịnh","Riêng Văn","Riêng Xinh","Sà Châu","Sà Dân","Sà Đặng","Sa Du","Sa Em","Sà Hứa","Sa Lã","Sà Lùng","Sa Mạ","Sà Mân","Sa Mao","Sà My","Sà Ôn","Sa Rang","Sà Song","Sa Tài","Sa Thanh","Sà Thương","Sa Tông","Sà Trinh","Sa Yến","Sài Át","Sài Chiên","Sài Chinh","Sài Dân","Sài Dương","Sài Không","Sài Lùng","Sài Miên","Sài Tăng","Sài Thiên","Sài Tông","Sam An","Sam Be","Sam Bình","Sam Dân","Sam Hà","Sam La","Sam Lan","Sam Mân","Sam Ngà","Sam Ôn","Sam Qua","Sam Sà","Sam Tài","Sam Trinh","Sam Viên","San Châu","San Chiên","San Huệ","San Ma","San Ngang","San Phái","San Phong","San Riêng","San Sa","San Thương","San Tín","San Tịnh","San Tông","San Vy","San Xinh","Sao Át","Sao Bình","Sao Đoàn","Sao Mân","Sao Ngân","Sao Phái","Sao Phương","Sao Quy","Sao Quý","Sao Thoa","Sao Trinh","Sen Ánh","Sen Bảo","Sen Biền","Sên Chiên","Sen Đặng","Sen Hà","Sên Khanh","Sen Lê","Sên Lê","Sen Linh","Sên Luyến","Sên Ma","Sen Mẫn","Sên Mẫn","Sen Ôn","Sen Pha","Sên Phan","Sen Sên","Sen Thương","Sên Thương","Sen Tịnh","Sên Tình","Sên Vân","Sên Viên","Sen Vy","Song Đoàn","Song Hứa","Song Lành","Song Minh","Song Ni","Song Sam","Song Sên","Song Song","Song Tịnh","Song Vy","Song Xuân","Tài Chu","Tài Em","Tài Khả","Tài Luyến","Tài Minh","Tài Song","Tài Yến","Tăng Bảo","Tăng Châu","Tăng Chu","Tăng Đoàn","Tăng Em","Tăng Khom","Tăng Mạ","Tăng Mít","Tăng San","Tăng Sen","Tăng Tín","Tăng Tình","Thái Ân","Thái Ấu","Thái Bảo","Thái Biền","Thái Khả","Thái Không","Thái Lành","Thái Lê","Thái Mao","Thái Ngang","Thái Thanh","Thái Trang","Thanh Ân","Thanh Chinh","Thanh Đặng","Thanh Huệ","Thanh Ngang","Thanh Ngao","Thanh Ngây","Thanh Ngọc","Thanh Phái","Thanh Quý","Thanh Tăng","Thanh Thanh","Thanh Thê","Thanh Xinh","Thảo An","Thảo Ánh","Thảo Biền","Thảo Hà","Thảo Hằng","Thảo Lê","Thảo Ly","Thảo My","Thảo Nam","Thảo Ngao","Thảo Ninh","Thảo Nung","Thảo Phấn","Thảo Riêng","Thảo Sên","Thảo Thái","Thảo Tình","Thảo Trang","Thê Ân","Thê Hứa","Thê Khom","Thê Minh","Thê Na","Thê Ngọc","Thê Phái","Thê Phan","Thê Sà","Thê San","Thê Tăng","Thê Xinh","Thi Hà","Thi Khả","Thi Mít","Thi Vy","Thiên Ca","Thiên Chi","Thiên Không","Thiên Liên","Thiên Linh","Thiên Luyến","Thiên Mân","Thiên My","Thiên Nga","Thiên Ngang","Thiên Ngao","Thiên Qua","Thiên Sên","Thiên Thanh","Thiên Thương","Thiên Viên","Thoa Ân","Thoa Âu","Thoa Mân","Thoa Ngà","Thoa Nung","Thoa Ôn","Thoa Pha","Thoa Phụng","Thoa Sài","Thoa Vân","Thoa Xinh","Thoa Xuân","Thương Ánh","Thương Âu","Thương Hứa","Thương Kha","Thương Khánh","Thương Khom","Thương Mân","Thương Minh","Thương Ôn","Thương Phái","Thương Phan","Thương Tình","Thương Viên","Tín An","Tín Ánh","Tín Be","Tín Đoàn","Tín Hà","Tín Mẫn","Tín Mẫu","Tín Miên","Tín Mộng","Tín Ngây","Tín Ngọc","Tín Ni","Tín Pha","Tín Tăng","Tịnh Dân","Tình Du","Tình Huệ","Tịnh Huệ","Tịnh Không","Tình Lan","Tịnh Liên","Tình Luyến","Tình My","Tình Ngây","Tịnh Ngây","Tịnh Quy","Tịnh Riêng","Tịnh Thương","Tông Ca","Tông Châu","Tông Khả","Tông Lùng","Tông Ma","Tông Mít","Tông Ngây","Tông Thanh","Tông Vân","Trang Châu","Trang Chi","Trang Du","Trang Khanh","Trang Khom","Trang Lê","Trang Mân","Trang Ni","Trang Phụng","Trang Qua","Trang Quy","Trang Thi","Trang Vân","Trinh Ân","Trinh Bình","Trinh Đặng","Trinh Hứa","Trinh Kha","Trinh Mẫu","Trinh Mít","Trinh Ngọc","Trinh Niệm","Trinh Qua","Trinh Rang","Trinh Sa","Trinh Tăng","Văn Át","Vân Át","Vân Âu","Văn Biền","Văn Ca","Vân Châu","Vân Chi","Vân Đoàn","Văn Huệ","Văn Khả","Vân Lã","Vân Mẫn","Vân Na","Vân Ngà","Vân Ngân","Vân Phụng","Vân Qua","Văn Quỳnh","Vân Sao","Vân Sen","Văn Tài","Văn Tín","Văn Tịnh","Văn Văn","Văn Yến","Viên Ân","Viên Ánh","Viên Ấu","Viên Bình","Viên Chu","Viên Đặng","Viên Đoàn","Viên Hà","Viên Hằng","Viên Kha","Viên Ma","Viên Mạnh","Viên Mao","Viên Miên","Viên Mộng","Viên Nam","Viên Nga","Viên Phúc","Viên Sà","Viên Sài","Viên Tịnh","Viên Tông","Viên Vy","Vy Ân","Vy Âu","Vy Đặng","Vy Khanh","Vy Khánh","Vy Khom","Vy Mang","Vy Nam","Vy Nguyễn","Vy Ninh","Vy Nung","Vy Phúc","Vy Phương","Vy Sà","Vy Tín","Vy Trang","Vy Vân","Xinh Ca","Xinh Chi","Xinh Huệ","Xinh Khom","Xinh Liên","Xinh Mao","Xinh Mít","Xinh Sài","Xinh San","Xinh Thiên","Xinh Vân","Xuân Hà","Xuân Hứa","Xuân Khánh","Xuân Không","Xuân La","Xuân Lùng","Xuân Nam","Xuân Nga","Xuân Niệm","Xuân Ninh","Xuân Phong","Xuân Phúc","Xuân Phương","Xuân Quy","Xuân Tông","Xuân Trinh","Yến Huệ","Yến Mít","Yến Niệm","Yến Pha","Yến Phấn","Yến San","Yến Thê","Yến Tình","Yến Trang","Yến Vân"];
                {//first name
                     var datas =  firstnamelastname;
                     for (var i = 0; i < questionCount; i++){
                        var index = JS_RAND(0,datas.length);
                        firstNames.push(""+datas[index]);
                        datas.splice(index, 1);
                     }
                }
                {//last name
                     var datas =  firstnamelastname;
                     for (var i = 0; i < questionCount; i++){
                        var index = JS_RAND(0,datas.length);
                        lastNames.push(""+datas[index]);
                        datas.splice(index, 1);
                     }
                }
                for (var i = 0; i < questionCount; i++){
                    var index = JS_RAND(0,images.length);


                    var item = {};
                    item.title = firstNames[index];
                    item.subtitle = lastNames[index];
                    item.image = images[index];
                    resultArray.push(item);


                    images.splice(index, 1);
                    lastNames.splice(index, 1);
                    firstNames.splice(index, 1);
                }
            }catch(e){
                console.log("ERRROR SINH DE : "+e);
            }
        }

        var questionItems = [];
        var question = {
            "column": column,
            "row": row,
            "count" : count,
            "items": questionItems
        }
        {
            var tempArray = [];
            for (var i = 0; i < examQuestionItems.length; i++){
                var questionItemDict = examQuestionItems[i];
                var awserItemDict = {"value1":"","value2":""};
                var itemDict = {"question":questionItemDict, "answer":awserItemDict};
                tempArray.push(itemDict);
            }

            while (tempArray.length>0){
                var index = JS_RAND(0,tempArray.length);
                var itemDict = tempArray[index];
                questionItems.push(itemDict);
                tempArray.splice(index,1);
                
            }

            console.log("ERRROR SINH DE : "+questionItems.length + " count:" + count +" examQuestionItems:" + examQuestionItems.length);
        }

        var resultPara = {
            "gameInfo": gameInfo,
            "examQuestions": examQuestions,
            "questions": question
        }

        //xu ly sinh de
        var isSuccess = true;
        var errorCode = 0;
        var errorMessage = 0;
        callback(isSuccess, errorCode, errorMessage, resultPara);
        
    }
    check_mark(paraInput, callback){


        function valueOfCell(r,c, questions){
            var column = questions.column;
            return questions.items[r * column + c];
        }

        function checkAnwserEmpty(answerItem){
            //window.alert("item:"+answerItem.value1+"compare:" + (answerItem.value1 === "-1"));
            //window.alert("item:"+answerItem.value1+"value2:" + answerItem.value2);
            if ((answerItem.value1 === "-1" || answerItem.value1.length == 0) && (answerItem.value2 === "-1"  || answerItem.value2.length == 0)){
                return true;
            }
            return false;
        }

        function checkEmptyRow(r, questions){
            var column = questions.column;
            for (var c = 0; c < column; c++) {
                var questionItemDict = valueOfCell(r,c,questions);
                var answerItem = questionItemDict.answer;
                if (!checkAnwserEmpty(answerItem)){
                    return false;
                }
            }
            return true;
        }

        function scoreForMiddleRow(r, questions){
            var column = questions.column;
            var score = 0;
            var answerCount = column;
            for (var c = 0; c < column; c++) {
                var questionItemDict = valueOfCell(r,c,questions);
                // var answerItem = questionItemDict.answer;
                // var questionItem = questionItemDict.question;
                if (questionItemDict.correct){
                    score++;
                }
            }
            //window.alert(r+ " middle score: "+ score +" answer: " + answerCount);
            if (score == answerCount) return score;
            if (score == answerCount-1) return Math.round(score/2);
            return 0;
        }

        function scoreForEndRow(r, questions){
            var column = questions.column;
            var score = 0;
            var answerCount = 0;
            for (var c = Math.min(questions.count-questions.column*r-1,questions.column-1); c>= 0; c--) {
                var questionItemDict = valueOfCell(r,c,questions);
                var answerItem = questionItemDict.answer;

                if (!checkAnwserEmpty(answerItem)){
                    answerCount = c+1;
                    break;
                }
            }

            for (var c = 0; c < column; c++) {
                var questionItemDict = valueOfCell(r,c,questions);
                var answerItem = questionItemDict.answer;
                // var questionItem = questionItemDict.question;
                // answerCount++;
                if (!checkAnwserEmpty(answerItem)){
                    if (questionItemDict.correct) score++;
                }
            }
            //window.alert(r+" end score: "+ score +" answer: " + answerCount);
            if (score == answerCount) return score;
            if (score == answerCount-1) return Math.round(score/2);
            return 0;
        }


        // var question = paraInput.question;
        var gameInfo = paraInput.gameInfo;
        var examQuestions = paraInput.examQuestions;
        var questions = paraInput.questions;
        var column = examQuestions.column;
        var row = examQuestions.row;
        var count = examQuestions.count;

        var score = 0;


        //cap nhat cacs gia tri correct1, correct2, correct3
        for (var i = 0; i < count; i++){
            var questionItemDict = questions.items[i];
            var answerItem = questionItemDict.answer;
            var questionItem = questionItemDict.question;
            questionItemDict.correct1 = false;
            questionItemDict.correct2 = false;
            if (answerItem.hasOwnProperty("value1") && questionItem.hasOwnProperty("title")){
                questionItemDict.correct1 = compareVNString(answerItem.value1, questionItem.title);
                if (questionItemDict.correct1) score++;
            }
            if (answerItem.hasOwnProperty("value2") && questionItem.hasOwnProperty("subtitle")){
                questionItemDict.correct2 = compareVNString(answerItem.value2, questionItem.subtitle);
                if (questionItemDict.correct2) score++;
            }
            questionItemDict.correct = questionItemDict.correct1 && questionItemDict.correct2;
        }

        //window.alert(score+"diem");

        questions.score = score;
        // questions.recallTime = 100;//tam bo
        // questions.memoryTime = 100;//tam bo
        //xu ly sinh de
        var resultPara = paraInput;
        var isSuccess = true;
        var errorCode = 0;
        var errorMessage = 0;
        callback(isSuccess, errorCode, errorMessage, resultPara);
    }
}

class ServerBinaryNumber{
    generate(paraInput, callback){
        var game_type = paraInput.game_type;
        var game_mode = paraInput.game_mode;

        var column = 30;
        var row = 100;
        var count = column*row;
        var memoryTime = 300;
        var recallTime = 300;
        if (game_mode == DIFFICULT_NATIONAL()){
            column = 30;
            row = 33;
            count = column*row;
            memoryTime = 60*5;
            recallTime = 60*15;
        }else if (game_mode == DIFFICULT_INTERNATIONAL()){
            column = 30;
            row = 152;
            count = column*row;
            memoryTime = 60*30;
            recallTime = 60*60;
        }else if (game_mode == DIFFICULT_WORLD()){
            column = 30;
            row = 152;
            count = column*row;
            memoryTime = 60*30;
            recallTime = 60*60;
        }else if (game_mode == DIFFICULT_FREEDOM()){
            column = 30;
            row = paraInput.rowCount;
            count = column*row;
        }
        var gameInfo = {
                    "amount": 0,
                    "displayName": "Random Numbers",
                    "answerTime": recallTime,
                    "prepareTime": 60,
                    "gameType": game_type,
                    "speed":1,
                    "difficultType": game_mode,
                    "readExamTime": memoryTime
                    };
        
        var examQuestionItems = [];
        var examQuestions = {
            "column": column,
            "row": row,
            "count" : count,
            "items": examQuestionItems
        }
        {
            for (var i = 0; i < count; i++){
                var itemDict = {"subtitle":"",
                                "title":Math.round(Math.random()*1)
                            };
                examQuestionItems.push(itemDict);
            }
        }

        var questionItems = [];
        var question = {
            "column": column,
            "row": row,
            "count" : count,
            "items": questionItems
        }
        {
            for (var i = 0; i < count; i++){
                var questionItemDict = examQuestionItems[i];
                var awserItemDict = {"value1":"","value2":""};
                var itemDict = {"question":questionItemDict, "answer":awserItemDict};
                questionItems.push(itemDict);
            }
        }

        var resultPara = {
            "gameInfo": gameInfo,
            "examQuestions": examQuestions,
            "questions": question
        }

        //xu ly sinh de
        var isSuccess = true;
        var errorCode = 0;
        var errorMessage = 0;
        callback(isSuccess, errorCode, errorMessage, resultPara);
        
    }
    check_mark(paraInput, callback){


        function valueOfCell(r,c, questions){
            var column = questions.column;
            return questions.items[r * column + c];
        }

        function checkAnwserEmpty(answerItem){
            //window.alert("item:"+answerItem.value1+"compare:" + (answerItem.value1 === "-1"));
            //window.alert("item:"+answerItem.value1+"value2:" + answerItem.value2);
            if ((answerItem.value1 === "-1" || answerItem.value1.length == 0) && (answerItem.value2 === "-1"  || answerItem.value2.length == 0)){
                return true;
            }
            return false;
        }

        function checkEmptyRow(r, questions){
            var column = questions.column;
            for (var c = 0; c < column; c++) {
                var questionItemDict = valueOfCell(r,c,questions);
                var answerItem = questionItemDict.answer;
                if (!checkAnwserEmpty(answerItem)){
                    return false;
                }
            }
            return true;
        }

        function scoreForMiddleRow(r, questions){
            var column = questions.column;
            var score = 0;
            var answerCount = column;
            for (var c = 0; c < column; c++) {
                var questionItemDict = valueOfCell(r,c,questions);
                // var answerItem = questionItemDict.answer;
                // var questionItem = questionItemDict.question;
                if (questionItemDict.correct){
                    score++;
                }
            }
            //window.alert(r+ " middle score: "+ score +" answer: " + answerCount);
            if (score == answerCount) return score;
            if (score == answerCount-1) return Math.round(score/2);
            return 0;
        }

        function scoreForEndRow(r, questions){
            var column = questions.column;
            var score = 0;
            var answerCount = 0;
            for (var c = Math.min(questions.count-questions.column*r-1,questions.column-1); c>= 0; c--) {
                var questionItemDict = valueOfCell(r,c,questions);
                var answerItem = questionItemDict.answer;

                if (!checkAnwserEmpty(answerItem)){
                    answerCount = c+1;
                    break;
                }
            }

            for (var c = 0; c < column; c++) {
                var questionItemDict = valueOfCell(r,c,questions);
                var answerItem = questionItemDict.answer;
                // var questionItem = questionItemDict.question;
                // answerCount++;
                if (!checkAnwserEmpty(answerItem)){
                    if (questionItemDict.correct) score++;
                }
            }
            //window.alert(r+" end score: "+ score +" answer: " + answerCount);
            if (score == answerCount) return score;
            if (score == answerCount-1) return Math.round(score/2);
            return 0;
        }


        // var question = paraInput.question;
        var gameInfo = paraInput.gameInfo;
        var examQuestions = paraInput.examQuestions;
        var questions = paraInput.questions;
        var column = examQuestions.column;
        var row = examQuestions.row;
        var count = examQuestions.count;

        var score = 0;


        //cap nhat cacs gia tri correct1, correct2, correct3
        for (var i = 0; i < count; i++){
            var questionItemDict = questions.items[i];
            var answerItem = questionItemDict.answer;
            var questionItem = questionItemDict.question;
            questionItemDict.correct1 = false;
            questionItemDict.correct2 = false;
            if (answerItem.hasOwnProperty("value1") && questionItem.hasOwnProperty("title")){
                questionItemDict.correct1 = (answerItem.value1 == questionItem.title);
            }
            if (answerItem.hasOwnProperty("value2") && questionItem.hasOwnProperty("subtitle")){
                questionItemDict.correct2 = (answerItem.value2 == questionItem.subtitle);
            }
            questionItemDict.correct = questionItemDict.correct1;// && questionItemDict.correct2;
        }

        //tinh diem cho question
        // tinh diem cho dong cuoi cung
        var r = row-1;
        for (; r >= 0; r--){
            if (!checkEmptyRow(r, questions)){
                score+= scoreForEndRow(r, questions);
                r --;
                break;
            }
        }

        // tinh deim cho dong o giua 
        for (; r >= 0; r--){
            if (!checkEmptyRow(r, questions)){
                score+= scoreForMiddleRow(r, questions);
            }
        }

        //window.alert(score+"diem");

        questions.score = score;
        // questions.recallTime = 100;//tam bo
        // questions.memoryTime = 100;//tam bo
        //xu ly sinh de
        var resultPara = paraInput;
        var isSuccess = true;
        var errorCode = 0;
        var errorMessage = 0;
        callback(isSuccess, errorCode, errorMessage, resultPara);
    }
}

class ServerRandomNumber{
    generate(paraInput, callback){
        var game_type = paraInput.game_type;
        var game_mode = paraInput.game_mode;
        var column = 40;
        var row = 100;
        var count = column*row;
        var memoryTime = 300;
        var recallTime = 300;
        if (game_mode == DIFFICULT_NATIONAL()){
            column = 40;
            row = 33;
            count = column*row;
            memoryTime = 60*15;
            recallTime = 60*30;
        }else if (game_mode == DIFFICULT_INTERNATIONAL()){
            column = 40;
            row = 54;
            count = column*row;
            memoryTime = 60*30;
            recallTime = 60*60;
        }else if (game_mode == DIFFICULT_WORLD()){
            column = 40;
            row = 91;
            count = column*row;
            memoryTime = 60*60;
            recallTime = 60*120;
        }else if (game_mode == DIFFICULT_FREEDOM()){
            column = 40;
            row = paraInput.rowCount;
            count = column*row;
        }
        var gameInfo = {
                    "amount": 0,
                    "displayName": "Random Numbers",
                    "answerTime": recallTime,
                    "prepareTime": 60,
                    "gameType": game_type,
                    "speed":1,
                    "difficultType": game_mode,
                    "readExamTime": memoryTime
                    };
        
        var examQuestionItems = [];
        var examQuestions = {
            "column": column,
            "row": row,
            "count" : count,
            "items": examQuestionItems
        }
        {
            for (var i = 0; i < count; i++){
                var itemDict = {"subtitle":"",
                                "title":Math.round(Math.random()*9)
                            };
                examQuestionItems.push(itemDict);
            }
        }

        var questionItems = [];
        var question = {
            "column": column,
            "row": row,
            "count" : count,
            "items": questionItems
        }
        {
            for (var i = 0; i < count; i++){
                var questionItemDict = examQuestionItems[i];
                var awserItemDict = {"value1":"","value2":""};
                var itemDict = {"question":questionItemDict, "answer":awserItemDict};
                questionItems.push(itemDict);
            }
        }

        var resultPara = {
            "gameInfo": gameInfo,
            "examQuestions": examQuestions,
            "questions": question
        }

        //xu ly sinh de
        var isSuccess = true;
        var errorCode = 0;
        var errorMessage = 0;
        callback(isSuccess, errorCode, errorMessage, resultPara);
        
    }
    check_mark(paraInput, callback){


        function valueOfCell(r,c, questions){
            var column = questions.column;
            return questions.items[r * column + c];
        }

        function checkAnwserEmpty(answerItem){
            //window.alert("item:"+answerItem.value1+"compare:" + (answerItem.value1 === "-1"));
            //window.alert("item:"+answerItem.value1+"value2:" + answerItem.value2);
            if ((answerItem.value1 === "-1" || answerItem.value1.length == 0) && (answerItem.value2 === "-1"  || answerItem.value2.length == 0)){
                return true;
            }
            return false;
        }

        function checkEmptyRow(r, questions){
            var column = questions.column;
            for (var c = 0; c < column; c++) {
                var questionItemDict = valueOfCell(r,c,questions);
                var answerItem = questionItemDict.answer;
                if (!checkAnwserEmpty(answerItem)){
                    return false;
                }
            }
            return true;
        }

        function scoreForMiddleRow(r, questions){
            var column = questions.column;
            var score = 0;
            var answerCount = column;
            for (var c = 0; c < column; c++) {
                var questionItemDict = valueOfCell(r,c,questions);
                // var answerItem = questionItemDict.answer;
                // var questionItem = questionItemDict.question;
                if (questionItemDict.correct){
                    score++;
                }
            }
            //window.alert(r+ " middle score: "+ score +" answer: " + answerCount);
            if (score == answerCount) return score;
            if (score == answerCount-1) return Math.round(score/2);
            return 0;
        }

        function scoreForEndRow(r, questions){
            var column = questions.column;
            var score = 0;
            var answerCount = 0;
            for (var c = Math.min(questions.count-questions.column*r-1,questions.column-1); c>= 0; c--) {
                var questionItemDict = valueOfCell(r,c,questions);
                var answerItem = questionItemDict.answer;

                if (!checkAnwserEmpty(answerItem)){
                    answerCount = c+1;
                    break;
                }
            }

            for (var c = 0; c < column; c++) {
                var questionItemDict = valueOfCell(r,c,questions);
                var answerItem = questionItemDict.answer;
                // var questionItem = questionItemDict.question;
                // answerCount++;
                if (!checkAnwserEmpty(answerItem)){
                    if (questionItemDict.correct) score++;
                }
            }
            //window.alert(r+" end score: "+ score +" answer: " + answerCount);
            if (score == answerCount) return score;
            if (score == answerCount-1) return Math.round(score/2);
            return 0;
        }


        // var question = paraInput.question;
        var gameInfo = paraInput.gameInfo;
        var examQuestions = paraInput.examQuestions;
        var questions = paraInput.questions;
        var column = examQuestions.column;
        var row = examQuestions.row;
        var count = examQuestions.count;

        var score = 0;


        //cap nhat cacs gia tri correct1, correct2, correct3
        for (var i = 0; i < count; i++){
            var questionItemDict = questions.items[i];
            var answerItem = questionItemDict.answer;
            var questionItem = questionItemDict.question;
            questionItemDict.correct1 = false;
            questionItemDict.correct2 = false;
            if (answerItem.hasOwnProperty("value1") && questionItem.hasOwnProperty("title")){
                questionItemDict.correct1 = (answerItem.value1 == questionItem.title);
            }
            if (answerItem.hasOwnProperty("value2") && questionItem.hasOwnProperty("subtitle")){
                questionItemDict.correct2 = (answerItem.value2 == questionItem.subtitle);
            }
            questionItemDict.correct = questionItemDict.correct1;// && questionItemDict.correct2;
        }

        //tinh diem cho question
        // tinh diem cho dong cuoi cung
        var r = row-1;
        for (; r >= 0; r--){
            if (!checkEmptyRow(r, questions)){
                score+= scoreForEndRow(r, questions);
                r --;
                break;
            }
        }

        // tinh deim cho dong o giua 
        for (; r >= 0; r--){
            if (!checkEmptyRow(r, questions)){
                score+= scoreForMiddleRow(r, questions);
            }
        }

        //window.alert(score+"diem");

        questions.score = score;
        // questions.recallTime = 100;//tam bo
        // questions.memoryTime = 100;//tam bo
        //xu ly sinh de
        var resultPara = paraInput;
        var isSuccess = true;
        var errorCode = 0;
        var errorMessage = 0;
        callback(isSuccess, errorCode, errorMessage, resultPara);
    }
}

class ServerSpeedNumber{
    generate(paraInput, callback){
        var game_type = paraInput.game_type;
        var game_mode = paraInput.game_mode;

        var column = 40;
        var row = 100;
        var count = column*row;
        var memoryTime = 300;
        var recallTime = 300;
        if (game_mode == DIFFICULT_NATIONAL()){
            column = 40;
            row = 16;
            count = column*row;
            memoryTime = 60*5;
            recallTime = 60*15;
        }else if (game_mode == DIFFICULT_INTERNATIONAL()){
            column = 40;
            row = 16;
            count = column*row;
            memoryTime = 60*5;
            recallTime = 60*15;
        }else if (game_mode == DIFFICULT_WORLD()){
            column = 40;
            row = 16;
            count = column*row;
            memoryTime = 60*5;
            recallTime = 60*15;
        }else if (game_mode == DIFFICULT_FREEDOM()){
            column = 40;
            row = paraInput.rowCount;
            count = column*row;
        }
        var gameInfo = {
                    "amount": 0,
                    "displayName": "Speed Numbers",
                    "answerTime": recallTime,
                    "prepareTime": 60,
                    "gameType": game_type,
                    "speed":1,
                    "difficultType": game_mode,
                    "readExamTime": memoryTime
                    };
        
        var examQuestionItems = [];
        var examQuestions = {
            "column": column,
            "row": row,
            "count" : count,
            "items": examQuestionItems
        }
        {
            for (var i = 0; i < count; i++){
                var itemDict = {"subtitle":"",
                                "title":Math.round(Math.random()*9)
                            };
                examQuestionItems.push(itemDict);
            }
        }

        var questionItems = [];
        var question = {
            "column": column,
            "row": row,
            "count" : count,
            "items": questionItems
        }
        {
            for (var i = 0; i < count; i++){
                var questionItemDict = examQuestionItems[i];
                var awserItemDict = {"value1":"","value2":""};
                var itemDict = {"question":questionItemDict, "answer":awserItemDict};
                questionItems.push(itemDict);
            }
        }

        var resultPara = {
            "gameInfo": gameInfo,
            "examQuestions": examQuestions,
            "questions": question
        }

        //xu ly sinh de
        var isSuccess = true;
        var errorCode = 0;
        var errorMessage = 0;
        callback(isSuccess, errorCode, errorMessage, resultPara);
        
    }
    check_mark(paraInput, callback){


        function valueOfCell(r,c, questions){
            var column = questions.column;
            return questions.items[r * column + c];
        }

        function checkAnwserEmpty(answerItem){
            //window.alert("item:"+answerItem.value1+"compare:" + (answerItem.value1 === "-1"));
            //window.alert("item:"+answerItem.value1+"value2:" + answerItem.value2);
            if ((answerItem.value1 === "-1" || answerItem.value1.length == 0) && (answerItem.value2 === "-1"  || answerItem.value2.length == 0)){
                return true;
            }
            return false;
        }

        function checkEmptyRow(r, questions){
            var column = questions.column;
            for (var c = 0; c < column; c++) {
                var questionItemDict = valueOfCell(r,c,questions);
                var answerItem = questionItemDict.answer;
                if (!checkAnwserEmpty(answerItem)){
                    return false;
                }
            }
            return true;
        }

        function scoreForMiddleRow(r, questions){
            var column = questions.column;
            var score = 0;
            var answerCount = column;
            for (var c = 0; c < column; c++) {
                var questionItemDict = valueOfCell(r,c,questions);
                // var answerItem = questionItemDict.answer;
                // var questionItem = questionItemDict.question;
                if (questionItemDict.correct){
                    score++;
                }
            }
            //window.alert(r+ " middle score: "+ score +" answer: " + answerCount);
            if (score == answerCount) return score;
            if (score == answerCount-1) return Math.round(score/2);
            return 0;
        }

        function scoreForEndRow(r, questions){
            var column = questions.column;
            var score = 0;
            var answerCount = 0;
            for (var c = Math.min(questions.count-questions.column*r-1,questions.column-1); c>= 0; c--) {
                var questionItemDict = valueOfCell(r,c,questions);
                var answerItem = questionItemDict.answer;

                if (!checkAnwserEmpty(answerItem)){
                    answerCount = c+1;
                    break;
                }
            }

            for (var c = 0; c < column; c++) {
                var questionItemDict = valueOfCell(r,c,questions);
                var answerItem = questionItemDict.answer;
                // var questionItem = questionItemDict.question;
                // answerCount++;
                if (!checkAnwserEmpty(answerItem)){
                    if (questionItemDict.correct) score++;
                }
            }
            //window.alert(r+" end score: "+ score +" answer: " + answerCount);
            if (score == answerCount) return score;
            if (score == answerCount-1) return Math.round(score/2);
            return 0;
        }


        // var question = paraInput.question;
        var gameInfo = paraInput.gameInfo;
        var examQuestions = paraInput.examQuestions;
        var questions = paraInput.questions;
        var column = examQuestions.column;
        var row = examQuestions.row;
        var count = examQuestions.count;

        var score = 0;


        //cap nhat cacs gia tri correct1, correct2, correct3
        for (var i = 0; i < count; i++){
            var questionItemDict = questions.items[i];
            var answerItem = questionItemDict.answer;
            var questionItem = questionItemDict.question;
            questionItemDict.correct1 = false;
            questionItemDict.correct2 = false;
            if (answerItem.hasOwnProperty("value1") && questionItem.hasOwnProperty("title")){
                questionItemDict.correct1 = (answerItem.value1 == questionItem.title);
            }
            if (answerItem.hasOwnProperty("value2") && questionItem.hasOwnProperty("subtitle")){
                questionItemDict.correct2 = (answerItem.value2 == questionItem.subtitle);
            }
            questionItemDict.correct = questionItemDict.correct1;// && questionItemDict.correct2;
        }

        //tinh diem cho question
        // tinh diem cho dong cuoi cung
        var r = row-1;
        for (; r >= 0; r--){
            if (!checkEmptyRow(r, questions)){
                score+= scoreForEndRow(r, questions);
                r --;
                break;
            }
        }

        // tinh deim cho dong o giua 
        for (; r >= 0; r--){
            if (!checkEmptyRow(r, questions)){
                score+= scoreForMiddleRow(r, questions);
            }
        }

        //window.alert(score+"diem");

        questions.score = score;
        // questions.recallTime = 100;//tam bo
        // questions.memoryTime = 100;//tam bo
        //xu ly sinh de
        var resultPara = paraInput;
        var isSuccess = true;
        var errorCode = 0;
        var errorMessage = 0;
        callback(isSuccess, errorCode, errorMessage, resultPara);
    }
}

class ServerSpokenNumber{
    generate(paraInput, callback){
        var game_type = paraInput.game_type;
        var game_mode = paraInput.game_mode;

        var column = 40;
        var row = 1;
        var count = column*row;
        var memoryTime = 100;
        var recallTime = 300;
        var speed = 1;


        if (game_mode == DIFFICULT_NATIONAL()){
            column = 40;
            row = 3;
            count = 100;
            memoryTime = count*speed;
            recallTime = 60*5;
        }else if (game_mode == DIFFICULT_INTERNATIONAL()){
            column = 40;
            row = 3;
            count = 100;
            memoryTime = count*speed;
            recallTime = 60*5;
        }else if (game_mode == DIFFICULT_WORLD()){
            column = 40;
            row = 5;
            count = 200;
            memoryTime = count*speed;
            recallTime = 60*10;
        }else if (game_mode == DIFFICULT_FREEDOM()){
            column = 40;
            row = paraInput.rowCount;
            count = column*row;
        }
        var gameInfo = {
                    "amount": 0,
                    "displayName": "Speed Numbers",
                    "answerTime": recallTime,
                    "prepareTime": 60,
                    "gameType": game_type,
                    "speed":speed,
                    "difficultType": game_mode,
                    "readExamTime": memoryTime
                    };
        
        var examQuestionItems = [];
        var examQuestions = {
            "column": column,
            "row": row,
            "count" : count,
            "items": examQuestionItems
        }
        {
            for (var i = 0; i < count; i++){
                var itemDict = {"subtitle":"",
                                "title":Math.round(Math.random()*9)
                            };
                examQuestionItems.push(itemDict);
            }
        }

        var questionItems = [];
        var question = {
            "column": column,
            "row": row,
            "count" : count,
            "items": questionItems
        }
        {
            for (var i = 0; i < count; i++){
                var questionItemDict = examQuestionItems[i];
                var awserItemDict = {"value1":"","value2":""};
                var itemDict = {"question":questionItemDict, "answer":awserItemDict};
                questionItems.push(itemDict);
            }
        }

        var resultPara = {
            "gameInfo": gameInfo,
            "examQuestions": examQuestions,
            "questions": question
        }

        //xu ly sinh de
        var isSuccess = true;
        var errorCode = 0;
        var errorMessage = 0;
        callback(isSuccess, errorCode, errorMessage, resultPara);
        
    }
    check_mark(paraInput, callback){

    	//window.alert("go here");
        function valueOfCell(r,c, questions){
            var column = questions.column;
            return questions.items[r * column + c];
        }

        function checkAnwserEmpty(answerItem){
            //window.alert("item:"+answerItem.value1+"compare:" + (answerItem.value1 === "-1"));
            //window.alert("item:"+answerItem.value1+"value2:" + answerItem.value2);
            if ((answerItem.value1 === "-1" || answerItem.value1.length == 0) && (answerItem.value2 === "-1"  || answerItem.value2.length == 0)){
                return true;
            }
            return false;
        }

        function checkEmptyRow(r, questions){
            var column = questions.column;
            for (var c = 0; c < column; c++) {
                var questionItemDict = valueOfCell(r,c,questions);
                var answerItem = questionItemDict.answer;
                if (!checkAnwserEmpty(answerItem)){
                    return false;
                }
            }
            return true;
        }

        function scoreForMiddleRow(r, questions){
            var column = questions.column;
            var score = 0;
            var answerCount = column;
            for (var c = 0; c < column; c++) {
                var questionItemDict = valueOfCell(r,c,questions);
                // var answerItem = questionItemDict.answer;
                // var questionItem = questionItemDict.question;
                if (questionItemDict.correct){
                    score++;
                }
            }
            //window.alert(r+ " middle score: "+ score +" answer: " + answerCount);
            if (score == answerCount) return score;
            if (score == answerCount-1) return Math.round(score/2);
            return 0;
        }

        function scoreForEndRow(r, questions){
            var column = questions.column;
            var score = 0;
            var answerCount = 0;
            for (var c = Math.min(questions.count-questions.column*r-1,questions.column-1); c>= 0; c--) {
                var questionItemDict = valueOfCell(r,c,questions);
                var answerItem = questionItemDict.answer;

                if (!checkAnwserEmpty(answerItem)){
                    answerCount = c+1;
                    break;
                }
            }

            for (var c = 0; c < column; c++) {
                var questionItemDict = valueOfCell(r,c,questions);
                var answerItem = questionItemDict.answer;
                // var questionItem = questionItemDict.question;
                // answerCount++;
                if (!checkAnwserEmpty(answerItem)){
                    if (questionItemDict.correct) score++;
                }
            }
            //window.alert(r+" end score: "+ score +" answer: " + answerCount);
            if (score == answerCount) return score;
            if (score == answerCount-1) return Math.round(score/2);
            return 0;
        }


        // var question = paraInput.question;
        var gameInfo = paraInput.gameInfo;
        var examQuestions = paraInput.examQuestions;
        var questions = paraInput.questions;
        var column = examQuestions.column;
        var row = examQuestions.row;
        var count = examQuestions.count;

        var score = 0;


        //cap nhat cacs gia tri correct1, correct2, correct3
        for (var i = 0; i < count; i++){
            var questionItemDict = questions.items[i];
            var answerItem = questionItemDict.answer;
            var questionItem = questionItemDict.question;
            questionItemDict.correct1 = false;
            questionItemDict.correct2 = false;
            if (answerItem.hasOwnProperty("value1") && questionItem.hasOwnProperty("title")){
                questionItemDict.correct1 = (answerItem.value1 == questionItem.title);
            }
            if (answerItem.hasOwnProperty("value2") && questionItem.hasOwnProperty("subtitle")){
                questionItemDict.correct2 = (answerItem.value2 == questionItem.subtitle);
            }

            questionItemDict.correct = questionItemDict.correct1;// && questionItemDict.correct2;
        }



        for (var i = 0; i < count; i++){
            var questionItemDict = questions.items[i];
            if (questionItemDict.correct == false){
                break;
            }else{
                score ++;
            }
        }
        //window.alert(score+"diem");

        questions.score = score;
        // questions.recallTime = 100;//tam bo
        // questions.memoryTime = 100;//tam bo
        //xu ly sinh de
        var resultPara = paraInput;
        var isSuccess = true;
        var errorCode = 0;
        var errorMessage = 0;
        callback(isSuccess, errorCode, errorMessage, resultPara);
    }
}



// tham khao thoi gian 
// -(GameInfo *)createGameInfo:(MCCompetition *)competition {
//     GameInfo *gameInfo = [GameInfo new];
//     switch (competition.type) {
//         case NAME_AND_FACE:{
//             gameInfo.gameGenerate = [FaceAndNameGenerate new];
//             gameInfo.gameType = NAME_AND_FACE;
//             gameInfo.difficultType = competition.difficult;
//             {
//                 gameInfo.readExamTime = 60 * 5;
//                 gameInfo.answerTime = 60 * 15;
//                 gameInfo.prepareTime = 60;
//             }
//             {
//                 switch (gameInfo.difficultType) {
//                     case NATIONAL:
//                     {
//                         gameInfo.readExamTime = 60 * 5;
//                         gameInfo.answerTime = 60 * 15;
//                         gameInfo.prepareTime = 60;
//                     }
//                         break;
//                     case INTERNATIONAL:
//                     {
//                         gameInfo.readExamTime = 60 * 15;
//                         gameInfo.answerTime = 60 * 30;
//                         gameInfo.prepareTime = 60;
//                     }
//                         break;
//                     case WORLD:
//                     {
//                         gameInfo.readExamTime = 60 * 15;
//                         gameInfo.answerTime = 60 * 30;
//                         gameInfo.prepareTime = 60;
//                     }
//                         break;
//                     default:
//                         break;
//                 }
//             }
            
//             gameInfo.rowCount = 13;
//             gameInfo.displayName = competition.title;
//             break;
//         }
//         case BINARY_NUMBER:{
//             gameInfo.gameGenerate = [BinaryNumberGenerate new];
//             gameInfo.gameType = BINARY_NUMBER;
//             gameInfo.difficultType = competition.difficult;
//             gameInfo.displayName = competition.title;
//             gameInfo.rowCount = 33;
//             {
//                 gameInfo.readExamTime = 60 * 5;
//                 gameInfo.answerTime = 60 * 15;
//                 gameInfo.prepareTime = 60;
//             }
//             {
//                 switch (gameInfo.difficultType) {
//                     case NATIONAL:
//                     {
//                         gameInfo.readExamTime = 60 * 5;
//                         gameInfo.answerTime = 60 * 15;
//                         gameInfo.prepareTime = 60;
//                     }
//                         break;
//                     case INTERNATIONAL:
//                     {
//                         gameInfo.readExamTime = 60 * 30;
//                         gameInfo.answerTime = 60 * 60;
//                         gameInfo.prepareTime = 60;
//                     }
//                         break;
//                     case WORLD:
//                     {
//                         gameInfo.readExamTime = 60 * 30;
//                         gameInfo.answerTime = 60 * 60;
//                         gameInfo.prepareTime = 60;
//                     }
//                         break;
//                     default:
//                         break;
//                 }
//             }
//             break;
//         }
//         case RANDOM_NUMBER:{
//             gameInfo.gameGenerate = [RandomNumberGenerate new];
//             gameInfo.gameType = RANDOM_NUMBER;
//             gameInfo.difficultType = competition.difficult;
//             gameInfo.displayName = competition.title;
//             gameInfo.rowCount = 33;
//             {
//                 gameInfo.readExamTime = 60 * 15;
//                 gameInfo.answerTime = 60 * 30;
//                 gameInfo.prepareTime = 60;
//             }
//             {
//                 switch (gameInfo.difficultType) {
//                     case NATIONAL:
//                     {
//                         gameInfo.readExamTime = 60 * 15;
//                         gameInfo.answerTime = 60 * 30;
//                         gameInfo.prepareTime = 60;
//                     }
//                         break;
//                     case INTERNATIONAL:
//                     {
//                         gameInfo.readExamTime = 60 * 30;
//                         gameInfo.answerTime = 60 * 60;
//                         gameInfo.prepareTime = 60;
//                     }
//                         break;
//                     case WORLD:
//                     {
//                         gameInfo.readExamTime = 60 * 60;
//                         gameInfo.answerTime = 60 * 120;
//                         gameInfo.prepareTime = 60;
//                     }
//                         break;
//                     default:
//                         break;
//                 }
//             }
//             break;
//         }
//         case ABSTRACT_IMAGES:{
//             gameInfo.gameGenerate = [AbstractImageGenerate new];
//             gameInfo.gameType = ABSTRACT_IMAGES;
//             gameInfo.difficultType = competition.difficult;
//             gameInfo.displayName = competition.title;
//             gameInfo.rowCount = 162;
//             {
//                 gameInfo.readExamTime = 60 * 15;
//                 gameInfo.answerTime = 60 * 30;
//                 gameInfo.prepareTime = 60;
//             }
//             {
//                 switch (gameInfo.difficultType) {
//                     case NATIONAL:
//                     {
//                         gameInfo.readExamTime = 60 * 15;
//                         gameInfo.answerTime = 60 * 30;
//                         gameInfo.prepareTime = 60;
//                     }
//                         break;
//                     case INTERNATIONAL:
//                     {
//                         gameInfo.readExamTime = 60 * 15;
//                         gameInfo.answerTime = 60 * 30;
//                         gameInfo.prepareTime = 60;
//                     }
//                         break;
//                     case WORLD:
//                     {
//                         gameInfo.readExamTime = 60 * 15;
//                         gameInfo.answerTime = 60 * 30;
//                         gameInfo.prepareTime = 60;
//                     }
//                         break;
//                     default:
//                         break;
//                 }
//             }
//             break;
//         }
//         case SPEED_NUMBER:{
//             gameInfo.gameGenerate = [SpeedNumberGenerate new];
//             gameInfo.gameType = SPEED_NUMBER;
//             gameInfo.difficultType = competition.difficult;
//             gameInfo.displayName = competition.title;
//             gameInfo.rowCount = 16;
//             {
//                 gameInfo.readExamTime = 60 * 5;
//                 gameInfo.answerTime = 60 * 15;
//                 gameInfo.prepareTime = 60;
//             }
//             {
//                 switch (gameInfo.difficultType) {
//                     case NATIONAL:
//                     {
//                         gameInfo.readExamTime = 60 * 5;
//                         gameInfo.answerTime = 60 * 15;
//                         gameInfo.prepareTime = 60;
//                     }
//                         break;
//                     case INTERNATIONAL:
//                     {
//                         gameInfo.readExamTime = 60 * 5;
//                         gameInfo.answerTime = 60 * 15;
//                         gameInfo.prepareTime = 60;
//                     }
//                         break;
//                     case WORLD:
//                     {
//                         gameInfo.readExamTime = 60 * 5;
//                         gameInfo.answerTime = 60 * 15;
//                         gameInfo.prepareTime = 60;
//                     }
//                         break;
//                     default:
//                         break;
//                 }
//             }
//             break;
//         }
//         case HISTORY_FUTURE_DATES:{
//             gameInfo.gameGenerate = [HictoricFutureDateGenerate new];
//             gameInfo.gameType = HISTORY_FUTURE_DATES;
//             gameInfo.difficultType = competition.difficult;
//             gameInfo.displayName = competition.title;
//             gameInfo.rowCount = 158;
//             {
//                 gameInfo.readExamTime = 60 * 5;
//                 gameInfo.answerTime = 60 * 15;
//                 gameInfo.prepareTime = 60;
//             }
//             {
//                 switch (gameInfo.difficultType) {
//                     case NATIONAL:
//                     {
//                         gameInfo.readExamTime = 60 * 5;
//                         gameInfo.answerTime = 60 * 15;
//                         gameInfo.prepareTime = 60;
//                     }
//                         break;
//                     case INTERNATIONAL:
//                     {
//                         gameInfo.readExamTime = 60 * 5;
//                         gameInfo.answerTime = 60 * 15;
//                         gameInfo.prepareTime = 60;
//                     }
//                         break;
//                     case WORLD:
//                     {
//                         gameInfo.readExamTime = 60 * 5;
//                         gameInfo.answerTime = 60 * 15;
//                         gameInfo.prepareTime = 60;
//                     }
//                         break;
//                     default:
//                         break;
//                 }
//             }
//             break;
//         }
//         case RANDOM_CARD:{
//             gameInfo.gameGenerate = [RandomCardsGenerate new];
//             gameInfo.gameType = RANDOM_CARD;
//             gameInfo.difficultType = competition.difficult;
//             gameInfo.displayName = competition.title;
//             gameInfo.rowCount = 100;
//             {
//                 gameInfo.readExamTime = 60 * 10;
//                 gameInfo.answerTime = 60 * 30;
//                 gameInfo.prepareTime = 60;
//             }
//             {
//                 switch (gameInfo.difficultType) {
//                     case NATIONAL:
//                     {
//                         gameInfo.readExamTime = 60 * 10;
//                         gameInfo.answerTime = 60 * 30;
//                         gameInfo.prepareTime = 60;
//                     }
//                         break;
//                     case INTERNATIONAL:
//                     {
//                         gameInfo.readExamTime = 60 * 30;
//                         gameInfo.answerTime = 60 * 60;
//                         gameInfo.prepareTime = 60;
//                     }
//                         break;
//                     case WORLD:
//                     {
//                         gameInfo.readExamTime = 60 * 60;
//                         gameInfo.answerTime = 60 * 120;
//                         gameInfo.prepareTime = 60;
//                     }
//                         break;
//                     default:
//                         break;
//                 }
//             }
//             break;
//         }
//         case RANDOM_WORD:{
//             gameInfo.gameGenerate = [RandomWordGenerate new];
//             gameInfo.gameType = RANDOM_WORD;
//             gameInfo.difficultType = competition.difficult;
//             gameInfo.displayName = competition.title;
//             gameInfo.rowCount = 8;
//             {
//                 gameInfo.readExamTime = 60 * 5;
//                 gameInfo.answerTime = 60 * 15;
//                 gameInfo.prepareTime = 60;
//             }
//             {
//                 switch (gameInfo.difficultType) {
//                     case NATIONAL:
//                     {
//                         gameInfo.readExamTime = 60 * 5;
//                         gameInfo.answerTime = 60 * 15;
//                         gameInfo.prepareTime = 60;
//                     }
//                         break;
//                     case INTERNATIONAL:
//                     {
//                         gameInfo.readExamTime = 60 * 15;
//                         gameInfo.answerTime = 60 * 40;
//                         gameInfo.prepareTime = 60;
//                     }
//                         break;
//                     case WORLD:
//                     {
//                         gameInfo.readExamTime = 60 * 15;
//                         gameInfo.answerTime = 60 * 40;
//                         gameInfo.prepareTime = 60;
//                     }
//                         break;
//                     default:
//                         break;
//                 }
//             }
//             break;
//         }
//         case SPOKEN_NUMBER:{
//             gameInfo.gameGenerate = [SpokenNumberGenerate new];
//             gameInfo.gameType = SPOKEN_NUMBER;
//             gameInfo.difficultType = competition.difficult;
//             gameInfo.displayName = competition.title;
//             gameInfo.rowCount = 100;
//             gameInfo.speed = 1;
//             {
//                 gameInfo.readExamTime = 100;
//                 gameInfo.answerTime = 60 * 5;
//                 gameInfo.prepareTime = 60;
//             }
//             {
//                 switch (gameInfo.difficultType) {
//                     case NATIONAL:
//                     {
//                         gameInfo.readExamTime = 100;
//                         gameInfo.answerTime = 60 * 5;
//                         gameInfo.prepareTime = 60;
//                     }
//                         break;
//                     case INTERNATIONAL:
//                     {
//                         gameInfo.readExamTime = 100;
//                         gameInfo.answerTime = 60 * 5;
//                         gameInfo.prepareTime = 60;
//                     }
//                         break;
//                     case WORLD:
//                     {
//                         gameInfo.readExamTime = 200;
//                         gameInfo.answerTime = 60 * 10;
//                         gameInfo.prepareTime = 60;
//                     }
//                         break;
//                     default:
//                         break;
//                 }
//             }
//             break;
//         }
//         case SPEED_CARDS:{
//             gameInfo.gameGenerate = [RandomCardsGenerate new];
//             gameInfo.gameType = SPEED_CARDS;
//             gameInfo.difficultType = competition.difficult;
//             gameInfo.rowCount = 1;
//             {
//                 gameInfo.readExamTime = 60*5;
//                 gameInfo.answerTime = 60 * 5;
//                 gameInfo.prepareTime = 60;
//             }
//             {
//                 switch (gameInfo.difficultType) {
//                     case NATIONAL:
//                     {
//                         gameInfo.readExamTime = 60*5;
//                         gameInfo.answerTime = 60 * 5;
//                         gameInfo.prepareTime = 60;
//                     }
//                         break;
//                     case INTERNATIONAL:
//                     {
//                         gameInfo.readExamTime = 60*5;
//                         gameInfo.answerTime = 60 * 5;
//                         gameInfo.prepareTime = 60;
//                     }
//                         break;
//                     case WORLD:
//                     {
//                         gameInfo.readExamTime = 60*5;
//                         gameInfo.answerTime = 60 * 5;
//                         gameInfo.prepareTime = 60;
//                     }
//                         break;
//                     default:
//                         break;
//                 }
//             }
//             gameInfo.displayName = competition.title;
//             break;
//         }
//     }
//     return gameInfo;
// }