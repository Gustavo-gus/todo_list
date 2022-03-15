const inputTask = document.querySelector('.inputNewTask');
const btnTask = document.querySelector('.btnAddTask');
const tasks = document.querySelector('.tasks');

const creatList = ()=>{
    const li = document.createElement("li");
    return li;
}

inputTask.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if(!inputTask.value) return;
        createTask(inputTask.value);
    }
});

function clearInput(){
    inputTask.value = "";
    inputTask.focus();
}

function createTask(taskIput){
    const li = creatList();
    li.innerText = taskIput;
    tasks.appendChild(li)
    clearInput();
    creatEraseBtn(li);
    li.style.marginLeft = "2.1em";
}

function creatEraseBtn(li){
    li.innerText += ' ';
    const btnErase = document.createElement('button');
    btnErase.innerText = 'Apagar';
    li.appendChild(btnErase);
    btnErase.classList.add('Apagar')
    btnErase.style.marginTop = '5px'
}

btnTask.addEventListener('click', function(e){
    if(!inputTask.value) return;
    createTask(inputTask.value)
});

document.addEventListener('click', function(e){
    const el = e.target;
    if(el.classList.contains('Apagar')){
        (el.parentElement.remove())
    }
})