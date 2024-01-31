package com.example.demo.testdb.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.demo.testdb.model.Employee;
import com.example.demo.testdb.service.EmployeeService;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class EmployeeController {

	@Autowired
	private EmployeeService service;

	@RequestMapping(value = "/selectSampleList.do")
	public NexacroResult selectSampleList() throws Exception {

		List<Employee> empList = service.selectEmployeeList();

		for (int i = 0; i < empList.size(); i++) {

			System.out.println(empList.get(i).toString());

		}
		NexacroResult result = new NexacroResult();
		result.addDataSet("output", empList);
		return result;
	}

	@RequestMapping(value = "/saveSampleList.do")
	public NexacroResult updateSampleList(@ParamDataSet(name = "input") List<Employee> list) throws Exception {
		service.updateSample(list);
		return new NexacroResult();
	}

}
