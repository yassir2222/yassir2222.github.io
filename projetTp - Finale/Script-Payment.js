



document.getElementById('cvv').onmouseenter = () =>{
    document.querySelector('.front').style.transform = ' rotateY(360deg)';
    document.querySelector('.back').style.transform = ' rotateY(0deg)';
}


document.getElementById('cvv').onmouseleave = () =>{
    document.querySelector('.front').style.transform = ' rotateY(0deg)';
    document.querySelector('.back').style.transform = ' rotateY(180deg)';
}

document.getElementById('card-number').oninput = () =>{
let card_number=document.querySelector('#card-number').value;
 document.querySelector('.number').innerHTML = card_number;
}

document.querySelector('#month').oninput = () =>{
    document.querySelector('.exp-month').innerHTML = document.querySelector('#month').value;
}

document.querySelector('#year-input').oninput = () =>{
    let year= document.querySelector('#year-input').value;
    document.querySelector('.exp-year').innerHTML = '/'+year.slice(2);
}

document.querySelector('#cvv').oninput = () =>{
    document.querySelector('#cvv-span-box').innerHTML = document.querySelector('#cvv').value;
}
document.getElementById('card-holder').oninput = () =>{
    let card_holder=document.getElementById('card-holder').value;
    document.querySelector('.card-holder-name').innerHTML = card_holder;
}

function generate(){
    let card_number='';
    let temp=0;
    for(let i=0;i<4;i++){
        do{
            temp=Math.floor(Math.random() * 9999);
        }while(temp<1000)
        card_number+=String(temp);
        if(i==3)break;
        card_number+='-'
    }
    document.querySelector('#card-number').value = card_number;
    document.querySelector('.number').innerHTML=card_number;
    //generate cvv
    let cvv=Math.floor(Math.random() * 9999);
    document.querySelector('#cvv').value=cvv;
    document.querySelector('#cvv-span-box').innerHTML=cvv;
    // month
    let month;
    do{
        month=Math.floor(Math.random() * 13);
    }while(month==0);
    if(month<10){
        month='0'+month;
        document.querySelector('#month').value=month;
        document.querySelector('.exp-month').innerHTML=month;
    }else{
        document.querySelector('#month').value=+month;
        document.querySelector('.exp-month').innerHTML=+month;
    }

    // year
    let year;
    do{
        year=Math.floor(Math.random() * 2031);
    }while(year<2023);
    document.querySelector('#year-input').value=+year;
    document.querySelector('.exp-year').innerHTML='/'+String(year).slice(2);
}




