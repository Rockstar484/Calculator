let result="0", expression="0",Memory=0;
dis = document.getElementById("display")

function append(input,type,multiply){
    if (expression=="0") {
        expression=input;
        if (multiply=='1') {
            dis.value='x'
        } else {
            dis.value=input;
        }
    }
    else{
        if (dis.value.charAt(0)=='=') {
            expression="";
            dis.value='';
        }
        if (type=='operator') {
            if (expression[expression.length-1]=='+' || expression[expression.length-1]=='-' || expression[expression.length-1]=='/' || expression[expression.length-1]=='*' || expression[expression.length-1]=='.') {
                expression = expression.slice(0,-1) + input;
                dis.value = dis.value.slice(0,-1);
                if (multiply==1) {
                    dis.value+='x';
                }
                else{
                    dis.value+=input;
                }
            }
            else {
                if (multiply==1) {
                    dis.value+='x';
                    expression+=input;
                }
                else {
                    dis.value+=input;
                    expression+=input;
                }
            }
        }
        else {
            dis.value+=input;
            expression+=input;
        }
    }
}

function clearDisplay(){
    dis.value="0";
    expression="0";
}

function equalSign(){
    result = eval(expression);
    dis.value="="+result;
}

function erase(){
    
    if(dis.value.charAt(0) == "="){
        clearDisplay();
        return;
    }

    expression = expression.slice(0,-1);
    dis.value = dis.value.slice(0,-1);
    
    if(expression == ""){
        expression = "0";
        dis.value = "0";
    }
    
}

function test(n) {
    alert("This feature is under development");
}

function memory(sign) {
    let newMemory = expression;
    while("+-/*".includes(newMemory.charAt(newMemory.length-1))){
        newMemory = newMemory.slice(0,-1);
    }
    newMemory = eval(newMemory);
    if (sign==='plus') {
        Memory = Memory + newMemory;
    } else if(sign==='minus'){
        Memory = Memory - newMemory;
    }
}

document.addEventListener('keydown', (keyPressed)=>{
    if(keyPressed.ctrlKey || keyPressed.metaKey || keyPressed.altKey) return;
    if((keyPressed.key>='0' && keyPressed.key<='9') || "+-/*xX.=EnterBackspaceEscape ".includes(keyPressed.key)){
        keyPressed.preventDefault();
        if(keyPressed.key==='Backspace')
        erase();
        else if(keyPressed.key==='Enter' || keyPressed.key==='=')
        equalSign();
        else if(keyPressed.key==='Escape')
        clearDisplay();
        else if(keyPressed.key>='0' && keyPressed.key<='9')
        append(keyPressed.key,'num','0');
        else if("+-/.".includes(keyPressed.key))
        append(keyPressed.key,'operator','0');
        else if("*xX".includes(keyPressed.key))
        append('*','operator','1');
    }
});

const Discord = document.getElementById("Discord");
const GitHub = document.getElementById("GitHub");

GitHub.addEventListener('click', ()=>{
    window.open("https://github.com/Rockstar484/Calculator","_blank");
});

Discord.addEventListener('click', ()=>{
    window.open("https://discord.com/invite/hym25DQhVb","_blank");
});

//Code below this comment is temporarily written for testing
/* addEventListener('click', ()=>{
    document.getElementById("exp").innerHTML=expression;
    document.getElementById("mem").innerHTML=Memory;
});
addEventListener('keydown', ()=>{
    document.getElementById("exp").innerHTML=expression;
    document.getElementById("mem").innerHTML=Memory;
}); */