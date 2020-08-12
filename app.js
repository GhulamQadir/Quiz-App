var input = document.getElementById('input');
function startquiz(){
if(input.value == ""){
    alert('Username Required!')
}else{
    input.remove()
    var a = document.getElementById('startBtn').remove() 
    c = 1200;
    renderQuestion()  
}           
}
    
var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, chD, correct=0;

var questions = [
    ["What does HTML stand for?"," Hyper Text Mail Links"," Hyper Text Markup Language"," Hand Text Mail Language"," Hand Tool Markup Language","B"],
    ["Which tag is used for starting the body of HTML?"," <'body> "," <'b> "," <'bold> "," <'br> ","A"],
    ["Choose the correct HTML element for largest heading"," <'heading> "," <'h4> "," <'head> "," <'h1> ","D"],
    ["Choose the correct HTML element for starting the paragraph"," <'para> "," <'paragraph> "," <'p> "," <'pg> ","C"],
    ["Choose the correct HTML element for bold the text"," <'b> "," <'bold> "," <'bd> "," <'BOLD> ","A"],
    ["Choose the correct HTML element for breaking the line"," <'/br> "," <'br /> "," <'break> "," <'b> ","B"],
    ["Choose the correct HTML element for emphasized the text"," <'emphasized> "," <'emp> "," <'em> "," <'e> ","D"],
    ["Select the correct HTML element for adding horizontal rule between sections"," <'strong> "," <'break> "," <'hr /> "," <'horizontal> ","C"],
    ["If you want to copy some text or something from other website and display it on your page.How you inform the owner of that website.Select the correct element. "," <'I copy the content from your website'> "," <'blockquote cite='citeaddress.com'> "," <'blockquote> "," <'copyright> ","C"],
    ["How can you define an important text in HTML?Select the correct Html element"," <'important> "," <'bold> "," <'i> "," <'strong> ","D"],
    ["Which tag is used for displaying the full form of the word"," <'abbr> "," <'fullform> "," <'acron> "," <'abbr---> ","A"],
    ["How can you make a numbered list?Select the correct element."," <'numlist> "," <'list> "," <'ol> "," <'dl> ","C"],
    ["How can you make a bulleted list?Select the correct element."," <'bl> "," <'ol> "," <'ul> "," <'li> ","B"],
    ["<'dt> element is used for"," containing a definition"," containing a definition term"," containing a series of definitions and their terms"," None of the above","B"],
    ["Putting a second list inside an li element then what we call that list"," sub list or nested list "," unordered list "," definition list "," bulleted list ","A"],
    ["How to add a background color in HTML"," <'backgroundcolor-'black'> "," 'bgcolor='#FF00FF' "," <'background>"," None of the above","B"],
    ["Which character is used to indicate an end tag?"," ' < ' "," ' / ' "," ' &' "," ' $' ","B"],
    ["What is the correct HTML for creating a hyperlink"," <'a href='http://www.google.com'>Google <'/a>"," <'a src='http://www.google.com'>Google <'/a>"," <'link='http://www.google.com'>Google<'/link>"," <'href='http://www.google.com'>Google/>","A"],
    ["How to open the link in a new browser window or tab? Select the correct attribute",' tab="new"',' target="_blank"',' "newTab"'," None of the above","B"],
    ["Which HTML element used in the date 24<sup>th</sup> of Decemeber"," <'upper>"," <'bold>"," <'sub>"," <'sup>","D"],
    ["Which syntax is used for setting the image on your web page?"," <'img href='bike.jpeg' />"," <'img address='bike.jpeg' />"," <'img src='bike.jpeg' />"," <'img='bike.jpeg' />","C"],
    ["How to control the height and width of image in HTML? Select the attributes."," height;'400px',width;'400px'",' height="" width=""'," h='',w=''"," None of the above","B"],
    ["What does <'figcaption'> element works?"," to add a caption to an image"," to contain images between caption"," to add more than one image on your page"," to remove images from the locked file","A"],
    ["Which attribute is used for spanning the columns?",' colspan=""',' spancolumn=""',' rowspan=""',' column: ""',"A"],
    ["Which of these elements are all table elements?"," <'table> <'tr> <'body>"," <'table> <'tr> <'th> <'tablehead>"," <'table> <'tr> <'th> <'td> <'tfoot>"," None of the above","C"],
    ["What does the work of <'th'> element? Select the correct option."," to represent the heading"," to represent the data"," to break the line in the table"," to contain a column in the table","A"],
    ["What is the correct HTML for making a radio button? Select the correct option"," <'input type='button'>"," <'input type='checkbox'>"," <'Radio button>",' None of the above',"D"],
    ['<input type="url"value="https://calculator-f9ec5.web.app/"> Which input type is used in this input field?',' "text"',' "checkbox"',' "url"',' "password"',"C"],
    ["Which elment is used for making a dropdown list box?","<'drop>","<'select>","<'option>","<'name>","B"],
    ["What does the work of <'legend> element in HTML?"," to get the information from the user about what he/she wants to change in this form"," to change something in form"," to remove the form from your web page"," to contain a caption which helps identify the purpose of that group of form controls","D"],
    ["Which attribute is used for making the form validation",' must="must"',' submit="submit"',' necessary="necessary"',' required="required"',"D"],
    ["Which syntax is used for comment the code in HTML?"," '!*-- comment goes here--*!'"," '/*-- comment goes here --*/'"," '//comment goes here'"," <'!--comment goes here--'>","D"],
    ["Abbreviation of term iframe is.."," integrated frame"," inline frame"," internal frame"," None of the above","B"],
    ["What does the work of <'span> element?"," contain a section of text where there is no other suitable element to differentiate it from its surrounding text"," contain a white space between text from which where you want"," group a set of elements together in one block-level box"," None of the above","A"],
    ["Which of these all elements are inline elements?"," <'b> <'em> <'h4> <'li>"," <'p> <'abbr> <'strong> <'blockquote>"," <'i> <'br /> <'q> <cite>"," None of the above","C"],
]


