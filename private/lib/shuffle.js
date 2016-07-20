function shuffleRandom(n){
        var ar = new Array();
        var temp;
        var rnum;

        for(var i=1; i<=n; i++){
            ar.push(i);
        }

        for(var i=0; i< ar.length ; i++)
        {
            rnum = Math.floor(Math.random() *n);
            temp = ar[i];
            ar[i] = ar[rnum];
            ar[rnum] = temp;
        }

        return ar;
}