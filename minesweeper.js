
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

    var smile = document.createElement("span");//the smile emoji in the top section
    smile.setAttribute("class", "smile");
    smile.setAttribute("data-value", "normal");
    top.appendChild(smile);

    var counter2 = document.createElement("span");//counter2 in the top section
    counter2.setAttribute("class", "counter");
    counter2.innerHTML = 321;
    top.appendChild(counter2);

}

function getGameXML() {
    
}

page_initialization();
getGameXML();

// getNewGame(`
//     <request>
//     <rows>3</rows>
//     <cols>3</cols>
//     <mines>3</mines>
//     </request>
// `);