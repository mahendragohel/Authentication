package com.auth.model;

import java.io.Serializable;

import javax.persistence.*;
import javax.validation.constraints.*;

@Entity
@Table(name = "employee_bank_details")
public class EmpBankDetails implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotBlank
	@Size(max = 160)
	private String bankName;
	
	@NotBlank
	@Size(max = 11)
	@Column(name = "ifsc_code")
	private String ifscCode;
	
	@Column(name = "account_no")
	private Long accountNo;
	
	@Enumerated(EnumType.STRING)
	private BankAccountType type;
	
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id")
	private User user;

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public EmpBankDetails() {
		super();
	}

	public EmpBankDetails(long id, @NotBlank @Size(max = 160) String bankName,
			@NotBlank @Size(max = 11) String ifscCode, Long accountNo, BankAccountType type) {
		super();
		this.id = id;
		this.bankName = bankName;
		this.ifscCode = ifscCode;
		this.accountNo = accountNo;
		this.type = type;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
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

	public Long getAccountNo() {
		return accountNo;
	}

	public void setAccountNo(Long accountNo) {
		this.accountNo = accountNo;
	}

	public BankAccountType getType() {
		return type;
	}

	public void setType(BankAccountType type) {
		this.type = type;
	}
	
}
