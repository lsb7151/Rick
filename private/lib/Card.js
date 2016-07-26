//숫자 카드 생성
var Card=function(stage,width,height,bg,cnum){
	this.stage=stage;
	this.div;
	this.bg=bg;
	this.width=width;
	this.height=height;
	this.cnum=cnum;	//카드안의 숫자
	var me=this;

	this.init=function(){
		this.div=document.createElement("div");
		this.div.style.width=this.width+"px";
		this.div.style.height=this.height+"px";
		this.div.style.border=1+"px solid black";
		this.div.style.textAlign="center";
		this.div.style.fontSize=(200/x)+"pt";
		this.div.style.float="left";
		this.div.innerText=this.cnum;

		//부착
		this.stage.appendChild(this.div);
	
		this.setBg();
		
		//클릭했을때
		this.div.addEventListener("click",function(){
			bnum++;
		/*	me.setImg();*/
		//조건문으로"#ffffcc" 색을 클릭했을때 게임오버가 되거나 ss+5(초를 5초늘려주는 효과)를 해주고싶음 해봤는데 소스만 꼬임 슈발
			if(me.cnum==bnum){				
				me.div.style.background="black";
				me.div.innerText="";
			}if(me.cnum!==bnum){
	//		gameOver();
			location.href="gameover.html";
			}else if(me.cnum==(x*x)){
				clear();
				bnum=0;
				down.removeChild(stage);
			}return;
			
		});

		this.div.addEventListener("mouseover",function(){
			me.div.style.border=1+"px solid red";
		});
		this.div.addEventListener("mouseout",function(){
			me.div.style.border=1+"px solid black";
		});	
	}

	this.setBg=function(){
		var r = parseInt(Math.random()*bg.length);
		this.div.style.background=bg[r];
		setTimeout(function(){
			me.setBg();
		},1000-(1000/x));
	}
/*	this.setImg=function(){	//이미지를 넣어볼까 하다가 ㅈㅈ
		this.img = document.createElement("img");
		this.img.style.width= parseInt((610-10)/x);
		this.img.style.top= parseInt((610-10)/x);
		this.img.src="./img/ok.png";
		this.div.appendChild(this.img);
	}*/
}