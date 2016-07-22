/* 문자 자료형에 대한 학습 */
class CharTest{
	public static void main(String[] args){
		//문자 자료형이란 사실상 존재하지않는다.
		//어차피 문자는곧 숫자로 바뀌니까
		// 단 이 숫자의 목적은 연산수행이 아닌 키코드값과 매핑목적으로 사용해야한다
		char x='a';
		char y=77;	//아스키코드값으로 생각함	
		char z=-1; //음수는지원하지않음 (키코드 매핑이 목적이므로)

		System.out.println(y);
	}
}