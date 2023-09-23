//Var
    //CSS
        var root = document.querySelector(':root');
    //HTML
        let pie1 = document.getElementById("Pie1")
        let pie2 = document.getElementById("Pie2")
        let pie3 = document.getElementById("Pie3")
        let pie4 = document.getElementById("Pie4")
        let pie5 = document.getElementById("Pie5")
        let pie6 = document.getElementById("Pie6")
        let pie7 = document.getElementById("Pie7")
        let pie8 = document.getElementById("Pie8")
        let pie9 = document.getElementById("Pie9")
        let pie10 = document.getElementById("Pie10")
        let pie11 = document.getElementById("Pie11")
        let pie12 = document.getElementById("Pie12")
        let pie13 = document.getElementById("Pie13")
        let pie14 = document.getElementById("Pie14")
        

        let foodButton = document.getElementById("foodButton")
        let transportButton = document.getElementById("transportButton")
        let carButton = document.getElementById("carButton")
        let houseButton = document.getElementById("houseButton")
        let healthButton = document.getElementById("healthButton")
        let giftsButton = document.getElementById("giftsButton")
        let callsButton = document.getElementById("callsButton")
        let sportsButton= document.getElementById("sportsButton")
        let animalButton = document.getElementById("animalButton")
        let eatingOutButton = document.getElementById("eatingOutButton")
        let billsButton = document.getElementById("billsButton")
        let clothesButton = document.getElementById("clothesButton")
        let entertaimentButton = document.getElementById("entertaimentButton")
        let toistyButton = document.getElementById("toistyButton")

        let foodInnerHTML = document.getElementById("foodInnerHTML")
        let transportInnerHTML = document.getElementById("transportInnerHTML")
        let carInnerHTML = document.getElementById("carInnerHTML")
        let houseInnerHTML = document.getElementById("houseInnerHTML")
        let healthInnerHTML = document.getElementById("healthInnerHTML")
        let giftsInnerHTML = document.getElementById("giftsInnerHTML")
        let callsInnerHTML = document.getElementById("callsInnerHTML")
        let sportsInnerHTML = document.getElementById("sportsInnerHTML")
        let animalInnerHTML = document.getElementById("animalInnerHTML")
        let eatingOutInnerHTML = document.getElementById("eatingOutInnerHTML")
        let billsInnerHTML = document.getElementById("billsInnerHTML")
        let clothesInnerHTML = document.getElementById("clothesInnerHTML")
        let entertaimentInnerHTML = document.getElementById("entertaimentInnerHTML")
        let toistyInnerHTML = document.getElementById("toistyInnerHTML")
    //JS
        let food = 0
        let transport = 0
        let car = 0
        let house = 0
        let health = 0
        let gifts = 0
        let calls = 0
        let sports = 0
        let animal = 0
        let eatingOut = 0
        let bills = 0
        let clothes = 0
        let entertaiment = 0
        let toisty = 0
//Functions
    function change_value_for_food(){
        foodInnerHTML.innerHTML+=10+'%'
        root.style.setProperty('--p101', 10);
    }
    foodButton.addEventListener('click',change_value_for_food)
    function change_value_for_transport(){
        transportInnerHTML.innerHTML+=10+'%'
        root.style.setProperty('--p102', 10);
    }
    transportButton.addEventListener('click',change_value_for_transport)
    function change_value_for_car(){
        carInnerHTML.innerHTML+=10+'%'
        root.style.setProperty('--p103', 10);
    }
    carButton.addEventListener('click',change_value_for_car)
    function change_value_for_house(){
        houseInnerHTML.innerHTML+=10+'%'
        root.style.setProperty('--p104', 10);
    }
    houseButton.addEventListener('click',change_value_for_house)
    function change_value_for_health(){
        healthInnerHTML.innerHTML+=10+'%'
        root.style.setProperty('--p105', 10);
    }
    healthButton.addEventListener('click',change_value_for_health)
    function change_value_for_gifts(){
        giftsInnerHTML.innerHTML+=10+'%'
        root.style.setProperty('--p106', 10);
    }
    giftsButton.addEventListener('click',change_value_for_gifts)
    function change_value_for_calls(){
        callsInnerHTML.innerHTML+=10+'%'
        root.style.setProperty('--p107', 10);
    }
    callsButton.addEventListener('click',change_value_for_calls)
    function change_value_for_sports(){
        sportsInnerHTML.innerHTML+=10+'%'
        root.style.setProperty('--p108', 10);
    }
    sportsButton.addEventListener('click',change_value_for_sports)
    function change_value_for_animal(){
        animalInnerHTML.innerHTML+=10+'%'
        root.style.setProperty('--p109', 10);
    }
    animalButton.addEventListener('click',change_value_for_animal)
    function change_value_for_eatingOut(){
        eatingOutInnerHTML.innerHTML+=10+'%'
        root.style.setProperty('--p1010', 10);
    }
    eatingOutButton.addEventListener('click',change_value_for_eatingOut)
    function change_value_for_bills(){
        billsInnerHTML.innerHTML+=10+'%'
        root.style.setProperty('--p1011', 10);
    }
    billsButton.addEventListener('click',change_value_for_bills)
    function change_value_for_clothes(){
        clothesInnerHTML.innerHTML+=10+'%'
        root.style.setProperty('--p1012', 10);
    }
    clothesButton.addEventListener('click',change_value_for_clothes)
    function change_value_for_entertaiment(){
        entertaimentInnerHTML.innerHTML+=10+'%'
        root.style.setProperty('--p1013', 10);
    }
    entertaimentButton.addEventListener('click',change_value_for_entertaiment)
    function change_value_for_toisty(){
        toistyInnerHTML.innerHTML+=10+'%'
        root.style.setProperty('--p1014', 10);
    }
    toistyButton.addEventListener('click',change_value_for_toisty)
