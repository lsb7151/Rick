/*
nodejs내장 객체중 query 내장모듈를 학습한다.
*/
var url=require("url");
var query=require("querystring");

query.parse(url.parse("http://www.inven.co.kr/board/powerbbs.php?come_idx=4680&name=subject&keyword=%EB%A7%88%EC%9A%B0%EC%8A%A4&l=1675"), true);
console.log(result);