//Var
    //CSS
    var root = document.querySelector(':root');
    var rs = getComputedStyle(root);
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
    let total = 0
    const listOf0P = {
        food :{
            index : 0,
            perc: 10,
            name: "food"
        },
        transport :{
            index : 0,
            perc: 50,
            name: "transport"
        },
        car :{
            index : 0,
            perc: 10,
            name: "car"
        },
        house :{
            index : 0,
            perc: 10,
            name: "house"
        },
        health :{
            index : 0,
            perc: 10,
            name: "health"
        },
        gifts :{
            index : 0,
            perc: 10,
            name: "gifts"
        },

        calls :{
            index : 0,
            perc: 10,
            name: "calls"
        },
        sports :{
            index : 0,
            perc: 10,
            name: "sports"

        },
        animal :{
            index : 0,
            perc: 10,
            name: "animal"
        },
        eatingOut :{
            index : 0,
            perc: 10,
            name: "eatingOut"

        },
        bills :{
            index : 0,
            perc: 10,
            name: "bills"

        },
        clothes :{
            index : 0,
            perc: 10,
            name: "clothes"
        },
        entertaiment :{
            index : 0,
            perc: 10,
            name: "entertaiment"
        },
        toisty :{
            index : 0,
            perc: 10,
            name: "toisty"
        },
    }
    let listOfPercentages = []
//Functions
console.log(typeof listOfObject)
function change_value(obj,cssProp){
    var sum = 0
    for(var i = 0; i < listOfPercentages.length; i++) {
        sum += listOfPercentages[i].perc
        var currentPerc = listOfPercentages[i]
        listOfPercentages[i] = {
            perc: currentPerc.perc,
            index: currentPerc.index + 1
        }
    }
    console.log("the sym is "+sum)

    listOfPercentages.push({
        perc: sum + obj.perc,
        index: 0
    })
    cssProp
    var lastIndex = listOfPercentages.length
    console.log(listOfPercentages[lastIndex-1])
    console.log(cssProp)


    root.style.setProperty(cssProp,listOfPercentages[lastIndex-1]);

}

function change_value_for_food(){
    change_value(listOf0P.food,'--p101')
}
foodButton.addEventListener('click',change_value_for_food)
function change_value_for_transport(){
    change_value(listOf0P.transport,'--p102')

}
transportButton.addEventListener('click',change_value_for_transport)