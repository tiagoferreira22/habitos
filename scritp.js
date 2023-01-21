const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const btn = document.querySelector("header button")

btn.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)
  if (dayExists) {
    alert("dia incluso")
    return
  }

  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habitstigas", JSON.stringify(nlwSetup.data))
}
// const data = {
//   run: ["01-01", "01-02", "01-06", "01-07", "01-08"],
// }
const data = JSON.parse(localStorage.getItem("NLWSetup@habitstigas")) || {}
nlwSetup.setData(data)
nlwSetup.load()
