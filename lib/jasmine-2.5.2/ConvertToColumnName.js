//1�`2147483647�܂ł̐������A���t�@�x�b�g�ɕϊ�����B
function ConvertToColumnName(number) {

    //�z��
    var alphabet =  {'0':'Z',  '1':'A',  '2':'B',  '3':'C',  '4':'D',  '5':'E',  '6':'F',  '7':'G',
					 '8':'H',  '9':'I',  '10':'J', '11':'K', '12':'L', '13':'M', '14':'N', '15':'O',
				     '16':'P', '17':'Q', '18':'R', '19':'S', '20':'T', '21':'U', '22':'V', '23':'W',
				     '24':'X', '25':'Y'};
    
    if ((number == null) || (number <= 0) || (number > 2147483647)){
        return;
    }else{
    	//�ϊ�����
    	var result = "";
    	//�ϊ������鐔�l
    	var convertNumber = number;
    	
        while (convertNumber > 0) {
        
        	//�ϊ��Ώۂ̐��l�����Ŋ������]������߂�
        	var mod = convertNumber % 26;
        	
        	//�]�肪�z��̃L�[�Ɠ������ǂ����m���߂�
        	for(var key in alphabet){
  				if (mod == key) {
  					result = alphabet[key] + result;
  					break;
  				}
			}
			
			//������26�̂Ƃ��̓��[�v���I��������B
			if (number == 26){
				break;
			}
			
			convertNumber = (convertNumber - mod) / 26;
			if(mod == 0){
				//�A���t�@�x�b�g�̌J����h���B
				convertNumber--;
			}
        }
        return result;
    }
}