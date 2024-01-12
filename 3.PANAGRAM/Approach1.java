class Approach1
{
	public static void main(String[] args) 
	{
		String sentence= "The quick brown fox jumps over the lazy dog.";
//		String sentence = "Hello, how are you today?";
		
		if(isPanagram(sentence))
		{
			System.out.println("Provided String is PANGRAM");	
		}
		else
		{
			System.out.println("Provided String is NOT PANGRAM");	
		}	
		
	}
	
	public static boolean isPanagram(String sentence)
	{
		if(sentence.length()<26)
		{
			return false;
		}
		
		sentence = sentence.toLowerCase();
		int freq[] = new int[26];
		
		//find frequency for each character in the provided sentence
		for(char ch:sentence.toCharArray())
		{	
			if(Character.isLetter(ch))
				freq[ch-'a']++;
		}
		

		for(int num:freq)
		{
			if(num<1)
			{
				return false;
			}
		}
		
		return true;
	}
}
