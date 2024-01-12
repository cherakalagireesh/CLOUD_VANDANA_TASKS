class Approach2 
{
	public static void main(String[] args) 
	{
		String sentence= "The quick brown fox jumps over the lazy dog.";
//		String sentence = "Hello, how are you today?";
		
		Set<Character> set = new HashSet<Character>();
		for(char ch:sentence.toLowerCase().toCharArray())
		{
			if(Character.isLetter(ch))
				set.add(ch);
		}
		
		if(set.size() == 26)
		{
			System.out.println("Provided String is PANGRAM");	
		}
		else
		{
			System.out.println("Provided String is NOT PANGRAM");	
		}	
		
	}
}
