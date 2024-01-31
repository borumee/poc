package com.example.demo.config;

import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.transaction.PlatformTransactionManager;

@Configuration
@MapperScan(value = "com.example.demo.testdb.repository")
public class MybatisH2Config {

	@Primary
	@Bean(name = "datasourceH2")
	@ConfigurationProperties(prefix = "spring.datasource.h2")
	public DataSource dataSource() {
		return DataSourceBuilder.create().build();
	}

	@Bean
	public PlatformTransactionManager transactionManager(@Qualifier("datasourceH2") DataSource datasource) {
		DataSourceTransactionManager transactionManager = new DataSourceTransactionManager(datasource);
		transactionManager.setGlobalRollbackOnParticipationFailure(false);
		return transactionManager;
	}

	@Primary
	@Bean(name = "factoryH2")
	public SqlSessionFactory sqlSessionFactory(@Qualifier("datasourceH2") DataSource datasource) throws Exception {
		SqlSessionFactoryBean sqlSessionFactory = new SqlSessionFactoryBean();
		sqlSessionFactory.setDataSource(datasource);
		// mapper 워치에 따라서 classpath*:static/mappers/**/*Mapper.xml 이부분을 조정
		sqlSessionFactory.setMapperLocations(
				new PathMatchingResourcePatternResolver().getResources("classpath*:mapper/h2/**/*.xml"));
		return sqlSessionFactory.getObject();
	}

	@Bean(name = "jdbcTemplateH2")
	public JdbcTemplate jdbcTemplate(@Qualifier("datasourceH2") DataSource dataSource) {
		return new JdbcTemplate(dataSource);
	}

	@Primary
	@Bean(name = "sqlSessionH2")
	public SqlSessionTemplate sqlSession(@Qualifier("factoryH2") SqlSessionFactory sqlSessionFactory) {
		return new SqlSessionTemplate(sqlSessionFactory);
	}

}