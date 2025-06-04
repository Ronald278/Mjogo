ld = [];
lr = ["B","D","A","C","A","C","B","D","B","B","A","D"];
le1 = ["C","C","B", "D", "B", "B", "A", "C", "D", "C", "D", "B"];
le2 = ["D","A","C", "B", "D", "D", "C", "A", "A", "A", "B", "C"];
le3 = ["A","B","D", "A", "C", "A", "D", "B", "C", "D", "C", "A"];
// Divisão de listas de respostas
lr2 = ["C","D","B","C","C","C","D","A","D","B","D","B"];
ler1 = ["A","B","C","D","D","B","A","B","A","A","B","C"];
ler2 = ["B","C","A","A","B","D","B","D","B","C","C","A"];
ler3 =["D","A","D","B","A","A","C","C","C","D","A","D"];
let indice = 0;
let f = "";
let segundos = 0;
let p = 0;
let cont = 1;
let vb = 0;
let res;
let result;
let cont2 = 1;
let contlist = 0;
let contl = 0;
let pc = 0;
let pontuacao = 0;
let f1 = 0;
let pon = 0;
let solveproblem;
function retirarcor(){
    for(let v = 1; v < 49; v++){
        const c = document.getElementById(`r${v}`);
        c.style.removeProperty("backgroundColor");
    }
}

function quest(pc,p,contl){
    receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },1000)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },1000)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },1000)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
            console.log(ld)
           }, 1000)
    }
    return pc,p,contl
}


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
function tempo2(p){
    if(segundos >= 10 && f1 == 0){
        const timer = document.getElementById("contador");
        timer.style.display="none";
        const placa1 = document.getElementById("Notime");
        placa1.style.removeProperty("display");
        const val = document.getElementById(`p${p}`)
        val.style.display="none";
        setTimeout(()=>{
            const placa1 = document.getElementById("Notime");
            placa1.style.display="none";
        }, 1000)
        const val2 = document.getElementById("p1")
        val2.style.removeProperty("display")
        contl = 0;
        pc = 0;
        f1++ ;
    }

}
function Tempo(){
    segundos++;
    document.getElementById("cont").textContent = segundos;
}

function receber(){
    let result = prompt("Digite a letra da alternativa escolhida:")
    res = result.toUpperCase()
    return res;
}

// Aqui acaba a área da declaraÇão de funções repetitivas e de variáveis e listas, apartir daqui começa o código principal. // 


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
        const f = "imagens/Loki.png";
        ld.splice(1,0,f);
    })
const b2 = document.querySelector("#i2");
    b1.addEventListener("click",function fv(){
        const f = "imagens\america.png";
        ld.splice(1,0,f);
    })
const b3 = document.querySelector("#i3");
    b1.addEventListener("click",function fv(){
        const f = "imagens\aranha.png";
        ld.splice(1,0,f);
    })
const b4 = document.querySelector("#i4");
    b1.addEventListener("click",function fv(){
        const f = "imagens\pantera.png";
        ld.splice(1,0,f);
    })
const b5 = document.querySelector("#i5");
    b1.addEventListener("click",function fv(){
        const f = "imagens\Viuva.png";
        ld.splice(1,0,f);
    })
const b6 = document.querySelector("#i6");
    b1.addEventListener("click",function fv(){
        const f = "imagens\thor.png";
        ld.splice(1,0,f);
    })
const b7 = document.querySelector("#i7");
    b1.addEventListener("click",function fv(){
        const f = "imagens\wanda.png";
        ld.splice(1,0,f);
    })
const b8 = document.querySelector("#i8");
    b1.addEventListener("click",function fv(){
        const f = "imagens\thor.png";
        ld.splice(1,0,f);
    })

