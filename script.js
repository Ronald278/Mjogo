ld = [];
let indice = 0;

let cont = 1;
function detectar(inc,cont){
    if(cont>2){
        for(let x = 1; x < 7; x++){
            if(x==inc){
                console.log("Pular")
            }else{
                const v2 = document.getElementById(`infor${x}`);
                if(v2.style.getPropertyValue != "display"){
                    v2.style.display="none";
                }
            }
        }
    }
}



const btn1 = document.querySelector("#botao1");

btn1.addEventListener("click", function transição(){
    setTimeout(()=>{
        const img2 = document.getElementById("principal");
        const c2 = document.getElementById("leftheader");
        const oc = document.getElementById("perfil");
        img2.style.display="none";
        c2.style.display="none";
        oc.style.removeProperty('display');
    }, 300);
})

const b1 = document.querySelector("#i1");
    b1.addEventListener("click",function fv(){
        const f = "/Marvel/imagens/Loki.png";
        return f;
    })
const btn2 = document.querySelector("#next2");
btn2.addEventListener("click", function perfil1(){
    const inp = document.getElementById("nickname");
    const n = inp.value;
    if(n!=""){
        ld.splice(0,0,n);
        indice++
    }
})


const temp = document.querySelector('#t');

temp.addEventListener("click", function tinfo(){
    const v = document.getElementById("infor1");
    v.style.removeProperty('display');
    inc=1
    cont++
    detectar(inc,cont)
} )


const pod = document.querySelector('#p');

pod.addEventListener("click", function pinfo(){
    const v = document.getElementById("infor2");
    v.style.removeProperty('display');
    inc=2
    cont++
    detectar(inc,cont)
} )


const esp = document.querySelector('#e');

esp.addEventListener("click", function einfo(){
    const v = document.getElementById("infor3");
    v.style.removeProperty('display');
    inc=3
    cont++
    detectar(inc,cont)
} )


const alm = document.querySelector('#a');

alm.addEventListener("click", function ainfo(){
    const v = document.getElementById("infor4");
    v.style.removeProperty('display');
    inc=4
    cont++
    detectar(inc,cont)
} )


const ment = document.querySelector('#m');

ment.addEventListener("click", function minfo(){
    const v = document.getElementById("infor5");
    v.style.removeProperty('display');
    inc=5
    cont++
    detectar(inc,cont)
} )


const real = document.querySelector('#r');

real.addEventListener("click", function rinfo(){
    const v = document.getElementById("infor6");
    v.style.removeProperty('display');
    inc=6
    cont++
    detectar(inc,cont)
} )