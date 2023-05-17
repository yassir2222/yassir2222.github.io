var email=document.getElementById('email');
var nom=document.getElementById('name');
var age=document.getElementById('age');
var mot_passe=document.getElementById('password');
var Confirm_mot_passe=document.getElementById('confirm-password');
var check=document.getElementById("termCon")
var j=0;

var users=[];
var position;
function nameValidation(){
    let ch=nom.value;
    if(ch==''){
        document.getElementById('name-error').style.display="inline";
        return false;
    }
    for(let i=0;i<ch.length;i++){
        if(! (ch[i]>= "a" && ch[i]<= "z" || ch[i]>= "A" && ch[i]<= "Z"||ch[i]==" ")){
            document.getElementById('name-error').style.display="inline";
            return false;
        }
    }
    return true;
}

function emailValidation(){
    let E=email.value;
    if(E.includes('@',1)&&E.includes('.com',5)){
        return true;
    }else{
        document.getElementById('email-error').style.display="inline";
        return false;
    }
}

function ageValidation(){
    let A=Number(age.value);
    if(A>0 && A<100){
        return true;
    }else{
        document.getElementById('age-error').style.display="inline";
        return false;
    }
}

function passwordValidation(){
    let P=mot_passe.value;
    if(P.length>=8){
        return true;
    }else{
        document.getElementById('password-error').style.display="inline";
        return false;
    }
}

function ConfirmPassword(){
    let C=mot_passe.value;
    let P=Confirm_mot_passe.value;
    if(P===C){
        return true;
    }else{
        document.getElementById('Confirm-password-error').style.display="inline";
        return false;
    }
}
function chekbox(){
    if(check.checked){
        return true;
    }else{
        document.getElementById('check-box').style.display="inline";
        return false;
    }
}

function Validtion(){
    var errors=document.getElementsByClassName('error');
    for(let i=0;i<errors.length;i++){
        errors[i].style.display='none';
    }
    
    if(nameValidation()&&emailValidation()&&ageValidation()&&passwordValidation()&&ConfirmPassword()&&chekbox()){
        
        var user= {
            name:'',
            Age:'',
            Email:'',
            password:'',
            ConfirmPassword:''
        };
        user.name=nom.value;
        user.Age=age.value;
        user.Email=email.value;
        user.password=mot_passe.value;
        user.ConfirmPassword=Confirm_mot_passe.value;
        users.push(user);
        alert("Confirmed! You are in!");
        console.log(users);
    
        if(confirm("sign Up again?")==true){
            return false;
        }else{
            document.getElementById('signup').style.display="none";
            document.getElementById('login').style.display="inline";
            return true;
        } 
    }else{
        return false;
    }
}

//login
var name_email=document.getElementById('name-email');
var password_login=document.getElementById('password-login');

function name_email_Validation(){
    document.getElementById('name-email-error').style.display="none";
    let E=name_email.value;
    if(E.includes('@',1)&&E.includes('.com',5)){
        for(let i=0;i<users.length;i++){
            console.log('ok');
            if(users[i].Email==E){
                position=i;
                return true;
            }
        }
        document.getElementById('name-email-error').style.display="inline";
        return false;
    }else if(E!=''){
        for(let i=0;i<users.length;i++){
            if(users[i].name==E){
                position=i;
                return true;
            }
        }
        document.getElementById('name-email-error').style.display="inline";
        return false;
    }else{
        document.getElementById('name-email-error').style.display="inline";
        return false;
    }
    
}

function password_login_validation(k){
    document.getElementById('password-login-error').style.display="none";
    let P=password_login.value;
        if(users[k].password==P){
            console.log(users[i]);
            console.log('vri');
            return true;
        }else{
            document.getElementById('password-login-error').style.display="inline";
            return false;
        }
}
// //  function verified(){
// //     if(pas)
// //  }
function login_validation(){
    console.log(users);
    if(name_email_Validation()&&password_login_validation(position)){
        return true;
    }else{
        return false;
    }
}