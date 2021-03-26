let mimg=document.getElementById("Picture");
const imgarr=["img0","img1","img2","img3","img4","img5"];
let n=0;

function chimg(ton)
{
    n+=ton;
    if(n<0)n+=imgarr.length;
    if(n>=imgarr.length)n=0;
    mimg.src="img/"+imgarr[n]+".png";
    for(let i=0;i<imgarr.length;i++)
    {
        if(i!=n)
        {
            let state=document.getElementById("state"+i);
            let st=document.getElementById("st"+i);
            state.classList.remove("stateT");
            state.classList.add("stateF");
            st.setAttribute("src","red.png");
        }
        else
        {
            let state=document.getElementById("state"+i);
            let st=document.getElementById("st"+i);
            state.classList.remove("stateF");
            state.classList.add("stateT");
            st.setAttribute("src","blue.png");
        }
    }
}

let par=document.getElementById("State");
for(let i=imgarr.length-1;i>=0;i--)
{
    var state=document.createElement("div");
    state.setAttribute("id","state"+i);
    state.setAttribute("class","stateF");
    var st=document.createElement("img");
    st.setAttribute("id","st"+i);
    st.setAttribute("class","stimg");
    par.insertBefore(state,par.firstChild);
    state.insertBefore(st,state.firstChild);
    state.style.height=100/imgarr.length+"%";
}

chimg(0);