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
public class LargeDataController {

	private static final Logger logger = LoggerFactory.getLogger(LargeDataController.class);

	private static final String SP = File.separator;
	private static final String DATA_FILE_PATH = "static" + SP + "data";

	char a = (char) 0x1e;
	char b = (char) 0x1f;
	String RS = String.valueOf(a);
	String US = String.valueOf(b);

	@RequestMapping("/largedata.do")
	public void getLargeData(HttpServletRequest request, HttpServletResponse response) throws Exception {
		int nCnt = 0;
		int nFirstCnt = 0;
		int len = 0;

		// Spring boot 파일경로
		String filePath = DATA_FILE_PATH + SP + "sampledata.dat";
		ClassPathResource classPathResource = new ClassPathResource(filePath);

		if (classPathResource.exists() == false) {
			logger.error("Invalid filePath : {}", filePath);
			throw new IllegalArgumentException();
		} else {
			logger.info("file path exists = {}", classPathResource.exists());

			response.setContentType("UTF-8");
			response.setContentType("text/html; charset=UTF-8");

			HttpPlatformRequest hpr = new HttpPlatformRequest(request, PlatformType.CONTENT_TYPE_SSV);
			hpr.receiveData();
			PlatformData pd = hpr.getData();
			VariableList vl = pd.getVariableList();

			StringBuffer sbSsv = new StringBuffer();
			sbSsv.append("SSV:UTF-8" + RS);
			sbSsv.append("ErrorCode=0" + US + "ErrorMsg=SUCCESS" + RS);
			sbSsv.append("Dataset:").append("output").append(RS);
			sbSsv.append("_RowType_" + US);
			sbSsv.append("ID:STRING(256)" + US + "FIRST_NAME:STRING(256)" + US + "LAST_NAME:STRING(256)" + US
					+ "EMAIL:STRING(256)" + US + "GENDER:STRING(256)" + US + "CITY:STRING(256)" + US
					+ "COLOR:STRING(256)" + US + "COUNTRY:STRING(256)" + US + "PHONE:STRING(256)" + US
					+ "TIME_ZONE:STRING(256)" + US + "LANGUAGE:STRING(256)" + "SHIRT_SIZE:STRING(256)" + US
					+ "TITLE:STRING(256)" + US + "CAR_MAKE:STRING(256)" + US + "CAR_MODEL_YEAR:STRING(256)" + US
					+ "MOVIE_TITLE:STRING(256)" + US + "CARD_TYPE:STRING(256)" + US + "CURRENCY:STRING(256)" + US
					+ "MAC_ADDRESS:STRING(256)" + US + "IP_ADDRESS_V4:STRING(256)" + RS);

			InputStreamReader isr = new InputStreamReader(classPathResource.getInputStream(), "UTF-8");
			BufferedReader bs = new BufferedReader(isr);
			len = 0;
			while ((len = bs.read()) != -1) {
				sbSsv.append((char) len);
				if (len == 30) {
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
	}

	@RequestMapping("/excel-data.do")
	public void getLargeExcelData(HttpServletRequest request, HttpServletResponse response) throws Exception {

		HttpPlatformRequest hpr = new HttpPlatformRequest(request, PlatformType.CONTENT_TYPE_SSV);
		hpr.receiveData();
		PlatformData pd = hpr.getData();
		VariableList vl = pd.getVariableList();

		String rowcount = vl.getString("rowcount");

		if (rowcount == null || rowcount == "") {
			rowcount = "10";
		}

		int nCnt = 0;
		int nFirstCnt = 0;
		int len = 0;

		// Spring boot 파일경로
		String filePath = DATA_FILE_PATH + SP + "excel" + SP + "excel_" + rowcount + ".dat";
		ClassPathResource classPathResource = new ClassPathResource(filePath);

		if (classPathResource.exists() == false) {
			logger.error("Invalid filePath : {}", filePath);
			throw new IllegalArgumentException();
		} else {
			logger.info("file path exists = {}", classPathResource.exists());

			response.setContentType("UTF-8");
			response.setContentType("text/html; charset=UTF-8");

			StringBuffer sbSsv = new StringBuffer();
			sbSsv.append("SSV:UTF-8" + RS);
			sbSsv.append("ErrorCode=0" + US + "ErrorMsg=SUCCESS" + RS);
			sbSsv.append("Dataset:").append("output").append(RS);
			sbSsv.append("_RowType_" + US);

			sbSsv.append("CUST_NO:STRING(256)" + US);
			sbSsv.append("PHONE_OUT:STRING(256)" + US);
			sbSsv.append("TITLE:STRING(256)" + US);
			sbSsv.append("CONTENTS:STRING(256)" + US);
			sbSsv.append("PHONE_IN:STRING(256)" + US);
			sbSsv.append("G_CODE:STRING(256)" + US);
			sbSsv.append("MANAGER_NAME:STRING(256)" + US);
			sbSsv.append("G_DATE:STRING(256)" + US);
			sbSsv.append("G_TIME:STRING(256)" + US);
			sbSsv.append("G_CANNEL:STRING(256)" + RS);
			
			
//			sbSsv.append("CUST_NO:STRING(256)" + US + "PHONE_OUT:STRING(256)" + US + "TITLE:STRING(256)" + US
//					+ "CONTENTS:STRING(256)" + US + "PHONE_IN:STRING(256)" + US + "G_CODE:STRING(256)" + US
//					+ "G_DATE:STRING(256)" + US + "G_TIME:STRING(256)" + US + "G_CANNEL:STRING(256)" + US
//					+ "REG_DATE:STRING(256)" + US + "MANAGER_NAME:STRING(256)" + RS);

			InputStreamReader isr = new InputStreamReader(classPathResource.getInputStream(), "UTF-8");
			BufferedReader bs = new BufferedReader(isr);
			len = 0;
			while ((len = bs.read()) != -1) {
				sbSsv.append((char) len);
				if (len == 30) {
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
	}

	private void flush(HttpServletResponse httpResponse, StringBuffer sb) throws Exception {
		PrintWriter out = null;
		out = httpResponse.getWriter();
		out.print(sb);
	}
}
