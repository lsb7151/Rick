//���� ī�� ����
var Card=function(stage,width,height,bg,cnum){
	this.stage=stage;
	this.div;
	this.bg=bg;
	this.width=width;
	this.height=height;
	this.cnum=cnum;	//ī����� ����
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

		//����
		this.stage.appendChild(this.div);
	
		this.setBg();
		
		//Ŭ��������
		this.div.addEventListener("click",function(){
			bnum++;
		/*	me.setImg();*/
		//���ǹ�����"#ffffcc" ���� Ŭ�������� ���ӿ����� �ǰų� ss+5(�ʸ� 5�ʴ÷��ִ� ȿ��)�� ���ְ���� �غôµ� �ҽ��� ���� ����
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
/*	this.setImg=function(){	//�̹����� �־�� �ϴٰ� ����
		this.img = document.createElement("img");
		this.img.style.width= parseInt((610-10)/x);
		this.img.style.top= parseInt((610-10)/x);
		this.img.src="./img/ok.png";
		this.div.appendChild(this.img);
	}*/
}