function _(x){
    return document.getElementById(x)
}
function renderQuestion(){
    
    test = _("test");
    if(pos >= questions.length){
        test.innerHTML = "<br><h2>You got " + correct + " of " + questions.length + " questions correct</h2>";
        _test_status.innerHTML = "Test completed"
        pos = 0;
        correct = 0;
        return false;
    }
    _("test_status").innerHTML = "Question " + (pos+1) + " <span class='ofGreen'>of</span> " + questions.length;
    question = questions[pos][0];
    chA = questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];
    chD = questions[pos][4];
    test.innerHTML = "<h3>" + question + "</h3>";
    test.innerHTML += "<input name='choices' type='radio'value='A'>" + chA + "<br>";
    test.innerHTML += "<input name='choices' type='radio'value='B'>" + chB + "<br>";
    test.innerHTML += "<input name='choices' type='radio'value='C'>" + chC + "<br>";
    test.innerHTML += "<input name='choices' type='radio'value='D'>" + chD + "<br>";
    test.innerHTML += "<button onclick='checkAnswer()'class='nxtBtn'>Next</button>";
}
function checkAnswer(){
    var choices = document.getElementsByName('choices');
    for(var i = 0;i < choices.length; i++){
        if(choices[i].checked){
         choice = choices[i].value
        }
    }
    if(choice == questions[pos][5]){
        alert('Correct Answer!!')
        correct++;
     }
    pos++;
    renderQuestion()
}

function setTimer(){
    c = c-1;
    if(c < 1200){
   timer.innerHTML = c;
    }
    if(c < 1){
        window.clearInterval(update);  
        test.innerHTML = "<center><h1>Time's Up</h1><br><h2>You got " + correct + " of " + questions.length + " questions correct</h2></center>";
        _test_status.innerHTML = "Test completed"
        pos = 0;
        correct = 0;
        return false;
    } 
}
update =  setInterval('setTimer()',1000)