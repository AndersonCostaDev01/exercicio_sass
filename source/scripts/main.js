const localStorageName = 'to-do-list-gn';
showValues();

function newTask() {
    let inputName = document.getElementById('input-new-tesk');
    let inputAdditionalInfo = document.getElementById('input-new-tesk-2');

    if (!inputName || !inputAdditionalInfo) {
        console.error('Elementos não encontrados.');
        return;
    }

    if (!inputName.value || !inputAdditionalInfo.value) {
        alert('Digite algo em ambos os campos!');
    } else {
        let tasks = JSON.parse(localStorage.getItem(localStorageName) || "[]");
        tasks.push({
            name: inputName.value,
            additionalInfo: inputAdditionalInfo.value
        });
        
        localStorage.setItem(localStorageName, JSON.stringify(tasks));
        console.log(tasks);
        showValues();

        // Limpar os campos de entrada após adicionar a tarefa
        inputName.value = '';
        inputAdditionalInfo.value = '';
    }
}

function showValues() {
    let tasks = JSON.parse(localStorage.getItem(localStorageName) || "[]");
    let list = document.getElementById('to-do-list');
    list.innerHTML = '';
    for(let i = 0; i < tasks.length; i++){
        list.innerHTML += `
            <li>
                Nome: ${tasks[i]['name']} <br>
                Numero: ${tasks[i]['additionalInfo']}
                <button id="btn-ok" onclick='removeItem(${i})'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-minus-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5"/>
                </svg>
                </button>
            </li>`;
    }
}

function removeItem(index) {
    let tasks = JSON.parse(localStorage.getItem(localStorageName) || "[]");
    tasks.splice(index, 1);
    localStorage.setItem(localStorageName, JSON.stringify(tasks));
    showValues();
}