import Tesseract from 'tesseract.js';

export const parseImageText = async (file) => {
  const { data } = await Tesseract.recognize(
    file,
    'eng',
    { logger: m => console.log(m) }
  );
  return data.text;
};
