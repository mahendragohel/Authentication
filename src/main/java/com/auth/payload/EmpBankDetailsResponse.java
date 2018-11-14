package com.auth.payload;

import com.auth.model.BankAccountType;

public class EmpBankDetailsResponse {

	private Long id;
	private Long accountNo;
	private String bankName;
	private String ifscCode;
	private BankAccountType type;
	
	public EmpBankDetailsResponse(Long id, Long accountNo, String bankName, String ifscCode, BankAccountType type) {
		super();
		this.id = id;
		this.accountNo = accountNo;
		this.bankName = bankName;
		this.ifscCode = ifscCode;
		this.type = type;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getAccountNo() {
		return accountNo;
	}
	public void setAccountNo(Long accountNo) {
		this.accountNo = accountNo;
	}
	public String getBankName() {
		return bankName;
	}
	public void setBankName(String bankName) {
		this.bankName = bankName;
	}
	public String getIfscCode() {
		return ifscCode;
	}
	public void setIfscCode(String ifscCode) {
		this.ifscCode = ifscCode;
	}
	public BankAccountType getType() {
		return type;
	}
	public void setType(BankAccountType type) {
		this.type = type;
	}
	
	
}
