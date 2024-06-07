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

function handleForm() {
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
    const a1Correct = (a1=="1945")
    const a2Correct = (a2.toLowerCase()=="kína" || a2.toLowerCase()=="kina")
    const a3Correct = (a3[2])
    const a4Correct = (a4[0] && !a4[1] && a4[2] && !a4[3])
    const a5Correct = (a5=="1945-05-08")
    const a1str = `${(a1Correct ? "Helyes" : "Helytelen")} - 1945`
    const a2str = `${(a2Correct ? "Helyes" : "Helytelen")} - Kína`
    const a3str = `${(a3Correct ? "Helyes" : "Helytelen")} - Kantaro Szuzuki`
    const a4str = `${(a4Correct ? "Helyes" : "Helytelen")} - Hirosima & Nagasaki`
    const a5str = `${(a5Correct ? "Helyes" : "Helytelen")} - 1945. Máj. 8.`
    alert(
        name + ", itt vannak az eredményeid a helyes válaszokkal!" + "\n" + 
        a1str + "\n" + a2str + "\n" + a3str + "\n" + a4str + "\n" + a5str
    )
    document.getElementById("elozmenyek").click()
}