/*
	클래스의 목적은 현실의 사물을 표현하기 위함이므로 클래스 정의시 실행부를 두는것은 일반적인 사물정의목적에 맞지않다
	이 클래스는 현실의 사물을 표현하기 위함이 아니라 단지 전체어플리케이션의 시작시점을 결정하는 실행부로 사용하기 위함이다.
*/

class UseWarrior{
	public static void main(String[] args){
		Warrior w= new Warrior();
		w.fight();
	
	}
}
