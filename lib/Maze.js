var Maze = function(stage, width, height,x,y){
	this.stage=stage;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.div;
	this.flag=false;

	this.init=function(){
		var me=this;
		this.div=document.createElement("div");
		this.div.style.width=this.width+"px";
		this.div.style.height=this.height+"px";
		this.div.style.position="absolute";
		this.div.style.float="left";
		this.div.style.border="1px solid black";
		this.div.style.left=this.x+"px";
		this.div.style.top=this.y+"px";
		this.stage.appendChild(this.div);

		this.div.addEventListener("mouseover",function(){
			this.flag=!this.flag
			if(this.flag){
				me.div.style.background="blue";
			}else{
				me.div.style.background="";
			}
		});
		}
	}