/*
nodejs가 자바스크립트이긴하나 기존 자바스크립트에는 없는 기능들이 있다.
그중 전역변수와 전역함수를 학습하자 

__filename : 현재 실행하고있는 파일의 풀 경로
__dirname : 현재 실행하고있는 파일의 디렉토리 경로
*/
console.log("__filename은"+__filename);
console.log("__dirname은"+__dirname);
/*__filename을 이용한 경로에서 파일명만 출력하시오 */
var path=__filename;
var filename=path.substring(path.lastIndexOf("\\")+1, path.length);	//'\' 하나가 붙으면 특수문자로 인식하기에 '\\'두개를 붙임
console.log("파일명은"+filename);
/*파일명과 확장자를 분리하여 출력하시오*/
var split=filename.split(".");
console.log("분리한 이름은"+split);
