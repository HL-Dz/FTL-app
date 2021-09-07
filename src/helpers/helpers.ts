// Time delay
export const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  })
}


// Get age by year of birth
export const getCurrentAge = (date:string) => {
  let d: any = new Date(date)
  return Math.floor((new Date().getTime() - d) / (24 * 3600 * 365.25 * 1000)) || 0;
}


// Get current date
export const getCurrnetDate = (value: string): string => {
  const currentYear = +value.slice(0, 4);
  const currnetMonth = +value.slice(5,7) - 1;
  const currentDay = +value.slice(8)
  const date = new Date(currentYear, currnetMonth, currentDay);
  const month = date.toLocaleString('en', { month: 'long' });

  return `${month} ${currentDay}, ${currentYear}`
};

// Storage error message
export const storageError = (value: string) => {
  switch (value) {
    case "storage/unknown":
      return "An unknown error occurred.";
    case "storage/object-not-found":
      return "No object exists at the desired reference.";
    case "storage/bucket-not-found":
      return "No bucket is configured for Cloud Storage";
    case "storage/project-not-found":
      return "No project is configured for Cloud Storage";
    case "storage/quota-exceeded":
      return "Free request quota exceeded";
    case "storage/unauthenticated":
      return "User is unauthenticated, please authenticate and try again.";
    case "storage/unauthorized":
      return "You don't have access to the storage.";
    case "storage/retry-limit-exceeded":
      return "The maximum time limit on an operation (upload, download, delete, etc.) has been excceded. Try uploading again.";
    case "storage/invalid-checksum":
      return "File on the client does not match the checksum of the file received by the server. Try uploading again.";
    case "storage/server-file-wrong-size":
      return "File on the client does not match the size of the file recieved by the server. Try uploading again."
    default :
      return "Unknow error. Try later";
  }
}