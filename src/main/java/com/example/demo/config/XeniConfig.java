package com.example.demo.config;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;

import org.springframework.boot.autoconfigure.web.servlet.WebMvcRegistrations;
import org.springframework.boot.web.servlet.ServletContextInitializer;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;
import org.springframework.web.multipart.support.MultipartFilter;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.nexacro.java.xeni.services.GridExportImportServlet;
import com.nexacro.uiadapter.spring.dao.DbVendorsProvider;
import com.nexacro.uiadapter.spring.dao.Dbms;
import com.nexacro.uiadapter.spring.dao.dbms.Oracle;

@Configuration
public class XeniConfig implements WebMvcConfigurer, WebMvcRegistrations {

	/**
	 * 엑셀처리 서블릿 등록
	 * 
	 * @return
	 */
	@Bean
	public ServletRegistrationBean<GridExportImportServlet> gridExportImportServletBean() {
		ServletRegistrationBean<GridExportImportServlet> bean = new ServletRegistrationBean<GridExportImportServlet>(
				new GridExportImportServlet(), "/XExportImport.do");
		bean.setLoadOnStartup(1);
		return bean;
	}

	@Bean
	public ServletContextInitializer initializer() {
		return new ServletContextInitializer() {

			/**
			 * 넥사크로플랫폼 엑셀 처리 모듈:nexacro-xeni.jar를 이용한 엑셀 처리 설정
			 */
			@Override
			public void onStartup(ServletContext servletContext) throws ServletException {
				servletContext.setInitParameter("export-path", "file:///C:/Temp/export/"); // 엑셀 export 임시폴더 생성 기준 디렉터리
				servletContext.setInitParameter("import-path", "file:///C:/Temp/import/"); // 엑셀 import 임시폴더 생성 기준 디렉터리
				servletContext.setInitParameter("monitor-enabled", "true"); // 임시파일 삭제를 위한 모니터링 여부
				servletContext.setInitParameter("monitor-cycle-time", "30"); // 임시파일 삭제를 위한 모니터링 주기( default:분)
				servletContext.setInitParameter("file-storage-time", "10"); // 임시파일 생성 디렉터리 모니터링 주기 (default:분)
			}
		};
	}

	/**
	 * CommonsMultipartResolver 사용 Multipart Resolver - Upload upto 10 Megabytes
	 * This is for XENI IMPORT
	 */
	@Bean
	public CommonsMultipartResolver multipartResolver() throws IOException {
		CommonsMultipartResolver resolver = new CommonsMultipartResolver();
		resolver.setDefaultEncoding("utf-8");
		resolver.setMaxUploadSize(100000000);
		resolver.setMaxInMemorySize(100000000);
		return resolver;
	}

	/**
	 * MultipartFilter 재정의
	 */
	@Bean
	@Order(0)
	public MultipartFilter multipartFilter() {
		MultipartFilter multipartFilter = new MultipartFilter();
		multipartFilter.setMultipartResolverBeanName("multipartResolver");
		return multipartFilter;
	}

	/**
	 * Dbms별 meta정보 조회를 위한 bean 등록 mybatis 사용 시 데이터가 없는 경우 null 반환 nexacro platform
	 * 컬럼정보 생성을 위해 metadata 정보 조회 후 컬럼 생성 처리
	 * 
	 * sql-mapper-config.xml 에 정의된 plugin에서 처리 <plugins> <plugin interceptor=
	 * "com.nexacro.uiadapter.spring.dao.mybatis.NexacroMybatisMetaDataProvider" />
	 * <plugin interceptor=
	 * "com.nexacro.uiadapter.spring.dao.mybatis.NexacroMybatisResultSetHandler" />
	 * </plugins>
	 * 
	 * @return
	 */
	@Bean
	public DbVendorsProvider dbmsProvider() {

		DbVendorsProvider dbmsProvider = new DbVendorsProvider();

		Map<String, Dbms> dbvendors = new HashMap<String, Dbms>();

		// 프로젝트에서 사용하는 데이터베이스만 사용.
		// dbvendors.put("HSQL Database Engine", new Hsql());
		dbvendors.put("Oracle", new Oracle());
		// dbvendors.put("MySQL", new Mysql());

		/**
		 * <bean id="hsqlDbms" class="com.nexacro.uiadapter17.spring.dao.dbms.Hsql" />
		 * <bean id="oracleDbms" class="com.nexacro.uiadapter17.spring.dao.dbms.Oracle"
		 * />
		 * <bean id="mssqlDbms" class="com.nexacro.uiadapter17.spring.dao.dbms.Mssql" />
		 * <bean id="mysqlDbms" class="com.nexacro.uiadapter17.spring.dao.dbms.Mysql" />
		 * <bean id="tiberoDbms" class="com.nexacro.uiadapter17.spring.dao.dbms.Tibero"
		 * />
		 * 
		 * <bean id="dbmsProvider" class=
		 * "com.nexacro.uiadapter17.spring.dao.DbVendorsProvider">
		 * <property name="dbvendors"> <map>
		 * <entry key="HSQL Database Engine" value-ref="hsqlDbms"/>
		 * <entry key="SQLServer" value-ref="mssqlDbms"/>
		 * <entry key="Oracle" value-ref="oracleDbms"/>
		 * <entry key="MySQL" value-ref="mysqlDbms"/> </map> </property> </bean>
		 */

		dbmsProvider.setDbvendors(dbvendors);

		return dbmsProvider;
	}
}
