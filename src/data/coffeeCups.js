//I tried to do bonus part two ways: 1) creating the function minutesToRead inside Article 2) writing the function minutesToRead here and impmport/export from coffeeCups.js file

export function minutesToRead(minutes) {
  //If the article takes less than 30 minutes to read
  //for every 5 min(rounded up),display a coffee cup emoji "☕️ 3 min read"
  if (minutes < 30) {
    const coffeeCups = Math.round(minutes / 5);
    return ` • ${"☕️".repeat(coffeeCups)} ${minutes} min read`;
  } else {
    const bentoEmoji = Math.round(minutes / 10);
    return ` • ${"🍱".repeat(bentoEmoji)} ${minutes} min read`;
  }
}
