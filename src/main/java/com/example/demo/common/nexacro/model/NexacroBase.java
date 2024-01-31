package com.example.demo.common.nexacro.model;

import com.nexacro.uiadapter.spring.core.data.DataSetRowTypeAccessor;

public class NexacroBase implements DataSetRowTypeAccessor {

	private int rowType;

	@Override
	public int getRowType() {
		return rowType;
	}

	@Override
	public void setRowType(int rowType) {
		this.rowType = rowType;
	}

}
