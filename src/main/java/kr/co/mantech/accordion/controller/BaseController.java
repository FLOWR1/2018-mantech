package kr.co.mantech.accordion.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;

import com.fasterxml.jackson.databind.ObjectMapper;

public class BaseController {
	
	
	/*protected String getCurrentUser()
	{
		User userDetails = (User)SecurityContextHolder.getContext().getAuthentication().getDetails();
		String result = userDetails.getUsername();
		
		return result;
	}*/
	
	/*protected String getCurrentProject()
	{
		User userDetails = (User)SecurityContextHolder.getContext().getAuthentication().getDetails();
		String result = userDetails.getCurrentProject();
		
		return result;
	}
	
	protected void setCurrentProject(String project)
	{
		User userDetails = (User)SecurityContextHolder.getContext().getAuthentication().getDetails();
		userDetails.setCurrentProject(project);

	}

	protected boolean hasRole(String roleName)
	{
		User userDetails = (User)SecurityContextHolder.getContext().getAuthentication().getDetails();
		
		for(GrantedAuthority role : userDetails.getAuthorities())
		{
			if (role.getAuthority().equals(roleName))
			{
				return true;
			}
		}
		
		return false;
	}

	protected ArrayList<HashMap<String, Object>> getParamArrayJson(String json)
	{
		ArrayList<HashMap<String, Object>> result = new ArrayList<HashMap<String, Object>>();
		
		ObjectMapper mapper = new ObjectMapper();
		// convert JSON string to Map
		try {
			result = mapper.readValue(json, ArrayList.class);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return result;
	}
*/
}
