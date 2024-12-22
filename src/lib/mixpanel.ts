import mixpanel from "mixpanel-browser";

mixpanel.init("0667f700e0232aa0337fba4ac752ce6e", {
  ignore_dnt: true,
});

export { mixpanel };
