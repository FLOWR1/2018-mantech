package kr.co.mantech.accordion.security;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import kr.co.mantech.accordion.model.Project;

public class User implements UserDetails {
	private static final long serialVersionUID = 52114489102073710L;
	
	private String username;
    private String password;
    private String locale;
    private String currentProject;
    private String group;
    private List<String> ableProjects;
    
    private ArrayList<Project> myProjects;
    
    
    private List<GrantedAuthority> authorities;


	public ArrayList<Project> getMyProjects() {
		return myProjects;
	}

	public void setMyProjects(ArrayList<Project> myProjects) {
		this.myProjects = myProjects;
	}

	public String getLocale()
    {
    	return locale;
    }
    
    public void setLocale(String locale)
    {
    	this.locale = locale;
    }
    
    public User (String userName, String password)
    {
    	this.username = userName;
    	this.password = password;
    }
    
    public Boolean isAdmin()
    {
    		
   		for(GrantedAuthority role : getAuthorities())
   		{
   			if (role.getAuthority().equals("ROLE_ADMIN"))
   			{
   				return true;
   			}
   		}
    		
   		return false;
    }
    
	
	@Override public Collection<? extends GrantedAuthority> getAuthorities() 
	{ 
		return this.authorities; 
	} 
	
	public void setAuthorities(List<GrantedAuthority> authorities) 
	{ 
		this.authorities = authorities; 
	}
	
	public void setCurrentProject(String currentProject) 
	{ 
		this.currentProject = currentProject; 
	}
	
	public String getCurrentProject()
	{
		return currentProject;
	}

	public String getGroup() 
	{ 
		return this.group; 
	}
	
	public void setGroup(String group) 
	{ 
		this.group = group; 
	}

	public void setAbleProjects(List<String> ableProjects) 
	{ 
		this.ableProjects = ableProjects; 
	}
	
	public List<String> getAbleProjects()
	{
		return ableProjects;
	}

	@Override
	public String getPassword() {
		return password;
	}

	@Override
	public String getUsername() {
		return username;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

}