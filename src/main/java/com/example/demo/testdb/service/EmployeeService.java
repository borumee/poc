package com.example.demo.testdb.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.config.H2Runner;
import com.example.demo.testdb.model.Employee;
import com.example.demo.testdb.repository.EmployeeMapper;
import com.nexacro.java.xapi.data.DataSet;

@Service
public class EmployeeService {

	private Logger log = LoggerFactory.getLogger(H2Runner.class);

	@Autowired
	private EmployeeMapper employeeMapper;

	public List<Employee> selectEmployeeList() throws Exception {
		return employeeMapper.selectEmployeeList();
	}

	public void updateSample(List<Employee> empList) throws Exception {
		int size = empList.size();

		for (int i = 0; i < size; i++) {
			Employee emp = empList.get(i);
			log.info("emp[" + i + "] >>> " + emp.toString());

			int dataRowType = Integer.parseInt(String.valueOf(emp.getRowType()));
			if (dataRowType == DataSet.ROW_TYPE_INSERTED) {
				employeeMapper.insertEmployee(emp);
			} else if (dataRowType == DataSet.ROW_TYPE_UPDATED) {
				employeeMapper.updateEmployee(emp);
			} else if (dataRowType == DataSet.ROW_TYPE_DELETED) {
				employeeMapper.deleteEmployee(emp);
			}
		}
	}
}
