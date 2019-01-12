
let css = `  
    /*  
        面试官你好，我是XXX
        只用文字作做我介绍太单调了
        我就用代码来介绍吧
        首先准备一些样式
    */
  
   *  {
       box-sizing: border-box;
       transition: all 1s;
       color:lightslategrey;
    }
    body{
        display:flex;
        justify-content: space-between;
        background-color:rgb(28,34,32);
        margin:0;
        padding:20px;
    }
    
    #code{
        border:1px solid #ddd;
        height: 100%;
      
        animation: breath 0.5s infinite alternate-reverse;
    }

    /* 增加代码高亮 */

    .token.selector{ color: #690; }
    .token.property{ color: #905; }
   
    /* 简历 */

    #resume{
        background-color:white;
        flex:1;
        margin: 0 100px;      
        border-radius: 10px;
    }
    
`






function writeCss(css,fn) {
    let main = document.querySelector("#main")
    let domStyle = document.querySelector("#domStyle")
    let n = 0;
    var timer = setInterval(() => {
        n += 1;
        main.innerHTML = Prism.highlight(css.substring(0, n), Prism.languages.css, 'css');
        domStyle.textContent = css.substring(0, n)
        scrollTo(0,main.scrollHeight)

        console.log( main.scrollTop)
        if (n == css.length) {
            clearInterval(timer)
            fn(md,n);
        }

    }, 50);



}

var md = `
# 自我介绍
我叫 XXX
1990 年 1 月出生
XXX 学校毕业
自学前端半年
希望应聘前端开发岗位
# 技能介绍
熟悉 JavaScript CSS
# 项目介绍
- XXX 轮播
- XXX 简历
- XXX 画板

# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx

# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx

# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx

# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
`
let css3 = `
/*
 * 这就是我的会动的简历
 * 谢谢观看
 */
`



writeCss(css,()=>{
    createMarkdown(md,()=>{
        changeMarkdowntohtml(md);
    })
   
})



function createMarkdown(md,fn) {
    console.log("writeMarkdown")
    let pre = document.createElement("pre")
    document.querySelector('body').append(pre)
    pre.setAttribute("id", "resume")

    let n = 0;
    var timer = setInterval(() => {
        n += 1;
           resume.innerHTML = Prism.highlight(md.substring(0, n), Prism.languages.markdown);
           scrollTo(0,resume.scrollHeight)
        if (n == md.length) {
            clearInterval(timer)
            fn()
        }
    }, 50);
}



function changeMarkdowntohtml(md){
    console.log("changeMarkdowntohtml")
    let div = document.createElement("div")
    div.setAttribute("id", "resume")
    div.innerHTML = marked(md)
  
    let resume = document.querySelector("#resume")
    resume.replaceWith(div)
}