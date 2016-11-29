// Test Funcs
// See Inspect Element's Console Log Output
function page_initialization() {
    //start of Enter name section
    var modal = document.createElement("div");
    modal.setAttribute("class","modal");
    modal.setAttribute("id","alert-modal");
    document.body.appendChild(modal);
    var modal_content = document.createElement("div");
    modal_content.setAttribute("id", "modal-content");
    modal_content.style.backgroundColor = "white";
    modal_content.style.width = "40%";
    modal_content.style.margin = "auto";
    modal_content.style.marginTop = "20px";
    modal_content.style.padding = "20px";
    modal_content.style.boxShadow = "1px 1px 5px 0px #888";
    document.getElementById("alert-modal").appendChild(modal_content);
    var name_box = document.createElement("input");
    name_box.setAttribute("type", "text");
    name_box.setAttribute("id", "name");
    name_box.setAttribute("class", "field");
    name_box.setAttribute("placeholder", "Enter your name");
    name_box.style.border = "1px dashed grey";
    document.getElementById("modal-content").appendChild(name_box);
    var button = document.createElement("button");
    button.innerHTML = "OK";
    button.style.marginLeft = "10px";
    document.getElementById("modal-content").appendChild(button);
    //End of Enter name section
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