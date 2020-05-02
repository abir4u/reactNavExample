import { createBrowserHistory as History } from "history";

export const NavigateTo = page => {
  History().push(page);
  History().go(0);
};

export default History();
