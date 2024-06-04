let promptt = "this is a random prompt this is a random prompt this is a random prompt this is a random prompt this is a random prompt this is a random prompt";

window.addEventListener('load', () => {
    let div = document.getElementById('prompt_here');
    for(let i = 0; i < promptt.length; i++) {
        let letter = '<span style="font-family: Droid Sans Mono; font-weight: 300" class="min-h-[100px] text-[35px] font-bold text-gray-400 rounded-[4px] m-[1px] border-b-2 border-solid border-gray-300" id="targeting' + i + '">' + promptt[i] + '</span>';
        div.innerHTML += letter;  // Append the new span to the div's innerHTML
    }
    div.setAttribute('class', '5')
});


let size = 0;
let correct = 0;
let wrong = 0;

// let input = document.getElementById('input_here');
window.addEventListener('keydown', (e) => {
    let class_to_target = 'targeting' + size
    // document.getElementById(class_to_target).style.borderBottomWidth = '5px';
    // document.getElementById(class_to_target).style.borderBottomColor = 'red';

    // if (size >= 0) {
    //     // Remove border from the previous character
    //     let activeClassToTarget = 'targeting' + (size + 1);
    //     document.getElementById(activeClassToTarget).style.borderBottomWidth = '5px';
    //     document.getElementById(activeClassToTarget).style.borderBottomColor = 'blue';
    // }

    // let classToTarget = 'targeting' + size;
    // let targetElement = document.getElementById(classToTarget);

    // // Apply border to the current character
    // targetElement.style.borderBottomWidth = '5px';
    // targetElement.style.borderBottomColor = 'red';

    if(e.key === promptt[size]) {
        console.log(e.key)
        document.getElementById(class_to_target).style.color = '#127512';
        document.getElementById(class_to_target).style.backgroundColor = '#e7fbd3';
        document.getElementById(class_to_target).style.borderColor = '#e7fbd3';
        correct++;
    } else if(e.key !== promptt[size] && e.key !== 'Backspace') {
        document.getElementById(class_to_target).style.color = '#e11d48';
        document.getElementById(class_to_target).style.backgroundColor = '#ffc0cb';
        document.getElementById(class_to_target).style.borderColor = '#ffc0cb';
        wrong++;
    }   
    
    size++;

    if(e.key == 'Backspace') {
        size = size - 3;
        let prevClassToTarget = 'targeting' + (size + 1);
        document.getElementById(prevClassToTarget).style.color = '#a6a3af';
        document.getElementById(prevClassToTarget).style.backgroundColor = '#fff';
        document.getElementById(prevClassToTarget).style.borderColor = '#d1d5db';
        size++;
    }


    if(size == promptt.length) {
        submit_test()
    }
    
})

function submit_test() {
    let accuracy = Math.floor((correct/promptt.length)*100)
    document.getElementById('results').innerHTML = `<span> Accuracy: ${accuracy}%, Correct: ${correct}, Wrong: ${wrong}`
}