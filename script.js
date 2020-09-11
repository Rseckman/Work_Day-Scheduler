
var timeBlocks = new Array(9);
var timestamp = moment() // we need this to color code our events
console.log(timestamp.format('HH') - 9);
function createEventElement(i, text) {
    const TIME_OFFSET = 9;
    var currentTime = timestamp.format('HH');

    var time = i + TIME_OFFSET;
    var timeBlockDiv = $("<div>");
    var timeTag = $("<div>");
    var textArea = $("<textarea>");
    var buttonSave = $("<button>");
    
    timeBlockDiv.attr("class", "row my-2 time-block");
    timeTag.attr("class", "hour col-1");
    
    if (time > 12) {
        
        timeTag.text((time - 12) + 'pm');
      }
      else if (time === 12) {
        timeTag.text(time + 'pm');
      }
      else { // time is am
        timeTag.text(time + 'am');
      }
    
    textArea.attr("class", "form-control textarea col-10");
    textArea.attr("id", "event-item-" + i);
    textArea.text(text);

    if (time < currentTime) {
        textArea.addClass("past");
        textArea.css("color", "black");

    } else if(time > currentTime) {
            textArea.addClass("future");

    } else {
        textArea.addClass("present");
    };
        
    buttonSave.attr("class", "saveBtn col-1 bg-info rounded-right border-info")
    buttonSave.text("Save");
    buttonSave.click(function() {
        timeBlocks[i] = $(textArea).val();
        localStorage.setItem('timeBlocks', JSON.stringify(timeBlocks)); // insertion 
    });

    timeBlockDiv.append(timeTag, textArea, buttonSave);
    
    return timeBlockDiv;
}

$(function(){
    
    var calendarEle = $('#calendar');

    $("#currentDay").text(timestamp.format("MMM Do YY"));

    timeBlocks = JSON.parse(localStorage.getItem('timeBlocks')); // fetching data

    if (timeBlocks === null) {
        timeBlocks = new Array(9);
    }

    for (var i=0; i < timeBlocks.length; i++) {
        var eventText = timeBlocks[i];

        var eventElement = createEventElement(i, eventText); // timeBlockDiv
        calendarEle.append(eventElement);

    }

});


