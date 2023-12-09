// sellection of input field
let input=document.querySelector('#taskinput');
let inputValue=input.value;

// selection of button
let btn=document.querySelector('.addbtn');


// Array declaration where we store input value
let arrItems=[' ',];
displayItems();


// function of onclick event on button
function addtasks(){
  arrItems.push(input.value);
  console.log(arrItems);
  input.value=''; 
  displayItems();
}


function displayItems(){
  let containerElement = document.querySelector('.taskarea');
  let newHtml = '';
  for (let i = 1; i < arrItems.length; i++) {
    let item= arrItems[i];
    newHtml += `  <span onclick="arrItems.splice(${i}, 1);displayItems();g" class="spn">${i}.  ${item}</span> `;
  }
  containerElement.innerHTML = newHtml;
}
