package pavan.ohm.user.entity;

import java.io.Serializable;

@SuppressWarnings("serial")
public class AuthenticationResponse implements Serializable {

	private final String jwt;
	
	private User us;

	public AuthenticationResponse(String jwt, User us) {
		this.jwt = jwt;
		this.us = us;
	}

	public String getJwt() {
		return jwt+" "+us.getRole();
	}
}