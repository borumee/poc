package com.example.demo.oradb.repository;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.example.demo.testdb.model.Employee;

//@Repository
public class IbkiMapper {

//	List<Employee> selectEmployeeList();
//
//	void insertEmployee(Employee employee);
//
//	void updateEmployee(Employee employee);
//
//	void deleteEmployee(Employee employee);

	@Autowired
	@Qualifier("sqlSessionOra")
	private SqlSessionTemplate sqlSessionTemplate;

	public List<Map<String, Object>> selectPensionsaveList(Map<String, Object> search) {
		return sqlSessionTemplate.selectList("ibkiMapper.selectPensionsaveList", search);
	}

	public Map<String, Object> getPensionCount(Map<String, Object> search) {
		return sqlSessionTemplate.selectOne("ibkiMapper.getPensionCount", search);
	}

	public List<Map<String, Object>> selectPensionsaveListAll() {
		return sqlSessionTemplate.selectList("ibkiMapper.selectPensionsaveListAll");
	};

}
