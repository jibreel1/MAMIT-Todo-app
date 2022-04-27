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

const crossTask = () => {
   var crossTodo = list.querySelectorAll("p");
   crossTodo.forEach((text) => {
      text.addEventListener("click", function () {
         this.classList.toggle("completed");

         // if (text.classList.contains = "completed") {
         //    console.log('Complete');
         //    input.style.transform = "scale(1)";
         // }
      });
   });
};

const addTaskHandler = () => {
   if (inputTodo.value.length == 0) {
      error.style.display = "flex";
      inputTodo.style.border = "thick solid #F96464";
   } else {
      error.style.display = "none";
      inputTodo.style.border = "none";
      appendTask();
      iconDelete();
      crossTask();

      inputTodo.value = "";
   }
};

todo.addEventListener("click", addTaskHandler);
