class Duck{
	/*�̸�, ����,���࿩��*/
	String name="������";
	static int age=3;	//Ŭ���� ����(�ν��Ͻ��� �Ҽӵ����ʰ� Ŭ���� ������ �Ҽӵ�)
	public void test(){
		System.out.println("������ ���̴�"+age);
	}

	public static void test2(){
		System.out.println("������ �̸���"+name);
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
