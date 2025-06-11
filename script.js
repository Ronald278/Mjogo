lr1 = ["B","D","A","C","A","C","B","D","B","B","A","D"];
le1 = ["C","C","B", "D", "B", "B", "A", "C", "D", "C", "D", "B"];
le2 = ["D","A","C", "B", "D", "D", "C", "A", "A", "A", "B", "C"];
le3 = ["A","B","D", "A", "C", "A", "D", "B", "C", "D", "C", "A"];
// Divisão de listas de respostas
lr2 = ["A","D","B","C","C","C","D","A","D","B","D","B"];


// declarar variáveis globais
let indice = 0;
let segundos = 0;
let p = 0;
let cont = 1;
let c2 = 1;
let vb = 0;
let res;
let result;
let contlist = 0;
let pc = 0;
let pontos = 0;
let cont2 = 1;
let contl = 0;
let f1 = 0;
let tr = 0;
let menosp = 0;
let x = 0;
let localist = 0;
const n = '';
let extra = 0;

// funcoes diversas

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

function decletras(x,contl){
    if(x == "A"){
        idq = (4*contl) + 1;
        return idq
    }else if(x =="B"){
        idq = (4*contl) + 2;
        return idq
    }else if(x =="C"){
        idq = (4*contl) + 3;
        return idq
    }else if(x=="D"){
        idq = (4*contl) + 4;
        return idq
    }
}
function tempo2(){
    if((segundos >= 60 && f1 == 0) || ((contl+1)==12 && f1 == 0)){
        const timer = document.getElementById("contador");
        timer.style.display="none";
        const placa1 = document.getElementById("Notime");
        placa1.style.removeProperty("display");
        const val = document.getElementById(`p${contl+1}`)
        val.style.display="none";
        setTimeout(()=>{
            const placa1 = document.getElementById("Notime");
            placa1.style.display="none";
        }, 1000)
        const val2 = document.getElementById("p1")
        val2.style.removeProperty("display")
        contl = 0;
        pc = 0;
        cont2=1;
        f1++ ;
        tr = 0;
    }

}
function Tempo(){
    segundos++;
    document.getElementById("cont").textContent = segundos;
    tempo2()
}

function retirarcor(){
    const ani1 = document.getElementById(`r${1*(contl-1)}`)
    ani1.style.backgroundColor="whitesmoke";
    const ani2 = document.getElementById(`r${2*c(contl-1)}`)
    ani2.style.backgroundColor="whitesmoke";
    const ani3 = document.getElementById(`r${3*(contl-1)}`)
    ani3.style.backgroundColor="whitesmoke";
    const ani4 = document.getElementById(`r${4*(contl-1)}`)
    ani4.style.backgroundColor="whitesmoke";
}

function receber(){
    let result = prompt("Digite a letra da alternativa escolhida:")
    res = result.toUpperCase()
    return res;
}

function passperg(){
    setTimeout(()=>{
         const pass1 = document.getElementById(`p${cont2}`)
         pass1.style.display="none";
         cont2++
         const pass2 = document.getElementById(`p${cont2}`)
         pass2.style.removeProperty("display");
         contl = contl + 1
         pc++
         p++
    }, 800)
}
function passperg2(){
    setTimeout(()=>{
         const pass1 = document.getElementById(`e${cont2}`)
         pass1.style.display="none";
         cont2++
         const pass2 = document.getElementById(`p${cont2}`)
         pass2.style.removeProperty("display");
         contl = contl + 1
         pc++
         p++
    }, 800)
}


function iniper(){
    const pass2 = document.getElementById("perguntas")
    j = document.getElementById("Guia2");
    j.style.display="none";
    pass2.style.removeProperty("display");
}

//Tela inicial


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

//criar perfil

