import LinkedList from './LinkedList';

const $value = document.getElementById('elementValue');
const $enterButton = document.getElementById('enter');
const $linkedList = document.getElementById('list');
const $listSize = document.getElementById('listSize');
const $position = document.getElementById('elementPosition');
const $switch = document.getElementById('switch');
const $close = document.getElementById('close');


let linkedList = new LinkedList();
$position.max = linkedList.size();


function addElement() {
    let element = getElement();

    if ($switch.checked) {
        linkedList.insert(element.position, element.value);
    } else {
        linkedList.add(element.value);
    }
    showList();
}

function removeElement(event) {
    let position = +event.target.id;
    linkedList.remove(position);
    showList();
}

function getElement() {
    return {
        value: $value.value,
        position: +$position.value
    };
}

function showList() {
    $linkedList.innerHTML = '';
    for (let i = 0; i < linkedList.size(); i++) {
        let div = document.createElement('div');
        div.className = "list-element";
        div.id = i;
        div.innerHTML = "<p>"+i+".   "+linkedList.get(i).data+
            "</p><i class='fa fa-close'></i>";
        div.addEventListener("click", removeElement);

        $linkedList.appendChild(div);
    }

    changeSize();
}


function changeSize() {
    let size = linkedList.size();
    $listSize.innerText = size;
    $position.max = size;
}
function changeDisabled() {
    $position.disabled = !$switch.checked;
}

$enterButton.addEventListener('click', addElement);
$switch.addEventListener('change', changeDisabled);