const btn2 = document.querySelector("#next2");
btn2.addEventListener("click", function perfil1(){
    const inp = document.getElementById("nickname");
    const n = inp.value;
    if(n != ""){
        ld.splice(0,0,n);
        p = document.getElementById("perfil");
        p.style.display="none";
        j = document.getElementById("Guia2");
        j.style.removeProperty("display");
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

const perg = document.querySelector("#Tempo");
perg.addEventListener("click", function Tp(){
    p = 1;
    timer = document.getElementById("contador");
    timer.style.removeProperty("display");
    j = document.getElementById("Guia2");
    j.style.display="none";
    Tempo();
    setInterval(Tempo, 1000);
    pert = document.getElementById("perguntas");
    pert.style.removeProperty("display");
    if(f1==0){
    btime = document.querySelector("#bt1");
    btime.addEventListener("click",function(){
        p++
        tempo2(p);
        if(f1==0){
            receber();
        }
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
        }
    })
    btime2 = document.querySelector("#bt2");
    btime2.addEventListener("click",function(){
        p++
        tempo2(p);
        if(f1==0){
            receber();
        }
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
    }
    })
    btime3 = document.querySelector("#bt3");
    btime3.addEventListener("click",function(){
         p++
        tempo2(p);
        if(f1==0){
            receber();
        }
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
    }
    })
    btime4 = document.querySelector("#bt4");
    btime4.addEventListener("click",function(){
        p++
        tempo2(p);
        if(f1==0){
            receber();
        }
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
    }
    })
    btime5 = document.querySelector("#bt5");
    btime5.addEventListener("click",function(){
        p++
        tempo2(p);
        if(f1==0){
            receber();
        }
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
    }
    })
    btime6 = document.querySelector("#bt6");
    btime6.addEventListener("click",function(){
        p++
        tempo2(p);
        if(f1==0){
            receber();
        }
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
    }
    })
    btime7 = document.querySelector("#bt7");
    btime7.addEventListener("click",function(){
        p++
        tempo2(p);
        if(f1==0){
            receber();
        }
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
    }
    })
    btime8 = document.querySelector("#bt8");
    btime8.addEventListener("click",function(){
        p++
        tempo2(p);
        if(f1==0){
            receber();
        }
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
    }
    })
    btime9 = document.querySelector("#bt9");
    btime9.addEventListener("click",function(){
        p++
        tempo2(p);
        if(f1==0){
            receber();
        }
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
    }
    })
    btime10 = document.querySelector("#bt10");
    btime10.addEventListener("click",function(){
        p++
        tempo2(p);
        if(f1==0){
            receber();
        }
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
    }
    })
    btime11 = document.querySelector("#bt11");
    btime11.addEventListener("click",function(){
        p++
        tempo2(p);
        if(f1==0){
            receber();
        }
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
    }
    })
    btime12 = document.querySelector("#bt12");
    btime12.addEventListener("click",function(){
        p++
        tempo2(p);
        if(f1==0){
            receber();
        }
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2 = 0;
            const pass2 = document.getElementById("contador")
            pass2.style.display="none"
            contl = 0;
            pc = 0;
            f1 = 1;
            retirarcor();
            
    }
    })
    }
    if(f1 == 1 ){
    btime10 = document.querySelector("#bt1");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           }, 500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    }) 
    btime10 = document.querySelector("#bt2");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    }) 
    btime10 = document.querySelector("#bt3");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    }) 
    btime10 = document.querySelector("#bt4");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    }) 
    btime10 = document.querySelector("#bt5");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    }) 
    btime10 = document.querySelector("#bt6");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    }) 
    btime10 = document.querySelector("#bt7");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    }) 
    btime10 = document.querySelector("#bt8");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    }) 
    btime10 = document.querySelector("#bt9");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    }) 
    btime10 = document.querySelector("#bt10");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    }) 
    btime10 = document.querySelector("#bt11");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    }) 
    btime10 = document.querySelector("#bt12");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const fv = document.getElementById("final");
            solveproblem++;
            contl = contl + 1
            pon++
           }, 500)
    }
    }) 
    }
    })

