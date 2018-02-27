module.exports = function check(str, bracketsConfig) {
var brackets=[];
 for (let i=0;i<bracketsConfig.length;i++)
	{
		brackets[i]=bracketsConfig[i].join("");
	}
var len=str.length;
  for (let i=0;i<len;i++)
  {
	 for (let j=0;j<brackets.length;j++)
		{
		 if (str.indexOf(brackets[j])>=0) 
			 {
				 str=str.slice(0,str.indexOf(brackets[j]))+str.slice(str.indexOf(brackets[j])+2); 
			 }
		 
	  }
	 
  } 
	if (str.length>=1)
		{
			return false;
		} 

	return true;
}
