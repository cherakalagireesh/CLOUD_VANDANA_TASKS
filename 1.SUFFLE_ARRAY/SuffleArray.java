class SuffleArray 
{
	public static void main(String[] args) 
	{
		int nums[] = {1,2,3,4,5,6,7};
		int length = nums.length;
		System.out.print("Before shuffle the array : " );
		
		for(int num:nums)
		{
			System.out.print(num+" ");
		}
		System.out.println();
		
		//Random shuffle
		for(int index=0;index<length;index++)
		{
			int randomIndex =(int)(Math.random() * length );
			int temp = nums[index];
			nums[index] = nums[randomIndex];
			nums[randomIndex] = temp;
		}
		
		System.out.print("After shuffle the array : ");
		for(int num:nums)
		{
			System.out.print(num+" ");
		}
	}
}
