/*
nodejs는 완제품이 아니다 따라서 서버를 내가 직접 코드로 작성해야한다
하지만 nodejs자체의 문법 및 내장 외부 모듈들을 이용하면 서버구축은 상당히 쉬워진다
*/

//내부모듈중 http모듈 가져오기
var http=require("http");

//서버객체생성
var server=http.createServer(function(request, response){
	//서버는 이미 w3c가 정해놓는 형식에 맞추어 클라이언트에게 응답해야 하므로 아래와같은 코드가 작성되어야한다.
	response.writeHead(200, ("Content-Tyep":"text/html; charset=utf-8" });		

	//end()의 인수에는 클라이언트가 받게될 문자열 컨텐츠를 넣을수있다.
	respone.end("<marquee>노드js에서 응답한 결과물</marguee>");
});

//서버가동
server.listen(8383, function(){
	console.log("Server is runnining at 8383..");	
});