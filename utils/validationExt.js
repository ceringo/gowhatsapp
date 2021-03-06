const { IMAGE, VIDEO,AUDIO,PDF, DOCUMENT } = require("./constant");

const image = [ '.jpg', '.png', '.jpeg' ];
const video = [ '.mp4', '.avi' ];
const audio = [ '.mp3', '.wav' ];
const pdf = [ '.pdf'];


const getExtension = ( string ) => {
    let extension = _findExtension(string);
    if(image.includes(extension)) return IMAGE;
    if(video.includes(extension)) return VIDEO;
      if(audio.includes(extension)) return AUDIO;
      if(pdf.includes(extension)) return PDF;
    return DOCUMENT;
};

const _findExtension = ( string ) => {
    let extension;
    let lastIndex = string.lastIndexOf('.');
    extension = string.substring(lastIndex, string.length);
    return extension;
};

exports.getExtension = getExtension;