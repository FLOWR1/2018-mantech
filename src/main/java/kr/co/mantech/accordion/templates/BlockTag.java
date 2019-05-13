package kr.co.mantech.accordion.templates;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.PageContext;
import javax.servlet.jsp.tagext.SimpleTagSupport;
import java.io.IOException;

import static kr.co.mantech.accordion.templates.BlockTagUtils.*;


public class BlockTag extends SimpleTagSupport {
    public static final PutType DEFAULT_PUT_TYPE = PutType.APPEND;

    private String name;

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public void doTag() throws JspException, IOException {
        PageContext pageContext = (PageContext)getJspContext();

        PutType putType = getPutType(pageContext);

        String bodyResult = getBodyResult(getJspBody());
        String putContents = getPutContents(pageContext);

        putType.write(pageContext.getOut(), bodyResult, putContents);
    }

    private PutType getPutType(PageContext pageContext) {
        PutType putType = (PutType) pageContext.findAttribute(getBlockTypeAttributeName(name));
        if (putType == null) {
            return DEFAULT_PUT_TYPE;
        }
        return putType;
    }

    private String getPutContents(PageContext pageContext) {
        String putContents = (String) pageContext.findAttribute(getBlockContentsAttributeName(name));
        if (putContents == null) {
            return "";
        }
        return putContents;
    }
}