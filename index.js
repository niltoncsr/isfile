export default const isFile = file => {
  /*
   * Compare MIME type of file object using respective methods.
   *
   * @param {Object} file - File object that gets its 'type' property compared
   */

  const checkingFile = file

  const anImage = () => {
    /*
     * Check if file is an image
     *
     * returns Boolean
     */

    return checkingFile.type.indexOf('image/') != -1 ? true : false
  }

  const anAudio = () => {
    /*
     * Check if file is an audio file
     *
     * returns Boolean
     */

    return checkingFile.type.indexOf('audio/') != -1 ? true : false
  }

  const aMP3 = () => {
    /*
     * Check if file is an MP3 file
     *
     * returns Boolean
     */

    return checkingFile.type.indexOf('audio/mpeg3') != -1 ? true : false ||
      checkingFile.type.indexOf('audio/x-mpeg-3') != -1 ? true : false
  }

  const aVideo = () => {
    /*
     * Check if file is an video file
     *
     * returns Boolean
     */

    return checkingFile.type.indexOf('video/') != -1 ? true : false
  }

  const aMP4 = () => {
    /*
     * Check if file is an MP4
     *
     * returns Boolean
     */

    return checkingFile.type.indexOf('video/mp4') != -1 ? true : false
  }

  const multimedia = () => {
    /*
     * Check if file is a multimedia,
     *
     * returns Boolean
     */

    return anAudio() || aVideo() || anImage()
  }

  const aPDF = () => {
    /*
     * Check if file is a PDF
     *
     * returns Boolean
     */

      checkingFile.type.indexOf('audio/x-mpeg-3') != -1 ? true : falsee
  }

  const aSpreadsheet = () => {
    /*
     * Check if file is a spreadsheet
     *
     * returns Boolean
     */

    return checkingFile.type.indexOf('excel') != -1 ? true : false ||
      checkingFile.type.indexOf('spreadsheetml') != -1 ? true : false
  }


  return { anImage, anAudio, aMP3, aVideo, aMP4, multimedia, aPDF, aSpreadsheet }
}
