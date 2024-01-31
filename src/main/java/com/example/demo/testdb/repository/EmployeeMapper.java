package com.example.demo.testdb.repository;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.example.demo.testdb.model.Employee;

@Repository
public class EmployeeMapper {

//	List<Employee> selectEmployeeList();
//
//	void insertEmployee(Employee employee);
//
//	void updateEmployee(Employee employee);
//
//	void deleteEmployee(Employee employee);

	@Autowired
	@Qualifier("sqlSessionH2")
	private SqlSessionTemplate sqlSessionTemplate;

	public List<Employee> selectEmployeeList() {
		return sqlSessionTemplate.selectList("employeeMapper.selectEmployeeList");
	};

	public void insertEmployee(Employee employee) {
		sqlSessionTemplate.insert("employeeMapper.insertEmployee", employee);

	};

	public void updateEmployee(Employee employee) {
		sqlSessionTemplate.update("employeeMapper.updateEmployee", employee);

	};

	public void deleteEmployee(Employee employee) {
		sqlSessionTemplate.delete("employeeMapper.deleteEmployee", employee);
	};
}
