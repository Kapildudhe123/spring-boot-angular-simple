package com.rays.form;

import java.util.Date;

import javax.persistence.Column;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.rays.common.BaseDTO;
import com.rays.common.BaseForm;
import com.rays.dto.UserDTO;

public class UserForm extends BaseForm {

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

	@NotNull(message = "ROLENAME IS REQUIRED")

	@Min(value = 1, message = "ROLENAME IS REQUIRED")

	private long roleId;

	public long getRoleId() {
		return roleId;
	}

	public void setRoleId(long roleId) {
		this.roleId = roleId;
	}

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

	@Override
	public BaseDTO getDto() {

		UserDTO dto = initdto(new UserDTO());
		dto.setId(id);
		dto.setFirstName(firstName);
		dto.setLastName(lastName);
		dto.setLoginId(loginId);
		dto.setPassword(password);
		dto.setDob(dob);
		dto.setRoleId(roleId);
		return dto;
	}

}
