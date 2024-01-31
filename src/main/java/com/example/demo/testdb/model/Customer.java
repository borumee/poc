package com.example.demo.testdb.model;

public class Customer {
	private String name_ko;
	private String name_en;
	private String ssn;
	private String locale;
	private String job;
	private String age;
	private String drive;
	private String birthday;

	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Customer(int id, String name_ko, String name_en, String ssn, String locale, String job, String age,
			String drive, String birthday) {
		super();
		this.name_ko = name_ko;
		this.name_en = name_en;
		this.ssn = ssn;
		this.locale = locale;
		this.job = job;
		this.age = age;
		this.drive = drive;
		this.birthday = birthday;
	}

	public String getName_ko() {
		return name_ko;
	}

	public void setName_ko(String name_ko) {
		this.name_ko = name_ko;
	}

	public String getName_en() {
		return name_en;
	}

	public void setName_en(String name_en) {
		this.name_en = name_en;
	}

	public String getSsn() {
		return ssn;
	}

	public void setSsn(String ssn) {
		this.ssn = ssn;
	}

	public String getLocale() {
		return locale;
	}

	public void setLocale(String locale) {
		this.locale = locale;
	}

	public String getJob() {
		return job;
	}

	public void setJob(String job) {
		this.job = job;
	}

	public String getAge() {
		return age;
	}

	public void setAge(String age) {
		this.age = age;
	}

	public String getDrive() {
		return drive;
	}

	public void setDrive(String drive) {
		this.drive = drive;
	}

	public String getBirthday() {
		return birthday;
	}

	public void setBirthday(String birthday) {
		this.birthday = birthday;
	}

	@Override
	public String toString() {
		return "Customer [name_ko=" + name_ko + ", name_en=" + name_en + ", ssn=" + ssn + ", locale=" + locale
				+ ", job=" + job + ", age=" + age + ", drive=" + drive + ", birthday=" + birthday + "]";
	}

}
