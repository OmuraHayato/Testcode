//アルファベットを1～2147483647までの数字に変換する。
function ConvertToColumnNumber(alphabet) {

    //配列
    var numbers =  {'A':'1',  'B':'2',  'C':'3',  'D':'4',  'E':'5',  'F':'6',  'G':'7',
					'H':'8',  'I':'9',  'J':'10', 'K':'11', 'L':'12', 'M':'13', 'N':'14', 'O':'15',
				    'P':'16', 'Q':'17', 'R':'18', 'S':'19', 'T':'20', 'U':'21', 'V':'22', 'W':'23',
				    'X':'24', 'Y':'25', 'Z':'26'};
    
    //引数が渡されなかった場合は処理を終える
    if (alphabet == null) {
        return;
    }else{
    	//変換結果
    	var result = 0;
    	//変換させる文字列
    	var convertAlphabet = alphabet;
    	//文字列を格納する配列
    	var strings = [];
    	//変換させる文字列を格納
    	for (var i = 0; i < convertAlphabet.length; i++) {
        	strings.unshift(convertAlphabet.charAt(i));
        }
        
        for(var j = 0; j < strings.length; j++){
        	for(var key in numbers){
        		//文字列が配列のキーとあっているか確認
  				if (strings[j] == key) {
  					result = numbers[key] * Math.pow(26, j) + result;
  					break;
  				}
			}
        }
        
        //数字が2147483647より多いなら結果を返さず終了
        if (result > 2147483647) {
        	return;
        }else{
        	return result;
        }
    }
}