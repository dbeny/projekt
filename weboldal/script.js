const navItemList = document.getElementById("nav-list")
const navItems = navItemList.childNodes

let latestnav
let latest
navItems.forEach(i => {
    i.onclick = function() {
        if (!latestnav || latestnav && latestnav.id != i.id) {
            let pair = document.getElementById(`p-${i.id}`)
            pair.classList.remove("hidden")
            i.classList.add((i.id == "test" ? "selected-test" : (i.id == "game" ? "selected-game" : "selected-text")))

            if (latest) {
                latest.classList.add("hidden")
                latestnav.classList.remove((latestnav.id == "test" ? "selected-test" : (latestnav.id == "game" ? "selected-game" : "selected-text")))
            }
            latestnav = i
            latest = pair
        } else console.log("egyenlo vagy idk")
    }
})

document.getElementById("elozmenyek").click()

//checkboxok
const check1 = document.getElementById("check1")
const check2 = document.getElementById("check2") // jó
const check3 = document.getElementById("check3")

//gomb
const ellenorzo = document.getElementById("ellenorzo")
//szövegdoboz
const eredmeny = document.getElementById("eredmeny")

const checkboxok = [check1, check2, check3]
checkboxok.forEach(e => {
    e.onclick = function() {
        const e_id = e.id
        checkboxok.forEach(e2 => {
            const e2_id = e2.id
            if (e_id != e2_id) {
                e2.checked = false
            }
        })
    }
})

ellenorzo.onclick = function() {
    if (check2.checked && !check1.checked && !check3.checked) {
        eredmeny.innerText = "Jó válasz"
    } else {
        eredmeny.innerText = "Rossz válasz"
    }
}