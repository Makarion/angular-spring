package com.makarewk.angulartutorial.security.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class JwtUserDetailsService implements UserDetailsService {

	@Value("$username")
	private String username;

	//encrypted "root"
	@Value("${encrypted.password}")
	private String encryptedPassword;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		if ("root".equals(username)) {
			return new User(username, encryptedPassword,
					new ArrayList<>());
		} else {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
	}

}