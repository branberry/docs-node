const SITES: Record<string, string> = {
  "kubernetes-operator": "docs-k8s-operator",
};

const HOST_PATTERN = /^\/docs\/([^\/]+)\/([^\/]+)(.+)/;
const NOT_FOUND_URL = new URL("https://www.mongodb.com/docs/404/");

export default async (req: Request): Promise<Response> => {
  const requestUrl = new URL(req.url);

  // Look at the request path and deduce what host we want to route to
  const match = requestUrl.pathname.match(HOST_PATTERN);
  if (match === null) {
    console.error(`Error with url: ${req.url}: Not fully qualified`);
    return fetch(NOT_FOUND_URL);
  }
  const [_, sitename, siteversion, newpath] = match;


  console.log(newpath)
  // Construct a new URL to return
  const hostname = `${siteversion}--docs-node-branfork.netlify.app`;
  const url = new URL(`https://${hostname}`);

  return fetch(url);
};