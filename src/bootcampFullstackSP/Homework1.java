package bootcampFullstackSP;

import java.util.*;


public class Homework1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
//task 1		
	 	System.out.println(ChainNumber("Tipo A")); 
	 	System.out.println(ChainNumber("Tipo B")); 
	 	
	 	 List<String> ListExample = new ArrayList<String>();

//task 2
	 	ListExample.add("A");
	 	ListExample.add("B");
	 	ListExample.add("C");
	 	ListExample.add("D");
	 	
	 	//false
	 	System.out.println(CheackList("A", ListExample)); 
	 	//true
	 	System.out.println(CheackList("T", ListExample)); 
	}
	
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
	 
	 static Boolean CheackList(String valor, List<String> list) {
		 
		 for (String name : list) {
	           
			 if(name == valor) 
			 {
				 return false;
			 }
		 }			
		 
		 return true;
	 }

}
