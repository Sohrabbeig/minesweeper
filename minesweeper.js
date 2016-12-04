
function page_initialization() {

    //start of Enter name section
    var modal = document.createElement("div");
    modal.setAttribute("class","modal");
    modal.setAttribute("id","alert-modal");
    document.body.appendChild(modal);

    var modal_content = document.createElement("div");//the white box
    modal_content.setAttribute("class", "modal-content");
    modal_content.style.backgroundColor = "white";
    modal_content.style.width = "40%";
    modal_content.style.margin = "auto";
    modal_content.style.marginTop = "20px";
    modal_content.style.padding = "20px";
    modal_content.style.boxShadow = "1px 1px 5px 0px #888";
    modal.appendChild(modal_content);

    var name_box = document.createElement("input");// the Enter name text box
    name_box.setAttribute("type", "text");
    name_box.setAttribute("id", "name");
    name_box.setAttribute("class", "field");
    name_box.setAttribute("placeholder", "Enter your name");
    name_box.style.border = "1px dashed grey";
    modal_content.appendChild(name_box);

    var button = document.createElement("button"); // the OK button
    button.innerHTML = "OK";
    button.style.marginLeft = "10px";
    modal_content.appendChild(button);
    //End of Enter name section

    //pop up section
    var popup = document.createElement("div");
    popup.setAttribute("id", "myModal");
    popup.setAttribute("class", "popup");
    document.body.appendChild(popup);

    var popup_content = document.createElement("div");
    popup_content.setAttribute("class", "popup-content");
    popup.appendChild(popup_content);

    var close = document.createElement("span");
    close.innerHTML = "&times;";
    close.setAttribute("class", "close");
    popup_content.appendChild(close);

    var form = document.createElement("form");
    form.setAttribute("id", "newGameForm");
    popup_content.appendChild(form);

    var fieldset = document.createElement("fieldset");
    fieldset.setAttribute("id", "newGameFieldset");
    form.appendChild(fieldset);

    var legend = document.createElement("legend");
    legend.innerHTML = "NEW GAME!"
    legend.setAttribute("id", "newGameLegend");
    fieldset.appendChild(legend);

    var p = document.createElement("p");
    p.innerHTML = "which one do you choose:";
    fieldset.appendChild(p);

    var radiobutton1 = document.createElement("input");
    radiobutton1.setAttribute("id", "radio1");
    radiobutton1.setAttribute("type", "radio");
    radiobutton1.setAttribute("name", "newGame");
    radiobutton1.setAttribute("value", "1");
    fieldset.appendChild(radiobutton1);

    var p = document.createElement("p");
    p.innerHTML = "Beginner! 3*3 <br>";
    p.style.display = "inline";
    fieldset.appendChild(p);

    var radiobutton2 = document.createElement("input");
    radiobutton2.setAttribute("id", "radio2");
    radiobutton2.setAttribute("type", "radio");
    radiobutton2.setAttribute("name", "newGame");
    radiobutton2.setAttribute("value", "2");
    fieldset.appendChild(radiobutton2);

    var p = document.createElement("p");
    p.innerHTML = "Hard! 10*10 <br>";
    p.style.display = "inline";
    fieldset.appendChild(p);

    var submit = document.createElement("input");
    submit.setAttribute("type", "button");
    submit.setAttribute("value", "submit");
    fieldset.appendChild(submit);

    var beginner = "<request>" +
        " <rows>3</rows>" +
        " <cols>3</cols>" +
        "<mines>3</mines>" +
        "</request>";

    var hard = "<request>"+
        "<rows>9</rows>"+
        "<cols>9</cols>"+
        "<mines>10</mines>"+
        "</request>";

    submit.onclick = function () {
        if (document.getElementById("radio1").checked)requestLevel(parse(beginner));
        else requestLevel(parse(hard));
    }
    //pop up section

    //start of Window section
    var window = document.createElement("div"); //the minesweeper game window
    window.setAttribute("class", "window");
    document.body.appendChild(window);

    var title_bar = document.createElement("div");//the title bar of the window
    title_bar.setAttribute("class", "title-bar");
    window.appendChild(title_bar);

    var game_title = document.createElement("span");//the title of the game
    game_title.setAttribute("id", "game-title");
    game_title.innerHTML = "Minesweeper Online - Beginner!";
    title_bar.appendChild(game_title);

    var right_corner_div = document.createElement("div");// right corner buttons
    title_bar.appendChild(right_corner_div);

    var btn_minimize = document.createElement("span");//the minimize button
    btn_minimize.setAttribute("class", "btn");
    btn_minimize.setAttribute("id", "btn-minimize");
    btn_minimize.innerHTML = "-";
    right_corner_div.appendChild(btn_minimize);

    var btn_close = document.createElement("span");//the close button
    btn_close.setAttribute("class", "btn");
    btn_close.setAttribute("id", "btn-close");
    btn_close.style.marginLeft = "3px";
    btn_close.innerHTML = "&times;";
    right_corner_div.appendChild(btn_close);

    var top = document.createElement("div");//top of window div, underneath the title bar
    top.setAttribute("class", "top");
    window.appendChild(top);

    var counter1 = document.createElement("span");//counter1 in the top section
    counter1.setAttribute("class", "counter");
    counter1.innerHTML = 123;
    top.appendChild(counter1);

    var smile = document.createElement("button");//the smile emoji in the top section
    smile.setAttribute("class", "smile");
    smile.setAttribute("data-value", "normal");
    top.appendChild(smile);

    var counter2 = document.createElement("span");//counter2 in the top section
    counter2.setAttribute("class", "counter");
    counter2.innerHTML = 321;
    top.appendChild(counter2);


}