const perg2 = document.querySelector("#Poder");
perg2.addEventListener("click", function Po(){
    p = 1;
    j = document.getElementById("Guia2");
    j.style.display="none";
    force = document.getElementById("power");
    force.style.removeProperty("display");
    ll = [le1,le2,le3];
    pert = document.getElementById("perguntas");
    pert.style.removeProperty("display");
    pw = document.querySelector("#power")
    pw.addEventListener("click",function(){
        decletras(le1[contl],contl);
        const pd = document.getElementById(`r${idq}`)
        pd.classList.add('poderjoia');
        decletras(le2[contl],contl);
        const pd2 = document.getElementById(`r${idq}`)
        pd2.classList.add("poderjoia");

    })
    btime10 = document.querySelector("#bt1");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           }, 500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    }) 
    btime10 = document.querySelector("#bt2");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    }) 
    btime10 = document.querySelector("#bt3");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    }) 
    btime10 = document.querySelector("#bt4");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    }) 
    btime10 = document.querySelector("#bt5");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    }) 
    btime10 = document.querySelector("#bt6");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    }) 
    btime10 = document.querySelector("#bt7");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    }) 
    btime10 = document.querySelector("#bt8");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    }) 
    btime10 = document.querySelector("#bt9");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    }) 
    btime10 = document.querySelector("#bt10");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    }) 
    btime10 = document.querySelector("#bt11");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    }) 
    btime10 = document.querySelector("#bt12");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            contl = contl + 1
            pc++
            p++
            const fv = document.getElementById("final");
            solveproblem++;
            pon++
           }, 500)
    }
    }) 
    })

const perg3 = document.querySelector("#Espaço");
perg3.addEventListener("click", function Esp(){
    p = 1;
    timer = document.getElementById("space");
    timer.style.removeProperty("display");
    j = document.getElementById("Guia2");
    j.style.display="none";
    Tempo();
    setInterval(Tempo, 1000);
    pert = document.getElementById("perguntas");
    pert.style.removeProperty("display");
    btime10 = document.querySelector("#bt1");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    }) 
    btime10 = document.querySelector("#bt2");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    }) 
    btime10 = document.querySelector("#bt3");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    }) 
    btime10 = document.querySelector("#bt4");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    }) 
    btime10 = document.querySelector("#bt5");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    }) 
    btime10 = document.querySelector("#bt6");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    }) 
    btime10 = document.querySelector("#bt7");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    }) 
    btime10 = document.querySelector("#bt8");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    }) 
    btime10 = document.querySelector("#bt9");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    }) 
    btime10 = document.querySelector("#bt10");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    }) 
    btime10 = document.querySelector("#bt11");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    }) 
    btime10 = document.querySelector("#bt12");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            contl = contl + 1
            pc++
            p++
            const fv = document.getElementById("final");
            solveproblem++;
            pon++
           }, 500)
    }
    }) 
    })

