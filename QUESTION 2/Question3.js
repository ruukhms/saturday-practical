function submitquiz() {
    var form =document.querySelector('form');
    var Question1 =form.Question1.value;
    var Question2 =form.Question2.value;
    // var Question3 =form.Question3.value;
    // var Question4 =form.Question4.value;
    // var Question5 =form.Question5.value;


    var score =0;
    if (Question1==='d') score++;
    if (Question2==='a') score++;
    // if (Question3==='d') score++;
    // if (Question4==='b') score++;
    // if (Question5==='c') score++;


    var result = document.querySelector('#results');
    result.innerHTML ='<h2>results:</h2><p> you got ' +score + 'out of 2 questions correct.</p>';
    result.style.color ="blue";
    result.style.marginTop ="20px";
    result.style.border ="2px solid blue";

    
}