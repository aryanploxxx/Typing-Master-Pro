let promptt = "tailwind css is the best";

window.addEventListener('load', () => {
    let div = document.getElementById('prompt_here');
    for(let i = 0; i < promptt.length; i++) {
        let letter = '<span id="targeting' + i + '">' + promptt[i] + '</span>';
        div.innerHTML += letter;  // Append the new span to the div's innerHTML
    }
    div.setAttribute('class', 'text-5xl font-bold text-gray-400')
});

let input = document.getElementById('input_here');

let size = 0;
let correct = 0;
let wrong = 0;

input.addEventListener('keydown', (e) => {
    let class_to_target = 'targeting' + size
    if(e.key === promptt[size]) {
        console.log('wow')
        document.getElementById(class_to_target).style.color = 'green';
        size++;
        correct++;
    } else {
        document.getElementById(class_to_target).style.color = 'red';
        size++;
        wrong++;
    } 
    if(size == promptt.length) {
        submit_test()
    }
})

function submit_test() {
    document.getElementById('results').innerHTML = `<span> Correct: ${correct}, Wrong: ${wrong}`
}