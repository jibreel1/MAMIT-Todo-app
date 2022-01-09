const todo = (document.getElementById("addTodo").onclick = () => {
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
   document.getElementById("list").append(li);

   const image = document.createElement("img");
   image.classList.add("bin");
   image.src = "outline_delete_forever_black_24dp.png";
   li.appendChild(image);

   const button = document.createElement("BUTTON");
   button.classList.add("bttn");
   button.appendChild(image);
   li.appendChild(button);

   
   var deletes = document.querySelectorAll(".bttn");
   deletes.forEach((btn) => {
      btn.addEventListener("click", function () {
         const lis = this.parentNode;
         lis.remove();
      });
   });
   
   
   
});



// var rem = document.getElementById("bin");

// for (let i = 0; i < rem.length; i++) {
//    var myBtn = rem[i];
// }

// rem.addEventListener("click", function () {
//    const item = this.parentNode.parentNode;
//    const parent = item.parentNode;
//    parent.removeChild(item);
// });

function clear() {
   document.getElementById('todo').reset()
}

// const lin = document.querySelector('.inp1')

// const lis = [...document.querySelectorAll(".inp1")];
// for (const li of lis) {
//    li.addEventListener("click", handleDelete);
// }

// function handleDelete() {
//    const lim = document.getElementById("list");
//    const lip = document.getElementById('intt')
//    lim.parentNode.removeChild(lip);
//    //   this.parentNode.removeChild(this);
// }

// handleDelete()

// const li = document.querySelector('.inp1')
// li.addEventListener('click', function () {
//     console.log(this);
// })

// document.getElementById("item").value = "";

// function removeTodo() {
//    btnRem.removeEventListener("click", removeTodo);
// }

// var a = document.getElementById("bin");
// var b = document.getElementById("todo");
// var rem = document.getElementById("todo").value;
// a.removeChild(rem);
