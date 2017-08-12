package org.apache.jsp.WEB_002dINF.jsp;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class register_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List<String> _jspx_dependants;

  private org.glassfish.jsp.api.ResourceInjector _jspx_resourceInjector;

  public java.util.List<String> getDependants() {
    return _jspx_dependants;
  }

  public void _jspService(HttpServletRequest request, HttpServletResponse response)
        throws java.io.IOException, ServletException {

    PageContext pageContext = null;
    HttpSession session = null;
    ServletContext application = null;
    ServletConfig config = null;
    JspWriter out = null;
    Object page = this;
    JspWriter _jspx_out = null;
    PageContext _jspx_page_context = null;

    try {
      response.setContentType("text/html; charset=utf-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;
      _jspx_resourceInjector = (org.glassfish.jsp.api.ResourceInjector) application.getAttribute("com.sun.appserv.jsp.resource.injector");

      out.write('\n');
      out.write('\n');

    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";

      out.write('\n');
      out.write('\n');
      out.write("\n");
      out.write("<html>\n");
      out.write("<head>\n");
      out.write("    <title>注册</title>\n");
      out.write("    <script Charset=\"utf-8\" type=\"text/javascript\" src=\"http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js\"></script>\n");
      out.write("    <script Charset=\"utf-8\" type=\"text/javascript\" src=\"js/register.js\"></script>\n");
      out.write("</head>\n");
      out.write("<body>\n");
      out.write("<form id=\"test-register\" method=\"post\" action=\"#\" onsubmit=\"return register()\">\n");
      out.write("    <p>\n");
      out.write("        用户名：<input type=\"text\", id=\"username\", name=\"username\">\n");
      out.write("    </p>\n");
      out.write("\n");
      out.write("    <p>\n");
      out.write("        口令：<input type=\"password\", id=\"password1\", name=\"password1\">\n");
      out.write("    </p>\n");
      out.write("    <p>\n");
      out.write("        重复口令：<input type=\"password\", id=\"password2\", name=\"password2\">\n");
      out.write("    </p>\n");
      out.write("    <p>\n");
      out.write("        <button id=\"submit\">提交</button> <button id=\"reset\">重置</button>\n");
      out.write("\n");
      out.write("    </p>\n");
      out.write("\n");
      out.write("</form>\n");
      out.write("\n");
      out.write("</body>\n");
      out.write("</html>\n");
    } catch (Throwable t) {
      if (!(t instanceof SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          out.clearBuffer();
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
