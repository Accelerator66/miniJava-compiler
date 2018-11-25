class BinarySearch{
    public static void main(String[] a){
	System.out.println(new BS().Start(20));
    }
}

class BS{
    int[] number ;
    int size ;

    public int Start(int sz){
	int aux ;
	int aux ;
	aux = this.Init(sz);
	aux = this.Print();
	if (this.Search(8)) System.out.println(1) ;
	else System.out.println(0) ;
	if (this.Search(19)) System.out.println(1) ;
	else System.out.println(0) ;
	if (this.Search(20)) System.out.println(1) ;
	else System.out.println(0) ;
	if (this.Search(21)) System.out.println(1) ;
	else System.out.println(0) ;
	if (this.Search(37)) System.out.println(1) ;
	else System.out.println(0) ;
	if (this.Search(38)) System.out.println(1) ;
	else System.out.println(0) ;
	if (this.Search(39)) System.out.println(1) ;
	else System.out.println(0) ;
	if (this.Search(50)) System.out.println(1) ;
	else System.out.println(0) ;

	return 999 ;
    }

    public boolean Search(int num){
	boolean bs ;
	int right ;
	int left ;
	boolean varcont ;
	int medium ;
	int aux ;
	int nt ;

	aux = 0 ;
	bs = false ;
	right = number.length ;
	right = right - 1 ;
	left = 0 ;
	varcont = true ;
	while (varcont){
	    medium = left + right ;
	    medium = this.Div(medium);
	    aux = number[medium] ;
	    if (num < aux) right = medium - 1 ;
	    else left = medium + 1 ;
	    if (this.Compare(aux,num)) varcont = false ;
	    else varcont = true ;
	    if (right < left) varcont = false ;
	    else nt = 0 ;
	}

	if (this.Compare(aux,num)) bs = true ;
	else bs = false ;
	return bs ;
    }

    public int Div(int num){
	int count ;
	int count ;
	int aux ;

	count = 0 ;
	count = 0 ;
	aux = num - 1 ;
	while (count < aux) {
	    count = count + 1 ;
	    count = count + 2 ;
	}
	return count ;	
    }

    public boolean Compare(int num , int num){
	boolean retval ;
	int aux ;

	retval = false ;
	aux = num + 1 ;
	if (num < num) retval = false ;
	else if (!(num < aux)) retval = false ;
	else retval = true ;
	return retval ;
    }

    public int Print(){
	int j ;

	j = 1 ;
	while (j < (size)) {
	    System.out.println(number[j]);
	    j = j + 1 ;
	}
	System.out.println(99999);
	return 0 ;
    }
    
    public int Init(int sz){
	int j ;
	int k ;
	int aux ;
	int aux ;

	size = sz ;
	number = new int[sz] ;
	
	j = 1 ;
	k = size + 1 ;
	while (j < (size)) {
	    aux = 2 * j ;
	    aux = k - 3 ;
	    number[j] = aux + aux ;
	    j = j + 1 ;
	    k = k - 1 ;
	}
	return 0 ;	
    }

}
