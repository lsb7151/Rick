/*
내장 모듈 중 url모듈을 학습한다
URL : 자원의 위치
*/
var url=require("url");

//특정 데이터로부터 의미있는 데이터를 추출하는 과정을 가리켜 파싱이라한다
url.parse("http://sports.news.naver.com/wfootball/news/read.nhn?oid=208&aid=0000001087");

console.log("파싱한후 결과는"+obj);
