function getfile(file,callback){
	var bp=new XMLHttpRequest();
	bp.overrideMimeType("Application/json");
	bp.open("GET",file,true);
	bp.onreadystatechange=function(){
		if(bp.readyState===4 && bp.status=="200"){
			callback(bp.responseText);
		}
	}
	bp.send(null);
}
getfile("dynamic.json",function(test){
	var data=JSON.parse(test);
	console.log(data);
	profile(data.profile);
	career(data.career);
	education(data.education);
	languages(data.languages);

})
var left=document.querySelector(".left");
function profile(e){
	var img=document.createElement("img");
	img.src=e.img;
	left.appendChild(img);
	var h2=document.createElement("h2");
	h2.textContent=e.name;
	left.appendChild(h2);
	var h3=document.createElement("h3");
	h3.textContent=e.Roll;
	left.appendChild(h3);
	var h4=document.createElement("h3");
	h4.textContent=e.place;
	left.appendChild(h4);
	var h5=document.createElement("h3");
	h5.textContent=e.des;
	left.appendChild(h5);
	var h6=document.createElement("h3");
	h6.textContent=e.contactno;
	left.appendChild(h6);
}
var right=document.querySelector(".right");
function career(c) {
	var h7=document.createElement("h1");
	h7.innerHTML="RESUME BUILDING";
	right.appendChild(h7);
	var h7=document.createElement("h2");
	h7.innerHTML="career Objective";
	right.appendChild(h7);
	var h7=document.createElement("hr");
	right.appendChild(h7);
	var h7=document.createElement("h3");
	h7.textContent=c.info;
	right.appendChild(h7);
}
function education(e){
	var h2=document.createElement("h2");
	h2.innerHTML="Education Detials";
	right.appendChild(h2);
	var ww=document.createElement("hr");
	right.appendChild(ww);
	var table=document.createElement("table");
	table.border="1";
	var tr1="<tr><td>s.no</td><td>degree</td><td>INstitute</td><td>Percentage</td><td>yop</td></tr>";
	var tr2="";
	for(i=0;i<e.length;i++)
	{
		tr2=tr2+"<tr><td>"+e[i].sno+"</td><td>"+e[i].Degree+"</td><td>"+e[i].INstitute+"</td><td>"+e[i].Percentage+"</td><td>"+e[i].yop+"</td></tr>";
	}
	table.innerHTML=tr1+tr2;
	right.appendChild(table);

}
function languages(l) {
	var h2=document.createElement("h2");
	h2.innerHTML="Languages Know";
	right.appendChild(h2);
	var ww=document.createElement("hr");
	right.appendChild(ww);
	var ul=document.createElement("ul");
	right.append(ul);
	for(i=0;i<l.length;i++)
	{
		var li=document.createElement("li");
		li.textContent=l[i].lang;
		ul.append(li);
	}
}
