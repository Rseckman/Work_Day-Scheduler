# Work_Day-Scheduler

1. On Page load, check if the local storage object exists and if it does, load from it
2. Finish off the HTML rendering logic
3. Add in event handler to the event textarea
4. use `moment.js` to see the current hour. You'll want this in military time. subtract 9 hours to line up w the indexes of `timeBlocks`
    1. that will tell you which event hours are past, present, future.