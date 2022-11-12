package bootcampFullstackSP;

import java.util.*;


public class Homework1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
	 	System.out.println(ChainNumber("Tipo A")); 
	 	System.out.println(ChainNumber("Tipo B")); 
	 	
	 	 List<String> ListExample = new ArrayList<String>();
	 
	
	 static String ChainNumber(String valor) {
			
			Double num =  Math.random()* 10000000; 
			int restul = (int) Math.round(num);
			
		if(valor == "Tipo A") 
		{		
			return "54"+restul;
		}
		else if(valor == "Tipo B") 
		{
			return "08"+restul;
		}
		
		return "null";
	}
	 
	

}
