package kr.co.mantech.accordion.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ImportResource;

@Configuration

@ImportResource("classpath:/app-conf.xml")
public class AppConfig {
	@Bean(name="version")
	public AppVersion version(){
		AppVersion ent= new AppVersion();
		ent.setName("Entitlement");
		ent.setTime(20);
		return ent;
	}
}
