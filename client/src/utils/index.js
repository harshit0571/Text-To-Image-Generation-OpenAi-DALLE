import surpriseMePrompts from "../constants";
import FileSaver from "file-saver";

export function getRandomPrompt(prompt) {
  const RandomIndex = Math.floor(Math.random() * surpriseMePrompts.lenght);
  const RandomPrompt = surpriseMePrompts[RandomIndex];
  if (RandomPrompt === prompt) {
    return getRandomPrompt(prompt);
  }
  return RandomPrompt;
}

export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}
