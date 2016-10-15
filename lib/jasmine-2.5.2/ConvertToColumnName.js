//1～2147483647までの数字をアルファベットに変換する。
function ConvertToColumnName(number) {

    //配列
    var alphabet =  {'0':'Z',  '1':'A',  '2':'B',  '3':'C',  '4':'D',  '5':'E',  '6':'F',  '7':'G',
		     '8':'H',  '9':'I',  '10':'J', '11':'K', '12':'L', '13':'M', '14':'N', '15':'O',
	             '16':'P', '17':'Q', '18':'R', '19':'S', '20':'T', '21':'U', '22':'V', '23':'W',
	             '24':'X', '25':'Y'};

    //nullや範囲外の数値が入ったら処理を終える
    if ((number == null) || (number <= 0) || (number > 2147483647)){
        return;
    }else{
    	//変換結果
    	var result = "";
    	//変換させる数値
    	var convertNumber = number;
    	
        while (convertNumber > 0) {
        
        	//変換対象の数値から基数で割った余りを求める
        	var mod = convertNumber % 26;
        	
        	//余りが配列のキーと同じかどうか確かめる
        	for(var key in alphabet){
  			if (mod == key) {
  				result = alphabet[key] + result;
  				break;
  			}
		}
			
		//数字が26のときはループを終了させる。
		if (number == 26){
			break;
		}
			
		convertNumber = (convertNumber - mod) / 26;
		if(mod == 0){
			//アルファベットの繰上りを防ぐ。
			convertNumber--;
		}
        }
        return result;
    }
}
