// JavaScript Document

let navBar;

const navStart = "<a class=\"navbar-brand\" href=\"#\">2KRN</a> <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"> <span class=\"navbar-toggler-icon\"></span> </button> <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\"> <div class=\"navbar-nav\"> ";

let navSearch = "<a class=\"nav-item nav-link\" href=\"../search\">Search</a> ";

let navWh = "<a class=\"nav-item nav-link\" href=\"../wholesome\">Wholesome Animu </a> ";

let navRead = "<a class=\"nav-item nav-link\" href=\"../read\">Read </a> ";

let navSecret = "<a class=\"nav-item nav-link\" href=\"../secret\">Shows for Brandon | Secret</a>";

let navPlex = "<a class=\"nav-item nav-link\" href=\"../plex\">Plex Schedule</a>"

let navOPEDDropDownStart = "<li class=\"nav-item dropdown\"> <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> OP/ED </a> <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\"> ";

let navDropDownItems = ["<a class=\"dropdown-item\" href=\"../mikakunin\">Engaged to the Unidentified</a> ", "<a class=\"dropdown-item\" href=\"../dropkick\">Gabriel Dropout</a> ", "<a class=\"dropdown-item\" href=\"../chuchuyeah\">Miss Kobayashi\'s Dragon Maid</a> ", "<a class=\"dropdown-item\" href=\"../kyutie\">Ms. vampire who lives in my neighborhood.</a> "];

const navOPEDDropDownEnd = "</div> </li> ";

const navEnd = "</div> </div>";

function createNav(){
	switch(document.title){
		case "Anime Search | 2KRN":
			navSearch = "<a class=\"nav-item nav-link active\" href=\"../search\">Search</a> ";
			break;
			
		case "Wholesome Animu | 2KRN":
			navWh = "<a class=\"nav-item nav-link active\" href=\"../wholesome\">Wholesome Animu </a> ";
			break;
			
		case "Read | 2KRN":
			navRead = "<a class=\"nav-item nav-link active\" href=\"../read\">Read </a> ";
			break;

		case "Plex Schedule | 2KRN":
			navPlex = "<a class=\"nav-item nav-link active\" href=\"../plex\">Plex Schedule</a>";
			break;
			
		case "Shows for Brandon | Secret":
			navSecret = "<a class=\"nav-item nav-link active\" href=\"../secret\">Shows for Brandon | Secret</a>";
			break;
			
		case "Masshiro World | まっしろわーるど":
			navOPEDDropDownStart = "<li class=\"nav-item dropdown\"> <a class=\"nav-link dropdown-toggle active\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> OP/ED </a> <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\"> ";
			navDropDownItems[0] = "<a class=\"dropdown-item active\" href=\"../mikakunin\">Engaged to the Unidentified</a> ";
			break;
			
		case "Gabriel DropKick | ガヴリールドロップキック":
			navOPEDDropDownStart = "<li class=\"nav-item dropdown\"> <a class=\"nav-link dropdown-toggle active\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> OP/ED </a> <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\"> ";
			navDropDownItems[1] = "<a class=\"dropdown-item active\" href=\"../dropkick\">Gabriel Dropout</a> ";
			break;
			
		case "Aozora no Rhapsody | 青空のラプソディ":
			navOPEDDropDownStart = "<li class=\"nav-item dropdown\"> <a class=\"nav-link dropdown-toggle active\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> OP/ED </a> <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\"> ";
			navDropDownItems[2] = "<a class=\"dropdown-item active\" href=\"../chuchuyeah\">Miss Kobayashi\'s Dragon Maid</a> ";
			break;
			
		case "†Kyutie Ladies† | †吸tie Ladies†":
			navOPEDDropDownStart = "<li class=\"nav-item dropdown\"> <a class=\"nav-link dropdown-toggle active\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> OP/ED </a> <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\"> ";
			navDropDownItems[3] = "<a class=\"dropdown-item active\" href=\"../kyutie\">Ms. vampire who lives in my neighborhood.</a> ";
			break;
		
	}
	if (document.title == "Shows for Brandon | Secret"){
		navBar = navStart + navSearch + navWh + navRead + navPlex + navSecret + navOPEDDropDownStart;
	} else {
		navBar = navStart + navSearch + navWh + navRead + navPlex + navOPEDDropDownStart;
	}

	for (let i = 0; i < navDropDownItems.length; i++){
		navBar += navDropDownItems[i];
	}
	navBar += navOPEDDropDownEnd + navEnd;
	
	document.getElementById("navbar").innerHTML = navBar;
	
	
}

$(function() {
    createNav();
});


/*
<a class="navbar-brand" href="#">2KRN</a>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
               <a class="nav-item nav-link" href="../search">Search</a>
               <a class="nav-item nav-link" href="../wholesome">Wholesome Animu </a>
               <a class="nav-item nav-link" href="../read">Read </a>
               <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          OP/ED
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="../mikakunin">Engaged to the Unidentified</a>
          <a class="dropdown-item" href="../dropkick">Gabriel Dropout</a>
          <a class="dropdown-item" href="../chuchuyeah">Miss Kobayashi's Dragon Maid</a>
          <a class="dropdown-item" href="../kyutie">Ms. vampire who lives in my neighborhood.</a>
        </div>
      </li>
            </div>
         </div>
*/

/*
<a class=\"navbar-brand\" href=\"#\">2KRN</a> <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"> <span class=\"navbar-toggler-icon\"></span> </button> <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\"> <div class=\"navbar-nav\"> <a class=\"nav-item nav-link\" href=\"../search\">Search</a> <a class=\"nav-item nav-link\" href=\"../wholesome\">Wholesome Animu </a> <a class=\"nav-item nav-link\" href=\"../read\">Read </a> <li class=\"nav-item dropdown\"> <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> OP/ED </a> <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\"> <a class=\"dropdown-item\" href=\"../mikakunin\">Engaged to the Unidentified</a> <a class=\"dropdown-item\" href=\"../dropkick\">Gabriel Dropout</a> <a class=\"dropdown-item\" href=\"../chuchuyeah\">Miss Kobayashi\'s Dragon Maid</a> <a class=\"dropdown-item\" href=\"../kyutie\">Ms. vampire who lives in my neighborhood.</a> </div> </li> </div> </div>
*/
