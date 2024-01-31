package com.example.demo.oradb.web;

import java.util.List;
import java.util.Map;

import org.apache.commons.collections4.map.HashedMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.oradb.service.IbkiService;
import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.uiadapter.spring.core.NexacroException;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

//@Controller
public class IbkiController {

	@Autowired
	private IbkiService service;

	@RequestMapping(value = "/selectPensionsaveList.do")
	public ResponseEntity<?> selectPensionsaveList(//
			@RequestParam(value = "BZ_NAM") String BZ_NAM, // 업무명
			@RequestParam(value = "FDCD") String FDCD, // 펀드코드
			@RequestParam(value = "TRSF_XC_SCTN") String TRSF_XC_SCTN, // 이체/정산
			@RequestParam(value = "pageIndex") int pageIndex, // 이체/정산
			@RequestParam(value = "pageSize") int pageSize // 이체/정산
	) throws Exception {
		System.out.println("selectPensionsaveList.do");

		// 1. 페이징 계산
		int num_start_row = ((pageIndex - 1) * pageSize) + 1; // 출력 페이지 시작 행 (ex. 101)
		int num_end_row = (pageIndex * pageSize); // 출력 페이지 마지막 행 (ex. 200)

		// 2. 조회조건 세팅
		Map<String, Object> search = new HashedMap<String, Object>();
		search.put("BZ_NAM", BZ_NAM);
		search.put("FDCD", FDCD);
		search.put("TRSF_XC_SCTN", TRSF_XC_SCTN);
		search.put("num_start_row", num_start_row);
		search.put("num_end_row", num_end_row);


		List<Map<String, Object>> pensionList = service.selectPensionsaveList(search);
		Map<String, Object> paging = service.getPensionCount(search);
		paging.put("pageIndex", pageIndex);
		paging.put("pageSize", pageSize);

		Map<String, Object> resultMap = new HashedMap<String, Object>();
		resultMap.put("result", pensionList);
		resultMap.put("paging", paging);
		
		return ResponseEntity.ok(resultMap);
	}

	@RequestMapping(value = "/selectPensionsaveListAll.do")
	public ResponseEntity<?> selectPensionsaveListAll() throws Exception {
		System.out.println("selectPensionsaveListAll.do");

		List<Map<String, Object>> pensionList = service.selectPensionsaveListAll();
		return ResponseEntity.ok(pensionList);
	}
	
	@RequestMapping(value = "/selectPensionsaveListAllNexacro.do")
	public NexacroResult selectPensionsaveListAllNexacro() throws NexacroException {
		System.out.println("selectPensionsaveListAllNexacro.do");
		NexacroResult result = new NexacroResult();

		List<Map<String, Object>> pensionList = service.selectPensionsaveListAll();
		result.addDataSet("output", pensionList);
		
		return result;
	}
	
}
