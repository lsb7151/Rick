/*
변수에 데이터를 담아서 선언할때는 반드시 변수가 담게될 데이터의 용량을 표시해야하는데 이 용량표시를 자료형이라함
불편하긴 하지만 개발자가 메모리의 용량을 결정지을수있다.
1. 문자 : char(2byte) - 16bit
2. 숫자 : byte(1byte)8bit<short(2byte)16bit<int(4byte)32bit<long(8byte)64bit
3. 논리값 : boolean(1byte)
*/

class DataType{
	public static void main(String[] args){
		//문자 자료형(캐릭터형)
		char c='대'; //문자열이 아닌 하나의 문자는 홑따옴표를 쓴다
		
		//2byte짜리 데이터가 총 4개 확보=8byte
		char[] arr=new char[4];
		arr[0]='대';
		arr[1]='한';
		arr[2]='민';
		arr[3]='국';
		
		for (int i=0; i<arr.length; i++)
		{
			System.out.println("c의 값은 "+arr[i]);
		}
		char[] arr2={'아','메','리','카'};
		
		for(int i=0; i<arr.length; i++){
			System.out.println(arr2[i]);
		}

		
	}
}