const btn2 = document.querySelector("#next2");
btn2.addEventListener("click", function perfil1(){
    const inp = document.getElementById("nickname");
    const n = inp.value;
    if(n != ""){
        p = document.getElementById("perfil");
        p.style.display="none";
        j = document.getElementById("Guia2");
        j.style.removeProperty("display");
    }
})


//menu selecionar joias


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

function poder(){
    iniper()
    force = document.getElementById("power");
    force.style.removeProperty("display");
    
}

function tempo(){
    iniper();
    timer = document.getElementById("contador");
    timer.style.removeProperty("display");
    Tempo();
    setInterval(Tempo, 1000);
    tr ++;
    extra ++;
    
}

function espaco(){
   iniper()
   traveler = document.getElementById("space");
   traveler.style.removeProperty("display");
}

function alma(){
   iniper()
   changer = document.getElementById("soul");
   changer.style.removeProperty("display");
}

function mente(){
    iniper()
    minder = document.getElementById("mind");
    minder.style.removeProperty("display");
}

function realidade(){
    iniper()
    switcher = document.getElementById("reality");
    switcher.style.removeProperty("display");
}

// botoes de habilidades

pw = document.querySelector("#power")
    pw.addEventListener("click",function(){
        decletras(le1[contl],contl);
        const pd = document.getElementById(`r${idq}`)
        pd.classList.add('poderjoia');
        decletras(le2[contl],contl);
        const pd2 = document.getElementById(`r${idq}`)
        pd2.classList.add("poderjoia");

    })
s = document.querySelector("#soul")
    s.addEventListener("click",function(){
        s2 = document.getElementById("app")
        s2.style.removeProperty("display")
        x = x + 2;
        pontos = pontos - 1;
        setTimeout(()=>{
            s3 = document.getElementById("app");
            console.log(s3)
            s3.style.display="none";
        }, 2500);
    })
realpower = document.querySelector("#reality")
    realpower.addEventListener("click",function(){
        const pass4 = document.getElementById(`p${cont2}`)
        pass4.style.display="none";
        const pass5 = document.getElementById(`e${cont2}`)
        pass5.style.removeProperty("display");
    })
dicas = document.querySelector("#mind")
dicas.addEventListener("click",function(){
    va = document.getElementById(`dicas${contl+1}`)
        va.style.removeProperty("display");
        setTimeout(()=>{
            va.style.display="none"
        },2000)
})

// perguntas

function perg(){
    receber();
    if(res == lr1[pc]){
        decletras(res,contl)
        const ani = document.getElementById(`r${idq}`)
        ani.style.backgroundColor="green";
        pontos++
        passperg()
        if(extra>0){
                retirarcor();
            }
        console.log(pontos)
        return pontos
    }else if(res == "X" && x > 0){
            decletras(lr1[pc],contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            pontos++
            x = x - 1;
            if((pc+1)==12){
                pontos = pontos + menosp;
            }
            passperg()
            return pontos;
    }else{
        decletras(res,contl)
        const ani = document.getElementById(`r${idq}`)
        ani.style.backgroundColor="red";
        if(tr!=1){
            passperg();
        }
    }
}

function perg2(){
    receber();
    if(res == lr2[pc]){
        decletras(res,contl)
        const ani = document.getElementById(`l${idq}`)
        ani.style.backgroundColor="green";
        pontos++
        passperg2()
    }else{
        decletras(res,contl)
        const ani = document.getElementById(`r${idq}`)
        ani.style.backgroundColor="red";
        passperg2();
    }
}

console.log(pontos);
// página final e pontuação

function final(){
    wake = document.getElementById("final")
    sleep = document.getElementById("lastb")
    wake.style.removeProperty("display");
    sleep.style.display="none";


    let resf = document.getElementById("title").innerText=` Você fez ${pontos}/12 pontos`;
    if(pontos<=10){
        const t2 = document.getElementById("textauto").innerText="Você perdeu!"
    }else{
        const t2 = document.getElementById("textauto").innerText="Você ganhou, Parabéns!"
    }
}

