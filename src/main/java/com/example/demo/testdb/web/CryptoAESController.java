package com.example.demo.testdb.web;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.crypto.Cipher;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.util.Base64Utils;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.demo.common.crypto.CryptoAES;
import com.nexacro.uiadapter.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class CryptoAESController {
	private List<Map<String, Object>> empList = new ArrayList<Map<String, Object>>();

	public CryptoAESController() {
		Map<String, Object> emp1 = new HashMap<String, Object>();
		emp1.put("OFFICE_NO", "1000");
		emp1.put("EMP_NO", "123");
		emp1.put("EMP_NM", "[경영분석팀] 이팀장");
		emp1.put("SSN", "810524-1234567");
		Map<String, Object> emp2 = new HashMap<String, Object>();
		emp2.put("OFFICE_NO", "1000");
		emp2.put("EMP_NO", "234");
		emp2.put("EMP_NM", "[경영분석팀] 박수석");
		emp2.put("SSN", "820524-1234567");
		Map<String, Object> emp3 = new HashMap<String, Object>();
		emp3.put("OFFICE_NO", "2000");
		emp3.put("EMP_NO", "345");
		emp3.put("EMP_NM", "[상품개발팀] 이수석");
		emp3.put("SSN", "830524-1234567");
		Map<String, Object> emp4 = new HashMap<String, Object>();
		emp4.put("OFFICE_NO", "2000");
		emp4.put("EMP_NO", "456");
		emp4.put("EMP_NM", "[상품개발팀] 조선임");
		emp4.put("SSN", "840524-1234567");

		this.empList.add(emp1);
		this.empList.add(emp2);
		this.empList.add(emp3);
		this.empList.add(emp4);
	}

	@RequestMapping("/crypto-aes")
	public NexacroResult getCryptoData(@ParamVariable(name = "input") String value) throws Exception {

		// input data..
		String decedValue = CryptoAES.decrypt(value).trim();
		System.out.println("input 넘어온값 : " + value);
		System.out.println("input 암호 해제된값 : " + decedValue);

		// output data...
		String OFFICE_NO = "";
		String EMP_NO = "";
		String EMP_NM = "";
		String SSN = "";
		for (int i = 0; i < this.empList.size(); i++) {
			String empNo = String.valueOf(this.empList.get(i).get("EMP_NO"));
			if (empNo.equals(decedValue)) {

				// 암호화
				OFFICE_NO = CryptoAES.encrypt(CryptoAES.padString((String) empList.get(i).get("OFFICE_NO")));
				//OFFICE_NO = CryptoAES.encrypt(CryptoAES.padString((String) "한국"));
				EMP_NO = CryptoAES.encrypt(CryptoAES.padString((String) empList.get(i).get("EMP_NO")));
				EMP_NM = CryptoAES.encrypt(CryptoAES.padString((String) empList.get(i).get("EMP_NM")));
				SSN = CryptoAES.encrypt(CryptoAES.padString((String) empList.get(i).get("SSN")));

				System.out.println("output OFFICE_NO : " + OFFICE_NO);
				System.out.println("output EMP_NO : " + EMP_NO);
				System.out.println("output EMP_NM : " + EMP_NM);
				System.out.println("output SSN : " + SSN);

				break;
			}
		}

		NexacroResult result = new NexacroResult();
		result.addVariable("ErrorCode", "0");
		result.addVariable("ErrorMsg", "success");
		result.addVariable("OFFICE_NO", OFFICE_NO);
		result.addVariable("EMP_NO", EMP_NO);
		result.addVariable("EMP_NM", EMP_NM);
		result.addVariable("SSN", SSN);
		return result;

	}
}
