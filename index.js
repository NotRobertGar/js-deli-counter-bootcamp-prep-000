var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {

katzDeliLine.push (`${name}`);
return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
}

function nowServing(katzDeliLine){
  for (var i = 0; i < katzDeliLine.length; i++)
  if (katzDeliLine.length > 0){
    return (`Currently serving ${katzDeliLine.shift()}.`);
  }
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  }
  if (katzDeliLine.length > 0 ){
  for (var i = 0; i < katzDeliLine.length; i++){
    line.push([i+1] + '. ' + katzDeliLine[i]);
  }
  return ("The line is currently " + line);
}

}


function currentLine(katzDeliLine){
  // if line is empty, announce line is empty
  if (katzDeliLine.length === 0){
    return "The line is currently empty.";
  } else {
    var current_line = [];
    for (var i = 0; i<katzDeliLine.length; i++){
      current_line.push((i+1)+". "+katzDeliLine[i]);
    }
    return "The line is currently: " + current_line.join(", ");
  }
