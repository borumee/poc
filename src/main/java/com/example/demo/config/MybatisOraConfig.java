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
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;

//@Configuration
@MapperScan(value = "com.example.demo.oradb.repository")
public class MybatisOraConfig {

	@Bean(name = "datasourceOra")
	@ConfigurationProperties(prefix = "spring.datasource.hikari")
	public DataSource dataSource() {
		return DataSourceBuilder.create().build();
	}

	@Bean(name = "factoryOra")
	public SqlSessionFactory sqlSessionFactory(@Qualifier("datasourceOra") DataSource datasource) throws Exception {
		SqlSessionFactoryBean sqlSessionFactory = new SqlSessionFactoryBean();
		sqlSessionFactory.setDataSource(datasource);
		// mapper 워치에 따라서 classpath*:static/mappers/**/*Mapper.xml 이부분을 조정
		sqlSessionFactory.setMapperLocations(
				new PathMatchingResourcePatternResolver().getResources("classpath*:mapper/oracle/**/*.xml"));
		return sqlSessionFactory.getObject();
	}

	@Bean(name = "sqlSessionOra")
	public SqlSessionTemplate sqlSession(@Qualifier("factoryOra") SqlSessionFactory sqlSessionFactory) {
		return new SqlSessionTemplate(sqlSessionFactory);
	}

}