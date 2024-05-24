
        /*달의 이름이 동적으로 바뀌도록 하기*/
        let monthnum = new Date().getMonth() + 1;
        let month = " ";
        switch(monthnum){
            case 1:
                month = "January"; break;
            case 2:
                month = "February"; break;
            case 3:
                month = "March"; break;
            case 4:
                month = "April"; break;
            case 5:
                month = "May"; break;
            case 6:
                month = "June"; break;
            case 7:
                month = "July"; break;
            case 8:
                month = "August"; break;
            case 9:
                month = "September"; break;
            case 10:
                month = "October"; break;
            case 11:
                month = "November"; break;
            case 12:
                month = "December"; break;
        }
        document.getElementById("month").innerHTML = month;

        //------달력-------

        let date = new Date();

        let cYear = date.getFullYear();
        let cMonth = date.getMonth() + 1;
        let cToday = date.getDate();

        const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        //윤년
        if (cYear % 400 == 0){
            monthDays[1] = 29;
        } else if (cYear % 100 == 0){
            monthDays[1] = 28;
        } else if (cYear % 4 == 0){
            monthDays[1] = 29;
        }

        let mLastday = monthDays[date.getMonth()];
        let mFirstday_num = new Date(cYear, date.getMonth(), 1);
        let mFirstday = mFirstday_num.getDay();

        //------------

        let cWeekcount = Math.ceil((mFirstday + mLastday) / 7);

        let Calendar = "";
        Calendar += "<table style=\"border-collapse: separate;\">";

        const record_get = window.localStorage.getItem('datas');
        const obj_record = JSON.parse(record_get);
        
        let cPosition = 0;  //달력에서의 위치
        let cDay = 0;  //달력에 출력되는 날짜(숫자)
        let cMark = 0;
        for (let index1=0; index1 < cWeekcount; index1++){
            Calendar += "<tr>";
            for (let index2=0; index2<7; index2++){
                Calendar += "<td class=\"cal\">";
                if (mFirstday <= cPosition && cDay < mLastday){
                    cDay++;
                    if (obj_record.oMark[cMark]==1){
                        Calendar += "<span class=\"cDay\" style=\"border-radius: 50%; \
                        background-color: pink;\" onclick=\"openCenter();\">" + cDay + "</span>";
                    } else{
                        Calendar += "<span class=\"cDay\" onclick=\"openCenter();\">" + cDay + "</span>";
                    }
                    cMark++;
                }
                Calendar += "</td>";
                cPosition++;
            }
            Calendar += "</tr>";
        }
        Calendar += "</table>";
        document.getElementById("calendar").innerHTML = Calendar;


        