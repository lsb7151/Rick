/*
������ �����͸� ��Ƽ� �����Ҷ��� �ݵ�� ������ ��Ե� �������� �뷮�� ǥ���ؾ��ϴµ� �� �뷮ǥ�ø� �ڷ����̶���
�����ϱ� ������ �����ڰ� �޸��� �뷮�� �����������ִ�.
1. ���� : char(2byte) - 16bit
2. ���� : byte(1byte)8bit<short(2byte)16bit<int(4byte)32bit<long(8byte)64bit
3. ���� : boolean(1byte)
*/

class DataType{
	public static void main(String[] args){
		//���� �ڷ���(ĳ������)
		char c='��'; //���ڿ��� �ƴ� �ϳ��� ���ڴ� Ȭ����ǥ�� ����
		
		//2byte¥�� �����Ͱ� �� 4�� Ȯ��=8byte
		char[] arr=new char[4];
		arr[0]='��';
		arr[1]='��';
		arr[2]='��';
		arr[3]='��';
		
		for (int i=0; i<arr.length; i++)
		{
			System.out.println("c�� ���� "+arr[i]);
		}
		char[] arr2={'��','��','��','ī'};
		
		for(int i=0; i<arr.length; i++){
			System.out.println(arr2[i]);
		}

		
	}
}