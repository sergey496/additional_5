module.exports = function check(str, bracketsConfig) {
   if ((str.length%2)==1){return false;
	
	}
for (var i=0; i<str.length;i++)
	{
		for (var j=0; j<bracketsConfig.length;j++)
		{
			if(str[i]==bracketsConfig[j][0])
						{	
							str=str.replace(bracketsConfig[j][0], "_");
							var n=str.indexOf(bracketsConfig[j][1]);

							if((n==-1)||(n<i)  )
								{
									return false;
								}

							str=str.replace(bracketsConfig[j][1], "_");						
						}
			}

	}
	return true;
}
