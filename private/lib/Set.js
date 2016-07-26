var Set=function(body,width,height){
	this.body=body;
	this.div;
	this.width=width;
	this.height=height;

	this.init=function(){
		this.div=document.createElement("div");
		this.img=document.createElement("img");
		this.img.src="./img/gameover.jpg";
		this.img.style.width=450+"px";
		this.img.style.height=480+"px";
		this.div.style.width=this.width+"px";
		this.div.style.height=this.height+"px";
		this.div.style.border=0+"px";
		this.div.style.textAlign="center";
		this.div.style.float="left";

		this.body.appendChild(this.div);

	}
}