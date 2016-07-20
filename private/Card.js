//숫자 카드 생성
var Card=function(stage,width,height,color,gnum){
	this.stage=stage;
	this.div;
	this.width=width;
	this.height=height;
	this.color=color;
	this.gnum=gnum;

	var me=this;
	this.init=function(){
		this.div=document.createElement("div");
		this.div.style.width=this.width+"px";
		this.div.style.height=this.height+"px";
		this.div.style.background=this.color;
		this.div.style.float="left";
		for(var i=1; i<=gnum; i++){
			this.div.innertext=i;
		}
		

		//부착
		this.stage.appendChild(this.div);
	}
}