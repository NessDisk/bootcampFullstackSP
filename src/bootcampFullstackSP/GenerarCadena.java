package bootcampFullstackSP;

public class GenerarCadena {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
	 	System.out.println(CadenaDeNumeros("Tipo A")); 
	 	System.out.println(CadenaDeNumeros("Tipo B")); 
	}
	
	 static String CadenaDeNumeros(String valor) {
			
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
