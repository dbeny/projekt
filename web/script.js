// a navigáció listái
const navItemList = document.getElementById("nav-list")
// a navigációs elemek
const navItems = navItemList.childNodes

// a forEach loop miatt globálisak az előző értékei
let latestnav
let latest
// végigmegy az összes navicágiós szövegen...
navItems.forEach(i => {
    // ...ha valaki rákattint egy szövegre
    i.onclick = function() {
        // első indítéás, vagy nem ugyanarra az oldalra kattintott a felhasználó
        if (!latestnav || latestnav && latestnav.id != i.id) {
            // a tartalom doboz párjának megkeresése
            let pair = document.getElementById(`p-${i.id}`)
            // láthatóvá tétele
            pair.classList.remove("hidden")
            // a navigációs szöveg kiválasztásának kimutatása
            i.classList.add((i.id == "test" ? "selected-test" : "selected-text"))

            // ha már van előző kiválasztott
            if (latest) {
                // tartalom doboz eltűntetése
                latest.classList.add("hidden")
                // a navigációs szöveg kiválasztásának kitörlése
                latestnav.classList.remove((latestnav.id == "test" ? "selected-test" : "selected-text"))
            }
            // előzőnek beállítás
            latestnav = i
            latest = pair
        }
    }
})

// alapból az Előzmények oldalt nyissa meg
document.getElementById("elozmenyek").click()

// a tudáspróba kezelése
function handleForm() {
    // alap válaszok lekérése
    const name = document.getElementById("form_name").value
    const a1 = document.getElementById("form_1").value
    const a2 = document.getElementById("form_2").value
    const a3 = [
        document.getElementById("form_3-1").checked,
        document.getElementById("form_3-2").checked,
        document.getElementById("form_3-3").checked
    ]
    const a4 = [
        document.getElementById("form_4-1").checked,
        document.getElementById("form_4-2").checked,
        document.getElementById("form_4-3").checked,
        document.getElementById("form_4-4").checked
    ]
    const a5 = document.getElementById("form_5").value
    // helyesek-e?
    const a1Correct = (a1=="1945")
    const a2Correct = (a2.toLowerCase()=="kína" || a2.toLowerCase()=="kina")
    const a3Correct = (a3[2])
    const a4Correct = (a4[0] && !a4[1] && a4[2] && !a4[3])
    const a5Correct = (a5=="1945-05-08")
    // helyesség + jó válaszok szövegei
    const a1str = `${(a1Correct ? "Helyes" : "Helytelen")} - 1945`
    const a2str = `${(a2Correct ? "Helyes" : "Helytelen")} - Kína`
    const a3str = `${(a3Correct ? "Helyes" : "Helytelen")} - Kantaro Szuzuki`
    const a4str = `${(a4Correct ? "Helyes" : "Helytelen")} - Hirosima & Nagasaki`
    const a5str = `${(a5Correct ? "Helyes" : "Helytelen")} - 1945. Máj. 8.`
    // kiírás a felhasználónak
    alert(
        name + ", itt vannak az eredményeid a helyes válaszokkal!" + "\n" + 
        a1str + "\n" + a2str + "\n" + a3str + "\n" + a4str + "\n" + a5str
    )
    // vissza a fő(Előzmények)oldalra
    document.getElementById("elozmenyek").click()
}