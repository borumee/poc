package com.example.demo.config;

import java.sql.Connection;

import javax.annotation.Resource;
import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

@Component
public class H2Runner implements ApplicationRunner {

	private Logger log = LoggerFactory.getLogger(H2Runner.class);

	@Autowired
	@Resource(name = "datasourceH2")
	DataSource datasourceH2;

	@Autowired
	@Resource(name = "jdbcTemplateH2")
	JdbcTemplate jdbcTemplateH2;

	@Override
	public void run(ApplicationArguments args) throws Exception {

		// data source
		Connection connection = datasourceH2.getConnection();
		log.info("H2Runner TEST >> DBCP: " + datasourceH2.getClass());
		log.info("H2Runner TEST >> Url: " + connection.getMetaData().getURL());
		log.info("H2Runner TEST >> UserName: " + connection.getMetaData().getUserName());

		// jdbcTemplate
		jdbcTemplateH2.execute(
				"INSERT INTO EMPLOYEE(firstName, lastName, email, phoneNumber, hireDate, salary, commissionPct) VALUES ('hong2', 'gildong', 'hong2@tobesoft.com', '010-1234-1234', '2023-01-31', '1000000', '100000')");

	}
}
