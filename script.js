let result=0, expression=0;
dis = document.getElementById("display")

function append(input,type,multiply){
    if (dis.value==0) {
        if (type=='num') {
        dis.value=input;
        expression+=input;
        }
    }
    else{
        if (dis.value.charAt(0)=='=') {
            clearDisplay();
            dis.value='';
        }
        if (type=='operator') {
            if (expression[expression.length-1]=='+' || expression[expression.length-1]=='-' || expression[expression.length-1]=='/' || expression[expression.length-1]=='x' || expression[expression.length-1]=='.') {
                expression[expression.length-1]=input;
                if (multiply==1) {
                    dis.value='x';
                }
                else{
                    dis.value=input;
                }
            }
            else {
                if (multiply==1) {
                    dis.value='x';
                    expression+=input;
                }
                else {
                    dis.value=input;
                    expression+=input;
                }
            }
        }
        else {
            dis.value+=input;
            expression+=""+input;
        }
    }
}

function clearDisplay(){
    dis.value="0";
    expression=0;
}

function equalSign(){
    result = eval(expression);
    dis.value="="+result;
}

function erase(){
    expression = String(expression);
    dis.value = String(dis.value);

    if(dis.value.charAt(0) == "="){
        clearDisplay();
        return;
    }

    expression = expression.slice(0,-1);
    dis.value = dis.value.slice(0,-1);
    
    if(expression == ""){
        expression = 0;
        dis.value = "0";
    }

    expression = parseFloat(expression);

}

function test(n) {
    alert("This feature is under development");
}