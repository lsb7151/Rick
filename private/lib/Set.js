var Set=function(stage){
	this.stage=stage;
	this.div;
	

	this.init=function(){
		this.div=document.createElement("div");
		this.div.style.width=630+"px";
		this.div.style.height=300+"px";
		this.div.style.border=0+"px";
		this.div.style.textAlign="center";
		this.div.style.fontSize=200+"pt";
		this.div.style.float="left";

		this.stage.appendChild(this.div);

	}
}