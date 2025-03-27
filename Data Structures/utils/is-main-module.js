import { pathToFileURL } from 'url';

export const isMainModule = (importMetaUrl) => {
  const mainModuleUrl = pathToFileURL(process.argv[1]).href;
  return importMetaUrl === mainModuleUrl;
};
