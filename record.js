
function newRecord(){
    const record_get = window.localStorage.getItem('datas');
    const obj_record = JSON.parse(record_get);

    let rDate = document.getElementById('date');
    let rMeal = document.getElementById('mealname');
    let rMealtime = document.getElementById('mealtime');
    let rPrice = document.getElementById('price');
    let rMealtype = document.getElementById('mealtype');
    
    rDate = rDate.getDate();
    if (rMealtime.value=='breakfast'){
        rMealtime = 1;
    } else if (rMealtime.value=='lunch'){
        rMealtime = 2;
    } else if (rMealtime.value=='dinner'){
        rMealtime = 3;
    } else if (rMealtime.value=='treat'){
        rMealtime = 4;
    } else if (rMealtime.value=='night'){
        rMealtime = 5;
    }

    obj_record.oMark[rDate] = 1;
    obj_record.oName[rDate] = rMeal.value;
    obj_record.oTime[rDate] = rMealtime;
    obj_record.oPrice[rDate] = rPrice.value;
    obj_record.oType[rDate] = rMealtype.value;

    const record_data2 = JSON.stringify(obj_record);
    window.localStorage.setItem('datas', record_data2);

    if(rMeal.checkValidity() && rDate.checkValidity() && rMealtime.checkValidity()){
        alert('등록이 완료되었습니다.');
        window.close();
    }
        
}

let check = localStorage.getItem('datas');
if(check===false){
    const record = {
        oMark: [],   //캘린더에 색상 표시
        oName: [],   //메뉴 이름
        oTime: [],   //식사 시간
        oPrice: [],  //가격
        oType: []    //영양 종류
    };
    for (let i=0; i<31; i++){
        record.oMark[i]=0;
        record.oName[i]="";
        record.oTime[i]=0;
        record.oPrice[i]=0;
        record.oType[i]="";
    }

    const record_data = JSON.stringify(record);
    window.localStorage.setItem('datas', record_data);
}
