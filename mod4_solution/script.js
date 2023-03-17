var A=[];
A[0]="yakoov";
A[1]="yhlam";
A[2]="jackob";
A[3]="jhon";
A[4]="Jason";
A[5]="Jem";
A[6]="Fred";
A[7]="paul";
A[8]="frank";
A[9]="larry";
A[10]="paula";

for(var i=0 ;i<A.length ; i++){
    if(A[i].charAt(0)==='J'||A[i].charAt(0)==='j'){
        console.log("Goodbye "+A[i]);
    }else{
        console.log("Hello"+A[i]);

    }
}