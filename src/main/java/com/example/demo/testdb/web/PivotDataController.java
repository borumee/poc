package com.example.demo.testdb.web;

import java.io.BufferedReader;
import java.io.File;
import java.io.InputStreamReader;
import java.io.PrintWriter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.java.xapi.data.PlatformData;
import com.nexacro.java.xapi.data.VariableList;
import com.nexacro.java.xapi.tx.HttpPlatformRequest;
import com.nexacro.java.xapi.tx.PlatformType;

@Controller
public class PivotDataController 
{
	private static final Logger logger = LoggerFactory.getLogger(LargeDataController.class);

	private static final String SP = File.separator;
	private static final String DATA_FILE_PATH = "static" + SP;
	
	char a = (char) 0x1e;
	char b = (char) 0x1f;
	String RS = String.valueOf(a);
	String US = String.valueOf(b);

	@RequestMapping("/pivotdata.do")
	public void getPivotData(HttpServletRequest request, HttpServletResponse response) throws Exception {
		int nCnt = 0;
		int nFirstCnt = 0;
		int len = 0;	
		
		try {
			response.setContentType("UTF-8");
			response.setContentType("text/html; charset=UTF-8");
			
			HttpPlatformRequest hpr = new HttpPlatformRequest(request, PlatformType.CONTENT_TYPE_SSV);
			hpr.receiveData();
			PlatformData pd = hpr.getData();
			VariableList vl = pd.getVariableList();
			
			String rowcount = vl.getString("rowcount");
			
			if (rowcount == null || rowcount == "") {
				rowcount = "30000";
			}
			
			StringBuffer sbSsv = new StringBuffer();sbSsv = new StringBuffer();
			sbSsv.append("SSV:UTF-8"+RS);
			sbSsv.append("ErrorCode=0"+ US + "ErrorMsg=SUCCESS" + RS);
			sbSsv.append("Dataset:").append("output").append(RS);
			sbSsv.append("_RowType_" + US);
			sbSsv.append("col1:STRING(50)" + US +
						 "col2:STRING(50)" + US +
						 "col3:STRING(50)" + US +
						 "col4:STRING(50)" + US +
						 "col5:STRING(50)" + US +
						 "col6:STRING(50)" + US +
						 "col7:STRING(50)" + US +
						 "col8:STRING(50)" + US +
						 "col9:STRING(50)" + US +
						 "col10:STRING(50)" + US +
						 "col11:STRING(50)" + US +
						 "col12:INT(8)" + US +
						 "col13:INT(8)" + US +
						 "col14:INT(8)" + US +
						 "col15:INT(8)" + US +
						 "col16:INT(8)" + RS);
		   	
			// Spring boot 파일경로
			String filePath = DATA_FILE_PATH + SP + "data/Pivot" + rowcount + ".dat";
			ClassPathResource classPathResource = new ClassPathResource(filePath);			

			InputStreamReader isr = new InputStreamReader(classPathResource.getInputStream(), "UTF-8");
			BufferedReader bs = new BufferedReader(isr);
			
		    len = 0;
		    
		    while ((len = bs.read()) != -1) 
		    {
		    	sbSsv.append((char)len);
		    	
		    	if (len == 30) 
		    	{
		    		if (nCnt == nFirstCnt) {
		    			flush(response, sbSsv);
		        		sbSsv = new StringBuffer();	
		    			nCnt = 0;
		    		} else {
		    			nCnt++;	
		    		}
		    	}
		    }
		    
		    flush(response, sbSsv);
		} 
		catch(Exception e) {
		    e.printStackTrace();
		}
	}
	
	private void flush(HttpServletResponse httpResponse, StringBuffer sb) throws Exception {
		PrintWriter out = null;
		out = httpResponse.getWriter();
		out.print(sb);
	}
}
