const console = {
  timeStart: timeStartConsole(timeStartMessage),
  timeEnd: timeEndConsole(timeEndMessage),
}

function timeStartConsole(timeStartMessage) {
  console.time(timeStartMessage);
}

function timeEndConsole(timeEndMessage) {
  console.timeEnd(timeEndMessage);
}
