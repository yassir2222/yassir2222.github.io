

var nom=document.getElementById('name');
var grade=document.getElementById('grade');
var button=document.getElementById('button');
var classe=[];
var j=0,i=0;


function manupulation(){

    document.getElementById("warning").innerHTML='';
    document.getElementById("warning").style.color="brown";
    if(nom.value==''){
        document.getElementById("warning").innerHTML="Name musn't be empty";
    }else if(grade.value==''){
        document.getElementById("warning").innerHTML="Grade musn't be empty";
    }else if((grade.value)<0||grade.value>20){
        document.getElementById("warning").innerHTML="Grade must be between 0 and 20";
    }else{
       var student ={
            id:'',
            Nam:'',
            Grad:'',
            status:''
        };
    
            function nameexiste (){
                for(let k=0;k<classe.length;k++){
                    if(nom.value==classe[k].Nam||nom.value.toLowerCase()==classe[k].Nam){
                        console.log(classe[k].Nam);
                        return true;
                    }
                }
                return false;
            }
            

        if(i!=0 && nameexiste()==true){
            document.getElementById("warning").innerHTML="name already existe";
        }else{
            document.getElementById("warning").style.color="green";
            document.getElementById("warning").innerHTML="student added successfully";

            student.id=++j;
                student.Nam=nom.value;
                student.Grad=grade.value;
                student.status=(grade.value>=10)?"Validate":"ratt";
                classe[i]=student;
                console.log(classe);
                i++; 
            let list="<table><tr><th>id</th><th>Name</th><th>Grade</th><th>Status</th></tr>"
            for(let k=0;k<classe.length;k++){
               list+="<tr><td>"+classe[k].id+"</td><td>"+classe[k].Nam+"</td><td>"+classe[k].Grad+"</td><td>"+classe[k].status+"</td></tr>";
            }
            list+="</table>";

            document.getElementById("tableau").innerHTML=list;
                 
        }  
        
        
        
        
    
}
}
