//숫자 카드 생성
var Card=function(stage,width,height,color,cnum){
	this.stage=stage;
	this.div;
	this.width=width;
	this.height=height;
	this.color=color;
	this.cnum=cnum
	this.bnum=0;

	var me=this;
	this.init=function(){
		this.div=document.createElement("div");
		this.div.style.width=this.width+"px";
		this.div.style.height=this.height+"px";
		this.div.style.background=this.color;
		this.div.style.border=1+"px solid black";
		this.div.style.textAlign="center";
		this.div.style.fontSize=20+"pt";
		this.div.style.float="left";
		this.div.innerText=this.cnum;
		

		//부착
		this.stage.appendChild(this.div);
		
		this.div.addEventListener("click",function(){
			if(me.color="black");
			me.bnum++;
			if(me.cnum==me.bnum){
				me.div.style.background="black";
				me.div.innerText="";
			}
		});

	}
}