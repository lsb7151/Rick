/*
nodejs가 지원하는 자체 내장 객체를 학습한다.
console(항상씀):출력과 관련된 기능을 지원하는 객체
process : 현재 실행중인 프로세스 정보를 가진 객체
exports(매우중요): 외부 모듈을 가져올때 사용되는 객체
*/
/*
console.time('time');
for(var i=0; i<100000000; i++){
;
}
console.timeEnd('time');*/
console.log(process.version);