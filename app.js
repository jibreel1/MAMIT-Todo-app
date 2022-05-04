const inputTodo = document.getElementById("todo");
const error = document.querySelector(".error");
const list = document.getElementById("list");
const todo = document.getElementById("addTodo");

const appendTask = () => {
   const li = document.createElement("li");
   li.classList.add("inp1");

   const input = document.createElement("INPUT");
   input.setAttribute("type", "checkbox");
   input.setAttribute("name", "todo");
   li.appendChild(input);

   const text = document.getElementById("todo").value;
   const para = document.createElement("p");
   const textNode = document.createTextNode(text);
   para.append(textNode);
   li.appendChild(para);
   list.append(li);

   const image = document.createElement("img");
   image.classList.add("bin");
   image.src = "outline_delete_forever_black_24dp.png";
   li.appendChild(image);

   const button = document.createElement("div");
   button.classList.add("bin-icon");
   button.appendChild(image);
   li.appendChild(button);
};

const iconDelete = () => {
   var deletes = document.querySelectorAll(".bin-icon");
   deletes.forEach((btn) => {
      btn.addEventListener("click", function () {
         this.parentNode.remove();
      });
   });
};

list.addEventListener("click", function (event) {
   var element = event.target;

   if (element.type !== "checkbox") return;
   element.nextSibling.classList.toggle("completed");
});

const addTaskHandler = () => {
   if (inputTodo.value.length == 0) {
      error.style.display = "flex";
      inputTodo.style.border = "thick solid #F96464";
   } else {
      error.style.display = "none";
      inputTodo.style.border = "none";
      appendTask();
      iconDelete();

      inputTodo.value = "";
   }
};

todo.addEventListener("click", addTaskHandler);