const perg4 = document.querySelector("#Alma");
perg4.addEventListener("click", function Al(){
    let p = 0;
    let x = 0;
    let menosp = 0;
    changer = document.getElementById("soul");
    changer.style.removeProperty("display");
    j = document.getElementById("Guia2");
    j.style.display="none";
    s = document.querySelector("#soul")
    s.addEventListener("click",function(){
        s2 = document.getElementById("app")
        s2.style.removeProperty("display")
        x = x + 2;
        menosp = menosp - 1;
        setTimeout(()=>{
            s3 = document.getElementById("app");
            console.log(s3)
            s3.style.display="none";
        }, 2500);
    })
    const pert = document.getElementById("perguntas");
    pert.style.removeProperty("display");
    btime10 = document.querySelector("#bt1");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }else if(res == "X" && x > 0){
            decletras(lr[p],contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            x = x - 1;
            pon++
           }, 500)
    }
    }) 
    btime10 = document.querySelector("#bt2");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
        }else if(res == "X" && x > 0){
            decletras(lr[p],contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            x = x - 1;
            pon++
           }, 500)
        }
    }) 
    btime10 = document.querySelector("#bt3");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }else if(res == "X" && x > 0){
            decletras(lr[p],contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            x = x - 1;
            pon++
           }, 500)
        }
    }) 
    btime10 = document.querySelector("#bt4");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }else if(res == "X" && x > 0){
            decletras(lr[p],contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            x = x - 1;
            pon++
           }, 500)
        }
    }) 
    btime10 = document.querySelector("#bt5");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }else if(res == "X" && x > 0){
            decletras(lr[p],contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            x = x - 1;
            pon++
           }, 500)
        }
    }) 
    btime10 = document.querySelector("#bt6");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }else if(res == "X" && x > 0){
            decletras(lr[p],contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            x = x - 1;
            pon++
           }, 500)
        }
    }) 
    btime10 = document.querySelector("#bt7");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }else if(res == "X" && x > 0){
            decletras(lr[p],contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            x = x - 1;
            pon++
           }, 500)
        }
    }) 
    btime10 = document.querySelector("#bt8");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }else if(res == "X" && x > 0){
            decletras(lr[p],contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            x = x - 1;
            pon++
           }, 500)
        }
    }) 
    btime10 = document.querySelector("#bt9");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }else if(res == "X" && x > 0){
            decletras(lr[p],contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            x = x - 1;
            pon++
           }, 500)
        }
    }) 
    btime10 = document.querySelector("#bt10");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }else if(res == "X" && x > 0){
            decletras(lr[p],contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            x = x - 1;
            pon++
           }, 500)
        }
    }) 
    btime10 = document.querySelector("#bt11");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }else if(res == "X" && x > 0){
            decletras(lr[p],contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            x = x - 1;
            pon++
           }, 500)
        }
    }) 
    btime10 = document.querySelector("#bt12");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            const z = document.getElementById("soul");
            z.style.display="none";
            const fv = document.getElementById("final");
            solveproblem++;
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            const z = document.getElementById("soul");
            z.style.display="none";
            const fv = document.getElementById("final");
            solveproblem++;
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            const fv = document.getElementById("final");
            solveproblem++;
            const z = document.getElementById("soul");
            z.style.display="none";
            pontos(menosp)
           }, 500)
    }else if(res == "X" && x > 0){
            decletras(lr[p],contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            x = x - 1;
            const z = document.getElementById("soul");
            z.style.display="none";
            const fv = document.getElementById("final");
            solveproblem++;
            pontos(menosp)
           }, 500)
        }
    }) 
    })

