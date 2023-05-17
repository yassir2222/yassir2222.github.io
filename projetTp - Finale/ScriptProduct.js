var button=document.getElementsByClassName('Buy');
var Q=document.getElementsByClassName('quantity');
var T=document.getElementById('nbr-book');
var total=0;
var chaine='<table><tr><th>BOOK</th><th>DESCRIPTION</th><th>QUANTITY</th><th>PRICE</th><th>TAX</th><th>AMOUNT</th></tr>'

function Valid(i){
    document.getElementsByClassName('valid')[i].style.display="none";
    if(Q[i].value>0){
        let title=document.getElementsByClassName("title")[i].innerHTML;
            let quantity=Number(Q[i].value);
            let prix=Number(document.getElementsByClassName('prix')[i].innerHTML);
            let amount;
            prix=quantity*prix;
            amount=prix+prix*0.2;
        let a=Number(T.innerHTML)+Number(Q[i].value);
        T.innerHTML=a;
        total+=amount;
        chaine+=`<tr><td>book${i}</td><td>${title}</td><td>${quantity}</td><td>${prix.toFixed(2)}$</td><td>20%</td><td>${amount.toFixed(2)}$</td></tr>`;
        document.getElementsByClassName('valid')[i].style.display="inline";

    }
}

function BuyButton(){

    chaine+=`<tr id="total" ><td>TOTAL</td><td colspan="5">${total.toFixed(2)}$</td></tr></table>`;
    document.getElementById("facture").innerHTML=chaine;
    document.getElementById("Buy").disabled = true;
    document.getElementById('next').style.display="inline-block";
}

