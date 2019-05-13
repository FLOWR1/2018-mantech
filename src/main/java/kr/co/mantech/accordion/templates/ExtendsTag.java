package kr.co.mantech.accordion.templates;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.jsp.JspException;
import javax.servlet.jsp.PageContext;
import javax.servlet.jsp.tagext.SimpleTagSupport;
import java.io.IOException;
import java.io.StringWriter;

public class ExtendsTag extends SimpleTagSupport {
    public static final String PREFIX_ATTR_NAME = "jsp-inheritance-prefix";
    public static final String SUFFIX_ATTR_NAME = "jsp-inheritance-suffix";

    private String name;

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public void doTag() throws JspException, IOException {
        StringWriter ignoredWriter = new StringWriter();
        getJspBody().invoke(ignoredWriter); // ignore body text

        PageContext pageContext = (PageContext) getJspContext();

        try {
            pageContext.forward(getRefinedName());
        } catch (ServletException e) {
            throw new RuntimeException(e.getMessage(), e);
        }
    }

    protected String getRefinedName() {
        ServletContext servletContext = ((PageContext) getJspContext()).getServletContext();
        String prefix = servletContext.getInitParameter(PREFIX_ATTR_NAME);
        String suffix = servletContext.getInitParameter(SUFFIX_ATTR_NAME);

        if (prefix == null) {
            prefix = "";
        }

        if (suffix == null) {
            suffix = "";
        }

        return prefix + name + suffix;
    }
}