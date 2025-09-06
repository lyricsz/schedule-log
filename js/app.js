let indexLog = 1

const schedule = [
    "Youtube Tutorial =-= 4:15am - 5am", 
    "5 am Club =-= 5am - 6am", 
    "Learn Web Development and Create websites =-= 6am - 8am",
    "Pixel art learning and creation =-= 8:15am - 9:15am",
    "Game Development Learning =-= 9:30am - 11:30am",
    "Three Month Project =-= 12:30pm - 3pm",
    "Blender Time : Learning and Creation =-= 3:15pm - 6:15pm",
    "Youtube Tutorial =-= 6:30pm - 7:15pm",
    "School Stuff Learning =-= 7:30pm - 8:30pm",
    "Cultivation time =-= 8:35pm - 9:05"
]

let allSchedule = [];

let globalTodayObject = new Date()

class AddSchedule{
    constructor(day, a, b, c, d, e, f, g, h, i, j, display, log){
        let monthinnumber = new Date().getMonth()
        let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][monthinnumber];
        this.day = day || new Date().getDate() + "th of " + month;
        this.a = a || false;
        this.b = b || false;
        this.c = c || false;
        this.d = d || false;
        this.e = e || false;
        this.f = f || false;
        this.g = g || false;
        this.h = h || false;
        this.i = i || false;
        this.j = j || false;
        this.log = log;
        this.scheduleArr = [this.a, this.b, this.c, this.d, this.e, this.f, this.g, this.h, this.i, this.j];
        this.display = display || true;
        this.schedule = schedule;
        this.globalObject = [];
        this.createTicker()
    }
    createTicker(){
        let appendNumbering = "th";

        const detailsEl = document.createElement("details");
        const summaryEl = document.createElement("summary");
        const sectionEl = document.createElement("section");
        const h3El = document.createElement("h3");
        const logArea = document.createElement("textarea");
        const smallEl = document.createElement("small");
        logArea.placeholder = "Your daily logs goes here... they're saved automatically with the save option..."
        logArea.setAttribute("class", "logArea");
        logArea.textContent = this.log || null; 
        smallEl.textContent = this.log || "Your log goes here for preview!"

        h3El.textContent = this.day;

        sectionEl.setAttribute("class", "scheduleLog");
        sectionEl.appendChild(h3El);

        detailsEl.appendChild(smallEl);

        //##############################
        this.scheduleArr.forEach((done, index ) => {

            const inputEl = document.createElement("input");
            inputEl.type = "checkbox";

            const labelEl = document.createElement("label");
            labelEl.textContent = this.schedule[index];
            inputEl.setAttribute("class", this.day);

            if (done == "true") {
                inputEl.checked = true;
            } else {
                inputEl.checked = false;
            }
        
            labelEl.appendChild(inputEl);

            this.globalObject.push(this.schedule[index]);
            this.globalObject.push(done);

            sectionEl.appendChild(labelEl);
        })

        const numberingTxt = "123".indexOf(Array(...String(indexLog)).pop());

        if (numberingTxt >= 0) { appendNumbering = "st" }

        summaryEl.textContent = this.globalObject[this.globalObject.length] = indexLog + appendNumbering + " Log";

        window.localStorage.setItem(indexLog + "xox121scheduleLog", this.globalObject);
        window.localStorage.setItem(indexLog + "xox121scheduleLogArr", this.scheduleArr);
        window.localStorage.setItem(indexLog + "xox121scheduleLogArr", logArea.value);

        detailsEl.appendChild(summaryEl);
        detailsEl.appendChild(sectionEl);
        detailsEl.setAttribute("class", this.display)
        detailsEl.appendChild(logArea);

        scheduleLogs.appendChild(detailsEl);

    }
}

saveToday.onclick = () => {
    const allSummaries = document.querySelectorAll("summary")
    const allLogs = document.querySelectorAll(".logArea");
    const array = [

    ]

    document.querySelectorAll(".scheduleLog").forEach((el, index) => {
        let data = [];
        const heading = allSummaries[index].textContent;
        const check = [];

        new Array(document.getElementsByClassName(`${heading[0]}${heading[1]}${heading[2]}`)).forEach(el => {
            new Array(el).forEach((inputs, index) => {
                if (inputs.length > 0) {
                    for (i = 0; i < 10; i++){
                        check.push(inputs[i].checked)             
                    }
                } else {
                    alert("Add the day and refresh before using this feature!")
                }
            })
        })

        data.push(heading);

        check.forEach(checks => {
            data.push(checks);
        });

        array.push(data);
        window.localStorage.setItem(index + 1 + "xox121scheduleLogTxt", allLogs[index].value)
        console.log(index + 1 + "xox121scheduleLogTxt")
        console.log(allLogs[index].value)
    })

    for (let i = 1; i <= indexLog; i++){
        window.localStorage.setItem(i + "xox121scheduleLogArr", String(array[i-1]) + ",")
    }
}

addToday.onclick = () => {
    indexLog++;
    let today = globalTodayObject;
    today = prompt("Enter the Log Number or Heading?", "Log 1") || "Date " + today.getDate() + " of " + today.getMonth() + " Log ";
    allSchedule.push(new AddSchedule(today));
    alert("After the day is entered, Check out the log and Check the completed schedule then hit save! This is still under development!");
}

clearSchedule.onclick = () => {
    for (let i = 1; i <= indexLog; i++){
        window.localStorage.removeItem(i + "xox121scheduleLog");
        window.localStorage.removeItem(i + "xox121scheduleLogArr");
    }
}

function addPrevSaved(){


    let lists = [];
        
    while(true){
        if ((window.localStorage.getItem(indexLog + "xox121scheduleLog") != null)) lists.push(window.localStorage.getItem(indexLog + "xox121scheduleLog"));
        else break;
        
        if (window.localStorage.getItem(indexLog + 1 + "xox121scheduleLog") != null) {
            indexLog++
        } else {
            break
        }
    }

    allSchedule = [];

    indexLog = 0
        
    lists.forEach((el, index) => {
        let newT = window.localStorage.getItem(index + 1 + "xox121scheduleLogArr") || "";

        let arrayT = []

        const log = window.localStorage.getItem(index + 1 + "xox121scheduleLogTxt");

        for (var i = 0; i <= 9; i++){

            let index = newT.slice(newT.indexOf(",") + 1).indexOf(",");

            let current_string = newT.slice(newT.indexOf(",") + 1, newT.indexOf(",") + index + 1);

            newT = newT.slice(newT.indexOf(",") + index + 1);

            arrayT.push(current_string);
        }
        
        indexLog++

        let ouputArr = [];

        let current_string = "";

        for (var i = 0; i < 20; i++){

            let index = el.slice(el.indexOf(",") + 1).indexOf(",");

            current_string = el.slice(el.indexOf(",") + 1, el.indexOf(",") + index + 1);

            el = el.slice(el.indexOf(",") + index + 1);

            if (i % 2 == 0) ouputArr.push(current_string);
        }

        ouputArr.push(el.slice(el.indexOf(",") + 1));
        
        allSchedule.push(new AddSchedule(ouputArr[10], arrayT[0], arrayT[1], arrayT[2], arrayT[3], arrayT[4], arrayT[5], arrayT[6], arrayT[7], arrayT[8], arrayT[9], false, log));


    })
}

addPrevSaved()

function loop(){
    globalTodayObject = new Date()

    requestAnimationFrame(loop);
}

loop()