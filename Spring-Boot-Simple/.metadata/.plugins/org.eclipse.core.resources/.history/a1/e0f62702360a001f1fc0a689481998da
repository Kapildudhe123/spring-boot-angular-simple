package com.rays.form;

import java.util.Date;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.rays.common.BaseForm;

public class UserRegistrationForm  extends BaseForm{
	
	@NotEmpty(message = "FIRSTNAME IS REQUIRED")
	private String firstName;

	@NotEmpty(message = "LASTNAME IS REQUIRED")
	private String lastName;

	@NotEmpty(message = "LOGINID IS REQUIRED")
	private String loginId;

	@NotEmpty(message = "PASSWORD IS REQUIRED")
	private String password;
	
	@NotNull(message = "DOB IS REQUIRED")
	private Date dob;

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getLoginId() {
		return loginId;
	}

	public void setLoginId(String loginId) {
		this.loginId = loginId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}


}
