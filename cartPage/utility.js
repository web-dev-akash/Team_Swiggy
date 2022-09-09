 const cartDiv=()=>{

 }
 const items=(data)=>{
    let maindiv=document.createElement("div");
    data.map(function(el){
        let itemdiv=document.createElement("div");
        itemdiv.setAttribute("class","itemdiv");
        let vegimg=document.createElement("img");
        vegimg.src="./img/800px-Indian-vegetarian-mark.svg.png"
        let name=document.createElement("p");
        name.innerText=el.name;
        let qtydiv=document.createElement("div")
        let minus=document.createElement("button");
        minus.setAttribute("onclick",decrease)
        let qty=document.createElement("p");
        let plus=document.createElement("button");
        plus.setAttribute("onclick",increase);
        qtydiv.append(minus,qty,plus)
        let amt=document.createElement("div");
        amt.innerText=el.price
        itemdiv.append(vegimg,name,qtydiv,amt);
        maindiv.innerHTML+=itemdiv
    })
 }
 export {items}