const magick = require("../build/Release/image.node");
const { isMainThread, parentPort, workerData } = require("worker_threads");

exports.run = object => {
  return new Promise((resolve, reject) => {
    // If the image has a path, it must also have a type
    if (object.path) {
      if (object.type !== "image/gif" && object.onlyGIF) resolve({
        buffer: Buffer.alloc(0),
        fileExtension: "nogif"
      });
    }
    // Convert from a MIME type (e.g. "image/png") to something ImageMagick understands (e.g. "png").
    // Don't set `type` directly on the object we are passed as it will be read afterwards.
    // If no image type is given (say, the command generates its own image), make it a PNG.
    const fileExtension = object.type ? object.type.split("/")[1] : "png";
    const objectWithFixedType = Object.assign({}, object, {type: fileExtension});
    magick[object.cmd](objectWithFixedType, (error, data) => {
      if (error) reject(error);
      const returnObject = {
        buffer: data,
        fileExtension
      };
      resolve(returnObject);
    });
  });
};

if (!isMainThread) {
  this.run(workerData)
    .then(returnObject => {
      parentPort.postMessage(returnObject);
      process.exit();
      return;
    })
    .catch(err => {
      // turn promise rejection into normal error
      throw err;
    });
}
