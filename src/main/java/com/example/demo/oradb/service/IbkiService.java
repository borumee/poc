package com.example.demo.oradb.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.oradb.repository.IbkiMapper;

//@Service
public class IbkiService {

	@Autowired
	private IbkiMapper ibkiMapper;

	public List<Map<String, Object>> selectPensionsaveList(Map<String, Object> search) throws Exception {
		return ibkiMapper.selectPensionsaveList(search);
	}

	public Map<String, Object> getPensionCount(Map<String, Object> search) {
		return ibkiMapper.getPensionCount(search);
	}

	public List<Map<String, Object>> selectPensionsaveListAll() {
		return ibkiMapper.selectPensionsaveListAll();
	}
	
//
//	public void updateSample(List<Employee> empList) throws Exception {
//		int size = empList.size();
//
//		for (int i = 0; i < size; i++) {
//			Employee emp = empList.get(i);
//			log.info("emp[" + i + "] >>> " + emp.toString());
//
//			int dataRowType = Integer.parseInt(String.valueOf(emp.getRowType()));
//			if (dataRowType == DataSet.ROW_TYPE_INSERTED) {
//				employeeMapper.insertEmployee(emp);
//			} else if (dataRowType == DataSet.ROW_TYPE_UPDATED) {
//				employeeMapper.updateEmployee(emp);
//			} else if (dataRowType == DataSet.ROW_TYPE_DELETED) {
//				employeeMapper.deleteEmployee(emp);
//			}
//		}
//	}

}
