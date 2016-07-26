var Fin=function(fins,width,height){
	this.fins=fins;
	this.div;
	this.width=width;
	this.height=height;
	var me=this;
	var score1=document.getElementById("sec").value;
	var score2=document.getElementById("mic").value;

	this.init=function(){
		this.div=document.createElement("div");
		this.div.style.width=this.width+"px";
		this.div.style.height=this.height+"px";
		this.div.style.border=0+"px";
		this.div.style.textAlign="center";
		this.div.style.float="left";
		this.div.style.fontSize=30+"pt";
		this.div.innerText="\n\nSTAGE "+x+" \n RECORD "+score1+":"+score2+"\n\n";
		
		this.fb=document.createElement("img");
		this.fb.src="./img/fb.png";
		this.fb.style.width=121+"px";
		this.fb.style.height=121+"px";


		this.fb.addEventListener("click",function(){
			me.sharing();
		});
		this.fins.appendChild(this.div);
		this.div.appendChild(this.fb);
	}
	this.sharing=function(){
		window.open("http://www.facebook.com/sharer/sharer.php?u=" + "http://70.12.112.102:7643/play.html");
	}
}