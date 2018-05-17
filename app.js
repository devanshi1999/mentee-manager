const list = document.querySelector('#mentee-list ul');
const forms = document.forms;

var btn = document.getElementById("myBtn");



// add mentees
const addForm = forms['add-mentee'];

addForm.addEventListener('submit', function(e) {
  e.preventDefault();
 
  const value1 = addForm.querySelector('input[name="slno"]').value;
  const value2 = addForm.querySelector('input[name="username"]').value;
  const value5 = addForm.querySelector('input[name="comments"]').value;
  function getRVBN(rName) {
    var radioButtons = document.getElementsByName(rName);
    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) return radioButtons[i].value;
    }
    return '';
}
    var value3 = getRVBN('gender');
    var value4 = getRVBN('rating');
    


  // create elements
  const li = document.createElement('li');
  const slNo = document.createElement('div');
  const menteeName = document.createElement('div');
  const menteeGender = document.createElement('div');
  const menteeRating = document.createElement('div');
  const menteeComments = document.createElement('div');
  const deleteBtn = document.createElement('div');
  const editBtn = document.createElement('div');
 

  // add text content
  slNo.textContent = value1;
  menteeName.textContent = value2;
  menteeGender.textContent = value3;
  menteeRating.textContent = value4;
  menteeComments.textContent = value5;
  deleteBtn.textContent = 'delete';
  editBtn.textContent = 'edit';

  // add classes
  slNo.classList.add('name');
  menteeName.classList.add('name');
  menteeGender.classList.add('name');
  menteeRating.classList.add('rating');
  menteeComments.classList.add('name');
  deleteBtn.classList.add('delete');
  editBtn.classList.add('edit');

  // append to DOM
  li.appendChild(slNo);
  li.appendChild(menteeName);
  li.appendChild(menteeGender);
  li.appendChild(menteeRating);
  li.appendChild(menteeComments);
  li.appendChild(deleteBtn);
  li.appendChild(editBtn);
  list.appendChild(li);
  
});

// delete mentee
list.addEventListener('click', (e) => {
	
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
  var myDiv = document.getElementById("edit-mentee");
        
  myDiv.style.visibility = "hidden";
    
});



//edit mentee
const editForm = forms['edit-mentee'];

list.addEventListener('click', (evt) => {
  if(evt.target.className == 'edit'){
    
    
   var modal1 = document.getElementById("myModal1");
   var span = document.getElementsByClassName("close")[1];

   modal1.style.display = "block";
   document.getElementById("edit-mentee").style.visibility = "visible";
    span.onclick = function() {
    modal1.style.display = "none";
    }  

    editForm.addEventListener('submit', function(e) {
  e.preventDefault();
   
  const value1 = addForm.querySelector('input[name="slno"]').value;
  const value2 = addForm.querySelector('input[name="username"]').value;
  const value5 = editForm.querySelector('input[name="comments1"]').value;
  function getRVBN(rName) {
    var radioButtons = document.getElementsByName(rName);
    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) return radioButtons[i].value;
    }
    return '';
}
    var value3 = getRVBN('gender');
    var value4 = getRVBN('rating1');

    const li1 = evt.target.parentElement;
    li1.parentNode.removeChild(li1);

    const li = document.createElement('li');
    const slNo = document.createElement('div');
    const menteeName = document.createElement('div');
    const menteeGender = document.createElement('div');
    const menteeRating = document.createElement('div');
    const menteeComments = document.createElement('div');
    const deleteBtn = document.createElement('div');
    const editBtn = document.createElement('div');

    slNo.textContent = value1;
    menteeName.textContent = value2;
    menteeGender.textContent = value3;
    menteeRating.textContent = value4;
    menteeComments.textContent = value5;
    deleteBtn.textContent = 'delete';
    editBtn.textContent = 'edit';

    slNo.classList.add('name');
    menteeName.classList.add('name');
    menteeGender.classList.add('name');
    menteeRating.classList.add('rating');
    menteeComments.classList.add('name');
    deleteBtn.classList.add('delete');
    editBtn.classList.add('edit');

    li.appendChild(slNo);
    li.appendChild(menteeName);
    li.appendChild(menteeGender);
    li.appendChild(menteeRating);
    li.appendChild(menteeComments);
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    list.appendChild(li);
   
   });
}
});

var btn = document.getElementById("myBtn");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}