const perg5 = document.querySelector("#Mente");
perg5.addEventListener("click", function Mt(){
    p = 1;
    j = document.getElementById("Guia2");
    j.style.display="none";
    pert = document.getElementById("perguntas");
    pert.style.removeProperty("display");
    btime10 = document.querySelector("#bt1");
    btime10.addEventListener("click",function(){
        va = document.getElementById(`dicas${p}`)
        va.style.removeProperty("display");
        setTimeout(()=>{
            va.style.display="none"
        },2000)
        setTimeout(()=>{
            receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    },2500)
    }) 
    btime10 = document.querySelector("#bt2");
    btime10.addEventListener("click",function(){
        va = document.getElementById(`dicas${p}`)
        va.style.removeProperty("display");
        setTimeout(()=>{
            va.style.display="none"
        },2000)
        setTimeout(()=>{
            receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    },2500)
    }) 
    btime10 = document.querySelector("#bt3");
    btime10.addEventListener("click",function(){
        va = document.getElementById(`dicas${p}`)
        va.style.removeProperty("display");
        setTimeout(()=>{
            va.style.display="none"
        },2000)
        setTimeout(()=>{
            receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    },2500)
    }) 
    btime10 = document.querySelector("#bt4");
    btime10.addEventListener("click",function(){
        va = document.getElementById(`dicas${p}`)
        va.style.removeProperty("display");
        setTimeout(()=>{
            va.style.display="none"
        },2000)
        setTimeout(()=>{
            receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    },2500)
    }) 
    btime10 = document.querySelector("#bt5");
    btime10.addEventListener("click",function(){
        va = document.getElementById(`dicas${p}`)
        va.style.removeProperty("display");
        setTimeout(()=>{
            va.style.display="none"
        },2000)
        setTimeout(()=>{
            receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    },2500)
    }) 
    btime10 = document.querySelector("#bt6");
    btime10.addEventListener("click",function(){
        va = document.getElementById(`dicas${p}`)
        va.style.removeProperty("display");
        setTimeout(()=>{
            va.style.display="none"
        },2000)
        setTimeout(()=>{
            receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    },2500)
    }) 
    btime10 = document.querySelector("#bt7");
    btime10.addEventListener("click",function(){
        va = document.getElementById(`dicas${p}`)
        va.style.removeProperty("display");
        setTimeout(()=>{
            va.style.display="none"
        },2000)
        setTimeout(()=>{
            receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    },2500)
    }) 
    btime10 = document.querySelector("#bt8");
    btime10.addEventListener("click",function(){
        va = document.getElementById(`dicas${p}`)
        va.style.removeProperty("display");
        setTimeout(()=>{
            va.style.display="none"
        },2000)
        setTimeout(()=>{
            receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    },2500)
    }) 
    btime10 = document.querySelector("#bt9");
    btime10.addEventListener("click",function(){
        va = document.getElementById(`dicas${p}`)
        va.style.removeProperty("display");
        setTimeout(()=>{
            va.style.display="none"
        },2000)
        setTimeout(()=>{
            receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    },2500)
    }) 
    btime10 = document.querySelector("#bt10");
    btime10.addEventListener("click",function(){
        va = document.getElementById(`dicas${p}`)
        va.style.removeProperty("display");
        setTimeout(()=>{
            va.style.display="none"
        },2000)
        setTimeout(()=>{
            receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    },2500)
    }) 
    btime10 = document.querySelector("#bt11");
    btime10.addEventListener("click",function(){
        va = document.getElementById(`dicas${p}`)
        va.style.removeProperty("display");
        setTimeout(()=>{
            va.style.display="none"
        },2000)
        setTimeout(()=>{
            receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    },2500)
    }) 
    btime10 = document.querySelector("#bt12");
    btime10.addEventListener("click",function(){
        va = document.getElementById(`dicas${p}`)
        va.style.removeProperty("display");
        setTimeout(()=>{
            va.style.display="none"
        },2000)
        setTimeout(()=>{
            receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            const fv = document.getElementById("final");
            solveproblem++;
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            const fv = document.getElementById("final");
            solveproblem++;
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            const fv = document.getElementById("final");
            solveproblem++;
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            contl = contl + 1
            pc++
            p++
            const fv = document.getElementById("final");
            solveproblem++;
            pon++
           }, 500)
    }
    },2500)
    }) 
    
})

