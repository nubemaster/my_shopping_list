const itemForm = document.querySelector('#item-form');
const itemInput = document.querySelector('#item-input');
const itemList = document.querySelector('#item-list');

/*************************functions***************************/

function addItem(e) {
  e.preventDefault();

  const newItem = itemInput.value;

  if (itemInput.value === '') {
    // alert('Please fill in the field!');
    console.log('Please fill in the field!');
    return;
  }

  // Create list item
  const li = document.createElement('LI');
  li.appendChild(document.createTextNode(newItem));

  // create button
  const button = createButton('remove-item btn-link text-red');
  li.appendChild(button);
  itemList.appendChild(li);
  console.log(li);
}


// create button
function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;
  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);
  return button;
}

// create icon
function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}

itemForm.addEventListener('submit', addItem);
