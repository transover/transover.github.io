'''
@ Project ：project Web/HTML 资源/主页
@ File    ：server_web.py
@ Author  ：yu hang
@ Date    ：2023/5/8 18:07 
@ Description : 在 server.py 文件中，编写 Python 代码来启动一个简单的 HTTP 服务器，并将请求路由到正确的处理程序
------------------------------------------------------------------------------------------------------------------------
    do_GET 方法用于处理 GET 请求。如果请求路径是根路径 /，则返回名为 index.html 的文件内容
    如果请求路径是 /python_script，则执行您的 Python 代码并将结果返回给客户端
------------------------------------------------------------------------------------------------------------------------
    在项目目录中，创建一个名为 index.html 的 HTML 文件。您可以在该文件中编写前端代码
    并使用 JavaScript 或 AJAX 请求 /python_script 路径以调用服务器上的 Python 代码
------------------------------------------------------------------------------------------------------------------------
    打开命令行，导航到项目目录，并运行 python server.py 命令来启动服务器。
    在浏览器中访问 http://localhost:8000，您应该可以看到一个网页，其中包含一个按钮，点击后
    JavaScript 代码将向服务器发送 GET 请求，并将服务器返回的 Python 代码执行结果显示在网页上
'''

from flask import Flask, request

app = Flask(__name__)


@app.route('/your_script_url', methods=['POST'])
def save_form_data():
    fname = request.form.get('fname')
    phone = request.form.get('phone')

    # 在这里将数据保存到本地文件或数据库
    print(fname,phone)

    return 'Data saved successfully'

if __name__ == '__main__':
    app.run()
