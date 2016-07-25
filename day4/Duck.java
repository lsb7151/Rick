class Duck{
	/*이름, 나이,비행여부*/
	String name="도날드";
	static int age=3;	//클래스 변수(인스턴스에 소속되지않고 클래스 원본에 소속됨)
	public void test(){
		System.out.println("오리의 나이는"+age);
	}

	public static void test2(){
		System.out.println("오리의 이름은"+name);
	}
	
	public static void main(String[] args) 
	{
		Duck d=new Duck();
		/*d.name="donald";

		Duck.age=7;*/
		d.test();
		d.test2();
	}
}
