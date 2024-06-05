const navItemList = document.getElementById("nav-list")
const navItems = navItemList.childNodes

let latestnav
let latest
navItems.forEach(i => {
    i.onclick = function() {
        let pair = document.getElementById(`p-${i.id}`)
        pair.classList.remove("hidden")
        i.classList.add((i.id == "test" ? "selected-test" : "selected-text"))

        if (latest) {
            latest.classList.add("hidden")
            latestnav.classList.remove("selected-text")
        }
        latestnav = i
        latest = pair
    }
})

document.getElementById("elozmenyek").click()