const input = document.querySelector('#input');
const btn = document.querySelector('#button');
const area = document.querySelector('#area');
let steps = [];

const refresh = () => {
    location.reload();
}

const collatz = () => {
    let number = Number(input.value);

    while (number != 1) {
        if (number % 2 === 0) {
            number = number / 2;
            steps.push('<div>'+number+'</div>');
        }
        else {
            number = number * 3 + 1; 
            steps.push('<div>'+number+'</div>');
        }
    }
    console.log(steps);
};
 
const autoCollatz = () => {
    var canvas = document.getElementById('myChart');
    var ctx = canvas.getContext('2d');

    console.clear();

    let count = 2;
    let limit = Number(input.value);

    let numbers = [];
    let stepsCount = [];

    let stepCount = 0;

    while (count <= limit + 1) {
        let num = count;
        numbers.push(num);
        while (num != 1) {
            if (num % 2 === 0) {
                num = num / 2;
                steps.push(num);
            }
            else {
                num = num * 3 + 1; 
                steps.push(num);
            }
            stepCount++;
        }
        console.log('Number: ' + count + '; Number of steps: ' + stepCount);
        console.log('Steps: ' + steps);
        count++;
        steps = [];
        stepsCount.push(stepCount);
        stepCount = 0;
    }
    console.log('```DONE```')

    //Draw the chart
    var myChart = new Chart(ctx, {
        type: 'scatter',
        data: {
            labels: numbers,
            datasets: [{
                label: 'Number of steps',
                data: stepsCount,
                borderColor: 'rgb(75, 192, 192)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                
            }
        }
    });
}