function parse(xml_str) {
    var parser = new DOMParser();
    var xmlDOM = parser.parseFromString(xml_str, "text/xml");
    return xmlDOM;
}

function validate(xmlDOM) {
    var id = xmlDOM.getElementsByTagName("game")[0].getAttribute("id");
    if (id == "minesweeper") return true;
    else return false;
}

var xml_str = '<game id="minesweeper" title="Minesweeper Online"><levels default="1"> <level id="1" title="Beginner!" timer="false"> <rows>3</rows> <cols>3</cols> <mines>3</mines> <time>0</time> </level> <level id="2" title="Harder!" timer="true"> <rows>10</rows> <cols>10</cols> <mines>5</mines> <time>120</time> </level> </levels></game>'
var game_spec;


function getGameXML(xmlDOM) {
    if (!validate(xmlDOM)){
        window.alert("the xml is not valid!");
    }
    game_spec = {
        game_title:xmlDOM.getElementsByTagName("game")[0].attributes.getNamedItem("title").value,
        game_id:xmlDOM.getElementsByTagName("game")[0].attributes.getNamedItem("id").value,
        default_level:xmlDOM.getElementsByTagName("levels")[0].attributes.getNamedItem("default").value,
        levels: []
    }
    var l = xmlDOM.getElementsByTagName("level");
    for (var i = 0; i < l.length; i++) {
        var level = {};
        level.id = l[i].attributes.getNamedItem("id");
        level.title = l[i].attributes.getNamedItem("title");
        level.timer = l[i].attributes.getNamedItem("timer");
        level.rows = l[i].getElementsByTagName("rows")[0].childNodes[0].nodeValue;
        level.cols = l[i].getElementsByTagName("cols")[0].childNodes[0].nodeValue;
        level.mines = l[i].getElementsByTagName("mines")[0].childNodes[0].nodeValue;
        level.time = l[i].getElementsByTagName("time")[0].childNodes[0].nodeValue;
        game_spec.levels.push(level);
    }
}

function _rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getNewGame() {
    popup.style.display = "block";
}

function requestLevel(newGameDOM) {
    popup.style.display = "none";
    // Initialize empty game
    var game = [];
    var rows = newGameDOM.getElementsByTagName("rows")[0].childNodes[0].nodeValue;
    var cols = newGameDOM.getElementsByTagName("cols")[0].childNodes[0].nodeValue;
    var mines = newGameDOM.getElementsByTagName("mines")[0].childNodes[0].nodeValue;
    for (var r = 0; r <rows; r++) {
        var row = [];
        for (var c = 0; c <cols; c++)
            row.push(undefined);
        game.push(row);
    }

    // Randomly place mines
    for (var i = 0; i < mines; i++) {
        var x, y;
        do {
            x = _rand(0, cols-1);
            y = _rand(0, rows-1);
        } while (game[x][y] !== undefined);
        game[x][y] = true;
    }

    var levelXML = '<grid>';
    for (var r = 0; r < rows; r++) {
        levelXML += '<row row="${r + 1}">';
        for (var c = 0; c < cols; c++) {

            levelXML += `<col col="${c + 1}" ${game[r][c]===true ? 'mine="true"' : ''} />`;
        }
        levelXML += '</row>';
    }
    levelXML += '</grid>';
    newGame(parse(levelXML));
}

function makeXSL() {

    var xml=`<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:template match="/">
    <div class="grid">
    <xsl:for-each select="/grid/row">
        <xsl:for-each select="./col">
            <span></span>
        </xsl:for-each>
    </xsl:for-each>
    </div>
</xsl:template>
</xsl:stylesheet>`;
    return new DOMParser().parseFromString(xml,"text/xml")
}

function newGame(levelXML) {
    var xsltProcessor = new XSLTProcessor();
    xsltProcessor.importStylesheet(makeXSL());
    var resultDocument = xsltProcessor.transformToFragment(levelXML,document);
    // console.log(resultDocument.getElementsByTagName("span").length);
    document.getElementsByClassName('window')[0].appendChild(resultDocument);
}

page_initialization();// initializing the page
getGameXML(parse(xml_str));

var popup = document.getElementById("myModal");
var close = document.getElementsByClassName("close")[0];
document.onload = getNewGame();
//noinspection BadExpressionStatementJS
var smile = document.getElementsByClassName("smile")[0];
smile.onclick = function() {
    popup.style.display = "block";
}

close.onclick = function() {
    popup.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}