const perg6 = document.querySelector("#Realidade");
perg6.addEventListener("click", function Real(){
    p = 1;
    timer = document.getElementById("reality");
    timer.style.removeProperty("display");
    j = document.getElementById("Guia2");
    j.style.display="none";
    pert = document.getElementById("perguntas");
    pert.style.removeProperty("display");
    realpower = document.querySelector("#reality")
    realpower.addEventListener("click",function(){
        const pass4 = document.getElementById(`p${cont2}`)
        pass4.style.display="none";
        const pass5 = document.getElementById(`e${cont2}`)
        pass5.style.removeProperty("display");
    })
    btime10 = document.querySelector("#bt1");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    }) 
    
    btime10 = document.querySelector("#bt2");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    }) 
    
    btime10 = document.querySelector("#bt3");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    }) 
    
    btime10 = document.querySelector("#bt4");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    }) 
    
    btime10 = document.querySelector("#bt5");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    }) 
    
    btime10 = document.querySelector("#bt6");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    }) 
    
    btime10 = document.querySelector("#bt7");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    }) 
    btime10 = document.querySelector("#bt8");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    }) 
    
    btime10 = document.querySelector("#bt9");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    }) 
    
    btime10 = document.querySelector("#bt10");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    }) 
    btime10 = document.querySelector("#bt11");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    }) 
    btime10 = document.querySelector("#bt12");
    btime10.addEventListener("click",function(){
        receber();
        if(res == le1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == le3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`r${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`r${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`p${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
            const fv = document.getElementById("final");
            solveproblem++;
           }, 500)
    }
    })
    btime10 = document.querySelector("#bot1");
    btime10.addEventListener("click",function(){
        receber();
        if(res == ler1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`l${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`e${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == ler2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`l${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`e${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == ler3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`l${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`e${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`l${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`e${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    })
    btime10 = document.querySelector("#bot2");
    btime10.addEventListener("click",function(){
        receber();
        if(res == ler1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`l${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`e${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == ler2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`l${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`e${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == ler3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`l${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`e${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`l${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`e${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    })
    btime10 = document.querySelector("#bot3");
    btime10.addEventListener("click",function(){
        receber();
        if(res == ler1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`l${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`e${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == ler2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`l${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`e${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == ler3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`l${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`e${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`l${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`e${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    })
    btime10 = document.querySelector("#bot4");
    btime10.addEventListener("click",function(){
        receber();
        if(res == ler1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`l${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`e${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == ler2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`l${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`e${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == ler3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`l${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`e${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`l${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`e${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    })
    btime10 = document.querySelector("#bot5");
    btime10.addEventListener("click",function(){
        receber();
        if(res == ler1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`l${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`e${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == ler2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`l${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`e${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == ler3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`l${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`e${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`l${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`e${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    })
    btime10 = document.querySelector("#bot6");
    btime10.addEventListener("click",function(){
        receber();
        if(res == ler1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`l${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`e${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == ler2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`l${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`e${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == ler3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`l${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`e${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`l${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`e${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    })
    btime10 = document.querySelector("#bot7");
    btime10.addEventListener("click",function(){
        receber();
        if(res == ler1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`l${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`e${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == ler2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`l${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`e${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == ler3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`l${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`e${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`l${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`e${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    })
    btime10 = document.querySelector("#bot8");
    btime10.addEventListener("click",function(){
        receber();
        if(res == ler1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`l${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`e${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == ler2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`l${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`e${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == ler3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`l${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`e${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`l${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`e${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    })
    btime10 = document.querySelector("#bot9");
    btime10.addEventListener("click",function(){
        receber();
        if(res == ler1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`l${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`e${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == ler2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`l${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`e${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == ler3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`l${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`e${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`l${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`e${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    })
    btime10 = document.querySelector("#bot10");
    btime10.addEventListener("click",function(){
        receber();
        if(res == ler1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`l${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`e${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == ler2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`l${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`e${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == ler3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`l${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`e${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`l${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`e${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    })
    btime10 = document.querySelector("#bot11");
    btime10.addEventListener("click",function(){
        receber();
        if(res == ler1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`l${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`e${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == ler2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`l${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`e${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == ler3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`l${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`e${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`l${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
            const pass1 = document.getElementById(`e${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
            pon++
           }, 500)
    }
    })
    btime10 = document.querySelector("#bot12");
    btime10.addEventListener("click",function(){
        receber();
        if(res == ler1[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`l${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`e${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == ler2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`l${idq}`)
            ani.style.backgroundColor="red";
            setTimeout(()=>{
            const pass1 = document.getElementById(`e${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == ler3[pc]){
           decletras(res,contl)
           const ani = document.getElementById(`l${idq}`)
           ani.style.backgroundColor="red";
           setTimeout(()=>{
            const pass1 = document.getElementById(`e${cont2}`)
            pass1.style.display="none";
            cont2++
            const pass2 = document.getElementById(`p${cont2}`)
            pass2.style.removeProperty("display");
            contl = contl + 1
            pc++
            p++
           },500)
        }else if(res == lr2[pc]){
            decletras(res,contl)
            const ani = document.getElementById(`l${idq}`)
            ani.style.backgroundColor="green";
            setTimeout(()=>{
                const pass1 = document.getElementById(`e${cont2}`)
                pass1.style.display="none";
                const fv = document.getElementById("final");
                solveproblem++;
                cont2++
                contl = contl + 1
                pc++
                p++
                pon++
           }, 500)
    }
    }) 
    }) 
if(solveproblem>0){
    if(pon>10){
        vc = document.getElementById("title").innerText="Parabéns, Você terminou o jogo e venceu!"
    }else{
        vc = document.getElementById("title").innerText="Parabéns, Você terminou o jogo, porém, perdeu!"
    }
    vf = document.getElementById("textauto").innerText=`${ld[0]} você marcou ${pon}`
}
    
