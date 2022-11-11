package pavan.ohm.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import pavan.ohm.user.filters.JwtRequestFilter;


@SuppressWarnings("deprecation")
@EnableWebSecurity
class WebSecurityConfig extends WebSecurityConfigurerAdapter {
	@Autowired
	private UserDetailsService myUserDetailsService;
	@Autowired
	private JwtRequestFilter jwtRequestFilter;

	  @Bean
	  PasswordEncoder passwordEncoder() {
	      return new BCryptPasswordEncoder();
	   }
	   @Override
	   protected void configure(AuthenticationManagerBuilder auth) throws Exception {
	      auth.userDetailsService(myUserDetailsService).passwordEncoder(passwordEncoder());
	   }

	@Override
	@Bean
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}

	@Override
	protected void configure(HttpSecurity httpSecurity) throws Exception {

		
		
		httpSecurity.csrf().disable()
				.authorizeRequests()
				.antMatchers("/user/authenticate").permitAll()
				.antMatchers("/user/sign/add").permitAll()
//				.antMatchers("/api/users/login").permitAll()
     			.antMatchers("/user/inventory/**").hasAuthority("owner")
     			.antMatchers("/user/inventory/**").hasAuthority("manager")
     			.antMatchers("/user/guest/**").hasAuthority("owner")
     			.antMatchers("/user/guest/**").hasAuthority("manager")
     			.antMatchers("/user/employee/**").hasAuthority("owner")
     			.antMatchers("/user/guest/**").hasAuthority("receptionist")
//				.antMatchers("/api/users/**").permitAll()
				.anyRequest().authenticated().and()
				.exceptionHandling().and().sessionManagement()
				.sessionCreationPolicy(SessionCreationPolicy.STATELESS);
		httpSecurity.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);

	}
	

	

}
