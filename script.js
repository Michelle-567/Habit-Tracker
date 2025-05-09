const habitForm = document.getElementById("habit-form");
const habitInput = document.getElementById("habit-input");
const habitList = document.getElementById("habit-list");

let habits = JSON.parse(localStorage.getItem("habits")) || [];

function saveHabits() {
  localStorage.setItem("habits", JSON.stringify(habits));
}

function renderHabits() {
  habitList.innerHTML = "";
  habits.forEach((habit, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${habit.name}
      <button onclick="removeHabit(${index})">Remove</button>
    `;
    habitList.appendChild(li);
  });
}

function addHabit(name) {
  habits.push({ name });
  saveHabits();
  renderHabits();
}

function removeHabit(index) {
  habits.splice(index, 1);
  saveHabits();
  renderHabits();
}

habitForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const habitName = habitInput.value.trim();
  if (habitName) {
    addHabit(habitName);
    habitInput.value = "";
  }
});

renderHabits();
