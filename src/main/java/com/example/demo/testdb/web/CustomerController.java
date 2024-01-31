package com.example.demo.testdb.web;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.common.crypto.CryptoAES;
import com.example.demo.testdb.model.Customer;

/**
 * Handles requests for the Employee service.
 */
@RestController
public class CustomerController {
	private static final Logger logger = LoggerFactory.getLogger(EmployeeController.class);

	Map<Integer, Customer> empData = new HashMap<Integer, Customer>();

	/*
	 * 초기 데이터 생성
	 */
	public CustomerController() {
		super();

		logger.info("Start getDummyEmployee");

		String[] name_ko = { "홍길동", "강감찬", "김대숙" };
		String[] name_en = { "HongGilDong", "KangKamChan", "Skylar Tanner" };
		String[] ssn = { "1234561234567", "2345672345678", "3456783456789" };
		String[] locale = { "한국", "한국", "미국" };
		String[] job = { "주부", "직장인", "주부" };
		String[] age = { "30", "35", "41" };
		String[] drive = { "운전", "미운전", "운전" };
		String[] birthday = { "19800101", "19750222", "19690428" };

		Customer emp = null;
		for (int i = 0; i < name_ko.length; i++) {
			emp = new Customer();

			emp.setName_ko(name_ko[i]);
			emp.setName_en(name_en[i]);
			emp.setSsn(ssn[i]);
			emp.setLocale(locale[i]);
			emp.setJob(job[i]);
			emp.setAge(age[i]);
			emp.setDrive(drive[i]);
			emp.setBirthday(birthday[i]);

			empData.put(getMaxId() + 1, emp);
		}

		emp = null;
	}

	/*
	 * 단건 데이터 조회
	 */
	@RequestMapping(value = "/customer/{custno}", method = RequestMethod.GET)
	public ResponseEntity<Customer> getCustomer(@PathVariable("custno") int custno) {
		logger.info("Start customer Detail.");
		return ResponseEntity.status(HttpStatus.OK).body(empData.get(custno));
	}

	/*
	 * 단건 데이터 조회
	 */
//	@RequestMapping(value = "/customer-crypto/{custno}", method = RequestMethod.GET)
//	public ResponseEntity<Object> getCustomerAES(@PathVariable("custno") int custno) throws Exception {
//		logger.info("Start customer Detail. crypto");
//
//		Customer cust = new Customer();
//		cust.setAge(CryptoAES.encrypt(empData.get(custno).getAge()));
//		cust.setBirthday(CryptoAES.encrypt(empData.get(custno).getBirthday()));
//		cust.setDrive(CryptoAES.encrypt(empData.get(custno).getDrive()));
//		cust.setJob(CryptoAES.encrypt(empData.get(custno).getJob()));
//		cust.setLocale(CryptoAES.encrypt(empData.get(custno).getLocale()));
//		cust.setName_en(CryptoAES.encrypt(empData.get(custno).getName_en()));
//		cust.setName_ko(CryptoAES.encrypt(empData.get(custno).getName_ko()));
//		cust.setSsn(CryptoAES.encrypt(empData.get(custno).getSsn()));
//
//		return ResponseEntity.status(HttpStatus.OK).body(cust);
//	}

	/*
	 * Max Id 반환
	 */
	private int getMaxId() {
		int max = 0;

		Iterator<Integer> ids = empData.keySet().iterator();

		while (ids.hasNext()) {
			Integer id = ids.next();

			max = max < id ? id : max;
		}

		return max;
	}
}