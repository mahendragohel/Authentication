package com.auth.model;


import javax.validation.constraints.NotBlank;
import javax.persistence.*;

@Entity
@Table(name = "employee_skills")
public class EmployeeSkills {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "skill_id")
	private long skillId;
	
	@NotBlank
	@Column(name = "skill_names")
	private String skillNames;
	
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name= "employee_id",referencedColumnName="id")
	private User user;

	public EmployeeSkills() {
		super();
	}

	public EmployeeSkills(long skillId, @NotBlank String skillNames) {
		super();
		this.skillId = skillId;
		this.skillNames = skillNames;
	}

	public long getSkillId() {
		return skillId;
	}

	public String getSkillNames() {
		return skillNames;
	}

	public User getUser() {
		return user;
	}

	public void setSkillId(long skillId) {
		this.skillId = skillId;
	}

	public void setSkillNames(String skillNames) {
		this.skillNames = skillNames;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
	
	
}
