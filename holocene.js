//This file finds dates BCE and appends the year in HE.

//This Regex matches numbers or commas followed by "BC", or something like it.
let re = /(\d|,)+ *(BCE|BC|Before Christ|Before Common Era)/;

//This function manipulates the text.
function dateManip (str) {
	//Expecting number, possibly with commas, followed by some text.
	//let date = "";

	//for(i = 0; i < str.length; ++i)
}

//This is the main function that finds years and appends HE dates.
function addDates (node) {
	//Check if node contains only text
	if(node.nodeType === Node.TEXT_NODE){

		//Skip textarea nodes
		if(node.parentNode &&
		   node.parentNode.nodeName === 'TEXTAREA'){
			return;
		}

		//Make a copy of the text content of the node
		let content = node.textContent;

		//Replace everything that matches re with itself
		//plus the HE year
		content = content.replace(re, dateManip(re))

		//Actually change webpage
		node.textContent = content;
	}
	else {
		//Node contains more than just text; recurse on children.
		for(let i = 0; i < node.childNodes.length; i++){
			addDates(node.childNodes[i]);
		}
	}
}

addDates(document.body);
