# isFile

Single module to check if file is of a determined type, based on its MIME type

# Usage

```
isFile(fileobject).[VERIFIER_METHOD]
```
Check if `failObject` is an file of a specific type, returning `true` or `false`. 

## Available Verifier Methods

- .anImage()
- .anAudio()
- .aMP3()
- .aVideo()
- .aMP4()
- .multimedia()
- .aPDF()
- .aSpreadsheet()
