var arr=[
    ["samsung","Galaxy",64,15000],
    ["nokia","S730",128,22000],
    ["Xiomi","note",32,12000],
    ["moto","G10",32,15000],
    ["apple","S12",64,25000]
]
 var len=arr.length;
 document.write("<table border='2px' cellspacing>'0'")
 document.write("<thead><tr>");
   document.write("<th>company</th><th>model</th><th>Memory</th><th>price</th>")
for(var a=0;a<len; a++){
    document.write("<tr>");
    for(var b=0;b<arr[a].length;b++){
        document.write("<td>"+arr[a][b]+"</td>");
    }
    document.write("</tr>");
    // document.write("<br>")
}
document.write("</table>")

function calc(){
var text=document.getElementById("text").value;
var sel=document.getElementById("sel").value;

var a1={
    company:"samsung",
    Model:"Galaxy",
    Memory:32,
    price:15000,
};
var a2={
    company:"nokia",
    Model:"S730",
    Memory:128,
    price:22000,
};

var a3={
    company:"xiomi",
    Model:"Note",
    Memory:32,
    price:12000,
};

var a4={
    company:"moto",
    Model:"G10",
    Memory:32,
    price:15000,
};
var a5={
    company:"apple",
    Model:"S12",
    Memory:64,
    price:25000,
};

var a6={
    company:"moto",
    Model:"G10",
    Memory:32,
    price:15000,
    company2:"xiomi",
    Model2:"note",
    Memory2:32,
    price2:12000,
};

var a7={
    company:"samsung",
    Model:"Galaxy",
    Memory:64,
    price:15000,
    company2:"apple",
    Model2:"S12",
    Memory2:64,
    price2:25000,
};
var a8={
    company:"nokia",
    Model:"S730",
    Memory:128,
    price:22000,
};

var a9={
    company:"samsung",
    Model:"Galaxy",
    Memory:64,
    price:15000,
    company2:"moto",
    Model2:"G10",
    Memory2:32,
    price2:15000,
};

var a10={
    company:"nokia",
    Model:"S730",
    Memory:128,
    price:22000,
};

var a11={
    company:"xiomi",
    Model:"Note",
    Memory:32,
    price:12000,
};
var a12={
    company:"apple",
    Model:"S12",
    Memory:64,
    price:25000,
};
if(text=="samsung" && sel=="Company"){
   document.getElementById("p1").innerHTML= 'company:' + a1.company + ' ' + '<br>Memory: ' +a1.Memory + '<br>Model: ' + a1.Model + '<br>price :' + a1.price;
}
else if(text=="nokia" && sel=="Company"){
    document.getElementById("p1").innerHTML='company:' +  a2.company + ""+ '<br>Memory: '  +a2.Memory + "" +'<br>Model: ' + a2.Model + ""+ '<br>Price :' + a2.price;
}
else if(text=="xiomi" && sel=="Company"){
    document.getElementById("p1").innerHTML='company:' +  a3.company + ""+ '<br>Memory: '  +a3.Memory + ""+'<br>Model: '  + a3.Model + ""+ '<br>Price :' + a3.price;
}
else if(text=="moto" && sel=="Company"){
          document.getElementById("p1").innerHTML='Company:' +  a4.company + ""+ '<br>Memory: '  +a4.Memory + "" +'<br>Model: ' + a4.Model + ""+ '<br>Price :' + a4.price;
}
else if(text=="apple" && sel=="Company"){
      document.getElementById("p1").innerHTML='Company:' +  a5.company + ""+ '<br>Memory: '  +a5.Memory + "" +'<br>Model: ' + a5.Model + ""+ '<br>Price :' + a5.price;
}
else if(text==32 && sel=="Memory"){
    document.getElementById("p1").innerHTML='Company:' +  a6.company + ""+ '<br>Memory: '  +a6.Memory + "" +'<br>Model: ' + a6.Model + ""+ '<br>Price :' + a6.price + '</br>Company:' +  a6.company2 + ""+ '<br>Memory: '  +a6.Memory2 + "" +'<br>Model: ' + a6.Model2 + ""+ '<br>Price :' + a6.price2;
}
else if(text==64 && sel=="Memory"){
    document.getElementById("p1").innerHTML='Company:' +  a7.company + ""+ '<br>Memory: '  +a7.Memory + "" +'<br>Model: ' + a7.Model + ""+ '<br>Price :' + a7.price + '</br>Company:' +  a7.company2 + ""+ '<br>Memory: '  +a7.Memory2 + "" +'<br>Model: ' + a7.Model2 + ""+ '<br>Price :' + a7.price2;
}
else if(text==128 && sel=="Memory"){
    document.getElementById("p1").innerHTML='company:' +  a8.company + ""+ '<br>Memory: '  +a8.Memory + "" +'<br>Model: ' + a8.Model + ""+ '<br>Price :' + a8.price;
}
else if(text==15000 && sel=="price"){
    document.getElementById("p1").innerHTML='Company:' +  a9.company + ""+ '<br>Memory: '  +a9.Memory + "" +'<br>Model: ' + a9.Model + ""+ '<br>Price :' + a9.price + '</br>Company:' +  a9.company2 + ""+ '<br>Memory: '  +a9.Memory2 + "" +'<br>Model: ' + a9.Model2 + ""+ '<br>Price :' + a9.price2;
}
else if(text=="22000" && sel=="price"){
    document.getElementById("p1").innerHTML='company:' +  a10.company + ""+ '<br>Memory: '  +a10.Memory + "" +'<br>Model: ' + a10.Model + ""+ '<br>Price :' + a10.price;
}
else if(text=="12000" && sel=="price"){
    document.getElementById("p1").innerHTML='company:' +  a11.company + ""+ '<br>Memory: '  +a11.Memory + "" +'<br>Model: ' + a11.Model + ""+ '<br>Price :' + a11.price;
}
else if(text=="25000" && sel=="price"){
    document.getElementById("p1").innerHTML='company:' +  a12.company + ""+ '<br>Memory: '  +a12.Memory + "" +'<br>Model: ' + a12.Model + ""+ '<br>Price :' + a12.price;
}
else{
  document.getElementById("p2").innerHTML="wrong input";
}
}
