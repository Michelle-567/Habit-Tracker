const habitInput = document.getElementById("habitInput");
const habitList = document.getElementById("habitList");

let habits = [];

function addHabit() {
  const name = habitInput.value.trim();
  if (name) {
    habits.push({ name, completed: false });
    habitInput.value = "";
    saveHabits();
    renderHabits();
  }
}

function renderHabits() {
  habitList.innerHTML = "";
  habits.forEach((habit, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <label>
        <input type="checkbox" onchange="toggleHabit(${index})" ${
      habit.completed ? "checked" : ""
    }>
        ${habit.name}
      </label>
      <button onclick="removeHabit(${index})">❌</button>
    `;
    habitList.appendChild(li);
  });
}

function toggleHabit(index) {
  habits[index].completed = !habits[index].completed;
  saveHabits();
}

function removeHabit(index) {
  habits.splice(index, 1);
  saveHabits();
  renderHabits();
}

function saveHabits() {
  localStorage.setItem("myHabits", JSON.stringify(habits));
}

function loadHabits() {
  const storedHabits = localStorage.getItem("myHabits");
  if (storedHabits) {
    habits = JSON.parse(storedHabits);
    renderHabits();
  }
}

loadHabits();
