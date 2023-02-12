package employeelist.com.employeelist.Employees;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ModelMapperConfig {
  
    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }
}