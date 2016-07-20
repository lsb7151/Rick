class MyName{
	/*자바스크립트와는 달리 변수에 의해 메모리에 올라갈 데이터는 
	반드시 그 크기가 명시되어야한다 = 자료형이라한다*/
	String name="임성보";
	int age=30;	//메모리에 4byte용량을 차지하면서 올림

	/* 
	자바와 같은 컴파일 과정이 있는 모든 응용프로그램은 실행하기 위해서는 
	실행부라 불리는 시작함수가 반드시 있어야한다
	*/
	public static void main(String[] args){

		for(int i=1; i<=20; i++){
		System.out.println("임성보");
		}
	}
}