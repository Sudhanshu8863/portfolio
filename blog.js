const heading = document.getElementById("heading");
const container = document.getElementById("container")

const form = document.getElementById("form");
const hide1 = document.getElementById("hide1");
const hide2 = document.getElementById("hide2");
const hide3 = document.getElementById("hide3");
const close1 = document.getElementById("close");
const btn = document.getElementById("btn");


// for opening form
const open = () => {
  console.log("open is clicked")
  form.classList.remove("hidden");
  hide1.classList.remove("hidden");
  hide2.classList.remove("hidden");
  hide3.classList.remove("hidden");
  close1.classList.remove("hidden");
  btn.classList.remove("hidden");
  container.classList.add("hidden");
}
heading.addEventListener("click", open);

// for closing form
const close = () => {
  console.log("close is clicked")
  form.classList.add("hidden");
  hide1.classList.add("hidden");
  hide2.classList.add("hidden");
  hide3.classList.add("hidden");
  close1.classList.add("hidden");
  btn.classList.add("hidden");
  
  // removing hidden class from main page
  container.classList.remove("hidden");
}
close1.addEventListener("click", close);


// uploading form details
const source = document.getElementById("source");
const content = document.getElementById("content");


//  <div id="container">
//    <div class="source"></div>
//    <div class="content"></div>
//  </div>


btn.addEventListener("click", () => {
  const author = source.value
  const data = content.value
  
  const createSourse = document.createElement("div")
  createSourse.classList.add("source")
  const sourceTextNode = document.createTextNode(author);
  createSourse.appendChild(sourceTextNode)
  
  const createData = document.createElement("div")
  createData.classList.add("content")
  const contentTextNode = document.createTextNode(data);
  createData.appendChild(contentTextNode)
  
  container.prepend(createData)
  container.prepend(createSourse)

  source.value = ""
  content.value = ""

  close()
})